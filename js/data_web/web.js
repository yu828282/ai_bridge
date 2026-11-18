import { lessons_ko, lessons_en, lessons_ru } from './lessons.js';
import { uiText, getErrorHelp } from './ui.js';
import { createEditor } from './editor.js';
import { createRunner } from './runner.js';

const packs = {ko:lessons_ko, en:lessons_en, ru:lessons_ru};
const subjectGroups = [
  {id:'html',start:0,end:3}, {id:'css',start:3,end:8},
  {id:'js',start:8,end:12}, {id:'project',start:12,end:14}
];
const $ = id => document.getElementById(id);
function setUiLabel(element, text) {
  const name = element.dataset.uiIcon;
  if (!name) { element.textContent = text; return; }
  const icon = document.createElement('span');
  icon.className = 'ui-icon icon-' + name;
  icon.setAttribute('aria-hidden', 'true');
  const label = document.createElement('span');
  label.className = 'button-label';
  label.textContent = text;
  element.replaceChildren(...(element.dataset.iconPosition === 'after' ? [label, icon] : [icon, label]));
}

const STATE_KEY = 'ai-bridge-web-state-v2';
const DRAFT_PREFIX = 'ai-bridge-web-draft-v1-';
const META_PREFIX = 'ai-bridge-web-draft-meta-v2-';
const memory = new Map();
let storageReliable = true;
function readStorage(key) {
  if (memory.has(key)) return memory.get(key);
  try { const value = localStorage.getItem(key); memory.set(key,value); return value; }
  catch (_) { storageReliable = false; return null; }
}
function writeStorage(key,value) {
  memory.set(key,value);
  try { if(value === null) localStorage.removeItem(key); else localStorage.setItem(key,value); }
  catch (_) { storageReliable = false; }
}
function readJSON(key) { try { return JSON.parse(readStorage(key)) || {}; } catch (_) { return {}; } }
const savedState = readJSON(STATE_KEY);
function validIndex(value) { return Number.isInteger(value) && value >= 0 && value < 14; }
function validLang(value) { return ['ko','en','ru'].includes(value); }
function getRoute() {
  const params = new URLSearchParams(location.hash.replace(/^#/,''));
  const n = Number(params.get('lesson'));
  const lang = params.get('lang');
  return {lesson:validIndex(n-1) ? n-1 : null, lang:validLang(lang) ? lang : null};
}
const route = getRoute();
let currentLang = route.lang || (validLang(savedState.lang) ? savedState.lang : 'ko');
let currentLessonIndex = route.lesson !== null ? route.lesson : (validIndex(savedState.lesson) ? savedState.lesson : 0);
let theme = ['light','dark'].includes(savedState.theme) ? savedState.theme : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let previewMode = ['fit','phone','tablet','wide'].includes(savedState.previewMode) ? savedState.previewMode : 'fit';
const completed = new Set(Array.isArray(savedState.completed) ? savedState.completed.filter(validIndex) : []);
const subjectLast = {};
subjectGroups.forEach(group => {
  const last=savedState.subjectLast?.[group.id];
  if(Number.isInteger(last) && last>=group.start && last<group.end) subjectLast[group.id]=last;
});
const checkState = {};
if(savedState.checks && typeof savedState.checks === 'object') {
  Object.entries(savedState.checks).forEach(([key,value]) => {if(validIndex(Number(key)) && Array.isArray(value)) checkState[key] = value.map(item => item === true);});
}
let answerOpen = false, legacyDraft = false, lastError = null;
let draftLanguage = currentLang;
let statusKind = 'loading';
const codeArea = $('html-code');
const editor = createEditor(codeArea,$('code-highlight'),$('line-numbers'));
const draftKey = index => DRAFT_PREFIX + index;
const metaKey = index => META_PREFIX + index;
const ui = () => uiText[currentLang];
const lesson = () => packs[currentLang].lessons[currentLessonIndex];
const format = (text, values={}) => String(text || '').replace(/\{(\w+)\}/g,(_,key) => String(values[key] ?? ''));
function persistState() {
  writeStorage(STATE_KEY, JSON.stringify({lang:currentLang,lesson:currentLessonIndex,theme,previewMode,completed:[...completed],checks:checkState,subjectLast,version:2}));
}
function updateRoute() {
  const hash = '#lesson=' + (currentLessonIndex+1) + '&lang=' + currentLang;
  if(location.hash !== hash) {
    try { history.replaceState(null,'',hash); } catch (_) { /* file previews can still retain their learning state. */ }
  }
}
function updateSaveStatus() {
  $('save-status').textContent = !storageReliable ? ui().memorySaved : readStorage(draftKey(currentLessonIndex)) !== null ? ui().saved : ui().exampleState;
}
function saveDraft() {
  writeStorage(draftKey(currentLessonIndex),codeArea.value);
  writeStorage(metaKey(currentLessonIndex), JSON.stringify({version:legacyDraft ? 1 : 2, lang:draftLanguage}));
  updateSaveStatus();
  updateDraftLanguageNote();
}
function updateDraftLanguageNote() {
  const note=$('draft-language-note');
  const differs=readStorage(draftKey(currentLessonIndex)) !== null && validLang(draftLanguage) && draftLanguage !== currentLang;
  note.hidden=!differs;
  note.textContent=differs ? format(ui().draftLanguageNote,{language:ui().languageNames[draftLanguage]}) : '';
}
function setStatus(kind) {
  statusKind = kind;
  $('preview-status').textContent = ui()[kind] || ui().updated;
  $('preview-status').classList.toggle('has-error',kind === 'errorStatus');
}
function clearError() {
  lastError = null;
  $('runtime-feedback').hidden = true;
  $('runtime-feedback').removeAttribute('role');
  $('runtime-detail').textContent = '';
}
function showError(error) {
  lastError = error;
  setStatus('errorStatus');
  const panel = $('runtime-feedback');
  panel.hidden = false;
  panel.className = 'runtime-feedback error';
  panel.setAttribute('role','alert');
  $('runtime-title').textContent = ui().runtimeTitle;
  $('runtime-message').textContent = getErrorHelp(error.message,currentLang);
  $('runtime-detail').textContent = (error.line ? format(ui().runtimeLine,{n:error.line}) : ui().runtimeUnknownLine) + ' ' + error.message;
  $('error-focus-btn').hidden = !error.line;
}
const runner = createRunner($('preview-frame'), {
  onStart() { clearError(); setStatus('loading'); },
  onReady() { setStatus('updated'); },
  onError(error) { showError(error); }
});
function runCode() { runner.run(codeArea.value); }
function restoreCode() {
  const draft = readStorage(draftKey(currentLessonIndex));
  const meta = readJSON(metaKey(currentLessonIndex));
  draftLanguage=draft !== null && validLang(meta.lang) ? meta.lang : currentLang;
  legacyDraft = draft !== null && meta.version !== 2 && draft !== lesson().defaultCode;
  $('legacy-draft-banner').hidden = !legacyDraft;
  editor.setValue(draft !== null ? draft : lesson().defaultCode);
  $('edit-feedback').textContent = '';
  updateSaveStatus();
  updateDraftLanguageNote();
  runCode();
}
function resetCode() {
  if(codeArea.value !== lesson().defaultCode && !window.confirm(ui().resetConfirm)) return;
  writeStorage(draftKey(currentLessonIndex),null);
  writeStorage(metaKey(currentLessonIndex),null);
  draftLanguage=currentLang;
  legacyDraft = false;
  $('legacy-draft-banner').hidden = true;
  editor.setValue(lesson().defaultCode);
  $('edit-feedback').textContent = '';
  delete checkState[currentLessonIndex];
  completed.delete(currentLessonIndex);
  setAnswerOpen(false);
  renderChecks(); renderNav(); updateProgress(); persistState(); updateSaveStatus(); updateDraftLanguageNote(); runCode();
}
function setAnswerOpen(open) {
  answerOpen = Boolean(open);
  $('ans-display').hidden = !answerOpen;
  $('answer-btn').setAttribute('aria-expanded',String(answerOpen));
  $('answer-btn').textContent = answerOpen ? ui().closeAnswer : ui().answer;
  $('answerTitle').textContent = ui().answerTitle;
  $('ans-text').textContent = lesson().answerCode;
  if(answerOpen) $('ans-display').scrollIntoView({behavior:'auto',block:'nearest'});
}
function renderNav() {
  const nav = $('nav-bar'); nav.replaceChildren();
  subjectGroups.forEach(group => {
    const section = document.createElement('section'); section.className = 'lesson-group'; section.dataset.subject=group.id;
    const heading = document.createElement('h3'); heading.textContent = ui().subjects[group.id].name; section.append(heading);
    for(let index=group.start; index<group.end; index++) {
      const item = packs[currentLang].lessons[index];
      const button = document.createElement('button'); button.type = 'button'; button.className = 'nav-btn' + (index === currentLessonIndex ? ' active' : ''); button.dataset.index = String(index);
      if(index === currentLessonIndex) button.setAttribute('aria-current','step');
      const number = document.createElement('span'); number.className='nav-number'; number.textContent=String(index+1).padStart(2,'0');
      const title = document.createElement('span'); title.className='nav-title'; title.textContent=item.navTitle.replace(/^(?:\d+강\.|Lesson\s+\d+\.|Урок\s+\d+\.)\s*/,'');
      button.append(number,title);
      if(completed.has(index)) {const check=document.createElement('span');check.className='nav-check';check.setAttribute('role','img');check.setAttribute('aria-label',ui().doneLabel);const icon=document.createElement('span');icon.className='ui-icon icon-check';icon.setAttribute('aria-hidden','true');check.append(icon);button.append(check);}
      button.addEventListener('click',() => {closeMenu(false); selectLesson(index,true);});
      section.append(button);
    }
    nav.append(section);
  });
}
function updateProgress() {
  $('progress-label').textContent = format(ui().progress,{n:completed.size});
  $('course-progress').value = completed.size;
  renderSubjects();
}
function renderSubjects() {
  const current=subjectGroups.find(group=>currentLessonIndex>=group.start && currentLessonIndex<group.end);
  document.body.dataset.subject=current.id;
  subjectLast[current.id]=currentLessonIndex;
  $('subject-description').textContent=ui().subjects[current.id].description;
  document.querySelectorAll('[data-subject-target]').forEach(button=>{
    const group=subjectGroups.find(item=>item.id===button.dataset.subjectTarget);
    const copy=ui().subjects[group.id];
    const active=current.id===group.id;
    const done=[...completed].filter(index=>index>=group.start && index<group.end).length;
    const range=format(ui().subjectRange,{start:String(group.start+1).padStart(2,'0'),end:String(group.end).padStart(2,'0')});
    const progress=format(ui().subjectProgress,{done,total:group.end-group.start});
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
    button.setAttribute('aria-label',copy.name+' · '+copy.role+' · '+range+' · '+progress+(active?' · '+ui().subjectCurrent:''));
    button.querySelector('strong').textContent=copy.name;
    button.querySelector('.subject-role').textContent=copy.role;
    button.querySelector('.subject-number').textContent=range;
    button.querySelector('.subject-card-progress').textContent=progress;
  });
}
function renderChecks() {
  const checks = Array.isArray(lesson().checks) ? lesson().checks : [];
  const values = checkState[currentLessonIndex] || [];
  const list = $('checks-list'); list.replaceChildren();
  checks.forEach((text,index) => {
    const label=document.createElement('label');label.className='check-item';
    const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.checked=values[index]===true;checkbox.id='check-'+index;
    const span=document.createElement('span');span.textContent=text;
    label.append(checkbox,span);list.append(label);
    checkbox.addEventListener('change',() => {
      if(!checkState[currentLessonIndex]) checkState[currentLessonIndex] = [];
      checkState[currentLessonIndex][index] = checkbox.checked;
      if(!checkbox.checked) completed.delete(currentLessonIndex);
      updateChecks();updateProgress();renderNav();persistState();
    });
  });
  updateChecks();
}
function updateChecks() {
  const total = lesson().checks?.length || 0;
  const count = (checkState[currentLessonIndex] || []).slice(0,total).filter(Boolean).length;
  const done = completed.has(currentLessonIndex);
  $('checks-count').textContent = count + ' / ' + total;
  $('complete-btn').disabled = !done && (total === 0 || count !== total);
  $('complete-btn').textContent = done ? ui().undoComplete : ui().markComplete;
  $('complete-btn').classList.toggle('is-complete',done);
  $('complete-status').textContent = done ? (storageReliable ? ui().completionSaved : ui().memorySaved) : count !== total ? ui().checksRemaining : '';
}
function updateImport() {
  $('project-import').hidden = currentLessonIndex !== 13;
  const source = readStorage(draftKey(12));
  const available = source !== null && source.trim() !== '';
  $('import-project-btn').disabled = !available;
  $('import-help').textContent = available ? ui().importAvailable : ui().importEmpty;
}
function importProject() {
  const source = readStorage(draftKey(12));
  if(currentLessonIndex !== 13 || source === null || source.trim() === '') return;
  if(codeArea.value !== lesson().defaultCode && codeArea.value !== source && !window.confirm(ui().importConfirm)) return;
  legacyDraft = false; $('legacy-draft-banner').hidden = true;
  const sourceMeta=readJSON(metaKey(12));
  draftLanguage=validLang(sourceMeta.lang) ? sourceMeta.lang : currentLang;
  editor.setValue(source); saveDraft();
  delete checkState[currentLessonIndex];completed.delete(currentLessonIndex);
  renderChecks();updateProgress();renderNav();persistState();
  $('import-help').textContent = ui().importDone;
  runCode();
}
function renderLesson() {
  $('theory-view').innerHTML = lesson().lessonHtml;
  $('lesson-heading').textContent = lesson().navTitle;
  $('lesson-chip').textContent = format(ui().lessonLabel,{n:currentLessonIndex+1});
  $('lesson-group').textContent = currentLessonIndex < 3 ? 'HTML' : currentLessonIndex < 8 ? 'CSS' : currentLessonIndex < 12 ? 'JavaScript' : ui().projectGroup;
  $('lesson-position').textContent = format(ui().position,{n:currentLessonIndex+1});
  $('focus-label').textContent = lesson().focusLabel || ui().focusFallback;
  $('find-edit-btn').disabled = !lesson().focusText;
  setUiLabel($('find-edit-btn'), /^insert/.test(lesson().focusMode || '') ? ui().findInsert : ui().findEdit);
  const previewHint=currentLessonIndex===10 ? ui().previewNameSteps : currentLessonIndex===11 ? ui().previewScoreSteps : currentLessonIndex===12 ? ui().previewProjectSteps : currentLessonIndex>=8 ? ui().previewButtonSteps : '';
  $('preview-task-hint').textContent=previewHint;
  $('preview-task-hint').hidden=!previewHint;
  document.querySelector('.preview-caption').hidden=Boolean(previewHint);
  ['prev-lesson','bottom-prev'].forEach(id => $(id).disabled = currentLessonIndex === 0);
  ['next-lesson','bottom-next'].forEach(id => $(id).disabled = currentLessonIndex === 13);
  document.title = ui().courseTitle + ' · ' + lesson().navTitle;
  setAnswerOpen(false); renderChecks();updateImport();updateProgress();
}
function focusLesson() {
  $('lesson-heading').focus({preventScroll:true});
  $('main-content').scrollIntoView({behavior:'auto',block:'start'});
}
function selectLesson(index, focus=true) {
  if(!validIndex(index)) return;
  currentLessonIndex=index;
  $('resume-banner').hidden = true;
  renderNav();renderLesson();restoreCode();updateRoute();persistState();updatePreviewSize();
  if(focus) focusLesson();
}
function translateChrome() {
  document.documentElement.lang=currentLang;
  document.querySelectorAll('[data-course-text]').forEach(element => {
    const value=ui()[element.dataset.courseText]; if(value) setUiLabel(element,value);
  });
  document.querySelectorAll('[data-course-aria]').forEach(element => {
    const value=ui()[element.dataset.courseAria]; if(value) element.setAttribute('aria-label',value);
  });
  document.querySelectorAll('.lang-btn').forEach(button => {
    const active=button.dataset.lang===currentLang;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
  });
  $('brand-title').textContent=ui().courseTitle;
  codeArea.setAttribute('aria-label',ui().editorAria);
  $('preview-frame').title=ui().previewAria;
  $('reset-btn').title=ui().resetHelp;
  setUiLabel($('run-btn'),ui().run);
  $('reset-btn').textContent=ui().reset;
  applyTheme(false);
  setStatus(statusKind);
}
function setLanguage(lang) {
  if(!validLang(lang) || lang === currentLang) return;
  currentLang=lang;
  translateChrome();renderNav();renderLesson();restoreCode();updateRoute();persistState();updatePreviewSize();
  $('resume-banner').hidden=true;
}
function applyTheme(save=true) {
  document.documentElement.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
  $('theme-label').textContent=theme==='dark' ? ui().lightMode : ui().darkMode;
  $('theme-icon').className='ui-icon icon-'+(theme==='dark' ? 'sun' : 'moon');
  $('theme-toggle').setAttribute('aria-label',theme==='dark' ? ui().lightMode : ui().darkMode);
  $('theme-toggle').setAttribute('aria-pressed',String(theme==='dark'));
  $('theme-toggle').title=theme==='dark' ? ui().lightMode : ui().darkMode;
  if(save) persistState();
}
function updatePreviewSize() {
  const stage=$('preview-stage'),device=$('preview-device'),frame=$('preview-frame');
  const style=getComputedStyle(stage);
  const available=Math.max(1,stage.clientWidth-(parseFloat(style.paddingLeft)||0)-(parseFloat(style.paddingRight)||0));
  const widths={phone:390,tablet:768,wide:1024};
  const width=previewMode==='fit' ? Math.max(1,Math.round(available)) : widths[previewMode];
  const scale=Math.min(1,available/width);
  const height=360;
  device.style.width=width+'px';device.style.height=height+'px';
  device.style.transform='scale('+scale+')';device.style.transformOrigin='top left';
  device.dataset.device=previewMode;
  frame.style.width=width+'px';frame.style.height=height+'px';
  stage.style.height=(height*scale+(parseFloat(style.paddingTop)||0)+(parseFloat(style.paddingBottom)||0))+'px';
  $('preview-width').textContent=format(ui().previewWidth,{n:width});
  $('preview-scale-note').hidden=scale>=0.995;
  $('preview-scale-note').textContent=format(ui().scaleNote,{n:width,scale:Math.round(scale*100)});
  document.querySelectorAll('[data-device]').forEach(button => {
    if(button.tagName !== 'BUTTON') return;
    const active=button.dataset.device===previewMode;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
  });
}
const backgroundInert=new Map();
function menuIsOpen() {return !$('mobile-menu').hidden;}
function openMenu() {
  document.querySelectorAll('.site-header,main,.footer').forEach(element=>{backgroundInert.set(element,element.inert);element.inert=true;});
  $('mobile-menu').hidden=false;$('mobile-menu').inert=false;$('mobile-menu').classList.add('open');
  $('mobile-backdrop').hidden=false;$('mobile-backdrop').classList.add('show');
  $('lessons-toggle').setAttribute('aria-expanded','true');document.body.classList.add('menu-open');
  $('mobile-menu-close').focus({preventScroll:true});
}
function closeMenu(returnFocus=true) {
  const wasOpen=menuIsOpen();
  backgroundInert.forEach((value,element)=>element.inert=value);backgroundInert.clear();
  $('mobile-menu').classList.remove('open');$('mobile-menu').hidden=true;$('mobile-menu').inert=true;
  $('mobile-backdrop').hidden=true;$('mobile-backdrop').classList.remove('show');
  $('lessons-toggle').setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');
  if(wasOpen && returnFocus) $('lessons-toggle').focus({preventScroll:true});
}
codeArea.addEventListener('input',()=>{saveDraft();setStatus('editing');});
$('run-btn').addEventListener('click',runCode);
$('reset-btn').addEventListener('click',resetCode);
$('legacy-reset-btn').addEventListener('click',resetCode);
$('answer-btn').addEventListener('click',()=>setAnswerOpen(!answerOpen));
$('answer-close-btn').addEventListener('click',()=>{setAnswerOpen(false);$('answer-btn').focus({preventScroll:true});});
$('find-edit-btn').addEventListener('click',()=>{
  let target=lesson().focusText;
  if(target && !codeArea.value.includes(target) && validLang(draftLanguage) && draftLanguage!==currentLang) {
    const savedTarget=packs[draftLanguage].lessons[currentLessonIndex].focusText;
    if(savedTarget && codeArea.value.includes(savedTarget)) target=savedTarget;
  }
  const mode=lesson().focusMode || 'replace';
  const line=editor.find(target,mode);
  const found=mode==='insertAfter' ? ui().foundInsertAfter : mode==='insertBefore' ? ui().foundInsertBefore : ui().foundEdit;
  $('edit-feedback').textContent=line ? format(found,{n:line}) : ui().notFound;
});
$('error-focus-btn').addEventListener('click',()=>{if(lastError?.line) editor.focusLine(lastError.line);});
['prev-lesson','bottom-prev'].forEach(id=>$(id).addEventListener('click',()=>selectLesson(currentLessonIndex-1)));
['next-lesson','bottom-next'].forEach(id=>$(id).addEventListener('click',()=>selectLesson(currentLessonIndex+1)));
$('lessons-toggle').addEventListener('click',()=>menuIsOpen()?closeMenu():openMenu());
$('mobile-menu-close').addEventListener('click',()=>closeMenu());
$('mobile-backdrop').addEventListener('click',()=>closeMenu());
$('theme-toggle').addEventListener('click',()=>{theme=theme==='light'?'dark':'light';applyTheme();});
$('dismiss-resume').addEventListener('click',()=>{$('resume-banner').hidden=true;});
$('import-project-btn').addEventListener('click',importProject);
$('complete-btn').addEventListener('click',()=>{
  const all=(lesson().checks||[]).length>0 && lesson().checks.every((_,i)=>checkState[currentLessonIndex]?.[i]===true);
  if(completed.has(currentLessonIndex)) completed.delete(currentLessonIndex);
  else if(all) completed.add(currentLessonIndex);
  persistState();updateChecks();updateProgress();renderNav();
});
document.querySelectorAll('.lang-btn').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
document.querySelectorAll('[data-subject-target]').forEach(button=>button.addEventListener('click',()=>{
  const group=subjectGroups.find(item=>item.id===button.dataset.subjectTarget);
  const last=subjectLast[group.id];
  selectLesson(Number.isInteger(last) && last>=group.start && last<group.end ? last : group.start);
}));
document.querySelectorAll('button[data-device]').forEach(button=>button.addEventListener('click',()=>{previewMode=button.dataset.device;updatePreviewSize();persistState();}));
document.addEventListener('keydown',event=>{
  if(!menuIsOpen()) return;
  if(event.key==='Escape'){event.preventDefault();closeMenu();return;}
  if(event.key!=='Tab') return;
  const items=[...$('mobile-menu').querySelectorAll('button:not([disabled]),a[href]')].filter(el=>!el.hidden && el.getClientRects().length>0);
  if(!items.length)return;
  const first=items[0],last=items[items.length-1];
  if(event.shiftKey && (document.activeElement===first||!$('mobile-menu').contains(document.activeElement))){event.preventDefault();last.focus();}
  else if(!event.shiftKey && (document.activeElement===last||!$('mobile-menu').contains(document.activeElement))){event.preventDefault();first.focus();}
});
document.querySelectorAll('[data-jump],.skip-link').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault(); const target=$(link.dataset.jump || 'main-content'); target.focus({preventScroll:true}); target.scrollIntoView({behavior:'auto',block:'start'});
}));
window.addEventListener('hashchange',()=>{
  const params=new URLSearchParams(location.hash.slice(1));
  if(!params.has('lesson')&&!params.has('lang'))return;
  const next=getRoute();
  if(next.lang) currentLang=next.lang;
  translateChrome();selectLesson(next.lesson!==null?next.lesson:currentLessonIndex,true);
});
window.addEventListener('resize',updatePreviewSize);
if(typeof ResizeObserver!=='undefined') new ResizeObserver(updatePreviewSize).observe($('preview-stage'));
translateChrome();renderNav();renderLesson();restoreCode();updateRoute();persistState();
requestAnimationFrame(updatePreviewSize);
if(route.lesson===null && validIndex(savedState.lesson) && savedState.lesson>0){
  $('resume-banner').hidden=false;$('resume-text').textContent=format(ui().resume,{title:lesson().navTitle});
}
