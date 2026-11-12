/* Web course: one theory and example source, with equivalent KO / EN / RU lessons. */
export const lessons_ko = {
  status: "준비 완료",
  brandTitle: "HTML · CSS · JavaScript",
  brandSubtitle: "처음 시작하는 웹 만들기",
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
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>나의 첫 웹페이지</title>
</head>
<body>
  <h1>안녕하세요</h1>
  <p>이것은 내가 만든 첫 웹페이지입니다.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
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
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>인사말과 자기소개 3문장이 있는 첫 페이지를 만듭니다.</p></div>
<h2>💡 핵심 이론</h2>
<p>브라우저(Chrome 등)는 <strong>HTML 코드를 읽어 화면</strong>으로 보여줍니다. 여기서는 코드 창을 고치고 <strong>실행 ▶</strong>을 누르면 미리보기가 바뀝니다.</p>
<p><code>&lt;p&gt;Hello&lt;/p&gt;</code>에서 <code>&lt;p&gt;</code>는 문단 시작, <code>&lt;/p&gt;</code>는 문단 끝입니다. 먼저 태그 사이의 <code>Hello</code>만 바꿉니다.</p>
<p><code>&lt;head&gt;</code>에는 제목·설정, <code>&lt;body&gt;</code>에는 화면에 보일 내용을 넣습니다. HTML은 구조, CSS는 모양, JavaScript는 동작을 담당합니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li><code>&lt;h1&gt;</code> 안의 인사말을 내 말로 바꾸세요.</li><li><code>&lt;p&gt;문장&lt;/p&gt;</code>을 3개 만들어 이름·관심사·목표를 적으세요.</li><li><strong>실행 ▶</strong>을 누르고 코드와 미리보기를 비교하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>내 제목 아래에 자기소개 문단 3개가 보입니다.</p></div>
<p class="theory-callout">꺾쇠(&lt; &gt;), 슬래시(/), 태그 이름은 그대로 두고 글자부터 바꿔보세요.</p>
`
    },
    {
      id: "lesson2",
      chip: "Lesson 2",
      navTitle: "2강. HTML 기본 태그",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>나의 소개</title>
</head>
<body>
  <h1 id="top">자기소개</h1>
  <p>안녕하세요. 저는 학생입니다.</p>
  <p>웹사이트 만드는 법을 배우고 있습니다.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>민수의 소개</title>
</head>
<body>
  <h1 id="top">민수의 자기소개</h1>
  <p>안녕하세요. 제 이름은 민수입니다.</p>
  <p>저는 게임과 웹디자인에 관심이 있습니다.</p>

  <h2 id="likes">좋아하는 것</h2>
  <ul>
    <li>음악 듣기</li>
    <li>영화 보기</li>
    <li>코딩 배우기</li>
  </ul>

  <p><a href="#likes">관심사로 이동</a> · <a href="#top">맨 위로</a></p>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>제목·목록·링크로 소개 내용을 구분합니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><code>h1</code>은 페이지의 중심 제목, <code>h2</code>는 그 아래 구역의 제목입니다. 숫자는 <strong>내용의 단계</strong>이며 글자 크기를 고르는 번호가 아닙니다.</p>
<p><code>&lt;ul&gt;</code>은 순서 없는 목록이고, 안의 <code>&lt;li&gt;</code> 하나가 목록 항목 하나입니다.</p>
<p><code>&lt;a href="#likes"&gt;관심사 보기&lt;/a&gt;</code>에서 <code>href</code>는 링크의 목적지를 정하는 <strong>속성</strong>입니다. <code>#likes</code>는 같은 페이지의 <code>id="likes"</code> 위치로 이동합니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li>이름을 담은 <code>h1</code>, 소개 문단 2개, <code>h2</code> 제목을 만드세요.</li><li><code>ul</code> 안에 좋아하는 것 3개를 <code>li</code>로 적으세요.</li><li>관심사 제목에 <code>id="likes"</code>를 넣고 그곳으로 가는 링크를 추가하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>제목 아래에 목록 3개가 보이고 링크를 누르면 관심사 위치로 이동합니다.</p></div>
<p class="theory-callout">실습에서는 같은 페이지 안의 링크를 사용합니다. 이미 목표 위치가 보이면 큰 화면 이동이 없을 수 있습니다.</p>
`
    },
    {
      id: "lesson3",
      chip: "Lesson 3",
      navTitle: "3강. HTML 문서 구조와 시맨틱 태그",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>나의 웹사이트</title>
</head>
<body>
  <h1>나의 웹사이트</h1>
  <p>이곳은 나의 첫 페이지입니다.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>민수</title>
  
</head>
<body>
  <header><h1>민수</h1></header>
  <nav><a href="#about">자기소개</a> · <a href="#interests">관심사</a></nav>
  <main>
    <section id="about"><h2>자기소개</h2><p>안녕하세요. 저는 웹개발을 배우고 있습니다.</p></section>
    <section id="interests"><h2>관심사</h2><p>음악과 웹디자인에 관심이 있습니다.</p></section>
  </main>
  <footer><p>© 2026 민수</p></footer>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>페이지를 역할별 구역으로 나누고 메뉴를 연결합니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><strong>시맨틱 태그</strong>는 구역의 역할을 이름으로 알려줍니다. <code>header</code>는 소개 영역, <code>nav</code>는 이동 메뉴, <code>main</code>은 핵심 내용, <code>footer</code>는 마무리 정보입니다.</p>
<p><code>section</code>은 한 주제의 내용 묶음입니다. 각 구역에는 내용을 알려주는 <code>h2</code> 제목을 붙입니다.</p>
<p><code>href="#about"</code>과 <code>id="about"</code>은 같은 이름으로 맞춰야 연결됩니다. <code>id</code>는 문서 안에서 중복하지 않습니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li>제목·메뉴·본문·하단 정보를 각각 역할에 맞는 태그로 감싸세요.</li><li><code>main</code> 안에 소개와 관심사 <code>section</code> 2개를 만드세요.</li><li>각 section에 <code>about</code>, <code>interests</code> id를 주고 메뉴 링크를 연결하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>소개·관심사 구역과 두 메뉴가 있고, 각 메뉴가 해당 구역을 가리킵니다.</p></div>
<p class="theory-callout">태그 이름을 바꾸는 것만으로 색이나 배치가 바뀌지는 않습니다. 꾸미기는 다음 강의 CSS에서 다룹니다.</p>
`
    },
    {
      id: "lesson4",
      chip: "Lesson 4",
      navTitle: "4강. CSS 기초",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>나의 소개</title>
  <style>
    * { box-sizing: border-box; }
  </style>
</head>
<body>
  <h1>민수의 웹사이트</h1>
  <p>안녕하세요. 저는 웹사이트 만드는 법을 배우고 있습니다.</p>
  <p>이 페이지를 더 보기 좋게 꾸며보겠습니다.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>나의 소개</title>
  <style>
    * { box-sizing: border-box; }
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
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>CSS 한 문장을 읽고 색·크기·여백을 바꿉니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><code>h1 { color: blue; }</code>에서 <code>h1</code>은 <strong>선택자(꾸밀 대상)</strong>, <code>color</code>는 속성, <code>blue</code>는 값입니다.</p>
<p>중괄호 <code>{ }</code> 안에 <code>속성: 값;</code>을 씁니다. <code>font-size</code>는 글자 크기, <code>background-color</code>는 배경색, <code>padding</code>은 안쪽 여백입니다.</p>
<p>이 실습에서는 <code>&lt;style&gt;</code> 안에 CSS를 씁니다. 실제 프로젝트에서는 별도 <code>.css</code> 파일을 연결하기도 합니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li><code>style</code> 안에 <code>h1 { color: #2563eb; font-size: 32px; }</code>을 넣으세요.</li><li><code>p</code>의 글자 크기를 <code>18px</code>로 정하세요.</li><li><code>body</code>에 밝은 배경과 <code>padding: 30px;</code>을 넣고 실행하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>제목이 파란색으로 바뀌고 본문과 화면 가장자리 사이에 여백이 생깁니다.</p></div>
<p class="theory-callout">글자색을 바꿀 때는 배경 위에서 글자가 쉽게 읽히는지도 확인하세요.</p>
`
    },
    {
      id: "lesson5",
      chip: "Lesson 5",
      navTitle: "5강. CSS 박스 모델",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>박스 모델 연습</title>
  <style>
    * { box-sizing: border-box; }
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
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>박스 모델 연습</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>카드의 안쪽 여백과 바깥 간격을 구분합니다.</p></div>
<h2>💡 핵심 이론</h2>
<p>박스는 <strong>내용(content) → 안쪽 여백(padding) → 테두리(border)</strong>로 구성됩니다. <code>margin</code>은 테두리 바깥의 간격입니다.</p>
<p><code>class="card"</code>가 있는 요소는 CSS의 <code>.card</code>로 선택합니다. 점(<code>.</code>)은 클래스 선택자 표시입니다.</p>
<p><code>box-sizing: border-box;</code>는 지정한 <code>width</code> 안에 padding과 border를 포함합니다. 기본 <code>content-box</code>는 둘을 width 바깥에 더합니다. margin은 어느 방식에서도 width에 포함되지 않습니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li><code>.card</code>에 <code>padding: 20px;</code>, <code>border: 2px solid #2563eb;</code>을 넣으세요.</li><li><code>margin: 20px 0;</code>으로 카드 바깥 위·아래 간격을 주세요.</li><li><code>width: 320px; max-width: 100%;</code>를 넣고 padding을 바꿔 비교하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>테두리 안에서 글자와 가장자리가 떨어지고, 카드 밖에도 간격이 생깁니다.</p></div>
<p class="theory-callout">예제의 <code>* { box-sizing: border-box; }</code>는 모든 요소에 같은 너비 계산법을 적용합니다.</p>
`
    },
    {
      id: "lesson6",
      chip: "Lesson 6",
      navTitle: "6강. Flexbox 레이아웃",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Flexbox 연습</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Flexbox 연습</title>
  <style>
    * { box-sizing: border-box; }
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
      flex-wrap: wrap;
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>부모에 Flexbox를 적용해 카드 3개를 정렬합니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><code>.container</code>는 카드를 감싸는 <strong>부모</strong>, 그 안의 카드들은 <strong>자식</strong>입니다. 부모에 <code>display: flex;</code>를 주면 바로 아래 자식들이 배치됩니다.</p>
<p><code>justify-content</code>는 나열되는 방향인 <strong>주축</strong>, <code>align-items</code>는 그와 직각인 <strong>교차축</strong>을 정렬합니다.</p>
<p>기본 <code>flex-direction: row;</code>에서는 주축이 가로입니다. <code>column</code>이면 주축이 세로로 바뀝니다. <code>gap</code>은 카드 사이 간격, <code>flex-wrap: wrap;</code>은 공간이 부족할 때 줄바꿈입니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li>부모 <code>.container</code>에 <code>display: flex; gap: 16px; flex-wrap: wrap;</code>을 넣으세요.</li><li><code>justify-content: center; align-items: center;</code>를 추가하세요.</li><li><code>flex-direction: column;</code>을 잠깐 넣어 방향을 비교한 뒤 지우세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>넓은 미리보기에서는 카드가 나란히 놓이고, column을 넣으면 세로로 나열됩니다.</p></div>
<p class="theory-callout">정렬 효과는 남는 공간이 있을 때 잘 보입니다. 좁은 화면에서 줄바꿈되는 것은 정상입니다.</p>
`
    },
    {
      id: "lesson7",
      chip: "Lesson 7",
      navTitle: "7강. UI 꾸미기",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>UI 꾸미기 연습</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 20px;
      width: 280px;
      max-width: 100%;
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
    <a href="#details" class="btn">더 보기</a>
  </div>
  <section id="details"><h2>더 자세한 소개</h2><p>저는 친구들이 쉽게 사용할 수 있는 웹페이지를 만들고 싶습니다.</p></section>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>UI 꾸미기 연습</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 24px;
      width: 280px;
      max-width: 100%;
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

    .btn:hover, .btn:focus-visible {
      background-color: #1d4ed8;
    }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>민수의 웹사이트</h1>
    <p>안녕하세요. 저는 웹사이트를 배우고 있습니다.</p>
    <a href="#details" class="btn">더 보기</a>
  </div>
  <section id="details"><h2>더 자세한 소개</h2><p>저는 친구들이 쉽게 사용할 수 있는 웹페이지를 만들고 싶습니다.</p></section>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>카드와 링크에 상태가 보이는 디자인을 만듭니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><code>border-radius</code>는 둥근 모서리, <code>box-shadow</code>는 그림자입니다. <code>text-decoration: none;</code>은 링크의 밑줄 같은 글자 장식을 없앱니다.</p>
<p><code>display: inline-block;</code>은 줄 안에 놓이면서 너비·여백 등을 지정할 수 있게 합니다. 링크는 <code>a</code>, 현재 화면의 동작을 실행하는 제어는 <code>button</code>을 씁니다.</p>
<p><code>:hover</code>는 마우스를 올린 상태, <code>:focus-visible</code>은 키보드로 선택한 위치를 보여줄 때 쓰는 상태입니다. 터치 화면에는 hover가 없을 수 있습니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li>카드에 <code>border-radius: 16px;</code>와 부드러운 그림자를 넣으세요.</li><li><code>.btn</code>에 <code>inline-block</code>과 둥근 모서리를 적용하세요.</li><li><code>.btn:hover, .btn:focus-visible</code>에서 배경을 진하게 하고, Tab 키로 선택 표시도 확인하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>카드에 둥근 테두리와 그림자가 보이고 링크를 가리키거나 키보드로 선택하면 상태가 달라집니다.</p></div>
<p class="theory-callout">링크의 “더 보기”는 아래 설명 구역으로 이동합니다. 버튼처럼 보여도 링크의 이동 역할은 유지됩니다.</p>
`
    },
    {
      id: "lesson8",
      chip: "Lesson 8",
      navTitle: "8강. 반응형 웹 기초",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>반응형 웹 연습</title>
  <style>
    * { box-sizing: border-box; }
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
      flex-wrap: wrap;
      gap: 16px;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      width: 180px;
      max-width: 100%;
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
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>반응형 웹 연습</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>미리보기 폭에 따라 가로 배치를 세로로 바꿉니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><strong>반응형</strong>은 같은 내용의 배치를 화면 크기에 맞추는 것입니다. <code>@media (max-width: 600px)</code>의 CSS는 화면 폭이 600px 이하일 때 적용됩니다.</p>
<p><code>meta name="viewport"</code> 설정은 모바일 브라우저가 기기 폭을 기준으로 보여주게 합니다. <code>border-box</code>는 <code>width: 100%</code> 카드에 여백과 테두리가 더해져 넘치는 것을 막습니다.</p>
<p>이 실습의 화면은 <strong>미리보기 프레임</strong>입니다. 미디어 쿼리는 컴퓨터 전체 폭이 아니라 이 프레임의 폭을 기준으로 판단합니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li>기본 <code>.container</code>에 Flexbox와 <code>gap</code>, <code>flex-wrap: wrap;</code>을 넣으세요.</li><li>미디어 쿼리 안에서 <code>flex-direction: column;</code>과 카드 <code>width: 100%;</code>를 지정하세요.</li><li>미리보기 폭이 600px 이하일 때와 그보다 클 때 배치를 비교하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>600px 이하에서는 카드가 세로로 놓입니다. 더 넓을 때는 공간에 맞춰 가로로 배치됩니다.</p></div>
<p class="theory-callout">처음부터 세로로 보이면 프레임이 이미 좁을 수 있습니다. 창 크기를 바꿔도 차이가 없으면 미디어 쿼리의 600px를 임시로 100px, 2000px로 바꿔 각각 실행해 보세요. 조건 적용에 따른 카드 배치와 너비를 비교한 뒤 600px로 되돌리세요.</p>
`
    },
    {
      id: "lesson9",
      chip: "Lesson 9",
      navTitle: "9강. JavaScript 기초",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JavaScript 기초</title>
  <style>
    * { box-sizing: border-box; }
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
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JavaScript 기초</title>
  <style>
    * { box-sizing: border-box; }
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
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>클릭하면 인사말이 바뀌는 버튼을 만듭니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><strong>함수</strong>는 나중에 실행할 코드를 이름으로 묶은 것입니다. <code>function changeText() { ... }</code>로 만들고 <code>changeText()</code>로 실행합니다.</p>
<p><strong>클릭 → 함수 실행 → 요소 찾기 → 글자 바꾸기</strong> 순서입니다. 버튼의 <code>onclick="changeText()"</code>이 클릭과 함수를 연결합니다.</p>
<p><code>document.getElementById("message")</code>는 <code>id="message"</code>인 요소를 찾습니다. <code>.textContent = "Hi";</code>는 그 요소의 글자를 바꿉니다. 따옴표 안의 값은 <strong>문자열(글자 데이터)</strong>입니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li><code>&lt;/body&gt;</code> 바로 앞에 <code>&lt;script&gt;</code>와 <code>&lt;/script&gt;</code>를 추가하세요. 두 태그 사이에 <code>function changeText() { }</code>를 만드세요.</li><li>함수 안에서 message 요소의 textContent에 새 인사말을 넣으세요.</li><li>버튼에 onclick을 연결한 뒤 실행하고, 미리보기 속 버튼을 누르세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>실행만 했을 때는 원래 문장, 미리보기 버튼을 눌렀을 때는 새 인사말이 보입니다.</p></div>
<p class="theory-callout">이 강의 기본 버튼은 아직 연결되지 않았습니다. 함수와 onclick을 직접 추가하는 연습입니다.</p>
`
    },
    {
      id: "lesson10",
      chip: "Lesson 10",
      navTitle: "10강. 조건문과 함수",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>점수 확인하기</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    input, button { font: inherit; padding: 10px 14px; max-width: 100%; }
    label { display: block; font-weight: bold; }
    button { background: #2563eb; color: white; border: 0; border-radius: 10px; cursor: pointer; }
    button:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    #result { font-weight: bold; color: #1e3a8a; }
  </style>
</head>
<body>
  <h1>점수 확인하기</h1>
  <label for="score">점수 (0~100)</label>
  <input type="number" id="score" min="0" max="100" step="1">
  <button type="button">확인</button>
  <p id="result" role="status"></p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>점수 확인하기</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    input, button { font: inherit; padding: 10px 14px; max-width: 100%; }
    label { display: block; font-weight: bold; }
    button { background: #2563eb; color: white; border: 0; border-radius: 10px; cursor: pointer; }
    button:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    #result { font-weight: bold; color: #1e3a8a; }
  </style>
</head>
<body>
  <h1>점수 확인하기</h1>
  <label for="score">점수 (0~100)</label>
  <input type="number" id="score" min="0" max="100" step="1">
  <button type="button" onclick="checkScore()">확인</button>
  <p id="result" role="status"></p>

  <script>
    function checkScore() {
      const raw = document.getElementById("score").value.trim();
      const result = document.getElementById("result");
      if (raw === "") {
        result.textContent = "점수를 입력하세요.";
        return;
      }
      const score = Number(raw);
      if (!Number.isFinite(score) || score < 0 || score > 100) {
        result.textContent = "0부터 100 사이의 숫자를 입력하세요.";
      } else if (score >= 60) {
        result.textContent = "통과했습니다!";
      } else {
        result.textContent = "다시 연습해보세요.";
      }
    }
  </script>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>점수가 60 이상인지에 따라 서로 다른 결과를 보여줍니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><code>if</code>는 조건이 참일 때, <code>else</code>는 그렇지 않을 때 실행합니다. <code>&gt;=</code>는 “이상” 비교이고 <code>=</code>는 값을 넣는 기호입니다.</p>
<p><code>const score = Number(raw);</code>는 입력을 숫자로 바꾸고 score라는 이름에 담습니다. <code>const</code>로 만든 이름에는 다른 값을 다시 대입하지 않습니다.</p>
<p>숫자 입력창도 <code>.value</code>는 문자열입니다. <strong>빈 값 확인 → Number로 변환 → 범위 확인 → 점수 비교</strong> 순서로 처리합니다. 빈 문자열을 바로 Number에 넣으면 0이 됩니다.</p>
<p>답안의 <code>Number.isFinite(score)</code>는 값이 유한한 숫자인지 확인합니다. <code>return;</code>은 그 위치에서 함수 실행을 끝냅니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li>9강처럼 <code>&lt;/body&gt;</code> 앞에 script 요소를 추가하고, 그 안에 <code>function checkScore() { }</code>를 만드세요. 확인 버튼에 <code>onclick="checkScore()"</code>를 넣으세요.</li><li>함수 안에서 score 입력창의 <code>.value</code>를 읽고, <code>.trim()</code>으로 양 끝 공백을 지우세요.</li><li>빈 입력과 0~100 밖의 값을 먼저 처리하고, <code>score &gt;= 60</code>으로 결과를 나누세요.</li><li>미리보기에서 빈 값, 59, 60, 101을 각각 입력해 확인하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>빈 값 → 입력 안내 / 59 → 다시 연습 / 60 → 통과 / 101 → 범위 안내가 나옵니다.</p></div>
<p class="theory-callout">60점은 이 연습에서 정한 통과 기준입니다. 기본 예제의 “확인” 버튼에 함수를 연결하세요.</p>
`
    },
    {
      id: "lesson11",
      chip: "Lesson 11",
      navTitle: "11강. DOM 조작",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>DOM 조작 연습</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>DOM 조작 연습</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>HTML 요소를 찾아 글자와 CSS 클래스를 바꿉니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><strong>DOM</strong>은 브라우저가 HTML 문서를 <strong>요소들의 트리</strong>로 표현한 것입니다. JavaScript는 이 트리의 요소를 찾아 바꿀 수 있습니다.</p>
<p><code>id</code>는 문서 안에서 고유한 이름입니다. <code>class</code>는 여러 요소가 공유할 수 있습니다. CSS에서 <code>#title</code>은 id, <code>.highlight</code>는 class를 선택합니다.</p>
<p><code>textContent</code>는 글자를 바꾸고, <code>classList.add("highlight")</code>는 미리 만든 CSS 클래스를 붙입니다. <code>remove</code>는 그 클래스를 뗍니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li><code>title</code>과 <code>desc</code> id를 찾아 새 글자를 넣는 함수를 만드세요.</li><li>카드에 <code>id="card"</code>를 주고 배경색을 정하는 <code>.highlight</code>를 만드세요.</li><li>함수 안에서 카드에 highlight 클래스를 붙이고 버튼과 연결하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>버튼을 누르면 제목·설명 글자가 바뀌고 카드 배경이 강조됩니다.</p></div>
<p class="theory-callout">요소를 못 찾으면 id 철자와 대소문자를 확인하세요. 함수는 해당 HTML 요소가 준비된 뒤 실행해야 합니다.</p>
`
    },
    {
      id: "lesson12",
      chip: "Lesson 12",
      navTitle: "12강. 입력값 읽기와 검사",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>입력값 처리 연습</title>
  <style>
    * { box-sizing: border-box; }
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
  <label for="username">이름</label>
  <input type="text" id="username" placeholder="이름을 입력하세요">
  <button>확인</button>
  <p id="result" role="status"></p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>입력값 처리 연습</title>
  <style>
    * { box-sizing: border-box; }
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
  <label for="username">이름</label>
  <input type="text" id="username" placeholder="이름을 입력하세요">
  <button onclick="showName()">확인</button>
  <p id="result" role="status"></p>

  <script>
    function showName() {
      const name = document.getElementById("username").value.trim();

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
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>이름을 읽고 빈 입력에는 안내를 보여줍니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><code>label for="username"</code>은 <code>id="username"</code> 입력창의 이름입니다. placeholder는 입력을 시작하면 사라지므로 label을 대신하지 않습니다.</p>
<p><code>.value</code>로 글자를 읽고 <code>.trim()</code>으로 양 끝 공백을 지웁니다. 따라서 빈칸만 넣은 입력도 <code>name === ""</code>으로 찾을 수 있습니다.</p>
<p><code>===</code>는 값과 자료형을 함께 비교합니다. 이 실습은 입력을 현재 화면의 인사말에 사용합니다. <strong>서버로 전송하거나 회원가입하는 기능은 아닙니다.</strong></p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li>9강처럼 script 안에 <code>function showName() { }</code>를 만들고 버튼에 <code>onclick="showName()"</code>을 연결하세요. 함수 안에서 <code>document.getElementById("username").value.trim()</code>을 읽으세요.</li><li>빈 값이면 입력 안내, 아니면 이름을 포함한 인사말을 result에 넣으세요.</li><li>빈 입력, 공백만 있는 입력, 실제 이름을 각각 시험하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>빈칸과 공백만 넣으면 입력 안내가, 이름을 넣으면 그 이름의 인사말이 보입니다.</p></div>
<p class="theory-callout">사용자가 넣은 글자는 textContent로 보여줍니다. 여기서는 입력 글자를 HTML 코드로 실행할 필요가 없습니다.</p>
`
    },
    {
      id: "lesson13",
      chip: "Lesson 13",
      navTitle: "13강. 최종 프로젝트 제작",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>나의 소개 페이지</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>나의 소개 페이지</h1>
  <main class="container">
    <section class="card"><h2>자기소개</h2><p>안녕하세요. 저는 웹개발을 배우고 있습니다.</p></section>
    <section class="card"><h2>관심사</h2><p>음악과 웹디자인에 관심이 있습니다.</p>
      <p id="interest-detail" aria-live="polite">버튼을 누르면 더 자세한 관심사가 보입니다.</p>
      <button type="button" class="btn">관심사 더 보기</button>
    </section>
    <section class="card"><h2>목표</h2><p>친구가 쉽게 쓸 수 있는 웹페이지를 만들고 싶습니다.</p></section>
  </main>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>나의 소개 페이지</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>나의 소개 페이지</h1>
  <main class="container">
    <section class="card"><h2>자기소개</h2><p>안녕하세요. 저는 웹개발을 배우고 있습니다.</p></section>
    <section class="card"><h2>관심사</h2><p>음악과 웹디자인에 관심이 있습니다.</p>
      <p id="interest-detail" aria-live="polite">버튼을 누르면 더 자세한 관심사가 보입니다.</p>
      <button type="button" class="btn" onclick="showInterest()">관심사 더 보기</button>
    </section>
    <section class="card"><h2>목표</h2><p>친구가 쉽게 쓸 수 있는 웹페이지를 만들고 싶습니다.</p></section>
  </main>

  <script>
    function showInterest() {
      document.getElementById("interest-detail").textContent = "웹디자인을 배우고 작은 음악 소개 페이지를 만들고 싶습니다.";
    }
  </script>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>HTML·CSS·JavaScript가 함께 작동하는 소개 페이지를 완성합니다.</p></div>
<h2>💡 핵심 이론</h2>
<p><strong>HTML</strong>은 소개·관심사·목표 카드, <strong>CSS</strong>는 배치·색·간격, <strong>JavaScript</strong>는 “관심사 더 보기” 버튼의 동작을 맡습니다.</p>
<p>완성 기준은 <strong>카드 3개 + Flexbox 배치 + 읽기 쉬운 색과 간격 + 클릭 후 글자가 바뀌는 버튼</strong>입니다. 꾸미기만 하고 끝내지 않습니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li>제목과 카드 3개의 내용을 내 소개·관심사·목표로 바꾸세요.</li><li>Flexbox, 줄바꿈, 카드 여백과 그림자를 적용하세요.</li><li><code>showInterest()</code>에서 <code>interest-detail</code> 문단을 바꾸고 버튼의 onclick에 연결하세요.</li><li>넓고 좁은 미리보기에서 글자를 읽고 버튼을 눌러 확인하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>카드 3개가 보이고 “관심사 더 보기”를 누르면 구체적인 관심사 문장이 나옵니다.</p></div>
<p class="theory-callout">예제의 목표를 내 이야기로 바꿔보세요. 실제 연락처를 입력하지 않아도 과제를 완성할 수 있습니다.</p>
`
    },
    {
      id: "lesson14",
      chip: "Lesson 14",
      navTitle: "14강. 발표와 복습",
      defaultCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>나의 웹페이지 발표</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>나의 웹페이지 발표</h1>
  <main class="container">
    <section class="card"><h2>자기소개</h2><p>안녕하세요. 저는 웹개발을 배우고 있습니다.</p></section>
    <section class="card"><h2>관심사</h2><p>음악과 웹디자인에 관심이 있습니다.</p>
      <p id="interest-detail" aria-live="polite">버튼을 누르면 더 자세한 관심사가 보입니다.</p>
      <button type="button" class="btn" onclick="showInterest()">관심사 더 보기</button>
    </section>
    <section class="card"><h2>목표</h2><p>친구가 쉽게 쓸 수 있는 웹페이지를 만들고 싶습니다.</p></section>
  </main>

  <script>
    function showInterest() {
      document.getElementById("interest-detail").textContent = "웹디자인을 배우고 작은 음악 소개 페이지를 만들고 싶습니다.";
    }
  </script>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>나의 웹페이지 발표</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>나의 웹페이지 발표</h1>
  <main class="container">
    <section class="card"><h2>자기소개</h2><p>안녕하세요. 저는 웹개발을 배우고 있습니다.</p></section>
    <section class="card"><h2>관심사</h2><p>음악과 웹디자인에 관심이 있습니다.</p>
      <p id="interest-detail" aria-live="polite">버튼을 누르면 더 자세한 관심사가 보입니다.</p>
      <button type="button" class="btn" onclick="showInterest()">관심사 더 보기</button>
    </section>
    <section class="card"><h2>목표</h2><p>친구가 쉽게 쓸 수 있는 웹페이지를 만들고 싶습니다.</p></section>
  </main>

  <script>
    function showInterest() {
      document.getElementById("interest-detail").textContent = "웹디자인을 배우고 작은 음악 소개 페이지를 만들고 싶습니다.";
    }
  </script>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 오늘의 목표</strong><p>작동을 점검하고 내가 만든 페이지를 3문장으로 소개합니다.</p></div>
<h2>💡 핵심 이론</h2>
<p>처음에는 이 강의 <strong>별도 새 예제</strong>가 열립니다. 13강의 내 작품을 발표하려면 13강 코드를 복사해 이 코드 창에 붙여 넣으세요.</p>
<p>발표 전에 제목·읽기 쉬운 색·좁은 화면·버튼 동작을 확인합니다. 무엇을 만들었는지뿐 아니라 <strong>클릭하면 무엇이 바뀌는지</strong>도 직접 보여줍니다.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ 직접 해보기</h3><ol><li>작품 또는 새 예제를 실행하고 제목과 카드 내용을 확인하세요.</li><li>미리보기 버튼을 눌러 실제 동작을 보여주세요. 키보드로도 버튼에 이동해 보세요.</li><li>“이 페이지는 ___를 소개합니다. ___ 버튼을 누르면 ___가 바뀝니다. 다음에는 ___를 고치고 싶습니다.”를 준비하세요.</li></ol></div>
<div class="summary-box"><strong>✅ 예상 결과</strong><p>화면과 동작을 보여주며 30초~1분 동안 설명하고, 개선할 점 한 가지를 말할 수 있습니다.</p></div>
<p class="theory-callout">복습: HTML = 구조, CSS = 모양, JavaScript = 동작. 이 강의 답안은 발표에 사용할 수 있는 예시입니다.</p>
`
    }
  ]
};

export const lessons_en = {
  status: "Ready",
  brandTitle: "HTML · CSS · JavaScript",
  brandSubtitle: "Build your first web page",
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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My First Webpage</title>
</head>
<body>
  <h1>Hello</h1>
  <p>This is the first webpage I created.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
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
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Build your first page with a greeting and three introduction paragraphs.</p></div>
<h2>💡 Key ideas</h2>
<p>A <strong>browser</strong>, such as Chrome, reads HTML code and shows a page. Here, edit the code and press <strong>Run ▶</strong> to update the preview.</p>
<p>In <code>&lt;p&gt;Hello&lt;/p&gt;</code>, <code>&lt;p&gt;</code> starts a paragraph and <code>&lt;/p&gt;</code> ends it. First, change only <code>Hello</code>.</p>
<p><code>&lt;head&gt;</code> holds the title and settings. <code>&lt;body&gt;</code> holds the visible content. HTML gives structure, CSS gives style, and JavaScript adds actions.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Change the greeting inside <code>&lt;h1&gt;</code>.</li><li>Write three <code>&lt;p&gt;sentence&lt;/p&gt;</code> paragraphs: your name, an interest, and a goal.</li><li>Press <strong>Run ▶</strong> and compare the code with the preview.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>Your heading appears above three introduction paragraphs.</p></div>
<p class="theory-callout">Keep the angle brackets, slash, and tag names. Change the words between the tags first.</p>
`
    },
    {
      id: "lesson2",
      chip: "Lesson 2",
      navTitle: "Lesson 2. Basic HTML Tags",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Me</title>
</head>
<body>
  <h1 id="top">Self Introduction</h1>
  <p>Hello. I am a student.</p>
  <p>I am learning how to build websites.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Mina</title>
</head>
<body>
  <h1 id="top">Mina's Introduction</h1>
  <p>Hello. My name is Mina.</p>
  <p>I am interested in games and web design.</p>

  <h2 id="likes">Things I Like</h2>
  <ul>
    <li>Listening to music</li>
    <li>Watching movies</li>
    <li>Learning coding</li>
  </ul>

  <p><a href="#likes">Go to interests</a> · <a href="#top">Back to top</a></p>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Organize an introduction with headings, a list, and a link.</p></div>
<h2>💡 Key ideas</h2>
<p><code>h1</code> is the main heading; <code>h2</code> starts a section under it. These numbers show <strong>content levels</strong>, not a choice of font size.</p>
<p><code>&lt;ul&gt;</code> is an unordered list. Each <code>&lt;li&gt;</code> inside it is one list item.</p>
<p>In <code>&lt;a href="#likes"&gt;My interests&lt;/a&gt;</code>, <code>href</code> is an <strong>attribute</strong> that sets the destination. <code>#likes</code> goes to <code>id="likes"</code> on the same page.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Add an h1 with your name, two paragraphs, and an h2 section heading.</li><li>Put three things you like in li elements inside a ul.</li><li>Give the interests heading <code>id="likes"</code> and add a link to it.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>Three list items appear, and the link points to the interests section.</p></div>
<p class="theory-callout">We use links within this page. If the target is already visible, there may be little or no scrolling.</p>
`
    },
    {
      id: "lesson3",
      chip: "Lesson 3",
      navTitle: "Lesson 3. HTML Structure",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Website</title>
</head>
<body>
  <h1>My Website</h1>
  <p>This is my first page.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Minsoo</title>
  
</head>
<body>
  <header><h1>Minsoo</h1></header>
  <nav><a href="#about">About me</a> · <a href="#interests">Interests</a></nav>
  <main>
    <section id="about"><h2>About me</h2><p>Hello. I am learning web development.</p></section>
    <section id="interests"><h2>Interests</h2><p>I like music and web design.</p></section>
  </main>
  <footer><p>© 2026 Minsoo</p></footer>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Divide a page into meaningful sections and connect its menu.</p></div>
<h2>💡 Key ideas</h2>
<p><strong>Semantic tags</strong> describe a part’s role: <code>header</code> for introductory content, <code>nav</code> for navigation, <code>main</code> for the main content, and <code>footer</code> for closing information.</p>
<p>A <code>section</code> groups one topic. Add an <code>h2</code> heading that explains that topic.</p>
<p><code>href="#about"</code> must match <code>id="about"</code>. Use each id only once in the document.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Wrap the title, menu, content, and footer in tags that match their roles.</li><li>Create two sections inside main: about and interests.</li><li>Add the ids <code>about</code> and <code>interests</code>, then link both menu items.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>The page has two sections, and each menu link points to the correct section.</p></div>
<p class="theory-callout">Semantic tags do not automatically add colors or a layout. We style the page with CSS next.</p>
`
    },
    {
      id: "lesson4",
      chip: "Lesson 4",
      navTitle: "Lesson 4. CSS Basics",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Me</title>
  <style>
    * { box-sizing: border-box; }
  </style>
</head>
<body>
  <h1>Mina's Website</h1>
  <p>Hello. I am learning how to build websites.</p>
  <p>I will make this page look better.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Me</title>
  <style>
    * { box-sizing: border-box; }
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
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Read a CSS rule and change color, size, and spacing.</p></div>
<h2>💡 Key ideas</h2>
<p>In <code>h1 { color: blue; }</code>, <code>h1</code> is the <strong>selector</strong> (the target), <code>color</code> is the property, and <code>blue</code> is the value.</p>
<p>Write <code>property: value;</code> inside <code>{ }</code>. <code>font-size</code> changes text size, <code>background-color</code> changes the background, and <code>padding</code> adds inner space.</p>
<p>We write CSS inside <code>&lt;style&gt;</code> in this exercise. Projects can also link a separate <code>.css</code> file.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Add <code>h1 { color: #2563eb; font-size: 32px; }</code> inside style.</li><li>Set the font size of <code>p</code> to <code>18px</code>.</li><li>Give body a light background and <code>padding: 30px;</code>, then run.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>The heading is blue, and space appears between the content and the page edges.</p></div>
<p class="theory-callout">When choosing colors, check that the text is easy to read against its background.</p>
`
    },
    {
      id: "lesson5",
      chip: "Lesson 5",
      navTitle: "Lesson 5. CSS Box Model",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Box Model Practice</title>
  <style>
    * { box-sizing: border-box; }
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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Box Model Practice</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Tell inner space apart from the space outside a card.</p></div>
<h2>💡 Key ideas</h2>
<p>A box contains <strong>content → padding → border</strong>. <code>margin</code> adds space outside the border.</p>
<p>CSS <code>.card</code> selects elements with <code>class="card"</code>. The dot marks a class selector.</p>
<p><code>box-sizing: border-box;</code> includes padding and border in the chosen width. The default <code>content-box</code> adds them outside that width. Neither includes margin in width.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Add <code>padding: 20px;</code> and <code>border: 2px solid #2563eb;</code> to .card.</li><li>Use <code>margin: 20px 0;</code> for space above and below the card.</li><li>Set <code>width: 320px; max-width: 100%;</code> and compare different padding values.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>There is space between the text and border, plus space outside the card.</p></div>
<p class="theory-callout"><code>* { box-sizing: border-box; }</code> applies the same width rule to all elements in the example.</p>
`
    },
    {
      id: "lesson6",
      chip: "Lesson 6",
      navTitle: "Lesson 6. Flexbox Layout",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Flexbox Practice</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Flexbox Practice</title>
  <style>
    * { box-sizing: border-box; }
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
      flex-wrap: wrap;
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Use Flexbox on a parent to arrange three child cards.</p></div>
<h2>💡 Key ideas</h2>
<p>The <code>.container</code> around the cards is the <strong>parent</strong>. The cards are its <strong>children</strong>. Put <code>display: flex;</code> on the parent to arrange its direct children.</p>
<p><code>justify-content</code> aligns items along the <strong>main axis</strong>. <code>align-items</code> aligns them along the perpendicular <strong>cross axis</strong>.</p>
<p>With the default <code>row</code>, the main axis is horizontal. With <code>column</code>, it is vertical. <code>gap</code> adds space between cards; <code>flex-wrap: wrap;</code> lets them move to another line.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Add <code>display: flex; gap: 16px; flex-wrap: wrap;</code> to .container.</li><li>Add <code>justify-content: center; align-items: center;</code>.</li><li>Try <code>flex-direction: column;</code>, compare the direction, then remove it.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>The cards sit side by side in a wide preview. Adding column stacks them vertically.</p></div>
<p class="theory-callout">Alignment is easier to see when there is free space. Wrapping in a narrow preview is normal.</p>
`
    },
    {
      id: "lesson7",
      chip: "Lesson 7",
      navTitle: "Lesson 7. UI Styling",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>UI Styling Practice</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 20px;
      width: 280px;
      max-width: 100%;
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
    <a href="#details" class="btn">Read More</a>
  </div>
  <section id="details"><h2>More about me</h2><p>I want to make web pages that my friends can use easily.</p></section>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>UI Styling Practice</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 24px;
      width: 280px;
      max-width: 100%;
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

    .btn:hover, .btn:focus-visible {
      background-color: #1d4ed8;
    }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Mina's Website</h1>
    <p>Hello. I am learning how to build websites.</p>
    <a href="#details" class="btn">Read More</a>
  </div>
  <section id="details"><h2>More about me</h2><p>I want to make web pages that my friends can use easily.</p></section>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Style a card and make a link’s interactive states visible.</p></div>
<h2>💡 Key ideas</h2>
<p><code>border-radius</code> rounds corners; <code>box-shadow</code> adds a shadow. <code>text-decoration: none;</code> removes text decorations such as a link’s underline.</p>
<p><code>display: inline-block;</code> keeps an element in a line while allowing dimensions and spacing. Use <code>a</code> to navigate and <code>button</code> to perform an action on the current page.</p>
<p><code>:hover</code> applies when a mouse points at an element. <code>:focus-visible</code> helps show keyboard focus. Touch screens may not have hover.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Give the card <code>border-radius: 16px;</code> and a soft shadow.</li><li>Give .btn inline-block display and rounded corners.</li><li>Use <code>.btn:hover, .btn:focus-visible</code> for a darker background, then check the focus mark with Tab.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>The card has rounded corners and a shadow. The link changes when pointed at or selected with the keyboard.</p></div>
<p class="theory-callout">“Read more” goes to the details below. Looking like a button does not change a link’s navigation role.</p>
`
    },
    {
      id: "lesson8",
      chip: "Lesson 8",
      navTitle: "Lesson 8. Responsive Web Basics",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Responsive Web Practice</title>
  <style>
    * { box-sizing: border-box; }
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
      flex-wrap: wrap;
      gap: 16px;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      width: 180px;
      max-width: 100%;
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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Responsive Web Practice</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Change a horizontal layout to a vertical layout at a narrow preview width.</p></div>
<h2>💡 Key ideas</h2>
<p><strong>Responsive design</strong> adapts the same content to different screen sizes. CSS inside <code>@media (max-width: 600px)</code> applies at a width of 600px or less.</p>
<p>The viewport meta setting lets mobile browsers use the device width. <code>border-box</code> keeps padding and border inside a <code>width: 100%</code> card.</p>
<p>Here the page runs inside the <strong>preview frame</strong>. The media query checks that frame’s width, not the width of your entire computer screen.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Give .container Flexbox, gap, and <code>flex-wrap: wrap;</code>.</li><li>Inside the media query, set <code>flex-direction: column;</code> and card <code>width: 100%;</code>.</li><li>Compare preview widths of 600px or less and more than 600px.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>At 600px or less, the cards stack vertically. At a wider size, they arrange horizontally when space allows.</p></div>
<p class="theory-callout">If the preview is already narrow, resizing the window may not show a change. Temporarily change 600px in the media query to 100px, then 2000px, and run each version. Compare the card layout and widths, then restore 600px.</p>
`
    },
    {
      id: "lesson9",
      chip: "Lesson 9",
      navTitle: "Lesson 9. JavaScript Basics",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JavaScript Basics</title>
  <style>
    * { box-sizing: border-box; }
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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JavaScript Basics</title>
  <style>
    * { box-sizing: border-box; }
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
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Build a button that changes a greeting when clicked.</p></div>
<h2>💡 Key ideas</h2>
<p>A <strong>function</strong> groups code under a name for later use. Define it with <code>function changeText() { ... }</code> and run it with <code>changeText()</code>.</p>
<p>The order is <strong>click → run function → find element → change text</strong>. A button’s <code>onclick="changeText()"</code> connects the click to the function.</p>
<p><code>document.getElementById("message")</code> finds the element with <code>id="message"</code>. <code>.textContent = "Hi";</code> changes its text. Text inside quotes is a <strong>string</strong>.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Add <code>&lt;script&gt;</code> and <code>&lt;/script&gt;</code> just before <code>&lt;/body&gt;</code>. Between them, write <code>function changeText() { }</code>.</li><li>Find the message element and assign a new greeting to its textContent.</li><li>Connect the button with onclick. Run the page, then click the button inside the preview.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>Run shows the original sentence. Clicking the preview button shows the new greeting.</p></div>
<p class="theory-callout">The starter button is not connected yet. Adding the function and onclick is your exercise.</p>
`
    },
    {
      id: "lesson10",
      chip: "Lesson 10",
      navTitle: "Lesson 10. Condition & Function",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Check a score</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    input, button { font: inherit; padding: 10px 14px; max-width: 100%; }
    label { display: block; font-weight: bold; }
    button { background: #2563eb; color: white; border: 0; border-radius: 10px; cursor: pointer; }
    button:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    #result { font-weight: bold; color: #1e3a8a; }
  </style>
</head>
<body>
  <h1>Check a score</h1>
  <label for="score">Score (0–100)</label>
  <input type="number" id="score" min="0" max="100" step="1">
  <button type="button">Check</button>
  <p id="result" role="status"></p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Check a score</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    input, button { font: inherit; padding: 10px 14px; max-width: 100%; }
    label { display: block; font-weight: bold; }
    button { background: #2563eb; color: white; border: 0; border-radius: 10px; cursor: pointer; }
    button:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    #result { font-weight: bold; color: #1e3a8a; }
  </style>
</head>
<body>
  <h1>Check a score</h1>
  <label for="score">Score (0–100)</label>
  <input type="number" id="score" min="0" max="100" step="1">
  <button type="button" onclick="checkScore()">Check</button>
  <p id="result" role="status"></p>

  <script>
    function checkScore() {
      const raw = document.getElementById("score").value.trim();
      const result = document.getElementById("result");
      if (raw === "") {
        result.textContent = "Please enter a score.";
        return;
      }
      const score = Number(raw);
      if (!Number.isFinite(score) || score < 0 || score > 100) {
        result.textContent = "Enter a number from 0 to 100.";
      } else if (score >= 60) {
        result.textContent = "You passed!";
      } else {
        result.textContent = "Please practice again.";
      }
    }
  </script>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Show a different result for scores of 60 or more.</p></div>
<h2>💡 Key ideas</h2>
<p><code>if</code> runs when a condition is true; <code>else</code> runs otherwise. <code>&gt;=</code> means “greater than or equal to”. <code>=</code> assigns a value.</p>
<p><code>const score = Number(raw);</code> converts the input to a number and gives it the name score. A name declared with const cannot be assigned a different value later.</p>
<p>Even a number input’s <code>.value</code> is a string. Use this order: <strong>check empty → convert with Number → check range → compare score</strong>. Number converts an empty string to 0.</p>
<p>In the answer, <code>Number.isFinite(score)</code> checks that the value is a finite number. <code>return;</code> ends the function at that point.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>As in Lesson 9, add a script element before <code>&lt;/body&gt;</code> and write <code>function checkScore() { }</code> inside it. Add <code>onclick="checkScore()"</code> to the Check button.</li><li>Inside the function, read the score input’s <code>.value</code> and remove spaces at both ends with <code>.trim()</code>.</li><li>Handle empty input and values outside 0–100 first, then compare <code>score &gt;= 60</code>.</li><li>Try an empty input, 59, 60, and 101 in the preview.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>Empty → enter a score / 59 → practice again / 60 → pass / 101 → range message.</p></div>
<p class="theory-callout">60 is the passing score chosen for this exercise. Connect the starter “Check” button to your function.</p>
`
    },
    {
      id: "lesson11",
      chip: "Lesson 11",
      navTitle: "Lesson 11. DOM Manipulation",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>DOM Practice</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>DOM Practice</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Find HTML elements and change their text and CSS classes.</p></div>
<h2>💡 Key ideas</h2>
<p>The <strong>DOM</strong> is the browser’s representation of an HTML document as a <strong>tree of elements</strong>. JavaScript can find and change these elements.</p>
<p>An <code>id</code> is unique in the document. Several elements may share a <code>class</code>. In CSS, <code>#title</code> selects an id and <code>.highlight</code> selects a class.</p>
<p><code>textContent</code> changes text. <code>classList.add("highlight")</code> adds an existing CSS class; <code>remove</code> removes it.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Write a function that finds title and desc by id and changes their text.</li><li>Give the card <code>id="card"</code> and create a .highlight style with a new background.</li><li>Add highlight to the card inside the function, then connect the button.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>Clicking the button changes the heading, description, and card background.</p></div>
<p class="theory-callout">If an element is not found, check the id spelling and letter case. Run the function after the HTML elements are ready.</p>
`
    },
    {
      id: "lesson12",
      chip: "Lesson 12",
      navTitle: "Lesson 12. Read and Check Input",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Input Practice</title>
  <style>
    * { box-sizing: border-box; }
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
  <label for="username">Name</label>
  <input type="text" id="username" placeholder="Enter your name">
  <button>Check</button>
  <p id="result" role="status"></p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Input Practice</title>
  <style>
    * { box-sizing: border-box; }
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
  <label for="username">Name</label>
  <input type="text" id="username" placeholder="Enter your name">
  <button onclick="showName()">Check</button>
  <p id="result" role="status"></p>

  <script>
    function showName() {
      const name = document.getElementById("username").value.trim();

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
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Read a name and show guidance when the input is empty.</p></div>
<h2>💡 Key ideas</h2>
<p><code>label for="username"</code> names the input with <code>id="username"</code>. A placeholder disappears during typing and does not replace a label.</p>
<p>Read text with <code>.value</code>. <code>.trim()</code> removes spaces at both ends. After trimming, <code>name === ""</code> also catches an input containing only spaces.</p>
<p><code>===</code> compares both value and type. This exercise shows a greeting <strong>on this page</strong>. It does not send data to a server or create an account.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>As in Lesson 9, create <code>function showName() { }</code> inside a script element and connect the button with <code>onclick="showName()"</code>. Read <code>document.getElementById("username").value.trim()</code> inside the function.</li><li>Show an input message when the name is empty, otherwise show a greeting in result.</li><li>Test an empty input, spaces only, and a real name.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>Empty input or spaces show guidance. A name shows a greeting containing that name.</p></div>
<p class="theory-callout">Display the input with textContent. We do not need to run the entered text as HTML code.</p>
`
    },
    {
      id: "lesson13",
      chip: "Lesson 13",
      navTitle: "Lesson 13. Final Project",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My introduction page</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>My introduction page</h1>
  <main class="container">
    <section class="card"><h2>About me</h2><p>Hello. I am learning web development.</p></section>
    <section class="card"><h2>Interests</h2><p>I like music and web design.</p>
      <p id="interest-detail" aria-live="polite">Click the button to read more about my interests.</p>
      <button type="button" class="btn">More interests</button>
    </section>
    <section class="card"><h2>My goal</h2><p>I want to build pages that my friends can use easily.</p></section>
  </main>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My introduction page</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>My introduction page</h1>
  <main class="container">
    <section class="card"><h2>About me</h2><p>Hello. I am learning web development.</p></section>
    <section class="card"><h2>Interests</h2><p>I like music and web design.</p>
      <p id="interest-detail" aria-live="polite">Click the button to read more about my interests.</p>
      <button type="button" class="btn" onclick="showInterest()">More interests</button>
    </section>
    <section class="card"><h2>My goal</h2><p>I want to build pages that my friends can use easily.</p></section>
  </main>

  <script>
    function showInterest() {
      document.getElementById("interest-detail").textContent = "I want to learn web design and build a small page about music.";
    }
  </script>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Complete an introduction page that uses HTML, CSS, and JavaScript together.</p></div>
<h2>💡 Key ideas</h2>
<p><strong>HTML</strong> creates about, interests, and goals cards. <strong>CSS</strong> handles layout, colors, and spacing. <strong>JavaScript</strong> makes the “More interests” button work.</p>
<p>Completion means <strong>three cards + Flexbox + readable colors and spacing + a button that changes text</strong>. Styling alone is not the whole task.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Change the heading and three cards to your own introduction, interests, and goals.</li><li>Add Flexbox, wrapping, card padding, and a shadow.</li><li>Use showInterest to change the interest-detail paragraph, and connect it with onclick.</li><li>Read the page in wide and narrow previews and try the button.</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>Three cards appear. “More interests” shows a specific sentence about your interests.</p></div>
<p class="theory-callout">Use your own goals. You can complete this project without entering real contact details.</p>
`
    },
    {
      id: "lesson14",
      chip: "Lesson 14",
      navTitle: "Lesson 14. Presentation and Review",
      defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My web page presentation</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>My web page presentation</h1>
  <main class="container">
    <section class="card"><h2>About me</h2><p>Hello. I am learning web development.</p></section>
    <section class="card"><h2>Interests</h2><p>I like music and web design.</p>
      <p id="interest-detail" aria-live="polite">Click the button to read more about my interests.</p>
      <button type="button" class="btn" onclick="showInterest()">More interests</button>
    </section>
    <section class="card"><h2>My goal</h2><p>I want to build pages that my friends can use easily.</p></section>
  </main>

  <script>
    function showInterest() {
      document.getElementById("interest-detail").textContent = "I want to learn web design and build a small page about music.";
    }
  </script>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My web page presentation</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>My web page presentation</h1>
  <main class="container">
    <section class="card"><h2>About me</h2><p>Hello. I am learning web development.</p></section>
    <section class="card"><h2>Interests</h2><p>I like music and web design.</p>
      <p id="interest-detail" aria-live="polite">Click the button to read more about my interests.</p>
      <button type="button" class="btn" onclick="showInterest()">More interests</button>
    </section>
    <section class="card"><h2>My goal</h2><p>I want to build pages that my friends can use easily.</p></section>
  </main>

  <script>
    function showInterest() {
      document.getElementById("interest-detail").textContent = "I want to learn web design and build a small page about music.";
    }
  </script>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Your goal</strong><p>Check your page and introduce it in three sentences.</p></div>
<h2>💡 Key ideas</h2>
<p>On your first visit, this lesson opens a <strong>separate new example</strong>. To present your work from Lesson 13, copy that code and paste it into this editor.</p>
<p>Before presenting, check the title, readable colors, narrow layout, and button. Demonstrate <strong>what changes after a click</strong>.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Try it</h3><ol><li>Run your project or the new example and check the heading and cards.</li><li>Click the preview button to demonstrate its action. Try reaching it with the keyboard too.</li><li>Prepare: “This page introduces ___. When I click ___, ___ changes. Next, I want to improve ___.”</li></ol></div>
<div class="summary-box"><strong>✅ Expected result</strong><p>You can show the page and its action in 30–60 seconds and name one improvement.</p></div>
<p class="theory-callout">Review: HTML = structure, CSS = style, JavaScript = actions. This lesson’s answer is one possible presentation example.</p>
`
    }
  ]
};

export const lessons_ru = {
  status: "Готово",
  brandTitle: "HTML · CSS · JavaScript",
  brandSubtitle: "Создайте свою первую веб-страницу",
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
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Моя первая веб-страница</title>
</head>
<body>
  <h1>Привет</h1>
  <p>Это первая веб-страница, которую я создал.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
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
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Создайте первую страницу с приветствием и тремя абзацами о себе.</p></div>
<h2>💡 Главное</h2>
<p><strong>Браузер</strong>, например Chrome, читает HTML и показывает страницу. Здесь измените код и нажмите <strong>Запустить ▶</strong>, чтобы обновить предпросмотр.</p>
<p>В <code>&lt;p&gt;Hello&lt;/p&gt;</code> тег <code>&lt;p&gt;</code> начинает абзац, а <code>&lt;/p&gt;</code> завершает его. Сначала измените только <code>Hello</code>.</p>
<p><code>&lt;head&gt;</code> содержит заголовок и настройки, <code>&lt;body&gt;</code> — видимое содержание. HTML задаёт структуру, CSS — оформление, JavaScript — действия.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Измените приветствие внутри h1.</li><li>Добавьте три абзаца <code>&lt;p&gt;Текст&lt;/p&gt;</code>: имя, интерес и цель.</li><li>Нажмите «Запустить ▶» и сравните код с предпросмотром.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Под вашим заголовком видны три абзаца о вас.</p></div>
<p class="theory-callout">Сначала меняйте только текст. Сохраните угловые скобки, косую черту и имена тегов.</p>
`
    },
    {
      id: "lesson2",
      chip: "Lesson 2",
      navTitle: "Урок 2. Базовые теги HTML",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Обо мне</title>
</head>
<body>
  <h1 id="top">Самопрезентация</h1>
  <p>Здравствуйте. Я студент.</p>
  <p>Я изучаю создание веб-сайтов.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>О Мине</title>
</head>
<body>
  <h1 id="top">Представление Мины</h1>
  <p>Здравствуйте. Меня зовут Мина.</p>
  <p>Я интересуюсь играми и веб-дизайном.</p>

  <h2 id="likes">Что мне нравится</h2>
  <ul>
    <li>Слушать музыку</li>
    <li>Смотреть фильмы</li>
    <li>Изучать программирование</li>
  </ul>

  <p><a href="#likes">К интересам</a> · <a href="#top">Наверх</a></p>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Разделите содержание с помощью заголовков, списка и ссылки.</p></div>
<h2>💡 Главное</h2>
<p><code>h1</code> — главный заголовок, <code>h2</code> — заголовок раздела под ним. Число обозначает <strong>уровень содержания</strong>, а не выбор размера шрифта.</p>
<p><code>&lt;ul&gt;</code> создаёт ненумерованный список. Каждый <code>&lt;li&gt;</code> внутри него — один пункт.</p>
<p>В <code>&lt;a href="#likes"&gt;Интересы&lt;/a&gt;</code> <code>href</code> — <strong>атрибут</strong>, задающий адрес перехода. <code>#likes</code> ведёт к <code>id="likes"</code> на этой странице.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Создайте h1 с именем, два абзаца и заголовок h2.</li><li>Добавьте три любимых занятия в li внутри ul.</li><li>Дайте заголовку интересов <code>id="likes"</code> и добавьте ссылку на него.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Виден список из трёх пунктов, а ссылка ведёт к разделу интересов.</p></div>
<p class="theory-callout">В упражнении используются ссылки внутри страницы. Если цель уже видна, заметной прокрутки может не быть.</p>
`
    },
    {
      id: "lesson3",
      chip: "Lesson 3",
      navTitle: "Урок 3. Структура HTML и семантические теги",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Мой сайт</title>
</head>
<body>
  <h1>Мой сайт</h1>
  <p>Это моя первая страница.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Минсу</title>
  
</head>
<body>
  <header><h1>Минсу</h1></header>
  <nav><a href="#about">О себе</a> · <a href="#interests">Интересы</a></nav>
  <main>
    <section id="about"><h2>О себе</h2><p>Здравствуйте. Я изучаю веб-разработку.</p></section>
    <section id="interests"><h2>Интересы</h2><p>Мне нравятся музыка и веб-дизайн.</p></section>
  </main>
  <footer><p>© 2026 Минсу</p></footer>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Разделите страницу по ролям и подключите меню.</p></div>
<h2>💡 Главное</h2>
<p><strong>Семантические теги</strong> описывают роль области: <code>header</code> — вводная часть, <code>nav</code> — навигация, <code>main</code> — основное содержание, <code>footer</code> — завершающая информация.</p>
<p><code>section</code> объединяет одну тему. Добавьте к каждому разделу понятный заголовок h2.</p>
<p><code>href="#about"</code> должен совпадать с <code>id="about"</code>. Каждый id используется в документе только один раз.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Оберните заголовок, меню, содержание и нижнюю часть подходящими тегами.</li><li>Внутри main создайте два section: о себе и об интересах.</li><li>Добавьте id about и interests и соедините с ними пункты меню.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Есть два раздела, и каждая ссылка меню указывает на свой раздел.</p></div>
<p class="theory-callout">Семантический тег сам не добавляет цвет или расположение. На следующем уроке мы используем CSS.</p>
`
    },
    {
      id: "lesson4",
      chip: "Lesson 4",
      navTitle: "Урок 4. Основы CSS",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Обо мне</title>
  <style>
    * { box-sizing: border-box; }
  </style>
</head>
<body>
  <h1>Сайт Мины</h1>
  <p>Здравствуйте. Я изучаю создание веб-сайтов.</p>
  <p>Сейчас я сделаю эту страницу красивее.</p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Обо мне</title>
  <style>
    * { box-sizing: border-box; }
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
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Прочитайте правило CSS и измените цвет, размер и отступы.</p></div>
<h2>💡 Главное</h2>
<p>В <code>h1 { color: blue; }</code> <code>h1</code> — <strong>селектор</strong> (цель), <code>color</code> — свойство, <code>blue</code> — значение.</p>
<p>Внутри <code>{ }</code> пишут <code>свойство: значение;</code>. <code>font-size</code> меняет размер текста, <code>background-color</code> — фон, <code>padding</code> — внутренний отступ.</p>
<p>Здесь CSS находится внутри <code>&lt;style&gt;</code>. В проектах также можно подключать отдельный файл <code>.css</code>.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>В style добавьте <code>h1 { color: #2563eb; font-size: 32px; }</code>.</li><li>Задайте абзацам p размер шрифта 18px.</li><li>Добавьте body светлый фон и <code>padding: 30px;</code>, затем запустите.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Заголовок становится синим, а между содержимым и краями страницы появляется отступ.</p></div>
<p class="theory-callout">Выбирая цвета, проверяйте, легко ли читать текст на этом фоне.</p>
`
    },
    {
      id: "lesson5",
      chip: "Lesson 5",
      navTitle: "Урок 5. Блочная модель CSS",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика Box Model</title>
  <style>
    * { box-sizing: border-box; }
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
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика Box Model</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Отличите внутренний отступ карточки от внешнего.</p></div>
<h2>💡 Главное</h2>
<p>Блок состоит из <strong>содержимого → padding → border</strong>. <code>margin</code> задаёт отступ снаружи границы.</p>
<p><code>.card</code> в CSS выбирает элементы с <code>class="card"</code>. Точка обозначает селектор класса.</p>
<p><code>box-sizing: border-box;</code> включает padding и border в заданную width. Стандартный <code>content-box</code> прибавляет их к width. Margin не входит в width ни в одном варианте.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Добавьте .card <code>padding: 20px;</code> и <code>border: 2px solid #2563eb;</code>.</li><li>Используйте <code>margin: 20px 0;</code> для отступов сверху и снизу.</li><li>Задайте <code>width: 320px; max-width: 100%;</code> и сравните разные значения padding.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Между текстом и границей есть место, и снаружи карточки тоже есть отступ.</p></div>
<p class="theory-callout"><code>* { box-sizing: border-box; }</code> применяет один способ расчёта ширины ко всем элементам примера.</p>
`
    },
    {
      id: "lesson6",
      chip: "Lesson 6",
      navTitle: "Урок 6. Flexbox Layout",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика Flexbox</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика Flexbox</title>
  <style>
    * { box-sizing: border-box; }
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
      flex-wrap: wrap;
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Примените Flexbox к родителю и расположите три карточки.</p></div>
<h2>💡 Главное</h2>
<p><code>.container</code>, содержащий карточки, — <strong>родитель</strong>. Карточки — его <strong>дочерние элементы</strong>. <code>display: flex;</code> у родителя управляет его прямыми дочерними элементами.</p>
<p><code>justify-content</code> выравнивает по <strong>главной оси</strong>, а <code>align-items</code> — по перпендикулярной <strong>поперечной оси</strong>.</p>
<p>При стандартном row главная ось горизонтальна, при column — вертикальна. <code>gap</code> задаёт промежуток. <code>flex-wrap: wrap;</code> разрешает перенос на новую строку.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Добавьте .container <code>display: flex; gap: 16px; flex-wrap: wrap;</code>.</li><li>Добавьте <code>justify-content: center; align-items: center;</code>.</li><li>Временно добавьте <code>flex-direction: column;</code>, сравните направление и удалите эту строку.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>В широком предпросмотре карточки идут рядом, а с column — сверху вниз.</p></div>
<p class="theory-callout">Выравнивание заметнее, когда есть свободное место. Перенос в узком предпросмотре — нормальное поведение.</p>
`
    },
    {
      id: "lesson7",
      chip: "Lesson 7",
      navTitle: "Урок 7. Оформление UI",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика UI Styling</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 20px;
      width: 280px;
      max-width: 100%;
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
    <a href="#details" class="btn">Подробнее</a>
  </div>
  <section id="details"><h2>Подробнее обо мне</h2><p>Я хочу делать страницы, которыми моим друзьям легко пользоваться.</p></section>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика UI Styling</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      padding: 30px;
    }

    .card {
      background-color: white;
      padding: 24px;
      width: 280px;
      max-width: 100%;
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

    .btn:hover, .btn:focus-visible {
      background-color: #1d4ed8;
    }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Сайт Мины</h1>
    <p>Здравствуйте. Я изучаю создание веб-сайтов.</p>
    <a href="#details" class="btn">Подробнее</a>
  </div>
  <section id="details"><h2>Подробнее обо мне</h2><p>Я хочу делать страницы, которыми моим друзьям легко пользоваться.</p></section>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Оформите карточку и сделайте состояния ссылки заметными.</p></div>
<h2>💡 Главное</h2>
<p><code>border-radius</code> округляет углы, <code>box-shadow</code> добавляет тень. <code>text-decoration: none;</code> убирает украшения текста, например подчёркивание ссылки.</p>
<p><code>display: inline-block;</code> сохраняет элемент в строке и позволяет задавать размеры и отступы. Для перехода используют a, для действия на текущей странице — button.</p>
<p><code>:hover</code> действует при наведении мыши. <code>:focus-visible</code> помогает показать выбор с клавиатуры. На сенсорном экране hover может отсутствовать.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Добавьте карточке <code>border-radius: 16px;</code> и мягкую тень.</li><li>Добавьте .btn inline-block и округлые углы.</li><li>Затемните фон в <code>.btn:hover, .btn:focus-visible</code> и проверьте видимость фокуса клавишей Tab.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>У карточки округлые углы и тень; ссылка меняется при наведении или выборе с клавиатуры.</p></div>
<p class="theory-callout">«Подробнее» ведёт к описанию ниже. Внешний вид кнопки не меняет роль ссылки.</p>
`
    },
    {
      id: "lesson8",
      chip: "Lesson 8",
      navTitle: "Урок 8. Основы адаптивного веб-дизайна",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика Responsive Web</title>
  <style>
    * { box-sizing: border-box; }
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
      flex-wrap: wrap;
      gap: 16px;
    }

    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      width: 180px;
      max-width: 100%;
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
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика Responsive Web</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Меняйте горизонтальное расположение на вертикальное при узком предпросмотре.</p></div>
<h2>💡 Главное</h2>
<p><strong>Адаптивный дизайн</strong> подстраивает одно содержание под разные размеры экрана. Правила <code>@media (max-width: 600px)</code> действуют при ширине 600px и меньше.</p>
<p>Настройка viewport позволяет мобильному браузеру учитывать ширину устройства. <code>border-box</code> сохраняет padding и border внутри карточки с <code>width: 100%</code>.</p>
<p>Здесь страница находится во <strong>фрейме предпросмотра</strong>. Медиазапрос проверяет ширину этого фрейма, а не всего экрана компьютера.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Добавьте .container Flexbox, gap и <code>flex-wrap: wrap;</code>.</li><li>В медиазапросе задайте <code>flex-direction: column;</code> и карточке <code>width: 100%;</code>.</li><li>Сравните предпросмотр шириной до 600px и более 600px.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>При ширине до 600px карточки стоят вертикально; при большей ширине — горизонтально, если хватает места.</p></div>
<p class="theory-callout">Фрейм уже может быть узким. Если изменение окна не помогает, временно замените 600px в медиазапросе на 100px, затем на 2000px и запустите оба варианта. Сравните расположение и ширину карточек, затем верните 600px.</p>
`
    },
    {
      id: "lesson9",
      chip: "Lesson 9",
      navTitle: "Урок 9. Основы JavaScript",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Основы JavaScript</title>
  <style>
    * { box-sizing: border-box; }
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
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Основы JavaScript</title>
  <style>
    * { box-sizing: border-box; }
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
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Создайте кнопку, меняющую приветствие после нажатия.</p></div>
<h2>💡 Главное</h2>
<p><strong>Функция</strong> объединяет код под именем для последующего запуска. Определение: <code>function changeText() { ... }</code>. Запуск: <code>changeText()</code>.</p>
<p>Порядок: <strong>нажатие → запуск функции → поиск элемента → изменение текста</strong>. <code>onclick="changeText()"</code> связывает кнопку с функцией.</p>
<p><code>document.getElementById("message")</code> находит элемент с <code>id="message"</code>. <code>.textContent = "Hi";</code> меняет его текст. Текст в кавычках — <strong>строка</strong>.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Перед <code>&lt;/body&gt;</code> добавьте <code>&lt;script&gt;</code> и <code>&lt;/script&gt;</code>. Между ними напишите <code>function changeText() { }</code>.</li><li>Найдите элемент message и запишите новое приветствие в textContent.</li><li>Добавьте кнопке onclick, запустите страницу и нажмите кнопку в предпросмотре.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Сразу после запуска видна исходная фраза. После нажатия кнопки появляется новое приветствие.</p></div>
<p class="theory-callout">В начальном примере кнопка ещё не подключена. Функцию и onclick нужно добавить самостоятельно.</p>
`
    },
    {
      id: "lesson10",
      chip: "Lesson 10",
      navTitle: "Урок 10. Условия и функции",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Проверка балла</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    input, button { font: inherit; padding: 10px 14px; max-width: 100%; }
    label { display: block; font-weight: bold; }
    button { background: #2563eb; color: white; border: 0; border-radius: 10px; cursor: pointer; }
    button:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    #result { font-weight: bold; color: #1e3a8a; }
  </style>
</head>
<body>
  <h1>Проверка балла</h1>
  <label for="score">Балл (0–100)</label>
  <input type="number" id="score" min="0" max="100" step="1">
  <button type="button">Проверить</button>
  <p id="result" role="status"></p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Проверка балла</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    input, button { font: inherit; padding: 10px 14px; max-width: 100%; }
    label { display: block; font-weight: bold; }
    button { background: #2563eb; color: white; border: 0; border-radius: 10px; cursor: pointer; }
    button:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    #result { font-weight: bold; color: #1e3a8a; }
  </style>
</head>
<body>
  <h1>Проверка балла</h1>
  <label for="score">Балл (0–100)</label>
  <input type="number" id="score" min="0" max="100" step="1">
  <button type="button" onclick="checkScore()">Проверить</button>
  <p id="result" role="status"></p>

  <script>
    function checkScore() {
      const raw = document.getElementById("score").value.trim();
      const result = document.getElementById("result");
      if (raw === "") {
        result.textContent = "Введите балл.";
        return;
      }
      const score = Number(raw);
      if (!Number.isFinite(score) || score < 0 || score > 100) {
        result.textContent = "Введите число от 0 до 100.";
      } else if (score >= 60) {
        result.textContent = "Зачёт!";
      } else {
        result.textContent = "Попробуйте ещё раз.";
      }
    }
  </script>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Покажите разные результаты для баллов ниже 60 и от 60.</p></div>
<h2>💡 Главное</h2>
<p><code>if</code> выполняется, если условие истинно; <code>else</code> — иначе. <code>&gt;=</code> означает «больше или равно», а <code>=</code> присваивает значение.</p>
<p><code>const score = Number(raw);</code> превращает ввод в число с именем score. Имени, объявленному через const, нельзя позже присвоить другое значение.</p>
<p><code>.value</code> даже числового поля — строка. Порядок: <strong>проверка пустого ввода → Number → проверка диапазона → сравнение</strong>. Number превращает пустую строку в 0.</p>
<p>В ответе <code>Number.isFinite(score)</code> проверяет, что значение — конечное число. <code>return;</code> завершает функцию в этом месте.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Как в уроке 9, добавьте script перед <code>&lt;/body&gt;</code> и создайте внутри <code>function checkScore() { }</code>. Добавьте кнопке <code>onclick="checkScore()"</code>.</li><li>Внутри функции прочитайте <code>.value</code> поля score и уберите пробелы по краям с помощью <code>.trim()</code>.</li><li>Сначала обработайте пустой ввод и значения вне 0–100, затем проверьте <code>score &gt;= 60</code>.</li><li>Испытайте пустое поле, 59, 60 и 101 в предпросмотре.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Пусто → просьба ввести балл / 59 → повторить / 60 → зачёт / 101 → сообщение о диапазоне.</p></div>
<p class="theory-callout">60 — проходной балл только для этого упражнения. Подключите кнопку «Проверить» к функции.</p>
`
    },
    {
      id: "lesson11",
      chip: "Lesson 11",
      navTitle: "Урок 11. DOM Manipulation",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика DOM</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика DOM</title>
  <style>
    * { box-sizing: border-box; }
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
      max-width: 100%;
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
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Найдите HTML-элементы и измените их текст и классы.</p></div>
<h2>💡 Главное</h2>
<p><strong>DOM</strong> — представление HTML-документа в браузере в виде <strong>дерева элементов</strong>. JavaScript может находить и изменять эти элементы.</p>
<p><code>id</code> уникален в документе, а <code>class</code> могут использовать несколько элементов. В CSS <code>#title</code> выбирает id, <code>.highlight</code> — класс.</p>
<p><code>textContent</code> меняет текст. <code>classList.add("highlight")</code> добавляет подготовленный CSS-класс, а <code>remove</code> удаляет его.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Создайте функцию, которая находит title и desc по id и меняет их текст.</li><li>Дайте карточке <code>id="card"</code> и создайте стиль .highlight с другим фоном.</li><li>Добавьте карточке класс highlight внутри функции и подключите кнопку.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>После нажатия меняются заголовок, описание и фон карточки.</p></div>
<p class="theory-callout">Если элемент не найден, проверьте написание id и регистр букв. Запускайте функцию после подготовки HTML-элементов.</p>
`
    },
    {
      id: "lesson12",
      chip: "Lesson 12",
      navTitle: "Урок 12. Чтение и проверка ввода",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика ввода</title>
  <style>
    * { box-sizing: border-box; }
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
  <label for="username">Имя</label>
  <input type="text" id="username" placeholder="Введите ваше имя">
  <button>Проверить</button>
  <p id="result" role="status"></p>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Практика ввода</title>
  <style>
    * { box-sizing: border-box; }
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
  <label for="username">Имя</label>
  <input type="text" id="username" placeholder="Введите ваше имя">
  <button onclick="showName()">Проверить</button>
  <p id="result" role="status"></p>

  <script>
    function showName() {
      const name = document.getElementById("username").value.trim();

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
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Прочитайте имя и покажите подсказку при пустом вводе.</p></div>
<h2>💡 Главное</h2>
<p><code>label for="username"</code> называет поле с <code>id="username"</code>. Placeholder исчезает при вводе и не заменяет label.</p>
<p><code>.value</code> читает текст, а <code>.trim()</code> убирает пробелы по краям. После trim условие <code>name === ""</code> находит и ввод только из пробелов.</p>
<p><code>===</code> сравнивает значение и тип. В упражнении имя используется для приветствия <strong>на этой странице</strong>. Данные не отправляются на сервер и аккаунт не создаётся.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Как в уроке 9, создайте <code>function showName() { }</code> внутри script и добавьте кнопке <code>onclick="showName()"</code>. В функции прочитайте <code>document.getElementById("username").value.trim()</code>.</li><li>Если имя пустое, покажите подсказку; иначе запишите приветствие в result.</li><li>Проверьте пустой ввод, только пробелы и настоящее имя.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Пустое поле и пробелы вызывают подсказку, а имя — приветствие с этим именем.</p></div>
<p class="theory-callout">Показывайте ввод через textContent. Здесь не нужно выполнять введённый текст как HTML.</p>
`
    },
    {
      id: "lesson13",
      chip: "Lesson 13",
      navTitle: "Урок 13. Финальный проект",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Моя страница о себе</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>Моя страница о себе</h1>
  <main class="container">
    <section class="card"><h2>О себе</h2><p>Здравствуйте. Я изучаю веб-разработку.</p></section>
    <section class="card"><h2>Интересы</h2><p>Мне нравятся музыка и веб-дизайн.</p>
      <p id="interest-detail" aria-live="polite">Нажмите кнопку, чтобы узнать больше о моих интересах.</p>
      <button type="button" class="btn">Об интересах</button>
    </section>
    <section class="card"><h2>Моя цель</h2><p>Я хочу создавать страницы, которыми моим друзьям легко пользоваться.</p></section>
  </main>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Моя страница о себе</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>Моя страница о себе</h1>
  <main class="container">
    <section class="card"><h2>О себе</h2><p>Здравствуйте. Я изучаю веб-разработку.</p></section>
    <section class="card"><h2>Интересы</h2><p>Мне нравятся музыка и веб-дизайн.</p>
      <p id="interest-detail" aria-live="polite">Нажмите кнопку, чтобы узнать больше о моих интересах.</p>
      <button type="button" class="btn" onclick="showInterest()">Об интересах</button>
    </section>
    <section class="card"><h2>Моя цель</h2><p>Я хочу создавать страницы, которыми моим друзьям легко пользоваться.</p></section>
  </main>

  <script>
    function showInterest() {
      document.getElementById("interest-detail").textContent = "Я хочу изучать веб-дизайн и создать небольшую страницу о музыке.";
    }
  </script>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Завершите страницу о себе с работающими HTML, CSS и JavaScript.</p></div>
<h2>💡 Главное</h2>
<p><strong>HTML</strong> создаёт карточки о себе, интересах и целях. <strong>CSS</strong> управляет расположением, цветами и отступами. <strong>JavaScript</strong> запускает кнопку «Об интересах».</p>
<p>Критерии: <strong>три карточки + Flexbox + читаемые цвета и отступы + кнопка, меняющая текст</strong>. Одного оформления недостаточно.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Замените заголовок и содержание трёх карточек своими данными.</li><li>Добавьте Flexbox, перенос, внутренние отступы и тень.</li><li>В showInterest измените абзац interest-detail и подключите кнопку через onclick.</li><li>Проверьте чтение текста в широком и узком предпросмотре и нажмите кнопку.</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Видны три карточки. Кнопка «Об интересах» показывает конкретное предложение о ваших интересах.</p></div>
<p class="theory-callout">Расскажите о своих целях. Для выполнения задания не нужны настоящие контактные данные.</p>
`
    },
    {
      id: "lesson14",
      chip: "Lesson 14",
      navTitle: "Урок 14. Презентация и повторение",
      defaultCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Презентация моей страницы</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>Презентация моей страницы</h1>
  <main class="container">
    <section class="card"><h2>О себе</h2><p>Здравствуйте. Я изучаю веб-разработку.</p></section>
    <section class="card"><h2>Интересы</h2><p>Мне нравятся музыка и веб-дизайн.</p>
      <p id="interest-detail" aria-live="polite">Нажмите кнопку, чтобы узнать больше о моих интересах.</p>
      <button type="button" class="btn" onclick="showInterest()">Об интересах</button>
    </section>
    <section class="card"><h2>Моя цель</h2><p>Я хочу создавать страницы, которыми моим друзьям легко пользоваться.</p></section>
  </main>

  <script>
    function showInterest() {
      document.getElementById("interest-detail").textContent = "Я хочу изучать веб-дизайн и создать небольшую страницу о музыке.";
    }
  </script>
</body>
</html>`,
      answerCode: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Презентация моей страницы</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 24px; line-height: 1.6; }
    h1 { color: #1e3a8a; }
    .container { display: flex; flex-wrap: wrap; gap: 16px; }
    .card { width: 220px; max-width: 100%; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; box-shadow: 0 8px 20px rgba(15, 23, 42, .08); }
    .btn { font: inherit; padding: 10px 14px; border: 0; border-radius: 9px; background: #2563eb; color: white; cursor: pointer; }
    .btn:hover, .btn:focus-visible { background: #1d4ed8; }
    .btn:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
    @media (max-width: 600px) { .container { flex-direction: column; } .card { width: 100%; } }
  </style>
</head>
<body>
  <h1>Презентация моей страницы</h1>
  <main class="container">
    <section class="card"><h2>О себе</h2><p>Здравствуйте. Я изучаю веб-разработку.</p></section>
    <section class="card"><h2>Интересы</h2><p>Мне нравятся музыка и веб-дизайн.</p>
      <p id="interest-detail" aria-live="polite">Нажмите кнопку, чтобы узнать больше о моих интересах.</p>
      <button type="button" class="btn" onclick="showInterest()">Об интересах</button>
    </section>
    <section class="card"><h2>Моя цель</h2><p>Я хочу создавать страницы, которыми моим друзьям легко пользоваться.</p></section>
  </main>

  <script>
    function showInterest() {
      document.getElementById("interest-detail").textContent = "Я хочу изучать веб-дизайн и создать небольшую страницу о музыке.";
    }
  </script>
</body>
</html>`,
      lessonHtml: `
<div class="info-box lesson-goal"><strong>🎯 Цель урока</strong><p>Проверьте страницу и представьте её тремя предложениями.</p></div>
<h2>💡 Главное</h2>
<p>При первом открытии урока появляется <strong>отдельный новый пример</strong>. Чтобы показать свою работу из урока 13, скопируйте её код в этот редактор.</p>
<p>Перед выступлением проверьте заголовок, читаемые цвета, узкий экран и кнопку. Покажите, <strong>что меняется после нажатия</strong>.</p>
<div class="problem-area"><h3 class="problem-title">🛠️ Попробуйте</h3><ol><li>Запустите свою работу или новый пример и проверьте заголовок и карточки.</li><li>Покажите действие кнопки в предпросмотре. Попробуйте перейти к ней с клавиатуры.</li><li>Подготовьте: «Эта страница рассказывает о ___. Когда я нажимаю ___, меняется ___. Затем я хочу улучшить ___.»</li></ol></div>
<div class="summary-box"><strong>✅ Ожидаемый результат</strong><p>Вы можете за 30–60 секунд показать страницу и действие, а также назвать одно улучшение.</p></div>
<p class="theory-callout">Повторение: HTML — структура, CSS — оформление, JavaScript — действия. Ответ этого урока — один из примеров для выступления.</p>
`
    }
  ]
};

