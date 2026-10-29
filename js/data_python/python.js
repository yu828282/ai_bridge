(function () {
    const translations = window.pythonTranslations;
    const lessons = window.pythonLessons;

    const elements = {
        brandTitle: document.getElementById('brand-title'),
        brandSubtitle: document.getElementById('brand-subtitle'),
        mobileMenuTitle: document.getElementById('mobile-menu-title'),
        statusBadge: document.getElementById('py-status'),
        statusText: document.getElementById('status-text'),
        navBar: document.getElementById('nav-bar'),
        mobileNav: document.getElementById('mobile-nav'),
        theoryView: document.getElementById('theory-view'),
        codeInput: document.getElementById('python-code'),
        consoleOutput: document.getElementById('console-output'),
        runButton: document.getElementById('run-btn'),
        stopButton: document.getElementById('stop-btn'),
        retryButton: document.getElementById('retry-btn'),
        stdinPanel: document.getElementById('python-input-panel'),
        stdinLabel: document.getElementById('stdin-label'),
        stdinHelp: document.getElementById('stdin-help'),
        stdinInput: document.getElementById('python-stdin'),
        answerButton: document.getElementById('answer-btn'),
        answerDisplay: document.getElementById('ans-display'),
        answerTitle: document.getElementById('answerTitle'),
        answerText: document.getElementById('ans-text')
    };

    let currentLang = 'ko';
    let currentLessonIndex = null;
    let pythonWorker = null;
    let workerGeneration = 0;
    let nextRunId = 0;
    let pendingRun = null;
    let ready = false;
    let bootTimer = null;
    const EXECUTION_LIMIT_MS = 10000;
    const LOAD_LIMIT_MS = 90000;

    // 학습 코드 보관: 레슨별로 하나의 작업본을 유지하므로 언어 변경과
    // 다른 레슨 방문, 새로고침에도 사용자가 작성한 코드가 사라지지 않습니다.
    const draftPrefix = 'ai-bridge-python-draft-v1-';

    function draftKey(index) {
        return draftPrefix + index;
    }

    function readDraft(index) {
        try { return localStorage.getItem(draftKey(index)); }
        catch (_) { return null; }
    }

    function saveDraft() {
        if (currentLessonIndex === null) return;
        try { localStorage.setItem(draftKey(currentLessonIndex), elements.codeInput.value); }
        catch (_) { /* 저장 공간이 차단되어도 수업은 계속 진행 */ }
    }

    const mobileMenuController = window.initMobileMenu({
        button: document.getElementById('hamburger-btn'),
        menu: document.getElementById('mobile-menu'),
        backdrop: document.getElementById('mobile-backdrop'),
        breakpoint: 768
    });

    function getTextSet() {
        return translations[currentLang] || translations.ko;
    }

    function setRuntimeState(state) {
        ready = state === 'ready';
        elements.statusBadge.classList.remove('ready', 'loading', 'error');
        elements.statusBadge.classList.add(state);
        elements.statusText.textContent = state === 'ready' ? getTextSet().ready :
            state === 'error' ? getTextSet().loadFailed : getTextSet().loading;
        elements.runButton.disabled = state !== 'ready' || pendingRun !== null;
        elements.stopButton.disabled = pendingRun === null;
        elements.retryButton.hidden = state !== 'error';
    }

    function terminateWorker() {
        clearTimeout(bootTimer);
        bootTimer = null;
        if (pythonWorker) pythonWorker.terminate();
        pythonWorker = null;
        workerGeneration += 1;
        ready = false;
    }

    function createWorker() {
        terminateWorker();
        const generation = workerGeneration;
        setRuntimeState('loading');
        elements.retryButton.hidden = true;
        try {
            pythonWorker = new Worker('./js/data_python/worker.js');
        } catch (error) {
            onWorkerFailure(error.message, generation);
            return;
        }
        bootTimer = setTimeout(() => onWorkerFailure('Engine load timeout', generation), LOAD_LIMIT_MS);
        pythonWorker.onmessage = (event) => {
            if (generation !== workerGeneration) return; // Discard stale replies.
            const message = event.data || {};
            if (message.type === 'READY') {
                clearTimeout(bootTimer);
                setRuntimeState('ready');
            } else if (message.type === 'LOAD_ERROR') {
                onWorkerFailure(message.error, generation);
            } else if (message.type === 'RESULT') {
                onWorkerResult(message);
            }
        };
        pythonWorker.onerror = (event) => {
            if (event.preventDefault) event.preventDefault();
            onWorkerFailure(event.message || 'Worker failed', generation);
        };
    }

    function onWorkerFailure(reason, generation) {
        if (generation !== workerGeneration) return;
        console.error('Python worker failure:', reason);
        if (pendingRun) {
            clearTimeout(pendingRun.timeout);
            pendingRun = null;
        }
        terminateWorker();
        setRuntimeState('error');
        elements.consoleOutput.dataset.hasRun = 'true';
        elements.consoleOutput.textContent = getTextSet().loadHint;
    }

    function onWorkerResult(message) {
        if (!pendingRun || pendingRun.id !== message.id) return;
        clearTimeout(pendingRun.timeout);
        pendingRun = null;
        const textSet = getTextSet();
        const error = message.error || '';
        if (error.includes('INPUT_VALUES_EXHAUSTED')) {
            elements.consoleOutput.textContent = (message.output ? message.output + '\n' : '') + textSet.stdinMissing;
        } else if (error.includes('OUTPUT_LIMIT_EXCEEDED')) {
            elements.consoleOutput.textContent = textSet.outputLimit;
        } else if (error) {
            elements.consoleOutput.textContent = (message.output ? message.output + '\n' : '') + textSet.errorLabel + ': ' + error;
        } else {
            elements.consoleOutput.textContent = message.output || textSet.finishedNoOutput;
            showToast('✓');
        }
        setRuntimeState('ready');
    }

    function updateProgress() {
        const progressBar = document.getElementById('progress-bar');

        const percent =
            ((currentLessonIndex + 1) / lessons.length) * 100;

        progressBar.style.width = percent + '%';
    }
    function refreshInputPanel() {
        // The input text is intentionally kept while switching lessons/languages.
        // It is never sent to a server or stored in localStorage.
        elements.stdinPanel.hidden = !/\binput\s*\(/.test(elements.codeInput.value);
    }

    function runPython() {
        if (!ready || pendingRun || !pythonWorker) return;
        const textSet = getTextSet();
        const code = elements.codeInput.value;
        const inputs = elements.stdinInput.value === '' ? [] : elements.stdinInput.value.replace(/\r\n/g, '\n').split('\n');
        const id = ++nextRunId;
        elements.consoleOutput.dataset.hasRun = 'true';
        elements.consoleOutput.textContent = textSet.running;
        pendingRun = { id, timeout: null };
        setRuntimeState('ready');
        pendingRun.timeout = setTimeout(() => {
            if (!pendingRun || pendingRun.id !== id) return;
            pendingRun = null;
            elements.consoleOutput.textContent = getTextSet().runtimeTimeout;
            terminateWorker(); // Hard interruption, even for infinite Python loops.
            createWorker();
        }, EXECUTION_LIMIT_MS);
        try { pythonWorker.postMessage({ type: 'RUN', id, code, inputs }); }
        catch (error) { onWorkerFailure(error.message, workerGeneration); }
    }

    function stopPython() {
        if (!pendingRun) return;
        clearTimeout(pendingRun.timeout);
        pendingRun = null;
        elements.consoleOutput.dataset.hasRun = 'true';
        elements.consoleOutput.textContent = getTextSet().stoppedMessage;
        terminateWorker();
        createWorker();
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        document.documentElement.lang = translations[lang].htmlLang || lang;
        updateLanguageButtons();
        updateStaticTexts();
        renderNavigation();
        if (currentLessonIndex !== null) {
            selectLesson(currentLessonIndex);
        } else {
            renderEmptyState();
        }
    }

    function updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
    }
    function showToast(message) {
        const toast = document.getElementById('toast');

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    function updateStaticTexts() {
        const textSet = getTextSet();
        elements.brandTitle.textContent = textSet.brandTitle;
        elements.brandSubtitle.textContent = textSet.brandSubtitle;
        elements.mobileMenuTitle.textContent = textSet.menuTitle;
        elements.runButton.textContent = textSet.runButton;
        elements.stopButton.textContent = textSet.stopButton;
        elements.retryButton.textContent = textSet.retryButton;
        elements.stdinLabel.textContent = textSet.stdinLabel;
        elements.stdinHelp.textContent = textSet.stdinHelp;
        elements.stdinInput.placeholder = textSet.stdinPlaceholder.replace(/\\n/g, '\n');
        elements.answerButton.textContent = textSet.answerButton;
        elements.answerTitle.textContent = textSet.answerTitle;
        elements.codeInput.placeholder = textSet.textareaPlaceholder;

        if (elements.statusBadge.classList.contains('error')) {
            elements.statusText.textContent = textSet.loadFailed;
            elements.consoleOutput.textContent = textSet.loadHint;
        } else {
            if (elements.consoleOutput.dataset.hasRun !== 'true') {
                elements.consoleOutput.textContent = textSet.consoleDefault;
            }
            elements.statusText.textContent = elements.statusBadge.classList.contains('ready') ? textSet.ready : textSet.loading;
        }
    }

    function renderNavigation() {
        elements.navBar.innerHTML = '';
        elements.mobileNav.innerHTML = '';

        lessons.forEach((lesson, index) => {
            const menuText = lesson.menu[currentLang] || lesson.menu.ko;
            const btn = document.createElement('button');
            btn.className = 'nav-btn';
            if (currentLessonIndex === index) btn.classList.add('active');
            btn.textContent = menuText;
            btn.onclick = () => {
                selectLesson(index);
                mobileMenuController.closeMenu();
            };

            elements.navBar.appendChild(btn);
            elements.mobileNav.appendChild(btn.cloneNode(true));
        });

        Array.from(elements.mobileNav.children).forEach((btn, index) => {
            btn.onclick = () => {
                selectLesson(index);
                mobileMenuController.closeMenu();
            };
        });
    }

    function selectLesson(index) {
        currentLessonIndex = index;
        const lesson = lessons[index];
        const textSet = getTextSet();

        renderNavigation();
        localStorage.setItem('python-progress', index);
        const title = lesson.title[currentLang] || lesson.title.ko;
        const theory = lesson.theory[currentLang] || lesson.theory.ko;
        const initialCode = lesson.initialCode ? (lesson.initialCode[currentLang] || lesson.initialCode.ko) : "";

        elements.theoryView.innerHTML = `<h2>${title}</h2>${theory}`;
        // 같은 레슨의 저장된 작업본이 있으면 언어별 예제보다 우선합니다.
        // 빈 문자열도 사용자가 직접 지운 결과일 수 있으므로 보존합니다.
        const savedDraft = readDraft(index);
        elements.codeInput.value = savedDraft !== null ? savedDraft : initialCode;
        elements.consoleOutput.textContent = textSet.consoleDefault;
        elements.consoleOutput.dataset.hasRun = 'false';
        refreshInputPanel();

        elements.answerDisplay.style.display = 'none';
        elements.answerText.textContent = lesson.answer[currentLang] || lesson.answer.ko;
        
        updateProgress();
    }

    function renderEmptyState() {
        const textSet = getTextSet();
        elements.theoryView.innerHTML = `
            <div style="text-align:center; padding-top:50px; color:#64748b;">
                <h3>${textSet.emptyState}</h3>
                <p>${textSet.emptyStateSub}</p>
            </div>
        `;
    }

    function toggleAnswer() {
        if (currentLessonIndex === null) {
            alert(getTextSet().selectLessonAlert);
            return;
        }
        elements.answerDisplay.style.display =
            elements.answerDisplay.style.display === 'block' ? 'none' : 'block';
    }

    function bindEvents() {
        document.querySelectorAll('.lang-btn').forEach(function (button) {
            button.addEventListener('click', function () {
                setLanguage(button.dataset.lang);
            });
        });

        elements.runButton.addEventListener('click', runPython);
        elements.stopButton.addEventListener('click', stopPython);
        elements.retryButton.addEventListener('click', createWorker);
        elements.answerButton.addEventListener('click', toggleAnswer);
        elements.codeInput.addEventListener('input', () => { saveDraft(); refreshInputPanel(); });
    }

    bindEvents();
    updateLanguageButtons();
    updateStaticTexts();
    renderNavigation();

    const savedIndex = localStorage.getItem('python-progress');

    if (savedIndex !== null) {
        selectLesson(Number(savedIndex));
    } else {
        renderEmptyState();
    }
    
    // Download the engine inside an isolated worker, never on the main thread.
    refreshInputPanel();
    createWorker();
})();