(function () {
    'use strict';
    const translations = window.pythonTranslations;
    const lessons = window.pythonLessons;
    const byId = id => document.getElementById(id);
    const elements = {
        brandTitle: byId('brand-title'), brandSubtitle: byId('brand-subtitle'),
        mobileMenuTitle: byId('mobile-menu-title'), statusBadge: byId('py-status'),
        statusText: byId('status-text'), navBar: byId('nav-bar'), mobileNav: byId('mobile-nav'),
        theoryView: byId('theory-view'), codeInput: byId('python-code'),
        consoleOutput: byId('console-output'), runButton: byId('run-btn'),
        errorDetails: byId('python-error-details'), errorText: byId('python-error-text'),
        stopButton: byId('stop-btn'), resetButton: byId('reset-btn'), retryButton: byId('retry-btn'),
        stdinPanel: byId('python-input-panel'), stdinLabel: byId('stdin-label'),
        stdinHelp: byId('stdin-help'), stdinInput: byId('python-stdin'),
        answerButton: byId('answer-btn'), answerDisplay: byId('ans-display'),
        answerTitle: byId('answerTitle'), answerText: byId('ans-text'),
        menu: byId('mobile-menu'), menuButton: byId('hamburger-btn'),
        menuClose: byId('mobile-menu-close'), backdrop: byId('mobile-backdrop')
    };

    // Keep the existing draft keys so previously written student work is retained.
    const draftPrefix = 'ai-bridge-python-draft-v1-';
    const memoryDrafts = new Map();
    // Input values stay in memory only, never in localStorage or a network request.
    const inputDrafts = new Map();
    const EXECUTION_LIMIT_MS = 10000;
    const LOAD_LIMIT_MS = 90000;
    let currentLang = 'ko';
    let currentLessonIndex = null;
    let pythonWorker = null;
    let workerGeneration = 0;
    let nextRunId = 0;
    let pendingRun = null;
    let runtimeState = 'loading';
    let runtimeIssue = '';
    let bootTimer = null;
    let toastTimer = null;
    let menuWasOpen = false;
    let menuReturnFocus = null;

    function getTextSet() { return translations[currentLang] || translations.ko; }
    function lessonText(lesson, key) {
        const values = lesson && lesson[key];
        return values && (values[currentLang] ?? values.ko) || '';
    }
    function safeRead(key) {
        try { return localStorage.getItem(key); } catch (_) { return null; }
    }
    function safeWrite(key, value) {
        try { localStorage.setItem(key, String(value)); } catch (_) { /* Memory remains usable. */ }
    }
    function readDraft(index) {
        if (memoryDrafts.has(index)) return memoryDrafts.get(index);
        const value = safeRead(draftPrefix + index);
        if (value !== null) memoryDrafts.set(index, value);
        return value;
    }
    function saveDraft() {
        if (currentLessonIndex === null) return;
        memoryDrafts.set(currentLessonIndex, elements.codeInput.value);
        safeWrite(draftPrefix + currentLessonIndex, elements.codeInput.value);
    }
    function saveEditedCode() {
        if (currentLessonIndex === null) return;
        if (readDraft(currentLessonIndex) !== null ||
            elements.codeInput.value !== lessonText(lessons[currentLessonIndex], 'initialCode')) saveDraft();
    }
    function clearDraft(index) {
        // A tombstone also protects reset if persistent storage rejects removal.
        memoryDrafts.set(index, null);
        try { localStorage.removeItem(draftPrefix + index); } catch (_) { /* Memory is already reset. */ }
    }
    function rememberInput() {
        if (currentLessonIndex === null) return;
        const sample = lessonText(lessons[currentLessonIndex], 'sampleInput');
        if (inputDrafts.has(currentLessonIndex) || elements.stdinInput.value !== sample) {
            inputDrafts.set(currentLessonIndex, elements.stdinInput.value);
        }
    }

    const mobileMenuController = window.initMobileMenu({
        button: elements.menuButton, menu: elements.menu,
        backdrop: elements.backdrop, breakpoint: 768
    });
    function syncMenu() {
        const open = elements.menu.classList.contains('open');
        elements.menu.inert = !open;
        elements.menu.setAttribute('aria-hidden', String(!open));
        elements.menu.setAttribute('aria-modal', String(open));
        elements.menuButton.setAttribute('aria-expanded', String(open));
        if (open && !menuWasOpen) {
            menuReturnFocus = document.activeElement;
            elements.menuClose.focus();
        } else if (!open && menuWasOpen) {
            const target = menuReturnFocus && menuReturnFocus.isConnected ? menuReturnFocus : elements.menuButton;
            if (window.innerWidth <= 768) target.focus();
            else {
                const current = elements.navBar.querySelector('[aria-current="step"]');
                if (current) current.focus();
            }
        }
        menuWasOpen = open;
    }
    function closeMenu() {
        mobileMenuController.closeMenu();
        syncMenu();
    }

    // Keep expected output as a small, collapsed reference beside the original console.
    const expectedPanel = document.createElement('details');
    expectedPanel.className = 'python-expected';
    expectedPanel.id = 'python-expected';
    const expectedSummary = document.createElement('summary');
    const expectedHelp = document.createElement('p');
    const expectedOutput = document.createElement('pre');
    expectedPanel.append(expectedSummary, expectedHelp, expectedOutput);
    byId('result-panel').insertAdjacentElement('afterend', expectedPanel);

    function updateRuntimeLabel() {
        const text = getTextSet();
        elements.statusText.textContent = runtimeIssue === 'file' ? text.fileMode :
            runtimeState === 'ready' ? text.ready : runtimeState === 'running' ? text.running :
            runtimeState === 'error' ? text.loadFailed : text.loading;
    }
    function setRuntimeState(state) {
        runtimeState = state;
        elements.statusBadge.classList.remove('ready', 'loading', 'running', 'error');
        elements.statusBadge.classList.add(state === 'running' ? 'loading' : state);
        updateRuntimeLabel();
        elements.runButton.disabled = state !== 'ready' || pendingRun !== null;
        elements.stopButton.disabled = pendingRun === null;
        elements.retryButton.hidden = state !== 'error' || runtimeIssue === 'file';
        elements.consoleOutput.setAttribute('aria-busy', String(pendingRun !== null));
    }
    function setConsole(text, kind) {
        elements.consoleOutput.textContent = text;
        elements.consoleOutput.dataset.hasRun = kind === 'default' ? 'false' : 'true';
        elements.consoleOutput.dataset.state = kind;
        elements.errorDetails.hidden = true;
        elements.errorDetails.open = false;
        elements.errorText.textContent = '';
    }
    function terminateWorker() {
        clearTimeout(bootTimer);
        bootTimer = null;
        if (pythonWorker) pythonWorker.terminate();
        pythonWorker = null;
        workerGeneration += 1;
    }
    function createWorker() {
        terminateWorker();
        if (window.location.protocol === 'file:') {
            runtimeIssue = 'file';
            setRuntimeState('error');
            setConsole(getTextSet().fileHint, 'unavailable');
            return;
        }
        runtimeIssue = '';
        if (elements.consoleOutput.dataset.state === 'unavailable') setConsole(getTextSet().consoleDefault, 'default');
        setRuntimeState('loading');
        const generation = workerGeneration;
        try { pythonWorker = new Worker('./js/data_python/worker.js?v=20261113-fix1'); }
        catch (error) { onWorkerFailure(error.message, generation); return; }
        bootTimer = setTimeout(() => onWorkerFailure('Engine load timeout', generation), LOAD_LIMIT_MS);
        pythonWorker.onmessage = event => {
            if (generation !== workerGeneration) return;
            const message = event.data || {};
            if (message.type === 'READY') {
                clearTimeout(bootTimer);
                setRuntimeState('ready');
            } else if (message.type === 'LOAD_ERROR') onWorkerFailure(message.error, generation);
            else if (message.type === 'RESULT') onWorkerResult(message);
        };
        pythonWorker.onerror = event => {
            if (event.preventDefault) event.preventDefault();
            onWorkerFailure(event.message || 'Worker failed', generation);
        };
    }
    function onWorkerFailure(reason, generation) {
        if (generation !== workerGeneration) return;
        console.error('Python worker failure:', reason);
        if (pendingRun) clearTimeout(pendingRun.timeout);
        pendingRun = null;
        terminateWorker();
        runtimeIssue = 'load';
        setRuntimeState('error');
        setConsole(getTextSet().loadHint, 'unavailable');
    }
    function describePythonError(error) {
        const text = getTextSet();
        const lines = String(error).split('\n').map(line => line.trimEnd()).filter(Boolean);
        const summary = lines.slice().reverse().find(line => /^[A-Za-z_][\w.]*(?:Error|Interrupt|Exit)(?::|$)/.test(line)) ||
            lines[lines.length - 1] || text.errorLabel;
        const type = summary.split(':', 1)[0];
        const hint = text.errorHints[type] || text.errorHints.default;
        return text.errorLabel + ': ' + summary + '\n' + hint;
    }
    function onWorkerResult(message) {
        if (!pendingRun || pendingRun.id !== message.id || pendingRun.lesson !== currentLessonIndex) return;
        clearTimeout(pendingRun.timeout);
        pendingRun = null;
        const text = getTextSet();
        const error = message.error || '';
        if (error.includes('INPUT_VALUES_EXHAUSTED')) {
            setConsole((message.output ? message.output + '\n' : '') + text.stdinMissing, 'error');
        } else if (error.includes('OUTPUT_LIMIT_EXCEEDED')) setConsole(text.outputLimit, 'error');
        else if (error) setConsole((message.output ? message.output + '\n' : '') + describePythonError(error), 'error');
        else {
            setConsole(message.output || text.finishedNoOutput, 'success');
            showToast(text.runComplete);
        }
        if (error) {
            elements.errorText.textContent = String(error);
            elements.errorDetails.hidden = false;
        }
        setRuntimeState('ready');
    }
    function cancelPendingRun(showMessage) {
        if (!pendingRun) return;
        clearTimeout(pendingRun.timeout);
        pendingRun = null;
        createWorker(); // New generation ignores all replies from the previous lesson/run.
        if (showMessage) setConsole(getTextSet().stoppedMessage, 'stopped');
    }
    function refreshInputPanel() {
        const lesson = lessons[currentLessonIndex];
        const hasInput = /\binput\s*\(/.test(elements.codeInput.value);
        const taskNeedsInput = lesson && (lesson.needsInput || /\binput\s*\(/.test(lessonText(lesson, 'answer')));
        elements.stdinPanel.hidden = !(hasInput || taskNeedsInput);
    }
    function runPython() {
        if (runtimeState !== 'ready' || pendingRun || !pythonWorker || currentLessonIndex === null) return;
        saveEditedCode();
        rememberInput();
        const code = elements.codeInput.value;
        const inputs = elements.stdinInput.value === '' ? [] :
            elements.stdinInput.value.replace(/\r\n/g, '\n').split('\n');
        const id = ++nextRunId;
        pendingRun = { id, lesson: currentLessonIndex, timeout: null };
        setConsole(getTextSet().running, 'running');
        setRuntimeState('running');
        pendingRun.timeout = setTimeout(() => {
            if (!pendingRun || pendingRun.id !== id) return;
            pendingRun = null;
            createWorker(); // Termination interrupts even an infinite Python loop.
            setConsole(getTextSet().runtimeTimeout, 'timeout');
        }, EXECUTION_LIMIT_MS);
        try { pythonWorker.postMessage({ type: 'RUN', id, code, inputs }); }
        catch (error) { onWorkerFailure(error.message, workerGeneration); }
    }

    function updateProgress() {
        const position = currentLessonIndex === null ? 0 : currentLessonIndex + 1;
        byId('progress-bar').style.width = (position / lessons.length * 100) + '%';
        document.querySelectorAll('[data-course-text="progressLabel"]').forEach(node => {
            node.textContent = getTextSet().progressLabel + ' ' + position + ' / ' + lessons.length;
        });
    }
    function updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(button => {
            const active = button.dataset.lang === currentLang;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
    }
    function updateStaticTexts() {
        const text = getTextSet();
        const named = {
            brandTitle: 'brandTitle', brandSubtitle: 'brandSubtitle', mobileMenuTitle: 'menuTitle',
            runButton: 'runButton', stopButton: 'stopButton', resetButton: 'resetButton',
            retryButton: 'retryButton', stdinLabel: 'stdinLabel', stdinHelp: 'stdinHelp',
            answerButton: 'answerButton', answerTitle: 'answerTitle'
        };
        Object.entries(named).forEach(([element, key]) => { elements[element].textContent = text[key]; });
        document.querySelectorAll('[data-course-text]').forEach(node => {
            const value = text[node.dataset.courseText];
            if (value !== undefined) node.textContent = value;
        });
        document.querySelectorAll('[data-course-aria]').forEach(node => {
            const value = text[node.dataset.courseAria];
            if (value !== undefined) node.setAttribute('aria-label', value);
        });
        elements.menuButton.setAttribute('aria-label', text.openMenu);
        elements.menu.setAttribute('aria-label', text.menuTitle);
        elements.navBar.setAttribute('aria-label', text.menuTitle);
        elements.mobileNav.setAttribute('aria-label', text.menuTitle);
        elements.codeInput.setAttribute('aria-label', text.codeEditorLabel);
        document.querySelectorAll('.lang-container, .mobile-lang-container').forEach(node => node.setAttribute('aria-label', text.languageLabel));
        document.querySelectorAll('.study-steps').forEach(node => node.setAttribute('aria-label', text.stepsLabel));
        elements.stdinInput.placeholder = text.stdinPlaceholder.replace(/\\n/g, '\n');
        elements.codeInput.placeholder = text.textareaPlaceholder;
        const fileGuide = byId('python-file-guide');
        if (fileGuide) fileGuide.hidden = window.location.protocol !== 'file:';
        expectedSummary.textContent = text.expectedTitle;
        expectedHelp.textContent = text.expectedHint;
        updateRuntimeLabel();
        if (runtimeState === 'error') setConsole(runtimeIssue === 'file' ? text.fileHint : text.loadHint, 'unavailable');
        else if (elements.consoleOutput.dataset.hasRun !== 'true') setConsole(text.consoleDefault, 'default');
        updateProgress();
    }
    function showToast(message) {
        const toast = byId('toast');
        clearTimeout(toastTimer);
        toast.textContent = message;
        toast.classList.add('show');
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
    }
    function renderNavigation() {
        elements.navBar.innerHTML = '';
        elements.mobileNav.innerHTML = '';
        lessons.forEach((lesson, index) => {
            [elements.navBar, elements.mobileNav].forEach(nav => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'nav-btn';
                button.textContent = lessonText(lesson, 'menu');
                if (currentLessonIndex === index) {
                    button.classList.add('active');
                    button.setAttribute('aria-current', 'step');
                }
                button.addEventListener('click', () => {
                    selectLesson(index);
                    closeMenu();
                });
                nav.appendChild(button);
            });
        });
    }
    function resetConsole() {
        if (runtimeState === 'error') setConsole(runtimeIssue === 'file' ? getTextSet().fileHint : getTextSet().loadHint, 'unavailable');
        else setConsole(getTextSet().consoleDefault, 'default');
    }
    function selectLesson(index, options = {}) {
        if (!Number.isInteger(index) || index < 0 || index >= lessons.length) index = 0;
        if (!options.skipRemember) { saveEditedCode(); rememberInput(); }
        cancelPendingRun(false);
        currentLessonIndex = index;
        const lesson = lessons[index];
        safeWrite('python-progress', index);
        renderNavigation();
        // Trusted course HTML is separate from student code, which remains plain text.
        elements.theoryView.innerHTML = '';
        const title = document.createElement('h2');
        title.textContent = lessonText(lesson, 'title');
        elements.theoryView.appendChild(title);
        elements.theoryView.insertAdjacentHTML('beforeend', lessonText(lesson, 'theory'));
        const draft = readDraft(index);
        elements.codeInput.value = draft !== null ? draft : lessonText(lesson, 'initialCode');
        elements.stdinInput.value = inputDrafts.has(index) ? inputDrafts.get(index) : lessonText(lesson, 'sampleInput');
        expectedOutput.textContent = lessonText(lesson, 'expectedOutput') || getTextSet().expectedEmpty;
        expectedPanel.open = false;
        resetConsole();
        refreshInputPanel();
        elements.answerDisplay.style.display = 'none';
        elements.answerButton.setAttribute('aria-expanded', 'false');
        elements.answerText.textContent = lessonText(lesson, 'answer');
        document.title = lessonText(lesson, 'title') + ' · Python';
        updateProgress();
    }
    function setLanguage(lang) {
        if (!translations[lang] || lang === currentLang) return;
        saveEditedCode();
        rememberInput();
        cancelPendingRun(false);
        currentLang = lang;
        safeWrite('python-language', lang);
        document.documentElement.lang = getTextSet().htmlLang || lang;
        updateLanguageButtons();
        updateStaticTexts();
        selectLesson(currentLessonIndex ?? 0, { skipRemember: true });
        syncMenu();
    }
    function resetExample() {
        if (currentLessonIndex === null || !window.confirm(getTextSet().resetConfirm)) return;
        // An explicit reset restores both the example and the Python interpreter.
        // Invalidate an in-flight run before creating exactly one replacement worker.
        if (pendingRun) clearTimeout(pendingRun.timeout);
        pendingRun = null;
        clearDraft(currentLessonIndex);
        inputDrafts.delete(currentLessonIndex);
        selectLesson(currentLessonIndex, { skipRemember: true });
        createWorker();
        showToast(getTextSet().resetDone);
    }
    function toggleAnswer() {
        const show = elements.answerDisplay.style.display !== 'block';
        elements.answerDisplay.style.display = show ? 'block' : 'none';
        elements.answerButton.setAttribute('aria-expanded', String(show));
    }
    function indentCode(event) {
        if ((!event.ctrlKey && !event.metaKey) || event.altKey || (event.key !== ']' && event.key !== '[')) return;
        event.preventDefault();
        const value = elements.codeInput.value;
        const start = elements.codeInput.selectionStart;
        const end = elements.codeInput.selectionEnd;
        const first = value.lastIndexOf('\n', start - 1) + 1;
        const lastSelected = end > start && value[end - 1] === '\n' ? end - 1 : end;
        const nextBreak = value.indexOf('\n', lastSelected);
        const last = nextBreak < 0 ? value.length : nextBreak;
        const lines = value.slice(first, last).split('\n');
        const deltas = [];
        const changed = lines.map(line => {
            const updated = event.key === ']' ? '    ' + line : line.replace(/^( {1,4}|\t)/, '');
            deltas.push(updated.length - line.length);
            return updated;
        }).join('\n');
        const totalDelta = deltas.reduce((sum, value) => sum + value, 0);
        elements.codeInput.value = value.slice(0, first) + changed + value.slice(last);
        const newStart = Math.max(first, start + deltas[0]);
        elements.codeInput.setSelectionRange(newStart, start === end ? newStart : Math.max(newStart, end + totalDelta));
        saveDraft();
        refreshInputPanel();
    }

    document.querySelectorAll('.lang-btn').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
    elements.runButton.addEventListener('click', runPython);
    elements.stopButton.addEventListener('click', () => cancelPendingRun(true));
    elements.retryButton.addEventListener('click', () => { resetConsole(); createWorker(); });
    elements.resetButton.addEventListener('click', resetExample);
    elements.answerButton.addEventListener('click', toggleAnswer);
    elements.codeInput.addEventListener('input', () => { saveDraft(); refreshInputPanel(); });
    elements.codeInput.addEventListener('keydown', indentCode);
    elements.stdinInput.addEventListener('input', () => {
        if (currentLessonIndex !== null) inputDrafts.set(currentLessonIndex, elements.stdinInput.value);
    });
    elements.menu.setAttribute('role', 'dialog');
    elements.menuButton.addEventListener('click', syncMenu);
    elements.backdrop.addEventListener('click', syncMenu);
    elements.menuClose.addEventListener('click', closeMenu);
    window.addEventListener('resize', syncMenu);
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeMenu();
        if (event.key !== 'Tab' || !elements.menu.classList.contains('open')) return;
        const focusable = Array.from(elements.menu.querySelectorAll('button:not(:disabled), a[href], input, textarea, select, [tabindex="0"]'));
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || !elements.menu.contains(document.activeElement))) {
            event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault(); first.focus();
        }
    });

    const savedLang = safeRead('python-language');
    if (savedLang && translations[savedLang]) currentLang = savedLang;
    document.documentElement.lang = getTextSet().htmlLang || currentLang;
    updateLanguageButtons();
    updateStaticTexts();
    const savedIndex = safeRead('python-progress');
    selectLesson(savedIndex !== null ? Number(savedIndex) : 0);
    syncMenu();
    createWorker();
})();
