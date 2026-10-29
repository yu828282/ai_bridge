# 구조 통일 및 복귀 버튼 변경

- `index.html`, `intro_ai.html`, `python.html`, `web.html`: 루트 HTML.
- `ux/index.html`: 14개 주차 템플릿을 한 페이지에서 전환하는 UX 전용 진입점. 기존 `ux/index.html?week=week13` 같은 주소를 유지하기 위해 위치를 변경하지 않았습니다.
- `css/common.css`: 모든 강의가 쓰는 공통 디자인 및 포트폴리오 복귀 링크 스타일.
- `css/{index,intro_ai,python,web,ux}.css`: 강의별 디자인. UX의 기존 `ux/style.css`를 `css/ux.css`로 이동.
- `js/ux.js`: UX 메뉴, 번역, 주차별 인터랙션. 기존 `ux/app.js`에서 이동.
- `js/common/menu.js`, `js/data_*/...`: 기존 강의 기능은 유지.

## 추가 작업
- AI·Python·Web의 데스크톱 헤더에 `← Portfolio`를 추가하여 `index.html#projects`로 연결.
- 모바일에서는 메뉴 내부에 동일한 복귀 링크를 배치.
- 복귀 링크 CSS는 `css/common.css` 한 곳에서 관리.
- UX URL 및 1~14주차 주차 선택을 기존대로 유지.

## 확인 방법
1. `index.html`에서 4개 강의 진입.
2. AI/Python/Web 데스크톱 헤더 및 모바일 햄버거 메뉴의 복귀 링크 확인.
3. UX 8주차(`ux/index.html?week=week08`)와 13주차(`ux/index.html?week=week13`) 직접 접속.
4. UX 실습·언어 선택을 확인.
