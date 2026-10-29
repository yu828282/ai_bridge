# UX Studio — 1 HTML · 1 CSS · 1 JS

- `index.html`: 1~14주차 학습 화면 14개를 하나의 HTML 템플릿으로 구성합니다.
- `app.js`: 주차 이동, 언어 전환, 각 주차별 실습 기능을 관리합니다.
- `style.css`: 공통 UX 스타일과 주차별 실습 스타일. 모든 카드는 넓은 공통 패딩을 사용합니다.
- 8주차는 **중간고사 기간**으로 정규 강의자료가 없습니다. 대신 기존 Bonus 실습을 `week08`로 배치했습니다.
- 13주차는 사용자가 제공한 `week13.html` 원문을 3개 언어 번역 및 실습과 함께 통합했습니다.
- 포트폴리오 홈 `../index.html`에서 UX Studio에 진입합니다.

## 주요 링크
- `ux/index.html` — 첫 주차
- `ux/index.html?week=week08` — 중간고사·선택 보너스 UI 실습
- `ux/index.html?week=week13` — AI 사용성 평가 및 자가 진단

## CSS 여백 조절
`style.css` 마지막 부분의 `--ux-card-space`, `--ux-inner-space` 변수를 조절하면 14개 모든 강의 페이지의 카드/박스 여백을 한 번에 변경합니다. 모바일 전용 값은 하단 `@media`에서 정의합니다.

## 로컬 실행
루트 디렉터리에서 `python -m http.server 8000` 후 `http://localhost:8000/ux/index.html` 접속하세요.
