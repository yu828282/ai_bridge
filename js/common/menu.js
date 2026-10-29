// js/common/menu.js

(function () {
    function initMobileMenu(options) {
        const button = options.button;
        const menu = options.menu;
        const backdrop = options.backdrop;
        const breakpoint = options.breakpoint || 768;

        function openMenu() {
            if (menu) menu.classList.add('open');
            if (backdrop) backdrop.classList.add('show');
            if (button) {
                button.classList.add('open');
                button.setAttribute('aria-expanded', 'true');
            }
            document.body.classList.add('menu-open');
        }

        function closeMenu() {
            if (menu) menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('show');
            if (button) {
                button.classList.remove('open');
                button.setAttribute('aria-expanded', 'false');
            }
            document.body.classList.remove('menu-open');
        }

        function toggleMenu() {
            if (!menu) return;

            if (menu.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        if (button) {
            button.addEventListener('click', toggleMenu);
        }

        if (backdrop) {
            backdrop.addEventListener('click', closeMenu);
        }

        window.addEventListener('resize', function () {
            if (window.innerWidth > breakpoint) {
                closeMenu();
            }
        });

        return {
            openMenu,
            closeMenu,
            toggleMenu
        };
    }

    window.initMobileMenu = initMobileMenu;

    const introMenuController = initMobileMenu({
        button: document.getElementById('hamburgerBtn'),
        menu: document.getElementById('mobileMenu'),
        backdrop: document.getElementById('mobileBackdrop'),
        breakpoint: 768
    });

    window.menuController = introMenuController;
    window.closeMobileMenu = introMenuController.closeMenu;
})();

// Portfolio home uses the same shared menu file, instead of page-only inline JS.
(function () {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const toggle = document.querySelector('[aria-controls="site-nav"]');
  window.closeMenu = function (id) {
    const element = document.getElementById(id);
    const button = document.querySelector('[aria-controls="' + id + '"]');
    if (element) element.classList.remove('open');
    if (button) button.setAttribute('aria-expanded', 'false');
  };
  window.toggleMenu = function (id, button) {
    const element = document.getElementById(id);
    if (!element) return;
    const isOpen = element.classList.toggle('open');
    if (button) button.setAttribute('aria-expanded', String(isOpen));
  };
  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && toggle && !toggle.contains(event.target)) {
      window.closeMenu('site-nav');
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') window.closeMenu('site-nav');
  });
})();

// Shared keyboard close behaviour for the existing mobile drawer components.
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && typeof window.closeMobileMenu === 'function') {
    window.closeMobileMenu();
  }
});

// For Python/Web drawers, whose click handlers live in their own course script.
document.addEventListener('keydown', function (event) {
  if (event.key !== 'Escape') return;
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.classList.remove('open');
  const backdrop = document.getElementById('mobile-backdrop');
  if (backdrop) backdrop.classList.remove('show');
  const button = document.getElementById('hamburger-btn');
  if (button) { button.classList.remove('open'); button.setAttribute('aria-expanded','false'); }
  document.body.classList.remove('menu-open');
});
