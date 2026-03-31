// AI 브릿지 UI 컨트롤러
(function() {
    // 1. 공용 메뉴 초기화
    const menuController = window.initMobileMenu({
        button: document.getElementById('hamburgerBtn'),
        menu: document.getElementById('mobileMenu'),
        backdrop: document.getElementById('mobileBackdrop'),
        breakpoint: 768
    });

    // 2. 페이지 전환 함수 (기존 로직 유지 + 메뉴 자동 닫기 추가)
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-container .nav-btn, .mobile-nav .nav-btn').forEach(b => b.classList.remove('active'));

        const targetPage = document.getElementById('page-' + pageId);
        if (targetPage) targetPage.classList.add('active');

        // 버튼 활성화 표시
        const dBtn = document.getElementById('btn-' + pageId);
        if (dBtn) dBtn.classList.add('active');
        const mBtn = document.querySelector(`.mobile-nav .nav-btn[data-mobile-page="${pageId}"]`);
        if (mBtn) mBtn.classList.add('active');

        // 중요: 페이지 선택 후 모바일 메뉴 자동 닫기
        menuController.closeMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 전역으로 함수 노출 (HTML onclick에서 사용 가능하게)
    window.showPage = showPage;
    window.menuController = menuController; // 필요 시 외부에서 접근 가능
})();

function initMobileMenu(options) {
    const button = options.button;
    const menu = options.menu;
    const backdrop = options.backdrop;
    const breakpoint = options.breakpoint || 768;

    function openMenu() {
        menu.classList.add('open');
        backdrop.classList.add('show');
        button.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        menu.classList.remove('open');
        backdrop.classList.remove('show');
        button.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }

    function toggleMenu() {
        if (menu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    if (button) button.addEventListener('click', toggleMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    window.addEventListener('resize', function () {
        if (window.innerWidth > breakpoint) {
            closeMenu();
        }
    });

    return { openMenu, closeMenu, toggleMenu };
}

window.initMobileMenu = initMobileMenu;
