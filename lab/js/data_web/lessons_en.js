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