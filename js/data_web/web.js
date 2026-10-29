import { lessons_ko, lessons_en, lessons_ru } from './lessons.js';
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

// 레슨별 편집 내용은 언어와 분리해 보관합니다.
// 예제 코드를 언어에 맞춰 다시 보여주는 경우에는 저장된 수정본이 없을 때만 초기화합니다.
const draftPrefix = "ai-bridge-web-draft-v1-";
function draftKey(index) { return draftPrefix + index; }
function readDraft(index) {
  try { return localStorage.getItem(draftKey(index)); }
  catch (_) { return null; }
}
function saveDraft() {
  if (!codeArea) return;
  try { localStorage.setItem(draftKey(currentLessonIndex), codeArea.value); }
  catch (_) { /* 브라우저 저장소 차단 시에도 편집은 유지 */ }
}
function clearDraft(index) {
  try { localStorage.removeItem(draftKey(index)); }
  catch (_) { /* 저장소 차단 시 무시 */ }
}
function restoreDraftOrExample() {
  if (!codeArea) return;
  const saved = readDraft(currentLessonIndex);
  codeArea.value = saved !== null ? saved : getCurrentLesson().defaultCode;
  runCode();
}

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
  // 초기화는 의도적인 작업본 삭제입니다. 이후 언어 전환 시 해당 언어의 예제가 표시됩니다.
  clearDraft(currentLessonIndex);
  codeArea.value = getCurrentLesson().defaultCode;
  runCode();
}

function showAnswer() {
  if (!codeArea) return;
  codeArea.value = getCurrentLesson().answerCode;
  saveDraft();
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
      restoreDraftOrExample();

      if (mobileMenu) mobileMenu.classList.remove("open");
      if (backdrop) backdrop.classList.remove("show");
      if (hamburger) hamburger.classList.remove("open");
    });
  });
}
// =============================
// 편집 키보드 사용성
// Tab / Shift+Tab은 브라우저 기본 포커스 이동을 허용합니다.
// 들여쓰기는 Ctrl+] / Ctrl+[ 단축키로 별도 제공합니다.
// =============================
if (codeArea) {
  codeArea.addEventListener("input", saveDraft);
  codeArea.addEventListener("keydown", function (e) {
    if (!e.ctrlKey || e.altKey || e.metaKey || (e.key !== "]" && e.key !== "[")) return;
    e.preventDefault();
    const start = codeArea.selectionStart;
    const end = codeArea.selectionEnd;
    const value = codeArea.value;
    if (start !== end) {
      // 여러 줄을 선택한 상태에서는 내용을 지우지 않고 줄별 들여쓰기만 바꿉니다.
      const selected = value.slice(start, end);
      const changed = selected.split("\n").map(line =>
        e.key === "]" ? "  " + line : line.replace(/^ {1,2}/, "")
      ).join("\n");
      codeArea.value = value.slice(0, start) + changed + value.slice(end);
      codeArea.setSelectionRange(start, start + changed.length);
    } else if (e.key === "]") {
      codeArea.value = value.slice(0, start) + "  " + value.slice(end);
      codeArea.setSelectionRange(start + 2, start + 2);
    } else {
      const count = value.slice(Math.max(0, start - 2), start).match(/ {1,2}$/)?.[0].length || 0;
      if (!count) return;
      codeArea.value = value.slice(0, start - count) + value.slice(end);
      codeArea.setSelectionRange(start - count, start - count);
    }
    saveDraft();
  });
}

// =============================
// 언어 변경
// =============================
function setLanguage(lang) {
  if (!lessonData[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

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
  restoreDraftOrExample();
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