# Stage 5 — 중복 파일 정리 및 URL 호환

## 기준 진입점

- 포트폴리오 `index.html`
- AI 기초 `intro_ai.html`
- Python `python.html`
- Web `web.html`
- UX `ux/index.html` (1~14주차 쿼리 지원)

## 중복 제거 원칙

1. `lab/` 아래의 과거 CSS/JS는 운영 코드와 다르고 참조되지 않으므로 삭제합니다.
2. `lab/{index,intro_ai,python,web}.html`은 내용이 아닌 URL 호환용 리다이렉트로 교체합니다.
3. 루트의 AI 언어별 파일 3개는 `js/data_ai/translations.js`에 통합된 이전 산출물입니다.
4. 루트의 Web 언어별 파일 3개는 `js/data_web/lessons.js`에 통합된 이전 산출물입니다.
5. 기존 `ux/app.js`, `ux/style.css`는 사용되지 않고, 실제 페이지는 각각 `js/ux.js`, `css/ux.css`를 참조합니다.
6. 사용 중인 `js/data_python/worker.js`는 **삭제하면 안 됩니다.** 3단계부터 필수 실행 파일입니다.

## 적용 순서

1. 변경된 ZIP 압축을 프로젝트 루트에 해제합니다.
2. `python apply_stage5_cleanup.py --dry-run`으로 삭제 예상 목록을 확인합니다.
3. `python apply_stage5_cleanup.py --apply`로 사용하지 않는 파일만 삭제합니다.
4. `index.html`, `intro_ai.html`, `python.html`, `web.html`, `ux/index.html?week=week07` 접속 및 `lab/` 리다이렉트를 확인합니다.

삭제 작업은 원래 ZIP에 존재한 파일의 SHA-256과 일치하는 경우에만 수행합니다. 사용자가 별도로 수정한 파일은 건너뜁니다.
