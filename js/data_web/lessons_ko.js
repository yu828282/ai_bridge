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