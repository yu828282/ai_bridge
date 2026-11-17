/* Shared theme control; independent of the lesson's demonstration state. */
(function () {
  'use strict';
  const root = document.documentElement;
  const button = document.getElementById('ux-theme-toggle');
  if (!button) return;
  const words = {
    ko: { dark: '다크 모드', light: '라이트 모드', on: '다크 모드로 바꾸기', off: '라이트 모드로 바꾸기' },
    en: { dark: 'Dark mode', light: 'Light mode', on: 'Switch to dark mode', off: 'Switch to light mode' },
    ru: { dark: 'Тёмная тема', light: 'Светлая тема', on: 'Включить тёмную тему', off: 'Включить светлую тему' }
  };
  function refreshLabel() {
    const text = words[root.lang] || words.en;
    const dark = root.dataset.theme === 'dark';
    button.textContent = dark ? text.light : text.dark;
    button.setAttribute('aria-label', dark ? text.off : text.on);
    button.setAttribute('title', dark ? text.off : text.on);
    button.setAttribute('aria-pressed', String(dark));
  }
  function applyTheme(value, save) {
    const theme = value === 'dark' ? 'dark' : 'light';
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (save) {
      try { localStorage.setItem('ux-studio-theme', theme); } catch (_) { /* Theme works without storage. */ }
    }
    refreshLabel();
    window.dispatchEvent(new CustomEvent('ux:themechange', { detail: { theme } }));
  }
  button.addEventListener('click', function () { applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true); });
  const priorSetLang = window.setLang;
  if (typeof priorSetLang === 'function') {
    window.setLang = function () {
      const result = priorSetLang.apply(this, arguments);
      refreshLabel();
      return result;
    };
  }
  window.addEventListener('storage', function (event) {
    if (event.key === 'ux-studio-theme') applyTheme(event.newValue, false);
  });
  applyTheme(root.dataset.theme || 'light', false);
})();
