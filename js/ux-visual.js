/* UX Studio visual layer: recognizable example emoji, explicit action icons and device chrome. */
(function () {
  'use strict';
  if (!window.UXIcons) return;
  var emojiPattern = /\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\p{Emoji_Modifier})?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\p{Emoji_Modifier})?)*/gu;
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
      if (!p || p.closest('script,style,textarea,svg,.ux-emoji-icon,.ux-native-emoji,[data-ux-icon],[contenteditable="true"]')) continue;
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
        var name=semanticActionIcon(p);
        var icon=name?spanIcon(name,'ux-emoji-icon ux-control-icon'):illustration(m[0]);
        if(name)icon.setAttribute('data-ux-action-icon',name);
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
  var pending=false, observer;
  function paint() {
    pending=false;
    if(observer)observer.disconnect();
    hydrateIcons(document.body);
    replaceEmojiText(document.body);
    decorateGuiFolders();
    addPhoneChrome();
    decorateChrome();
    if(observer)observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  }
  function schedule() { if(!pending){pending=true;requestAnimationFrame(paint);} }
  observer=new MutationObserver(schedule);
  paint();
  window.addEventListener('ux:themechange',function(){
    var old=document.querySelector('#ux-theme-toggle .ux-mode-icon');if(old)old.remove();schedule();
  });
  window.UXVisual={refresh:paint};
})();
