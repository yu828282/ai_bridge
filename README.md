# AI Bridge — 최종 정리 구조 (Stage 1~5)

## 로컬 실행

프로젝트 루트에서 `python -m http.server 8000` 또는 VS Code Live Server로 실행하고 `http://localhost:8000/index.html`에 접속하세요.

* 포트폴리오: `index.html`
* AI 기초: `intro_ai.html`
* Python: `python.html`
* Web: `web.html`
* UX Studio: `ux/index.html` (`?week=week01` ~ `?week=week14`)
* Week 8은 중간고사 기간의 선택형 보너스 자료이며, Week 13은 AI 사용성 평가와 자가 진단 자료입니다.
* 이전 주소 `lab/index.html`, `lab/intro_ai.html`, `lab/python.html`, `lab/web.html`로 접속하면 최신 페이지로 자동 이동합니다.

## 최종 파일 구조

```text
index.html
intro_ai.html
python.html
web.html
ux/
  index.html           # UX 14주차 통합 페이지
  README.md
css/
  common.css
  index.css
  intro_ai.css
  python.css
  web.css
  ux.css
js/
  common/menu.js
  data_ai/translations.js
  data_python/lessons.js
  data_python/translations.js
  data_python/python.js
  data_python/worker.js
  data_web/lessons.js
  data_web/web.js
  ux.js
lab/                  # 오래된 접속 링크 호환용 이동 페이지만 유지
  index.html
  intro_ai.html
  python.html
  web.html
```

## 기존 단계 기능 유지

- 1단계: UX 7주차 역할 카드 번역, Python/Web 언어 속성 반영
- 2단계: Python/Web 레슨별 작업 코드 로컬 저장, 언어 전환 시 코드 유지, Web 들여쓰기 키보드 개선
- 3단계: Python Web Worker, 10초 실행 제한, 중지/복구, input 값 사전 입력
- 4단계: CSS 반응형, 좁은 화면 카드/메뉴 가로 넘침 보완
- 5단계: 최신 운영 파일 단일화, 사용하지 않는 이전 버전 제거 및 기존 `lab/` URL 포워딩

## 중요

- 1~4단계 패치를 이미 적용했다면 5단계 패치로 최신 코드를 덮어쓰지 않습니다. 5단계는 콘텐츠/실습 코드와 CSS를 변경하지 않습니다.
- `file://` 직접 열기는 Web ES 모듈과 Python Worker에서 문제가 생길 수 있으므로 서버로 실행하세요.
- `python.html`은 Pyodide CDN에 접근해야 실제 Python 코드를 실행할 수 있습니다.
- `localStorage`를 사용한 코드 저장은 동일 브라우저/동일 출처에서만 유지됩니다.
- 오래된 `lab/` 내 JS/CSS 파일의 URL은 유지하지 않습니다. 이 파일들은 어떤 최신 HTML에서도 참조하지 않습니다.
