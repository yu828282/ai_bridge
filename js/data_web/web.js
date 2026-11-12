import { lessons_ko, lessons_en, lessons_ru } from './lessons.js';
const lessonData = { ko: lessons_ko, en: lessons_en, ru: lessons_ru };

// Course chrome is translated here; lesson text and examples stay in lessons.js.
const uiText = {
  ko: {
    skipLink: '본문으로 이동', courseNavTitle: '학습 목록', courseEyebrow: 'WEB STUDIO',
    courseTitle: '웹 만들기 연습실', courseDescription: '설명을 읽고, 코드를 조금 바꾼 뒤 결과를 확인하세요.',
    stepRead: '이론 이해', stepEdit: '직접 바꾸기', stepRun: '결과 확인', theoryLabel: '핵심 이해',
    editorLabel: '코드 실습', editorHint: '코드 한 부분을 바꾸고 실행을 누르세요. 들여쓰기: Ctrl+] / 내어쓰기: Ctrl+[. Tab은 다음 버튼으로 이동합니다.',
    resultLabel: '결과 미리보기', closeMenu: '메뉴 닫기', openMenu: '메뉴 열기',
    lessonLabel: '{n}강', languageLabel: '언어 선택', stepsLabel: '학습 단계', editorAria: 'HTML, CSS, JavaScript 코드 편집기',
    previewAria: '내 코드의 웹페이지 미리보기',
    answerTitle: '답안 예시 · 내가 작성한 코드는 유지됩니다', closeAnswer: '답안 닫기',
    resetConfirm: '이 레슨에서 작성한 코드를 지우고 시작 예제로 되돌릴까요?',
    resetHelp: '현재 레슨의 작업 코드를 지우고 시작 예제로 되돌립니다.',
    editing: '코드 수정 중', updated: '미리보기 갱신됨'
  },
  en: {
    skipLink: 'Skip to content', courseNavTitle: 'Lessons', courseEyebrow: 'WEB STUDIO',
    courseTitle: 'Build your first webpage', courseDescription: 'Read the idea, change a little code, then check the result.',
    stepRead: 'Understand', stepEdit: 'Change code', stepRun: 'Check result', theoryLabel: 'Key ideas',
    editorLabel: 'Code practice', editorHint: 'Change one part and press Run. Indent: Ctrl+] / outdent: Ctrl+[. Tab moves to the next control.',
    resultLabel: 'Result preview', closeMenu: 'Close menu', openMenu: 'Open menu',
    lessonLabel: 'Lesson {n}', languageLabel: 'Choose language', stepsLabel: 'Learning steps', editorAria: 'HTML, CSS and JavaScript code editor',
    previewAria: 'Webpage preview of my code',
    answerTitle: 'Example answer · Your code stays unchanged', closeAnswer: 'Hide answer',
    resetConfirm: 'Discard your code for this lesson and restore the starting example?',
    resetHelp: 'Discards this lesson’s working code and restores the starting example.',
    editing: 'Editing code', updated: 'Preview updated'
  },
  ru: {
    skipLink: 'К содержимому', courseNavTitle: 'Список уроков', courseEyebrow: 'WEB STUDIO',
    courseTitle: 'Создаём веб-страницу', courseDescription: 'Прочитайте объяснение, немного измените код и проверьте результат.',
    stepRead: 'Разобраться', stepEdit: 'Изменить код', stepRun: 'Проверить', theoryLabel: 'Главные идеи',
    editorLabel: 'Практика кода', editorHint: 'Измените часть кода и нажмите «Запустить». Отступ: Ctrl+] / убрать отступ: Ctrl+[. Tab переводит фокус к следующему элементу.',
    resultLabel: 'Предпросмотр результата', closeMenu: 'Закрыть меню', openMenu: 'Открыть меню',
    lessonLabel: 'Урок {n}', languageLabel: 'Выбор языка', stepsLabel: 'Шаги обучения', editorAria: 'Редактор кода HTML, CSS и JavaScript',
    previewAria: 'Предпросмотр страницы с моим кодом',
    answerTitle: 'Пример ответа · Ваш код сохраняется', closeAnswer: 'Скрыть ответ',
    resetConfirm: 'Удалить ваш код этого урока и вернуть начальный пример?',
    resetHelp: 'Удаляет рабочий код этого урока и возвращает начальный пример.',
    editing: 'Редактирование кода', updated: 'Предпросмотр обновлён'
  }
};

const codeArea = document.getElementById('html-code');
const runBtn = document.getElementById('run-btn');
const resetBtn = document.getElementById('reset-btn');
const answerBtn = document.getElementById('answer-btn');
const answerDisplay = document.getElementById('ans-display');
const answerText = document.getElementById('ans-text');
const answerTitle = document.getElementById('answerTitle');
const theoryView = document.getElementById('theory-view');
const navBar = document.getElementById('nav-bar');
const mobileNav = document.getElementById('mobile-nav');
const brandTitle = document.getElementById('brand-title');
const brandSubtitle = document.getElementById('brand-subtitle');
const langButtons = document.querySelectorAll('.lang-btn');
const lessonChip = document.querySelector('.lesson-chip');
const hamburger = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('mobile-menu-close');
const backdrop = document.getElementById('mobile-backdrop');
const previewFrame = document.getElementById('preview-frame');
const statusText = document.querySelector('.status-badge span:last-child');

let currentLang = 'ko';
let currentLessonIndex = 0;
let answerOpen = false;
let activeDesktopButton = null;
const draftPrefix = 'ai-bridge-web-draft-v1-'; // Existing student drafts remain compatible.
const memoryDrafts = new Map();
const backgroundInert = new Map();

function draftKey(index) { return draftPrefix + index; }
function readDraft(index) {
  if (memoryDrafts.has(index)) return memoryDrafts.get(index);
  try {
    const draft = localStorage.getItem(draftKey(index));
    if (draft !== null) memoryDrafts.set(index, draft);
    return draft;
  } catch (_) { return null; }
}
function saveDraft() {
  if (!codeArea) return;
  memoryDrafts.set(currentLessonIndex, codeArea.value);
  try { localStorage.setItem(draftKey(currentLessonIndex), codeArea.value); }
  catch (_) { /* The in-memory copy still survives lesson/language changes. */ }
}
function clearDraft(index) {
  // A null tombstone also hides a stale stored copy if storage removal is blocked.
  memoryDrafts.set(index, null);
  try { localStorage.removeItem(draftKey(index)); } catch (_) { /* Use the in-memory reset. */ }
}
function getCurrentPack() { return lessonData[currentLang]; }
function getCurrentLesson() { return getCurrentPack().lessons[currentLessonIndex]; }
function getUI() { return uiText[currentLang]; }
function validLessonIndex(index) {
  return Number.isInteger(index) && index >= 0 && index < getCurrentPack().lessons.length;
}
function setStatus(text) { if (statusText) statusText.textContent = text; }
function restoreDraftOrExample() {
  if (!codeArea) return;
  const saved = readDraft(currentLessonIndex);
  codeArea.value = saved !== null ? saved : getCurrentLesson().defaultCode;
  runCode();
}

function runCode() {
  if (!previewFrame || !codeArea) return;
  // The sandbox permits this example's scripts, without giving it access to the course.
  previewFrame.srcdoc = codeArea.value;
  setStatus(getUI().updated); // This means refreshed, not that the student's code is correct.
}
function resetCode() {
  if (!codeArea) return;
  if (codeArea.value !== getCurrentLesson().defaultCode && !window.confirm(getUI().resetConfirm)) return;
  clearDraft(currentLessonIndex);
  codeArea.value = getCurrentLesson().defaultCode;
  setAnswerOpen(false);
  runCode();
}
function setAnswerOpen(open) {
  answerOpen = Boolean(open);
  if (answerText) answerText.textContent = getCurrentLesson().answerCode;
  if (answerTitle) answerTitle.textContent = getUI().answerTitle;
  if (answerDisplay) {
    answerDisplay.hidden = !answerOpen;
    answerDisplay.style.display = answerOpen ? 'block' : 'none';
  }
  if (answerBtn) {
    answerBtn.setAttribute('aria-expanded', String(answerOpen));
    answerBtn.textContent = answerOpen ? getUI().closeAnswer : getCurrentPack().answer;
  }
}
function showAnswer() { setAnswerOpen(!answerOpen); }

function showLessonContent() {
  const lesson = getCurrentLesson();
  if (theoryView) theoryView.innerHTML = lesson.lessonHtml;
  if (lessonChip) lessonChip.textContent = getUI().lessonLabel.replace('{n}', String(currentLessonIndex + 1));
  document.title = getUI().courseTitle + ' · ' + lesson.navTitle;
  setAnswerOpen(false);
}
function renderNav() {
  activeDesktopButton = null;
  [navBar, mobileNav].forEach(container => {
    if (!container) return;
    container.innerHTML = '';
    getCurrentPack().lessons.forEach((lesson, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'nav-btn' + (index === currentLessonIndex ? ' active' : '');
      button.dataset.index = String(index);
      button.textContent = lesson.navTitle;
      if (index === currentLessonIndex) {
        button.setAttribute('aria-current', 'step');
        if (container === navBar) activeDesktopButton = button;
      }
      button.addEventListener('click', () => selectLesson(index, container === mobileNav));
      container.appendChild(button);
    });
  });
}
function selectLesson(index, fromMobile = false) {
  if (!validLessonIndex(index)) return;
  currentLessonIndex = index;
  renderNav();
  showLessonContent();
  restoreDraftOrExample();
  if (fromMobile) closeMenu();
  else if (activeDesktopButton) activeDesktopButton.focus({ preventScroll: true });
}

function setLanguage(lang) {
  if (!Object.prototype.hasOwnProperty.call(lessonData, lang)) return;
  currentLang = lang;
  if (!validLessonIndex(currentLessonIndex)) currentLessonIndex = 0;
  document.documentElement.lang = lang;
  const pack = getCurrentPack();
  const ui = getUI();
  document.querySelectorAll('[data-course-text]').forEach(element => {
    const text = ui[element.dataset.courseText];
    if (text) element.textContent = text;
  });
  document.querySelectorAll('[data-course-aria]').forEach(element => {
    const text = ui[element.dataset.courseAria];
    if (text) element.setAttribute('aria-label', text);
  });
  if (brandTitle) brandTitle.textContent = pack.brandTitle;
  if (brandSubtitle) brandSubtitle.textContent = pack.brandSubtitle;
  if (runBtn) runBtn.textContent = pack.run;
  if (resetBtn) { resetBtn.textContent = pack.reset; resetBtn.title = ui.resetHelp; }
  if (codeArea) codeArea.setAttribute('aria-label', ui.editorAria);
  if (previewFrame) previewFrame.title = ui.previewAria;
  if (hamburger) hamburger.setAttribute('aria-label', menuIsOpen() ? ui.closeMenu : ui.openMenu);
  if (mobileMenu) mobileMenu.setAttribute('aria-label', ui.courseNavTitle);
  [navBar, mobileNav].forEach(nav => { if (nav) nav.setAttribute('aria-label', ui.courseNavTitle); });
  document.querySelectorAll('.lang-container, .mobile-lang-container').forEach(element => element.setAttribute('aria-label', ui.languageLabel));
  document.querySelectorAll('.study-steps').forEach(element => element.setAttribute('aria-label', ui.stepsLabel));
  langButtons.forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderNav();
  showLessonContent();
  restoreDraftOrExample();
}

function menuIsOpen() { return Boolean(mobileMenu && mobileMenu.classList.contains('open')); }
function openMenu() {
  if (!mobileMenu || window.innerWidth > 768) return;
  document.querySelectorAll('.header-inner, main, .footer').forEach(element => {
    if (!backgroundInert.has(element)) backgroundInert.set(element, element.inert);
    element.inert = true;
  });
  mobileMenu.inert = false;
  mobileMenu.setAttribute('aria-hidden', 'false');
  mobileMenu.setAttribute('role', 'dialog');
  mobileMenu.setAttribute('aria-modal', 'true');
  mobileMenu.classList.add('open');
  if (backdrop) backdrop.classList.add('show');
  if (hamburger) {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', getUI().closeMenu);
  }
  document.body.classList.add('menu-open');
  if (menuClose) menuClose.focus({ preventScroll: true });
}
function closeMenu(returnFocus = true) {
  const wasOpen = menuIsOpen();
  backgroundInert.forEach((previous, element) => { element.inert = previous; });
  backgroundInert.clear();
  if (wasOpen && returnFocus && hamburger) hamburger.focus({ preventScroll: true });
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    mobileMenu.inert = true;
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.setAttribute('aria-modal', 'false');
  }
  if (backdrop) backdrop.classList.remove('show');
  if (hamburger) {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', getUI().openMenu);
  }
  document.body.classList.remove('menu-open');
}

if (codeArea) {
  codeArea.addEventListener('input', () => { saveDraft(); setStatus(getUI().editing); });
  codeArea.addEventListener('keydown', event => {
    // Tab and Shift+Tab retain ordinary keyboard focus navigation.
    if (!event.ctrlKey || event.altKey || event.metaKey || ![']', '['].includes(event.key)) return;
    event.preventDefault();
    const start = codeArea.selectionStart;
    const end = codeArea.selectionEnd;
    const value = codeArea.value;
    const firstLine = value.lastIndexOf('\n', start - 1) + 1;
    const lastLine = value.indexOf('\n', end);
    const segmentEnd = lastLine < 0 ? value.length : lastLine;
    const selected = value.slice(firstLine, segmentEnd);
    const lines = selected.split('\n');
    let firstDelta = 0;
    let totalDelta = 0;
    const changed = lines.map((line, index) => {
      const updated = event.key === ']' ? '  ' + line : line.replace(/^ {1,2}/, '');
      const delta = updated.length - line.length;
      if (index === 0) firstDelta = delta;
      totalDelta += delta;
      return updated;
    }).join('\n');
    codeArea.value = value.slice(0, firstLine) + changed + value.slice(segmentEnd);
    codeArea.setSelectionRange(Math.max(firstLine, start + firstDelta), Math.max(firstLine, end + totalDelta));
    saveDraft();
    setStatus(getUI().editing);
  });
}
langButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
if (hamburger) hamburger.addEventListener('click', () => menuIsOpen() ? closeMenu() : openMenu());
if (menuClose) menuClose.addEventListener('click', () => closeMenu());
if (backdrop) backdrop.addEventListener('click', () => closeMenu());
window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMenu(false); });
document.addEventListener('keydown', event => {
  if (!menuIsOpen()) return;
  if (event.key === 'Escape') { event.preventDefault(); closeMenu(); return; }
  if (event.key !== 'Tab') return;
  const items = Array.from(mobileMenu.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]'))
    .filter(element => !element.hidden && element.getClientRects().length > 0);
  if (!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if (event.shiftKey && (document.activeElement === first || !mobileMenu.contains(document.activeElement))) {
    event.preventDefault(); last.focus();
  } else if (!event.shiftKey && (document.activeElement === last || !mobileMenu.contains(document.activeElement))) {
    event.preventDefault(); first.focus();
  }
});
if (runBtn) runBtn.addEventListener('click', runCode);
if (resetBtn) resetBtn.addEventListener('click', resetCode);
if (answerBtn) answerBtn.addEventListener('click', showAnswer);
closeMenu(false);
setLanguage('ko');
