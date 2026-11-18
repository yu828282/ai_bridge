# AI Bridge — 

## 1. 설명
웹 기초, Python, AI 기초, AI 서비스 UX를 학습하는 정적 웹 프로젝트입니다. Web·Python은 한국어·영어·러시아어 이론과 실습을 제공하며, UX는 기존 주차별 강의와 인터랙션을 유지합니다.

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


## 4. 실습 데이터

- Web·Python 작성 코드는 브라우저 저장소를 사용하는 기존 레슨별 키를 유지합니다. 같은 브라우저·같은 주소에서 다시 열 때 복원됩니다. 브라우저 데이터 삭제, 시크릿 모드 종료, 도메인·포트 변경 등으로 저장본을 읽지 못할 수 있습니다.
- Python의 `input()` 값은 코드 실행 전에 입력 칸에 한 줄씩 작성합니다. 반복문 실습은 종료 조건에 필요한 입력도 함께 넣습니다.
- Python의 예상 결과는 **제공된 시작 예제와 입력 예시 기준**입니다. 코드를 바꾸거나 다른 값을 입력하면 결과도 달라질 수 있습니다.
- `worker.js`는 Python 실행·중지·시간 제한에 사용하는 필수 파일입니다. 
