/* Web course: consolidated ES module language lessons (KO/EN/RU). */
export const lessons_ko = {
    status: "준비 완료",
    brandTitle: "HTML Learning Center",
    brandSubtitle: "International Students Web Practice",
    editorTitle: "실습 공간", 
    run: "실행 ▶",
    reset: "초기화",
    answer: "답안 예시",
    previewTitle: "실행 결과 미리보기",
    lessons: [
      {
        id: "lesson1",
        chip: "Lesson 1",
        navTitle: "1강. HTML 기초",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>나의 첫 웹페이지</title>
</head>
<body>
  <h1>안녕하세요</h1>
  <p>이것은 내가 만든 첫 웹페이지입니다.</p>
</body>
</html>`,
        answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>자기소개 페이지</title>
</head>
<body>
  <h1>안녕하세요</h1>
  <p>제 이름은 홍길동입니다.</p>
  <p>저는 웹사이트를 배우고 있습니다.</p>
  <p>앞으로 직접 웹페이지를 만들고 싶습니다.</p>
</body>
</html>`,
        lessonHtml: `
          <h2>핵심 이론</h2>
          <p><strong>HTML</strong>은 웹페이지의 구조를 만드는 언어입니다.</p>
          <p><strong>CSS</strong>는 웹페이지를 꾸미는 언어입니다.</p>
          <p><strong>JavaScript</strong>는 웹페이지에 동작을 넣는 언어입니다.</p>

          <div class="problem-area">
            <span class="problem-title">쉽게 이해하기</span>
            <p>웹페이지를 사람에 비유하면:</p>
            <ul>
              <li>HTML = 뼈대</li>
              <li>CSS = 옷, 색상, 꾸미기</li>
              <li>JavaScript = 움직임, 기능</li>
            </ul>
          </div>

          <p>우리가 오늘 직접 다룰 것은 <strong>HTML</strong>입니다.</p>

          <h2>실습 1. 첫 HTML 파일 만들기</h2>
          <p>오른쪽 코드 창에 기본 HTML 코드가 들어 있습니다.</p>
          <ol>
            <li><code>&lt;h1&gt;</code> 안의 제목을 바꿔보세요.</li>
            <li><code>&lt;p&gt;</code> 안의 문장을 자기소개 문장으로 바꿔보세요.</li>
            <li><strong>실행</strong> 버튼을 눌러 결과를 확인하세요.</li>
          </ol>
          <span class="theory-callout">브라우저 화면이 바뀌면 성공입니다.</span>

          <h2>실습 2. 자기소개 문장 추가하기</h2>
          <p><code>&lt;p&gt;</code> 태그를 추가해서 자기소개를 3줄 이상 작성해보세요.</p>
          <ul>
            <li>이름</li>
            <li>나이</li>
            <li>관심 분야</li>
            <li>목표</li>
          </ul>

          <div class="problem-area">
            <span class="problem-title">실습 미션</span>
            <p>문장 3개 이상을 직접 추가한 뒤 실행해보세요.</p>
          </div>
        `
      },
      {
        id: "lesson2",
        chip: "Lesson 2",
        navTitle: "2강. HTML 기본 태그",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>나의 소개</title>
</head>
<body>
  <h1>자기소개</h1>
  <p>안녕하세요. 저는 학생입니다.</p>
  <p>웹사이트 만드는 법을 배우고 있습니다.</p>
</body>
</html>`,
        answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>민수의 소개</title>
</head>
<body>
  <h1>민수의 자기소개</h1>
  <p>안녕하세요. 제 이름은 민수입니다.</p>
  <p>저는 20살입니다.</p>
  <p>저는 게임과 웹디자인에 관심이 있습니다.</p>

  <h2>좋아하는 것</h2>
  <ul>
    <li>음악 듣기</li>
    <li>영화 보기</li>
    <li>코딩 배우기</li>
  </ul>

  <p><a href="https://www.google.com" target="_blank">좋아하는 사이트 방문하기</a></p>
</body>
</html>`,
        lessonHtml: `
          <h2>핵심 이론</h2>
          <p>이번 시간에는 자주 사용하는 <strong>HTML 기본 태그</strong>를 배웁니다.</p>
          <p>대표적으로 제목 태그, 문단 태그, 목록 태그, 링크 태그를 사용합니다.</p>

          <div class="problem-area">
            <span class="problem-title">중요 태그</span>
            <ul>
              <li><code>&lt;h1&gt; ~ &lt;h6&gt;</code> : 제목</li>
              <li><code>&lt;p&gt;</code> : 문단</li>
              <li><code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code> : 목록</li>
              <li><code>&lt;a&gt;</code> : 링크</li>
            </ul>
          </div>

          <h2>실습 1. 제목과 문단 만들기</h2>
          <p>오른쪽 코드에서 제목과 문단 내용을 자기소개 형식으로 바꿔보세요.</p>
          <ol>
            <li><code>&lt;title&gt;</code>을 자신의 소개 제목으로 바꾸기</li>
            <li><code>&lt;h1&gt;</code>을 자신의 이름이 들어가게 바꾸기</li>
            <li><code>&lt;p&gt;</code>를 2개 이상 써보기</li>
          </ol>
          <span class="theory-callout">제목은 크게, 문단은 설명처럼 보이면 잘 작성된 것입니다.</span>

          <h2>실습 2. 목록과 링크 추가하기</h2>
          <p>이번에는 좋아하는 것 3개를 목록으로 작성하고, 링크도 하나 추가해보세요.</p>
          <ul>
            <li>좋아하는 음식</li>
            <li>좋아하는 취미</li>
            <li>좋아하는 사이트</li>
          </ul>

          <div class="problem-area">
            <span class="problem-title">실습 미션</span>
            <p><code>&lt;ul&gt;</code>과 <code>&lt;a&gt;</code>를 직접 추가해서 실행해보세요.</p>
          </div>
        `
      },
      {
  id: "lesson3",
  chip: "Lesson 3",
  navTitle: "3강. HTML 문서 구조와 시맨틱 태그",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>나의 웹사이트</title>
</head>
<body>
  <h1>나의 웹사이트</h1>
  <p>이곳은 나의 첫 페이지입니다.</p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>나의 웹사이트</title>
</head>
<body>
  <header>
    <h1>민수의 웹사이트</h1>
  </header>

  <nav>
    <a href="#">홈</a>
    <a href="#">소개</a>
    <a href="#">연락처</a>
  </nav>

  <main>
    <section>
      <h2>자기소개</h2>
      <p>안녕하세요. 저는 민수입니다.</p>
      <p>저는 웹사이트 만드는 법을 배우고 있습니다.</p>
    </section>
  </main>

  <footer>
    <p>© 2026 민수</p>
  </footer>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 <strong>HTML 문서의 전체 구조</strong>와 <strong>시맨틱 태그</strong>를 배웁니다.</p>
    <p>웹페이지는 단순히 글만 넣는 것이 아니라, 각 부분의 역할에 맞게 구조를 나누는 것이 중요합니다.</p>

    <div class="problem-area">
      <span class="problem-title">중요 태그</span>
      <ul>
        <li><code>&lt;header&gt;</code> : 페이지의 제목 영역</li>
        <li><code>&lt;nav&gt;</code> : 메뉴 영역</li>
        <li><code>&lt;main&gt;</code> : 핵심 내용 영역</li>
        <li><code>&lt;section&gt;</code> : 주제별 내용 묶음</li>
        <li><code>&lt;footer&gt;</code> : 맨 아래 정보 영역</li>
      </ul>
    </div>

    <p>이런 태그를 사용하면 사람이 코드를 읽기 쉽고, 웹페이지 구조도 더 명확해집니다.</p>

    <h2>실습 1. 웹사이트 기본 구조 만들기</h2>
    <p>오른쪽 코드에 <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>를 추가해보세요.</p>
    <ol>
      <li>제목 영역 만들기</li>
      <li>메뉴 2~3개 넣기</li>
      <li>본문에 자기소개 넣기</li>
    </ol>
    <span class="theory-callout">웹사이트를 여러 구역으로 나누는 것이 이번 시간의 핵심입니다.</span>

    <h2>실습 2. section으로 내용 나누기</h2>
    <p><code>&lt;main&gt;</code> 안에 <code>&lt;section&gt;</code>을 넣고, 자기소개 / 관심사 / 목표를 나눠 작성해보세요.</p>
    <ul>
      <li>자기소개</li>
      <li>관심 분야</li>
      <li>앞으로의 목표</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>본문 내용을 2개 이상의 <code>&lt;section&gt;</code>으로 나눠서 작성한 뒤 실행해보세요.</p>
    </div>
  `
},
{
  id: "lesson4",
  chip: "Lesson 4",
  navTitle: "4강. CSS 기초",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>나의 소개</title>
  <style>
  </style>
</head>
<body>
  <h1>민수의 웹사이트</h1>
  <p>안녕하세요. 저는 웹사이트 만드는 법을 배우고 있습니다.</p>
  <p>이 페이지를 더 보기 좋게 꾸며보겠습니다.</p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>나의 소개</title>
  <style>
    body {
      background-color: #f8fafc;
      color: #1e293b;
      font-family: Arial, sans-serif;
      padding: 30px;
    }

    h1 {
      color: #2563eb;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      margin-bottom: 12px;
    }
  </style>
</head>
<body>
  <h1>민수의 웹사이트</h1>
  <p>안녕하세요. 저는 웹사이트 만드는 법을 배우고 있습니다.</p>
  <p>이 페이지를 더 보기 좋게 꾸며보겠습니다.</p>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 <strong>CSS</strong>를 사용해 웹페이지를 꾸미는 방법을 배웁니다.</p>
    <p>HTML이 웹페이지의 구조를 만든다면, CSS는 색상, 글꼴, 크기, 여백 같은 디자인을 담당합니다.</p>

    <div class="problem-area">
      <span class="problem-title">이번 시간 핵심</span>
      <ul>
        <li><code>color</code> : 글자 색</li>
        <li><code>background-color</code> : 배경 색</li>
        <li><code>font-size</code> : 글자 크기</li>
        <li><code>padding</code> : 안쪽 여백</li>
        <li><code>font-family</code> : 글꼴</li>
      </ul>
    </div>

    <p>CSS는 보통 <code>&lt;style&gt;</code> 태그 안에 작성합니다.</p>

    <h2>실습 1. 제목과 문단 꾸미기</h2>
    <p>오른쪽 코드의 <code>&lt;style&gt;</code> 안에 CSS를 작성해보세요.</p>
    <ol>
      <li><code>h1</code>의 글자색 바꾸기</li>
      <li><code>h1</code>의 글자 크기 키우기</li>
      <li><code>p</code>의 글자 크기 바꾸기</li>
    </ol>
    <span class="theory-callout">HTML 태그 이름을 그대로 써서 스타일을 줄 수 있습니다. 예: <code>h1 { color: blue; }</code></span>

    <h2>실습 2. 배경색과 여백 추가하기</h2>
    <p><code>body</code>에 배경색과 여백을 넣어 페이지 전체 분위기를 바꿔보세요.</p>
    <ul>
      <li>배경색 넣기</li>
      <li>글자 색 바꾸기</li>
      <li>페이지 여백 추가하기</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>제목 색, 본문 크기, 배경색, 여백을 모두 바꾼 뒤 실행해보세요.</p>
    </div>
  `
},
{
  id: "lesson5",
  chip: "Lesson 5",
  navTitle: "5강. CSS 박스 모델",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>박스 모델 연습</title>
  <style>
    .card {
      background-color: #dbeafe;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>자기소개 카드</h1>
    <p>안녕하세요. 저는 웹사이트를 배우고 있습니다.</p>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>박스 모델 연습</title>
  <style>
    body {
      background-color: #f8fafc;
      font-family: Arial, sans-serif;
      padding: 30px;
    }

    .card {
      background-color: #dbeafe;
      border: 2px solid #2563eb;
      padding: 20px;
      margin: 20px 0;
      width: 320px;
      border-radius: 12px;
    }

    h1 {
      margin-bottom: 12px;
      font-size: 24px;
      color: #1e3a8a;
    }

    p {
      margin: 0;
      color: #1e293b;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>자기소개 카드</h1>
    <p>안녕하세요. 저는 웹사이트를 배우고 있습니다.</p>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 <strong>CSS 박스 모델</strong>을 배웁니다.</p>
    <p>웹페이지의 대부분 요소는 네모 상자처럼 동작합니다. 이 상자는 내용, 안쪽 여백, 테두리, 바깥 여백으로 이루어집니다.</p>

    <div class="problem-area">
      <span class="problem-title">박스 모델 4요소</span>
      <ul>
        <li><code>content</code> : 실제 글이나 이미지 내용</li>
        <li><code>padding</code> : 내용과 테두리 사이 안쪽 여백</li>
        <li><code>border</code> : 테두리</li>
        <li><code>margin</code> : 다른 요소와의 바깥 여백</li>
      </ul>
    </div>

    <p><code>width</code>와 <code>height</code>를 사용하면 박스 크기도 조절할 수 있습니다.</p>

    <h2>실습 1. 카드 박스 꾸미기</h2>
    <p>오른쪽 코드의 <code>.card</code>에 CSS를 추가해보세요.</p>
    <ol>
      <li>테두리 넣기</li>
      <li>안쪽 여백 <code>padding</code> 넣기</li>
      <li>바깥 여백 <code>margin</code> 넣기</li>
      <li>너비 <code>width</code> 지정하기</li>
    </ol>
    <span class="theory-callout">padding은 박스 안쪽 공간, margin은 박스 바깥 공간입니다.</span>

    <h2>실습 2. 여백 차이 직접 보기</h2>
    <p><code>padding</code> 값을 크게 바꾸고, <code>margin</code> 값도 바꿔보면서 화면 차이를 확인해보세요.</p>
    <ul>
      <li>padding: 10px → 30px</li>
      <li>margin: 10px → 30px</li>
      <li>border 두께 바꾸기</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>카드를 보기 좋은 박스로 만들고, padding과 margin 차이를 직접 확인해보세요.</p>
    </div>
  `
},
{
  id: "lesson6",
  chip: "Lesson 6",
  navTitle: "6강. Flexbox 레이아웃",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Flexbox 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .container {
      background-color: #e2e8f0;
      padding: 20px;
    }

    .card {
      background-color: #dbeafe;
      border: 1px solid #93c5fd;
      padding: 20px;
      width: 120px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>내가 좋아하는 것</h1>

  <div class="container">
    <div class="card">음악</div>
    <div class="card">영화</div>
    <div class="card">코딩</div>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Flexbox 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      background-color: #e2e8f0;
      padding: 20px;
      border-radius: 12px;
    }

    .card {
      background-color: #dbeafe;
      border: 1px solid #93c5fd;
      padding: 20px;
      width: 120px;
      border-radius: 10px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>내가 좋아하는 것</h1>

  <div class="container">
    <div class="card">음악</div>
    <div class="card">영화</div>
    <div class="card">코딩</div>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 <strong>Flexbox</strong>를 사용해 여러 요소를 정렬하는 방법을 배웁니다.</p>
    <p>Flexbox를 사용하면 박스를 가로로 나열하거나, 가운데 정렬하거나, 간격을 일정하게 맞추기 쉽습니다.</p>

    <div class="problem-area">
      <span class="problem-title">이번 시간 핵심 속성</span>
      <ul>
        <li><code>display: flex;</code> : Flexbox 시작</li>
        <li><code>gap</code> : 요소 사이 간격</li>
        <li><code>justify-content</code> : 가로 방향 정렬</li>
        <li><code>align-items</code> : 세로 방향 정렬</li>
      </ul>
    </div>

    <p>Flexbox는 부모 요소에 적용합니다. 그러면 안의 자식 요소들이 정렬됩니다.</p>

    <h2>실습 1. 카드 가로 정렬하기</h2>
    <p>오른쪽 코드의 <code>.container</code>에 Flexbox 속성을 추가해보세요.</p>
    <ol>
      <li><code>display: flex;</code> 추가</li>
      <li><code>gap</code>으로 카드 사이 간격 넣기</li>
      <li>카드가 가로로 정렬되는지 확인하기</li>
    </ol>
    <span class="theory-callout">Flexbox는 부모 요소에 적용해야 합니다.</span>

    <h2>실습 2. 가운데 정렬하기</h2>
    <p>카드 3개가 박스 안에서 가운데에 오도록 정렬해보세요.</p>
    <ul>
      <li><code>justify-content: center;</code></li>
      <li><code>align-items: center;</code></li>
      <li>카드 글자도 가운데 정렬</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>좋아하는 것 3개를 카드로 만들고, Flexbox로 보기 좋게 가로 정렬해보세요.</p>
    </div>
  `
},
{
  id: "lesson7",
  chip: "Lesson 7",
  navTitle: "7강. UI 꾸미기",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>UI 꾸미기 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 20px;
      width: 280px;
    }

    .btn {
      background-color: #2563eb;
      color: white;
      padding: 10px 16px;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>민수의 웹사이트</h1>
    <p>안녕하세요. 저는 웹사이트를 배우고 있습니다.</p>
    <a href="#" class="btn">더 보기</a>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>UI 꾸미기 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 24px;
      width: 280px;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
    }

    h1 {
      color: #1e3a8a;
      margin-top: 0;
      margin-bottom: 12px;
    }

    p {
      color: #334155;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .btn {
      display: inline-block;
      background-color: #2563eb;
      color: white;
      padding: 12px 18px;
      text-decoration: none;
      border-radius: 10px;
      font-weight: bold;
    }

    .btn:hover {
      background-color: #1d4ed8;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>민수의 웹사이트</h1>
    <p>안녕하세요. 저는 웹사이트를 배우고 있습니다.</p>
    <a href="#" class="btn">더 보기</a>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 웹페이지를 더 보기 좋게 만드는 <strong>UI 꾸미기</strong>를 배웁니다.</p>
    <p>버튼, 카드, 그림자, 둥근 모서리, hover 효과를 사용하면 페이지가 훨씬 자연스럽고 완성도 있게 보입니다.</p>

    <div class="problem-area">
      <span class="problem-title">이번 시간 핵심 속성</span>
      <ul>
        <li><code>border-radius</code> : 둥근 모서리</li>
        <li><code>box-shadow</code> : 그림자</li>
        <li><code>:hover</code> : 마우스를 올렸을 때 효과</li>
        <li><code>text-decoration</code> : 링크 밑줄 제거</li>
        <li><code>display: inline-block;</code> : 링크를 버튼처럼 보이게 함</li>
      </ul>
    </div>

    <h2>실습 1. 카드 더 예쁘게 만들기</h2>
    <p>오른쪽 코드의 <code>.card</code>에 스타일을 추가해보세요.</p>
    <ol>
      <li><code>border-radius</code> 추가</li>
      <li><code>box-shadow</code> 추가</li>
      <li>테두리 색 추가</li>
    </ol>
    <span class="theory-callout">카드에 둥근 모서리와 그림자를 넣으면 훨씬 부드럽고 현대적인 느낌이 납니다.</span>

    <h2>실습 2. 링크를 버튼처럼 꾸미기</h2>
    <p><code>&lt;a&gt;</code> 태그를 버튼처럼 보이게 바꿔보세요.</p>
    <ul>
      <li>배경색 넣기</li>
      <li>글자색 흰색으로 바꾸기</li>
      <li>padding 넣기</li>
      <li><code>:hover</code> 효과 넣기</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>카드와 버튼을 직접 꾸며서, 이전보다 더 실제 웹사이트처럼 보이게 만들어보세요.</p>
    </div>
  `
},
{
  id: "lesson8",
  chip: "Lesson 8",
  navTitle: "8강. 반응형 웹 기초",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>반응형 웹 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      width: 180px;
    }
  </style>
</head>
<body>
  <h1>내 관심 분야</h1>

  <div class="container">
    <div class="card">웹디자인</div>
    <div class="card">프론트엔드</div>
    <div class="card">AI</div>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>반응형 웹 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      width: 180px;
      text-align: center;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    }

    @media (max-width: 600px) {
      body {
        padding: 16px;
      }

      .container {
        flex-direction: column;
      }

      .card {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <h1>내 관심 분야</h1>

  <div class="container">
    <div class="card">웹디자인</div>
    <div class="card">프론트엔드</div>
    <div class="card">AI</div>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 <strong>반응형 웹</strong>의 기초를 배웁니다.</p>
    <p>반응형 웹은 컴퓨터, 태블릿, 휴대폰처럼 화면 크기가 달라져도 보기 좋게 바뀌는 웹페이지를 말합니다.</p>

    <div class="problem-area">
      <span class="problem-title">이번 시간 핵심</span>
      <ul>
        <li><code>@media</code> : 화면 조건에 따라 스타일 변경</li>
        <li><code>max-width</code> : 화면이 일정 크기 이하일 때 적용</li>
        <li><code>flex-direction</code> : 가로/세로 방향 변경</li>
        <li><code>width: 100%;</code> : 화면 너비에 맞게 확장</li>
      </ul>
    </div>

    <p>즉, 큰 화면에서는 가로 정렬, 작은 화면에서는 세로 정렬로 바꿀 수 있습니다.</p>

    <h2>실습 1. 작은 화면에서 카드 세로 정렬하기</h2>
    <p><code>@media (max-width: 600px)</code>를 추가해서 화면이 작을 때 카드가 세로로 쌓이게 해보세요.</p>
    <ol>
      <li><code>@media</code> 구문 작성하기</li>
      <li><code>.container</code>에 <code>flex-direction: column;</code> 넣기</li>
      <li>카드가 위아래로 쌓이는지 확인하기</li>
    </ol>
    <span class="theory-callout">브라우저 너비를 줄여보면 레이아웃이 바뀌는 것을 확인할 수 있습니다.</span>

    <h2>실습 2. 작은 화면에서 카드 너비 바꾸기</h2>
    <p>모바일 화면에서는 카드가 너무 좁지 않도록 <code>width: 100%;</code>를 적용해보세요.</p>
    <ul>
      <li>body 여백 줄이기</li>
      <li>카드 너비를 100%로 바꾸기</li>
      <li>모바일에서 보기 편한지 확인하기</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>화면이 작아질 때 가로 카드가 세로 카드로 바뀌도록 반응형 코드를 완성해보세요.</p>
    </div>
  `
},
{
  id: "lesson9",
  chip: "Lesson 9",
  navTitle: "9강. JavaScript 기초",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript 기초</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
    }

    button {
      background-color: #2563eb;
      color: white;
      border: none;
      padding: 12px 18px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>JavaScript 시작하기</h1>
  <p id="message">안녕하세요.</p>
  <button>버튼 클릭</button>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript 기초</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
    }

    button {
      background-color: #2563eb;
      color: white;
      border: none;
      padding: 12px 18px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>JavaScript 시작하기</h1>
  <p id="message">안녕하세요.</p>
  <button onclick="changeText()">버튼 클릭</button>

  <script>
    function changeText() {
      document.getElementById("message").textContent = "버튼을 눌렀습니다!";
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 <strong>JavaScript</strong>의 기초를 배웁니다.</p>
    <p>JavaScript는 웹페이지에 동작을 넣는 언어입니다. 버튼을 누르면 글자가 바뀌거나, 메뉴가 열리거나, 경고창이 뜨게 만들 수 있습니다.</p>

    <div class="problem-area">
      <span class="problem-title">이번 시간 핵심</span>
      <ul>
        <li><code>&lt;script&gt;</code> : JavaScript를 작성하는 곳</li>
        <li><code>function</code> : 기능을 묶는 코드</li>
        <li><code>onclick</code> : 클릭했을 때 실행</li>
        <li><code>document.getElementById()</code> : HTML 요소 선택</li>
        <li><code>textContent</code> : 글자 내용 바꾸기</li>
      </ul>
    </div>

    <p>즉, JavaScript를 사용하면 HTML 화면을 바꿀 수 있습니다.</p>

    <h2>실습 1. 버튼을 누르면 글자 바꾸기</h2>
    <p>오른쪽 코드에 JavaScript를 추가해서 버튼을 누르면 문장이 바뀌게 해보세요.</p>
    <ol>
      <li><code>&lt;script&gt;</code> 태그 추가하기</li>
      <li><code>changeText()</code> 함수 만들기</li>
      <li>버튼에 <code>onclick</code> 연결하기</li>
    </ol>
    <span class="theory-callout">버튼을 눌렀을 때 화면의 문장이 바뀌면 성공입니다.</span>

    <h2>실습 2. 문장을 원하는 내용으로 바꾸기</h2>
    <p><code>textContent</code> 안의 문장을 자기소개 문장이나 인사말로 바꿔보세요.</p>
    <ul>
      <li>안녕하세요 → 반갑습니다</li>
      <li>버튼을 눌렀습니다 → 제 이름은 OOO입니다</li>
      <li>직접 다른 문장 넣어보기</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>버튼을 누르면 인사말이 바뀌도록 JavaScript 코드를 완성해보세요.</p>
    </div>
  `
},
{
  id: "lesson10",
  chip: "Lesson 10",
  navTitle: "10강. 조건문과 함수",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>조건문 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    input, button {
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>나이 확인하기</h1>

  <input type="number" id="age" placeholder="나이를 입력하세요">
  <button>확인</button>

  <p id="result"></p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>조건문 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    input, button {
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>나이 확인하기</h1>

  <input type="number" id="age" placeholder="나이를 입력하세요">
  <button onclick="checkAge()">확인</button>

  <p id="result"></p>

  <script>
    function checkAge() {
      const age = document.getElementById("age").value;

      if (age >= 20) {
        document.getElementById("result").textContent = "성인입니다.";
      } else {
        document.getElementById("result").textContent = "미성년자입니다.";
      }
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 <strong>조건문(if)</strong>과 <strong>함수(function)</strong>를 배웁니다.</p>
    <p>조건문을 사용하면 입력값에 따라 다른 결과를 보여줄 수 있습니다.</p>

    <div class="problem-area">
      <span class="problem-title">이번 시간 핵심</span>
      <ul>
        <li><code>function</code> : 기능을 만드는 코드</li>
        <li><code>if</code> : 조건에 따라 실행</li>
        <li><code>else</code> : 조건이 아닐 때 실행</li>
        <li><code>value</code> : 입력값 가져오기</li>
      </ul>
    </div>

    <p>즉, 프로그램이 “판단”을 하게 만드는 것이 조건문입니다.</p>

    <h2>실습 1. 나이에 따라 결과 바꾸기</h2>
    <p>입력한 나이에 따라 다른 문장이 나오도록 만들어보세요.</p>
    <ol>
      <li><code>checkAge()</code> 함수 만들기</li>
      <li>버튼에 <code>onclick</code> 연결하기</li>
      <li><code>if</code> 조건문 작성하기</li>
    </ol>
    <span class="theory-callout">20 이상이면 성인, 아니면 미성년자로 출력합니다.</span>

    <h2>실습 2. 다른 조건 만들어보기</h2>
    <p>조건을 바꿔서 다른 결과를 만들어보세요.</p>
    <ul>
      <li>10살 이상 / 이하</li>
      <li>좋아하는 숫자 비교</li>
      <li>문장 바꿔보기</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>입력값에 따라 다른 문장이 나오도록 조건문을 완성해보세요.</p>
    </div>
  `
},
{
  id: "lesson11",
  chip: "Lesson 11",
  navTitle: "11강. DOM 조작",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>DOM 조작 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .box {
      background-color: white;
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 12px;
      width: 280px;
    }

    button {
      margin-top: 12px;
      padding: 10px 16px;
      border: none;
      border-radius: 10px;
      background-color: #2563eb;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="box">
    <h1 id="title">안녕하세요</h1>
    <p id="desc">이 문장을 바꿔보세요.</p>
    <button>변경하기</button>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>DOM 조작 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .box {
      background-color: white;
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 12px;
      width: 280px;
    }

    .highlight {
      background-color: #dbeafe;
      border-color: #60a5fa;
    }

    button {
      margin-top: 12px;
      padding: 10px 16px;
      border: none;
      border-radius: 10px;
      background-color: #2563eb;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="box" id="card">
    <h1 id="title">안녕하세요</h1>
    <p id="desc">이 문장을 바꿔보세요.</p>
    <button onclick="changeContent()">변경하기</button>
  </div>

  <script>
    function changeContent() {
      document.getElementById("title").textContent = "반갑습니다!";
      document.getElementById("desc").textContent = "JavaScript로 화면 내용을 바꿨습니다.";
      document.getElementById("card").classList.add("highlight");
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 <strong>DOM 조작</strong>을 배웁니다.</p>
    <p>DOM은 HTML 화면에 있는 요소들을 JavaScript로 선택하고 바꾸는 방법입니다.</p>

    <div class="problem-area">
      <span class="problem-title">이번 시간 핵심</span>
      <ul>
        <li><code>document.getElementById()</code> : 요소 선택</li>
        <li><code>textContent</code> : 글자 바꾸기</li>
        <li><code>classList.add()</code> : 클래스 추가</li>
        <li><code>classList.remove()</code> : 클래스 제거</li>
      </ul>
    </div>

    <p>즉, JavaScript를 사용해서 HTML 요소를 직접 바꾸는 것이 DOM 조작입니다.</p>

    <h2>실습 1. 제목과 문장 바꾸기</h2>
    <p>버튼을 누르면 제목과 문장이 바뀌도록 만들어보세요.</p>
    <ol>
      <li><code>id="title"</code> 요소 선택하기</li>
      <li><code>id="desc"</code> 요소 선택하기</li>
      <li><code>textContent</code>로 문장 바꾸기</li>
    </ol>
    <span class="theory-callout">버튼을 눌렀을 때 화면 문장이 바뀌면 DOM 조작에 성공한 것입니다.</span>

    <h2>실습 2. 클래스 추가로 스타일 바꾸기</h2>
    <p>박스에 새로운 클래스를 추가해서 배경색이 바뀌도록 만들어보세요.</p>
    <ul>
      <li><code>.highlight</code> 클래스 만들기</li>
      <li><code>classList.add()</code> 사용하기</li>
      <li>배경색과 테두리색 바꾸기</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>버튼을 누르면 글자와 스타일이 함께 바뀌도록 DOM 조작 코드를 완성해보세요.</p>
    </div>
  `
},
{
  id: "lesson12",
  chip: "Lesson 12",
  navTitle: "12강. 입력값 처리와 폼 기초",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>입력값 처리 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    input, button {
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }

    #result {
      margin-top: 20px;
      font-weight: bold;
      color: #1e3a8a;
    }
  </style>
</head>
<body>
  <h1>이름 입력하기</h1>
  <input type="text" id="username" placeholder="이름을 입력하세요">
  <button>확인</button>
  <p id="result"></p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>입력값 처리 연습</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    input, button {
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }

    #result {
      margin-top: 20px;
      font-weight: bold;
      color: #1e3a8a;
    }
  </style>
</head>
<body>
  <h1>이름 입력하기</h1>
  <input type="text" id="username" placeholder="이름을 입력하세요">
  <button onclick="showName()">확인</button>
  <p id="result"></p>

  <script>
    function showName() {
      const name = document.getElementById("username").value;

      if (name === "") {
        document.getElementById("result").textContent = "이름을 입력해주세요.";
      } else {
        document.getElementById("result").textContent = "안녕하세요, " + name + "님!";
      }
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간에는 <strong>입력값 처리</strong>와 <strong>폼 기초</strong>를 배웁니다.</p>
    <p>사용자가 입력창에 값을 넣으면 JavaScript가 그 값을 읽어서 화면에 보여줄 수 있습니다.</p>

    <div class="problem-area">
      <span class="problem-title">이번 시간 핵심</span>
      <ul>
        <li><code>&lt;input&gt;</code> : 사용자 입력창</li>
        <li><code>value</code> : 입력값 가져오기</li>
        <li><code>if</code> : 입력 여부 확인</li>
        <li><code>textContent</code> : 결과 출력</li>
      </ul>
    </div>

    <p>즉, 입력값 처리란 사용자가 넣은 내용을 JavaScript가 읽어 사용하는 것입니다.</p>

    <h2>실습 1. 이름 입력 후 인사말 출력하기</h2>
    <p>입력창에 이름을 넣고 버튼을 누르면 인사말이 나오도록 만들어보세요.</p>
    <ol>
      <li><code>id="username"</code> 요소 선택하기</li>
      <li><code>.value</code>로 입력값 읽기</li>
      <li><code>result</code>에 인사말 출력하기</li>
    </ol>
    <span class="theory-callout">입력값을 가져오려면 <code>.value</code>를 사용합니다.</span>

    <h2>실습 2. 빈칸 검사하기</h2>
    <p>아무것도 입력하지 않고 버튼을 누르면 경고 문장이 나오도록 만들어보세요.</p>
    <ul>
      <li><code>if (name === "")</code> 조건 만들기</li>
      <li>빈칸이면 “이름을 입력해주세요” 출력</li>
      <li>입력했으면 인사말 출력</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>이름을 입력하면 인사말이 나오고, 비어 있으면 안내 문장이 나오도록 완성해보세요.</p>
    </div>
  `
},
{
  id: "lesson13",
  chip: "Lesson 13",
  navTitle: "13강. 최종 프로젝트 제작",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>나의 웹사이트</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .container {
      display: flex;
      gap: 16px;
    }

    .card {
      background-color: white;
      padding: 20px;
      border-radius: 12px;
      width: 200px;
    }
  </style>
</head>
<body>

  <h1>나의 웹사이트</h1>

  <div class="container">
    <div class="card">자기소개</div>
    <div class="card">관심사</div>
    <div class="card">연락처</div>
  </div>

</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>민수의 포트폴리오</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .card {
      background-color: white;
      padding: 20px;
      border-radius: 12px;
      width: 220px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.06);
    }

    .btn {
      display: inline-block;
      margin-top: 10px;
      background-color: #2563eb;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      text-decoration: none;
    }

    .btn:hover {
      background-color: #1d4ed8;
    }
  </style>
</head>
<body>

  <h1>민수의 포트폴리오</h1>

  <div class="container">
    <div class="card">
      <h2>자기소개</h2>
      <p>안녕하세요. 저는 웹개발을 배우고 있습니다.</p>
    </div>

    <div class="card">
      <h2>관심사</h2>
      <p>웹디자인, 프론트엔드, AI</p>
    </div>

    <div class="card">
      <h2>연락처</h2>
      <p>email@example.com</p>
      <a href="#" class="btn">메일 보내기</a>
    </div>
  </div>

</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간은 <strong>최종 프로젝트</strong>를 만드는 시간입니다.</p>
    <p>지금까지 배운 HTML, CSS, JavaScript를 모두 사용해서 하나의 웹사이트를 완성합니다.</p>

    <div class="problem-area">
      <span class="problem-title">프로젝트 목표</span>
      <ul>
        <li>자기소개 웹사이트 만들기</li>
        <li>카드 형태 UI 구성하기</li>
        <li>Flexbox로 정렬하기</li>
        <li>CSS로 디자인 적용하기</li>
        <li>간단한 버튼/링크 추가하기</li>
      </ul>
    </div>

    <h2>실습 1. 웹사이트 구조 만들기</h2>
    <p>아래 내용을 포함한 웹페이지를 만들어보세요.</p>
    <ol>
      <li>제목 (이름 포함)</li>
      <li>자기소개 카드</li>
      <li>관심사 카드</li>
      <li>연락처 카드</li>
    </ol>
    <span class="theory-callout">지금까지 배운 HTML 구조를 그대로 활용하세요.</span>

    <h2>실습 2. 디자인 완성하기</h2>
    <p>CSS를 활용해 웹사이트를 보기 좋게 꾸며보세요.</p>
    <ul>
      <li>카드에 그림자 추가</li>
      <li>버튼 디자인 적용</li>
      <li>색상 통일하기</li>
      <li>여백 정리하기</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">실습 미션</span>
      <p>지금까지 배운 내용을 모두 활용해 나만의 웹사이트를 완성해보세요.</p>
    </div>
  `
},
{
  id: "lesson14",
  chip: "Lesson 14",
  navTitle: "14강. 발표와 복습",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>최종 발표</title>
</head>
<body>
  <h1>나의 최종 웹사이트</h1>
  <p>이 페이지는 내가 만든 최종 프로젝트입니다.</p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>최종 발표</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
      color: #1e293b;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      max-width: 500px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.06);
    }

    h1 {
      color: #1e3a8a;
      margin-top: 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>나의 최종 웹사이트</h1>
    <p>이 페이지는 내가 만든 최종 프로젝트입니다.</p>
    <p>HTML, CSS, JavaScript를 사용해 직접 만들었습니다.</p>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>핵심 이론</h2>
    <p>이번 시간은 <strong>최종 발표와 복습</strong> 시간입니다.</p>
    <p>지금까지 만든 웹사이트를 발표하고, 어떤 기능을 만들었는지 설명해봅니다.</p>

    <div class="problem-area">
      <span class="problem-title">이번 시간 목표</span>
      <ul>
        <li>내가 만든 웹사이트 점검하기</li>
        <li>완성된 결과 발표하기</li>
        <li>HTML, CSS, JavaScript 복습하기</li>
        <li>잘한 점과 개선할 점 정리하기</li>
      </ul>
    </div>

    <h2>실습 1. 최종 점검하기</h2>
    <p>아래 내용을 확인하면서 자신의 웹사이트를 점검해보세요.</p>
    <ol>
      <li>제목이 잘 보이는가?</li>
      <li>카드/레이아웃이 정리되어 있는가?</li>
      <li>색상과 여백이 자연스러운가?</li>
      <li>버튼이나 입력 기능이 잘 동작하는가?</li>
    </ol>
    <span class="theory-callout">발표 전에는 코드가 아니라 ‘화면이 잘 보이는지’부터 점검하는 것이 중요합니다.</span>

    <h2>실습 2. 발표 준비하기</h2>
    <p>자신의 웹사이트를 짧게 소개해보세요.</p>
    <ul>
      <li>웹사이트 제목</li>
      <li>내가 만든 주요 내용</li>
      <li>가장 어려웠던 부분</li>
      <li>가장 잘 만든 부분</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">발표 미션</span>
      <p>“이 사이트는 무엇을 보여주는지”, “어떤 기능을 넣었는지”를 30초~1분 정도로 설명해보세요.</p>
    </div>

    <h2>복습 정리</h2>
    <p>이번 과정에서 배운 핵심은 다음과 같습니다.</p>
    <ul>
      <li><strong>HTML</strong> : 웹페이지 구조 만들기</li>
      <li><strong>CSS</strong> : 웹페이지 꾸미기</li>
      <li><strong>JavaScript</strong> : 웹페이지에 동작 넣기</li>
    </ul>
  `
}]};

export const lessons_en = {
    status: "Ready",
    brandTitle: "HTML Learning Center",
    brandSubtitle: "International Students Web Practice",
    editorTitle: "Practice Area", 
    run: "Run ▶",
    reset: "Reset",
    answer: "Answer Example",
    previewTitle: "Live Preview",
    lessons: [
      {
        id: "lesson1",
        chip: "Lesson 1",
        navTitle: "Lesson 1. HTML Basics",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>
  <h1>Hello</h1>
  <p>This is the first webpage I created.</p>
</body>
</html>`,
        answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Self-Introduction Page</title>
</head>
<body>
  <h1>Hello</h1>
  <p>My name is John Doe.</p>
  <p>I am learning web development.</p>
  <p>I want to build my own websites in the future.</p>
</body>
</html>`,
        lessonHtml: `
          <h2>Core Theory</h2>
          <p><strong>HTML</strong> creates the structure of a web page.</p>
          <p><strong>CSS</strong> styles the page.</p>
          <p><strong>JavaScript</strong> adds actions and interactivity.</p>

          <div class="problem-area">
            <span class="problem-title">Easy Example</span>
            <p>If we compare a webpage to a person:</p>
            <ul>
              <li>HTML = skeleton</li>
              <li>CSS = clothes and colors</li>
              <li>JavaScript = movement and functions</li>
            </ul>
          </div>

          <p>Today, we will directly work with <strong>HTML</strong>.</p>

          <h2>Practice 1. Make Your First HTML File</h2>
          <p>The basic HTML code is already in the editor on the right.</p>
          <ol>
            <li>Change the title inside <code>&lt;h1&gt;</code>.</li>
            <li>Change the sentence inside <code>&lt;p&gt;</code>.</li>
            <li>Click <strong>Run</strong> to check the result.</li>
          </ol>
          <span class="theory-callout">If the preview changes, you did it correctly.</span>

          <h2>Practice 2. Add More Self-Introduction Sentences</h2>
          <p>Add more <code>&lt;p&gt;</code> tags and write at least 3 lines about yourself.</p>
          <div class="problem-area">
            <span class="problem-title">Practice Mission</span>
            <p>Add 3 or more sentences and run the code again.</p>
          </div>
        `
      },
      {
        id: "lesson2",
        chip: "Lesson 2",
        navTitle: "Lesson 2. Basic HTML Tags",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>About Me</title>
</head>
<body>
  <h1>Self Introduction</h1>
  <p>Hello. I am a student.</p>
  <p>I am learning how to build websites.</p>
</body>
</html>`,
        answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>About Mina</title>
</head>
<body>
  <h1>Mina's Introduction</h1>
  <p>Hello. My name is Mina.</p>
  <p>I am 20 years old.</p>
  <p>I am interested in games and web design.</p>

  <h2>Things I Like</h2>
  <ul>
    <li>Listening to music</li>
    <li>Watching movies</li>
    <li>Learning coding</li>
  </ul>

  <p><a href="https://www.google.com" target="_blank">Visit my favorite website</a></p>
</body>
</html>`,
        lessonHtml: `
          <h2>Core Theory</h2>
          <p>In this lesson, we learn the most common <strong>basic HTML tags</strong>.</p>
          <p>We will use heading tags, paragraph tags, list tags, and link tags.</p>

          <div class="problem-area">
            <span class="problem-title">Important Tags</span>
            <ul>
              <li><code>&lt;h1&gt; ~ &lt;h6&gt;</code> : headings</li>
              <li><code>&lt;p&gt;</code> : paragraph</li>
              <li><code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code> : list</li>
              <li><code>&lt;a&gt;</code> : link</li>
            </ul>
          </div>

          <h2>Practice 1. Make Headings and Paragraphs</h2>
          <p>Change the heading and paragraph content into your own self-introduction.</p>
          <ol>
            <li>Change <code>&lt;title&gt;</code></li>
            <li>Change <code>&lt;h1&gt;</code></li>
            <li>Write 2 or more <code>&lt;p&gt;</code> tags</li>
          </ol>
          <span class="theory-callout">If the heading looks large and the paragraphs explain you, it is correct.</span>

          <h2>Practice 2. Add a List and a Link</h2>
          <p>Add 3 things you like as a list and add one link.</p>

          <div class="problem-area">
            <span class="problem-title">Practice Mission</span>
            <p>Use <code>&lt;ul&gt;</code> and <code>&lt;a&gt;</code> by yourself.</p>
          </div>
        `
      },
      {
  id: "lesson3",
  chip: "Lesson 3",
  navTitle: "Lesson 3. HTML Structure",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>My Website</h1>
  <p>This is my first page.</p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <header>
    <h1>Mina's Website</h1>
  </header>

  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  <main>
    <section>
      <h2>About Me</h2>
      <p>Hello. My name is Mina.</p>
      <p>I am learning how to build websites.</p>
    </section>
  </main>

  <footer>
    <p>© 2026 Mina</p>
  </footer>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn the <strong>basic structure of an HTML document</strong> and <strong>semantic tags</strong>.</p>
    <p>A webpage should not only contain text. It should also be divided into meaningful parts.</p>

    <div class="problem-area">
      <span class="problem-title">Important Tags</span>
      <ul>
        <li><code>&lt;header&gt;</code> : title area</li>
        <li><code>&lt;nav&gt;</code> : menu area</li>
        <li><code>&lt;main&gt;</code> : main content</li>
        <li><code>&lt;section&gt;</code> : grouped content by topic</li>
        <li><code>&lt;footer&gt;</code> : bottom information area</li>
      </ul>
    </div>

    <p>These tags make your code easier to read and your webpage structure clearer.</p>

    <h2>Practice 1. Build a Basic Website Structure</h2>
    <p>Add <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> to the code on the right.</p>
    <ol>
      <li>Make a title area</li>
      <li>Add 2 or 3 menu items</li>
      <li>Write a short self-introduction in the main content</li>
    </ol>
    <span class="theory-callout">The key point is to divide the website into clear areas.</span>

    <h2>Practice 2. Divide Content with Sections</h2>
    <p>Inside <code>&lt;main&gt;</code>, use <code>&lt;section&gt;</code> to divide your content into About Me / Interests / Goals.</p>
    <ul>
      <li>About Me</li>
      <li>Interests</li>
      <li>Future Goals</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Divide the main content into at least 2 <code>&lt;section&gt;</code> elements and run the code.</p>
    </div>
  `
},
{
  id: "lesson4",
  chip: "Lesson 4",
  navTitle: "Lesson 4. CSS Basics",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>About Me</title>
  <style>
  </style>
</head>
<body>
  <h1>Mina's Website</h1>
  <p>Hello. I am learning how to build websites.</p>
  <p>I will make this page look better.</p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>About Me</title>
  <style>
    body {
      background-color: #f8fafc;
      color: #1e293b;
      font-family: Arial, sans-serif;
      padding: 30px;
    }

    h1 {
      color: #2563eb;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      margin-bottom: 12px;
    }
  </style>
</head>
<body>
  <h1>Mina's Website</h1>
  <p>Hello. I am learning how to build websites.</p>
  <p>I will make this page look better.</p>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn how to use <strong>CSS</strong> to style a webpage.</p>
    <p>HTML builds the structure, and CSS controls colors, fonts, sizes, and spacing.</p>

    <div class="problem-area">
      <span class="problem-title">Main CSS Properties</span>
      <ul>
        <li><code>color</code> : text color</li>
        <li><code>background-color</code> : background color</li>
        <li><code>font-size</code> : text size</li>
        <li><code>padding</code> : inner space</li>
        <li><code>font-family</code> : font style</li>
      </ul>
    </div>

    <p>We usually write CSS inside the <code>&lt;style&gt;</code> tag.</p>

    <h2>Practice 1. Style the Heading and Paragraphs</h2>
    <p>Write CSS inside the <code>&lt;style&gt;</code> tag in the code editor.</p>
    <ol>
      <li>Change the color of <code>h1</code></li>
      <li>Make the <code>h1</code> text bigger</li>
      <li>Change the size of the <code>p</code> text</li>
    </ol>
    <span class="theory-callout">You can style elements by using their HTML tag names. Example: <code>h1 { color: blue; }</code></span>

    <h2>Practice 2. Add Background Color and Spacing</h2>
    <p>Use CSS on <code>body</code> to change the whole page atmosphere.</p>
    <ul>
      <li>Add a background color</li>
      <li>Change text color</li>
      <li>Add page padding</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Change the heading color, paragraph size, background color, and spacing, then run the code.</p>
    </div>
  `
},
{
  id: "lesson5",
  chip: "Lesson 5",
  navTitle: "Lesson 5. CSS Box Model",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Box Model Practice</title>
  <style>
    .card {
      background-color: #dbeafe;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Profile Card</h1>
    <p>Hello. I am learning how to build websites.</p>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Box Model Practice</title>
  <style>
    body {
      background-color: #f8fafc;
      font-family: Arial, sans-serif;
      padding: 30px;
    }

    .card {
      background-color: #dbeafe;
      border: 2px solid #2563eb;
      padding: 20px;
      margin: 20px 0;
      width: 320px;
      border-radius: 12px;
    }

    h1 {
      margin-bottom: 12px;
      font-size: 24px;
      color: #1e3a8a;
    }

    p {
      margin: 0;
      color: #1e293b;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Profile Card</h1>
    <p>Hello. I am learning how to build websites.</p>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn the <strong>CSS Box Model</strong>.</p>
    <p>Most elements on a webpage work like boxes. A box has content, inner space, border, and outer space.</p>

    <div class="problem-area">
      <span class="problem-title">4 Parts of the Box Model</span>
      <ul>
        <li><code>content</code> : the real text or image</li>
        <li><code>padding</code> : inner space between content and border</li>
        <li><code>border</code> : the line around the box</li>
        <li><code>margin</code> : outer space between elements</li>
      </ul>
    </div>

    <p>You can also control box size with <code>width</code> and <code>height</code>.</p>

    <h2>Practice 1. Style a Card Box</h2>
    <p>Add CSS to <code>.card</code> in the code editor.</p>
    <ol>
      <li>Add a border</li>
      <li>Add <code>padding</code></li>
      <li>Add <code>margin</code></li>
      <li>Set a <code>width</code></li>
    </ol>
    <span class="theory-callout">Padding is inside the box. Margin is outside the box.</span>

    <h2>Practice 2. See the Difference Between Spaces</h2>
    <p>Change the values of <code>padding</code> and <code>margin</code> and compare the result.</p>
    <ul>
      <li>padding: 10px → 30px</li>
      <li>margin: 10px → 30px</li>
      <li>change border thickness</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Make the card look nice and check the difference between padding and margin.</p>
    </div>
  `
},
{
  id: "lesson6",
  chip: "Lesson 6",
  navTitle: "Lesson 6. Flexbox Layout",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Flexbox Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .container {
      background-color: #e2e8f0;
      padding: 20px;
    }

    .card {
      background-color: #dbeafe;
      border: 1px solid #93c5fd;
      padding: 20px;
      width: 120px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>Things I Like</h1>

  <div class="container">
    <div class="card">Music</div>
    <div class="card">Movies</div>
    <div class="card">Coding</div>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Flexbox Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      background-color: #e2e8f0;
      padding: 20px;
      border-radius: 12px;
    }

    .card {
      background-color: #dbeafe;
      border: 1px solid #93c5fd;
      padding: 20px;
      width: 120px;
      border-radius: 10px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Things I Like</h1>

  <div class="container">
    <div class="card">Music</div>
    <div class="card">Movies</div>
    <div class="card">Coding</div>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn how to arrange multiple elements using <strong>Flexbox</strong>.</p>
    <p>Flexbox makes it easy to place boxes in a row, center them, and control the space between them.</p>

    <div class="problem-area">
      <span class="problem-title">Main Properties</span>
      <ul>
        <li><code>display: flex;</code> : starts Flexbox</li>
        <li><code>gap</code> : space between items</li>
        <li><code>justify-content</code> : horizontal alignment</li>
        <li><code>align-items</code> : vertical alignment</li>
      </ul>
    </div>

    <p>Flexbox is applied to the parent element. Then the child elements are arranged inside it.</p>

    <h2>Practice 1. Arrange Cards in a Row</h2>
    <p>Add Flexbox properties to <code>.container</code> in the code editor.</p>
    <ol>
      <li>Add <code>display: flex;</code></li>
      <li>Add <code>gap</code> between cards</li>
      <li>Check whether the cards are arranged horizontally</li>
    </ol>
    <span class="theory-callout">Apply Flexbox to the parent element, not the child elements.</span>

    <h2>Practice 2. Center the Cards</h2>
    <p>Make the 3 cards appear in the center of the box.</p>
    <ul>
      <li><code>justify-content: center;</code></li>
      <li><code>align-items: center;</code></li>
      <li>Center the text inside each card</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Make 3 cards of your favorite things and arrange them nicely in a row using Flexbox.</p>
    </div>
  `
},
{
  id: "lesson7",
  chip: "Lesson 7",
  navTitle: "Lesson 7. UI Styling",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>UI Styling Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 20px;
      width: 280px;
    }

    .btn {
      background-color: #2563eb;
      color: white;
      padding: 10px 16px;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Mina's Website</h1>
    <p>Hello. I am learning how to build websites.</p>
    <a href="#" class="btn">Read More</a>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>UI Styling Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 24px;
      width: 280px;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
    }

    h1 {
      color: #1e3a8a;
      margin-top: 0;
      margin-bottom: 12px;
    }

    p {
      color: #334155;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .btn {
      display: inline-block;
      background-color: #2563eb;
      color: white;
      padding: 12px 18px;
      text-decoration: none;
      border-radius: 10px;
      font-weight: bold;
    }

    .btn:hover {
      background-color: #1d4ed8;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Mina's Website</h1>
    <p>Hello. I am learning how to build websites.</p>
    <a href="#" class="btn">Read More</a>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn <strong>UI styling</strong> to make a webpage look better.</p>
    <p>Buttons, cards, shadows, rounded corners, and hover effects make a page look more natural and complete.</p>

    <div class="problem-area">
      <span class="problem-title">Main Properties</span>
      <ul>
        <li><code>border-radius</code> : rounded corners</li>
        <li><code>box-shadow</code> : shadow</li>
        <li><code>:hover</code> : effect when the mouse is over an element</li>
        <li><code>text-decoration</code> : removes the underline from links</li>
        <li><code>display: inline-block;</code> : makes a link look like a button</li>
      </ul>
    </div>

    <h2>Practice 1. Make the Card Better</h2>
    <p>Add more styles to <code>.card</code> in the code editor.</p>
    <ol>
      <li>Add <code>border-radius</code></li>
      <li>Add <code>box-shadow</code></li>
      <li>Add a border color</li>
    </ol>
    <span class="theory-callout">Rounded corners and shadows make cards look softer and more modern.</span>

    <h2>Practice 2. Make the Link Look Like a Button</h2>
    <p>Change the <code>&lt;a&gt;</code> tag so that it looks like a real button.</p>
    <ul>
      <li>Add a background color</li>
      <li>Change text color to white</li>
      <li>Add padding</li>
      <li>Add a <code>:hover</code> effect</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Style the card and button so that the page looks more like a real website.</p>
    </div>
  `
},
{
  id: "lesson8",
  chip: "Lesson 8",
  navTitle: "Lesson 8. Responsive Web Basics",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Responsive Web Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      width: 180px;
    }
  </style>
</head>
<body>
  <h1>My Interests</h1>

  <div class="container">
    <div class="card">Web Design</div>
    <div class="card">Frontend</div>
    <div class="card">AI</div>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Responsive Web Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      width: 180px;
      text-align: center;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    }

    @media (max-width: 600px) {
      body {
        padding: 16px;
      }

      .container {
        flex-direction: column;
      }

      .card {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <h1>My Interests</h1>

  <div class="container">
    <div class="card">Web Design</div>
    <div class="card">Frontend</div>
    <div class="card">AI</div>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn the basics of <strong>responsive web design</strong>.</p>
    <p>Responsive web design means a webpage changes nicely on different screen sizes such as desktop, tablet, and mobile.</p>

    <div class="problem-area">
      <span class="problem-title">Main Concepts</span>
      <ul>
        <li><code>@media</code> : change styles under a screen condition</li>
        <li><code>max-width</code> : apply styles when the screen is smaller than a certain size</li>
        <li><code>flex-direction</code> : change row/column direction</li>
        <li><code>width: 100%;</code> : expand to full available width</li>
      </ul>
    </div>

    <p>This means you can use a row layout on large screens and a column layout on small screens.</p>

    <h2>Practice 1. Stack Cards Vertically on Small Screens</h2>
    <p>Add <code>@media (max-width: 600px)</code> so the cards become vertical on a small screen.</p>
    <ol>
      <li>Write the <code>@media</code> rule</li>
      <li>Add <code>flex-direction: column;</code> to <code>.container</code></li>
      <li>Check if the cards stack vertically</li>
    </ol>
    <span class="theory-callout">Try reducing the browser width to see the layout change.</span>

    <h2>Practice 2. Change Card Width on Small Screens</h2>
    <p>On mobile screens, use <code>width: 100%;</code> so the cards are easier to read.</p>
    <ul>
      <li>Reduce body padding</li>
      <li>Change card width to 100%</li>
      <li>Check if it looks better on small screens</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Complete the responsive code so horizontal cards become vertical cards on small screens.</p>
    </div>
  `
},
{
  id: "lesson9",
  chip: "Lesson 9",
  navTitle: "Lesson 9. JavaScript Basics",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Basics</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
    }

    button {
      background-color: #2563eb;
      color: white;
      border: none;
      padding: 12px 18px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Starting JavaScript</h1>
  <p id="message">Hello.</p>
  <button>Click Button</button>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Basics</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
    }

    button {
      background-color: #2563eb;
      color: white;
      border: none;
      padding: 12px 18px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Starting JavaScript</h1>
  <p id="message">Hello.</p>
  <button onclick="changeText()">Click Button</button>

  <script>
    function changeText() {
      document.getElementById("message").textContent = "You clicked the button!";
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn the basics of <strong>JavaScript</strong>.</p>
    <p>JavaScript adds actions to a webpage. For example, it can change text, open menus, or show messages when a button is clicked.</p>

    <div class="problem-area">
      <span class="problem-title">Main Concepts</span>
      <ul>
        <li><code>&lt;script&gt;</code> : where JavaScript is written</li>
        <li><code>function</code> : a block of code for one action</li>
        <li><code>onclick</code> : runs when clicked</li>
        <li><code>document.getElementById()</code> : selects an HTML element</li>
        <li><code>textContent</code> : changes text</li>
      </ul>
    </div>

    <p>With JavaScript, we can change what appears on the screen.</p>

    <h2>Practice 1. Change Text When a Button Is Clicked</h2>
    <p>Add JavaScript to the code so the sentence changes when the button is clicked.</p>
    <ol>
      <li>Add a <code>&lt;script&gt;</code> tag</li>
      <li>Create a <code>changeText()</code> function</li>
      <li>Connect <code>onclick</code> to the button</li>
    </ol>
    <span class="theory-callout">If the sentence changes when you click the button, you did it correctly.</span>

    <h2>Practice 2. Change the Sentence to Your Own Message</h2>
    <p>Change the text inside <code>textContent</code> to your own greeting or self-introduction.</p>
    <ul>
      <li>Hello → Nice to meet you</li>
      <li>You clicked the button! → My name is OOO</li>
      <li>Try your own sentence</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Complete the JavaScript code so a greeting changes when the button is clicked.</p>
    </div>
  `
},
{
  id: "lesson10",
  chip: "Lesson 10",
  navTitle: "Lesson 10. Condition & Function",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Condition Practice</title>
</head>
<body>
  <h1>Check Age</h1>
  <input type="number" id="age" placeholder="Enter your age">
  <button>Check</button>
  <p id="result"></p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Condition Practice</title>
</head>
<body>
  <h1>Check Age</h1>
  <input type="number" id="age" placeholder="Enter your age">
  <button onclick="checkAge()">Check</button>
  <p id="result"></p>

  <script>
    function checkAge() {
      const age = document.getElementById("age").value;

      if (age >= 20) {
        document.getElementById("result").textContent = "You are an adult.";
      } else {
        document.getElementById("result").textContent = "You are a minor.";
      }
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn <strong>if statements</strong> and <strong>functions</strong>.</p>
    <p>With conditions, your program can make decisions based on input values.</p>

    <div class="problem-area">
      <span class="problem-title">Main Concepts</span>
      <ul>
        <li><code>function</code> : a block of code</li>
        <li><code>if</code> : condition</li>
        <li><code>else</code> : alternative result</li>
        <li><code>value</code> : input value</li>
      </ul>
    </div>

    <h2>Practice 1. Show Different Results by Age</h2>
    <p>Create a function that shows different messages based on age.</p>

    <h2>Practice 2. Create Your Own Condition</h2>
    <p>Try changing the condition and message.</p>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Make your own condition that shows different results.</p>
    </div>
  `
},
{
  id: "lesson11",
  chip: "Lesson 11",
  navTitle: "Lesson 11. DOM Manipulation",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>DOM Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .box {
      background-color: white;
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 12px;
      width: 280px;
    }

    button {
      margin-top: 12px;
      padding: 10px 16px;
      border: none;
      border-radius: 10px;
      background-color: #2563eb;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="box">
    <h1 id="title">Hello</h1>
    <p id="desc">Try changing this sentence.</p>
    <button>Change</button>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>DOM Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .box {
      background-color: white;
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 12px;
      width: 280px;
    }

    .highlight {
      background-color: #dbeafe;
      border-color: #60a5fa;
    }

    button {
      margin-top: 12px;
      padding: 10px 16px;
      border: none;
      border-radius: 10px;
      background-color: #2563eb;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="box" id="card">
    <h1 id="title">Hello</h1>
    <p id="desc">Try changing this sentence.</p>
    <button onclick="changeContent()">Change</button>
  </div>

  <script>
    function changeContent() {
      document.getElementById("title").textContent = "Nice to meet you!";
      document.getElementById("desc").textContent = "The page content changed with JavaScript.";
      document.getElementById("card").classList.add("highlight");
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn <strong>DOM manipulation</strong>.</p>
    <p>The DOM lets JavaScript select and change HTML elements on the screen.</p>

    <div class="problem-area">
      <span class="problem-title">Main Concepts</span>
      <ul>
        <li><code>document.getElementById()</code> : select an element</li>
        <li><code>textContent</code> : change text</li>
        <li><code>classList.add()</code> : add a class</li>
        <li><code>classList.remove()</code> : remove a class</li>
      </ul>
    </div>

    <p>DOM manipulation means changing HTML elements directly with JavaScript.</p>

    <h2>Practice 1. Change the Title and Sentence</h2>
    <p>Make the title and sentence change when the button is clicked.</p>
    <ol>
      <li>Select the element with <code>id="title"</code></li>
      <li>Select the element with <code>id="desc"</code></li>
      <li>Use <code>textContent</code> to change the text</li>
    </ol>
    <span class="theory-callout">If the text changes when the button is clicked, your DOM manipulation works.</span>

    <h2>Practice 2. Change Style by Adding a Class</h2>
    <p>Add a new class to the box so the background color changes.</p>
    <ul>
      <li>Create a <code>.highlight</code> class</li>
      <li>Use <code>classList.add()</code></li>
      <li>Change background and border colors</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Complete the DOM code so both text and style change together.</p>
    </div>
  `
},
{
  id: "lesson12",
  chip: "Lesson 12",
  navTitle: "Lesson 12. Input Handling",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Input Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    input, button {
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }

    #result {
      margin-top: 20px;
      font-weight: bold;
      color: #1e3a8a;
    }
  </style>
</head>
<body>
  <h1>Enter Your Name</h1>
  <input type="text" id="username" placeholder="Enter your name">
  <button>Check</button>
  <p id="result"></p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Input Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    input, button {
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }

    #result {
      margin-top: 20px;
      font-weight: bold;
      color: #1e3a8a;
    }
  </style>
</head>
<body>
  <h1>Enter Your Name</h1>
  <input type="text" id="username" placeholder="Enter your name">
  <button onclick="showName()">Check</button>
  <p id="result"></p>

  <script>
    function showName() {
      const name = document.getElementById("username").value;

      if (name === "") {
        document.getElementById("result").textContent = "Please enter your name.";
      } else {
        document.getElementById("result").textContent = "Hello, " + name + "!";
      }
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>In this lesson, we learn <strong>input handling</strong> and <strong>basic forms</strong>.</p>
    <p>When a user types something into an input box, JavaScript can read that value and show a result.</p>

    <div class="problem-area">
      <span class="problem-title">Main Concepts</span>
      <ul>
        <li><code>&lt;input&gt;</code> : user input box</li>
        <li><code>value</code> : get the input value</li>
        <li><code>if</code> : check the input</li>
        <li><code>textContent</code> : show the result</li>
      </ul>
    </div>

    <p>Input handling means JavaScript reads and uses what the user typed.</p>

    <h2>Practice 1. Show a Greeting After Entering a Name</h2>
    <p>Make a greeting appear after the user enters a name and clicks the button.</p>
    <ol>
      <li>Select the element with <code>id="username"</code></li>
      <li>Read the input with <code>.value</code></li>
      <li>Show the greeting in <code>result</code></li>
    </ol>
    <span class="theory-callout">Use <code>.value</code> to read text from an input box.</span>

    <h2>Practice 2. Check for an Empty Input</h2>
    <p>If the input is empty, show a message asking the user to enter a name.</p>
    <ul>
      <li>Make the condition <code>if (name === "")</code></li>
      <li>If empty, show “Please enter your name.”</li>
      <li>If not empty, show the greeting</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Practice Mission</span>
      <p>Complete the code so it shows a greeting when the name is entered, and a guide message when the input is empty.</p>
    </div>
  `
},
{
  id: "lesson13",
  chip: "Lesson 13",
  navTitle: "Lesson 13. Final Project",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>My Website</h1>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Mina's Portfolio</title>
</head>
<body>
  <h1>Mina's Portfolio</h1>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>This lesson is about building your <strong>final project</strong>.</p>
    <p>You will combine everything you learned to create your own website.</p>

    <div class="problem-area">
      <span class="problem-title">Project Goals</span>
      <ul>
        <li>Create a personal website</li>
        <li>Use card layout</li>
        <li>Use Flexbox</li>
        <li>Apply CSS design</li>
        <li>Add buttons or links</li>
      </ul>
    </div>

    <h2>Practice</h2>
    <p>Build your own website using everything you learned.</p>

    <div class="problem-area">
      <span class="problem-title">Mission</span>
      <p>Complete your own personal website.</p>
    </div>
  `
},
{
  id: "lesson14",
  chip: "Lesson 14",
  navTitle: "Lesson 14. Presentation and Review",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Final Presentation</title>
</head>
<body>
  <h1>My Final Website</h1>
  <p>This page is my final project.</p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Final Presentation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
      color: #1e293b;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      max-width: 500px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.06);
    }

    h1 {
      color: #1e3a8a;
      margin-top: 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>My Final Website</h1>
    <p>This page is my final project.</p>
    <p>I made it using HTML, CSS, and JavaScript.</p>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Core Theory</h2>
    <p>This lesson is for <strong>final presentation and review</strong>.</p>
    <p>You will present your website and explain what you made and how it works.</p>

    <div class="problem-area">
      <span class="problem-title">Lesson Goals</span>
      <ul>
        <li>Check your final website</li>
        <li>Present your completed project</li>
        <li>Review HTML, CSS, and JavaScript</li>
        <li>Think about strengths and improvements</li>
      </ul>
    </div>

    <h2>Practice 1. Final Check</h2>
    <p>Check your website with these questions:</p>
    <ol>
      <li>Is the title clear?</li>
      <li>Is the layout organized?</li>
      <li>Do the colors and spacing look natural?</li>
      <li>Do buttons or input features work correctly?</li>
    </ol>
    <span class="theory-callout">Before presenting, first check whether the screen looks clear and complete.</span>

    <h2>Practice 2. Prepare Your Presentation</h2>
    <p>Introduce your website briefly.</p>
    <ul>
      <li>Website title</li>
      <li>Main content</li>
      <li>Most difficult part</li>
      <li>Best part</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Presentation Mission</span>
      <p>Explain in 30 seconds to 1 minute what your website shows and what features you added.</p>
    </div>

    <h2>Review Summary</h2>
    <ul>
      <li><strong>HTML</strong> : webpage structure</li>
      <li><strong>CSS</strong> : webpage design</li>
      <li><strong>JavaScript</strong> : webpage actions</li>
    </ul>
  `
}
  ]
};

export const lessons_ru = {
    status: "Готово",
    brandTitle: "HTML Learning Center",
    brandSubtitle: "International Students Web Practice",
    editorTitle: "Практика",
    run: "Запуск ▶",
    reset: "Сброс",
    answer: "Пример ответа",
    previewTitle: "Предварительный просмотр",
    lessons: [
      {
        id: "lesson1",
        chip: "Lesson 1",
        navTitle: "Урок 1. Основы HTML",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Моя первая веб-страница</title>
</head>
<body>
  <h1>Привет</h1>
  <p>Это первая веб-страница, которую я создал.</p>
</body>
</html>`,
        answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Страница самопрезентации</title>
</head>
<body>
  <h1>Привет</h1>
  <p>Меня зовут Иван Иванов.</p>
  <p>Я изучаю создание веб-сайтов.</p>
  <p>В будущем я хочу создавать свои собственные сайты.</p>
</body>
</html>`,
        lessonHtml: `
          <h2>Основная теория</h2>
          <p><strong>HTML</strong> создает структуру веб-страницы.</p>
          <p><strong>CSS</strong> оформляет страницу.</p>
          <p><strong>JavaScript</strong> добавляет действия и функции.</p>

          <div class="problem-area">
            <span class="problem-title">Простое объяснение</span>
            <p>Если сравнить веб-страницу с человеком:</p>
            <ul>
              <li>HTML = скелет</li>
              <li>CSS = одежда и цвет</li>
              <li>JavaScript = движение и функции</li>
            </ul>
          </div>

          <p>Сегодня мы будем работать именно с <strong>HTML</strong>.</p>

          <h2>Практика 1. Создайте первый HTML-файл</h2>
          <p>Базовый HTML-код уже находится справа.</p>
          <ol>
            <li>Измените текст внутри <code>&lt;h1&gt;</code>.</li>
            <li>Измените текст внутри <code>&lt;p&gt;</code>.</li>
            <li>Нажмите <strong>Запуск</strong>.</li>
          </ol>
          <span class="theory-callout">Если предпросмотр изменился, всё получилось.</span>

          <h2>Практика 2. Добавьте предложения о себе</h2>
          <p>Добавьте ещё теги <code>&lt;p&gt;</code> и напишите минимум 3 строки.</p>
          <div class="problem-area">
            <span class="problem-title">Практическое задание</span>
            <p>Добавьте 3 или больше предложений и снова запустите код.</p>
          </div>
        `
      },
      {
        id: "lesson2",
        chip: "Lesson 2",
        navTitle: "Урок 2. Базовые теги HTML",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Обо мне</title>
</head>
<body>
  <h1>Самопрезентация</h1>
  <p>Здравствуйте. Я студент.</p>
  <p>Я изучаю создание веб-сайтов.</p>
</body>
</html>`,
        answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>О Мине</title>
</head>
<body>
  <h1>Представление Мины</h1>
  <p>Здравствуйте. Меня зовут Мина.</p>
  <p>Мне 20 лет.</p>
  <p>Я интересуюсь играми и веб-дизайном.</p>

  <h2>Что мне нравится</h2>
  <ul>
    <li>Слушать музыку</li>
    <li>Смотреть фильмы</li>
    <li>Изучать программирование</li>
  </ul>

  <p><a href="https://www.google.com" target="_blank">Перейти на любимый сайт</a></p>
</body>
</html>`,
        lessonHtml: `
          <h2>Основная теория</h2>
          <p>На этом уроке мы изучим самые частые <strong>базовые теги HTML</strong>.</p>
          <p>Мы будем использовать заголовки, абзацы, списки и ссылки.</p>

          <div class="problem-area">
            <span class="problem-title">Важные теги</span>
            <ul>
              <li><code>&lt;h1&gt; ~ &lt;h6&gt;</code> : заголовки</li>
              <li><code>&lt;p&gt;</code> : абзац</li>
              <li><code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code> : список</li>
              <li><code>&lt;a&gt;</code> : ссылка</li>
            </ul>
          </div>

          <h2>Практика 1. Заголовки и абзацы</h2>
          <p>Измените содержимое заголовка и абзацев на свою самопрезентацию.</p>
          <ol>
            <li>Измените <code>&lt;title&gt;</code></li>
            <li>Измените <code>&lt;h1&gt;</code></li>
            <li>Напишите 2 или больше <code>&lt;p&gt;</code></li>
          </ol>
          <span class="theory-callout">Если заголовок большой, а абзацы описывают вас, всё верно.</span>

          <h2>Практика 2. Добавьте список и ссылку</h2>
          <p>Добавьте список из 3 вещей, которые вам нравятся, и одну ссылку.</p>

          <div class="problem-area">
            <span class="problem-title">Практическое задание</span>
            <p>Самостоятельно используйте <code>&lt;ul&gt;</code> и <code>&lt;a&gt;</code>.</p>
          </div>
        `
      },
      {
  id: "lesson3",
  chip: "Lesson 3",
  navTitle: "Урок 3. Структура HTML и семантические теги",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Мой сайт</title>
</head>
<body>
  <h1>Мой сайт</h1>
  <p>Это моя первая страница.</p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Мой сайт</title>
</head>
<body>
  <header>
    <h1>Сайт Мины</h1>
  </header>

  <nav>
    <a href="#">Главная</a>
    <a href="#">Обо мне</a>
    <a href="#">Контакты</a>
  </nav>

  <main>
    <section>
      <h2>Обо мне</h2>
      <p>Здравствуйте. Меня зовут Мина.</p>
      <p>Я изучаю создание веб-сайтов.</p>
    </section>
  </main>

  <footer>
    <p>© 2026 Mina</p>
  </footer>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим <strong>базовую структуру HTML-документа</strong> и <strong>семантические теги</strong>.</p>
    <p>Веб-страница должна не только содержать текст, но и быть разделена на смысловые части.</p>

    <div class="problem-area">
      <span class="problem-title">Важные теги</span>
      <ul>
        <li><code>&lt;header&gt;</code> : область заголовка</li>
        <li><code>&lt;nav&gt;</code> : область меню</li>
        <li><code>&lt;main&gt;</code> : основное содержимое</li>
        <li><code>&lt;section&gt;</code> : группа содержимого по теме</li>
        <li><code>&lt;footer&gt;</code> : нижняя часть страницы</li>
      </ul>
    </div>

    <p>Эти теги делают код более понятным, а структуру страницы — более ясной.</p>

    <h2>Практика 1. Создайте базовую структуру сайта</h2>
    <p>Добавьте <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> и <code>&lt;footer&gt;</code> в код справа.</p>
    <ol>
      <li>Создайте область заголовка</li>
      <li>Добавьте 2 или 3 пункта меню</li>
      <li>Напишите короткую самопрезентацию в основной части</li>
    </ol>
    <span class="theory-callout">Главная цель — разделить сайт на понятные области.</span>

    <h2>Практика 2. Разделите содержимое с помощью section</h2>
    <p>Внутри <code>&lt;main&gt;</code> используйте <code>&lt;section&gt;</code> для разделения содержимого на Обо мне / Интересы / Цели.</p>
    <ul>
      <li>Обо мне</li>
      <li>Интересы</li>
      <li>Будущие цели</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Разделите основное содержимое как минимум на 2 элемента <code>&lt;section&gt;</code> и запустите код.</p>
    </div>
  `
},
{
  id: "lesson4",
  chip: "Lesson 4",
  navTitle: "Урок 4. Основы CSS",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Обо мне</title>
  <style>
  </style>
</head>
<body>
  <h1>Сайт Мины</h1>
  <p>Здравствуйте. Я изучаю создание веб-сайтов.</p>
  <p>Сейчас я сделаю эту страницу красивее.</p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Обо мне</title>
  <style>
    body {
      background-color: #f8fafc;
      color: #1e293b;
      font-family: Arial, sans-serif;
      padding: 30px;
    }

    h1 {
      color: #2563eb;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      margin-bottom: 12px;
    }
  </style>
</head>
<body>
  <h1>Сайт Мины</h1>
  <p>Здравствуйте. Я изучаю создание веб-сайтов.</p>
  <p>Сейчас я сделаю эту страницу красивее.</p>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим, как использовать <strong>CSS</strong> для оформления веб-страницы.</p>
    <p>HTML создает структуру, а CSS отвечает за цвет, шрифт, размер и отступы.</p>

    <div class="problem-area">
      <span class="problem-title">Основные свойства CSS</span>
      <ul>
        <li><code>color</code> : цвет текста</li>
        <li><code>background-color</code> : цвет фона</li>
        <li><code>font-size</code> : размер текста</li>
        <li><code>padding</code> : внутренний отступ</li>
        <li><code>font-family</code> : шрифт</li>
      </ul>
    </div>

    <p>Обычно CSS пишут внутри тега <code>&lt;style&gt;</code>.</p>

    <h2>Практика 1. Оформите заголовок и абзацы</h2>
    <p>Напишите CSS внутри тега <code>&lt;style&gt;</code> в редакторе справа.</p>
    <ol>
      <li>Измените цвет <code>h1</code></li>
      <li>Увеличьте размер текста <code>h1</code></li>
      <li>Измените размер текста <code>p</code></li>
    </ol>
    <span class="theory-callout">Вы можете оформлять элементы по имени HTML-тега. Пример: <code>h1 { color: blue; }</code></span>

    <h2>Практика 2. Добавьте фон и отступы</h2>
    <p>Используйте CSS для <code>body</code>, чтобы изменить внешний вид всей страницы.</p>
    <ul>
      <li>Добавьте цвет фона</li>
      <li>Измените цвет текста</li>
      <li>Добавьте отступы страницы</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Измените цвет заголовка, размер текста, цвет фона и отступы, затем запустите код.</p>
    </div>
  `
},
{
  id: "lesson5",
  chip: "Lesson 5",
  navTitle: "Урок 5. Блочная модель CSS",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика Box Model</title>
  <style>
    .card {
      background-color: #dbeafe;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Карточка профиля</h1>
    <p>Здравствуйте. Я изучаю создание веб-сайтов.</p>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика Box Model</title>
  <style>
    body {
      background-color: #f8fafc;
      font-family: Arial, sans-serif;
      padding: 30px;
    }

    .card {
      background-color: #dbeafe;
      border: 2px solid #2563eb;
      padding: 20px;
      margin: 20px 0;
      width: 320px;
      border-radius: 12px;
    }

    h1 {
      margin-bottom: 12px;
      font-size: 24px;
      color: #1e3a8a;
    }

    p {
      margin: 0;
      color: #1e293b;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Карточка профиля</h1>
    <p>Здравствуйте. Я изучаю создание веб-сайтов.</p>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим <strong>блочную модель CSS</strong>.</p>
    <p>Большинство элементов на веб-странице работают как прямоугольные блоки. У блока есть содержимое, внутренний отступ, рамка и внешний отступ.</p>

    <div class="problem-area">
      <span class="problem-title">4 части блочной модели</span>
      <ul>
        <li><code>content</code> : текст или изображение</li>
        <li><code>padding</code> : внутренний отступ между содержимым и рамкой</li>
        <li><code>border</code> : рамка вокруг блока</li>
        <li><code>margin</code> : внешний отступ между элементами</li>
      </ul>
    </div>

    <p>Размер блока можно менять с помощью <code>width</code> и <code>height</code>.</p>

    <h2>Практика 1. Оформите карточку</h2>
    <p>Добавьте CSS для <code>.card</code> в редакторе кода.</p>
    <ol>
      <li>Добавьте рамку</li>
      <li>Добавьте <code>padding</code></li>
      <li>Добавьте <code>margin</code></li>
      <li>Укажите <code>width</code></li>
    </ol>
    <span class="theory-callout">Padding находится внутри блока. Margin — снаружи блока.</span>

    <h2>Практика 2. Посмотрите разницу между отступами</h2>
    <p>Измените значения <code>padding</code> и <code>margin</code> и сравните результат.</p>
    <ul>
      <li>padding: 10px → 30px</li>
      <li>margin: 10px → 30px</li>
      <li>измените толщину рамки</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Сделайте карточку красивой и проверьте разницу между padding и margin.</p>
    </div>
  `
},
{
  id: "lesson6",
  chip: "Lesson 6",
  navTitle: "Урок 6. Flexbox Layout",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика Flexbox</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .container {
      background-color: #e2e8f0;
      padding: 20px;
    }

    .card {
      background-color: #dbeafe;
      border: 1px solid #93c5fd;
      padding: 20px;
      width: 120px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>Что мне нравится</h1>

  <div class="container">
    <div class="card">Музыка</div>
    <div class="card">Фильмы</div>
    <div class="card">Кодинг</div>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика Flexbox</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      background-color: #e2e8f0;
      padding: 20px;
      border-radius: 12px;
    }

    .card {
      background-color: #dbeafe;
      border: 1px solid #93c5fd;
      padding: 20px;
      width: 120px;
      border-radius: 10px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Что мне нравится</h1>

  <div class="container">
    <div class="card">Музыка</div>
    <div class="card">Фильмы</div>
    <div class="card">Кодинг</div>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим, как располагать несколько элементов с помощью <strong>Flexbox</strong>.</p>
    <p>Flexbox позволяет легко выстраивать блоки в ряд, выравнивать их по центру и задавать расстояние между ними.</p>

    <div class="problem-area">
      <span class="problem-title">Основные свойства</span>
      <ul>
        <li><code>display: flex;</code> : включает Flexbox</li>
        <li><code>gap</code> : расстояние между элементами</li>
        <li><code>justify-content</code> : выравнивание по горизонтали</li>
        <li><code>align-items</code> : выравнивание по вертикали</li>
      </ul>
    </div>

    <p>Flexbox применяется к родительскому элементу. После этого дочерние элементы выстраиваются внутри него.</p>

    <h2>Практика 1. Расположите карточки в ряд</h2>
    <p>Добавьте свойства Flexbox к <code>.container</code> в редакторе кода.</p>
    <ol>
      <li>Добавьте <code>display: flex;</code></li>
      <li>Добавьте <code>gap</code> между карточками</li>
      <li>Проверьте, что карточки выстроились горизонтально</li>
    </ol>
    <span class="theory-callout">Flexbox нужно применять к родительскому элементу.</span>

    <h2>Практика 2. Выровняйте карточки по центру</h2>
    <p>Сделайте так, чтобы 3 карточки находились по центру контейнера.</p>
    <ul>
      <li><code>justify-content: center;</code></li>
      <li><code>align-items: center;</code></li>
      <li>Выровняйте текст внутри карточек по центру</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Сделайте 3 карточки с любимыми вещами и красиво расположите их в ряд с помощью Flexbox.</p>
    </div>
  `
},
{
  id: "lesson7",
  chip: "Lesson 7",
  navTitle: "Урок 7. Оформление UI",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика UI Styling</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 20px;
      width: 280px;
    }

    .btn {
      background-color: #2563eb;
      color: white;
      padding: 10px 16px;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Сайт Мины</h1>
    <p>Здравствуйте. Я изучаю создание веб-сайтов.</p>
    <a href="#" class="btn">Подробнее</a>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика UI Styling</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 24px;
      width: 280px;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
    }

    h1 {
      color: #1e3a8a;
      margin-top: 0;
      margin-bottom: 12px;
    }

    p {
      color: #334155;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .btn {
      display: inline-block;
      background-color: #2563eb;
      color: white;
      padding: 12px 18px;
      text-decoration: none;
      border-radius: 10px;
      font-weight: bold;
    }

    .btn:hover {
      background-color: #1d4ed8;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Сайт Мины</h1>
    <p>Здравствуйте. Я изучаю создание веб-сайтов.</p>
    <a href="#" class="btn">Подробнее</a>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим <strong>оформление UI</strong>, чтобы веб-страница выглядела лучше.</p>
    <p>Кнопки, карточки, тени, скруглённые углы и hover-эффекты делают страницу более естественной и завершённой.</p>

    <div class="problem-area">
      <span class="problem-title">Основные свойства</span>
      <ul>
        <li><code>border-radius</code> : скруглённые углы</li>
        <li><code>box-shadow</code> : тень</li>
        <li><code>:hover</code> : эффект при наведении мыши</li>
        <li><code>text-decoration</code> : убирает подчёркивание у ссылки</li>
        <li><code>display: inline-block;</code> : делает ссылку похожей на кнопку</li>
      </ul>
    </div>

    <h2>Практика 1. Сделайте карточку красивее</h2>
    <p>Добавьте больше стилей к <code>.card</code> в редакторе кода.</p>
    <ol>
      <li>Добавьте <code>border-radius</code></li>
      <li>Добавьте <code>box-shadow</code></li>
      <li>Добавьте цвет рамки</li>
    </ol>
    <span class="theory-callout">Скруглённые углы и тени делают карточки мягче и современнее.</span>

    <h2>Практика 2. Сделайте ссылку похожей на кнопку</h2>
    <p>Измените тег <code>&lt;a&gt;</code>, чтобы он выглядел как настоящая кнопка.</p>
    <ul>
      <li>Добавьте цвет фона</li>
      <li>Сделайте текст белым</li>
      <li>Добавьте padding</li>
      <li>Добавьте эффект <code>:hover</code></li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Оформите карточку и кнопку так, чтобы страница стала больше похожа на настоящий сайт.</p>
    </div>
  `
},
{
  id: "lesson8",
  chip: "Lesson 8",
  navTitle: "Урок 8. Основы адаптивного веб-дизайна",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика Responsive Web</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      width: 180px;
    }
  </style>
</head>
<body>
  <h1>Мои интересы</h1>

  <div class="container">
    <div class="card">Веб-дизайн</div>
    <div class="card">Frontend</div>
    <div class="card">AI</div>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика Responsive Web</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
      margin-bottom: 20px;
    }

    .container {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      width: 180px;
      text-align: center;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    }

    @media (max-width: 600px) {
      body {
        padding: 16px;
      }

      .container {
        flex-direction: column;
      }

      .card {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <h1>Мои интересы</h1>

  <div class="container">
    <div class="card">Веб-дизайн</div>
    <div class="card">Frontend</div>
    <div class="card">AI</div>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим основы <strong>адаптивного веб-дизайна</strong>.</p>
    <p>Адаптивный веб-дизайн означает, что страница красиво меняется на разных размерах экрана: компьютере, планшете и телефоне.</p>

    <div class="problem-area">
      <span class="problem-title">Основные понятия</span>
      <ul>
        <li><code>@media</code> : изменение стилей при определённом условии экрана</li>
        <li><code>max-width</code> : применение стилей при небольшой ширине экрана</li>
        <li><code>flex-direction</code> : смена направления row/column</li>
        <li><code>width: 100%;</code> : растянуть на всю доступную ширину</li>
      </ul>
    </div>

    <p>Это значит, что на больших экранах карточки могут быть в ряд, а на маленьких — располагаться по вертикали.</p>

    <h2>Практика 1. Сделайте карточки вертикальными на маленьком экране</h2>
    <p>Добавьте <code>@media (max-width: 600px)</code>, чтобы карточки становились вертикальными на маленьком экране.</p>
    <ol>
      <li>Напишите правило <code>@media</code></li>
      <li>Добавьте <code>flex-direction: column;</code> для <code>.container</code></li>
      <li>Проверьте, что карточки расположились вертикально</li>
    </ol>
    <span class="theory-callout">Попробуйте уменьшить ширину браузера и посмотреть, как меняется layout.</span>

    <h2>Практика 2. Измените ширину карточек на маленьком экране</h2>
    <p>На мобильном экране используйте <code>width: 100%;</code>, чтобы карточки было легче читать.</p>
    <ul>
      <li>Уменьшите padding у body</li>
      <li>Поставьте ширину карточек 100%</li>
      <li>Проверьте, стало ли удобнее</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Завершите адаптивный код так, чтобы горизонтальные карточки на маленьком экране становились вертикальными.</p>
    </div>
  `
},
{
  id: "lesson9",
  chip: "Lesson 9",
  navTitle: "Урок 9. Основы JavaScript",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Основы JavaScript</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
    }

    button {
      background-color: #2563eb;
      color: white;
      border: none;
      padding: 12px 18px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Начинаем JavaScript</h1>
  <p id="message">Здравствуйте.</p>
  <button>Нажмите кнопку</button>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Основы JavaScript</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    h1 {
      color: #1e3a8a;
    }

    button {
      background-color: #2563eb;
      color: white;
      border: none;
      padding: 12px 18px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Начинаем JavaScript</h1>
  <p id="message">Здравствуйте.</p>
  <button onclick="changeText()">Нажмите кнопку</button>

  <script>
    function changeText() {
      document.getElementById("message").textContent = "Вы нажали кнопку!";
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим основы <strong>JavaScript</strong>.</p>
    <p>JavaScript добавляет действия на веб-страницу. Например, он может менять текст, открывать меню или показывать сообщения при нажатии кнопки.</p>

    <div class="problem-area">
      <span class="problem-title">Основные понятия</span>
      <ul>
        <li><code>&lt;script&gt;</code> : место для JavaScript</li>
        <li><code>function</code> : блок кода для одного действия</li>
        <li><code>onclick</code> : выполняется при нажатии</li>
        <li><code>document.getElementById()</code> : выбирает HTML-элемент</li>
        <li><code>textContent</code> : меняет текст</li>
      </ul>
    </div>

    <p>С помощью JavaScript можно изменять то, что видно на экране.</p>

    <h2>Практика 1. Меняем текст при нажатии кнопки</h2>
    <p>Добавьте JavaScript в код, чтобы предложение менялось при нажатии кнопки.</p>
    <ol>
      <li>Добавьте тег <code>&lt;script&gt;</code></li>
      <li>Создайте функцию <code>changeText()</code></li>
      <li>Подключите <code>onclick</code> к кнопке</li>
    </ol>
    <span class="theory-callout">Если предложение меняется после нажатия кнопки, значит всё сделано правильно.</span>

    <h2>Практика 2. Измените текст на своё сообщение</h2>
    <p>Измените текст внутри <code>textContent</code> на своё приветствие или самопрезентацию.</p>
    <ul>
      <li>Здравствуйте → Рад познакомиться</li>
      <li>Вы нажали кнопку! → Меня зовут OOO</li>
      <li>Попробуйте своё предложение</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Завершите JavaScript-код так, чтобы приветствие менялось при нажатии кнопки.</p>
    </div>
  `
},
{
  id: "lesson10",
  chip: "Lesson 10",
  navTitle: "Урок 10. Условия и функции",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика условий</title>
</head>
<body>
  <h1>Проверка возраста</h1>
  <input type="number" id="age" placeholder="Введите возраст">
  <button>Проверить</button>
  <p id="result"></p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика условий</title>
</head>
<body>
  <h1>Проверка возраста</h1>
  <input type="number" id="age" placeholder="Введите возраст">
  <button onclick="checkAge()">Проверить</button>
  <p id="result"></p>

  <script>
    function checkAge() {
      const age = document.getElementById("age").value;

      if (age >= 20) {
        document.getElementById("result").textContent = "Вы взрослый.";
      } else {
        document.getElementById("result").textContent = "Вы несовершеннолетний.";
      }
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим <strong>условия (if)</strong> и <strong>функции</strong>.</p>
    <p>С помощью условий программа может принимать решения.</p>

    <div class="problem-area">
      <span class="problem-title">Основные понятия</span>
      <ul>
        <li><code>function</code> : функция</li>
        <li><code>if</code> : условие</li>
        <li><code>else</code> : иначе</li>
        <li><code>value</code> : значение</li>
      </ul>
    </div>

    <h2>Практика 1. Разные результаты по возрасту</h2>
    <p>Сделайте функцию, которая выводит разный текст в зависимости от возраста.</p>

    <h2>Практика 2. Создайте своё условие</h2>
    <p>Попробуйте изменить условие и текст.</p>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Создайте своё условие и выведите разные результаты.</p>
    </div>
  `
},
{
  id: "lesson11",
  chip: "Lesson 11",
  navTitle: "Урок 11. DOM Manipulation",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика DOM</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .box {
      background-color: white;
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 12px;
      width: 280px;
    }

    button {
      margin-top: 12px;
      padding: 10px 16px;
      border: none;
      border-radius: 10px;
      background-color: #2563eb;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="box">
    <h1 id="title">Здравствуйте</h1>
    <p id="desc">Попробуйте изменить это предложение.</p>
    <button>Изменить</button>
  </div>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика DOM</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .box {
      background-color: white;
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 12px;
      width: 280px;
    }

    .highlight {
      background-color: #dbeafe;
      border-color: #60a5fa;
    }

    button {
      margin-top: 12px;
      padding: 10px 16px;
      border: none;
      border-radius: 10px;
      background-color: #2563eb;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="box" id="card">
    <h1 id="title">Здравствуйте</h1>
    <p id="desc">Попробуйте изменить это предложение.</p>
    <button onclick="changeContent()">Изменить</button>
  </div>

  <script>
    function changeContent() {
      document.getElementById("title").textContent = "Рад познакомиться!";
      document.getElementById("desc").textContent = "Содержимое страницы изменилось с помощью JavaScript.";
      document.getElementById("card").classList.add("highlight");
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим <strong>DOM manipulation</strong>.</p>
    <p>DOM позволяет JavaScript выбирать и изменять HTML-элементы на странице.</p>

    <div class="problem-area">
      <span class="problem-title">Основные понятия</span>
      <ul>
        <li><code>document.getElementById()</code> : выбор элемента</li>
        <li><code>textContent</code> : изменение текста</li>
        <li><code>classList.add()</code> : добавить класс</li>
        <li><code>classList.remove()</code> : удалить класс</li>
      </ul>
    </div>

    <p>DOM manipulation — это прямое изменение HTML-элементов с помощью JavaScript.</p>

    <h2>Практика 1. Измените заголовок и текст</h2>
    <p>Сделайте так, чтобы заголовок и текст менялись при нажатии кнопки.</p>
    <ol>
      <li>Выберите элемент с <code>id="title"</code></li>
      <li>Выберите элемент с <code>id="desc"</code></li>
      <li>Используйте <code>textContent</code> для изменения текста</li>
    </ol>
    <span class="theory-callout">Если текст меняется после нажатия кнопки, DOM работает правильно.</span>

    <h2>Практика 2. Измените стиль через добавление класса</h2>
    <p>Добавьте новый класс блоку, чтобы изменился цвет фона.</p>
    <ul>
      <li>Создайте класс <code>.highlight</code></li>
      <li>Используйте <code>classList.add()</code></li>
      <li>Измените цвет фона и рамки</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Завершите DOM-код так, чтобы одновременно менялись и текст, и стиль.</p>
    </div>
  `
},
{
  id: "lesson12",
  chip: "Lesson 12",
  navTitle: "Урок 12. Обработка ввода и основы форм",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика ввода</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    input, button {
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }

    #result {
      margin-top: 20px;
      font-weight: bold;
      color: #1e3a8a;
    }
  </style>
</head>
<body>
  <h1>Введите имя</h1>
  <input type="text" id="username" placeholder="Введите ваше имя">
  <button>Проверить</button>
  <p id="result"></p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Практика ввода</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    input, button {
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }

    #result {
      margin-top: 20px;
      font-weight: bold;
      color: #1e3a8a;
    }
  </style>
</head>
<body>
  <h1>Введите имя</h1>
  <input type="text" id="username" placeholder="Введите ваше имя">
  <button onclick="showName()">Проверить</button>
  <p id="result"></p>

  <script>
    function showName() {
      const name = document.getElementById("username").value;

      if (name === "") {
        document.getElementById("result").textContent = "Пожалуйста, введите имя.";
      } else {
        document.getElementById("result").textContent = "Здравствуйте, " + name + "!";
      }
    }
  </script>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>На этом уроке мы изучим <strong>обработку ввода</strong> и <strong>основы форм</strong>.</p>
    <p>Когда пользователь вводит текст в поле, JavaScript может прочитать это значение и показать результат.</p>

    <div class="problem-area">
      <span class="problem-title">Основные понятия</span>
      <ul>
        <li><code>&lt;input&gt;</code> : поле ввода</li>
        <li><code>value</code> : получить введённое значение</li>
        <li><code>if</code> : проверка ввода</li>
        <li><code>textContent</code> : вывод результата</li>
      </ul>
    </div>

    <p>Обработка ввода означает, что JavaScript читает и использует то, что написал пользователь.</p>

    <h2>Практика 1. Показать приветствие после ввода имени</h2>
    <p>Сделайте так, чтобы после ввода имени и нажатия кнопки появлялось приветствие.</p>
    <ol>
      <li>Выберите элемент с <code>id="username"</code></li>
      <li>Прочитайте значение через <code>.value</code></li>
      <li>Покажите приветствие в <code>result</code></li>
    </ol>
    <span class="theory-callout">Чтобы получить текст из поля ввода, используйте <code>.value</code>.</span>

    <h2>Практика 2. Проверка на пустой ввод</h2>
    <p>Если пользователь ничего не ввёл, покажите сообщение с просьбой ввести имя.</p>
    <ul>
      <li>Создайте условие <code>if (name === "")</code></li>
      <li>Если пусто, покажите “Пожалуйста, введите имя.”</li>
      <li>Если не пусто, покажите приветствие</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Практическое задание</span>
      <p>Завершите код так, чтобы при вводе имени показывалось приветствие, а при пустом вводе — подсказка.</p>
    </div>
  `
},
{
  id: "lesson13",
  chip: "Lesson 13",
  navTitle: "Урок 13. Финальный проект",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Мой сайт</title>
</head>
<body>
  <h1>Мой сайт</h1>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Портфолио Мины</title>
</head>
<body>
  <h1>Портфолио Мины</h1>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>Этот урок посвящён созданию <strong>финального проекта</strong>.</p>
    <p>Вы объедините все изученные знания и создадите свой сайт.</p>

    <div class="problem-area">
      <span class="problem-title">Цель проекта</span>
      <ul>
        <li>Создать персональный сайт</li>
        <li>Использовать карточки</li>
        <li>Использовать Flexbox</li>
        <li>Применить CSS дизайн</li>
        <li>Добавить кнопки или ссылки</li>
      </ul>
    </div>

    <h2>Практика</h2>
    <p>Создайте свой сайт, используя всё, что вы изучили.</p>

    <div class="problem-area">
      <span class="problem-title">Задание</span>
      <p>Завершите свой персональный сайт.</p>
    </div>
  `
},
{
  id: "lesson14",
  chip: "Lesson 14",
  navTitle: "Урок 14. Презентация и повторение",
  defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Финальная презентация</title>
</head>
<body>
  <h1>Мой финальный сайт</h1>
  <p>Эта страница — мой финальный проект.</p>
</body>
</html>`,
  answerCode: `<!DOCTYPE html>
<html>
<head>
  <title>Финальная презентация</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
      color: #1e293b;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      max-width: 500px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.06);
    }

    h1 {
      color: #1e3a8a;
      margin-top: 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Мой финальный сайт</h1>
    <p>Эта страница — мой финальный проект.</p>
    <p>Я сделал её с помощью HTML, CSS и JavaScript.</p>
  </div>
</body>
</html>`,
  lessonHtml: `
    <h2>Основная теория</h2>
    <p>Этот урок посвящён <strong>финальной презентации и повторению</strong>.</p>
    <p>Вы представите свой сайт и объясните, что вы сделали и как он работает.</p>

    <div class="problem-area">
      <span class="problem-title">Цели урока</span>
      <ul>
        <li>Проверить финальный сайт</li>
        <li>Представить готовый проект</li>
        <li>Повторить HTML, CSS и JavaScript</li>
        <li>Подумать о сильных сторонах и улучшениях</li>
      </ul>
    </div>

    <h2>Практика 1. Финальная проверка</h2>
    <p>Проверьте свой сайт по этим вопросам:</p>
    <ol>
      <li>Хорошо ли виден заголовок?</li>
      <li>Организован ли layout?</li>
      <li>Выглядят ли цвета и отступы естественно?</li>
      <li>Работают ли кнопки и поля ввода?</li>
    </ol>
    <span class="theory-callout">Перед презентацией важно сначала проверить, хорошо ли выглядит экран.</span>

    <h2>Практика 2. Подготовьте презентацию</h2>
    <p>Кратко представьте свой сайт.</p>
    <ul>
      <li>Название сайта</li>
      <li>Основное содержание</li>
      <li>Самая трудная часть</li>
      <li>Лучшая часть</li>
    </ul>

    <div class="problem-area">
      <span class="problem-title">Задание для презентации</span>
      <p>За 30 секунд – 1 минуту объясните, что показывает ваш сайт и какие функции вы добавили.</p>
    </div>

    <h2>Итоговое повторение</h2>
    <ul>
      <li><strong>HTML</strong> : структура страницы</li>
      <li><strong>CSS</strong> : оформление страницы</li>
      <li><strong>JavaScript</strong> : действия на странице</li>
    </ul>
  `
}
]
}