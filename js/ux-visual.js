/* UX Studio visual layer: meaningful SVG controls, natural example illustrations and beginner-friendly grouping. */
(function () {
  'use strict';
  if (!window.UXIcons) return;
  var emojiPattern = /(?:[\u2610\u2611\u2612\u2713\u2714]|\p{Extended_Pictographic})(?:\uFE0F|\uFE0E)?(?:\p{Emoji_Modifier})?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\p{Emoji_Modifier})?)*/gu;
  var decorativeIcons = {
    '🎯':'bullseye','💡':'lightbulb','🎨':'grid','🛠':'gear','🔧':'gear','⏰':'clock','⏱':'stopwatch','⏳':'clock',
    '🚀':'rocket-takeoff','📚':'book','📖':'book','📘':'book','📊':'bar-chart','📈':'bar-chart',
    '🔄':'arrow-repeat','🪄':'stars','✨':'stars','💎':'boxes','⌨':'laptop','⚡':'lightning-charge','💬':'chat-square-dots',
    '🛡':'shield-check','🔒':'lock','🧩':'puzzle','👤':'person-circle','👥':'people','🌐':'globe','📝':'pencil',
    '📋':'clipboard','🔍':'search','🔔':'bell','📱':'phone','💻':'laptop','📷':'camera','📌':'bookmark',
    '⚠':'exclamation-triangle','❓':'question-circle','👉':'arrow-right','👈':'arrow-left'
  };
  var statusIcons = {'\u2705':'check-circle','\u2611':'check-circle','\u2714':'check-circle','\u2713':'check-circle','❌':'x-circle','\u2612':'x-circle','\u2610':'circle-fill'};
  function symbolKey(symbol) { return symbol.replace(/[\uFE0F\uFE0E]/g,''); }
  function decorativeIcon(parent, symbol) {
    var key=symbolKey(symbol);
    if(statusIcons[key])return statusIcons[key];
    if(parent.closest('h1,h2,h3,h4,h5,h6,.title-emoji,.comp-card-title,.action-btn,button,summary,.emoji-list,.qa-tag,.lesson-heading,.lesson-kicker'))return decorativeIcons[key]||null;
    return null;
  }
  function markup(name) { return window.UXIcons.get(name); }
  function spanIcon(name, cls) {
    var s=document.createElement('span');
    s.className=cls||'ux-emoji-icon';
    s.setAttribute('aria-hidden','true');
    s.innerHTML=markup(name);
    return s;
  }
  function illustration(symbol) {
    var s=document.createElement('span');
    s.className='ux-native-emoji';
    s.setAttribute('data-ux-emoji',symbol);
    s.textContent=symbol;
    return s;
  }
  function semanticActionIcon(parent) {
    if(document.body.dataset.page!=='week10')return null;
    if(parent.closest('.edit-icon'))return 'pencil';
    if(parent.closest('.stop-btn-mock'))return 'stop-fill';
    if(parent.closest('.report-link'))return 'flag';
    return null;
  }
  function replaceEmojiText(root) {
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    var candidates=[], node;
    while ((node=walker.nextNode())) {
      var p=node.parentElement;
      if (!p || p.closest('script,style,textarea,pre,code,kbd,svg,.ux-emoji-icon,.ux-native-emoji,[data-ux-icon],[contenteditable="true"]')) continue;
      emojiPattern.lastIndex=0;
      if (emojiPattern.test(node.nodeValue)) candidates.push(node);
    }
    candidates.forEach(function(t) {
      var p=t.parentElement;
      if (!p) return;
      if (p.closest('option,select,title')) return;
      var value=t.nodeValue, fragment=document.createDocumentFragment(), at=0;
      emojiPattern.lastIndex=0;
      var matches=Array.from(value.matchAll(emojiPattern));
      matches.forEach(function(m) {
        fragment.appendChild(document.createTextNode(value.slice(at,m.index)));
        var actionName=semanticActionIcon(p);
        var name=actionName||decorativeIcon(p,m[0]);
        var icon=name?spanIcon(name,'ux-emoji-icon ux-control-icon'):illustration(m[0]);
        if(actionName)icon.setAttribute('data-ux-action-icon',name);
        if(name)icon.setAttribute('data-ux-replaced-symbol',symbolKey(m[0]));
        fragment.appendChild(icon);
        at=m.index+m[0].length;
      });
      fragment.appendChild(document.createTextNode(value.slice(at)));
      t.replaceWith(fragment);
    });
  }
  function hydrateIcons(root) {
    root.querySelectorAll('[data-ux-icon]').forEach(function(el) {
      if (el.querySelector('svg.ux-icon')) return;
      el.innerHTML=markup(el.getAttribute('data-ux-icon'));
      el.setAttribute('aria-hidden','true');
    });
  }
  function decorateGuiFolders() {
    document.querySelectorAll('.gui-body .gui-btn-mock .ux-native-emoji').forEach(function(el) {
      if(!/^📁[\uFE0F\uFE0E]?$/.test(el.getAttribute('data-ux-emoji')||''))return;
      var folder=spanIcon('folder-fill','ux-emoji-icon ux-folder-example');
      folder.setAttribute('data-ux-emoji',el.getAttribute('data-ux-emoji'));
      el.replaceWith(folder);
    });
  }
  function addPhoneChrome() {
    var selector='.v3-er-phone,.v3-pb-phone,.proto-phone,.interactive-mockup,.chat-container,.mockup-window,.mock-chat,.chat-ui-frame,.mock-chat-wrapper,.permission-mock';
    var phones=Array.from(document.querySelectorAll(selector));
    document.querySelectorAll('.mockup-box').forEach(function(box){if(box.querySelector('.ai-header'))phones.push(box);});
    phones.forEach(function(phone) {
      if (phone.closest('#ux8-root') || phone.hasAttribute('data-ux-phone-ready')) return;
      if (phone.parentElement && phone.parentElement.closest('.ux-phone-frame')) return;
      phone.setAttribute('data-ux-phone-ready','true');
      phone.classList.add('ux-phone-frame');
      if(phone.matches('.proto-phone,.chat-ui-frame'))phone.classList.add('ux-phone-compact');
      var status=document.createElement('div');
      status.className='ux-phone-status';status.setAttribute('aria-hidden','true');
      status.innerHTML='<span class="ux-phone-time">9:41</span><span class="ux-phone-indicators">'+markup('reception-4')+markup('wifi')+markup('battery-full')+'</span>';
      var island=document.createElement('div');island.className='ux-phone-island';island.setAttribute('aria-hidden','true');
      var home=document.createElement('div');home.className='ux-phone-home';home.setAttribute('aria-hidden','true');
      phone.prepend(status);phone.append(island,home);
    });
  }
  function decorateChrome() {
    var names=['cpu','person-circle','layers','chat-square-dots','shield-check','hand-index-thumb','robot','lightning-charge','grid','check2-circle','lock','diagram-3','bar-chart','clipboard','book'];
    document.querySelectorAll('#course-nav a').forEach(function(link,i){
      if(!link.querySelector('.ux-nav-icon'))link.appendChild(spanIcon(names[i]||'book','ux-nav-icon'));
    });
    var toggle=document.getElementById('ux-theme-toggle');
    if(toggle&&!toggle.querySelector('.ux-mode-icon')) {
      toggle.prepend(spanIcon(document.documentElement.dataset.theme==='dark'?'sun':'moon','ux-mode-icon'));
    }
  }
  function plainTitleNumbers(el) {
    if(!el)return;
    var walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT), node;
    while((node=walker.nextNode())){
      if(node.parentElement.closest('svg,.ux-emoji-icon,.ux-native-emoji'))continue;
      var updated=node.nodeValue.replace(/^(\s*)(?:[1-6]\.\s*)/,'$1').replace(/^(더 해보기|Try later|Позже)\s*[12]\.\s*/,'');
      if(updated!==node.nodeValue)node.nodeValue=updated;
      if(updated.trim())break;
    }
  }
  function groupFigmaPractice() {
    if(document.body.dataset.page!=='week09')return;
    var content=document.getElementById('lesson-content');
    var grid=content&&content.querySelector('.comp-grid');
    if(!grid)return;
    var optional=document.getElementById('ux-figma-optional');
    if(!optional){
      var cards={};
      for(var n=1;n<=6;n++){
        var title=content.querySelector('[data-key="c'+n+'-title"]');
        if(title)cards[n]=title.closest('.comp-card');
      }
      if(!cards[2]||!cards[3]||!cards[5])return;
      // DOM order follows the beginner task; keyboard and screen-reader order agree.
      [5,1,4,6].forEach(function(n){if(cards[n])grid.appendChild(cards[n]);});
      optional=document.createElement('details');optional.id='ux-figma-optional';optional.className='ux-optional-practice';
      var summary=document.createElement('summary');summary.id='ux-figma-optional-title';optional.appendChild(summary);
      var optionalGrid=document.createElement('div');optionalGrid.className='comp-grid ux-optional-grid';
      optionalGrid.append(cards[2],cards[3]);optional.appendChild(optionalGrid);
      grid.insertAdjacentElement('afterend',optional);
    }
    var language=['ko','en','ru'].includes(document.documentElement.lang)?document.documentElement.lang:'en';
    if(optional.dataset.language!==language){
      optional.dataset.language=language;
      var labels={ko:['선택 연습','세 화면을 만든 뒤 열어보세요 · 간격 맞추기와 디자인 재사용'],en:['Optional practice','Open after making three screens · spacing and reusable designs'],ru:['Дополнительная практика','Откройте после трёх экранов · отступы и повторное использование']};
      var summary=optional.querySelector('summary');summary.replaceChildren();
      summary.appendChild(spanIcon('layers','ux-optional-icon'));
      var words=document.createElement('span'),title=document.createElement('strong'),hint=document.createElement('small');
      title.textContent=labels[language][0];hint.textContent=labels[language][1];words.append(title,hint);summary.appendChild(words);
      summary.appendChild(spanIcon('chevron-down','ux-optional-chevron'));
    }
    content.querySelectorAll('.comp-card-title').forEach(plainTitleNumbers);
  }
  function softenInlineAccents() {
    document.querySelectorAll('#lesson-content [style]').forEach(function(el){
      if(el.closest('#ux8-root')||el.matches('.ux-phone-frame,.proto-phone,.chat-ui-frame'))return;
      var sides=['left','right','top','bottom'];
      sides.forEach(function(side){
        var width=parseFloat(el.style.getPropertyValue('border-'+side+'-width'));
        if(width>=3){el.classList.add('ux-soft-callout');el.style.removeProperty('border-'+side);el.style.removeProperty('border-'+side+'-width');el.style.removeProperty('border-'+side+'-style');el.style.removeProperty('border-'+side+'-color');}
      });
      if(el.matches('.card'))el.style.removeProperty('border-top-color');
    });
  }
  function showTimeAsDuration() {
    if(document.body.dataset.page!=='week13')return;
    var title=document.querySelector('#lesson-content [data-key="m2-t"]');
    var box=title&&title.closest('.box');
    if(!box)return;
    box.classList.add('ux-duration-metric');
    var value=box.querySelector('.metric-fill');
    if(value&&!value.querySelector('.ux-duration-icon'))value.prepend(spanIcon('stopwatch','ux-duration-icon'));
  }
  function measureHeaderOffset() {
    var header=document.querySelector('.studio-header');
    if(header)document.documentElement.style.setProperty('--ux-header-offset',Math.ceil(header.getBoundingClientRect().height+20)+'px');
  }
  var pending=false, observer;
  function paint() {
    pending=false;
    measureHeaderOffset();
    if(observer)observer.disconnect();
    hydrateIcons(document.body);
    replaceEmojiText(document.body);
    decorateGuiFolders();
    addPhoneChrome();
    decorateChrome();
    groupFigmaPractice();
    softenInlineAccents();
    showTimeAsDuration();
    if(observer)observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  }
  function schedule() { if(!pending){pending=true;requestAnimationFrame(paint);} }
  observer=new MutationObserver(schedule);
  paint();
  window.addEventListener('ux:themechange',function(){
    var old=document.querySelector('#ux-theme-toggle .ux-mode-icon');if(old)old.remove();schedule();
  });
  var header=document.querySelector('.studio-header');
  if(window.ResizeObserver&&header)new ResizeObserver(measureHeaderOffset).observe(header);
  window.addEventListener('resize',measureHeaderOffset);
  window.UXVisual={refresh:paint};
})();
