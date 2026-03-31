
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
        answerButton: document.getElementById('answer-btn'),
        answerDisplay: document.getElementById('ans-display'),
        answerTitle: document.getElementById('answerTitle'),
        answerText: document.getElementById('ans-text')
    };

    let currentLang = 'ko';
    let currentLessonIndex = null;
    let pyodide = null;

    const mobileMenuController = window.initMobileMenu({
        button: document.getElementById('hamburger-btn'),
        menu: document.getElementById('mobile-menu'),
        backdrop: document.getElementById('mobile-backdrop'),
        breakpoint: 768
    });

    function getTextSet() {
        return translations[currentLang] || translations.ko;
    }

    function updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(function (button) {
            button.classList.toggle('active', button.dataset.lang === currentLang);
        });
    }

    function updateStaticTexts() {
        const textSet = getTextSet();
        document.documentElement.lang = textSet.htmlLang;
        elements.brandTitle.textContent = textSet.brandTitle;
        elements.brandSubtitle.textContent = textSet.brandSubtitle;
        elements.mobileMenuTitle.textContent = textSet.menuTitle;
        elements.codeInput.placeholder = textSet.textareaPlaceholder;
        elements.runButton.textContent = textSet.runButton;
        elements.answerButton.textContent = textSet.answerButton;
        elements.answerTitle.textContent = textSet.answerTitle;

        if (!elements.consoleOutput.dataset.hasRun) {
            elements.consoleOutput.textContent = textSet.consoleDefault;
        }
    }

    function renderEmptyState() {
        const textSet = getTextSet();
            elements.theoryView.innerHTML = `
                <div class="empty-state">
                    <h2>${textSet.emptyState}</h2>
                    <p>${textSet.emptyStateSub}</p>
                </div>
            `;
        elements.answerDisplay.style.display = 'none';
        elements.answerText.textContent = '';
    }

    function createNavButton(lesson, index) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'nav-btn';
        button.textContent = lesson.menu[currentLang];
        button.dataset.lessonId = lesson.id;
        if (currentLessonIndex === index) {
            button.classList.add('active');
        }
        button.addEventListener('click', function () {
            renderLesson(index);
        });
        return button;
    }

    function renderNavigation() {
        elements.navBar.innerHTML = '';
        elements.mobileNav.innerHTML = '';

        lessons.forEach(function (lesson, index) {
            elements.navBar.appendChild(createNavButton(lesson, index));
            elements.mobileNav.appendChild(createNavButton(lesson, index));
        });
    }

    function renderLesson(index) {
        currentLessonIndex = index;
        const lesson = lessons[index];
        elements.theoryView.innerHTML = '<h2>' + lesson.title[currentLang] + '</h2>' + lesson.theory[currentLang];
        elements.answerText.textContent = lesson.answer[currentLang] || lesson.answer.ko;
        elements.answerDisplay.style.display = 'none';
        elements.codeInput.value = '';
        renderNavigation();
        mobileMenuController.closeMenu();
    }

    function setLanguage(lang) {
        currentLang = lang;
        updateLanguageButtons();
        updateStaticTexts();
        renderNavigation();
        setStatus(pyodide ? 'ready' : 'loading');

        if (currentLessonIndex === null) {
            renderEmptyState();
        } else {
            renderLesson(currentLessonIndex);
        }
    }

    function setStatus(type) {
        const textSet = getTextSet();
        const ready = type === 'ready';
        const color = ready ? '#4ade80' : '#fbbf24';
        elements.statusBadge.style.color = color;
        elements.statusBadge.innerHTML = '<span class="status-dot" style="background: ' + color + ';"></span><span id="status-text">' + (ready ? textSet.ready : textSet.loading) + '</span>';
    }

    async function initPyodideEngine() {
        setStatus('loading');
        pyodide = await loadPyodide();
        setStatus('ready');
    }

    async function runPython() {
        if (!pyodide) {
            return;
        }

        const textSet = getTextSet();
        const code = elements.codeInput.value;
        elements.consoleOutput.dataset.hasRun = 'true';
        elements.consoleOutput.textContent = textSet.running + '';

        pyodide.runPython(`
            import sys, io
            from js import prompt

            def input(p=""):
                return prompt(p)

            sys.stdout = io.StringIO()
        `);

        try {
            await pyodide.runPythonAsync(code);
            const output = pyodide.runPython('sys.stdout.getvalue()');
            elements.consoleOutput.textContent = output || textSet.finishedNoOutput;
        } catch (error) {
            elements.consoleOutput.textContent = textSet.errorLabel + ':' + error;
        }
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
        elements.answerButton.addEventListener('click', toggleAnswer);
    }

    bindEvents();
    updateLanguageButtons();
    updateStaticTexts();
    renderNavigation();
    renderEmptyState();
    initPyodideEngine();
})();
