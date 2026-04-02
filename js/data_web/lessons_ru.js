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