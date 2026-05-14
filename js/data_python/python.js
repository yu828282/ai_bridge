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
        stopButton: document.getElementById('stop-btn'), // 중지 버튼
        answerButton: document.getElementById('answer-btn'),
        answerDisplay: document.getElementById('ans-display'),
        answerTitle: document.getElementById('answerTitle'),
        answerText: document.getElementById('ans-text')
    };

    let currentLang = 'ko';
    let currentLessonIndex = null;
    let pyWorker = null;

    const mobileMenuController = window.initMobileMenu({
        button: document.getElementById('hamburger-btn'),
        menu: document.getElementById('mobile-menu'),
        backdrop: document.getElementById('mobile-backdrop'),
        breakpoint: 768
    });

    function getTextSet() {
        return translations[currentLang] || translations.ko;
    }

    // [개선] 워커 시스템 초기화
    function initWorker() {
        const textSet = getTextSet();
        
        // 기존 워커가 있다면 완전히 제거
        if (pyWorker) pyWorker.terminate();

        // 상태 표시 업데이트
        elements.statusText.textContent = textSet.loading;
        elements.statusBadge.classList.remove('ready');
        elements.statusBadge.classList.add('loading');
        elements.runButton.disabled = true; // 로딩 중 클릭 방지

        // worker.js를 호출 (경로 확인 필수)
        pyWorker = new Worker('./js/data_python/worker.js');

        pyWorker.onmessage = function(event) {
            const { type, output, error } = event.data;
            const textSet = getTextSet();

            if (type === 'READY') {
                elements.statusText.textContent = textSet.ready;
                elements.statusBadge.classList.remove('loading');
                elements.statusBadge.classList.add('ready');
                elements.runButton.disabled = false;
            } else if (type === 'SUCCESS') {
                elements.consoleOutput.textContent = output || textSet.finishedNoOutput;
                elements.runButton.disabled = false;
                showToast("✅");
            } else if (type === 'ERROR') {
                elements.consoleOutput.textContent = textSet.errorLabel + ': ' + error;
                elements.runButton.disabled = false;
            }
        };

        pyWorker.onerror = function(e) {
            console.error("Worker Error:", e);
            elements.statusText.textContent = "Error";
            elements.runButton.disabled = false;
        };
    }
    function updateProgress() {
        const progressBar = document.getElementById('progress-bar');

        const percent =
            ((currentLessonIndex + 1) / lessons.length) * 100;

        progressBar.style.width = percent + '%';
    }
    // [개선] 파이썬 실행: 워커에 코드 전달
    function countInputs(code) {
        const matches = code.match(/\binput\s*\(/g);
        return matches ? matches.length : 0;
    }

    function runPython() {
        if (!pyWorker) return;

        const code = elements.codeInput.value;
        const textSet = getTextSet();

        const inputCount = countInputs(code);
        const inputs = [];

        for (let i = 0; i < inputCount; i++) {
            const value = prompt(`Input ${i + 1}`);
            if (value === null) return;
            inputs.push(value);
        }

        elements.consoleOutput.dataset.hasRun = 'true';
        elements.consoleOutput.textContent = textSet.running;
        elements.runButton.disabled = true;

        pyWorker.postMessage({ code, inputs });
    }

    // [개선] 중지 기능: 실행 중인 워커를 강제 종료 후 재발행
    function stopPython() {
        if (pyWorker) {
            pyWorker.terminate();
            initWorker(); // 엔진을 다시 사용할 수 있도록 재준비
            elements.consoleOutput.textContent = getTextSet().stoppedMessage;
            elements.runButton.disabled = false;
        }
    }

    function setLanguage(lang) {
        currentLang = lang;
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
        elements.answerButton.textContent = textSet.answerButton;
        elements.answerButton.textContent = textSet.answerButton;
        elements.answerTitle.textContent = textSet.answerTitle;
        elements.codeInput.placeholder = textSet.textareaPlaceholder;

        if (elements.consoleOutput.dataset.hasRun !== 'true') {
            elements.consoleOutput.textContent = textSet.consoleDefault;
        }

        // 워커 로딩 상태에 따른 텍스트 동기화
        if (elements.statusBadge.classList.contains('ready')) {
            elements.statusText.textContent = textSet.ready;
        } else {
            elements.statusText.textContent = textSet.loading;
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
        localStorage.setItem('python-progress', index);
        const lesson = lessons[index];
        const textSet = getTextSet();

        renderNavigation();
        localStorage.setItem('python-progress', index);
        const title = lesson.title[currentLang] || lesson.title.ko;
        const theory = lesson.theory[currentLang] || lesson.theory.ko;
        const initialCode = lesson.initialCode ? (lesson.initialCode[currentLang] || lesson.initialCode.ko) : "";

        elements.theoryView.innerHTML = `<h2>${title}</h2>${theory}`;
        elements.codeInput.value = initialCode;
        elements.consoleOutput.textContent = textSet.consoleDefault;
        elements.consoleOutput.dataset.hasRun = 'false';

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
        elements.answerButton.addEventListener('click', toggleAnswer);
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
    
    // 페이지 로드 시 워커 시스템 시작
    initWorker();
})();