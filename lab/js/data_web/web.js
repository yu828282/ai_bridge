import { lessons_ko } from './lessons_ko.js';
import { lessons_en } from './lessons_en.js';
import { lessons_ru } from './lessons_ru.js';

const lessonData = {
  ko: lessons_ko,
  en: lessons_en,
  ru: lessons_ru
};

// =============================
// DOM
// =============================
const codeArea = document.getElementById("html-code");
const runBtn = document.getElementById("run-btn");
const resetBtn = document.getElementById("reset-btn");
const answerBtn = document.getElementById("answer-btn");
const theoryView = document.getElementById("theory-view");
const navBar = document.getElementById("nav-bar");
const mobileNav = document.getElementById("mobile-nav");
const brandTitle = document.getElementById("brand-title");
const brandSubtitle = document.getElementById("brand-subtitle");
const langButtons = document.querySelectorAll(".lang-btn");
const lessonChip = document.querySelector(".lesson-chip");
const editorTitle = document.querySelector(".editor-title");
const hamburger = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("mobile-backdrop");

let currentLang = "ko";
let currentLessonIndex = 0;

// =============================
// 공통 접근
// =============================
function getCurrentPack() {
  return lessonData[currentLang];
}

function getCurrentLesson() {
  return lessonData[currentLang].lessons[currentLessonIndex];
}

// =============================
// 코드 기능
// =============================
function runCode() {
  const iframe = document.getElementById("preview-frame");
  if (!iframe || !codeArea) return;
  iframe.srcdoc = codeArea.value;
}

function resetCode() {
  if (!codeArea) return;
  codeArea.value = getCurrentLesson().defaultCode;
  runCode();
}

function showAnswer() {
  if (!codeArea) return;
  codeArea.value = getCurrentLesson().answerCode;
  runCode();
}

// =============================
// 이론/버튼 렌더링
// =============================
function showLessonContent() {
  if (theoryView) theoryView.innerHTML = getCurrentLesson().lessonHtml;
  if (lessonChip) lessonChip.textContent = getCurrentLesson().chip;
}

function renderNav() {
  const lessons = getCurrentPack().lessons;

  const desktopHtml = lessons.map((lesson, index) => `
    <button class="nav-btn ${index === currentLessonIndex ? "active" : ""}" type="button" data-index="${index}">
      ${lesson.navTitle}
    </button>
  `).join("");

  if (navBar) navBar.innerHTML = desktopHtml;
  if (mobileNav) mobileNav.innerHTML = desktopHtml;

  bindNavEvents();
}

function bindNavEvents() {
  const allNavButtons = document.querySelectorAll(".nav-btn");
  allNavButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      currentLessonIndex = Number(this.dataset.index);
      renderNav();
      showLessonContent();
      resetCode();

      if (mobileMenu) mobileMenu.classList.remove("open");
      if (backdrop) backdrop.classList.remove("show");
      if (hamburger) hamburger.classList.remove("open");
    });
  });
}
//=========================================
//Tab키 적용
const codeEditor = document.getElementById("html-code");

codeEditor.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    e.preventDefault(); // 브라우저 기본 포커스 이동 방지

    const start = this.selectionStart;
    const end = this.selectionEnd;
    const value = this.value;

    if (!e.shiftKey) {
      // 1. 일반 Tab: 들여쓰기 (공백 2칸 삽입)
      this.value = value.substring(0, start) + "  " + value.substring(end);
      this.selectionStart = this.selectionEnd = start + 2;
    } else {
      // 2. Shift + Tab: 내어쓰기 (공백 2칸 제거)
      // 현재 커서 바로 앞의 두 글자가 공백인지 확인합니다.
      if (value.substring(start - 2, start) === "  ") {
        this.value = value.substring(0, start - 2) + value.substring(start);
        this.selectionStart = this.selectionEnd = start - 2;
      } 
      // 만약 한 칸만 공백이라면 한 칸만 지웁니다.
      else if (value.substring(start - 1, start) === " ") {
        this.value = value.substring(0, start - 1) + value.substring(start);
        this.selectionStart = this.selectionEnd = start - 1;
      }
    }
    
    // 코드가 변경되었으므로 필요하다면 실시간 미리보기를 갱신합니다.
    // runCode(); // 실시간 반영을 원할 경우 활성화
  }
});

// =============================
// 언어 변경
// =============================
function setLanguage(lang) {
  if (!lessonData[lang]) return;
  currentLang = lang;

  const pack = getCurrentPack();

  const statusBadge = document.querySelector(".status-badge span:last-child");
  if (statusBadge) statusBadge.textContent = pack.status;

  const previewTitle = document.querySelector(".preview-header span:first-child");
  if (previewTitle) previewTitle.textContent = pack.previewTitle;
  if (editorTitle) editorTitle.textContent = pack.editorTitle; 
  if (brandTitle) brandTitle.textContent = pack.brandTitle;
  if (brandSubtitle) brandSubtitle.textContent = pack.brandSubtitle;
  if (runBtn) runBtn.textContent = pack.run;
  if (resetBtn) resetBtn.textContent = pack.reset;
  if (answerBtn) answerBtn.textContent = pack.answer;

  langButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  if (currentLessonIndex >= pack.lessons.length) {
    currentLessonIndex = 0;
  }

  renderNav();
  showLessonContent();
  resetCode();
}

langButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    setLanguage(this.dataset.lang);
  });
});

// =============================
// 모바일 메뉴
// =============================
if (hamburger) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    if (mobileMenu) mobileMenu.classList.toggle("open");
    if (backdrop) backdrop.classList.toggle("show");
  });
}

if (backdrop) {
  backdrop.addEventListener("click", function () {
    if (hamburger) hamburger.classList.remove("open");
    if (mobileMenu) mobileMenu.classList.remove("open");
    backdrop.classList.remove("show");
  });
}

// =============================
// 버튼 이벤트
// =============================
if (runBtn) runBtn.addEventListener("click", runCode);
if (resetBtn) resetBtn.addEventListener("click", resetCode);
if (answerBtn) answerBtn.addEventListener("click", showAnswer);

// =============================
// 초기 실행
// =============================
setLanguage("ko");
requestAnimationFrame(() => {
  runCode();
});