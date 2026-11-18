/* Beginner course paths and concrete, local-only teaching examples. */
(function () {
  'use strict';
  const page = window.uxCurrentPage;
  if (!page || page === 'week08' || page === 'week15') return;
  const $ = id => document.getElementById(id);
  const q = selector => document.querySelector(selector);
  const language = () => ['ko', 'en', 'ru'].includes(window.currentLang) ? window.currentLang : 'en';
  const tr = (ko, en, ru) => ({ko, en, ru})[language()];
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  const icon = name => '<span class="ux-guide-icon" aria-hidden="true">' + (window.UXIcons ? window.UXIcons.get(name) : '') + '</span>';
  const bound = new WeakSet();
  let sourceOpen = false;
  let comparisonOpen = false;
  const privacy = {excluded: false, reset: false, deleted: false, confirming: false, action: ''};

  function firstExample() {
    const lesson = window.UX_DATA.learning[page];
    const anchor = lesson && lesson.anchor;
    const heading = anchor && q('#lesson-content [data-key="' + anchor + '"]');
    const host = $('examples-header');
    if (!heading || !host) return;
    const target = heading.closest('h2,h3,.comp-card-header') || heading;
    target.id = target.id || 'ux-first-example';
    target.classList.add('ux-guide-target');
    target.setAttribute('tabindex', '-1');
    let guide = $('ux-course-entry');
    if (!guide) {
      guide = document.createElement('div');
      guide.id = 'ux-course-entry';
      guide.className = 'ux-course-entry';
      host.appendChild(guide);
    }
    guide.innerHTML = '<a class="ux-guide-button" href="#' + target.id + '">' + icon('arrow-right') + '<span>' + tr('첫 예시 해보기', 'Try the first example', 'Попробовать первый пример') + '</span></a><p class="ux-guide-term-hint">' + tr('배경색이 있는 단어를 누르면 뜻과 예시가 나와요. 다시 누르거나 Esc를 누르면 닫혀요.', 'Select a highlighted word to see its meaning and an example. Select it again or press Esc to close.', 'Нажмите выделенное слово, чтобы увидеть значение и пример. Нажмите ещё раз или Esc, чтобы закрыть.') + '</p>';
    guide.querySelector('a').addEventListener('click', event => {
      event.preventDefault();
      target.focus({preventScroll: true});
      target.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start'});
    });
  }

  /* SOURCE_COMPARISON_DATA */
  const sourceText = {
  "ko": {
    "label": "학습용 가상 공지 · 실제 수업 일정이 아닙니다",
    "title": "원문과 AI 요약 비교하기",
    "summary_label": "AI가 만든 요약 예시",
    "summary": "연습 모임은 오후 3시(15:00)에 204호에서 시작합니다.",
    "open_label": "[1] 예시 원문 열기",
    "source_label": "예시 원문",
    "notice": "연습 모임은 오후 2시(14:00)에 204호에서 시작합니다. 필기도구를 가져오세요.",
    "task": "원문과 요약에서 시작 시간과 장소를 찾아 비교하세요. 어느 부분이 다른가요?",
    "answer_label": "비교 결과 보기",
    "answer": "시작 시간이 다릅니다. 원문은 오후 2시(14:00), AI 요약은 오후 3시(15:00)입니다. 장소 204호는 같습니다.",
    "explanation": "이 예시의 요약은 시작 시간을 잘못 옮겼습니다. 출처 링크가 있다는 사실만으로 답이 맞는 것은 아닙니다. 링크를 열고 중요한 숫자와 이름이 원문과 같은지 확인하세요.",
    "corrected_summary": "수정한 요약: 연습 모임은 오후 2시(14:00)에 204호에서 시작합니다. 필기도구를 가져오세요."
  },
  "en": {
    "label": "Fictional learning notice · Not a real class schedule",
    "title": "Compare the source and the AI summary",
    "summary_label": "Example AI summary",
    "summary": "The practice meeting starts at 3 p.m. (15:00) in Room 204.",
    "open_label": "[1] Open the example source",
    "source_label": "Example original notice",
    "notice": "The practice meeting starts at 2 p.m. (14:00) in Room 204. Bring something to write with.",
    "task": "Find the start time and the room in both texts. Which detail is different?",
    "answer_label": "Show the comparison",
    "answer": "The start time is different. The original says 2 p.m. (14:00); the AI summary says 3 p.m. (15:00). Both say Room 204.",
    "explanation": "This summary copied the start time incorrectly. Having a source link does not make an answer correct. Open it and compare important numbers and names with the original.",
    "corrected_summary": "Corrected summary: The practice meeting starts at 2 p.m. (14:00) in Room 204. Bring something to write with."
  },
  "ru": {
    "label": "Вымышленное учебное объявление · Это не расписание занятий",
    "title": "Сравните источник и краткий ответ ИИ",
    "summary_label": "Пример краткого ответа ИИ",
    "summary": "Учебная встреча начнётся в 15:00 в аудитории 204.",
    "open_label": "[1] Открыть пример источника",
    "source_label": "Исходное учебное объявление",
    "notice": "Учебная встреча начнётся в 14:00 в аудитории 204. Возьмите ручку или карандаш.",
    "task": "Найдите время начала и номер аудитории в обоих текстах. Какая деталь отличается?",
    "answer_label": "Показать сравнение",
    "answer": "Отличается время начала. В оригинале указано 14:00, а в ответе ИИ — 15:00. В обоих текстах указана аудитория 204.",
    "explanation": "В этом ответе ИИ неверно указано время начала. Наличие ссылки не доказывает правильность ответа. Откройте источник и сравните важные числа и названия с оригиналом.",
    "corrected_summary": "Исправленный ответ: учебная встреча начнётся в 14:00 в аудитории 204. Возьмите ручку или карандаш."
  }
};

  function sourceComparison() {
    if (page !== 'week05') return;
    const summary = q('#lesson-content [data-key="ui-ex-txt"]');
    const trigger = q('#lesson-content [data-key="ui-ex-btn"]');
    if (!summary || !trigger) return;
    const words = sourceText[language()];
    const host = summary.parentElement;
    host.classList.add('ux-guide-source-demo');
    let label = $('ux-source-fictional');
    if (!label) {
      label = document.createElement('p');
      label.id = 'ux-source-fictional';
      label.className = 'ux-guide-example-label';
      host.prepend(label);
    }
    label.textContent = words.label;
    let title = $('ux-source-summary-label');
    if (!title) {
      title = document.createElement('strong');
      title.id = 'ux-source-summary-label';
      title.className = 'ux-guide-summary-label';
      summary.before(title);
    }
    title.textContent = words.summary_label;
    summary.textContent = words.summary;
    trigger.removeAttribute('onclick');
    trigger.textContent = words.open_label;
    trigger.setAttribute('aria-controls', 'ux-source-original');
    trigger.setAttribute('aria-expanded', String(sourceOpen));
    let panel = $('ux-source-original');
    if (!panel) {
      panel = document.createElement('section');
      panel.id = 'ux-source-original';
      panel.className = 'ux-guide-source-original';
      panel.setAttribute('aria-labelledby', 'ux-source-heading');
      host.appendChild(panel);
    }
    panel.hidden = !sourceOpen;
    panel.innerHTML = '<h4 id="ux-source-heading" tabindex="-1">' + icon('file-earmark-text') + escape(words.source_label) + '</h4><p class="ux-guide-original-text">' + escape(words.notice) + '</p><p>' + escape(words.task) + '</p><details id="ux-source-answer"' + (comparisonOpen ? ' open' : '') + '><summary>' + escape(words.answer_label) + '</summary><p><strong>' + escape(words.answer) + '</strong></p><p>' + escape(words.explanation) + '</p><p class="ux-guide-corrected">' + escape(words.corrected_summary) + '</p></details>';
    $('ux-source-answer').addEventListener('toggle', event => {comparisonOpen = event.currentTarget.open;});
    if (!bound.has(trigger)) {
      bound.add(trigger);
      trigger.addEventListener('click', () => {
        sourceOpen = !sourceOpen;
        $('ux-source-original').hidden = !sourceOpen;
        trigger.setAttribute('aria-expanded', String(sourceOpen));
        if (sourceOpen) $('ux-source-heading').focus({preventScroll: true});
      });
    }
  }

  function permissionText() {
    const anyone = $('perm-select').value === 'anyone';
    return anyone
      ? tr('링크가 있는 사람: 링크를 받은 사람이 볼 수 있어요. 보기 권한만 주면 내용을 고칠 수는 없어요.', 'Anyone with the link: a person who receives the link can view it. View access does not allow editing.', 'Все со ссылкой: получатель ссылки может просмотреть файл. Право просмотра не разрешает редактирование.')
      : tr('초대된 사람만: 초대한 계정으로 로그인해야 볼 수 있어요. 링크를 보내도 초대하지 않은 사람은 볼 수 없어요.', 'Only invited people: the viewer must sign in with an invited account. Sending the link does not invite another person.', 'Только приглашённые: нужно войти в приглашённый аккаунт. Отправка ссылки сама по себе не приглашает другого человека.');
  }

  function shareDemo() {
    if (page !== 'week09') return;
    const select = $('perm-select');
    const button = $('copy-link-btn');
    if (!select || !button) return;
    let hint = $('ux-share-scope');
    if (!hint) {
      hint = document.createElement('p');
      hint.id = 'ux-share-scope';
      hint.className = 'ux-guide-share-scope';
      hint.setAttribute('role', 'status');
      select.after(hint);
      const result = document.createElement('p');
      result.id = 'ux-share-result';
      result.className = 'ux-guide-share-result';
      result.hidden = true;
      result.setAttribute('role', 'status');
      button.after(result);
    }
    select.setAttribute('aria-describedby', 'ux-share-scope');
    select.removeAttribute('onchange');
    button.removeAttribute('onclick');
    button.innerHTML = icon('arrow-right') + '<span>' + tr('링크 복사 체험', 'Try copying a link', 'Попробовать копирование ссылки') + '</span>';
    window.checkPermission = function () {
      const valid = ['restricted', 'anyone'].includes(select.value);
      select.classList.remove('correct');
      button.disabled = !valid;
      button.setAttribute('aria-disabled', String(!valid));
      button.style.opacity = valid ? '1' : '0.5';
      button.style.pointerEvents = valid ? 'auto' : 'none';
      button.style.background = 'var(--uxr-blue)';
      hint.textContent = valid ? permissionText() : '';
      $('ux-share-result').hidden = true;
    };
    if (!bound.has(button)) {
      bound.add(button);
      button.addEventListener('click', () => {
        const result = $('ux-share-result');
        result.textContent = tr('복사 동작을 체험했어요. 실제 파일의 링크는 만들어지지 않습니다. ', 'You tried the copy action. This example does not create a link to a real file. ', 'Вы попробовали действие копирования. Здесь не создаётся ссылка на настоящий файл. ') + permissionText();
        result.hidden = false;
      });
      select.addEventListener('change', () => window.checkPermission());
    }
    window.checkPermission();
  }

  function privacyStatus() {
    const toggle = q('#lesson-content .toggle-switch');
    if (!toggle) return;
    toggle.dataset.state = privacy.excluded ? 'on' : 'off';
    toggle.classList.toggle('on', privacy.excluded);
    toggle.setAttribute('aria-checked', String(privacy.excluded));
    $('ux-privacy-switch-state').textContent = privacy.excluded ? tr('켜짐', 'On', 'Включено') : tr('꺼짐', 'Off', 'Выключено');
    $('ux-privacy-effect').textContent = privacy.excluded
      ? tr('켜짐: 이 대화를 AI 학습에 사용하지 않는 예시 설정입니다. 아래 대화 목록은 그대로 남아요.', 'On: this example excludes the conversation from AI training. The conversation list below remains.', 'Включено: в примере этот диалог не используется для обучения ИИ. Список диалогов ниже остаётся.')
      : tr('꺼짐: 학습 사용 제외 설정을 끈 상태입니다. 대화 목록을 지우는 기능과는 달라요.', 'Off: training exclusion is turned off in this example. This is separate from deleting conversations.', 'Выключено: исключение из обучения отключено в примере. Это отдельная настройка, не удаление диалогов.');
  }

  function privacyPreview() {
    const preview = $('ux-privacy-preview');
    if (!preview) return;
    preview.innerHTML = '<h4>' + tr('설정 후 무엇이 남을까요?', 'What remains after each action?', 'Что остаётся после действия?') + '</h4><p class="ux-guide-example-label">' + tr('아래 내용은 연습용 가상 데이터입니다.', 'The items below are fictional practice data.', 'Ниже — вымышленные учебные данные.') + '</p><div class="ux-guide-data-grid"><div><strong>' + tr('추천 취향', 'Recommendation preference', 'Предпочтение для рекомендаций') + '</strong><p id="ux-privacy-preference">' + (privacy.reset ? tr('선택한 취향 없음', 'No preference selected', 'Предпочтение не выбрано') : tr('선택한 취향: 한국어 단어 연습', 'Selected: Korean vocabulary practice', 'Выбрано: практика корейских слов')) + '</p></div><div><strong>' + tr('예시 대화 목록', 'Example conversations', 'Учебные диалоги') + '</strong><p id="ux-privacy-history">' + (privacy.deleted ? tr('대화 0개 · 목록이 비었어요.', '0 conversations · The list is empty.', '0 диалогов · Список пуст.') : tr('대화 2개 · 공부 계획 / 공지 번역', '2 conversations · Study plan / Notice translation', '2 диалога · План учёбы / Перевод объявления')) + '</p></div></div><div class="ux-guide-confirm"' + (privacy.confirming ? '' : ' hidden') + '><p>' + tr('아래 예시 대화 2개를 지울까요? 추천 취향은 남습니다.', 'Delete the two example conversations? The recommendation preference will remain.', 'Удалить два учебных диалога? Предпочтение для рекомендаций останется.') + '</p><div class="ux-guide-actions"><button type="button" data-privacy-action="confirm">' + tr('예시 대화 지우기', 'Delete example conversations', 'Удалить учебные диалоги') + '</button><button type="button" data-privacy-action="cancel">' + tr('취소', 'Cancel', 'Отмена') + '</button></div></div><p id="ux-privacy-result" class="ux-guide-live-result" role="status"></p><button type="button" class="ux-guide-text-button" data-privacy-action="restore">' + tr('예시 처음으로', 'Restore the example', 'Вернуть исходный пример') + '</button>';
    const result = $('ux-privacy-result');
    if (privacy.action === 'reset') result.textContent = tr('추천 취향만 초기화했습니다. 대화 목록은 바꾸지 않았어요.', 'Only the recommendation preference was reset. The conversation list was not changed.', 'Сброшено только предпочтение для рекомендаций. Список диалогов не изменился.');
    if (privacy.action === 'delete') result.textContent = tr('예시 대화 목록을 비웠습니다. 추천 취향은 바꾸지 않았어요.', 'The example conversation list was emptied. The recommendation preference was not changed.', 'Список учебных диалогов очищен. Предпочтение для рекомендаций не изменилось.');
    if (privacy.action === 'restore') result.textContent = tr('연습용 취향과 대화 2개를 다시 표시했습니다.', 'The practice preference and two conversations have been restored.', 'Учебное предпочтение и два диалога восстановлены.');
  }

  function privacyDemo() {
    if (page !== 'week11') return;
    const settings = q('#lesson-content .mock-settings');
    const toggle = settings && settings.querySelector('.toggle-switch');
    if (!toggle) return;
    if (!$('ux-privacy-switch-state')) {
      const control = document.createElement('div');
      control.className = 'ux-guide-switch-control';
      toggle.before(control);
      control.appendChild(toggle);
      const state = document.createElement('span');
      state.id = 'ux-privacy-switch-state';
      state.className = 'ux-guide-switch-state';
      control.appendChild(state);
      const effect = document.createElement('p');
      effect.id = 'ux-privacy-effect';
      effect.className = 'ux-guide-privacy-effect';
      effect.setAttribute('role', 'status');
      toggle.closest('.setting-row').after(effect);
      const preview = document.createElement('section');
      preview.id = 'ux-privacy-preview';
      preview.className = 'ux-guide-privacy-preview';
      settings.appendChild(preview);
      preview.addEventListener('click', event => {
        const button = event.target.closest('button[data-privacy-action]');
        if (!button) return;
        if (button.dataset.privacyAction === 'confirm') {privacy.deleted = true; privacy.confirming = false; privacy.action = 'delete';}
        if (button.dataset.privacyAction === 'cancel') {privacy.confirming = false; privacy.action = '';}
        if (button.dataset.privacyAction === 'restore') {privacy.reset = false; privacy.deleted = false; privacy.confirming = false; privacy.action = 'restore';}
        privacyPreview();
        q('[data-key="ctrl-btn-del"]').focus({preventScroll: true});
      });
    }
    toggle.setAttribute('aria-describedby', 'ux-privacy-effect');
    window.toggleSwitch = function () {privacy.excluded = !privacy.excluded; privacyStatus();};
    toggle.removeAttribute('onclick');
    if (!bound.has(toggle)) {
      bound.add(toggle);
      toggle.addEventListener('click', () => window.toggleSwitch(toggle));
    }
    [['ctrl-btn-reset', 'reset'], ['ctrl-btn-del', 'delete']].forEach(([key, action]) => {
      const button = settings.querySelector('[data-key="' + key + '"]');
      button.removeAttribute('onclick');
      if (bound.has(button)) return;
      bound.add(button);
      button.addEventListener('click', () => {
        if (action === 'reset') {privacy.reset = true; privacy.action = 'reset'; privacy.confirming = false;}
        else if (privacy.deleted) {privacy.action = 'delete'; privacy.confirming = false;}
        else {privacy.confirming = true; privacy.action = '';}
        privacyPreview();
        if (privacy.confirming) q('[data-privacy-action="confirm"]').focus({preventScroll: true});
      });
    });
    privacyStatus();
    privacyPreview();
  }

  function refresh() {
    firstExample();
    sourceComparison();
    shareDemo();
    privacyDemo();
    if (window.UXVisual) window.UXVisual.refresh();
  }
  const previousSetLang = window.setLang;
  if (typeof previousSetLang === 'function') {
    window.setLang = function (value) {previousSetLang(value); refresh();};
  }
  window.uxCourseGuideRefresh = refresh;
  refresh();
})();
