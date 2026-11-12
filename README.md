# AI Bridge — 강의 탐색·UX 가독성 개선본

Web·Python의 원본 화면 구성과 검수된 교재·실습 기능을 유지합니다. 메인의 네 강의 카드는 제목·설명·버튼 어느 부분을 클릭해도 새 탭에서 열리며, 강의 화면의 포트폴리오 복귀 링크는 제거했습니다. 전체 페이지에 책 모양의 공통 파비콘을 적용하고 UX 글씨를 확대했습니다.

웹 기초, Python, AI 기초, AI 서비스 UX를 학습하는 정적 웹 프로젝트입니다. Web·Python은 한국어·영어·러시아어 이론과 실습을 제공하며, UX는 기존 주차별 강의와 인터랙션을 유지합니다.

## 1. 실행하기

ZIP을 새 폴더에 전부 풀어 주세요. HTML 파일만 다른 곳으로 옮기면 CSS·JavaScript 연결이 끊어집니다.

프로젝트 폴더에서 환경에 맞는 명령 하나를 실행합니다.

```bash
# macOS / Linux
python3 -m http.server 8000

# Windows
py -m http.server 8000
```

브라우저 주소창에 `http://localhost:8000/index.html`을 입력합니다. VS Code Live Server나 기존 정적 웹서버로 열어도 됩니다. 별도 빌드나 npm 설치는 필요하지 않습니다.

Web은 JavaScript 모듈을, Python은 Web Worker를 사용합니다. `file://`로 직접 여는 방식 대신 HTTP 서버에서 실행해 주세요. Python의 실제 코드 실행은 Pyodide CDN에 접속해야 하므로 인터넷 연결이 필요합니다. 이 패키지는 Python 엔진을 포함한 완전한 오프라인 패키지가 아닙니다.

## 2. 시작 페이지

| 파일 | 역할 |
|---|---|
| `index.html` | 포트폴리오와 강의 진입 화면 |
| `intro_ai.html` | 기존 AI 기초 강의 |
| `index_ux.html` | UX 강의의 유일한 본문 원본 |
| `web.html` | HTML·CSS·JavaScript 14개 레슨 |
| `python.html` | Python 26개 레슨 |

UX 주차는 `index_ux.html?week=week07&lang=ko`처럼 선택할 수 있습니다. 8주차는 중간고사 기간의 선택형 보너스 자료이며, 15주차는 기존 기말고사 안내 상태를 유지합니다.

## 3. 무엇을 어디서 수정하나요?

| 수정 내용 | 수정 파일 |
|---|---|
| Web 화면의 색상, 상단 메뉴, 이론·실습 배치 | `css/web.css` |
| Python 화면의 색상, 상단 메뉴, 이론·실습 배치 | `css/python.css` |
| 여러 강의에서 사용하는 기본 스타일 | `css/common.css` |
| 모든 페이지의 책 모양 파비콘 | `favicon.svg` |
| UX 글씨 크기, 색상, 카드 효과, 스마트폰 예시의 그림자 | `css/ux.css` |
| UX 강의 본문의 기본 HTML·주차 템플릿 | `index_ux.html` |
| UX 언어별 내용, 주차 전환, 실습 동작 | `js/ux.js` |
| Web의 3개 언어 이론·시작 코드·답안 | `js/data_web/lessons.js` |
| Web 언어·레슨 선택, 코드 저장, 답안, 미리보기 | `js/data_web/web.js` |
| Python의 3개 언어 이론·시작 코드·입력 예시·예상 결과·답안 | `js/data_python/lessons.js` |
| Python 화면의 3개 언어 문구 | `js/data_python/translations.js` |
| Python 레슨 선택, 코드 저장, 실행·정지, 답안 | `js/data_python/python.js` |
| Python 실제 실행 엔진과 입력·출력 처리 | `js/data_python/worker.js` |
| 공통 모바일 메뉴 | `js/common/menu.js` |
| 기존 AI 기초 내용·번역 | `intro_ai.html`, `js/data_ai/translations.js` |

Web·Python은 사용자가 제공한 원본의 상단 메뉴와 이론·실습 2열 화면을 기준으로 관리합니다. 화면 구조를 크게 바꾸지 않고 필요한 부분만 수정합니다. UX의 CSS·JavaScript는 외부 파일 한 곳에서 관리합니다.

## 4. 폴더 구조

```text
index.html
intro_ai.html
index_ux.html
web.html
python.html
favicon.svg
README.md
REVIEW_REPORT.md
UX_STUDENT_REVIEW.md
css/
  common.css
  index.css
  intro_ai.css
  web.css
  python.css
  ux.css
js/
  common/menu.js
  data_ai/translations.js
  data_web/lessons.js
  data_web/web.js
  data_python/lessons.js
  data_python/translations.js
  data_python/python.js
  data_python/worker.js
  ux.js
lab/
  index.html
  intro_ai.html
  web.html
  python.html
ux/
  index.html
  week01.html ... week15.html
  bonus.html
```

`UX_STUDENT_REVIEW.md`는 첨부본에 포함되어 있던 과거 검수 기록입니다. 이번 수정본의 실제 브라우저 검사 결과를 의미하지 않습니다. 최종 패키지의 `REVIEW_REPORT.md`에서 이번 작업의 변경 사항과 검증 범위를 확인할 수 있습니다.

## 5. 이전 주소 호환

`lab/`와 `ux/`의 작은 HTML 파일은 과거 북마크·수업 공유 주소를 위한 이동 페이지입니다. 강의 내용을 복사해 두지 않았습니다.

| 이전 주소 | 현재 주소 |
|---|---|
| `lab/index.html` | `index.html` |
| `lab/intro_ai.html` | `intro_ai.html` |
| `lab/web.html` | `web.html` |
| `lab/python.html` | `python.html` |
| `ux/index.html` | `index_ux.html` |
| `ux/week07.html?lang=ru#section` | `index_ux.html?lang=ru&week=week07#section` |
| `ux/bonus.html` | `index_ux.html?week=week08` |
| `ux/week15.html` | `index_ux.html?week=week15` |

JavaScript가 켜져 있으면 UX 이동 페이지는 언어와 다른 쿼리 값, `#` 뒤의 위치를 보존합니다. 주차별 파일은 해당 주차를 선택합니다. JavaScript가 꺼진 경우에는 표시되는 링크로 이동할 수 있습니다.

## 6. 실습 데이터

- Web·Python 작성 코드는 브라우저 저장소를 사용하는 기존 레슨별 키를 유지합니다. 같은 브라우저·같은 주소에서 다시 열 때 복원됩니다. 브라우저 데이터 삭제, 시크릿 모드 종료, 도메인·포트 변경 등으로 저장본을 읽지 못할 수 있습니다.
- Python의 `input()` 값은 코드 실행 전에 입력 칸에 한 줄씩 작성합니다. 반복문 실습은 종료 조건에 필요한 입력도 함께 넣습니다.
- Python의 예상 결과는 **제공된 시작 예제와 입력 예시 기준**입니다. 코드를 바꾸거나 다른 값을 입력하면 결과도 달라질 수 있습니다.
- `worker.js`는 Python 실행·중지·시간 제한에 사용하는 필수 파일입니다. 파일 수를 줄이려고 삭제하거나 메인 UI 코드에 합치지 않습니다.

## 7. 이번 구조 정리와 검증 범위

참조되지 않는 과거 `lab/css`, `lab/js`, 분리된 언어별 데이터, 이전 UX 실행·스타일 파일을 정리했습니다. 후속 피드백에 따라 Web·Python 화면은 원본 HTML·전용 CSS를 기준으로 복원했습니다. 공통 디자인으로 바꾸었던 `learning.css`는 사용하지 않습니다. 중복 구조 설명 문서는 이 README로 통합했습니다.

구조 검증은 로컬 파일 참조, JavaScript 구문, UX 본문 보존, 이전 주소의 주차·언어·해시 전달을 소스와 Node 실행으로 확인합니다. 이번 실행 환경에서 실제 브라우저 화면을 열지 못했으므로 픽셀 배치, 애니메이션 재생, CDN을 통한 Python 엔진 로딩까지 확인했다는 의미는 아닙니다. 배포 후에는 데스크톱과 스마트폰에서 메뉴, 실행, 답안, 언어 변경을 확인해 주세요.
