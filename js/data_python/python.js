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
    // Keep stored lesson indices stable, while following the attached teaching order.
    const studyOrder = [0, 1, 2, 3, 15, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    const weekStarts = [[1, 0], [2, 1], [3, 2], [4, 5], [5, 8], [6, 12], [7, 16], [9, 19], [10, 20], [11, 21], [12, 22]];
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
        document.querySelectorAll('.use-test-input').forEach(button => { button.disabled = pendingRun !== null; });
        byId('starter-input-btn').disabled = pendingRun !== null;
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
        try { pythonWorker = new Worker('./js/data_python/worker.js?v=20261117-slides3'); }
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
        const text = getTextSet();
        const hasInput = /\binput\s*\(/.test(elements.codeInput.value);
        const taskNeedsInput = lesson && (lesson.needsInput || /\binput\s*\(/.test(lessonText(lesson, 'answer')));
        elements.stdinPanel.hidden = !(hasInput || taskNeedsInput);
        elements.stdinPanel.classList.toggle('input-needed', hasInput);
        elements.stdinPanel.dataset.inputMode = hasInput ? 'current-code' : 'mission-only';
        byId('input-step-guide').textContent = hasInput ? text.inputSteps : text.inputLater;
        elements.stdinHelp.textContent = hasInput ? text.stdinHelp : text.stdinLaterHelp;
        elements.runButton.textContent = hasInput ? text.runWithInput : text.runButton;
        byId('starter-input-btn').hidden = !hasInput || !lessonText(lesson, 'sampleInput');
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
        const position = currentLessonIndex === null ? 0 : studyOrder.indexOf(currentLessonIndex) + 1;
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
        studyOrder.forEach(index => {
            const lesson = lessons[index];
            [elements.navBar, elements.mobileNav].forEach(nav => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'nav-btn';
                button.dataset.lessonId = lesson.id;
                button.textContent = lessonText(lesson, 'menu');
                if (currentLessonIndex === index) {
                    button.classList.add('active');
                    button.setAttribute('aria-current', 'step');
                }
                button.addEventListener('click', () => {
                    selectLesson(index);
                    closeMenu();
                    focusSection(byId('lesson-title'));
                });
                nav.appendChild(button);
            });
        });
    }
    function resetConsole() {
        if (runtimeState === 'error') setConsole(runtimeIssue === 'file' ? getTextSet().fileHint : getTextSet().loadHint, 'unavailable');
        else setConsole(getTextSet().consoleDefault, 'default');
    }
    function focusSection(target) {
        if (!target) return;
        if (!target.matches('button, a[href], input, textarea, select')) target.setAttribute('tabindex', '-1');
        if (typeof target.scrollIntoView === 'function') target.scrollIntoView({ block: 'start', behavior: 'auto' });
        target.focus({ preventScroll: true });
    }
    function lessonButton(label, index) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'lesson-link';
        button.textContent = label;
        button.addEventListener('click', () => {
            selectLesson(index);
            focusSection(byId('lesson-title'));
        });
        return button;
    }
    function renderWeekNavigation(lesson) {
        const text = getTextSet();
        const nav = document.createElement('nav');
        nav.className = 'course-weeks';
        nav.setAttribute('aria-label', text.weekNavigation);
        const label = document.createElement('p');
        label.textContent = text.weekNavigation;
        nav.appendChild(label);
        weekStarts.forEach(([week, index]) => {
            const button = lessonButton(text['week' + week], index);
            button.dataset.week = String(week);
            if (lesson.sourceWeek === week) button.setAttribute('aria-current', 'true');
            nav.appendChild(button);
        });
        elements.theoryView.appendChild(nav);
        const note = document.createElement('p');
        note.className = 'week-note';
        note.textContent = lesson.sourceWeek ? text['week' + lesson.sourceWeek] + ' · ' + text.lessonNumberNote :
            (currentLessonIndex >= 23 ? text.furtherStudy : text.foundationStudy);
        elements.theoryView.appendChild(note);
    }
    function renderTheoryTools() {
        const text = getTextSet();
        const tools = document.createElement('nav');
        tools.className = 'lesson-tools';
        tools.setAttribute('aria-label', text.lessonNavigation);
        const mission = elements.theoryView.querySelector('.problem-area');
        if (mission) {
            mission.id = 'lesson-mission';
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'lesson-link';
            button.textContent = text.jumpMission;
            button.addEventListener('click', () => focusSection(mission));
            tools.appendChild(button);
        }
        const practiceButton = document.createElement('button');
        practiceButton.type = 'button';
        practiceButton.className = 'lesson-link';
        practiceButton.textContent = text.jumpEditor;
        practiceButton.addEventListener('click', () => focusSection(elements.codeInput));
        tools.appendChild(practiceButton);
        byId('lesson-title').insertAdjacentElement('afterend', tools);

        const headings = [...elements.theoryView.querySelectorAll('.lesson-section h3')];
        if (headings.length < 2) return;
        const toc = document.createElement('details');
        toc.className = 'lesson-toc';
        const summary = document.createElement('summary');
        summary.textContent = text.theoryContents;
        const list = document.createElement('ol');
        headings.forEach((heading, index) => {
            heading.id = lessons[currentLessonIndex].id + '-section-' + (index + 1);
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;
            link.addEventListener('click', event => { event.preventDefault(); focusSection(heading); });
            item.appendChild(link);
            list.appendChild(item);
        });
        toc.append(summary, list);
        tools.insertAdjacentElement('afterend', toc);
    }
    function renderPracticeTests(lesson) {
        const tests = lesson.practiceTests || [];
        if (!tests.length) return;
        const text = getTextSet();
        const section = document.createElement('section');
        section.className = 'practice-checks';
        section.id = 'practice-checks';
        const heading = document.createElement('h3');
        heading.textContent = text.practiceTestsTitle;
        const help = document.createElement('p');
        help.textContent = text.practiceTestsHint;
        section.append(heading, help);
        tests.forEach((test, index) => {
            const details = document.createElement('details');
            details.className = 'practice-case';
            details.open = index === 0;
            const summary = document.createElement('summary');
            summary.textContent = (index + 1) + '. ' + lessonText(test, 'name');
            details.appendChild(summary);
            const inputValue = lessonText(test, 'input');
            const inputLabel = document.createElement('p');
            inputLabel.className = 'practice-case-label';
            inputLabel.textContent = inputValue === '' ? text.noPracticeInput : text.practiceInputLabel;
            details.appendChild(inputLabel);
            if (inputValue !== '') {
                const inputPre = document.createElement('pre');
                inputPre.textContent = inputValue;
                const use = document.createElement('button');
                use.type = 'button';
                use.className = 'lesson-link use-test-input';
                use.dataset.testIndex = String(index);
                use.textContent = text.usePracticeInput;
                use.addEventListener('click', () => {
                    if (pendingRun) return;
                    elements.stdinInput.value = inputValue;
                    inputDrafts.set(currentLessonIndex, inputValue);
                    refreshInputPanel();
                    showToast(getTextSet().practiceInputLoaded);
                    focusSection(elements.stdinInput);
                });
                details.append(inputPre, use);
            }
            const outputLabel = document.createElement('p');
            outputLabel.className = 'practice-case-label';
            outputLabel.textContent = text.practiceOutputLabel;
            const output = document.createElement('pre');
            output.className = 'practice-expected-output';
            output.textContent = lessonText(test, 'output') || text.expectedEmpty;
            details.append(outputLabel, output);
            section.appendChild(details);
        });
        elements.theoryView.appendChild(section);
    }
    function renderStudyNavigation() {
        const text = getTextSet();
        const nav = document.createElement('nav');
        nav.className = 'study-navigation';
        nav.setAttribute('aria-label', text.studyNavigation);
        const position = studyOrder.indexOf(currentLessonIndex);
        const previous = studyOrder[position - 1];
        const next = studyOrder[position + 1];
        if (previous !== undefined) nav.appendChild(lessonButton(text.previousLesson + ' · ' + lessonText(lessons[previous], 'menu'), previous));
        if (next !== undefined) nav.appendChild(lessonButton(text.nextLesson + ' · ' + lessonText(lessons[next], 'menu'), next));
        elements.theoryView.appendChild(nav);
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
        renderWeekNavigation(lesson);
        const title = document.createElement('h2');
        title.id = 'lesson-title';
        title.textContent = lessonText(lesson, 'title');
        elements.theoryView.appendChild(title);
        elements.theoryView.insertAdjacentHTML('beforeend', lessonText(lesson, 'theory'));
        renderTheoryTools();
        renderPracticeTests(lesson);
        renderStudyNavigation();
        const draft = readDraft(index);
        elements.codeInput.value = draft !== null ? draft : lessonText(lesson, 'initialCode');
        byId('python-draft-note').hidden = draft === null || draft === lessonText(lesson, 'initialCode');
        elements.stdinInput.value = inputDrafts.has(index) ? inputDrafts.get(index) : lessonText(lesson, 'sampleInput');
        expectedOutput.textContent = lessonText(lesson, 'expectedOutput') || getTextSet().expectedEmpty;
        expectedPanel.open = false;
        resetConsole();
        refreshInputPanel();
        elements.answerDisplay.style.display = 'none';
        elements.answerButton.setAttribute('aria-expanded', 'false');
        elements.answerText.textContent = lessonText(lesson, 'answer');
        const answerHelp = byId('answer-help');
        if (answerHelp) answerHelp.textContent = getTextSet().answerHelp;
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
    byId('starter-input-btn').addEventListener('click', () => {
        if (pendingRun || currentLessonIndex === null) return;
        const sample = lessonText(lessons[currentLessonIndex], 'sampleInput');
        elements.stdinInput.value = sample;
        inputDrafts.set(currentLessonIndex, sample);
        showToast(getTextSet().starterInputLoaded);
        focusSection(elements.stdinInput);
    });
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
