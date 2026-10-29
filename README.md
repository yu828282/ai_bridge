# AI Learning Portfolio — 정리된 배포 구조

## 실행

1. 압축을 푼 **루트 폴더**에서 `python -m http.server 8000` 실행 (또는 VS Code Live Server).
2. 브라우저에서 `http://localhost:8000/index.html` 접속.
3. UX 프로젝트는 `ux/index.html`, 특정 주차는 `ux/index.html?week=week09`로 접속.

**주의:** `file://`로 HTML을 직접 열면 `web.html`의 ES module 로딩이 브라우저 보안 정책으로 차단될 수 있습니다. Python 실습은 Pyodide CDN 접속이 필요합니다.

## 파일 구조

```text
index.html                     Portfolio home + UX project card
intro_ai.html                  AI introduction (12 chapters)
python.html                    Browser Python lessons
web.html                       HTML/CSS/JavaScript lessons
ux/index.html                  UX course: 14 lecture templates, one HTML
css/common.css                 Shared learning-site styles
css/index.css                  Portfolio-specific styles
css/intro_ai.css               AI-specific styles
css/python.css                 Python-specific styles
css/web.css                    Web-specific styles
css/ux.css                   UX common styles + scoped demos
js/common/menu.js              Shared mobile navigation and portfolio menu
js/data_ai/translations.js     Three AI language dictionaries
js/data_python/{lessons,translations,python}.js
js/data_web/{lessons,web}.js    ES module with three Web language packs
js/ux.js                      UX page router + multilingual demos
```

## 변경 개요

- UX 주차별 HTML 13개 → 템플릿이 들어간 HTML 1개. 주차별 직접 링크(`?week=...`) 사용.
- UX 헤더/네비게이션/카드 톤을 `intro_ai` 계열의 어두운 네이비·블루 스타일로 맞춤.
- AI 3개 언어 JS → 1개, Web 3개 언어 JS → 1개.
- Intro AI·Python·Web에서 정확히 동일했던 공통 CSS 규칙을 `css/common.css`로 옮김.
- UX의 반복된 CSS 규칙을 공통 셀렉터로 통합.
- 기존 Python 코드에서 참조되지 않는 worker.js 파일 삭제.
- 2주차 영어 과제 안내 문자열 오류, 일부 UX 데모 영문/러시아어 미번역, 모의 출처의 검증 주장 수정.
- Web 코드 실행 iframe에 `sandbox="allow-scripts"` 추가.
- Python 엔진 로딩 실패 시 다국어 안내 추가.

## 테스트 / 검토

- `UX_STUDENT_REVIEW.md`: 외국인 신입 학습자 기준 개선점 및 검증 한계.
- UX 총 13개 모듈에 대해 기본 렌더링과 한국어·영어·러시아어 전환, 주요 클릭 이벤트를 테스트했습니다.
- 실제 외부 서비스(Figma, MS Teams, Pyodide CDN)에 대한 온라인 연동 검증은 수행하지 않았습니다.
- 8주차는 중간고사 기간이므로 기존 보너스 실습을 8주차 선택형 자료로 배치했습니다. 제공받은 13주차 강의자료도 추가했습니다.

## UX 강의 추가 방법

1. `ux/index.html` 아래에 `<template id="lesson-weekXX"> ... </template>` 추가.
2. `js/ux.js` 상단 `pages` 배열에 강의 제목 및 3개 언어 제목 추가.
3. 인터랙티브 기능이 필요하면 `js/ux.js` 안의 `if (document.body.dataset.page === 'weekXX')` 블록 추가.
4. 해당 주차만의 CSS는 `css/ux.css`에 `body[data-page="weekXX"]`로 범위를 제한.

## 최신 업데이트 — Week 8 / Week 13 및 여백
- 8주차: 중간고사 기간의 선택형 보너스 컴포넌트 실습. `?week=week08`
- 13주차: AI Usability Testing & Self-Audit, 3개 언어와 우선순위 매트릭스 등 실습 통합. `?week=week13`
- 강의 탐색: 1~14주차, 총 14개 주차 화면. `css/ux.css` 하단의 2개 CSS 변수로 전체 카드 및 하위 박스 여백 통일.
