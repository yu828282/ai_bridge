/* One HTML entry, 14 preserved interactive lesson modules. */
(function () {
 const pages = [{"id":"week01","label":"W1","title":"Week 1: AI Service UX","subject":{"ko":"AI & UX 기초","en":"AI & UX Basics","ru":"Основы ИИ и UX"}},{"id":"week02","label":"W2","title":"Week 2: AI Design Thinking","subject":{"ko":"디자인 씽킹과 페르소나","en":"Design Thinking & Personas","ru":"Дизайн-мышление и персоны"}},{"id":"week03","label":"W3","title":"Week 3: The 6 Core States of AI Interfaces","subject":{"ko":"AI 인터페이스의 6가지 상태","en":"Six AI Interface States","ru":"6 состояний интерфейса ИИ"}},{"id":"week04","label":"W4","title":"Week 4: AI Interaction Design & Chat Flows","subject":{"ko":"대화 흐름과 상호작용","en":"Conversation & Interaction","ru":"Диалог и взаимодействие"}},{"id":"week05","label":"W5","title":"Week 5: Trust, Mistakes, & Explainable AI (XAI)","subject":{"ko":"신뢰 · 오류 · 설명 가능성","en":"Trust & Explainability","ru":"Доверие и объяснимость"}},{"id":"week06","label":"W6","title":"Week 6: AI Onboarding & Feedback UI","subject":{"ko":"온보딩과 피드백","en":"Onboarding & Feedback","ru":"Онбординг и обратная связь"}},{"id":"week07","label":"W7","title":"Week 7: Wizard of Oz (WoZ) Prototyping","subject":{"ko":"오즈의 마법사(WoZ) 프로토타이핑","en":"Wizard of Oz Prototyping","ru":"Прототипирование Wizard of Oz"}},{"id":"week08","label":"W8","title":"Week 8: Midterm / Optional UI Component Lab","subject":{"ko":"중간고사 · 선택 보너스 실습","en":"Midterm · Optional UI Component Lab","ru":"Промежуточный экзамен · факультативная практика UI"}},{"id":"week09","label":"W9","title":"Week 09: Figma Prototyping for AI Services","subject":{"ko":"Figma 프로토타입 실습","en":"Figma Prototype Lab","ru":"Прототипирование в Figma"}},{"id":"week10","label":"W10","title":"Week 10: Ethical AI UX & Human Control","subject":{"ko":"윤리와 인간 통제","en":"Ethics & Human Control","ru":"Этика и контроль человека"}},{"id":"week11","label":"W11","title":"Week 11: Personalization & Privacy","subject":{"ko":"개인화와 개인정보","en":"Personalization & Privacy","ru":"Персонализация и приватность"}},{"id":"week12","label":"W12","title":"Week 12: AI Service Blueprint","subject":{"ko":"서비스 블루프린트","en":"Service Blueprint","ru":"Сервисный чертёж"}},{"id":"week13","label":"W13","title":"Week 13: AI Usability Testing & Self-Audit","subject":{"ko":"AI 사용성 평가와 셀프 진단","en":"AI Usability Testing & Self-Audit","ru":"Юзабилити ИИ и самоаудит"}},{"id":"week14","label":"W14","title":"Week 14: Prototype QA & Final Portfolio","subject":{"ko":"최종 프로토타입 점검","en":"Final Prototype QA","ru":"Финальная проверка прототипа"}}];
 const qs = new URLSearchParams(window.location.search);
 const requested = qs.get('week') || 'week01';
 const ix = Math.max(0, pages.findIndex(p => p.id === requested));
 const current = pages[ix];
 const template = document.getElementById('lesson-' + current.id);
 const mount = document.getElementById('lesson-content');
 if (!template || !mount) { console.error('UX lecture template missing'); return; }
 document.body.dataset.page = current.id;
 mount.replaceChildren(template.content.cloneNode(true));
 const staticDemos = {"week03":{"텅 빈 입력창 (무엇을 질문해야 할지 모름 👉":["Empty input: the user does not know what to ask →","Пустое поле: пользователь не знает, что спросить →"],"추천 프롬프트 칩 제공!":["Offer suggested prompt chips!","Предложите готовые варианты запроса!"],"구조화되지 않은 거대한 줄글 덩어리 (👉":["One long, unstructured block of text →","Один длинный, неструктурированный текст →"],"카드, 불릿, 표 사용!":["Use cards, bullets and tables!","Используйте карточки, списки и таблицы!"],"에러 발생 시 처음부터 다시 입력하게 강요 (👉":["After an error, the user must retype everything →","После ошибки нужно вводить всё заново →"],"1-Click 재시도 버튼 제공!":["Offer a one-click retry button!","Дайте кнопку повтора в одно нажатие!"]},"week06":{": 좋아요/싫어요(1-Tap) 버튼을 안전 경고문 옆에 배치하세요.":[": Place one-tap Like/Dislike buttons beside the safety notice.",": Разместите кнопки «Нравится/Не нравится» рядом с предупреждением."],": [복사]를 누르면 긍정, 글을 다 읽기도 전에 [다시 생성]을 누르면 강력한 부정 신호로 자동 기록됩니다.":[": Copy signals positive feedback; Regenerate before reading the answer signals negative feedback.",": Копирование даёт положительный сигнал; повторная генерация до чтения — отрицательный."]},"week09":{"단축키를 클릭해 보세요!":["Click a shortcut above!","Нажмите горячую клавишу!"],"짧은 글":["Short text","Короткий текст"],"아이콘":["Icon","Значок"],"PDF 요약...":["Summarize PDF...","Пересказать PDF..."],"요약 결과입니다...":["Here is the summary...","Вот краткий пересказ..."]},"week08":{"✨ AI 요약 결과":["✨ AI summary","✨ Краткий пересказ ИИ"],"방금 전":["Just now","Только что"],"\"비자 서류 번역 및 주요 제출 항목 정리가 완료되었습니다. 독립된 카드 컨테이너로 제공됩니다.\"":["\"Your visa-document translation and submission checklist are ready, inside this card.\"","«Перевод визовых документов и список необходимых материалов готовы в этой карточке.»"],"👤 사용자: 긴 보고서 작성 요청":["👤 User: Please write a long report","👤 Пользователь: напишите длинный отчёт"],"🤖 AI: 1단계 개요 작성 중...":["🤖 AI: Step 1, drafting the outline...","🤖 ИИ: шаг 1, составление плана..."],"🤖 AI: 2단계 본문 데이터 분석 요약...":["🤖 AI: Step 2, analyzing and summarizing data...","🤖 ИИ: шаг 2, анализ и сводка данных..."],"🤖 AI: 3단계 최종 결론 및 권고사항 도출 완료!":["🤖 AI: Step 3, conclusions and recommendations complete!","🤖 ИИ: шаг 3, выводы и рекомендации готовы!"],"스크롤을 계속 내려도 위 파란색 헤더는 상단에 고정되어 유지됩니다!":["The blue header stays visible when you scroll!","Синяя шапка остаётся на месте при прокрутке!"],"✅ 답변 생성이 완료되어 콘텐츠가 노출되었습니다!":["✅ The response is ready and displayed!","✅ Ответ готов и показан!"],"비자 가이드.pdf":["Visa guide.pdf","Визовый гид.pdf"],"HiKorea 문서":["HiKorea document","Документ HiKorea"]}};
 const localizedNodes=[];
 const localizedMap=staticDemos[current.id] || {};
 const walker=document.createTreeWalker(mount,NodeFilter.SHOW_TEXT);
 const pending=[]; let textNode;
 while((textNode=walker.nextNode())) {
   const rawText=textNode.textContent; const compact=rawText.trim();
   if (localizedMap[compact] && !textNode.parentElement.closest('[data-key]')) pending.push({node:textNode,key:compact});
 }
 pending.forEach(({node,key})=>{
   const span=document.createElement('span');
   const i=localizedNodes.length;
   span.dataset.uxStatic=String(i);
   span.textContent=node.textContent;
   node.parentNode.replaceChild(span,node);
   localizedNodes.push({span,key,ko:span.textContent,prefix:span.textContent.match(/^\s*/)[0],suffix:span.textContent.match(/\s*$/)[0]});
 });
 document.title = current.title + ' | UX Studio';
 const urlFor = id => 'index.html?week=' + encodeURIComponent(id);
 for (const [sel, mobile] of [['.nav-container',false],['#mobile-ux-nav',true]]) {
   const nav = document.querySelector(sel);
   if (!nav) continue;
   const items = document.createDocumentFragment();
   pages.forEach(p => {
     const a = document.createElement('a');
     a.href = urlFor(p.id); a.textContent = p.label;
     a.className = 'nav-btn nav-link';
     a.title = p.title;
     if (p.id === current.id) { a.classList.add('active'); a.setAttribute('aria-current','page'); }
     items.appendChild(a);
   });
   nav.replaceChildren(items);
   const active = nav.querySelector('[aria-current="page"]');
   if (active && !mobile && active.scrollIntoView && window.matchMedia('(max-width: 768px)').matches === false) {
     // Avoid jumping the document vertically when selecting a lesson near the end.
     nav.scrollLeft = active.offsetLeft - nav.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
   }
 }
 const prev = pages[ix-1] || null;
 const next = pages[ix+1] || null;
 for (const [name,p] of [['prev-lesson',prev],['next-lesson',next],['next-lesson-bottom',next]]) {
   const a = document.getElementById(name);
   if (!a) continue;
   if (p) a.href=urlFor(p.id);
   else { a.removeAttribute('href'); a.setAttribute('aria-disabled','true'); }
 }
 document.getElementById('lesson-caption').textContent = 'Week ' + Number(current.id.substring(4));
 document.getElementById('lesson-progress').textContent = 'Lesson ' + (ix+1) + ' / ' + pages.length;
 const strings={
   ko:{'menu-title':'강의 목록','guide-eyebrow':'AI UX DESIGN · LEARNING STUDIO','guide-title':'AI 서비스 UX, 직접 경험하며 배우기','guide-desc':'처음이라면 1주차부터 시작하세요. 개념을 읽고 실습 화면의 버튼을 직접 눌러보세요.','guide-tag1':'개념 이해','guide-tag2':'인터랙티브 실습','guide-tag3':'스스로 점검','prereq-link':'AI가 처음인가요? AI 기초 강의 먼저 보기 →','guide-hint':'8주차는 중간고사 기간이며 선택 보너스 실습입니다. 화면과 버튼은 학습용 데모로 Figma 파일을 변경하지 않습니다. 제출 기한은 공식 공지를 확인하세요.','exam-note-title':'8주차 · 중간고사 기간','exam-note-desc':'정규 수업자료 대신 선택형 보너스 UI 실습을 제공합니다. 중간고사 및 과제 안내는 학교 공식 공지를 확인하세요.','prev':'이전','next':'다음'},
   en:{'menu-title':'Course lessons','guide-eyebrow':'AI UX DESIGN · LEARNING STUDIO','guide-title':'Learn AI Service UX by trying it','guide-desc':'New here? Begin with Week 1. Read the concepts, then click the demo controls to see how each interface works.','guide-tag1':'Understand','guide-tag2':'Try the demos','guide-tag3':'Check your learning','prereq-link':'New to AI? Try the AI Basics course first →','guide-hint':'Week 8 is the midterm period, with an optional bonus lab. Demos do not change your Figma file. Confirm deadlines in official announcements.','exam-note-title':'Week 8 · Midterm period','exam-note-desc':'There is no regular Week 8 lesson. This optional UI lab is provided for practice. Check your school announcements for exam and assignment details.','prev':'Previous','next':'Next'},
   ru:{'menu-title':'Уроки курса','guide-eyebrow':'AI UX DESIGN · LEARNING STUDIO','guide-title':'Изучайте UX для ИИ на практике','guide-desc':'Вы здесь впервые? Начните с недели 1. Прочитайте объяснение и нажмите на элементы демо.','guide-tag1':'Понимание','guide-tag2':'Практика','guide-tag3':'Самопроверка','prereq-link':'Впервые изучаете ИИ? Сначала курс по основам →','guide-hint':'Неделя 8 — промежуточный экзамен с факультативной лабораторной работой. Демо не изменяют файл Figma. Сроки уточняйте в официальных объявлениях.','exam-note-title':'Неделя 8 · Промежуточный экзамен','exam-note-desc':'Обычного занятия нет; эта лабораторная работа предлагается по желанию. Следите за официальными объявлениями об экзамене.','prev':'Назад','next':'Далее'}
 };
 window.uxGetPreferredLanguage = function () { try { const lang=localStorage.getItem('ux-studio-lang'); return ['ko','en','ru'].includes(lang)?lang:'ko'; } catch(e){return 'ko';} };
 window.uxApplyChrome = function (lang) {
   const l=['ko','en','ru'].includes(lang)?lang:'ko';
   document.documentElement.lang=l;
   try {localStorage.setItem('ux-studio-lang',l);} catch(e){}
   document.querySelectorAll('[data-ui]').forEach(el => { const t=strings[l][el.dataset.ui]; if (t) el.textContent=t; });
   document.getElementById('lesson-subject').textContent = current.subject[l];
   localizedNodes.forEach(item=>{const t=localizedMap[item.key];item.span.textContent=l==='ko'?item.ko:item.prefix+t[l==='en'?0:1]+item.suffix;});
   document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => { const selected=btn.dataset.lang===l; btn.classList.toggle('active',selected); btn.setAttribute('aria-pressed',String(selected)); });
   const btn=document.getElementById('hamburgerBtn'); if(btn)btn.setAttribute('aria-label',l==='en'?'Open course menu':l==='ru'?'Открыть меню курса':'강의 메뉴 열기');
 };
 window.uxAlert = function (key) { const l=window.currentLang || 'ko'; const d=window.translations || {}; window.alert(d[l] && d[l][key] ? d[l][key] : key); };
 // Hover demos should also work with keyboard focus or touch-to-focus.
 mount.querySelectorAll('.tooltip-container').forEach(el => { el.setAttribute('tabindex','0'); el.setAttribute('aria-label','Tooltip demonstration'); });
 // Div-based historic demos retain click handlers and gain keyboard access.
 mount.querySelectorAll('[onclick]').forEach(el => {
   if (/^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) return;
   el.setAttribute('role','button'); el.setAttribute('tabindex','0');
   el.addEventListener('keydown', e => { if (e.key==='Enter' || e.key===' ') {e.preventDefault();e.stopPropagation();el.click();} });
 });
 // Present in every UX lesson without requiring extra files.
 window.uxCurrentPage = current.id;
 // Make custom course notes available to the shared 3-language text rendering.
 if (current.id === 'week08') {
   mount.querySelectorAll('.week08-exam-note [data-key]').forEach(el=> { el.dataset.ui = el.dataset.key; el.removeAttribute('data-key'); });
 }
})();

if (document.body.dataset.page === 'week08') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "W11", "nav-w12": "W12", "nav-w13": "W13", "nav-w14": "W14", "nav-bonus": "Bonus Lab",
                
                "intro-title": "Week 8: 중간고사 · 선택형 AI UI/UX 컴포넌트 랩",
                "intro-l1-b": "목표:", "intro-l1-t": "실제 생성형 AI 서비스(ChatGPT, Claude 등)에 쓰이는 최신 UI 컴포넌트와 애니메이션 마스터하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "컴포넌트별 직관적인 동작 예시와 UX 원리를 개별 카드로 한눈에 확인하고 직접 조작해보세요!",
                
                "deep-title": "핵심 UI 컴포넌트 심층 해부",
                "deep-sub": "컴포넌트마다 이름, 바로 동작해볼 수 있는 실시간 예시, 하단 설명 텍스트를 카드 형태로 구성했습니다.",
                
                "c1-title": "📦 1. 카드 레이아웃 (Card Layout)",
                "c1-desc": "AI가 내놓는 복잡한 텍스트, 이미지, 액션 버튼을 독립된 사각형 카드 안에 시각적으로 묶어 <strong>정보의 경계를 명확히 하고 인지 부하를 줄입니다.</strong>",
                
                "c2-title": "📌 2. 스티키 헤더 (Sticky Header)",
                "c2-inner-sticky": "📌 고정 헤더 (아래로 스크롤해보세요 ⬇️)",
                "c2-desc": "긴 대화와 긴 출력물을 스크롤할 때도 상단 액션 바나 타이틀이 화면 상단에 달라붙어 <strong>현재 맥락 파악과 빠른 조작을 돕습니다.</strong>",
                
                "c3-title": "💀 3. 스켈레톤 로딩 (Skeleton Loading)",
                "c3-btn": "🔄 로딩 다시 재생",
                "c3-desc": "단순 회전 스피너 대신 콘텐츠 윤곽에 은은한 빛(Shimmer) 애니메이션을 주어 <strong>사용자의 체감 대기 시간을 대폭 줄입니다.</strong>",
                
                "c4-title": "💬 4. 툴팁 (Tooltip)",
                "c4-badge": "🧩 [예시 출처] 마우스를 올려보세요",
                "c4-tooltip": "학습용 예시입니다. 실제 외부 데이터 검증은 수행하지 않았습니다.",
                "c4-desc": "화면을 어지럽히지 않으면서도 필요한 순간 마우스 오버 시 즉각 부가 설명과 신뢰도 근거를 제공하는 <strong>마이크로 안내 컴포넌트</strong>입니다.",
                
                "c5-title": "🪄 5. 마이크로 인터랙션 (Micro-interaction)",
                "c5-btn-like": "좋아요 클릭",
                "c5-click-hint": "클릭 시 바운스 효과",
                "c5-desc": "버튼을 눌렀을 때의 통통 튀는 애니메이션(Bounce), 상태 색상 변화 등 <strong>사용자의 행동에 생생한 시각 피드백을 전달</strong>합니다.",
                
                "c6-title": "🍞 6. 토스트 알림 (Toast Notification)",
                "c6-btn-trigger": '📋 "답변 복사" 버튼 누르기',
                "c6-toast-msg": "클립보드에 복사 완료!",
                "c6-desc": "화면 흐름을 방해하는 강제 모달(팝업) 없이, 하단에 잠시 나타났다 사라지며 <strong>작업의 성공/완료 상태를 비침해적으로 알립니다.</strong>",
                
                "c7-title": "📁 7. 사이드 드로어 (Side Drawer / Slide-over)",
                "c7-btn": "📁 원본 출처 서랍 열기/닫기",
                "c7-drawer-title": "참고 문서",
                "c7-drawer-sub": "오른쪽에서 부드럽게 슬라이드인",
                "c7-desc": "주 화면을 벗어나지 않고도 AI의 근거 논문, 대화 히스토리, 설정 패널 등 <strong>상세 정보를 오른쪽에서 부드럽게 꺼내볼 수 있는 오버레이 패널</strong>입니다.",

                "act-title": "보너스 랩 실습 (Figma 컴포넌트 적용)", "act-h3": "내 프로토타입에 최신 AI 컴포넌트 이식하기",
                "act-l1": "Figma에서 AI 답변 영역을 <strong>카드 레이아웃</strong> 형태로 감싸기",
                "act-l2": "로딩 화면에 오늘 배운 <strong>스켈레톤 로딩(Shimmer)</strong> 프레임 추가하기",
                "act-l3": "출처 뱃지(Citation)에 마우스를 올리면 뜨는 <strong>툴팁(Tooltip)</strong> 설명 팝업 만들기",
                "act-l4": "복사 버튼을 눌렀을 때 나타나는 <strong>토스트(Toast) 알림</strong> 컴포넌트 배치하기",
                "act-btn": "🔔 보너스 랩 수강 완료 확인",
                
                "js_checklist": "보너스 랩의 UI 컴포넌트(카드, 스티키 헤더, 스켈레톤, 툴팁, 토스트, 드로어)를 여러분의 피그마 프로토타입에 멋지게 녹여내세요! 수고하셨습니다."
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "W11", "nav-w12": "W12", "nav-w13": "W13", "nav-w14": "W14", "nav-bonus": "Bonus Lab",
                
                "intro-title": "Week 8: Midterm · Optional AI UI/UX Component Lab",
                "intro-l1-b": "Goal:", "intro-l1-t": "Master cutting-edge UI components and animations used in leading generative AI apps like ChatGPT and Claude.",
                "intro-l2-b": "Core:", "intro-l2-t": "Explore interactive live examples and design principles for each component in modular cards!",
                
                "deep-title": "Deep Dive into UI Components",
                "deep-sub": "Each card displays the component name, an interactive live preview, and descriptive UX rationale below.",
                
                "c1-title": "📦 1. Card Layout",
                "c1-desc": "Visually wraps complex AI text, images, and action chips into self-contained rectangular cards to <strong>clearly delimit content and minimize cognitive load.</strong>",
                
                "c2-title": "📌 2. Sticky Header",
                "c2-inner-sticky": "📌 Sticky Header (Try scrolling down ⬇️)",
                "c2-desc": "Remains pinned to the top as users scroll through lengthy conversations, ensuring <strong>instant contextual orientation and swift accessibility.</strong>",
                
                "c3-title": "💀 3. Skeleton Loading",
                "c3-btn": "🔄 Replay Loading",
                "c3-desc": "Replaces standard spinning wheels with a shimmering wave animation within placeholder boxes, <strong>significantly reducing perceived waiting time.</strong>",
                
                "c4-title": "💬 4. Tooltip",
                "c4-badge": "🧩 [Example citation] Hover here",
                "c4-tooltip": "Learning example only. No external source verification has been performed.",
                "c4-desc": "A micro-affordance that delivers immediate auxiliary context and trustworthiness on hover <strong>without cluttering the primary UI viewport.</strong>",
                
                "c5-title": "🪄 5. Micro-interaction",
                "c5-btn-like": "Click Like",
                "c5-click-hint": "Bounce effect on click",
                "c5-desc": "Delivers delightful and instant tactile confirmation to users via <strong>playful bounce physics and smooth color shifts.</strong>",
                
                "c6-title": "🍞 6. Toast Notification",
                "c6-btn-trigger": '📋 Click "Copy Answer"',
                "c6-toast-msg": "Copied to clipboard!",
                "c6-desc": "Unobtrusively communicates completed actions by temporarily floating at the bottom <strong>without interrupting the user's active workflow with modals.</strong>",
                
                "c7-title": "📁 7. Side Drawer / Slide-over",
                "c7-btn": "📁 Toggle Source Drawer",
                "c7-drawer-title": "Referenced Sources",
                "c7-drawer-sub": "Slides in smoothly from right",
                "c7-desc": "An overlay drawer that lets users inspect underlying citations, histories, or setting panels <strong>without ever navigating away from the main canvas.</strong>",

                "act-title": "Bonus Lab Workshop", "act-h3": "Integrate Modern AI Components into Figma",
                "act-l1": "Wrap your AI response area inside a clean <strong>Card Layout</strong> in Figma.",
                "act-l2": "Add a <strong>Skeleton Loading (Shimmer)</strong> frame for your loading state.",
                "act-l3": "Design a <strong>Tooltip</strong> popup that appears when hovering over citation badges.",
                "act-l4": "Place a <strong>Toast notification</strong> component that triggers upon copying answers.",
                "act-btn": "🔔 Confirm Bonus Lab Completion",
                
                "js_checklist": "Successfully weave these UI components (cards, sticky headers, skeletons, tooltips, toasts, drawers) into your Figma prototype! Great job."
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "W11", "nav-w12": "W12", "nav-w13": "W13", "nav-w14": "W14", "nav-bonus": "Бонус Лаб",
                
                "intro-title": "Неделя 8 (экзамен): факультативно: Лаборатория ИИ UI/UX компонентов и микровзаимодействий",
                "intro-l1-b": "Цель:", "intro-l1-t": "Освоить передовые UI-компоненты и анимации, используемые в ChatGPT и Claude.",
                "intro-l2-b": "Главное:", "intro-l2-t": "Интерактивные примеры и принципы UX для каждого компонента в виде отдельных карточек!",
                
                "deep-title": "Глубокий разбор UI компонентов",
                "deep-sub": "Каждая карточка содержит название, интерактивный пример и поясняющий UX-текст снизу.",
                
                "c1-title": "📦 1. Карточный макет (Card Layout)",
                "c1-desc": "Визуально объединяет сложные ответы ИИ в аккуратные карточки, <strong>снижая когнитивную нагрузку и четко разделяя информацию.</strong>",
                
                "c2-title": "📌 2. Липкая шапка (Sticky Header)",
                "c2-inner-sticky": "📌 Липкая шапка (Прокрутите вниз ⬇️)",
                "c2-desc": "Остается закрепленной вверху при скролле длинных диалогов, обеспечивая <strong>быстрый доступ и сохранение контекста.</strong>",
                
                "c3-title": "💀 3. Скелетон-загрузка (Skeleton Loading)",
                "c3-btn": "🔄 Перезапустить загрузку",
                "c3-desc": "Мерцающая волна (Shimmer) вместо спинера заставляет <strong>ощущаемое время ожидания казаться значительно короче.</strong>",
                
                "c4-title": "💬 4. Всплывающая подсказка (Tooltip)",
                "c4-badge": "🧩 [Пример источника] Наведите курсор",
                "c4-tooltip": "Это учебный пример. Проверка внешнего источника не выполнялась.",
                "c4-desc": "Предоставляет моментальные пояснения и доказательства надежности при наведении, <strong>не перегружая основной интерфейс.</strong>",
                
                "c5-title": "🪄 5. Микровзаимодействие (Micro-interaction)",
                "c5-btn-like": "Нажать Лайк",
                "c5-click-hint": "Эффект отскока при клике",
                "c5-desc": "Пружинящая анимация (Bounce) и смена цвета дают <strong>живой и приятный отклик на действия пользователя.</strong>",
                
                "c6-title": "🍞 6. Тост-уведомление (Toast Notification)",
                "c6-btn-trigger": '📋 Нажать "Копировать ответ"',
                "c6-toast-msg": "Скопировано в буфер!",
                "c6-desc": "Всплывает снизу на короткое время, сообщая об успехе действия <strong>без раздражающих блокирующих модальных окон.</strong>",
                
                "c7-title": "📁 7. Боковой ящик (Side Drawer / Slide-over)",
                "c7-btn": "📁 Открыть/закрыть источники",
                "c7-drawer-title": "Источники",
                "c7-drawer-sub": "Плавно выезжает справа",
                "c7-desc": "Позволяет изучить подробности, источники и настройки, <strong>выезжая сбоку без перехода на другую страницу.</strong>",

                "act-title": "Бонусная воркшоп-практика", "act-h3": "Интегрируйте современные ИИ-компоненты в Figma",
                "act-l1": "Оберните зону ответа ИИ в чистый <strong>Card Layout</strong> в Figma.",
                "act-l2": "Добавьте фрейм <strong>Skeleton Loading (Shimmer)</strong> для состояния загрузки.",
                "act-l3": "Спроектируйте всплывающую <strong>Tooltip</strong> подсказку при наведении на бейдж источника.",
                "act-l4": "Разместите компонент <strong>Toast уведомления</strong> при копировании ответов.",
                "act-btn": "🔔 Подтвердить завершение Бонус Лаб",
                
                "js_checklist": "Успешно внедрите эти UI компоненты (карточки, шапки, скелетоны, подсказки, тосты, ящики) в ваш прототип Figma! Отличная работа."
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        // Interactive Demos Inside Cards
        function replaySkeleton() {
            const loading = document.getElementById('sk-demo-loading');
            const content = document.getElementById('sk-demo-content');
            loading.style.display = 'flex';
            content.style.display = 'none';

            setTimeout(() => {
                loading.style.display = 'none';
                content.style.display = 'block';
            }, 1600);
        }

        function toggleMicroLike() {
            const btn = document.getElementById('card-like-btn');
            const icon = document.getElementById('card-like-icon');
            const text = document.getElementById('card-like-text');
            const hint = document.getElementById('micro-feedback');

            btn.classList.toggle('liked');
            if (btn.classList.contains('liked')) {
                icon.innerText = '💖';
                text.innerText = '좋아요 완료';
                hint.innerText = '반응 성공!';
                hint.style.color = '#4ade80';
            } else {
                icon.innerText = '👍';
                text.innerText = translations[currentLang]['c5-btn-like'];
                hint.innerText = translations[currentLang]['c5-click-hint'];
                hint.style.color = '#94a3b8';
            }
        }

        let toastTimer = null;
        function triggerToastDemo() {
            const toast = document.getElementById('card-toast-demo');
            toast.classList.add('show');
            if (toastTimer) clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.classList.remove('show');
            }, 2200);
        }

        function toggleCardDrawer() {
            const drawer = document.getElementById('card-drawer-demo');
            drawer.classList.toggle('open');
        }

        // Card entry animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.08 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // Initialize language
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, replaySkeleton, toggleMicroLike, triggerToastDemo, toggleCardDrawer});
})();
}

if (document.body.dataset.page === 'week01') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1: UX Basics",
                "nav-w2": "Week 2: Chat & Empathy",
                "nav-w3": "Week 3: AI Constraints",
                "intro-title": "Week 1: AI & UX 디자인 기초",
                "intro-l1-b": "수업 방식:", "intro-l1-t": "100% 온라인 (2주차부터 녹화 영상 🎥)",
                "intro-l2-b": "준비물:", "intro-l2-t": "노트북 & 크롬 브라우저",
                "intro-l3-b": "출석:", "intro-l3-t": "매주 MS Teams 퀴즈 기한 내 제출!",
                "uiux-title": "UI vs UX",
                "uiux-ui-desc": "눈에 보이는 디자인<br>(예쁜 유리 케첩병)",
                "uiux-ux-desc": "사용하기 편리한 경험<br>(거꾸로 된 플라스틱 병)",
                "hist-title": "인터페이스 진화", "hist-sub": "(직접 상자 안을 클릭해보세요!)",
                "hist-cli-desc": "명령어 직접 입력 (전문가용)",
                "hist-gui-btn": "클릭", "hist-gui-desc": "마우스로 아이콘 클릭 (대중화)",
                "hist-ai-chat-ask": '"비행기표 예약해줘"',
                "hist-ai-desc": "자연어 대화 (원하는 걸 말로)",
                "diff-title": "전통 UX vs 확률적 AI UX", "diff-sub": "버튼을 여러 번 눌러 예측 가능성(차이점)을 확인해 보세요!",
                "diff-trad-t": "📦 전통 UX (결정론적)", "diff-trad-p": "100% 예측 가능", "diff-trad-res": "대기 중...",
                "diff-ai-t": "🤖 AI UX (확률적)", "diff-ai-p": "매번 다름 / 환각 발생 가능",
                "gb-title": "좋은 AI UX vs 나쁜 AI UX",
                "gb-bad-t": "❌ 나쁜 UX (Silent Freeze)", "gb-bad-p": "화면 멈춤 (아무 피드백 없음)",
                "gb-good-t": "✅ 좋은 UX (Streaming)", "gb-good-p": "한 글자씩 보여주며 로딩 표시",
                "gb-btn-ask": "질문하기",
                "gb-list1-b": "좋은 UX 필수요소:", "gb-list1-t": "추천 키워드, 1-Click Fix(빠른 수정), 투명성",
                "gb-list2-b": "나쁜 UX 피하기:", "gb-list2-t": "빈 화면 방치, 완벽하다는 과대광고(Hype)",
                "act-title": "15분 액티비티!", "act-h3": "내 폰 안의 AI 기능 캡처하기",
                "act-p": '얼굴 인식, 자동완성 등 아무 AI 기능이나 캡처 후,<br><strong>"이 기능은 왜 편할까? 왜 불편할까?"</strong> 관찰해 보세요!',
                "act-btn": "🔔 1주차 체크리스트 확인",
                // Dynamic strings
                "js_gui_alert": "내 문서 폴더가 열렸습니다! 📁",
                "js_ai_reply": "네, 이번 주말 제주행 비행기 표를 검색해 드릴게요! ✈️",
                "js_trad_res": "결과: 5 (항상 똑같음!)",
                "js_ai_calc": ["음... 5 입니다! 😄", "아마도 4? 아니 5입니다. 🤔", "확실하진 않지만 23 아닐까요? (환각 😱)", "5! 추가로 2*3=6 입니다. 🤓", "서버 오류로 답변할 수 없습니다. 🚨"],
                "js_bad_ux": "답변이 3초 뒤에 갑자기 나타납니다.",
                "js_good_ux": "기다리지 않게 한 글자씩 보여줍니다.",
                "js_checklist_alert": "다음 주 수요일 밤 11시 59분까지 MS Teams 출석 퀴즈 잊지마세요!",
                "js_calculating": "계산 중..."
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1: UX Basics",
                "nav-w2": "Week 2: Chat & Empathy",
                "nav-w3": "Week 3: AI Constraints",
                "intro-title": "Week 1: AI & UX Design Basics",
                "intro-l1-b": "Format:", "intro-l1-t": "100% Online (Recorded videos from W2 🎥)",
                "intro-l2-b": "Tools:", "intro-l2-t": "Laptop & Chrome Browser",
                "intro-l3-b": "Attendance:", "intro-l3-t": "Submit weekly MS Teams Quiz on time!",
                "uiux-title": "UI vs UX",
                "uiux-ui-desc": "Visual Design<br>(Pretty glass ketchup bottle)",
                "uiux-ux-desc": "Convenient Experience<br>(Upside-down plastic bottle)",
                "hist-title": "Interface Evolution", "hist-sub": "(Click inside the boxes!)",
                "hist-cli-desc": "Direct command typing (Experts)",
                "hist-gui-btn": "Click", "hist-gui-desc": "Click icons with mouse (Public)",
                "hist-ai-chat-ask": '"Book a flight ticket"',
                "hist-ai-desc": "Natural language chat (Just speak)",
                "diff-title": "Traditional vs Probabilistic AI UX", "diff-sub": "Click the buttons multiple times to check predictability!",
                "diff-trad-t": "📦 Traditional UX (Deterministic)", "diff-trad-p": "100% Predictable", "diff-trad-res": "Waiting...",
                "diff-ai-t": "🤖 AI UX (Probabilistic)", "diff-ai-p": "Varies / Hallucinations possible",
                "gb-title": "Good vs Bad AI UX",
                "gb-bad-t": "❌ Bad UX (Silent Freeze)", "gb-bad-p": "Screen freezes (No feedback)",
                "gb-good-t": "✅ Good UX (Streaming)", "gb-good-p": "Shows loading & word by word",
                "gb-btn-ask": "Ask",
                "gb-list1-b": "Good UX needs:", "gb-list1-t": "Starter prompts, 1-Click Fix, Transparency",
                "gb-list2-b": "Avoid Bad UX:", "gb-list2-t": "Blank screens, Hype (saying AI is 100% perfect)",
                "act-title": "15-Minute Activity!", "act-h3": "Screenshot an AI feature on your phone",
                "act-p": 'Capture Face ID, Auto-complete, or any AI feature, then observe:<br><strong>"Why is this convenient or annoying?"</strong>',
                "act-btn": "🔔 Check Week 1 Checklist",
                // Dynamic strings
                "js_gui_alert": "My Documents folder opened! 📁",
                "js_ai_reply": "Sure, I'll search for flights to Jeju this weekend! ✈️",
                "js_trad_res": "Result: 5 (Always the same!)",
                "js_ai_calc": ["Umm... it's 5! 😄", "Maybe 4? No, it's 5. 🤔", "Not sure, maybe 23? (Hallucination 😱)", "5! Also 2*3=6. 🤓", "Server error. Cannot reply. 🚨"],
                "js_bad_ux": "Answer appears suddenly after 3 seconds.",
                "js_good_ux": "Shows word by word so you don't wait.",
                "js_checklist_alert": "Don't forget the MS Teams attendance quiz by next Wed 11:59 PM!",
                "js_calculating": "Calculating..."
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "Неделя 1: Основы UX",
                "nav-w2": "Неделя 2: Чат и Эмпатия",
                "nav-w3": "Неделя 3: Ограничения ИИ",
                "intro-title": "Неделя 1: Основы ИИ и UX-дизайна",
                "intro-l1-b": "Формат:", "intro-l1-t": "100% онлайн (Записи со 2-й недели 🎥)",
                "intro-l2-b": "Инструменты:", "intro-l2-t": "Ноутбук и браузер Chrome",
                "intro-l3-b": "Посещаемость:", "intro-l3-t": "Сдавайте тесты в MS Teams вовремя!",
                "uiux-title": "UI vs UX",
                "uiux-ui-desc": "Визуальный дизайн<br>(Красивая стеклянная бутылка)",
                "uiux-ux-desc": "Удобный опыт<br>(Перевернутая пластиковая бутылка)",
                "hist-title": "Эволюция интерфейса", "hist-sub": "(Нажмите на блоки!)",
                "hist-cli-desc": "Прямой ввод команд (Для экспертов)",
                "hist-gui-btn": "Клик", "hist-gui-desc": "Клик по иконкам мышью (Массово)",
                "hist-ai-chat-ask": '"Забронируй билет на самолет"',
                "hist-ai-desc": "Общение на естественном языке",
                "diff-title": "Традиционный vs Вероятностный AI UX", "diff-sub": "Нажмите на кнопки несколько раз, чтобы проверить предсказуемость!",
                "diff-trad-t": "📦 Традиционный UX (Детерминированный)", "diff-trad-p": "100% Предсказуемо", "diff-trad-res": "Ожидание...",
                "diff-ai-t": "🤖 AI UX (Вероятностный)", "diff-ai-p": "Изменяется / Возможны галлюцинации",
                "gb-title": "Хороший vs Плохой AI UX",
                "gb-bad-t": "❌ Плохой UX (Silent Freeze)", "gb-bad-p": "Зависание (Без обратной связи)",
                "gb-good-t": "✅ Хороший UX (Streaming)", "gb-good-p": "Показывает загрузку и пословно",
                "gb-btn-ask": "Спросить",
                "gb-list1-b": "Хороший UX требует:", "gb-list1-t": "Подсказки, 1-Click Fix (быстрое исправление), Прозрачность",
                "gb-list2-b": "Избегайте плохого UX:", "gb-list2-t": "Пустые экраны, Хайп (ИИ на 100% идеален)",
                "act-title": "15-минутное задание!", "act-h3": "Сделайте скриншот функции ИИ на телефоне",
                "act-p": 'Сделайте скриншот Face ID, автозаполнения или другой функции ИИ и понаблюдайте:<br><strong>"Почему это удобно или неудобно?"</strong>',
                "act-btn": "🔔 Проверить список 1-й недели",
                // Dynamic strings
                "js_gui_alert": "Папка Мои документы открыта! 📁",
                "js_ai_reply": "Конечно, я поищу билеты на Чеджу на эти выходные! ✈️",
                "js_trad_res": "Результат: 5 (Всегда одинаково!)",
                "js_ai_calc": ["Эмм... это 5! 😄", "Может 4? Нет, это 5. 🤔", "Не уверен, может 23? (Галлюцинация 😱)", "5! А также 2*3=6. 🤓", "Ошибка сервера. Нет ответа. 🚨"],
                "js_bad_ux": "Ответ появляется внезапно через 3 секунды.",
                "js_good_ux": "Показывает пословно, чтобы вы не ждали.",
                "js_checklist_alert": "Не забудьте про тест в MS Teams до следующей среды 23:59!",
                "js_calculating": "Вычисление..."
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
            
            // Reset dynamic fields when language changes
            document.getElementById('trad-result').innerText = translations[lang]["diff-trad-res"];
            document.getElementById('ai-result').innerText = translations[lang]["diff-trad-res"];
            document.getElementById('ai-chat-reply').innerText = "";
            document.getElementById('ai-chat-reply').style.display = "none";
            document.getElementById('bad-ux-box').innerText = "";
            document.getElementById('stream-text').innerText = "";
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        /* --- 🚀 인터페이스 진화 인터랙션 --- */
        let cliTimeout;
        function runCLI() {
            const text = " run_app.exe";
            const box = document.getElementById("cli-text");
            const line1 = document.getElementById("cli-line1");
            
            box.innerText = "";
            line1.style.display = "block";
            clearTimeout(cliTimeout);
            let i = 0;
            
            function typeCLI() {
                if (i < text.length) {
                    box.innerText += text.charAt(i);
                    i++;
                    cliTimeout = setTimeout(typeCLI, 100);
                } else {
                    setTimeout(() => { box.innerHTML += "<br>Loading...<br>Done!"; }, 300);
                }
            }
            typeCLI();
        }

        function triggerGUIAlert() {
            alert(translations[currentLang]["js_gui_alert"]);
        }

        let aiTimeout;
        function runAI() {
            const reply = document.getElementById("ai-chat-reply");
            reply.style.display = "block";
            reply.innerText = "";
            clearTimeout(aiTimeout);
            
            const text = translations[currentLang]["js_ai_reply"];
            let i = 0;
            
            function typeAI() {
                if (i < text.length) {
                    reply.innerText += text.charAt(i);
                    i++;
                    aiTimeout = setTimeout(typeAI, 50);
                }
            }
            typeAI();
        }

        /* --- 🎲 전통 vs AI 인터랙션 --- */
        function triggerTradResult() {
            document.getElementById('trad-result').innerText = translations[currentLang]["js_trad_res"];
        }

        function generateAIResult() {
            const results = translations[currentLang]["js_ai_calc"];
            const resultBox = document.getElementById('ai-result');
            resultBox.innerText = translations[currentLang]["js_calculating"];
            resultBox.style.color = "#fbbf24";
            
            setTimeout(() => {
                const random = results[Math.floor(Math.random() * results.length)];
                resultBox.innerText = random;
                // Add red color if the word '환각', 'Hallucination', 'Галлюцинация', '오류', 'error', 'Ошибка' is in the text
                const isError = random.includes("환각") || random.includes("오류") || random.includes("Hallucination") || random.includes("error") || random.includes("Галлюцинация") || random.includes("Ошибка");
                resultBox.style.color = isError ? "#ef4444" : "#10b981";
            }, 500);
        }

        /* --- ⚖️ Good vs Bad UX 인터랙션 --- */
        function simulateBadUX() {
            const box = document.getElementById('bad-ux-box');
            box.innerText = "";
            setTimeout(() => {
                box.innerText = translations[currentLang]["js_bad_ux"];
            }, 3000);
        }

        let streamTimeout;
        function simulateGoodUX() {
            const box = document.getElementById('stream-text');
            const spinner = document.getElementById('spinner');
            box.innerText = "";
            spinner.style.display = "block";
            clearTimeout(streamTimeout);

            const text = translations[currentLang]["js_good_ux"];
            let i = 0;

            setTimeout(() => {
                spinner.style.display = "none";
                function typeWriter() {
                    if (i < text.length) {
                        box.innerHTML += text.charAt(i);
                        i++;
                        streamTimeout = setTimeout(typeWriter, 50);
                    }
                }
                typeWriter();
            }, 800);
        }

        function triggerChecklistAlert() {
            alert(translations[currentLang]["js_checklist_alert"]);
        }

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, runCLI, triggerGUIAlert, runAI, triggerTradResult, generateAIResult, simulateBadUX, simulateGoodUX, triggerChecklistAlert});
})();
}

if (document.body.dataset.page === 'week02') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1: UX Basics",
                "nav-w2": "Week 2: Chat & Empathy",
                "nav-w3": "Week 3: AI Constraints",
                "intro-title": "Week 2: 디자인 씽킹과 페르소나",
                "intro-l1-b": "목표:", "intro-l1-t": "사용자의 진짜 문제를 정의하고 페르소나 만들기",
                "intro-l2-b": "핵심:", "intro-l2-t": "기술(Tech)이 아니라 공감(Empathy)이 먼저!",
                
                "dt-title": "디자인 씽킹 5단계", "dt-sub": "성공적인 AI 서비스를 만드는 글로벌 표준 프로세스",
                "dt-1-t": "공감", "dt-1-p": "불편함 찾기",
                "dt-2-t": "정의", "dt-2-p": "핵심 문제 요약",
                "dt-3-t": "아이디어", "dt-3-p": "해결책 브레인스토밍",
                "dt-4-t": "프로토타입", "dt-4-p": "Figma로 화면 제작",
                "dt-5-t": "테스트", "dt-5-p": "사용자 피드백",

                "emp-title": "기술(Tech) 중심의 함정",
                "emp-bad-t": "❌ 기술 먼저 (잘못된 접근)", "emp-bad-p": "'우리 쩌는 AI 기술 있는데, 앱 어디에다 끼워 넣지?'<br>👉 쓸모없는 챗봇 남발 (AI for the sake of AI)",
                "emp-good-t": "✅ 인간 먼저 (올바른 접근)", "emp-good-p": "'사용자가 매일 어떤 작업을 귀찮아하고 스트레스 받을까?'<br>👉 공감에서 진짜 필요한 서비스 탄생",

                "per-title": "타겟 페르소나 만들기", "per-sub": "페르소나란 우리 서비스의 대표적인 가상 사용자입니다. 실제 지인 1명이 아닌, 여러 데이터의 공통점을 모아야 합니다.",
                "per-name": "라지 (Raj, 24)", "per-job": "한국 거주 외국인 유학생",
                "per-tech-b": "Tech 스킬:", "per-tech-t": "높음 (스마트폰 하루종일 사용)",
                "per-goal-b": "목표:", "per-goal-t": "한국 은행 계좌를 쉽게 개설하고 싶음",
                "per-pain-b": "Pain Point (어려움):", "per-pain-t": "복잡한 한국어 은행 서류를 읽지 못해 엄청난 스트레스를 받음",

                "val-title": "AI 서비스의 진짜 가치 공식", "val-sub": "단순 계산이나 쉬운 검색(HTML/JS가 빠름)이 아닌, <strong>복잡하고 정리되지 않은 데이터</strong>를 처리할 때 AI가 필요합니다.",
                "val-f1": "시간 절약", "val-f2": "스트레스 감소", "val-f3": "사용하기 위한 노력",
                "val-warn": "🚨 주의: AI에 명령하는 과정(프롬프트, 챗봇 실랑이)이 직접 손으로 하는 것보다 오래 걸린다면 그 UX는 실패한 것입니다!",

                "state-title": "핵심 문제 정의하기 (1줄 공식)", "state-sub": "기획 방향을 잃지 않기 위해 다음 공식을 항상 기억하세요.",
                "state-f1": "[사용자/페르소나]", "state-f2": "는", "state-f3": "[목표/원하는 것]", "state-f4": "을(를) 할 방법이 필요하다. 왜냐하면", "state-f5": "[근본적인 어려움/Pain Point]", "state-f6": "때문이다.",
                "state-ex": "예시: '사라(1학년 유학생)는 편의점에서 알러지 성분을 빠르게 확인하고 싶다. 왜냐하면 쇼핑할 때마다 한국어 라벨 번역기를 돌리는 것이 너무 귀찮고 시간이 오래 걸리기 때문이다.'",

                "ai-title": "GenAI로 초안 만들기", "ai-sub": "페르소나 상상이 막막하다면 ChatGPT나 Claude에게 초안을 부탁하고 자신의 경험을 더해 수정하세요.",
                "ai-p1": "Prompt:",
                "ai-p2": "'UX 리서처가 되어서 한국의 외국인 유학생을 돕는 AI 앱을 위한 상세한 페르소나를 작성해 줘.'",
                "ai-p3": "'포함할 내용: 이름, 나이, 일상에서 겪는 가장 큰 어려움 3가지'",
                "ai-btn": "✨ AI 답변 보기",

                "work-title": "20분 워크샵 (과제 제출)", "work-h3": "나만의 AI 서비스 기획서 초안 작성",
                "work-l1": "페르소나 설정 (이름, 특징)", "work-l2": "가장 큰 Pain Point 2가지", "work-l3": "1줄 문제 정의 공식 채우기", "work-l4": "어떤 AI 기술(비전, 텍스트, 음성)을 쓸지 선택",
                "act-btn": "🔔 이번 주 제출 안내 확인",
                
                // Dynamic strings
                "js_ai_reply": `🤖 AI: "
- 이름: 라지 파텔 (21세)
- 어려움: 1. 영문 식당 메뉴판 찾기 2. 은행 용어 이해 3. 복잡한 쓰레기 분리수거`,
                "js_checklist_alert": "오늘 작성한 4단계 기획서를 MS Teams 'Assignments' 탭에 다음 주 수요일 밤 11시 59분까지 제출해주세요!"
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1: UX Basics",
                "nav-w2": "Week 2: Chat & Empathy",
                "nav-w3": "Week 3: AI Constraints",
                "intro-title": "Week 2: Design Thinking & Personas",
                "intro-l1-b": "Goal:", "intro-l1-t": "Define real user problems and create personas",
                "intro-l2-b": "Core:", "intro-l2-t": "Empathy first, Technology second!",
                
                "dt-title": "5 Stages of Design Thinking", "dt-sub": "The global standard process for successful AI services",
                "dt-1-t": "Empathize", "dt-1-p": "Find discomfort",
                "dt-2-t": "Define", "dt-2-p": "State core problem",
                "dt-3-t": "Ideate", "dt-3-p": "Brainstorm ideas",
                "dt-4-t": "Prototype", "dt-4-p": "Build in Figma",
                "dt-5-t": "Test", "dt-5-p": "User feedback",

                "emp-title": "The Tech-First Trap",
                "emp-bad-t": "❌ Tech-First (Wrong)", "emp-bad-p": "'We have cool AI tech! Where do we force it in?'<br>👉 Unnecessary chatbots (AI for the sake of AI)",
                "emp-good-t": "✅ Human-First (Right)", "emp-good-p": "'What makes our users stressed every day?'<br>👉 True solutions born from empathy",

                "per-title": "Creating a Target Persona", "per-sub": "A persona is a virtual representative user. Don't just copy 1 real friend; combine common data points.",
                "per-name": "Raj (24)", "per-job": "International Student in Korea",
                "per-tech-b": "Tech Skill:", "per-tech-t": "High (Uses smartphone all day)",
                "per-goal-b": "Goal:", "per-goal-t": "Wants to open a Korean bank account easily",
                "per-pain-b": "Pain Point:", "per-pain-t": "Feels huge stress because he cannot read complex Korean bank documents",

                "val-title": "The True Value Formula", "val-sub": "AI is needed for <strong>messy, unstructured data</strong>, not for simple calculations or lookups.",
                "val-f1": "Time Saved", "val-f2": "Stress Reduced", "val-f3": "Effort to Use",
                "val-warn": "🚨 Warning: If using the AI (prompting, fighting the chatbot) takes more effort than manual work, the UX failed!",

                "state-title": "Problem Statement Formula", "state-sub": "Always keep this formula in mind to stay focused.",
                "state-f1": "[User Persona]", "state-f2": "needs a way to", "state-f3": "[User Goal]", "state-f4": "because", "state-f5": "[Root Pain Point]", "state-f6": ".",
                "state-ex": "Example: 'Sarah (Freshman) needs a way to quickly check food allergies because translating Korean labels takes too much time while shopping.'",

                "ai-title": "Drafting with GenAI", "ai-sub": "If you're stuck, ask ChatGPT or Claude for a draft and then edit it with your own experience.",
                "ai-p1": "Prompt:",
                "ai-p2": "'Act as a UX Researcher. Create a detailed persona for an AI app helping international students in Korea.'",
                "ai-p3": "'Include: Name, Age, 3 Daily Frustrations'",
                "ai-btn": "✨ See AI Answer",

                "work-title": "20-Min Workshop", "work-h3": "Draft your AI Service Proposal",
                "work-l1": "Persona Profile (Name, Traits)", "work-l2": "Top 2 Pain Points", "work-l3": "Fill in the 1-Sentence Formula", "work-l4": "Choose AI Tech (Vision, Text, Voice)",
                "act-btn": "🔔 Check Submission Guide",
                
                // Dynamic strings
                "js_ai_reply": `🤖 AI: 
- Name: Raj Patel (Age 21)
- Frustrations: 1. Finding English menus 2. Banking terms 3. Complex garbage sorting`,
                "js_checklist_alert": "Upload your 4-step worksheet to the MS Teams 'Assignments' tab by next Wednesday 11:59 PM!"
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "Неделя 1: Основы UX",
                "nav-w2": "Неделя 2: Чат и Эмпатия",
                "nav-w3": "Неделя 3: Ограничения ИИ",
                "intro-title": "Неделя 2: Дизайн-мышление и Персоны",
                "intro-l1-b": "Цель:", "intro-l1-t": "Определить реальные проблемы пользователей и создать персоны",
                "intro-l2-b": "Главное:", "intro-l2-t": "Эмпатия на первом месте, технологии - на втором!",
                
                "dt-title": "5 этапов дизайн-мышления", "dt-sub": "Глобальный стандарт для успешных ИИ-сервисов",
                "dt-1-t": "Эмпатия", "dt-1-p": "Поиск дискомфорта",
                "dt-2-t": "Определение", "dt-2-p": "Суть проблемы",
                "dt-3-t": "Идеи", "dt-3-p": "Мозговой штурм",
                "dt-4-t": "Прототип", "dt-4-p": "Создание в Figma",
                "dt-5-t": "Тест", "dt-5-p": "Отзывы",

                "emp-title": "Ловушка техно-ориентированности",
                "emp-bad-t": "❌ Сначала технология (Ошибка)", "emp-bad-p": "'У нас есть крутой ИИ! Куда бы его впихнуть?'<br>👉 Ненужные чат-боты (ИИ ради ИИ)",
                "emp-good-t": "✅ Сначала человек (Верно)", "emp-good-p": "'Что вызывает стресс у пользователей каждый день?'<br>👉 Истинные решения рождаются из эмпатии",

                "per-title": "Создание целевой персоны", "per-sub": "Персона - это виртуальный представитель. Не копируйте 1 реального друга, объединяйте общие данные.",
                "per-name": "Радж (24)", "per-job": "Иностранный студент в Корее",
                "per-tech-b": "Тех. навыки:", "per-tech-t": "Высокие (Смартфон весь день)",
                "per-goal-b": "Цель:", "per-goal-t": "Легко открыть счет в корейском банке",
                "per-pain-b": "Боль (Pain Point):", "per-pain-t": "Испытывает сильный стресс из-за непонимания сложных банковских документов",

                "val-title": "Формула истинной ценности", "val-sub": "ИИ нужен для <strong>сложных, неструктурированных данных</strong>, а не для простых вычислений.",
                "val-f1": "Сэкономленное время", "val-f2": "Сниженный стресс", "val-f3": "Усилия для использования",
                "val-warn": "🚨 Внимание: Если использование ИИ (написание промптов, спор с ботом) требует больше усилий, чем ручная работа, то UX провален!",

                "state-title": "Формула проблемы (1 предложение)", "state-sub": "Всегда держите эту формулу в уме, чтобы не терять фокус.",
                "state-f1": "[Персона]", "state-f2": "нуждается в способе", "state-f3": "[Цель]", "state-f4": "потому что", "state-f5": "[Коренная проблема]", "state-f6": ".",
                "state-ex": "Пример: 'Саре (Первокурснице) нужен способ быстро проверять аллергены, потому что перевод корейских этикеток отнимает слишком много времени в магазине.'",

                "ai-title": "Черновик с помощью GenAI", "ai-sub": "Если застряли, попросите ChatGPT или Claude сделать черновик и дополните его своим опытом.",
                "ai-p1": "Промпт:",
                "ai-p2": "'Действуй как UX-исследователь. Создай подробную персону для ИИ-приложения, помогающего иностранным студентам в Корее.'",
                "ai-p3": "'Включи: Имя, Возраст, 3 ежедневные проблемы'",
                "ai-btn": "✨ Посмотреть ответ ИИ",

                "work-title": "20-минутный воркшоп", "work-h3": "Черновик вашего ИИ-проекта",
                "work-l1": "Профиль персоны (Имя, Черты)", "work-l2": "2 главные боли (Pain Points)", "work-l3": "Заполните формулу из 1 предложения", "work-l4": "Выберите технологию ИИ (Зрение, Текст, Голос)",
                "act-btn": "🔔 Правила сдачи",
                
                // Dynamic strings
                "js_ai_reply": `🤖 ИИ: 
- Имя: Радж Патель (21 год)
- Проблемы: 1. Поиск меню на английском 2. Банковские термины 3. Сложная сортировка мусора`,
                "js_checklist_alert": "Загрузите свой рабочий лист из 4 шагов в раздел 'Assignments' в MS Teams до следующей среды 23:59!"
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        /* --- 🤖 GenAI Alert --- */
        function triggerGenAI() {
            alert(translations[currentLang]["js_ai_reply"]);
        }

        /* --- 🔔 Checklist Alert --- */
        function triggerChecklistAlert() {
            alert(translations[currentLang]["js_checklist_alert"]);
        }

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, triggerGenAI, triggerChecklistAlert});
})();
}

if (document.body.dataset.page === 'week03') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1", "nav-w2": "Week 2", "nav-w3": "Week 3: AI UI States",
                "intro-title": "Week 3: AI 인터페이스의 6가지 핵심 상태",
                "intro-l1-b": "목표:", "intro-l1-t": "빈 화면부터 에러 복구까지 예측 가능한 AI 여정 설계하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "시스템 상태의 시각화(Visibility of System Status) - AI가 무엇을 하는지 항상 보여주세요!",
                
                "map-title": "The Full 6-State Lifecycle", 
                "map-sub": "사용자가 AI 앱을 열고 답변을 얻기까지 거치는 6가지 흐름입니다. (클릭하여 아래 인터랙티브 화면을 직접 테스트해 보세요!)",
                "map-s1": "첫 화면", "map-s2": "질문 입력", "map-s3": "AI 계산 중", "map-s4": "답변 출력", "map-s5": "결과 및 버튼", "map-s6": "복구 및 에러",
                
                "mock-preview-header": "✨ AI 어시스턴트 미리보기",
                "mock-greeting": "안녕하세요! 무엇을 도와드릴까요?",
                "mock-chip1": "📝 영문 이메일 초안 작성", "mock-chip2": "📄 기획서 요약하기",
                "mock-thinking": "AI가 답변을 생성 중입니다",
                "mock-btn-copy": "복사", "mock-btn-like": "도움됨", "mock-btn-retry": "다시 생성",
                "mock-err-msg": "⚠️ 연결이 불안정하여 답변을 생성하지 못했습니다. (서버 에러)",
                "mock-err-retry": "🔄 1-Click 재시도",
                "mock-input-ph": "메시지를 입력하세요... (힌트: 아무거나 입력!)",

                "det-title": "왜 이런 상태들이 중요할까요?",
                "det-b1-t": "🕒 체감 대기 시간 (Perceived Wait Time)", "det-b1-p": "일반 앱은 1초 만에 화면이 바뀝니다. 하지만 AI는 3~15초가 걸립니다. 빈 화면을 8초간 띄워두면(Batch 방식) 사용자는 고장 났다고 생각하고 앱을 끕니다.",
                "det-b2-t": "✍️ 스트리밍 UX (Streaming)", "det-b2-p": "AI가 단어를 완성하는 즉시 화면에 타자기처럼 실시간으로 밀어냅니다. 사용자가 바로 읽기 시작하므로 대기 시간이 80% 이상 줄어든 것처럼 느껴집니다.",
                "det-h3": "🚫 나쁜 UX 피하기 (Error & Recovery)",

                "act-title": "20분 워크샵 (과제 제출)", "act-h3": "실제 AI 앱 Audit (스크린샷 수집)",
                "act-p": "폰이나 PC에서 ChatGPT, Canva, Copilot 등 아무 AI 서비스나 켜서 다음 3가지 상태를 캡처하세요.",
                "act-l1": "<strong>Empty State:</strong> 첫 화면 (추천 프롬프트 유무)",
                "act-l2": "<strong>Loading/Streaming:</strong> 질문 후 로딩 기호나 글자가 써지는 모습",
                "act-l3": "<strong>Complete:</strong> 완성된 답변 하단의 액션 버튼들(복사, 공유 등)",
                "act-btn": "🔔 이번 주 제출 안내 확인",
                
                // Dynamic JS Strings
                "js_ai_res_trans": "친애하는 교수님, \n 이번 주 강의 자료에 대해 몇 가지 질문이 있어 이메일 드립니다. 실시간 스트리밍 UX 구현과 관련하여...",
                "js_ai_res_sum": "기획서 핵심 요약: \n 1. AI 인터페이스 6단계 정의 \n 2. 사용자 체감 대기 시간 80% 단축 방안\n 3. 1-Click 복구 에러 처리",
                "js_ai_res_custom": "질문해주신 내용에 대한 답변입니다. 디자인 씽킹 5단계와 시스템 상태의 시각화는 사용자 경험을 향상시키는 가장 중요한 원칙입니다. 추가로 궁금한 점이 있으신가요?",
                "js_copied": "클립보드에 복사되었습니다! 📋",
                "js_liked": "피드백이 전송되었습니다. 감사합니다! 👍",
                "js_checklist": "수집한 3장의 캡처 화면을 MS Teams 'Assignments' 탭에 다음 주 수요일 밤 11시 59분까지 제출해주세요!"
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1", "nav-w2": "Week 2", "nav-w3": "Week 3: AI UI States",
                "intro-title": "Week 3: The 6 Core States of AI Interfaces",
                "intro-l1-b": "Goal:", "intro-l1-t": "Design predictable AI journeys from Empty to Recovery.",
                "intro-l2-b": "Core:", "intro-l2-t": "Visibility of System Status - Always show what the AI is doing!",
                
                "map-title": "The Full 6-State Lifecycle", 
                "map-sub": "The 6 steps users go through in an AI app. (Click to test the interactive mockup below!)",
                "map-s1": "Empty", "map-s2": "Input", "map-s3": "Loading", "map-s4": "Streaming", "map-s5": "Complete", "map-s6": "Recovery/Error",
                
                "mock-preview-header": "✨ AI Assistant Preview",
                "mock-greeting": "Hi! How can I help you today?",
                "mock-chip1": "📝 Draft English Email", "mock-chip2": "📄 Summarize Proposal",
                "mock-thinking": "AI is generating an answer",
                "mock-btn-copy": "Copy", "mock-btn-like": "Helpful", "mock-btn-retry": "Retry",
                "mock-err-msg": "⚠️ Failed to generate response due to unstable connection. (Server Error)",
                "mock-err-retry": "🔄 1-Click Retry",
                "mock-input-ph": "Type a message... (Hint: Type anything!)",

                "det-title": "Why are these states important?",
                "det-b1-t": "🕒 Perceived Wait Time", "det-b1-p": "Normal apps change in 1 second. AI takes 3-15 seconds. If you leave a blank screen for 8 seconds (Batching), users think it's broken.",
                "det-b2-t": "✍️ Streaming UX", "det-b2-p": "Push words to the screen character-by-character in real time. Users start reading immediately, reducing perceived latency by over 80%.",
                "det-h3": "🚫 Avoid Bad UX (Error & Recovery)",

                "act-title": "20-Min Workshop", "act-h3": "Audit a Real AI App (Screenshots)",
                "act-p": "Open ChatGPT, Canva, or Copilot and take 3 screenshots of these states:",
                "act-l1": "<strong>Empty State:</strong> Initial screen with starter prompts.",
                "act-l2": "<strong>Loading/Streaming:</strong> The thinking indicator or real-time typing.",
                "act-l3": "<strong>Complete:</strong> Action buttons (Copy, Share) under the finished answer.",
                "act-btn": "🔔 Check Submission Guide",
                
                // Dynamic JS Strings
                "js_ai_res_trans": "Dear Professor, \n I am writing to ask a few questions regarding this week's lecture materials on streaming UX implementation...",
                "js_ai_res_sum": "Proposal Summary: \n 1. Define 6 AI UI stages \n 2. Reduce perceived latency by 80% \n 3. Implement 1-Click Error Recovery",
                "js_ai_res_custom": "Here is the answer to your question. Design Thinking and Visibility of System Status are key to great user experience. Need more help?",
                "js_copied": "Copied to clipboard! 📋",
                "js_liked": "Feedback submitted. Thank you! 👍",
                "js_checklist": "Upload your 3 screenshots to the MS Teams 'Assignments' tab by next Wednesday 11:59 PM!"
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "Неделя 1", "nav-w2": "Неделя 2", "nav-w3": "Неделя 3: Состояния ИИ",
                "intro-title": "Неделя 3: 6 базовых состояний ИИ-интерфейсов",
                "intro-l1-b": "Цель:", "intro-l1-t": "Спроектировать предсказуемый путь от пустого экрана до восстановления.",
                "intro-l2-b": "Главное:", "intro-l2-t": "Видимость состояния системы - Всегда показывайте, что делает ИИ!",
                
                "map-title": "Полный жизненный цикл из 6 состояний", 
                "map-sub": "6 шагов пользователя в ИИ-приложении. (Кликните, чтобы протестировать макет ниже!)",
                "map-s1": "Пусто", "map-s2": "Ввод", "map-s3": "Загрузка", "map-s4": "Стриминг", "map-s5": "Готово", "map-s6": "Ошибка",
                
                "mock-preview-header": "✨ Предпросмотр ИИ-ассистента",
                "mock-greeting": "Привет! Чем я могу помочь?",
                "mock-chip1": "📝 Написать Email", "mock-chip2": "📄 Резюмировать проект",
                "mock-thinking": "ИИ генерирует ответ",
                "mock-btn-copy": "Копировать", "mock-btn-like": "Полезно", "mock-btn-retry": "Повторить",
                "mock-err-msg": "⚠️ Не удалось сгенерировать ответ из-за нестабильного соединения. (Ошибка сервера)",
                "mock-err-retry": "🔄 Повторить (1 клик)",
                "mock-input-ph": "Введите сообщение... (Подсказка: Введите что угодно!)",

                "det-title": "Почему эти состояния важны?",
                "det-b1-t": "🕒 Ощущаемое время ожидания", "det-b1-p": "Обычные приложения меняются за 1 сек. ИИ требует 3-15 сек. Оставите пустой экран на 8 сек - пользователи решат, что приложение зависло.",
                "det-b2-t": "✍️ Стриминг UX", "det-b2-p": "Выводите слова на экран посимвольно в реальном времени. Пользователи начинают читать сразу, снижая ожидание на 80%.",
                "det-h3": "🚫 Избегайте плохого UX (Ошибки)",

                "act-title": "20-минутный воркшоп", "act-h3": "Аудит реального ИИ-приложения (Скриншоты)",
                "act-p": "Откройте ChatGPT, Canva или Copilot и сделайте 3 скриншота:",
                "act-l1": "<strong>Empty State:</strong> Начальный экран с подсказками.",
                "act-l2": "<strong>Loading/Streaming:</strong> Индикатор загрузки или печать текста.",
                "act-l3": "<strong>Complete:</strong> Кнопки действий (Копировать, Поделиться) под ответом.",
                "act-btn": "🔔 Правила сдачи",
                
                // Dynamic JS Strings
                "js_ai_res_trans": "Уважаемый профессор, \n Пишу вам, чтобы задать несколько вопросов по материалам лекции этой недели о внедрении стриминга...",
                "js_ai_res_sum": "Краткое содержание: \n 1. Определить 6 этапов ИИ\n  2. Снизить ожидание на 80% \n 3. Восстановление после ошибки в 1 клик",
                "js_ai_res_custom": "Вот ответ на ваш вопрос. Дизайн-мышление и видимость состояния системы - ключ к отличному UX. Нужна еще помощь?",
                "js_copied": "Скопировано в буфер обмена! 📋",
                "js_liked": "Отзыв отправлен. Спасибо! 👍",
                "js_checklist": "Загрузите 3 скриншота в раздел 'Assignments' в MS Teams до следующей среды 23:59!"
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
            // placeholder 변경 처리
            document.getElementById('mock-input').placeholder = translations[lang]["mock-input-ph"];
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        /* --- 🤖 Interactive Mockup Logic --- */
        let typeTimeout;
        let currentIntent = 'custom';

        function updateStepHighlight(stepNum) {
            document.querySelectorAll('.state-step').forEach(el => el.classList.remove('active'));
            if(stepNum <= 6) document.getElementById('step' + stepNum).classList.add('active');
        }

        function hideAllMockupStates() {
            document.getElementById('mock-empty').style.display = 'none';
            document.getElementById('mock-loading').style.display = 'none';
            document.getElementById('mock-output').style.display = 'none';
            document.getElementById('mock-error').style.display = 'none';
            document.getElementById('mock-actions').style.display = 'none';
        }

        function resetMockup() {
            clearTimeout(typeTimeout);
            hideAllMockupStates();
            document.getElementById('mock-empty').style.display = 'block';
            document.getElementById('ai-typing-text').innerHTML = '';
            document.getElementById('mock-input').value = '';
            updateStepHighlight(1);
        }

                function focusInput() {
            clearTimeout(typeTimeout);
            document.getElementById('mock-input').focus();
            updateStepHighlight(2);
        }

        function handleEnter(e) {
            if (e.key === 'Enter') {
                startAI('custom');
            }
        }

        function startAI(intent) {
            clearTimeout(typeTimeout);
            updateStepHighlight(2); // Input
            
            setTimeout(() => {
                hideAllMockupStates();
                document.getElementById('mock-loading').style.display = 'block'; // Loading
                updateStepHighlight(3);

                setTimeout(() => {
                    document.getElementById('mock-loading').style.display = 'none';
                    document.getElementById('mock-output').style.display = 'block'; // Streaming
                    updateStepHighlight(4);
                    
                    let textToType = "";
                    if (intent === 'translate') { currentIntent = 'translate'; textToType = translations[currentLang]['js_ai_res_trans']; }
                    else if (intent === 'summary') { currentIntent = 'summary'; textToType = translations[currentLang]['js_ai_res_sum']; }
                    else if (intent === 'retry') {
                        // Re-run the last prompt if available, otherwise default to refreshed answer
                        if (currentIntent === 'translate') textToType = translations[currentLang]['js_ai_res_trans'];
                        else if (currentIntent === 'summary') textToType = translations[currentLang]['js_ai_res_sum'];
                        else textToType = translations[currentLang]['js_ai_res_custom'];
                    }
                    else { currentIntent = 'custom'; textToType = translations[currentLang]['js_ai_res_custom']; }

                    let i = 0;
                    const textBox = document.getElementById('ai-typing-text');
                    textBox.innerHTML = '<span class="typing-cursor"></span>';
                    
                    function typeWriter() {
                        if (i < textToType.length) {
                            let char = textToType.charAt(i);
                            if (char === '\n') char = '<br>';
                            textBox.innerHTML = textBox.innerHTML.replace('<span class="typing-cursor"></span>', '') + char + '<span class="typing-cursor"></span>';
                            i++;
                            typeTimeout = setTimeout(typeWriter, 30);
                        } else {
                            textBox.innerHTML = textBox.innerHTML.replace('<span class="typing-cursor"></span>', ''); // Remove cursor
                            document.getElementById('mock-actions').style.display = 'flex'; // Complete actions
                            updateStepHighlight(5);
                        }
                    }
                    typeWriter();
                }, 1500); // 1.5s Loading time
            }, 300);
        }

        function triggerErrorMockup() {
            clearTimeout(typeTimeout);
            hideAllMockupStates();
            document.getElementById('mock-error').style.display = 'block';
            updateStepHighlight(6);
        }

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, updateStepHighlight, hideAllMockupStates, resetMockup, handleEnter, focusInput, startAI, triggerErrorMockup});
})();
}

if (document.body.dataset.page === 'week04') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1", "nav-w2": "Week 2", "nav-w3": "Week 3", "nav-w4": "Week 4: Interaction Design",
                
                "intro-title": "Week 4: AI 인터랙션 디자인과 대화 흐름",
                "intro-l1-b": "목표:", "intro-l1-t": "사람과 AI 사이의 대화 흐름도(Dialogue Flow)를 매끄럽게 설계하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "AI는 '명령(직접 조작)'이 아니라 사용자의 자연어에서 '의도(Intent)'를 파악합니다.",
                
                "type-title": "AI 인터페이스의 3가지 유형",
                "type-cui-t": "💬 CUI (챗봇)", "type-cui-l1": "<strong>장점:</strong> 카톡처럼 누구나 바로 씀 (Zero Learning)", "type-cui-l2": "<strong>단점:</strong> 텅 빈 화면이나 긴 텍스트 덩어리는 피로 유발",
                "type-vui-t": "🎙️ VUI (음성)", "type-vui-l1": "<strong>호출어:</strong> '헤이 시리', '빅스비'", "type-vui-l2": "<strong>효과음:</strong> AI가 듣고 있다는 '띠링' 소리 (Audio Cue)", "type-vui-l3": "<strong>답변:</strong> 무조건 1~2문장으로 짧게!",
                "type-multi-t": "✨ Multi-Modal (멀티모달)", "type-multi-p": "텍스트, 음성, 카메라(시각)를 결합합니다.<br><em>예: 냉장고 사진을 찍으면(카메라), AI가 레시피를 화면에 띄우고(시각) 음성으로 요리법을 읽어줌(음성).</em>",

                "turn-title": "대화 규칙: 턴 넘기기와 모호함 해결", "turn-sub": "대화는 캐치볼과 같습니다. AI 혼자 떠들게 두지 말고, 다음 행동을 유도하세요.",
                "turn-bad": "❌ 나쁜 예시 (대화 단절)", "turn-good": "✅ 좋은 예시 (되묻기 + 칩 제공)",
                "turn-u1": "비행기 표 끊어줘.", "turn-a1": "오류: 입력 정보가 부족합니다. (에러 발생)",
                "turn-a2": "어디로 떠나시나요? 목적지를 선택해 주세요.", "turn-c1": "도쿄", "turn-c2": "런던", "turn-c3": "뉴욕",

                "fall-title": "우아한 실패 (Fallback UX)", "fall-sub": "AI가 대답할 수 없을 때 거짓말(환각)을 하거나 에러를 내지 말고, 솔직하고 친절하게 대안을 제시하세요.",
                "fall-h3": "3단계 폴백 패턴 (3-Step Pattern)",
                "fall-s1-b": "한계 인정:", "fall-s1-t": "'죄송합니다. 개인 계좌 기록은 열람할 수 없어요.'",
                "fall-s2-b": "가능 범위 설명:", "fall-s2-t": "'대신 가까운 영업점 위치나 환율은 알려드릴 수 있습니다.'",
                "fall-s3-b": "대안 제시:", "fall-s3-t": "'전문 상담원 연결을 도와드릴까요?'",

                "tree-title": "대화 흐름도 (Dialogue Tree) 설계", "tree-sub": "피그마(Figma)에서 화면을 그리기 전에, 갈래길을 순서도로 먼저 정리해야 합니다.",
                "tree-user": "User Node<br><small style='font-weight:normal;'>사용자 질문/버튼 클릭</small>", "tree-ai": "AI<br>판단",
                "tree-res": "AI Response<br><small style='font-weight:normal;'>정상 답변 + 추천 칩</small>", "tree-fall": "Fallback<br><small style='font-weight:normal;'>되묻기 / 대안 제시</small>",

                "act-title": "20분 워크샵 (과제 제출)", "act-h3": "나만의 5단계 대화 흐름도 스케치하기",
                "act-l1": "첫 인사말 + <strong>추천 시작 칩 2개</strong> 배치", "act-l2": "사용자 질문 입력 (User Input)", "act-l3": "AI 정상 출력 (로딩 상태 + 완료 후 액션 칩)", "act-l4": "AI 되묻기 (질문이 모호할 때 선택지 제공)", "act-l5": "우아한 실패 (불가능한 질문 시 대안 제시)",
                "act-note": "종이에 펜으로 그려도 좋고, 파워포인트 상자로 이어도 좋습니다.",
                "act-btn": "🔔 이번 주 제출 안내 확인",
                
                // Dynamic JS Strings
                "js_chip": "선택되었습니다! 다음 대화 턴으로 넘어갑니다. 🏓",
                "js_checklist": "스케치한 흐름도를 사진으로 찍거나 파일로 만들어 MS Teams 'Assignments' 탭(4주차 출석 퀴즈)에 일요일 밤 11시 59분까지 제출해주세요!"
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1", "nav-w2": "Week 2", "nav-w3": "Week 3", "nav-w4": "Week 4: Interaction Design",
                
                "intro-title": "Week 4: AI Interaction Design & Chat Flows",
                "intro-l1-b": "Goal:", "intro-l1-t": "Map smooth Dialogue Flows between humans and AI.",
                "intro-l2-b": "Core:", "intro-l2-t": "AI is 'Intent-based', not 'Direct Manipulation' (button clicking).",
                
                "type-title": "3 Types of AI Interfaces",
                "type-cui-t": "💬 CUI (Chatbot)", "type-cui-l1": "<strong>Pro:</strong> Zero learning curve. Everyone knows how to text.", "type-cui-l2": "<strong>Con:</strong> Blank screens & wall of text cause high fatigue.",
                "type-vui-t": "🎙️ VUI (Voice)", "type-vui-l1": "<strong>Wake Word:</strong> 'Hey Siri', 'Alexa'", "type-vui-l2": "<strong>Audio Cue:</strong> Chime sound indicating AI is listening", "type-vui-l3": "<strong>Answer:</strong> Must stay under 1-2 short sentences!",
                "type-multi-t": "✨ Multi-Modal", "type-multi-p": "Blends text, voice, and visuals smoothly.<br><em>Ex: Take a fridge photo (Visual) 👉 AI shows recipe cards (Visual) & reads steps aloud (Voice).</em>",

                "turn-title": "Turn-Taking & Handling Ambiguity", "turn-sub": "Conversation is like passing a ball. Don't talk forever; guide the next action.",
                "turn-bad": "❌ Bad UX (Dead End)", "turn-good": "✅ Good UX (Clarify + Chips)",
                "turn-u1": "Book a flight.", "turn-a1": "Error: Insufficient Input.",
                "turn-a2": "Where to? Please select a destination.", "turn-c1": "Tokyo", "turn-c2": "London", "turn-c3": "New York",

                "fall-title": "Graceful Degradation (Fallback UX)", "fall-sub": "When AI doesn't know, never hallucinate or fail silently. Be honest and offer alternatives.",
                "fall-h3": "The 3-Step Fallback Pattern",
                "fall-s1-b": "Acknowledge Limit:", "fall-s1-t": "'I am sorry, I don't have access to personal bank records.'",
                "fall-s2-b": "Explain Scope:", "fall-s2-t": "'I can only help with branch locations and currency rates.'",
                "fall-s3-b": "Provide Alternative:", "fall-s3-t": "'Would you like me to connect you to a human banker?'",

                "tree-title": "Mapping Dialogue Trees", "tree-sub": "Before Figma, map branching paths in a flowchart.",
                "tree-user": "User Node<br><small style='font-weight:normal;'>Input or Click</small>", "tree-ai": "AI<br>Decision",
                "tree-res": "AI Response<br><small style='font-weight:normal;'>Normal + Chips</small>", "tree-fall": "Fallback<br><small style='font-weight:normal;'>Clarify / Alternative</small>",

                "act-title": "20-Min Workshop", "act-h3": "Sketch Your 5-Step Flow",
                "act-l1": "Greeting + <strong>2 Starter Prompt Chips</strong>", "act-l2": "User Input", "act-l3": "AI Output (Loading + Follow-up chips)", "act-l4": "AI Clarifying Question (Unclear prompt)", "act-l5": "Graceful Fallback Path (Impossible question)",
                "act-note": "Sketch on paper with a pen, or use digital boxes like PowerPoint.",
                "act-btn": "🔔 Check Submission Guide",
                
                // Dynamic JS Strings
                "js_chip": "Selected! Passing the turn back to AI. 🏓",
                "js_checklist": "Upload your sketch (photo or file) to the MS Teams 'Assignments' tab by Sunday 11:59 PM!"
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "Неделя 1", "nav-w2": "Неделя 2", "nav-w3": "Неделя 3", "nav-w4": "Неделя 4: Интерактивный дизайн",
                
                "intro-title": "Неделя 4: Дизайн ИИ-взаимодействия и Чат-потоки",
                "intro-l1-b": "Цель:", "intro-l1-t": "Спроектировать плавные диалоговые потоки (Dialogue Flow) между человеком и ИИ.",
                "intro-l2-b": "Главное:", "intro-l2-t": "ИИ основан на 'Намерениях' (Intent), а не на прямом управлении кнопками.",
                
                "type-title": "3 типа ИИ-интерфейсов",
                "type-cui-t": "💬 CUI (Чат-бот)", "type-cui-l1": "<strong>Плюс:</strong> Не нужно учиться. Все умеют писать.", "type-cui-l2": "<strong>Минус:</strong> Пустые экраны и 'стены текста' утомляют.",
                "type-vui-t": "🎙️ VUI (Голос)", "type-vui-l1": "<strong>Слово вызова:</strong> 'Эй, Сири', 'Алекса'", "type-vui-l2": "<strong>Звук. сигнал:</strong> Звук, когда ИИ слушает (Audio Cue)", "type-vui-l3": "<strong>Ответ:</strong> Строго 1-2 коротких предложения!",
                "type-multi-t": "✨ Multi-Modal", "type-multi-p": "Плавно объединяет текст, голос и графику.<br><em>Пример: Фото холодильника (Зрение) 👉 ИИ показывает рецепт (Зрение) и читает вслух (Голос).</em>",

                "turn-title": "Передача хода (Turn-Taking) и Неясность", "turn-sub": "Диалог - это игра в мяч. Не говорите вечно; направляйте к следующему шагу.",
                "turn-bad": "❌ Плохой UX (Тупик)", "turn-good": "✅ Хороший UX (Уточнение + Кнопки)",
                "turn-u1": "Забронируй билет.", "turn-a1": "Ошибка: Недостаточно данных.",
                "turn-a2": "Куда? Пожалуйста, выберите пункт назначения.", "turn-c1": "Токио", "turn-c2": "Лондон", "turn-c3": "Нью-Йорк",

                "fall-title": "Умение красиво ошибаться (Fallback UX)", "fall-sub": "Если ИИ не знает, он не должен врать (галлюцинировать) или зависать. Будьте честны и предлагайте альтернативы.",
                "fall-h3": "3-шаговый паттерн Fallback",
                "fall-s1-b": "Признать предел:", "fall-s1-t": "'Извините, у меня нет доступа к счетам.'",
                "fall-s2-b": "Объяснить рамки:", "fall-s2-t": "'Я могу помочь только с адресами отделений.'",
                "fall-s3-b": "Предложить замену:", "fall-s3-t": "'Хотите, я соединю вас с оператором?'",

                "tree-title": "Построение дерева диалога (Dialogue Tree)", "tree-sub": "Перед Figma нарисуйте маршруты на схеме.",
                "tree-user": "Узел польз.<br><small style='font-weight:normal;'>Ввод / Клик</small>", "tree-ai": "ИИ<br>Решение",
                "tree-res": "Ответ ИИ<br><small style='font-weight:normal;'>Обычный + Кнопки</small>", "tree-fall": "Fallback<br><small style='font-weight:normal;'>Уточнение / Замена</small>",

                "act-title": "20-минутный воркшоп", "act-h3": "Нарисуйте свой 5-шаговый поток",
                "act-l1": "Приветствие + <strong>2 стартовые кнопки-подсказки</strong>", "act-l2": "Ввод пользователя", "act-l3": "Вывод ИИ (Загрузка + Кнопки действий)", "act-l4": "Уточняющий вопрос ИИ (Неясный запрос)", "act-l5": "Мягкий отказ (Невозможный вопрос)",
                "act-note": "Нарисуйте ручкой на бумаге или используйте блоки в PowerPoint.",
                "act-btn": "🔔 Правила сдачи",
                
                // Dynamic JS Strings
                "js_chip": "Выбрано! Передача хода ИИ. 🏓",
                "js_checklist": "Загрузите схему (фото или файл) в раздел 'Assignments' (Тест 4 недели) в MS Teams до воскресенья 23:59!"
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang});
})();
}

if (document.body.dataset.page === 'week05') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1", "nav-w2": "Week 2", "nav-w3": "Week 3", "nav-w4": "Week 4", "nav-w5": "Week 5: Trust & XAI",
                
                "intro-title": "Week 5: 신뢰, 오류, 그리고 설명 가능한 AI (XAI)",
                "intro-l1-b": "목표:", "intro-l1-t": "AI가 솔직하고 검증하기 쉬운 UI를 설계하여 사용자 신뢰 확보하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "완벽한 천재인 척 거짓말하는 것보다, 솔직하게 출처를 밝히고 실수를 인정하는 것이 낫습니다.",
                
                "hal-title": "AI는 왜 거짓말(Hallucination)을 할까?",
                "hal-b1-t": "📦 The 'Dark Box' Problem", "hal-b1-p": "AI가 '어떻게, 왜' 이런 대답을 했는지 근거를 볼 수 없을 때 사용자는 불안함을 느낍니다. 단 1번의 당당한 거짓말만으로도 앱을 삭제합니다.",
                "hal-b2-t": "🎲 Word Guessing Game", "hal-b2-p": "AI는 진실을 아는 뇌가 아니라, 다음 단어를 예측하는 확률 기계입니다. 그래서 <strong>세상에 없는 해마 이모지</strong>도 당당하게 지어냅니다.",

                "xai-title": "설명 가능한 AI (XAI): 이유를 보여주세요!", "xai-sub": "결과만 툭 던지지 말고, 그 결론에 도달한 과정과 출처를 시각적으로 투명하게 공개해야 합니다.",
                "xai-h3": "훌륭한 XAI를 위한 5가지 단서 (Clues)",
                "xai-l1": "모를 때는 100% 확신하는 척하지 말고 솔직히 한계를 인정합니다.",
                "xai-l2": "참고한 웹사이트나 문서의 정확한 출처 링크를 제공합니다.",
                "xai-l3": "건강, 금융, 법률 등 민감한 주제에는 눈에 띄는 안전 경고 배지를 붙입니다.",
                "xai-l4": "단 하나의 정답만 강요하지 않고 비교할 수 있는 대안을 줍니다.",
                "xai-l5": "최종 결정 전 실제 전문가(의사 등)와 상담하라는 안내를 추가합니다.",

                "ui-title": "어떻게 보여줄 것인가? (숫자 vs 출처)",
                "ui-bad-t": "❌ 복잡한 % 확률 (Bad UX)", "ui-bad-p": "'이 답변은 87.34% 확실합니다' 👉 사용자는 복잡한 숫자를 원하지 않으며 오히려 혼란만 더해집니다.",
                "ui-good-t": "✅ 번호 출처 배지 (Good UX)", "ui-good-p": "문장 끝에 공식 출처 링크를 뱃지로 달아줍니다. 1-Click 팩트체크가 가능해 신뢰가 상승합니다.",
                "ui-ex-txt": "한국의 유학생 비자 발급 수수료는 6만 원입니다.", "ui-ex-btn": "[1] 하이코리아",
                "warn-t": "의료/건강 검색 경고 (Google AI Overview)", "warn-p": "타이레놀 복용량처럼 위험한 질문에는 <strong>[WebMD]</strong> 같은 전문 출처를 달고, <strong>'이것은 의학적 진단이 아닙니다. 의사와 상담하세요.'</strong>라는 노란색 경고문을 반드시 배치해야 합니다.",

                "smart-title": "The Sweet Spot: 스마트한 신뢰 (Smart Trust)", "smart-sub": "우리는 맹신과 불신이라는 두 가지 위험한 함정을 모두 피해야 합니다.",
                "smart-t1": "맹신 (Blind Faith)", "smart-p1": "'AI는 항상 옳아!'<br>(치명적인 사고 유발)",
                "smart-t2": "스마트한 신뢰 (Smart Trust)", "smart-p2": "'이메일 초안 작성엔 좋지만, 세금 정보는 내가 직접 교차검증 해야지!'",
                "smart-t3": "불신 (No Trust)", "smart-p3": "'AI는 쓸모없어!'<br>(앱 삭제 및 이탈)",

                "act-title": "20분 워크샵 (과제 제출)", "act-h3": "나쁜 AI 화면 고치기 (Fix Bad AI!)",
                "act-p": "다음의 엉터리 AI 답변 화면에 오늘 배운 <strong>신뢰성 UI 요소 3가지</strong>를 추가해 다시 스케치하세요.",
                "act-bad-msg": "'당신은 독감입니다. 즉시 X 약을 드세요. 100% 보장합니다!'<br><small style='color:#94a3b8;'>(출처 없음, 경고 없음)</small>",
                "act-l1": "✅ 1. 믿을 수 있는 <strong>출처 링크 배지</strong> 추가",
                "act-l2": "✅ 2. 한계를 인정하는 <strong>안전 경고 박스</strong> 추가",
                "act-l3": "✅ 3. 대안을 주는 <strong>[전문 의사와 상담하기]</strong> 버튼 추가",
                "act-btn": "🔔 이번 주 제출 안내 확인",
                
                // Dynamic JS Strings
                "js_source_open": "학습용 예시: 실제 공식 웹사이트를 열거나 검증하지 않았습니다.",
                "js_checklist": "수정한 신뢰성 UI(Trust UI) 스케치를 사진이나 파일로 만들어 MS Teams 'Assignments' 탭(5주차 출석 퀴즈)에 일요일 밤 11시 59분까지 제출해주세요!"
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "Week 1", "nav-w2": "Week 2", "nav-w3": "Week 3", "nav-w4": "Week 4", "nav-w5": "Week 5: Trust & XAI",
                
                "intro-title": "Week 5: Trust, Mistakes, & Explainable AI (XAI)",
                "intro-l1-b": "Goal:", "intro-l1-t": "Design safe, honest UI that helps users double-check AI answers.",
                "intro-l2-b": "Core:", "intro-l2-t": "Being honest and humble is much better than pretending to be 100% perfect.",
                
                "hal-title": "Why does AI lie? (Hallucinations)",
                "hal-b1-t": "📦 The 'Dark Box' Problem", "hal-b1-p": "Users feel scared when they cannot see how or why the AI made an answer. Just 1 confident lie can make them delete the app.",
                "hal-b2-t": "🎲 Word Guessing Game", "hal-b2-p": "AI is not a brain of truth; it only guesses the next most likely word. It can confidently invent a <strong>fake seahorse emoji</strong>.",

                "xai-title": "Explainable AI (XAI): Show the Reason!", "xai-sub": "Don't just give the final answer. Show the steps and sources behind it.",
                "xai-h3": "5 Clues for Great XAI",
                "xai-l1": "AI admits when it is not certain instead of pretending to know.",
                "xai-l2": "Shows the exact websites or documents it read (Source Links).",
                "xai-l3": "Alerts users with warning badges for Health, Money, and Law topics.",
                "xai-l4": "Gives choices (Option A vs B) instead of only one path.",
                "xai-l5": "Asks users to double-check with a real human expert before critical decisions.",

                "ui-title": "How to show it? (Numbers vs Links)",
                "ui-bad-t": "❌ Confusing % (Bad UX)", "ui-bad-p": "'I am 87.34% sure' 👉 Users don't want math formulas. It makes them tired and confused.",
                "ui-good-t": "✅ Number Badges (Good UX)", "ui-good-p": "Put small clickable buttons at the end of sentences for 1-Click Fact Checking.",
                "ui-ex-txt": "The student visa fee in Korea is 60,000 KRW.", "ui-ex-btn": "[1] HiKorea",
                "warn-t": "Medical Warning (Google AI Overview)", "warn-p": "For dangerous topics like Tylenol dosage, show verified links like <strong>[WebMD]</strong> and a yellow warning: <strong>'This is not doctor advice. Always check with a doctor.'</strong>",

                "smart-title": "The Sweet Spot: 'Smart Trust'", "smart-sub": "We must avoid two dangerous traps: Blind Faith and No Trust.",
                "smart-t1": "Blind Faith", "smart-p1": "'AI is always right!'<br>(Causes dangerous mistakes)",
                "smart-t2": "Smart Trust (Best UX)", "smart-p2": "'AI is great for drafting emails, but I must double-check taxes myself!'",
                "smart-t3": "No Trust", "smart-p3": "'AI is totally useless!'<br>(User deletes the app)",

                "act-title": "20-Min Workshop", "act-h3": "Fix Bad AI Screen!",
                "act-p": "Redesign this dangerous AI screen by adding the <strong>3 Trust UI Tools</strong> we learned today.",
                "act-bad-msg": "'You have Flu. Take Medicine X. 100% Guaranteed!'<br><small style='color:#94a3b8;'>(No links, no warnings)</small>",
                "act-l1": "✅ 1. A verified <strong>website source link badge</strong>",
                "act-l2": "✅ 2. A clear <strong>safety disclaimer box</strong>",
                "act-l3": "✅ 3. A <strong>[Talk to Human Doctor]</strong> alternative button",
                "act-btn": "🔔 Check Submission Guide",
                
                // Dynamic JS Strings
                "js_source_open": "Learning demo only: no official website was opened or verified.",
                "js_checklist": "Upload your sketched 'Trust UI' to the MS Teams 'Assignments' tab by Sunday 11:59 PM!"
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "Неделя 1", "nav-w2": "Неделя 2", "nav-w3": "Неделя 3", "nav-w4": "Неделя 4", "nav-w5": "Неделя 5: XAI",
                
                "intro-title": "Неделя 5: Доверие, ошибки и Объяснимый ИИ (XAI)",
                "intro-l1-b": "Цель:", "intro-l1-t": "Создать честный UI, помогающий пользователям легко проверять ответы ИИ.",
                "intro-l2-b": "Главное:", "intro-l2-t": "Быть честным лучше, чем притворяться 100% идеальным гением.",
                
                "hal-title": "Почему ИИ лжет? (Галлюцинации)",
                "hal-b1-t": "📦 Проблема 'Темного ящика'", "hal-b1-p": "Пользователи боятся, когда не видят, КАК ИИ получил ответ. Всего 1 уверенная ложь заставит их удалить приложение.",
                "hal-b2-t": "🎲 Игра в угадывание слов", "hal-b2-p": "ИИ - не мозг; он лишь угадывает следующее вероятное слово. Он может уверенно выдумать <strong>несуществующий эмодзи морского конька</strong>.",

                "xai-title": "Объяснимый ИИ (XAI): Покажите причину!", "xai-sub": "Не давайте просто готовый ответ. Покажите шаги и источники.",
                "xai-h3": "5 ключей к отличному XAI",
                "xai-l1": "ИИ признает неуверенность вместо того, чтобы притворяться всезнайкой.",
                "xai-l2": "Показывает точные веб-сайты (Ссылки на источники).",
                "xai-l3": "Предупреждает о рисках в сфере здоровья, финансов и права.",
                "xai-l4": "Дает выбор (Вариант А против Б) вместо одного пути.",
                "xai-l5": "Просит проконсультироваться с реальным экспертом.",

                "ui-title": "Как это показать? (% против Ссылок)",
                "ui-bad-t": "❌ Запутывающие % (Плохой UX)", "ui-bad-p": "'Я уверен на 87.34%' 👉 Математика утомляет и запутывает пользователей.",
                "ui-good-t": "✅ Кнопки-источники (Хороший UX)", "ui-good-p": "Размещайте кликабельные номера в конце предложений для фактчекинга в 1 клик.",
                "ui-ex-txt": "Сбор за студенческую визу в Корее составляет 60 000 вон.", "ui-ex-btn": "[1] HiKorea",
                "warn-t": "Медицинское предупреждение (Google AI)", "warn-p": "Для опасных тем вроде дозировки лекарств, показывайте ссылки (<strong>[WebMD]</strong>) и желтое предупреждение: <strong>'Это не совет врача. Обратитесь к специалисту.'</strong>",

                "smart-title": "Золотая середина: 'Умное доверие'", "smart-sub": "Мы должны избегать 2 ловушек: Слепой веры и Недоверия.",
                "smart-t1": "Слепая вера", "smart-p1": "'ИИ всегда прав!'<br>(Опасно)",
                "smart-t2": "Умное доверие (Лучший UX)", "smart-p2": "'ИИ отлично пишет письма, но налоги я проверю сам!'",
                "smart-t3": "Недоверие", "smart-p3": "'ИИ бесполезен!'<br>(Удаление)",

                "act-title": "20-минутный воркшоп", "act-h3": "Исправьте плохой ИИ!",
                "act-p": "Перерисуйте этот опасный экран ИИ, добавив <strong>3 инструмента доверия (Trust UI)</strong>.",
                "act-bad-msg": "'У вас грипп. Примите Лекарство Х. Гарантия 100%!'<br><small style='color:#94a3b8;'>(Нет ссылок, нет предупреждений)</small>",
                "act-l1": "✅ 1. Значок кликабельной <strong>ссылки на источник</strong>",
                "act-l2": "✅ 2. Четкий <strong>блок с предупреждением</strong>",
                "act-l3": "✅ 3. Кнопка <strong>[Связаться с живым врачом]</strong>",
                "act-btn": "🔔 Правила сдачи",
                
                // Dynamic JS Strings
                "js_source_open": "Это учебная демонстрация: официальный сайт не открывался и не проверялся.",
                "js_checklist": "Загрузите свой скетч 'Trust UI' в раздел 'Assignments' в MS Teams до воскресенья 23:59!"
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang});
})();
}

if (document.body.dataset.page === 'week06') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "Week 6: Onboarding",
                
                "intro-title": "Week 6: AI 온보딩 & 피드백 UX",
                "intro-l1-b": "목표:", "intro-l1-t": "초보자에게 사용법을 안내하고, 피드백을 받아 AI를 개선하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "빈 입력창은 사용자를 얼어붙게 만듭니다 (Blank Canvas Paradox).",
                
                "blank-title": "빈 도화지의 역설 (Blank Canvas Paradox)", "blank-sub": "AI 서비스의 첫 화면을 텅 빈 입력창으로 방치하면 안 되는 이유입니다.",
                "blank-b1-t": "📱 일반 앱 (Normal App)", "blank-b1-p": "고정된 메뉴와 버튼이 있어서, 처음 앱을 켜도 <strong>3단계 팝업 튜토리얼</strong>만 보여주면 쉽게 적응합니다.",
                "blank-b2-t": "🤖 AI 앱 (AI App)", "blank-b2-p": "가이드 없이 '무엇이든 자유롭게 치세요'라고 텅 빈 창만 주면, 사용자는 <strong>얼어붙어서 아무것도 입력하지 못하고</strong> 앱을 이탈합니다.",

                "prog-title": "점진적 공개 (Progressive Disclosure)", "prog-sub": "처음부터 복잡한 프롬프트를 요구하지 말고, 숙련도에 따라 3단계로 기능을 열어주세요.",
                "prog-l1-b": "Level 1: 초보자", "prog-l1-t": "1-Click 시작 칩", "prog-l1-d": "[문서 요약하기] 버튼 탭",
                "prog-l2-b": "Level 2: 중급자", "prog-l2-t": "빈칸 채우기 템플릿", "prog-l2-d": "'이 글을 [3줄]로 요약해 줘'",
                "prog-l3-b": "Level 3: 숙련자", "prog-l3-t": "자유 입력 + 슬라이더", "prog-l3-d": "말투 조절, 창의성 설정창 제공",

                "start-title": "효과적인 시작 버튼 설계법",
                "start-l1-b": "명확한 행동 동사 (Direct Action Verbs):", "start-l1-t": "요약하기, 번역하기, 초안 쓰기 등 명확한 동사로 시작.",
                "start-l2-b": "목적별 탭 (Categorized Tabs):", "start-l2-t": "일상, 학업, 취업 등으로 깔끔하게 묶어주기.",
                "start-l3-b": "셔플 버튼 (Shuffle):", "start-l3-t": "새로운 아이디어를 1-Tap으로 계속 발견하게 만들기.",

                "feed-title": "피드백: 사용자의 목소리 듣기", "feed-sub": "긴 설문조사는 사용자를 지치게 합니다. 가장 직관적인 피드백 루프를 설계하세요.",
                "feed-mock-msg": "여기 요청하신 [프로젝트 기획서 요약본]입니다.<br>추가로 수정할 부분이 있다면 알려주세요.",
                "feed-mock-warn": "⚠️ AI는 실수할 수 있습니다.",
                "feed-mock-copy": "복사", "feed-mock-edit": "인라인 수정",
                "feed-toast-msg": "피드백 감사합니다! AI 개선에 도움이 됩니다.",
                "feed-h1": "명시적 피드백 (Explicit)",
                "feed-h2": "묵시적 피드백 (Implicit)",

                "exam-title": "중간고사 프로젝트 안내 (Week 7)", "exam-sub": "지금까지 기획한 내용들을 하나의 <strong>[기획서 PDF (2~3장)]</strong>로 묶어서 제출합니다. (발표 없음!)",
                "exam-l1": "1. 내가 정한 <strong>페르소나</strong>와 진짜 문제 정의",
                "exam-l2": "2. AI 상태(6 States)와 <strong>대화 흐름도(Dialogue Flow)</strong> 스케치",
                "exam-l3": "3. <strong>신뢰(Trust) 및 피드백(Feedback) UI</strong> 설계 아이디어",
                "exam-btn": "🔔 이번 주 출석 퀴즈 제출하기",
                
                // Dynamic JS Strings
                "js_level1": "버튼 하나 누르면 AI가 즉시 실행됩니다! (Zero Effort)",
                "js_level2": "빈칸을 채우며 자연스럽게 좋은 프롬프트 구조를 배웁니다.",
                "js_level3": "고급 설정창(길이, 톤 등)을 열어 정밀하게 제어합니다.",
                "js_copied": "클립보드에 복사되었습니다! (이 행동은 높은 만족도를 의미합니다. 🌟)",
                "js_edit": "연필 아이콘을 눌러 문장 일부를 바로 고칩니다! ✏️",
                "js_exam_alert": "수업이 끝난 후 MS Teams 'Assignments' 탭에서 [6주차 출석 퀴즈]를 이번 일요일까지 꼭 제출해주세요! 기획서는 다음 주 중간고사 과제입니다."
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "Week 6: Onboarding",
                
                "intro-title": "Week 6: AI Onboarding & Feedback UI",
                "intro-l1-b": "Goal:", "intro-l1-t": "Guide beginners smoothly and learn from user feedback to improve AI.",
                "intro-l2-b": "Core:", "intro-l2-t": "Freedom to type anything = Users freeze and type nothing (Blank Canvas Paradox).",
                
                "blank-title": "The 'Blank Canvas' Paradox", "blank-sub": "Why you should never leave an empty chat box for first-time users.",
                "blank-b1-t": "📱 Normal App", "blank-b1-p": "Has fixed buttons and menus. A <strong>simple 3-step popup tour</strong> is enough.",
                "blank-b2-t": "🤖 AI App", "blank-b2-p": "If you just give a blank box saying 'type anything', users <strong>freeze, don't know what to ask,</strong> and leave.",

                "prog-title": "Progressive Disclosure", "prog-sub": "Reveal complex AI power gradually to avoid cognitive overload.",
                "prog-l1-b": "Level 1: Novice", "prog-l1-t": "1-Click Starter Chips", "prog-l1-d": "Tap [Summarize PDF] button",
                "prog-l2-b": "Level 2: Intermediate", "prog-l2-t": "Fill-in-the-Blank Slots", "prog-l2-d": "'Summarize this in [3 bullets]'",
                "prog-l3-b": "Level 3: Power User", "prog-l3-t": "Free typing + Sliders", "prog-l3-d": "Show Tone & Creativity settings",

                "start-title": "Designing Effective Starter Prompts",
                "start-l1-b": "Direct Action Verbs:", "start-l1-t": "Start with clear verbs: Summarize, Translate, Draft.",
                "start-l2-b": "Categorized Tabs:", "start-l2-t": "Group by Goal: Academic, Daily Life, Resume.",
                "start-l3-b": "Shuffle Button:", "start-l3-t": "Let users discover fresh ideas in 1 tap.",

                "feed-title": "Feedback: Listening to Users", "feed-sub": "Long surveys make users tired. Design frictionless feedback loops.",
                "feed-mock-msg": "Here is the [Project Summary] you requested.<br>Let me know if you want any changes.",
                "feed-mock-warn": "⚠️ AI can make mistakes.",
                "feed-mock-copy": "Copy", "feed-mock-edit": "In-line Edit",
                "feed-toast-msg": "Thank you! Your feedback helps make AI smarter.",
                "feed-h1": "Explicit Feedback",
                "feed-h2": "Implicit Feedback",

                "exam-title": "Midterm Project Notice (Week 7)", "exam-sub": "Combine everything you worked on into one <strong>[Proposal PDF (2~3 pages)]</strong>. (No Presentation!)",
                "exam-l1": "1. <strong>Persona</strong> & High-Impact Problem",
                "exam-l2": "2. <strong>Dialogue Flowchart</strong> & 6 System States",
                "exam-l3": "3. <strong>Trust & Feedback UI</strong> Plan",
                "exam-btn": "🔔 Submit Week 6 Attendance Quiz",
                
                // Dynamic JS Strings
                "js_level1": "Tap a button and AI runs instantly! (Zero Effort)",
                "js_level2": "Users learn good prompt structures naturally by filling in blanks.",
                "js_level3": "Open advanced sliders (Tone, Length) for precise control.",
                "js_copied": "Copied to clipboard! (This implies High Satisfaction. 🌟)",
                "js_edit": "Tap the pencil icon to fix words right in place! ✏️",
                "js_exam_alert": "Don't forget to submit the [Week 6 Attendance Quiz] in the MS Teams 'Assignments' tab by this Sunday! The proposal is for next week's Midterm."
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "Неделя 6: Онбординг",
                
                "intro-title": "Неделя 6: ИИ Онбординг и UI Отзывов",
                "intro-l1-b": "Цель:", "intro-l1-t": "Плавно направлять новичков и улучшать ИИ на основе их отзывов.",
                "intro-l2-b": "Главное:", "intro-l2-t": "Свобода писать что угодно = Пользователи замирают и ничего не пишут (Парадокс пустого холста).",
                
                "blank-title": "Парадокс 'Пустого холста'", "blank-sub": "Почему нельзя оставлять пустой чат для новых пользователей.",
                "blank-b1-t": "📱 Обычное Приложение", "blank-b1-p": "Имеет фиксированные кнопки. <strong>Простого 3-шагового туториала</strong> достаточно.",
                "blank-b2-t": "🤖 ИИ Приложение", "blank-b2-p": "Если дать пустой экран 'пиши что хочешь', пользователи <strong>впадают в ступор, не знают что спросить</strong> и уходят.",

                "prog-title": "Постепенное раскрытие", "prog-sub": "Открывайте сложные функции ИИ постепенно, чтобы избежать когнитивной перегрузки.",
                "prog-l1-b": "Уровень 1: Новичок", "prog-l1-t": "Стартовые кнопки (1 клик)", "prog-l1-d": "Клик по [Резюмировать PDF]",
                "prog-l2-b": "Уровень 2: Средний", "prog-l2-t": "Шаблоны с пробелами", "prog-l2-d": "'Резюмируй это в [3 пункта]'",
                "prog-l3-b": "Уровень 3: Профи", "prog-l3-t": "Свободный ввод + Слайдеры", "prog-l3-d": "Настройки Тона и Креативности",

                "start-title": "Дизайн эффективных стартовых кнопок",
                "start-l1-b": "Глаголы действия:", "start-l1-t": "Начинайте с четких глаголов: Резюмируй, Переведи.",
                "start-l2-b": "Вкладки категорий:", "start-l2-t": "Группируйте по целям: Учеба, Быт, Работа.",
                "start-l3-b": "Кнопка Перемешать:", "start-l3-t": "Пусть пользователи открывают новые идеи в 1 клик.",

                "feed-title": "Отзывы: Слушаем пользователей", "feed-sub": "Длинные опросы утомляют. Создайте легкий цикл обратной связи.",
                "feed-mock-msg": "Вот запрошенное [Резюме проекта].<br>Дайте знать, если нужны правки.",
                "feed-mock-warn": "⚠️ ИИ может ошибаться.",
                "feed-mock-copy": "Копировать", "feed-mock-edit": "Изменить в строке",
                "feed-toast-msg": "Спасибо! Ваш отзыв делает ИИ умнее.",
                "feed-h1": "Явные отзывы (Explicit)",
                "feed-h2": "Неявные отзывы (Implicit)",

                "exam-title": "Информация по Мидтерму (Неделя 7)", "exam-sub": "Объедините все ваши наработки в один <strong>[PDF Проект (2~3 стр.)]</strong>. (Без презентации!)",
                "exam-l1": "1. <strong>Персона</strong> и главная проблема",
                "exam-l2": "2. <strong>Схема диалога</strong> и 6 состояний",
                "exam-l3": "3. <strong>Доверие и UI Отзывов</strong> (идеи)",
                "exam-btn": "🔔 Сдать тест за 6 неделю",
                
                // Dynamic JS Strings
                "js_level1": "Нажмите кнопку, и ИИ запустится мгновенно! (Ноль усилий)",
                "js_level2": "Пользователи естественно учатся структуре промптов, заполняя пропуски.",
                "js_level3": "Откройте расширенные слайдеры (Тон, Длина) для точного контроля.",
                "js_copied": "Скопировано в буфер! (Это означает Высокую удовлетворенность. 🌟)",
                "js_edit": "Нажмите иконку карандаша, чтобы исправить слова на месте! ✏️",
                "js_exam_alert": "Не забудьте сдать [Тест за 6 неделю] в MS Teams 'Assignments' до этого воскресенья! Проект нужно сдать на следующей неделе."
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // 📈 Progressive Disclosure Interaction
        function showLevel(level) {
            let msgKey = 'js_level' + level;
            alert(translations[currentLang][msgKey]);
        }

        // 👍 Feedback UI Interaction
        function submitFeedback(type) {
            const toast = document.getElementById('thankyou-toast');
            toast.style.display = 'flex';
            setTimeout(() => {
                toast.style.display = 'none';
            }, 4000);
        }

        function closeToast() {
            document.getElementById('thankyou-toast').style.display = 'none';
        }

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, showLevel, submitFeedback, closeToast});
})();
}

if (document.body.dataset.page === 'week07') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w07": "Week 07: WoZ Prototyping",
                
                "intro-title": "Week 07: 오즈의 마법사(WoZ) 프로토타이핑",
                "intro-l1-b": "목표:", "intro-l1-t": "코딩을 한 줄도 하지 않고 사람이 AI인 척 연기하며 사용자 반응 미리 확인하기",
                "intro-l2-b": "이름의 유래:", "intro-l2-t": "동화 《오즈의 마법사》에서 커튼 뒤에 숨어 거대한 마법사 흉내를 내던 사람 이야기에서 따왔어요!",
                "intro-callout": '"AI를 직접 개발하려면 돈과 시간이 몇 달씩 들어요. 하지만 WoZ를 쓰면 단 하루 만에 사용자가 이 말투와 기능을 좋아하는지 확인할 수 있습니다!"',
                
                "role-title": "WoZ 실험실의 3가지 핵심 역할",
                "role-sub": "실험을 성공시키려면 3명이 각자의 역할을 완벽히 소화해야 해요. 역할을 눌러 규칙을 확인해 보세요!",
                "r1-title": "👤 1. 참여자 (사용자)",
                "r2-title": "🧙 2. 마법사 (운영자)",
                "r3-title": "📝 3. 관찰자 (기록자)",
                "r1-sub": "뒤에 사람이 있는 줄 모름",
                "r2-sub": "커튼 뒤에서 AI 흉내 내기",
                "r3-sub": "표정과 당황하는 순간 메모",

                "rule-title": "완벽한 AI가 되기 위한 '마법사의 3대 비밀 규칙'",
                "rule-sub": "사람인 게 들키지 않으려면 철저하게 AI처럼 규칙을 지켜 대답해야 해요.",
                "rule1-t": "📋 1. 미리 적어둔 답변 복사/붙여넣기", "rule1-p": "사람마다 말투가 바뀌면 안 되니까 미리 문장 창고(Canned Responses)를 만들어두고 복사해서 보냅니다.",
                "rule2-t": "⏳ 2. 3~5초 뜸 들이기 (생각하는 척!)", "rule2-p": "너무 1초 만에 답장하면 사람인 게 들켜요! AI가 연산하는 것처럼 3~5초 기다렸다가 전송합니다.",
                "rule3-t": "🤖 3. 일부러 엉뚱한 대답 섞기 (의도된 에러)", "rule3-p": "AI가 가끔 틀리듯이 엉뚱한 대답을 하나 던져보고, 사용자가 당황할 때 어떻게 고쳐 쓰는지 반응을 살핍니다.",

                "tool-title": "돈 안 들이고 당장 시작하는 노코드(No-Code) 도구",
                "tool-sub": "전문 프로그램 없이 중학생도 카톡이나 문서로 바로 테스트할 수 있어요.",
                "tool-c1": "<strong>💬 메신저 활용 (카카오톡, 디스코드, 슬랙):</strong><br>계정 이름을 'AI 도우미 챗봇'으로 짓고 로봇 프로필 사진을 걸어둔 뒤, 뒤에서 디자이너가 대신 채팅을 쳐줍니다.",
                "tool-c2": "<strong>📄 공유 문서 (Google Docs / Notion):</strong><br>사용자가 문서에 질문을 치면, 커튼 뒤 마법사가 실시간으로 아래에 타이핑하며 답변을 적어줍니다.",

                "flow-title": "20분 만에 끝내는 실전 테스트 4단계",
                "flow-sub": "실험은 복잡하지 않아요! 4단계 총 20분이면 충분합니다.",
                "pz1": "1단계: 브리핑<br>(3분)<br>미션 부여",
                "pz2": "2단계: 대화 테스트<br>(10분)<br>실제 챗봇 대화",
                "pz3": "3단계: 정체 공개<br>(5분)<br>인터뷰 & 진실 고백",
                "pz4": "4단계: 정리<br>(2분)<br>감사 인사 & 메모",

                "mid-title": "중간고사 과제 안내 (8주차 제출)",
                "mid-h3": "3페이지 중간고사 컨셉 기획서 (PDF) 작성 체크리스트",
                "mid-l1": "<strong>1페이지:</strong> 서비스 이름, 타깃 페르소나(Week 2), 해결하려는 핵심 문제",
                "mid-l2": "<strong>2페이지:</strong> 활용할 AI 기술 종류(시각/언어/음성) & 5단계 대화 흐름도(Logic Flow)",
                "mid-l3": "<strong>3페이지:</strong> 신뢰성 UI 스케치(출처/면책조항), 피드백 버튼(좋아요/싫어요), WoZ 계획",
                "act-btn": "📢 8주차 중간고사 제출 안내 확인하기",
                
                // Dynamic JS Strings
                "js_role_user": `👤 참여자 (테스트 사용자):

뒤에서 진짜 사람이 답변을 치고 있다는 것을 전혀 모른 채, 현실적인 미션을 전달받고 AI와 대화하는 사용자입니다. 절대 사람이란 걸 미리 알려주면 안 돼요!`,
                "js_role_wizard": `🧙 마법사 (운영자):

커튼 뒤에 숨어 진짜 AI인 척 연기하는 디자이너입니다. 철저하게 규칙에 따라 답변 문장을 복사해 붙여넣고 3~5초 뜸을 들여 답장합니다.`,
                "js_role_observer": `📝 관찰자 (기록자):

사용자가 어디서 대화를 멈추는지, 언제 미간을 찌푸리는지, 어떤 답변에 만족하는지 꼼꼼하게 메모하여 디자인 개선점에 반영하는 사람입니다.`,
                "js_midterm_alert": `📢 중간고사 과제 제출 안내 (Week 8)

• 제출 형식: PDF 문서 (총 2~3페이지)
• 제출처: MS Teams ➔ Assignments ➔ [중간고사 과제 제출란]
• 제출 마감: 다음 주 일요일 밤 11시 59분까지
• 안내: 실시간 수업이나 라이브 발표는 없으며, 제출한 PDF 기획서로 평가됩니다!`
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w07": "Week 07: WoZ Prototyping",
                
                "intro-title": "Week 07: Wizard of Oz (WoZ) Prototyping",
                "intro-l1-b": "Goal:", "intro-l1-t": "Test conversational AI experiences by human simulation with zero backend coding.",
                "intro-l2-b": "Origin:", "intro-l2-t": "Inspired by the wizard in 'The Wizard of Oz' who secretly controlled everything behind a curtain!",
                "intro-callout": '"Building real AI models takes months and huge budgets. WoZ lets you validate user demand and tone in a single afternoon!"',
                
                "role-title": "3 Core Roles in a WoZ Experiment",
                "role-sub": "For a successful test, three people must play distinct roles. Click to see their missions!",
                "r1-title": "👤 1. Participant (User)",
                "r2-title": "🧙 2. Wizard (Operator)",
                "r3-title": "📝 3. Observer (Note-taker)",
                "r1-sub": "Unaware of human behind AI",
                "r2-sub": "Acts like an AI behind curtain",
                "r3-sub": "Notes facial cues & hesitation",

                "rule-title": "The Wizard's 3 Golden Rules to Mimic AI",
                "rule-sub": "To avoid breaking the illusion, operators must follow strict rules.",
                "rule1-t": "📋 1. Use Canned Responses", "rule1-p": "Keep conversational tone consistent by copy-pasting pre-written response snippets.",
                "rule2-t": "⏳ 2. Simulated Latency (3~5s)", "rule2-p": "Don't reply in 1 second like a human! Wait 3~5 seconds to simulate computing time.",
                "rule3-t": "🤖 3. Controlled Errors", "rule3-p": "Trigger a minor hallucination or typo on purpose to see how users recover from mistakes.",

                "tool-title": "Zero-Cost No-Code Tools to Start Today",
                "tool-sub": "Anyone can test conversational AI using standard messengers or docs.",
                "tool-c1": "<strong>💬 Messengers (Discord, Slack, KakaoTalk):</strong><br>Set up a bot profile image and name like 'AI Assistant Bot', and type replies manually.",
                "tool-c2": "<strong>📄 Shared Docs (Google Docs / Notion):</strong><br>User writes questions in real time while the wizard types responses directly underneath.",

                "flow-title": "Step-by-Step WoZ Protocol in 20 Mins",
                "flow-sub": "A full testing session takes only 4 quick phases and 20 minutes.",
                "pz1": "Phase 1: Briefing<br>(3 mins)<br>Give Task",
                "pz2": "Phase 2: Live Chat<br>(10 mins)<br>Interactive Session",
                "pz3": "Phase 3: Reveal<br>(5 mins)<br>Debrief & Interview",
                "pz4": "Phase 4: Wrap-up<br>(2 mins)<br>Thanks & Notes",

                "mid-title": "Midterm Concept Proposal Guide (Due Week 8)",
                "mid-h3": "3-Page PDF Proposal Submission Checklist",
                "mid-l1": "<strong>Page 1:</strong> Service Name, Target Persona (Week 2), Core Problem Statement",
                "mid-l2": "<strong>Page 2:</strong> Chosen AI Tech & 5-Step Logic Flowchart (Week 4)",
                "mid-l3": "<strong>Page 3:</strong> Trust UI Sketch (Week 5), Feedback Buttons (Week 6), WoZ Plan",
                "act-btn": "📢 View Midterm Submission Info",
                
                // Dynamic JS Strings
                "js_role_user": `👤 Participant (User):

Tests the app believing it is a real automated AI. Never disclose the human secret beforehand!`,
                "js_role_wizard": `🧙 The Wizard (Operator):

The designer acting as AI behind the curtain. Follows strict script rules and inserts simulated latency.`,
                "js_role_observer": `📝 Observer (Note-taker):

Captures hesitation moments, frowns, and user pain points to iterate Figma UI components.`,
                "js_midterm_alert": `📢 Midterm Concept Proposal Submission (Week 8)

• Format: PDF Document (2–3 Pages)
• Submission: MS Teams ➔ Assignments ➔ [Midterm Project Submission]
• Deadline: Next Sunday, 11:59 PM
• Note: No live presentations. Grading is 100% based on your uploaded PDF!`
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w07": "Неделя 07: WoZ Прототипирование",
                
                "intro-title": "Неделя 07: Метод Волшебника страны Оз (WoZ)",
                "intro-l1-b": "Цель:", "intro-l1-t": "Тестирование ИИ-опыта без строчки кода: человек симулирует ИИ за кулисами.",
                "intro-l2-b": "Происхождение:", "intro-l2-t": "В честь сказки «Волшебник страны Оз», где маг оказался человеком за занавеской!",
                "intro-callout": '"Разработка реального ИИ требует месяцев и больших бюджетов. WoZ позволяет проверить идеи за один день!"',
                
                "role-title": "3 Ключевые Роли в Эксперименте WoZ",
                "role-sub": "Для успеха эксперимента нужны 3 человека с четкими ролями. Кликните, чтобы узнать!",
                "r1-title": "👤 1. Участник (пользователь)",
                "r2-title": "🧙 2. Волшебник (оператор)",
                "r3-title": "📝 3. Наблюдатель (записывает наблюдения)",
                "r1-sub": "Не знает о человеке за ИИ",
                "r2-sub": "Притворяется ИИ за ширмой",
                "r3-sub": "Записывает эмоции и заминки",

                "rule-title": "3 Золотых Правила 'Волшебника' (Оператора)",
                "rule-sub": "Чтобы пользователь поверил, нужно строго соблюдать правила поведения ИИ.",
                "rule1-t": "📋 1. Заготовленные фразы", "rule1-p": "Копируйте и вставляйте готовые шаблоны ответов для сохранения единого стиля.",
                "rule2-t": "⏳ 2. Задержка в 3~5 секунд", "rule2-p": "Не отвечайте за секунду как человек! Подождите 3~5 секунд, симулируя работу модели.",
                "rule3-t": "🤖 3. Контролируемые ошибки", "rule3-p": "Сделайте намеренную мелкую ошибку, чтобы увидеть, как пользователь среагирует и исправит запрос.",

                "tool-title": "Бесплатные No-Code инструменты для старта",
                "tool-sub": "Любой может протестировать диалоговый ИИ с помощью привычных мессенджеров.",
                "tool-c1": "<strong>💬 Мессенджеры (Telegram, Discord, Slack):</strong><br>Поставьте аватарку робота, назовите аккаунт 'AI Bot' и пишите ответы вручную.",
                "tool-c2": "<strong>📄 Документы (Google Docs / Notion):</strong><br>Пользователь пишет вопрос, а оператор печатает ответ в реальном времени строкой ниже.",

                "flow-title": "Протокол сессии WoZ: 4 шага за 20 минут",
                "flow-sub": "Тестирование не требует много времени: всего 4 шага и 20 минут.",
                "pz1": "Этап 1: Брифинг<br>(3 мин)<br>Постановка задачи",
                "pz2": "Этап 2: Диалог<br>(10 мин)<br>Тест чат-бота",
                "pz3": "Этап 3: Раскрытие<br>(5 мин)<br>Интервью и правда",
                "pz4": "Этап 4: Финал<br>(2 мин)<br>Итоги и заметки",

                "mid-title": "Промежуточный проект (Сдача на 8 неделе)",
                "mid-h3": "Чек-лист 3-страничного PDF-отчета",
                "mid-l1": "<strong>Стр 1:</strong> Название сервиса, Персона (Неделя 2), Главная проблема",
                "mid-l2": "<strong>Стр 2:</strong> Тип ИИ (Vision/NLP/Voice) и Логическая блок-схема (Неделя 4)",
                "mid-l3": "<strong>Стр 3:</strong> Скетч UI Доверия (Источники), Кнопки фидбека, План WoZ",
                "act-btn": "📢 Информация о сдаче проекта (Неделя 8)",
                
                // Dynamic JS Strings
                "js_role_user": `👤 Участник (Пользователь):

Выполняет задачу, веря, что общается с реальным ИИ. Ни в коем случае не говорите ему правду заранее!`,
                "js_role_wizard": `🧙 Волшебник (Оператор):

Дизайнер, имитирующий работу ИИ. Использует скрипты и делает искусственные паузы перед ответом.`,
                "js_role_observer": `📝 Наблюдатель (Секретарь):

Записывает моменты замешательства, эмоции и проблемы юзабилити для доработки интерфейса в Figma.`,
                "js_midterm_alert": `📢 Сдача Промежуточного Отчета (Неделя 8)

• Формат: PDF-документ (2–3 страницы)
• Куда сдавать: MS Teams ➔ Assignments ➔ [Midterm Project Submission]
• Дедлайн: До следующего воскресенья, 23:59
• Примечание: Презентаций в эфире нет, оценка ставится по загруженному PDF!`
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        function triggerAlert(msgKey) {
            alert(translations[currentLang][msgKey]);
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    
Object.assign(window,{setLang,triggerAlert});

})();
}
if (document.body.dataset.page === 'week09') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w9": "W9 (피그마)",
                
                "intro-title": "Week 09: Figma Prototyping for AI Services",
                "intro-l1-b": "목표:", "intro-l1-t": "코딩 없이 클릭 가능한 스마트폰 AI 앱 프로토타입 만들기",
                "intro-l2-b": "핵심:", "intro-l2-t": "피그마 기초(단축키, 오토 레이아웃, 컴포넌트)를 익히고 핵심 3단계 대화 화면을 직접 조작해 보세요!",
                
                "deep-title": "피그마 핵심 기능 심층 실습",
                "deep-sub": "실제 피그마에서 사용하는 주요 툴과 AI 챗봇 디자인 규칙을 인터랙티브 예시로 확인하세요.",
                
                "c1-title": "⌨️ 1. 필수 단축키 (Keyboard Shortcuts)",
                "c1-f": "프레임 생성", "c1-t": "텍스트 입력", "c1-r": "도형 그리기",
                "c1-desc": "화면 틀을 짤 때는 <strong>F(Frame)</strong>, 글자를 쓸 때는 <strong>T(Text)</strong>, 버튼이나 아바타를 그릴 때는 <strong>R(Rectangle) / O(Circle)</strong>를 사용해 디자인 속도를 3배 높이세요.",
                
                "c2-title": "🪄 2. 오토 레이아웃 (Auto Layout)",
                "c2-btn": "✨ Shift + A 마법 걸기",
                "c2-desc": "요소들을 선택하고 <strong>Shift + A</strong>를 누르면 텍스트 길이에 맞춰 자동으로 크기가 변하고 간격이 맞춰지는 마법 상자(컨테이너)가 됩니다.",
                
                "c3-title": "💎 3. 컴포넌트 재사용 (Components)",
                "c3-bub": "채팅 말풍선", "c3-btn": "대장 색상 변경하기", "c3-inst1": "복사본 1", "c3-inst2": "복사본 2",
                "c3-desc": "원본(Master)을 만들어두고 복사해서 쓰면, 나중에 <strong>원본의 색상이나 폰트를 바꿀 때 수십 개의 복사본(Instances)이 1초 만에 동시에 업데이트</strong>됩니다.",
                
                "c4-title": "💬 4. AI 챗봇 UI & 로딩 (Chat UI & Loading)",
                "c4-user": "PDF 내용 요약해 줘.",
                "c4-desc": "사용자 메시지는 <strong>오른쪽(진한 색)</strong>, AI 답변은 <strong>왼쪽(밝은 색 + 아바타)</strong>으로 구분합니다. 답변 전에는 점 3개 깜빡임(Thinking...)을 넣어 앱이 멈춘 것이 아님을 알립니다.",
                
                "c5-title": "⚡ 5. 3단계 코어 흐름 연결 (3-Screen Core Flow)",
                "c5-chip": "⚡ PDF 요약 클릭!", "c5-reset": "🔄 처음으로",
                "c5-desc": "Prototype 탭에서 <strong>추천 칩 클릭 시 (On click)</strong> 로딩 화면으로, <strong>0.8초 후 (After delay)</strong> 최종 답변 화면으로 선을 연결하면 코딩 없이 실제 구동되는 앱이 완성됩니다.",
                
                "c6-title": "🔗 6. 권한 변경 후 링크 공유 (Share Link)",
                "c6-btn-share": "Share (공유하기)", "c6-perm-txt": "★필수 권한 설정:",
                "c6-opt1": "Only invited people (제한됨)", "c6-opt2": "Anyone with the link (링크가 있는 누구나)",
                "c6-btn-copy": "🔗 Copy link",
                "c6-desc": "과제를 제출할 때 파일 다운로드 없이 <strong>Share 버튼</strong>을 누르고, 권한을 반드시 <strong>'Anyone with the link'</strong>로 바꾼 뒤 링크만 복사하여 MS Teams에 제출합니다.",

                "act-title": "25 Minutes: Hands-on Practice Session", "act-h3": "지금 바로 나만의 AI 프로토타입 만들기",
                "act-chk": "🎯 실습 체크리스트",
                "act-l1": "피그마 새 파일 열고 <strong>프레임(iPhone 15)</strong> 만들기",
                "act-l2": "<strong>Auto Layout(Shift+A)</strong>으로 추천 칩 & 말풍선 만들기",
                "act-l3": "화면 복사해서 <strong>3단계 (Empty > Loading > Output)</strong> 구성하기",
                "act-l4": "<strong>Prototype 탭</strong>에서 클릭(On click)과 지연(After delay) 화살표 연결하기",
                "act-help": "🙋 막히는 부분이 있다면 언제든 손을 들고 질문하세요!",
                "act-btn": "🚀 9주차 실습 완료 확인",
                
                "js_key_f": "📱 iPhone 프레임이 캔버스에 생성되었습니다! (F)",
                "js_key_t": "📝 텍스트 입력 모드로 전환되었습니다! (T)",
                "js_key_r": "🟦 사각형/원형 그리기 툴이 선택되었습니다! (R/O)",
                "js_al_long": "글자가 길어져도 상자가 알아서 커집니다!",
                "js_al_btn2": "🔄 텍스트 길게 늘려보기",
                "js_al_btn1": "✨ Shift + A 마법 걸기",
                "js_copied": "링크가 클립보드에 복사되었습니다! MS Teams에 제출해 주세요.",
                "js_done": "코딩 없이 3단계 대화 흐름을 훌륭하게 완성하셨습니다! 수고하셨습니다."
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w9": "W9 (Figma)",
                
                "intro-title": "Week 09: Figma Prototyping for AI Services",
                "intro-l1-b": "Goal:", "intro-l1-t": "Make your AI app ideas clickable and interactive without coding!",
                "intro-l2-b": "Core:", "intro-l2-t": "Learn Figma basics (Shortcuts, Auto Layout, Components) and build the 3-screen core flow interactively below!",
                
                "deep-title": "Deep Dive into Figma Basics",
                "deep-sub": "Experience key Figma tools and AI chatbot design rules through live interactive examples.",
                
                "c1-title": "⌨️ 1. Essential Keyboard Shortcuts",
                "c1-f": "Frame", "c1-t": "Text", "c1-r": "Shapes",
                "c1-desc": "Design 3x faster! Press <strong>'F'</strong> for mobile Frames, <strong>'T'</strong> to type Text, and <strong>'R' or 'O'</strong> to draw Rectangles or Circles for buttons and avatars.",
                
                "c2-title": "🪄 2. Auto Layout Magic",
                "c2-btn": "✨ Apply Shift + A",
                "c2-desc": "Select elements and press <strong>Shift + A</strong> to wrap them in a magical container that automatically grows, shrinks, and maintains perfect gaps.",
                
                "c3-title": "💎 3. Reusable Components",
                "c3-bub": "Chat Bubble", "c3-btn": "Change Master Color", "c3-inst1": "Instance 1", "c3-inst2": "Instance 2",
                "c3-desc": "Create one Master Component and duplicate it. Later, <strong>if you change the Master's color, all copied Instances update instantly across your screens!</strong>",
                
                "c4-title": "💬 4. AI Chat UI & Loading",
                "c4-user": "Summarize this PDF.",
                "c4-desc": "Align User messages to the <strong>Right (dark color)</strong> and AI answers to the <strong>Left (light color + avatar)</strong>. Use 3 blinking dots (Thinking...) to show system latency.",
                
                "c5-title": "⚡ 5. 3-Screen Core Flow",
                "c5-chip": "⚡ Click to summarize!", "c5-reset": "🔄 Reset",
                "c5-desc": "In the Prototype tab, set the starter chip to <strong>'On click'</strong> to go to the Loading screen, and set <strong>'After delay (800ms)'</strong> to show the Output screen automatically.",
                
                "c6-title": "🔗 6. Sharing Your Prototype Link",
                "c6-btn-share": "Share", "c6-perm-txt": "★ Crucial Permission:",
                "c6-opt1": "Only invited people", "c6-opt2": "Anyone with the link",
                "c6-btn-copy": "🔗 Copy link",
                "c6-desc": "When submitting homework, click <strong>Share</strong>, change the permission to <strong>'Anyone with the link can view'</strong>, copy the link, and paste it into MS Teams.",

                "act-title": "25 Minutes: Hands-on Practice Session", "act-h3": "Let's create your first clickable prototype right now.",
                "act-chk": "🎯 Practice Checklist",
                "act-l1": "Create a new file and draw 1 <strong>Frame (iPhone 15)</strong>.",
                "act-l2": "Make Starter Chips & Chat Bubbles using <strong>Auto Layout (Shift+A)</strong>.",
                "act-l3": "Duplicate to build <strong>3 screens (Empty > Loading > Output)</strong>.",
                "act-l4": "Connect screens with 'On click' and 'After delay' in the <strong>Prototype tab</strong>.",
                "act-help": "🙋 Raise your hand or ask anytime if you get stuck!",
                "act-btn": "🚀 Confirm Week 9 Completion",
                
                "js_key_f": "📱 iPhone frame created on the canvas! (F)",
                "js_key_t": "📝 Text tool selected! Click to type. (T)",
                "js_key_r": "🟦 Rectangle/Circle shape tool activated! (R/O)",
                "js_al_long": "The box automatically grows when text gets longer!",
                "js_al_btn2": "🔄 Make text longer",
                "js_al_btn1": "✨ Apply Shift + A",
                "js_copied": "Link copied to clipboard! Please submit it on MS Teams.",
                "js_done": "Great job building your 3-step interactive AI flow without coding!"
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w9": "W9 (Figma)",
                
                "intro-title": "Неделя 09: Прототипирование ИИ в Figma",
                "intro-l1-b": "Цель:", "intro-l1-t": "Сделать идеи ИИ-приложений кликабельными без программирования!",
                "intro-l2-b": "Главное:", "intro-l2-t": "Освойте основы (горячие клавиши, Auto Layout) и протестируйте 3-экранный флоу ниже!",
                
                "deep-title": "Глубокий разбор основ Figma",
                "deep-sub": "Изучите ключевые инструменты и правила дизайна чат-ботов на интерактивных примерах.",
                
                "c1-title": "⌨️ 1. Горячие клавиши (Shortcuts)",
                "c1-f": "Фрейм", "c1-t": "Текст", "c1-r": "Фигуры",
                "c1-desc": "Ускорьте работу в 3 раза! Нажмите <strong>F</strong> для фрейма, <strong>T</strong> для текста, <strong>R/O</strong> для прямоугольника или круга (кнопки и аватары).",
                
                "c2-title": "🪄 2. Магия Auto Layout",
                "c2-btn": "✨ Применить Shift + A",
                "c2-desc": "Выделите элементы и нажмите <strong>Shift + A</strong>. Они обернутся в магический контейнер, который сам меняет размер и держит отступы.",
                
                "c3-title": "💎 3. Переиспользуемые Компоненты",
                "c3-bub": "Пузырь чата", "c3-btn": "Изменить цвет мастера", "c3-inst1": "Копия 1", "c3-inst2": "Копия 2",
                "c3-desc": "Создайте Мастер-компонент. Если позже вы измените его цвет, <strong>все его копии (Instances) обновятся мгновенно на всех экранах!</strong>",
                
                "c4-title": "💬 4. UI ИИ-чата и Загрузка",
                "c4-user": "Сделай саммари PDF.",
                "c4-desc": "Сообщения юзера <strong>справа (темные)</strong>, ответы ИИ <strong>слева (светлые + аватар)</strong>. Используйте 3 мигающие точки (Thinking...), чтобы показать процесс.",
                
                "c5-title": "⚡ 5. 3-Экранный базовый флоу",
                "c5-chip": "⚡ Нажми для саммари!", "c5-reset": "🔄 Заново",
                "c5-desc": "Во вкладке Prototype настройте переход от чипа <strong>'On click'</strong> к Загрузке, и <strong>'After delay (800ms)'</strong> к Финальному ответу.",
                
                "c6-title": "🔗 6. Поделиться ссылкой (Sharing)",
                "c6-btn-share": "Share (Поделиться)", "c6-perm-txt": "★ Важное разрешение:",
                "c6-opt1": "Только по приглашению", "c6-opt2": "Любой со ссылкой (Anyone)",
                "c6-btn-copy": "🔗 Копировать ссылку",
                "c6-desc": "При сдаче домашки нажмите Share, обязательно выберите <strong>'Anyone with the link can view'</strong>, скопируйте ссылку и вставьте в MS Teams.",

                "act-title": "25 Минут: Практическая сессия", "act-h3": "Давайте создадим ваш первый прототип прямо сейчас.",
                "act-chk": "🎯 Чек-лист практики",
                "act-l1": "Создайте новый файл и 1 <strong>Фрейм (iPhone 15)</strong>.",
                "act-l2": "Сделайте чипы и пузыри с помощью <strong>Auto Layout (Shift+A)</strong>.",
                "act-l3": "Размножьте фрейм на <strong>3 экрана (Empty > Loading > Output)</strong>.",
                "act-l4": "Соедините экраны стрелками 'On click' и 'After delay' в <strong>Prototype</strong>.",
                "act-help": "🙋 Поднимите руку, если застряли!",
                "act-btn": "🚀 Подтвердить завершение Недели 9",
                
                "js_key_f": "📱 Фрейм iPhone создан на холсте! (F)",
                "js_key_t": "📝 Инструмент текст выбран! (T)",
                "js_key_r": "🟦 Инструмент фигуры активирован! (R/O)",
                "js_al_long": "Блок автоматически увеличивается, когда текст длинный!",
                "js_al_btn2": "🔄 Сделать текст длиннее",
                "js_al_btn1": "✨ Применить Shift + A",
                "js_copied": "Ссылка скопирована! Пожалуйста, отправьте ее в MS Teams.",
                "js_done": "Отличная работа по созданию 3-этапного ИИ-флоу без кода!"
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        // Demo Interactions
        
        // 1. Shortcuts
        function triggerKey(keyType) {
            document.querySelectorAll('.key-box').forEach(b => b.classList.remove('active'));
            document.getElementById('key-' + keyType.toLowerCase()).classList.add('active');
            
            const res = document.getElementById('key-result');
            if(keyType === 'F') res.innerText = translations[currentLang]['js_key_f'];
            if(keyType === 'T') res.innerText = translations[currentLang]['js_key_t'];
            if(keyType === 'R') res.innerText = translations[currentLang]['js_key_r'];
        }

        // 2. Auto Layout
        let alState = 0;
        function toggleAutoLayout() {
            const container = document.getElementById('al-demo');
            const txt = document.getElementById('al-text');
            const btn = document.getElementById('al-btn');

            if(alState === 0) {
                container.classList.add('applied');
                btn.innerText = translations[currentLang]['js_al_btn2'];
                alState = 1;
            } else if (alState === 1) {
                txt.innerText = translations[currentLang]['js_al_long'];
                btn.style.display = 'none';
            }
        }

        // 3. Components
        let compColor = false;
        function changeComponentColor() {
            compColor = !compColor;
            const color = compColor ? '#8b5cf6' : '#2563eb'; // purple or blue
            
            document.getElementById('master-bub').style.background = color;
            document.querySelectorAll('.instance-bub').forEach(el => el.style.background = color);
        }

        // 5. Prototype Flow
        let protoTimer;
        function startPrototype() {
            const s1 = document.getElementById('p-scr1');
            const s2 = document.getElementById('p-scr2');
            const s3 = document.getElementById('p-scr3');

            s1.classList.remove('active');
            s2.classList.add('active'); // Loading Screen

            if(protoTimer) clearTimeout(protoTimer);
            
            protoTimer = setTimeout(() => {
                s2.classList.remove('active');
                s3.classList.add('active'); // Output Screen
            }, 1200); // simulated 800ms
        }

        function resetPrototype() {
            if(protoTimer) clearTimeout(protoTimer);
            document.getElementById('p-scr1').classList.add('active');
            document.getElementById('p-scr2').classList.remove('active');
            document.getElementById('p-scr3').classList.remove('active');
        }

        // 6. Share Permission
        function openShareModal() {
            document.getElementById('share-modal').classList.add('show');
            checkPermission();
        }
        function closeShareModal() {
            document.getElementById('share-modal').classList.remove('show');
        }
        function checkPermission() {
            const select = document.getElementById('perm-select');
            const btn = document.getElementById('copy-link-btn');
            
            if(select.value === 'anyone') {
                select.classList.add('correct');
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
                btn.style.background = 'var(--main-blue)';
            } else {
                select.classList.remove('correct');
                btn.style.opacity = '0.5';
                btn.style.pointerEvents = 'none';
                btn.style.background = '#475569';
            }
        }

        // Card entry animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.08 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // Initialize
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, triggerKey, toggleAutoLayout, changeComponentColor, startPrototype, resetPrototype, openShareModal, closeShareModal, checkPermission});
})();
}

if (document.body.dataset.page === 'week10') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "Week 10: Ethics & Control",
                
                "intro-title": "Week 10: 윤리적 AI UX와 인간의 통제권",
                "intro-l1-b": "목표:", "intro-l1-t": "AI의 편향을 이해하고, 사용자가 AI를 안전하게 통제(HITL)하는 화면 설계하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "AI는 제안만 할 뿐, <strong>최종 결정은 사람이</strong> 내려야 합니다.",
                
                "bias-title": "알고리즘의 편견 (Algorithmic Bias)", "bias-sub": "AI는 백지상태가 아닙니다. 과거 데이터를 학습하며 인간의 성별, 인종적 편견을 그대로 답습합니다.",
                "bias-ex-t": "🚨 Case Study: 아마존 AI 채용 실패 사례",
                "bias-ex-p": "과거 남성 중심의 이력서 데이터를 학습한 AI가 <strong>'여성(Women\'s)'</strong>이란 단어가 들어간 서류에 무조건 낮은 점수를 주는 치명적 성차별 오류를 일으켜 프로젝트가 폐기되었습니다. AI에게 통제권을 100% 넘기면 끔찍한 차별이 발생합니다.",

                "hitl-title": "인간 참여형 설계 (Human-in-the-Loop, HITL)", "hitl-sub": "위험한 행동(파일 삭제, 이메일 전송, 송금)은 AI가 자동으로 해버리게 두지 마세요.",
                "hitl-eq1": "🤖 AI 제안", "hitl-eq2": "👤 인간 검토 및 결정", "hitl-eq3": "✅ 시스템 실행",

                "ctrl-title": "사용자 통제 버튼 (User Override Controls)", "ctrl-sub": "사용자가 언제든 AI의 실수를 멈추고 되돌릴 수 있는 3가지 필수 버튼입니다.",
                "ctrl-mock-u": "내일 부산 가는 KTX 예매해 줘.",
                "ctrl-icon-edit": "✏️",
                "ctrl-mock-a": "네, 내일 제주도행 비행기를 알아보고 결제를 진행합니...",
                "ctrl-btn-stop": "생성 중단 (Stop Generating)",
                "ctrl-link-report": "🚩 오류 신고 / 이의 제기 (Contestability)",
                
                "ctrl-l1-b": "생성 중단 (Cancel):", "ctrl-l1-t": "AI가 엉뚱한 답변을 할 때 즉시 멈추는 버튼",
                "ctrl-l2-b": "직접 수정 (Edit):", "ctrl-l2-t": "내가 썼던 질문을 연필 아이콘을 눌러 다시 고치는 기능",
                "ctrl-l3-b": "이의 제기권 (Contestability):", "ctrl-l3-t": "AI의 자동 판단(비자 심사, 대출 등)에 반박하고 <strong>인간 상담원에게 재검토를 요청</strong>할 권리",

                "dark-title": "다크 패턴 (Dark Patterns) 피하기", "dark-sub": "사용자를 속여 신뢰를 파괴하는 사악한 인터페이스를 절대 만들지 마세요.",
                "dark-b1-t": "1. 가짜 감정 연기 (Fake Sentience)", "dark-b1-p": "AI가 인간처럼 감정이 있는 척하며 <em>'안 사시면 저 너무 슬퍼요'</em>라며 죄책감을 유발하는 가스라이팅.",
                "dark-b2-t": "2. 강제 데이터 수집 (Forced Traps)", "dark-b2-p": "사적인 대화를 AI 훈련용으로 쓰도록 <strong>기본 동의 체크박스</strong>를 눈에 띄지 않게 숨겨두는 행위.",

                "act-title": "20분 워크샵 (Figma 안전장치 추가)", "act-h3": "내 프로토타입에 인간 통제 버튼 심기",
                "act-l1": "지난 9주차(실제 7주차)에 만든 <strong>피그마 파일 열기</strong>",
                "act-l2": "로딩 화면에 <strong>'생성 중지(Stop) 🛑'</strong> 버튼 넣기",
                "act-l3": "사용자 말풍선 옆에 <strong>'수정(Edit) ✏️'</strong> 아이콘 추가하기",
                "act-l4": "AI 답변 하단에 <strong>'오류 신고(Report) 🚩'</strong> 링크 달기",
                "act-btn": "🔔 이번 주 제출 안내 확인",
                
                // Dynamic JS Strings
                "js_edit": "연필 아이콘을 누르면 질문을 즉시 수정할 수 있습니다. (Edit Prompt)",
                "js_stop": "AI가 엉뚱한 결제를 진행하려 할 때, 즉시 생성 중단을 누르면 멈춥니다! (Stop Generating)",
                "js_report": "AI의 판단에 반박하고 인간 상담원에게 재검토를 요청할 수 있는 권리입니다. (Contestability)",
                "js_checklist": "버튼 3개가 안전하게 추가된 새로운 [피그마 공유 링크]를 MS Teams 10주차 과제란에 일요일 밤까지 제출해주세요!"
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "Week 10: Ethics & Control",
                
                "intro-title": "Week 10: Ethical AI UX & Human Control",
                "intro-l1-b": "Goal:", "intro-l1-t": "Understand algorithmic bias and design Human-in-the-Loop (HITL) safety controls.",
                "intro-l2-b": "Core:", "intro-l2-t": "AI only proposes; <strong>the final decision must be made by a human.</strong>",
                
                "bias-title": "Algorithmic Bias", "bias-sub": "AI is not a blank slate. It inherits historical human prejudices (gender, race) from its training data.",
                "bias-ex-t": "🚨 Case Study: Amazon's AI Hiring Tool",
                "bias-ex-p": "Trained on male-dominated tech resumes, the AI automatically downgraded resumes containing the word <strong>'Women\'s'</strong>. Giving 100% control to AI causes terrible discrimination.",

                "hitl-title": "Human-in-the-Loop (HITL) Principle", "hitl-sub": "Never let AI perform destructive actions automatically (Deleting files, Transferring money).",
                "hitl-eq1": "🤖 AI Proposes", "hitl-eq2": "👤 Human Reviews & Decides", "hitl-eq3": "✅ System Executes",

                "ctrl-title": "User Override Controls", "ctrl-sub": "3 essential UI buttons to let users stop and fix AI mistakes at any time.",
                "ctrl-mock-u": "Book a KTX train to Busan for tomorrow.",
                "ctrl-icon-edit": "✏️",
                "ctrl-mock-a": "Okay, searching and paying for a flight to Jeju...",
                "ctrl-btn-stop": "Stop Generating",
                "ctrl-link-report": "🚩 Report Error / Dispute (Contestability)",
                
                "ctrl-l1-b": "Stop Generating (Cancel):", "ctrl-l1-t": "Immediate button to halt AI processing if output goes off-track.",
                "ctrl-l2-b": "Direct Edit (In-line):", "ctrl-l2-t": "Pencil icon allowing the user to fix their own prompt easily.",
                "ctrl-l3-b": "Contestability (Right to Appeal):", "ctrl-l3-t": "The right to challenge an automated AI decision and <strong>request human review</strong>.",

                "dark-title": "Avoid Dark Patterns", "dark-sub": "Never use deceptive UI that manipulates users or destroys trust.",
                "dark-b1-t": "1. Fake Sentience", "dark-b1-p": "Making the bot pretend it has real human feelings to gaslight users (<em>'I feel so sad if you don\'t buy'</em>).",
                "dark-b2-t": "2. Forced Data Traps", "dark-b2-p": "Pre-checking hidden boxes to steal user chat history for commercial AI training.",

                "act-title": "20-Min Workshop (Figma Controls)", "act-h3": "Add Human Controls to Your Prototype",
                "act-l1": "Open your Figma prototype from Week 9 (Actual Week 7).",
                "act-l2": "Add a <strong>'Stop Generating 🛑'</strong> button to your Loading screen.",
                "act-l3": "Add an <strong>'Edit Prompt ✏️'</strong> icon next to the user chat bubble.",
                "act-l4": "Add a <strong>'Report Error 🚩'</strong> link below the AI response card.",
                "act-btn": "🔔 Check Submission Guide",
                
                // Dynamic JS Strings
                "js_edit": "Click the pencil icon to modify the prompt in-line. (Edit Prompt)",
                "js_stop": "When AI tries to make a wrong payment, clicking stop halts the process immediately! (Stop Generating)",
                "js_report": "The right to appeal an AI's decision and request a human agent's review. (Contestability)",
                "js_checklist": "Submit your updated [Figma View Link] with the 3 safety buttons to the MS Teams Week 10 Assignment tab by Sunday!"
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "Неделя 10: Этика",
                
                "intro-title": "Неделя 10: Этичный UX ИИ и Контроль Человека",
                "intro-l1-b": "Цель:", "intro-l1-t": "Понять предвзятость алгоритмов и спроектировать элементы безопасности (HITL).",
                "intro-l2-b": "Главное:", "intro-l2-t": "ИИ только предлагает; <strong>окончательное решение принимает человек.</strong>",
                
                "bias-title": "Предвзятость алгоритмов", "bias-sub": "ИИ - не чистый лист. Он наследует предрассудки (гендерные, расовые) из данных обучения.",
                "bias-ex-t": "🚨 Кейс: Инструмент найма Amazon",
                "bias-ex-p": "Обученный на 'мужских' резюме, ИИ автоматически занижал оценки резюме со словом <strong>'Женский'</strong>. 100% контроль ИИ ведет к ужасной дискриминации.",

                "hitl-title": "Принцип 'Человек в цикле' (HITL)", "hitl-sub": "Никогда не позволяйте ИИ выполнять разрушительные действия автоматически (Удаление, Перевод денег).",
                "hitl-eq1": "🤖 ИИ Предлагает", "hitl-eq2": "👤 Человек Проверяет", "hitl-eq3": "✅ Система Выполняет",

                "ctrl-title": "Кнопки пользовательского контроля", "ctrl-sub": "3 важных UI элемента, чтобы остановить и исправить ошибки ИИ в любой момент.",
                "ctrl-mock-u": "Забронируй билет на поезд в Пусан на завтра.",
                "ctrl-icon-edit": "✏️",
                "ctrl-mock-a": "Хорошо, ищу и оплачиваю рейс на Чеджу...",
                "ctrl-btn-stop": "Остановить генерацию",
                "ctrl-link-report": "🚩 Сообщить об ошибке / Оспорить",
                
                "ctrl-l1-b": "Остановить (Cancel):", "ctrl-l1-t": "Кнопка для немедленной остановки ИИ, если ответ пошел не туда.",
                "ctrl-l2-b": "Редактировать (Edit):", "ctrl-l2-t": "Иконка карандаша, позволяющая легко исправить свой запрос.",
                "ctrl-l3-b": "Право оспорить (Contestability):", "ctrl-l3-t": "Право оспорить автоматическое решение ИИ и <strong>запросить проверку человеком</strong>.",

                "dark-title": "Избегайте 'Темных паттернов'", "dark-sub": "Не используйте обманный UI, манипулирующий пользователем.",
                "dark-b1-t": "1. Фальшивые чувства", "dark-b1-p": "ИИ притворяется, что у него есть эмоции, вызывая чувство вины (<em>'Мне так грустно, что ты не купил'</em>).",
                "dark-b2-t": "2. Скрытый сбор данных", "dark-b2-p": "Заранее проставленные галочки для кражи истории чатов для коммерческого обучения ИИ.",

                "act-title": "20-минутный воркшоп (Figma)", "act-h3": "Добавьте кнопки контроля в прототип",
                "act-l1": "Откройте ваш Figma-прототип с Недели 9 (7).",
                "act-l2": "Добавьте кнопку <strong>'Остановить 🛑'</strong> на экран загрузки.",
                "act-l3": "Добавьте иконку <strong>'Редактировать ✏️'</strong> рядом с вашим запросом.",
                "act-l4": "Добавьте ссылку <strong>'Сообщить об ошибке 🚩'</strong> под ответом ИИ.",
                "act-btn": "🔔 Правила сдачи",
                
                // Dynamic JS Strings
                "js_edit": "Нажмите на карандаш, чтобы быстро изменить свой запрос. (Edit Prompt)",
                "js_stop": "Когда ИИ пытается провести неверный платеж, кнопка мгновенно останавливает процесс! (Stop Generating)",
                "js_report": "Право оспорить решение ИИ и запросить проверку человеком-оператором. (Contestability)",
                "js_checklist": "Сдайте обновленную ссылку [Figma View Link] с 3 кнопками безопасности в раздел Assignments 10 недели до воскресенья!"
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        function triggerAlert(msgKey) {
            alert(translations[currentLang][msgKey]);
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, triggerAlert});
})();
}

if (document.body.dataset.page === 'week11') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "Week 11: Privacy",
                
                "intro-title": "Week 11: 개인 맞춤화와 개인정보 보호 (Privacy UX)",
                "intro-l1-b": "목표:", "intro-l1-t": "사용자 데이터를 안전하게 다루는 투명한 프라이버시 UI 설계하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "설명 없는 개인 맞춤화는 '친절함'이 아니라 <strong>'소름 돋는 감시(Creepy Surveillance)'</strong>로 느껴집니다.",
                
                "creepy-title": "친절한 비서인가, 무서운 감시자인가?", "creepy-sub": "AI가 똑똑하게 나를 챙겨준다고 느끼게 하려면 '투명성(Transparency)'이 필수입니다.",
                "creepy-good-t": "✅ 친절한 개인화 (Helpful)", "creepy-good-p": "'어제 [한국어 단어 A]를 검색하셔서 관련된 [퀴즈 B]를 추천해 드려요.'<br>👉 내가 과거에 했던 행동과 연결하여 이유를 분명히 설명함.",
                "creepy-bad-t": "❌ 소름 돋는 감시 (Creepy)", "creepy-bad-p": "카페에서 친구와 '신발' 이야기를 한 직후, 스마트폰에 갑자기 신발 광고가 뜸.<br>👉 데이터 수집 출처를 몰라 스마트폰이 도청한다고 느낌.",

                "just-title": "'이게 왜 뜨나요?' & 적시 요청 (Just-in-Time)", "just-sub": "권한이나 추천 이유는 사용자가 필요한 딱 그 순간에(Contextual) 물어봐야 합니다.",
                "why-title": "1. 추천 이유 설명 팝업", "why-ex": "외국인 유학생을 위한 장학금 정보", "why-desc": "(i) 아이콘을 눌러 추천 알고리즘의 투명한 이유를 밝히세요.",
                "perm-title": "2. 권한의 '적시 요청' (Just-in-Time)", "perm-h": "카메라 접근 허용", "perm-p": "'AI가 비자 서류를 번역하기 위해 카메라 렌즈 접근 권한이 필요합니다.'",
                "perm-no": "허용 안함", "perm-yes": "허용",

                "ctrl-title": "프라이버시 및 데이터 제어판 (Control Center)", "ctrl-sub": "사용자가 자신의 데이터를 쉽게 통제하고 삭제할 수 있는 스위치를 직접 눌러보세요.",
                "ctrl-t1": "👻 시크릿 모드 (Private Session)", "ctrl-p1": "대화 내용이 AI 모델 학습(알고리즘)에 저장되지 않습니다.",
                "ctrl-t2": "🔄 추천 알고리즘 초기화 (Reset Taste Profile)", "ctrl-p2": "과거 검색 데이터를 초기화하여 새롭게 추천을 받습니다.", "ctrl-btn-reset": "초기화",
                "ctrl-t3": "🗑️ 전체 대화 기록 삭제 (Clear History)", "ctrl-p3": "서버에 저장된 모든 채팅 기록을 영구적으로 삭제합니다.", "ctrl-btn-del": "삭제하기",

                "rule-title": "프라이버시 UX 3대 원칙 (3 Privacy Pillars)",
                "rule-l1-b": "최소 수집 (Minimize Data):", "rule-l1-t": "작업에 꼭 필요한 최소한의 데이터만 받으세요.",
                "rule-l2-b": "목적 설명 (Explain Purpose):", "rule-l2-t": "왜 권한이 필요한지 사용자 언어로 분명하게 알려주세요.",
                "rule-l3-b": "사용자 제어 (Give User Control):", "rule-l3-t": "언제든 데이터를 끄고(Toggle) 지울 수(Delete) 있어야 합니다.",

                "act-title": "20분 워크샵 (Figma 프라이버시 설정 추가)", "act-h3": "내 앱에 데이터 통제권(UI) 설계하기",
                "act-l1": "Figma에서 AI 답변 카드 옆에 <strong>'이게 왜 뜨나요? ( ℹ️ )'</strong> 아이콘과 팝업 추가",
                "act-l2": "앱 설정(Settings) 화면을 새로 추가하기",
                "act-l3": "설정 화면에 <strong>'AI 학습 허용(On/Off)' 토글 스위치</strong> 달기",
                "act-l4": "설정 화면에 <strong>'대화 기록 삭제(🗑️)'</strong> 버튼 배치하기",
                "act-btn": "🔔 이번 주 제출 안내 확인",
                
                // Dynamic JS Strings
                "js_info": `💡 이 정보가 추천된 이유:

'회원님이 지난 주에 [유학생 관련 법률] 문서를 요약했기 때문에 이 정보가 추천되었습니다.' (투명한 근거 제시)`,
                "js_deny": "권한이 거부되었습니다. 서류 번역 기능이 작동하지 않습니다.",
                "js_allow": "권한이 허용되었습니다! 번역이 시작됩니다.",
                "js_toggle_on": "시크릿 모드 켜짐 (학습 안 함)", "js_toggle_off": "시크릿 모드 꺼짐 (학습 허용)",
                "js_reset": "과거 취향 데이터가 리셋되었습니다! 추천 피드가 초기화됩니다.",
                "js_delete": "모든 채팅 기록이 삭제되었습니다.",
                "js_checklist": "설정창과 프라이버시 제어 버튼이 추가된 새로운 [피그마 공유 링크]를 MS Teams 11주차 과제란에 일요일 밤까지 제출해주세요!"
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "Week 11: Privacy",
                
                "intro-title": "Week 11: Personalization & Privacy UX",
                "intro-l1-b": "Goal:", "intro-l1-t": "Design transparent privacy UI that safely handles user data.",
                "intro-l2-b": "Core:", "intro-l2-t": "Personalization without explanation feels like <strong>Creepy Surveillance.</strong>",
                
                "creepy-title": "Helpful Assistant or Creepy Surveillance?", "creepy-sub": "To make users feel safe, 'Transparency' is absolutely necessary.",
                "creepy-good-t": "✅ Helpful Personalization", "creepy-good-p": "'Because you searched for [Word A] yesterday, here is related [Quiz B].'<br>👉 Explains the reason by connecting to past actions.",
                "creepy-bad-t": "❌ Creepy Surveillance", "creepy-bad-p": "You talk about 'shoes' in a cafe, and instantly get shoe ads on your phone.<br>👉 Feels like the phone is listening because the source is hidden.",

                "just-title": "'Why am I seeing this?' & Just-in-Time", "just-sub": "Ask for permissions contextually at the exact moment they are needed.",
                "why-title": "1. Explanation Modal", "why-ex": "Scholarship info for Int'l Students", "why-desc": "Click (i) to reveal the transparent algorithm logic.",
                "perm-title": "2. Just-in-Time Permission", "perm-h": "Allow Camera Access", "perm-p": "'AI needs camera access to translate your visa paperwork.'",
                "perm-no": "Deny", "perm-yes": "Allow",

                "ctrl-title": "Privacy & Data Control Center", "ctrl-sub": "Click the switches below to let users easily manage and delete their data.",
                "ctrl-t1": "👻 Private Session (Incognito)", "ctrl-p1": "Chats are not saved to train the AI model.",
                "ctrl-t2": "🔄 Reset Taste Profile", "ctrl-p2": "Wipe past algorithm preferences and start fresh.", "ctrl-btn-reset": "Reset",
                "ctrl-t3": "🗑️ Clear Chat History", "ctrl-p3": "Permanently delete all chat logs saved on the server.", "ctrl-btn-del": "Delete",

                "rule-title": "The 3 Privacy-Friendly UX Pillars",
                "rule-l1-b": "Minimize Data:", "rule-l1-t": "Only collect what is strictly necessary for the task.",
                "rule-l2-b": "Explain Purpose:", "rule-l2-t": "Never ask for data without stating the reason.",
                "rule-l3-b": "Give User Control:", "rule-l3-t": "Provide easy toggles to turn off tracking or delete data.",

                "act-title": "20-Min Workshop (Figma Privacy)", "act-h3": "Add Data Controls to Your App",
                "act-l1": "Add an <strong>'Info ( ℹ️ )'</strong> icon next to an AI recommendation and design an explanation popup.",
                "act-l2": "Create a new <strong>'Settings'</strong> screen for your app.",
                "act-l3": "Add an <strong>'Allow data for AI training (On/Off)'</strong> toggle switch.",
                "act-l4": "Add a <strong>'Clear Chat History (🗑️)'</strong> button to the settings.",
                "act-btn": "🔔 Check Submission Guide",
                
                // Dynamic JS Strings
                "js_info": `💡 Why am I seeing this?

'This was recommended because you summarized a document on [Int\'l Student Laws] last week.' (Transparent attribution)`,
                "js_deny": "Permission denied. The document translation feature will not work.",
                "js_allow": "Permission allowed! Translation starting.",
                "js_toggle_on": "Private Session ON (No training)", "js_toggle_off": "Private Session OFF",
                "js_reset": "Your past taste data has been reset! Recommendations will start fresh.",
                "js_delete": "All chat history has been permanently deleted.",
                "js_checklist": "Submit your updated [Figma View Link] including the new Privacy Settings screen to the MS Teams Week 11 Assignment tab by Sunday!"
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "Неделя 11: Приватность",
                
                "intro-title": "Неделя 11: Персонализация и Приватность (Privacy UX)",
                "intro-l1-b": "Цель:", "intro-l1-t": "Спроектировать прозрачный UI для безопасного управления данными пользователей.",
                "intro-l2-b": "Главное:", "intro-l2-t": "Персонализация без объяснений кажется <strong>жуткой слежкой (Creepy Surveillance).</strong>",
                
                "creepy-title": "Полезный помощник или Жуткая слежка?", "creepy-sub": "Чтобы пользователи чувствовали себя безопасно, необходима 'Прозрачность'.",
                "creepy-good-t": "✅ Полезная персонализация", "creepy-good-p": "'Так как вчера вы искали [Слово А], вот связанный [Квиз Б].'<br>👉 Объясняет причину через прошлые действия.",
                "creepy-bad-t": "❌ Жуткая слежка", "creepy-bad-p": "Вы поговорили о 'обуви' в кафе, и сразу получаете рекламу обуви в телефоне.<br>👉 Кажется, что телефон прослушивает (источник скрыт).",

                "just-title": "'Почему я это вижу?' и Своевременный запрос (Just-in-Time)", "just-sub": "Запрашивайте разрешения именно в тот момент, когда они нужны.",
                "why-title": "1. Окно объяснений", "why-ex": "Информация о стипендиях", "why-desc": "Нажмите иконку (i), чтобы увидеть логику алгоритма.",
                "perm-title": "2. Своевременный запрос", "perm-h": "Доступ к камере", "perm-p": "'ИИ нужен доступ к камере, чтобы перевести ваши визовые документы.'",
                "perm-no": "Запретить", "perm-yes": "Разрешить",

                "ctrl-title": "Панель управления данными (Control Center)", "ctrl-sub": "Пощелкайте переключатели ниже, чтобы управлять данными.",
                "ctrl-t1": "👻 Приватный режим (Инкогнито)", "ctrl-p1": "Чаты не сохраняются для обучения ИИ-модели.",
                "ctrl-t2": "🔄 Сброс предпочтений алгоритма", "ctrl-p2": "Очистить прошлые вкусы алгоритма и начать с чистого листа.", "ctrl-btn-reset": "Сброс",
                "ctrl-t3": "🗑️ Очистить историю чатов", "ctrl-p3": "Навсегда удалить все чаты, сохраненные на сервере.", "ctrl-btn-del": "Удалить",

                "rule-title": "3 столпа Privacy-Friendly UX",
                "rule-l1-b": "Минимизируйте данные:", "rule-l1-t": "Собирайте только то, что строго необходимо.",
                "rule-l2-b": "Объясняйте цель:", "rule-l2-t": "Никогда не запрашивайте данные без объяснения причин.",
                "rule-l3-b": "Дайте контроль:", "rule-l3-t": "Позвольте легко отключать отслеживание или удалять данные.",

                "act-title": "20-мин. воркшоп (Figma Приватность)", "act-h3": "Добавьте контроль данных в приложение",
                "act-l1": "Добавьте иконку <strong>'Информация ( ℹ️ )'</strong> рядом с рекомендацией и создайте всплывающее окно с объяснением.",
                "act-l2": "Создайте новый экран <strong>'Настройки (Settings)'</strong>.",
                "act-l3": "Добавьте тумблер <strong>'Разрешить данные для обучения ИИ (Вкл/Выкл)'</strong>.",
                "act-l4": "Добавьте кнопку <strong>'Удалить историю чатов (🗑️)'</strong>.",
                "act-btn": "🔔 Правила сдачи",
                
                // Dynamic JS Strings
                "js_info": `💡 Почему я это вижу?

'Это было рекомендовано, потому что на прошлой неделе вы резюмировали документ [Законы для иностр. студентов].' (Прозрачность)`,
                "js_deny": "Доступ запрещен. Функция перевода документов не будет работать.",
                "js_allow": "Доступ разрешен! Начинаем перевод.",
                "js_toggle_on": "Приватный режим ВКЛ (Без обучения)", "js_toggle_off": "Приватный режим ВЫКЛ",
                "js_reset": "Ваши прошлые данные о предпочтениях сброшены! Рекомендации начнутся заново.",
                "js_delete": "Вся история чатов была навсегда удалена.",
                "js_checklist": "Сдайте обновленную ссылку [Figma View Link] с экраном настроек приватности в раздел Assignments 11 недели до воскресенья!"
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        function triggerAlert(msgKey) {
            alert(translations[currentLang][msgKey]);
        }

        function toggleSwitch(element) {
            const state = element.getAttribute('data-state');
            if(state === 'off') {
                element.classList.add('on');
                element.setAttribute('data-state', 'on');
                // Optional: show a quick ephemeral message
                // console.log(translations[currentLang]['js_toggle_on']);
            } else {
                element.classList.remove('on');
                element.setAttribute('data-state', 'off');
            }
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, triggerAlert, toggleSwitch});
})();
}

if (document.body.dataset.page === 'week12') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "W11", "nav-w12": "Week 12: Blueprint",
                
                "intro-title": "Week 12: AI 서비스 블루프린트 (Service Blueprint)",
                "intro-l1-b": "목표:", "intro-l1-t": "사용자 화면(Frontstage)과 보이지 않는 AI 시스템(Backstage)을 하나의 지도로 연결하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "어디서 사고(Failure)가 터질지 미리 찾아내고 <strong>폴백(Fallback) 안전망</strong>을 설계하세요!",
                
                "lov-title": "가시성의 선 (Line of Visibility)", "lov-sub": "사용자가 보는 무대 앞(UI)과 보이지 않는 무대 뒤(AI)는 1:1로 짝을 맞춰 움직여야 합니다.",
                "lov-f-tag": "Frontstage (위)", "lov-f-t": "무대 앞 (사용자 경험)", "lov-f-p": "사용자의 눈에 보이고, 만질 수 있는 화면입니다. (스마트폰 앱 UI, 버튼 클릭, 로딩 스피너, 음성 안내)",
                "lov-line-t": "--- Line of Visibility (가시성의 선) ---",
                "lov-b-tag": "Backstage (아래)", "lov-b-t": "무대 뒤 (AI 시스템 및 데이터)", "lov-b-p": "사용자 눈에 보이지 않는 거대한 톱니바퀴입니다. (LLM 연산, Vision OCR, 클라우드 DB, 외부 서버 API)",

                "bp-title": "AI 서비스 블루프린트 5단 템플릿", "bp-sub": "각 상자(박스)를 클릭하면 자세한 설명을 볼 수 있습니다. (예시: 비자 서류 번역 앱)",
                "bp-th1": "계층 (Layers)", "bp-th2": "Step 1: 입력 (Input)", "bp-th3": "Step 2: 처리 (Processing)", "bp-th4": "Step 3: 출력 (Output)",
                
                "bp-r1-sub": "사용자 행동", "bp-r1-c1": "앱 켜고 서류 사진 업로드", "bp-r1-c2": "로딩 화면 보며 대기", "bp-r1-c3": "결과 확인 및 '복사' 클릭",
                "bp-r2-sub": "눈에 보이는 화면", "bp-r2-c1": "카메라 UI & 업로드 버튼", "bp-r2-c2": "스켈레톤 로딩 (읽는 중...)", "bp-r2-c3": "번역 완료 카드 & 출처 링크",
                "bp-r3-sub": "AI 모델 연산", "bp-r3-c1": "이미지 화질 개선 (전처리)", "bp-r3-c2": "Vision OCR 텍스트 추출<br>+ LLM 영어 번역", "bp-r3-c3": "신뢰도 점수(Confidence) 계산",
                "bp-r4-sub": "외부 연동 및 서버", "bp-r4-c1": "AWS S3 사진 임시 저장", "bp-r4-c2": "DeepL Translation API", "bp-r4-c3": "사용자 프로필 DB (기록 저장)",
                "bp-r5-sub": "에러 대처망", 
                "bp-r5-c1": "⚠️ 업로드 지연 (Wi-Fi 약함)", "bp-r5-c1-sol": "👉 '다시 업로드' 팝업 제공",
                "bp-r5-c2": "⚠️ 흐린 사진 (인식률 60% 이하)", "bp-r5-c2-sol": "👉 '조명 켜고 다시 찍기' 유도",
                "bp-r5-c3": "⚠️ 할루시네이션(거짓말) 방지", "bp-r5-c3-sol": "👉 '사람 전문가에게 질문하기' 버튼",

                "act-title": "25분 워크샵 (과제 제출)", "act-h3": "나만의 AI 서비스 블루프린트 그리기",
                "act-l1": "내가 구상한 AI 서비스의 핵심 시나리오 1개 정하기",
                "act-l2": "위 표와 같은 <strong>5개 층(User, UI, AI, Data, Fallback)</strong> 채워 넣기",
                "act-l3": "최소 3개의 시간 흐름 (Input 👉 Processing 👉 Output)으로 나누기",
                "act-l4": "최소 1개 이상의 <strong>실패 위험 지점(⚠️)</strong>과 해결 UI 적기",
                "act-note": "Figma, 구글 스프레드시트, 엑셀, 빈 종이 중 편한 도구를 사용하세요!",
                "act-btn": "🔔 이번 주 제출 안내 확인",
                
                // Dynamic JS Strings
                "js_r1_1": `[Row 1: User Action]
사용자가 물리적으로 하는 첫 번째 행동입니다. 카메라 버튼을 누르고 문서를 찰칵 찍는 순간입니다.`,
                "js_r1_2": `[Row 1: User Action]
사용자가 아무것도 하지 않고 화면을 바라보며 대기하는(Wait) 행동입니다. 이 시간이 지루하면 이탈합니다.`,
                "js_r1_3": `[Row 1: User Action]
답변을 다 읽고 다음 행동(복사)을 취하는 순간입니다.`,
                
                "js_r2_1": `[Row 2: UI Touchpoint]
Frontstage입니다. 화면에는 카메라 뷰파인더와 둥근 [업로드] 버튼이 그려져 있습니다.`,
                "js_r2_2": `[Row 2: UI Touchpoint]
화면이 멈춘 것처럼 보이지 않게 '문서를 분석 중입니다...'라는 텍스트와 로딩 애니메이션을 띄워줍니다.`,
                "js_r2_3": `[Row 2: UI Touchpoint]
잘 정돈된 번역 결과 카드와 출처 표시, 하단에 복사/좋아요 버튼이 나타납니다.`,
                
                "js_r3_1": `[Row 3: AI Processing]
Backstage 시작입니다! 유저가 올린 사진의 노이즈를 AI가 자동으로 제거(전처리)하여 글자를 읽기 좋게 만듭니다.`,
                "js_r3_2": `[Row 3: AI Processing]
컴퓨터 비전(OCR) 모델이 이미지에서 글자를 뽑아내고, 언어 모델(LLM)이 이를 번역하는 가장 무거운 연산 과정입니다.`,
                "js_r3_3": `[Row 3: AI Processing]
'이 번역이 얼마나 정확한가?'에 대한 AI 신뢰도(Confidence Score)를 측정하고 안전성 필터를 통과시킵니다.`,
                
                "js_r4_1": `[Row 4: Data / APIs]
사진을 처리하기 위해 잠깐 서버(예: 아마존 클라우드 AWS)에 안전하게 업로드하는 과정입니다.`,
                "js_r4_2": `[Row 4: Data / APIs]
내부 AI가 부족하면 DeepL이나 구글 번역 같은 외부 회사의 뛰어난 API 엔진을 빌려서 연동합니다.`,
                "js_r4_3": `[Row 4: Data / APIs]
번역된 기록을 사용자 프로필 데이터베이스(DB)에 저장하여 나중에도 볼 수 있게 만듭니다.`,
                
                "js_r5_1": `[Row 5: Fallback ⚠️]
와이파이가 끊겨서 10초 넘게 업로드가 안 되면? 👉 시스템이 죽지 않고 '연결이 불안정합니다. 다시 시도해주세요' 팝업을 띄웁니다.`,
                "js_r5_2": `[Row 5: Fallback ⚠️]
사진이 너무 흐려서 AI가 글자를 50%도 못 읽으면? 👉 엉터리 번역을 내놓지 않고 '사진이 흐립니다. 밝은 곳에서 다시 찍어주세요'라고 가이드를 줍니다.`,
                "js_r5_3": `[Row 5: Fallback ⚠️]
AI가 전문 법률 용어를 완벽하게 번역하지 못했을 때 👉 무작정 믿게 놔두지 않고 하단에 '전문가 검토 필요' 뱃지를 붙여줍니다.`,

                "js_checklist": "작성하신 [블루프린트 표(이미지/PDF/피그마 링크)]를 MS Teams 12주차 과제란에 일요일 밤 11시 59분까지 제출해주세요!"
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "W11", "nav-w12": "Week 12: Blueprint",
                
                "intro-title": "Week 12: AI Service Blueprint",
                "intro-l1-b": "Goal:", "intro-l1-t": "Map Frontstage UI touchpoints with Backstage AI models and data in one chart.",
                "intro-l2-b": "Core:", "intro-l2-t": "Pre-map failure points and design <strong>Fallback safety nets</strong> before launching!",
                
                "lov-title": "The Line of Visibility", "lov-sub": "What users see (Frontstage) and what happens behind the scenes (Backstage) must match 1:1.",
                "lov-f-tag": "Frontstage (Above)", "lov-f-t": "Frontstage (User Experience)", "lov-f-p": "Everything the user sees and touches (UI Screens, Buttons, Spinners, Sounds).",
                "lov-line-t": "--- Line of Visibility ---",
                "lov-b-tag": "Backstage (Below)", "lov-b-t": "Backstage (AI Systems & Data)", "lov-b-p": "Invisible engines running behind the scenes (LLM, Vision OCR, Cloud DBs, External APIs).",

                "bp-title": "The 5-Layer AI Blueprint Template", "bp-sub": "Click each box to see detailed explanations. (Example: Visa Document Translation App)",
                "bp-th1": "Layers", "bp-th2": "Step 1: Input", "bp-th3": "Step 2: Processing", "bp-th4": "Step 3: Output",
                
                "bp-r1-sub": "User Actions", "bp-r1-c1": "Opens app & uploads photo", "bp-r1-c2": "Waits while looking at screen", "bp-r1-c3": "Reads result & clicks 'Copy'",
                "bp-r2-sub": "Visible UI", "bp-r2-c1": "Camera UI & Upload Button", "bp-r2-c2": "Skeleton loading (Reading...)", "bp-r2-c3": "Answer Card & Source Links",
                "bp-r3-sub": "AI Computing", "bp-r3-c1": "Image noise removal (Preprocess)", "bp-r3-c2": "Vision OCR extracts text<br>+ LLM translates to English", "bp-r3-c3": "Calculates Confidence Score",
                "bp-r4-sub": "External Servers", "bp-r4-c1": "AWS S3 temp image storage", "bp-r4-c2": "DeepL Translation API", "bp-r4-c3": "User Profile DB (Saves log)",
                "bp-r5-sub": "Safety Nets", 
                "bp-r5-c1": "⚠️ Network Timeout", "bp-r5-c1-sol": "👉 Show 'Retry Upload' popup",
                "bp-r5-c2": "⚠️ Blurry Photo (<60% Conf)", "bp-r5-c2-sol": "👉 Guide: 'Retake with more light'",
                "bp-r5-c3": "⚠️ Hallucination Risk", "bp-r5-c3-sol": "👉 Add 'Consult Human' button",

                "act-title": "25-Min Workshop", "act-h3": "Draft Your AI Service Blueprint",
                "act-l1": "Choose 1 core scenario for your AI app concept.",
                "act-l2": "Fill in the <strong>5 Layers (User, UI, AI, Data, Fallback)</strong> just like the table above.",
                "act-l3": "Divide it into at least 3 timeline steps (Input 👉 Processing 👉 Output).",
                "act-l4": "Identify at least 1 <strong>Failure Point (⚠️)</strong> and write its UI solution.",
                "act-note": "Use Figma, Google Sheets, Excel, or just Pen & Paper!",
                "act-btn": "🔔 Check Submission Guide",
                
                // Dynamic JS Strings
                "js_r1_1": `[Row 1: User Action]
The first physical action the user takes. Tapping the camera button and snapping a photo of the document.`,
                "js_r1_2": `[Row 1: User Action]
The user does nothing but wait and look at the screen. If this takes too long, they will leave.`,
                "js_r1_3": `[Row 1: User Action]
User reads the final translation and takes the next action, like clicking 'Copy'.`,
                
                "js_r2_1": `[Row 2: UI Touchpoint]
Frontstage. The screen shows a camera viewfinder and a round [Upload] button.`,
                "js_r2_2": `[Row 2: UI Touchpoint]
To prevent the app from looking frozen, display a skeleton loading state with text: 'Analyzing document...'`,
                "js_r2_3": `[Row 2: UI Touchpoint]
A well-structured translation card appears with source tags and Copy/Thumbs Up buttons at the bottom.`,
                
                "js_r3_1": `[Row 3: AI Processing]
Backstage begins! AI automatically removes noise and crops the uploaded image (Preprocessing) to read text better.`,
                "js_r3_2": `[Row 3: AI Processing]
The heaviest computation: Computer Vision (OCR) extracts text from the image, and an LLM translates it.`,
                "js_r3_3": `[Row 3: AI Processing]
The system calculates a Confidence Score ('How accurate is this translation?') and runs safety filters.`,
                
                "js_r4_1": `[Row 4: Data / APIs]
The image is safely uploaded to a temporary cloud server (like AWS S3) for processing.`,
                "js_r4_2": `[Row 4: Data / APIs]
If the internal AI is not enough, the system connects to external APIs like DeepL or Google Translate.`,
                "js_r4_3": `[Row 4: Data / APIs]
The translation history is saved in the User Profile Database so they can view it later.`,
                
                "js_r5_1": `[Row 5: Fallback ⚠️]
What if Wi-Fi is weak and upload takes >10s? 👉 System doesn't crash. It shows a popup: 'Connection unstable. Please retry.'`,
                "js_r5_2": `[Row 5: Fallback ⚠️]
What if the photo is too blurry and AI confidence is <50%? 👉 Instead of giving a bad translation, it guides: 'Photo is blurry. Please retake with more light.'`,
                "js_r5_3": `[Row 5: Fallback ⚠️]
What if the AI cannot perfectly translate complex legal terms? 👉 Do not let users blindly trust it. Add a badge: 'Expert review recommended.'`,

                "js_checklist": "Submit your completed [Blueprint Chart (Image/PDF/Link)] to the MS Teams Week 12 Assignment tab by Sunday 11:59 PM!"
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "W11", "nav-w12": "Неделя 12: Блюпринт",
                
                "intro-title": "Неделя 12: Блюпринт (Карта) ИИ-сервиса",
                "intro-l1-b": "Цель:", "intro-l1-t": "Связать UI экраны (Frontstage) с невидимыми ИИ моделями и данными (Backstage) в одной таблице.",
                "intro-l2-b": "Главное:", "intro-l2-t": "Заранее найдите точки сбоя и спроектируйте <strong>запасные (Fallback) решения</strong>!",
                
                "lov-title": "Линия видимости (Line of Visibility)", "lov-sub": "То, что видит пользователь (Сцена), и то, что происходит за кулисами (Закулисье), должно совпадать 1:1.",
                "lov-f-tag": "Сцена (Сверху)", "lov-f-t": "Сцена (Пользовательский опыт)", "lov-f-p": "Все, что пользователь видит и трогает (Экраны UI, Кнопки, Спиннеры, Звуки).",
                "lov-line-t": "--- Линия видимости ---",
                "lov-b-tag": "Закулисье (Снизу)", "lov-b-t": "Закулисье (ИИ Системы и Данные)", "lov-b-p": "Невидимые двигатели, работающие в фоне (LLM, Vision OCR, Облачные БД, Внешние API).",

                "bp-title": "5-слойный шаблон Блюпринта ИИ", "bp-sub": "Кликните по блокам, чтобы прочитать детальное объяснение. (Пример: Приложение для перевода визовых документов)",
                "bp-th1": "Слои", "bp-th2": "Шаг 1: Ввод (Input)", "bp-th3": "Шаг 2: Обработка (Processing)", "bp-th4": "Шаг 3: Вывод (Output)",
                
                "bp-r1-sub": "Действия польз.", "bp-r1-c1": "Открывает апп и грузит фото", "bp-r1-c2": "Ждет, глядя в экран", "bp-r1-c3": "Читает ответ и жмет 'Копия'",
                "bp-r2-sub": "Видимый UI", "bp-r2-c1": "Интерфейс камеры и Кнопка Загрузки", "bp-r2-c2": "Скелетная загрузка (Чтение...)", "bp-r2-c3": "Карточка ответа и Ссылки",
                "bp-r3-sub": "Вычисления ИИ", "bp-r3-c1": "Удаление шумов на фото (Препроцессинг)", "bp-r3-c2": "Vision OCR извлекает текст<br>+ LLM переводит на англ.", "bp-r3-c3": "Вычисление оценки уверенности (Confidence)",
                "bp-r4-sub": "Внешние серверы", "bp-r4-c1": "Временное хранилище AWS S3", "bp-r4-c2": "DeepL Translation API", "bp-r4-c3": "БД Профилей (Сохраняет лог)",
                "bp-r5-sub": "Защитная сеть", 
                "bp-r5-c1": "⚠️ Тайм-аут сети", "bp-r5-c1-sol": "👉 Показать окно 'Повторить загрузку'",
                "bp-r5-c2": "⚠️ Размытое фото (<60% Conf)", "bp-r5-c2-sol": "👉 Подсказка: 'Переснимите при свете'",
                "bp-r5-c3": "⚠️ Риск галлюцинаций", "bp-r5-c3-sol": "👉 Кнопка 'Спросить человека'",

                "act-title": "25-минутный воркшоп", "act-h3": "Составьте Блюпринт вашего сервиса",
                "act-l1": "Выберите 1 ключевой сценарий вашего ИИ-приложения.",
                "act-l2": "Заполните <strong>5 слоев (User, UI, AI, Data, Fallback)</strong> как в таблице выше.",
                "act-l3": "Разбейте на минимум 3 шага по времени (Ввод 👉 Обработка 👉 Вывод).",
                "act-l4": "Определите хотя бы 1 <strong>Точку сбоя (⚠️)</strong> и напишите UI-решение.",
                "act-note": "Используйте Figma, Google Sheets, Excel или ручку с бумагой!",
                "act-btn": "🔔 Правила сдачи",
                
                // Dynamic JS Strings
                "js_r1_1": `[Слой 1: Действие пользователя]
Первое физическое действие. Нажатие кнопки камеры и снимок документа.`,
                "js_r1_2": `[Слой 1: Действие пользователя]
Пользователь ничего не делает, просто ждет и смотрит на экран. Если это длится долго, он уйдет.`,
                "js_r1_3": `[Слой 1: Действие пользователя]
Пользователь читает перевод и совершает следующее действие, например, нажимает 'Скопировать'.`,
                
                "js_r2_1": `[Слой 2: Видимый UI]
Сцена. На экране видоискатель камеры и круглая кнопка [Загрузить].`,
                "js_r2_2": `[Слой 2: Видимый UI]
Чтобы приложение не казалось зависшим, показывается экран загрузки с текстом: 'Анализ документа...'`,
                "js_r2_3": `[Слой 2: Видимый UI]
Появляется структурированная карточка перевода с тегами источников и кнопками Копировать/Лайк внизу.`,
                
                "js_r3_1": `[Слой 3: Вычисления ИИ]
Начинается закулисье! ИИ автоматически удаляет шумы и обрезает фото (Препроцессинг) для лучшего чтения текста.`,
                "js_r3_2": `[Слой 3: Вычисления ИИ]
Самые тяжелые вычисления: Компьютерное зрение (OCR) извлекает текст, а языковая модель (LLM) его переводит.`,
                "js_r3_3": `[Слой 3: Вычисления ИИ]
Система вычисляет Оценку уверенности ('Насколько точен перевод?') и прогоняет через фильтры безопасности.`,
                
                "js_r4_1": `[Слой 4: Данные / API]
Изображение безопасно загружается на временный облачный сервер (например, AWS S3) для обработки.`,
                "js_r4_2": `[Слой 4: Данные / API]
Если внутреннего ИИ недостаточно, система подключается к внешним API, таким как DeepL или Google Translate.`,
                "js_r4_3": `[Слой 4: Данные / API]
История переводов сохраняется в Базе данных профилей пользователей для последующего просмотра.`,
                
                "js_r5_1": `[Слой 5: Fallback ⚠️]
Что если Wi-Fi слабый и загрузка идет >10 сек? 👉 Система не падает. Всплывает окно: 'Соединение нестабильно. Повторите попытку.'`,
                "js_r5_2": `[Слой 5: Fallback ⚠️]
Что если фото слишком размыто и уверенность ИИ <50%? 👉 Вместо плохого перевода ИИ просит: 'Фото размыто. Переснимите при лучшем освещении.'`,
                "js_r5_3": `[Слой 5: Fallback ⚠️]
Что если ИИ не может идеально перевести сложные юр. термины? 👉 Не позволяйте слепо верить. Добавьте бейдж: 'Рекомендуется проверка экспертом.'`,

                "js_checklist": "Загрузите готовую [Таблицу Блюпринта (Фото/PDF/Ссылка)] в раздел Assignments 12 недели в MS Teams до воскресенья 23:59!"
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        function triggerAlert(msgKey) {
            alert(translations[currentLang][msgKey]);
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, triggerAlert});
})();
}

if (document.body.dataset.page === 'week14') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "W11", "nav-w12": "W12", "nav-w13": "W13", "nav-w14": "Week 14: Final QA",
                
                "intro-title": "Week 14: 최종 프로토타입 스튜디오 & QA",
                "intro-l1-b": "목표:", "intro-l1-t": "Figma 파일의 버그를 수정하고, 다음 주 기말고사용 PDF 포트폴리오를 준비하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "초보 디자이너는 성공 화면만 만들지만, <strong>일류 디자이너는 에러 화면(Edge Cases)까지 완벽하게</strong> 챙깁니다.",
                
                "qa-title": "Figma 화면 흐름도 점검 (Clean Canvas Test)", "qa-sub": "제출 전 우측 상단의 [Prototype] 탭을 눌러 파란 화살표가 제대로 연결되었는지 점검하세요. (아래 뱃지를 클릭해 보세요!)",
                "qa-start": "▶ Flow 1 시작점",
                "qa-t1": "✅ 시작 칩 연결", "qa-t2": "✅ 로딩 애니메이션", "qa-t3": "❌ Stop 버튼 누락!", "qa-t4": "✅ 출처 링크(Citation)", "qa-t5": "✅ Edit & Regenerate",
                "qa-edge-t": "4. Network Timeout", "qa-edge-p": "화살표가 연결되지 않은 고립된 화면 (Orphan Screen) 👉 <strong>평가자가 이 화면을 절대 볼 수 없습니다!</strong>",

                "ui-title": "안전장치 UI 최종 점검 (Checklist)", 
                "ui-h1": "🚨 엣지 케이스 (Edge Cases)",
                "ui-l1": "<strong>빈 화면 (Empty):</strong> 기록을 모두 지웠을 때 나오는 안내 화면",
                "ui-l2": "<strong>네트워크 에러:</strong> '연결 끊김' 배너 + [다시 시도] 버튼",
                "ui-l3": "<strong>AI 할루시네이션 방지:</strong> '사진이 흐립니다' [다시 촬영] 버튼",
                "ui-h2": "✅ 인간 통제권 (Human Control)",
                "ui-l4": "<strong>Stop Generating 🛑:</strong> 로딩 중 멈춤 버튼",
                "ui-l5": "<strong>Edit & Undo ✏️:</strong> 질문 수정 / 이전 답변 되돌리기",
                "ui-l6": "<strong>Clear History 🗑️:</strong> 설정창 안의 대화 기록 삭제 아이콘",

                "pdf-title": "기말 포트폴리오(PDF) 작성 가이드 (Week 15 제출)", "pdf-sub": "파워포인트나 Canva를 활용하여 한 학기 동안 만든 자료를 4~5장짜리 매거진처럼 엮어주세요.",
                "pdf-p1-t": "페르소나 & 문제", "pdf-p1-p": "서비스명, 가상 유저 프로필 (2주차)",
                "pdf-p2-t": "대화 흐름도", "pdf-p2-p": "5단계 Dialogue Tree 스케치 (4주차)",
                "pdf-p3-t": "서비스 블루프린트", "pdf-p3-p": "Front/Backstage 연결 표 (12주차)",
                "pdf-p4-t": "Figma 최종 화면", "pdf-p4-p": "주요 화면 캡처 & <strong>신뢰성 UI 요소 설명 표시</strong>",
                "pdf-p5-t": "결론 & Figma 링크", "pdf-p5-p": "사용성 진단 개선점 (13주차) + 작동 링크",

                "warn-title": "가장 많이 하는 치명적 실수 3가지 (0점 주의!)",
                "warn-l1": "<strong>비공개 Figma 링크:</strong> 권한을 'Anyone with the link can view'로 풀지 않음 👉 화면을 열 수 없어 0점 처리됩니다!",
                "warn-l2": "<strong>개미만 한 스크린샷:</strong> PDF 안에 화면 이미지를 너무 작게 넣어 글씨가 전혀 안 보임.",
                "warn-l3": "<strong>'Why'의 부재:</strong> 예쁜 그림만 캡처해두고, 이 기능이 왜 사용자에게 필요한지(이유)를 적지 않음.",
                "warn-tip": "💡 <strong>꿀팁:</strong> 제출하기 전에 [크롬 시크릿 창(Incognito Window)]을 열어서 내 피그마 링크가 로그인 없이도 잘 열리는지 꼭 직접 테스트해 보세요!",

                "act-title": "30분 워크샵 (최종 점검 & 내보내기)", "act-h3": "내 피그마 프로토타입 디버깅 및 PDF 초안 만들기",
                "act-l1": "Figma에서 지난주에 발견한 <strong>가장 중요한 버그 2개</strong>를 고칩니다.",
                "act-l2": "첫 번째 화면을 클릭하고 오른쪽 패널에서 <strong>[Flow Starting Point]</strong>를 지정하세요.",
                "act-l3": "완성된 화면들을 <strong>PNG 이미지 캡처</strong> 또는 PDF로 내려받습니다.",
                "act-l4": "파워포인트나 Canva를 켜서 <strong>기말 포트폴리오 PDF의 1~5페이지 초안</strong> 레이아웃을 만듭니다.",
                "act-btn": "📢 15주차 최종 기말고사 제출 안내",
                
                // Dynamic JS Strings
                "js_start": `💡 'Flow Starting Point' 지정 완료!
이 뱃지가 있어야 평가자가 링크를 열었을 때 무조건 이 1번 화면부터 시작하게 됩니다.`,
                "js_err1": `⚠️ [버그 발견]
로딩 화면에 '생성 중지(Stop)' 버튼이 빠졌습니다! AI가 멈췄을 때 사용자가 빠져나갈 탈출구가 없습니다.`,
                "js_orphan": `🚨 [오류-고립된 화면]
앞뒤로 연결된 화살표(파란 선)가 하나도 없는 고아(Orphan) 화면입니다. 사용자는 이 에러 화면에 영원히 도달할 수 없습니다!`,
                "js_checklist": `🎉 다음 주 15주차는 실시간 수업이나 발표가 없습니다!

MS Teams Assignments의 [최종 기말 제출란]에
1) 4~5장 분량의 최종 PDF 포트폴리오
2) 권한이 열린 피그마 공유 링크
이 두 가지를 일요일 밤 11시 59분까지 제출하시면 이번 학기가 완료됩니다!

(오늘 수업이 끝나면 14주차 출석 퀴즈를 꼭 제출해주세요!)`
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "W11", "nav-w12": "W12", "nav-w13": "W13", "nav-w14": "Week 14: Final QA",
                
                "intro-title": "Week 14: Final Prototype Studio & QA",
                "intro-l1-b": "Goal:", "intro-l1-t": "Fix Figma bugs and format your Final UX Portfolio PDF for next week.",
                "intro-l2-b": "Core:", "intro-l2-t": "Novices design happy paths; <strong>Pros design flawless Edge Cases.</strong>",
                
                "qa-title": "Prototype Clean Canvas Test", "qa-sub": "Click the [Prototype] tab in Figma to check your blue arrows. (Click the badges below!)",
                "qa-start": "▶ Flow 1 Start",
                "qa-t1": "✅ Starter Chips Linked", "qa-t2": "✅ Skeleton Loader", "qa-t3": "❌ Missing 'Stop' button!", "qa-t4": "✅ Citation Links", "qa-t5": "✅ Edit & Regenerate",
                "qa-edge-t": "4. Network Timeout", "qa-edge-p": "Orphan Screen (No arrows attached) 👉 <strong>The evaluator will never see this screen!</strong>",

                "ui-title": "Safety Net UI Checklist", 
                "ui-h1": "🚨 Edge Cases",
                "ui-l1": "<strong>Empty State:</strong> Friendly message when history is deleted.",
                "ui-l2": "<strong>Network Timeout:</strong> 'Connection lost' banner + [Retry] button.",
                "ui-l3": "<strong>Hallucination Defense:</strong> 'Photo too blurry' + [Retake] button.",
                "ui-h2": "✅ Human Control",
                "ui-l4": "<strong>Stop Generating 🛑:</strong> Button visible during loading.",
                "ui-l5": "<strong>Edit & Undo ✏️:</strong> Modify prompt / Revert state.",
                "ui-l6": "<strong>Clear History 🗑️:</strong> Delete log icon inside Settings.",

                "pdf-title": "Final Portfolio (PDF) Structure Guide (Due W15)", "pdf-sub": "Use PowerPoint or Canva to assemble your semester's work into a 4-5 page magazine.",
                "pdf-p1-t": "Persona & Problem", "pdf-p1-p": "Service Name, Target User Profile (W2)",
                "pdf-p2-t": "Dialogue Flow", "pdf-p2-p": "5-step Dialogue Tree Sketch (W4)",
                "pdf-p3-t": "Service Blueprint", "pdf-p3-p": "Front/Backstage Grid (W12)",
                "pdf-p4-t": "Final Figma Screens", "pdf-p4-p": "Screen mockups & <strong>Tags explaining Trust UI</strong>",
                "pdf-p5-t": "Audit & Figma Link", "pdf-p5-p": "Usability bugs fixed (W13) + Clickable Link",

                "warn-title": "Top 3 Critical Submission Fails (Automatic 0!)",
                "warn-l1": "<strong>Private Figma Link:</strong> Forgetting to set permission to 'Anyone with the link can view' 👉 Evaluator cannot open it!",
                "warn-l2": "<strong>Tiny Screenshots:</strong> Inserting micro-sized images in the PDF so text is completely unreadable.",
                "warn-l3": "<strong>Missing the 'Why':</strong> Showing pretty screens without explaining *why* the AI feature solves the user's problem.",
                "warn-tip": "💡 <strong>Pro Tip:</strong> Open a Chrome Incognito Window and paste your Figma link to test if it opens without logging in!",

                "act-title": "30-Min Studio (Debug & Export)", "act-h3": "Polish Prototype & Start PDF Layout",
                "act-l1": "Fix the <strong>top 2 critical bugs</strong> you found in Figma last week.",
                "act-l2": "Select your very first screen and add a <strong>[Flow Starting Point]</strong>.",
                "act-l3": "Export your polished screen frames as <strong>PNG images</strong>.",
                "act-l4": "Open Canva or PPT and create the <strong>Page 1-5 layout drafts</strong> for your final PDF.",
                "act-btn": "📢 Week 15 Final Exam Instructions",
                
                // Dynamic JS Strings
                "js_start": `💡 'Flow Starting Point' Added!
This badge guarantees the evaluator will start from this exact Screen 1 when they open your link.`,
                "js_err1": `⚠️ [Bug Found]
The 'Stop Generating' button is missing from the loading screen! The user is trapped if the AI freezes.`,
                "js_orphan": `🚨 [Error: Orphan Screen]
This screen has zero blue arrows connecting to it. It is floating alone, so the user can never reach this error page!`,
                "js_checklist": `🎉 There is NO live class or presentation next week (Week 15)!

To complete this semester, go to the MS Teams [Final Project Submission] tab and upload:
1) Your 4-5 page Final PDF Portfolio
2) Your public Figma View Link

Deadline: Next Sunday at 11:59 PM.
(Don't forget to submit today's W14 Attendance Quiz!)`
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w1": "W1", "nav-w2": "W2", "nav-w3": "W3", "nav-w4": "W4", "nav-w5": "W5", "nav-w6": "W6", "nav-w7": "W7", "nav-w10": "W10", "nav-w11": "W11", "nav-w12": "W12", "nav-w13": "W13", "nav-w14": "Неделя 14: Финал",
                
                "intro-title": "Неделя 14: Финальный Прототип и QA",
                "intro-l1-b": "Цель:", "intro-l1-t": "Исправить баги в Figma и подготовить финальное PDF-портфолио.",
                "intro-l2-b": "Главное:", "intro-l2-t": "Новички делают только 'Счастливые пути'; <strong>Профи идеально прорабатывают 'Сбои' (Edge Cases).</strong>",
                
                "qa-title": "Тест чистого холста (Связи прототипа)", "qa-sub": "Откройте вкладку [Prototype] в Figma, чтобы проверить синие стрелки. (Кликайте по бейджам ниже!)",
                "qa-start": "▶ Старт Потока 1",
                "qa-t1": "✅ Подсказки связаны", "qa-t2": "✅ Скелетная загрузка", "qa-t3": "❌ Нет кнопки 'Стоп'!", "qa-t4": "✅ Ссылки-источники", "qa-t5": "✅ Кнопки Изменить/Повтор",
                "qa-edge-t": "4. Тайм-аут сети", "qa-edge-p": "Оторванный экран (Без стрелок) 👉 <strong>Оценивающий его никогда не увидит!</strong>",

                "ui-title": "Финальный чек-лист UI Безопасности", 
                "ui-h1": "🚨 Сбои и Ошибки (Edge Cases)",
                "ui-l1": "<strong>Пустой экран:</strong> Сообщение, если история удалена.",
                "ui-l2": "<strong>Тайм-аут сети:</strong> Баннер 'Нет сети' + [Повторить].",
                "ui-l3": "<strong>Защита от галлюцинаций:</strong> 'Фото размыто' + [Переснять].",
                "ui-h2": "✅ Контроль Человека",
                "ui-l4": "<strong>Остановить генерацию 🛑:</strong> Кнопка во время загрузки.",
                "ui-l5": "<strong>Редактировать ✏️:</strong> Изменить запрос / Вернуться назад.",
                "ui-l6": "<strong>Очистить историю 🗑️:</strong> Иконка удаления в Настройках.",

                "pdf-title": "Структура Финального Портфолио (PDF)", "pdf-sub": "Используйте PowerPoint или Canva, чтобы собрать вашу работу за семестр в журнал на 4-5 страниц.",
                "pdf-p1-t": "Персона и Проблема", "pdf-p1-p": "Название, Профиль юзера (Н2)",
                "pdf-p2-t": "Поток диалога", "pdf-p2-p": "5-шаговое дерево (Н4)",
                "pdf-p3-t": "Service Blueprint", "pdf-p3-p": "Таблица Front/Backstage (Н12)",
                "pdf-p4-t": "Экраны Figma", "pdf-p4-p": "Скриншоты и <strong>Объяснения Trust UI</strong>",
                "pdf-p5-t": "Аудит и Ссылка", "pdf-p5-p": "Отчет по багам (Н13) + Ссылка на Figma",

                "warn-title": "Топ-3 фатальных ошибок сдачи (Автоматический 0!)",
                "warn-l1": "<strong>Закрытая ссылка Figma:</strong> Забыли поставить 'Anyone with the link can view' 👉 Проверить работу невозможно!",
                "warn-l2": "<strong>Микро-скриншоты:</strong> Картинки в PDF такие маленькие, что текст невозможно прочитать.",
                "warn-l3": "<strong>Нет ответа на 'Почему':</strong> Красивые картинки без объяснения, *как* ИИ решает проблему пользователя.",
                "warn-tip": "💡 <strong>Лайфхак:</strong> Откройте Режим Инкогнито (Incognito) в Chrome и вставьте ссылку на Figma, чтобы убедиться, что она открывается без логина!",

                "act-title": "30-мин. Студия (Дебаг и Экспорт)", "act-h3": "Отполируйте прототип и начните верстать PDF",
                "act-l1": "Исправьте <strong>2 главных бага</strong>, найденных в Figma на прошлой неделе.",
                "act-l2": "Выберите самый первый экран и добавьте <strong>[Flow Starting Point]</strong>.",
                "act-l3": "Экспортируйте готовые экраны как <strong>PNG изображения</strong>.",
                "act-l4": "Откройте Canva или PPT и создайте <strong>черновик верстки на 1-5 страниц</strong>.",
                "act-btn": "📢 Инструкции по сдаче Финального Экзамена",
                
                // Dynamic JS Strings
                "js_start": `💡 Добавлена 'Стартовая точка'!
Этот бейдж гарантирует, что при открытии ссылки преподаватель начнет проверку именно с этого Экрана 1.`,
                "js_err1": `⚠️ [Найден Баг]
На экране загрузки нет кнопки 'Остановить' (Stop Generating)! Пользователь в ловушке, если ИИ зависнет.`,
                "js_orphan": `🚨 [Ошибка: Оторванный Экран]
К этому экрану не ведет ни одна синяя стрелка. Он висит в воздухе, и пользователь никогда не сможет на него попасть!`,
                "js_checklist": `🎉 На следующей неделе (15 неделя) живых занятий и презентаций нет!

Для завершения семестра зайдите в MS Teams (вкладка Final Project Submission) и загрузите:
1) Ваш финальный PDF на 4-5 страниц
2) Публичную ссылку на Figma (View Link)

Дедлайн: Следующее воскресенье 23:59.
(Не забудьте сдать тест за 14 неделю сегодня!)`
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.innerText.toLowerCase().includes(lang));
            });

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        function triggerAlert(msgKey) {
            alert(translations[currentLang][msgKey]);
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    

Object.assign(window, {setLang, triggerAlert});
})();
}
if (document.body.dataset.page === 'week13') {
(function(){

        let currentLang = 'ko';

        const translations = {
            ko: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w13": "Week 13: Usability",
                
                "intro-title": "Week 13: AI 사용성 평가 및 자가 진단",
                "intro-l1-b": "목표:", "intro-l1-t": "AI 특화 사용성 지표(Usability Metrics)를 이해하고 내 프로토타입 검증하기",
                "intro-l2-b": "핵심:", "intro-l2-t": "'얼마나 똑똑해 보이는가'보다 <strong>'사용자의 목적을 빨리 해결했는가'</strong>가 100배 중요합니다.",
                
                "metric-title": "AI 맞춤형 사용성 평가 지표",
                "metric-sub": "일반 앱(클릭 횟수, 체류 시간)과 달리 AI 앱은 다른 기준을 측정해야 합니다.",
                "m1-t": "🎯 프롬프트 성공률 (Prompt Success Rate)", "m1-p": "사용자가 한 번 질문했을 때 AI가 의도를 찰떡같이 알아들었는가?",
                "m2-t": "⏱️ 에러 복구 시간 (Recovery Time)", "m2-p": "엉뚱한 답변이 나왔을 때 '수정/다시 생성' 버튼을 찾아 고치는 데 걸린 시간 (기준: 3초 이내)",
                "m3-t": "🛡️ 신뢰 및 검증률 (Trust & Verification)", "m3-p": "맹신하지 않고 출처 링크(Citation)를 직접 눌러서 사실을 확인한 비율",

                "lat-title": "지연 시간 인내도 (Latency Tolerance)", "lat-sub": "화면이 멈춘 상태로 사용자가 얼마나 버틸 수 있을까요? 6초가 넘어가면 50%가 앱을 끕니다.",
                "lat-z1": "0~2초<br>안전 지대<br>(점 애니메이션 충분)",
                "lat-z2": "3~5초<br>진행 텍스트 필요<br>('데이터 검색 중...')",
                "lat-z3": "6초 이상<br>위험 구역<br>(앱 고장으로 오해 👉 이탈!)",

                "peer-title": "비동기식 동료 평가 (Peer Review)", "peer-sub": "실시간 발표 부담 없이 MS Teams 댓글로 서로의 피그마를 테스트하고 피드백을 주고받습니다.",
                "peer-c1-t": "🌟 1 Glow (칭찬할 점)", "peer-c1-p": "'첫 화면에 추천 칩(Starter chips)이 잘 배치되어 있어서 처음 질문을 시작하기 너무 편했어요!'",
                "peer-c2-t": "💡 1 Grow (개선할 점)", "peer-c2-p": "'로딩 화면에서 Stop 버튼이 없어서 만약 오류가 나면 꼼짝없이 기다려야 할 것 같아 불안해요.'",

                "mat-title": "UI 버그 수정 우선순위 매트릭스", "mat-sub": "피드백을 받았다고 해서 전부 당장 고칠 수는 없습니다. 색상을 눌러 우선순위를 확인하세요.",
                "mat-r": "치명적 (오늘 즉시 수정)", "mat-y": "중요 (이번 주 내 수정)", "mat-g": "선택 사항 (시간 남을 때)",

                "act-title": "25분 실습: 피그마 셀프 진단", "act-h3": "내 프로토타입 마우스만으로 끝까지 통과하기",
                "act-l1": "내 피그마 프로토타입 재생(▶️) 버튼 누르기",
                "act-l2": "페르소나에 빙의하여 클릭이 막히는 <strong>Dead-end(끊긴 화살표)</strong> 찾기",
                "act-l3": "출처 뱃지, Stop 버튼, 프라이버시 설명이 다 있는지 확인하기",
                "act-l4": "다음 주 기말 포트폴리오를 위해 <strong>고쳐야 할 버그 2가지 메모하기</strong>",
                "act-btn": "📢 이번 주 출석 퀴즈 및 과제 안내",
                
                // Dynamic JS Strings
                "js_mat_red": `🔴 Critical (치명적 오류):

버튼을 눌렀는데 화면이 안 넘어가거나, 뒤로 가기 버튼이 없어 갇혀버리는 경우. 포트폴리오 캡처 전 무조건 1순위로 고쳐야 합니다!`,
                "js_mat_yel": `🟡 Important (중요 오류):

글씨가 너무 작거나, 버튼 이름이 헷갈리거나, 출처 뱃지가 빠진 경우. 치명적이진 않지만 신뢰도를 깎아먹으므로 꼭 고치세요.`,
                "js_mat_grn": `🟢 Nice-to-Have (선택 사항):

배경 색상을 바꾸거나 예쁜 일러스트를 추가하는 작업. 핵심 흐름을 다 고치고 시간이 남을 때만 하세요!`,
                "js_checklist": `🎉 수고하셨습니다!

MS Teams Assignments 탭에서 [13주차 출석 퀴즈]를 이번 주 일요일 밤 11시 59분까지 제출해 주세요.

(다음 주 14주차는 실시간 수업 없이, 기말 PDF 포트폴리오 제작 및 피그마 오류 최종 점검 주간으로 진행됩니다!)`
            },
            en: {
                "header-subtitle": "AI Service Design & User Experience",
                "nav-w13": "Week 13: Usability",
                
                "intro-title": "Week 13: AI Usability Testing & Self-Audit",
                "intro-l1-b": "Goal:", "intro-l1-t": "Master AI-specific usability testing metrics and self-audit your Figma prototype.",
                "intro-l2-b": "Core:", "intro-l2-t": "<strong>'Does it solve the user's problem fast?'</strong> is 100x more important than 'Does it sound smart?'",
                
                "metric-title": "Usability Metrics Tailored for AI",
                "metric-sub": "AI products require different measuring sticks compared to traditional apps.",
                "m1-t": "🎯 Prompt Success Rate", "m1-p": "Did the AI accurately understand the user's initial intent on the first try?",
                "m2-t": "⏱️ Error Recovery Time", "m2-p": "How fast users found the 'Edit' or 'Regenerate' button when AI hallucinated (Goal: Under 3 sec).",
                "m3-t": "🛡️ Trust & Verification Rate", "m3-p": "The percentage of users who clicked the Citation links to fact-check instead of blindly trusting.",

                "lat-title": "Latency Tolerance Benchmarks", "lat-sub": "How long will users wait at a frozen screen? Beyond 6 seconds, 50% will exit the app.",
                "lat-z1": "0~2 Sec<br>Safe Zone<br>(Blinking dots OK)",
                "lat-z2": "3~5 Sec<br>Need Visual Text<br>('Searching DB...')",
                "lat-z3": "6+ Sec<br>Danger Zone<br>(User assumes app crashed!)",

                "peer-title": "Asynchronous Peer Review", "peer-sub": "Leave structured comments on MS Teams to review classmates' Figma links without live pressure.",
                "peer-c1-t": "🌟 1 Glow (Great part)", "peer-c1-p": "'The starter chips made it super easy to begin my first question!'",
                "peer-c2-t": "💡 1 Grow (Area to improve)", "peer-c2-p": "'The loading screen had no Stop button, so I felt trapped while waiting.'",

                "mat-title": "The Priority Matrix for UI Fixes", "mat-sub": "You can't fix everything at once. Click the colors to see how to prioritize bugs.",
                "mat-r": "Critical (Fix Today)", "mat-y": "Important (Fix this week)", "mat-g": "Nice-to-Have (Optional)",

                "act-title": "25-Min Studio: Figma Self-Audit", "act-h3": "Navigate your prototype using only clicks",
                "act-l1": "Open your Figma Prototype in Play mode (▶️).",
                "act-l2": "Act as your persona and hunt for <strong>Dead-ends (broken arrows)</strong>.",
                "act-l3": "Check if Citations, Stop button, and Privacy texts are all present.",
                "act-l4": "Write down the <strong>Top 2 UI bugs to fix</strong> for your Final Portfolio.",
                "act-btn": "📢 Check Week 13 Homework",
                
                // Dynamic JS Strings
                "js_mat_red": `🔴 Critical (Fix Today):

Broken prototype links, missing back buttons, or no way to exit loading. Fix these before taking any screenshots for your final portfolio!`,
                "js_mat_yel": `🟡 Important (Fix This Week):

Small font sizes, ambiguous button text, or missing citation tags. Not fatal, but damages trust.`,
                "js_mat_grn": `🟢 Nice-to-Have (Optional):

Fancy background colors or extra decorative illustrations. Do this only if you have extra time.`,
                "js_checklist": `🎉 Great job today!

Please complete the [Week 13 Attendance Quiz] on the MS Teams Assignments tab by this Sunday, 11:59 PM.

(Next week, Week 14, will be a Studio week to finalize your Figma links and build your Final PDF Portfolio without a live lecture!)`
            },
            ru: {
                "header-subtitle": "Дизайн ИИ-сервисов и UX",
                "nav-w13": "Неделя 13: Юзабилити",
                
                "intro-title": "Неделя 13: Юзабилити ИИ и Самоаудит",
                "intro-l1-b": "Цель:", "intro-l1-t": "Изучить метрики юзабилити для ИИ и проверить свой прототип в Figma.",
                "intro-l2-b": "Главное:", "intro-l2-t": "<strong>'Решает ли это проблему быстро?'</strong> в 100 раз важнее, чем 'Выглядит ли это умно?'",
                
                "metric-title": "Метрики Юзабилити для ИИ",
                "metric-sub": "ИИ-продуктам нужны другие критерии оценки, нежели обычным приложениям.",
                "m1-t": "🎯 Успех промпта", "m1-p": "Понял ли ИИ первоначальное намерение пользователя с первой попытки?",
                "m2-t": "⏱️ Время восстановления (Ошибки)", "m2-p": "Как быстро нашли кнопку 'Изменить' или 'Повторить' при ошибке ИИ (Цель: < 3 сек).",
                "m3-t": "🛡️ Уровень Доверия и Проверки", "m3-p": "Процент тех, кто кликнул на Ссылки-источники для фактчека, а не поверил слепо.",

                "lat-title": "Толерантность к Задержкам (Latency)", "lat-sub": "Как долго пользователи будут смотреть на зависший экран? После 6 сек 50% закроют апп.",
                "lat-z1": "0~2 Сек<br>Безопасно<br>(Точек достаточно)",
                "lat-z2": "3~5 Сек<br>Нужен Текст<br>('Ищем в БД...')",
                "lat-z3": "6+ Сек<br>Красная Зона<br>(Кажется, что зависло!)",

                "peer-title": "Асинхронное Ревью (Peer Review)", "peer-sub": "Оставляйте структурированные комменты в MS Teams, тестируя ссылки одногруппников без живых презентаций.",
                "peer-c1-t": "🌟 1 Плюс (Glow)", "peer-c1-p": "'Стартовые кнопки-подсказки помогли мне легко начать общение!'",
                "peer-c2-t": "💡 1 Совет (Grow)", "peer-c2-p": "'На экране загрузки нет кнопки Стоп, я чувствовал себя в ловушке во время ожидания.'",

                "mat-title": "Матрица Приоритетов для багов UI", "mat-sub": "Вы не можете исправить всё сразу. Кликайте на цвета, чтобы узнать приоритеты.",
                "mat-r": "Критично (Исправьте сегодня)", "mat-y": "Важно (На этой неделе)", "mat-g": "Необязательно (Если есть время)",

                "act-title": "25 Минут: Самоаудит Figma", "act-h3": "Пройдите прототип только кликами",
                "act-l1": "Откройте ваш Прототип Figma в режиме Play (▶️).",
                "act-l2": "В роли вашей персоны найдите <strong>Тупики (оборванные стрелки)</strong>.",
                "act-l3": "Проверьте наличие Источников, кнопки Стоп и текста о Приватности.",
                "act-l4": "Запишите <strong>2 главных бага для исправления</strong> перед Финальным Портфолио.",
                "act-btn": "📢 Домашнее задание на 13 неделю",
                
                // Dynamic JS Strings
                "js_mat_red": `🔴 Критично (Исправьте сегодня):

Оборванные ссылки прототипа, нет кнопок 'Назад' или невозможно выйти из загрузки. Исправьте это до создания скриншотов для портфолио!`,
                "js_mat_yel": `🟡 Важно (На этой неделе):

Мелкий шрифт, непонятный текст кнопок или отсутствуют теги источников. Не фатально, но портит доверие.`,
                "js_mat_grn": `🟢 Необязательно:

Красивые фоны или дополнительные иллюстрации. Делайте только если осталось свободное время.`,
                "js_checklist": `🎉 Отличная работа сегодня!

Пожалуйста, заполните [Тест за 13 неделю] в разделе Assignments в MS Teams до этого воскресенья, 23:59.

(Следующая 14 неделя — это студийная неделя для доработки ссылок Figma и создания Финального PDF-Портфолио без живой лекции!)`
            }
        };

        function setLang(lang) {
            currentLang = lang;
            window.currentLang = lang;
            window.translations = translations;
            if (typeof window.uxApplyChrome === 'function') window.uxApplyChrome(lang);
            

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        function triggerAlert(msgKey) {
            alert(translations[currentLang][msgKey]);
        }

        // 스크롤 애니메이션
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // 초기 언어 설정
        setLang(window.uxGetPreferredLanguage());
    
Object.assign(window,{setLang,triggerAlert});

})();
}
