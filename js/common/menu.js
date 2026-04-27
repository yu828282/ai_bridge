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