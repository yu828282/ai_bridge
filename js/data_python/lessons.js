// Python curriculum: keep lesson order/IDs stable for saved student work.
// initialCode/expectedOutput describe the starter, not the mission solution.
// sampleInput may also prepare a task when its starter does not read input yet.
// expectedOutput includes input echo, matching this project's Python Worker.
const lessons = [
    {
        id: "lesson-1",
        needsInput: true,
        menu: {
            ko: "01 · 입력/출력",
            en: "01 · Input/Output",
            ru: "01 · Ввод/Вывод",
        },
        title: {
            ko: "1. 화면에 출력하고 입력받기",
            en: "1. Show output and read input",
            ru: "1. Вывод и ввод данных",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p><b>Python</b>은 컴퓨터에 할 일을 순서대로 적는 프로그래밍 언어입니다. 이 실습 코드는 위에서 아래로 실행됩니다.</p><ul><li><code>print("Hello!")</code>: 괄호 안의 내용을 화면에 보여줍니다. 따옴표 안의 글자를 <b>문자열</b>이라고 합니다.</li><li><code>input()</code>: 입력값을 하나 읽어 문자열로 돌려줍니다.</li></ul><ol><li>먼저 <b>실행 ▶</b>을 눌러 Hello!가 나오는지 확인하세요.</li><li>따옴표 안의 Hello!만 내 이름으로 바꾸고 다시 실행하세요. 따옴표와 괄호는 남겨 두세요.</li><li>아래 문제에서 <code>input()</code>으로 입력받는 연습을 하세요.</li></ol><p>이 레슨은 <b>입력값</b> 칸을 미리 보여줍니다. Mina가 적혀 있는지 확인하세요. <code>input()</code>은 실행 전에 이 칸에 적은 값을 위에서부터 한 줄씩 읽습니다. <code>print()</code>만 있는 시작 예제는 입력값을 사용하지 않습니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    사용자에게 "이름이 무엇인가요?"라고 묻고, 입력값 한 줄을 읽는 코드를 작성하세요. 입력값 칸에 Mina를 적고 실행하세요.
                </div>
<details class="info-box"><summary>🧩 오류가 나면 어디부터 볼까요?</summary><ol><li>실행 결과에 표시된 오류 이름(SyntaxError, NameError 등)과 안내를 먼저 읽으세요.</li><li>줄 번호와 전체 오류 내용은 <b>오류 자세히 보기</b>를 펼쳐 확인하세요.</li><li>따옴표·괄호·철자·들여쓰기를 확인하고 다시 실행하세요.</li></ol><p><code>#</code> 뒤에 적는 주석은 사람이 읽는 설명이며 실행하지 않습니다.</p></details>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p><b>Python</b> is a programming language for giving a computer instructions. The code in this exercise runs from top to bottom.</p><ul><li><code>print("Hello!")</code> shows the value inside the parentheses. Text inside quotes is a <b>string</b>.</li><li><code>input()</code> reads one input value and returns it as text.</li></ul><ol><li>First, select <b>Run ▶</b> and check that Hello! appears.</li><li>Replace only Hello! inside the quotes with your name, then run again. Keep the quotes and parentheses.</li><li>Use <code>input()</code> to practise reading input in the task below.</li></ol><p>The <b>input values</b> box is already visible for this lesson. Check that it contains Mina. Each <code>input()</code> reads the next line entered in this box before running. The starter code uses only <code>print()</code>, so it does not use these input values.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Ask the user "What is your name?" and write code to read one input line. Put Mina in the input values box before running.
                </div>
<details class="info-box"><summary>🧩 Where do I look when an error appears?</summary><ol><li>First read the error name, such as SyntaxError or NameError, and the guidance in the output area.</li><li>Open <b>Show error details</b> to check line numbers and the full error message.</li><li>Check quotes, parentheses, spelling, and indentation. Run again.</li></ol><p>A comment after <code>#</code> explains code for people; it is not executed.</p></details>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p><b>Python</b> — язык программирования для записи команд компьютеру. Код в этом упражнении выполняется сверху вниз.</p><ul><li><code>print("Hello!")</code> показывает значение в скобках. Текст в кавычках называется <b>строкой</b>.</li><li><code>input()</code> читает одно введённое значение и возвращает строку.</li></ul><ol><li>Сначала нажмите <b>Запустить ▶</b> и проверьте, что на экране появилось Hello!</li><li>Замените только Hello! внутри кавычек на своё имя и запустите ещё раз. Оставьте кавычки и скобки.</li><li>В задании ниже потренируйтесь читать данные с помощью <code>input()</code>.</li></ol><p>Поле <b>входных данных</b> уже показано в этом уроке. Проверьте, что там записано Mina. Каждый вызов <code>input()</code> читает следующую строку, записанную в поле до запуска. Начальный пример использует только <code>print()</code>, поэтому входные данные ему не нужны.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Спросите пользователя "Как тебя зовут?" и напишите код для чтения одной строки. До запуска введите Mina в поле входных данных.
                </div>
<details class="info-box"><summary>🧩 Что проверить при ошибке?</summary><ol><li>Сначала прочитайте имя ошибки, например SyntaxError или NameError, и подсказку в области вывода.</li><li>Откройте <b>Показать подробности ошибки</b>, чтобы увидеть номера строк и полное сообщение об ошибке.</li><li>Проверьте кавычки, скобки, имена и отступы. Запустите ещё раз.</li></ol><p>Комментарий после <code>#</code> служит пояснением для человека и не выполняется.</p></details>`,
        },
        answer: {
            ko: "print(\"이름이 무엇인가요?\")\ninput()",
            en: "print(\"What is your name?\")\ninput()",
            ru: "print(\"Как тебя зовут?\")\ninput()",
        },
        initialCode: {
            ko: "print(\"Hello!\")",
            en: "print(\"Hello!\")",
            ru: "print(\"Hello!\")",
        },
        sampleInput: {
            ko: "Mina",
            en: "Mina",
            ru: "Mina",
        },
        expectedOutput: {
            ko: "Hello!",
            en: "Hello!",
            ru: "Hello!",
        },
    },
    {
        id: "lesson-2",
        needsInput: true,
        menu: {
            ko: "02 · 변수",
            en: "02 · Variables",
            ru: "02 · Переменные",
        },
        title: {
            ko: "2. 값에 이름 붙이기: 변수",
            en: "2. Give a value a name: variables",
            ru: "2. Имя для значения: переменные",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p><b>변수</b>는 값에 붙이는 이름입니다. <code>name = "Mina"</code>는 문자열을 <code>name</code>에 저장합니다.</p><p><code>=</code>는 오른쪽 값을 왼쪽 이름에 저장하는 <b>할당</b>입니다. <code>print(name)</code>은 저장된 값, <code>print("name")</code>은 글자 name을 출력합니다.</p><p><code>name = input()</code>은 입력받은 이름을 저장합니다. <code>print()</code>를 두 번 쓰면 서로 다른 줄에 출력됩니다.</p><p>이름의 대소문자를 구분합니다. <code>name</code>과 <code>Name</code>은 다릅니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    입력값 칸에 Mina를 적으세요. 이름을 묻고 입력받은 값을 <b>name</b> 변수에 저장한 뒤, <code>print()</code>를 두 번 사용해 "반가워요!"와 저장한 이름을 각각 다른 줄에 출력하세요.
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p>A <b>variable</b> is a name for a value. <code>name = "Mina"</code> stores a string under the name <code>name</code>.</p><p><code>=</code> assigns the value on the right to the name on the left. <code>print(name)</code> shows its value; <code>print("name")</code> shows the word name.</p><p><code>name = input()</code> stores the name read from input. Two <code>print()</code> calls show their values on separate lines.</p><p>Names are case-sensitive: <code>name</code> and <code>Name</code> are different.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Put Mina in the input values box. Ask for a name and save the input in <b>name</b>. Then use two <code>print()</code> calls to show "Nice to meet you!" and the saved name on separate lines.
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p><b>Переменная</b> — имя для значения. Команда <code>name = "Mina"</code> сохраняет строку под именем <code>name</code>.</p><p><code>=</code> присваивает значение справа имени слева. <code>print(name)</code> выводит значение, а <code>print("name")</code> — слово name.</p><p><code>name = input()</code> сохраняет введённое имя. Два вызова <code>print()</code> выводят значения на отдельных строках.</p><p>Регистр букв важен: <code>name</code> и <code>Name</code> — разные имена.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Запишите Mina в поле входных данных. Спросите имя и сохраните ввод в переменной <b>name</b>. Затем двумя вызовами <code>print()</code> выведите "Привет!" и сохранённое имя на отдельных строках.
                </div>`,
        },
        answer: {
            ko: "print(\"이름이 무엇인가요?\")\nname = input()\nprint(\"반가워요!\")\nprint(name)",
            en: "print(\"What is your name?\")\nname = input()\nprint(\"Nice to meet you!\")\nprint(name)",
            ru: "print(\"Как тебя зовут?\")\nname = input()\nprint(\"Привет!\")\nprint(name)",
        },
        initialCode: {
            ko: "name = \"Mina\"\nprint(name)",
            en: "name = \"Mina\"\nprint(name)",
            ru: "name = \"Mina\"\nprint(name)",
        },
        sampleInput: {
            ko: "Mina",
            en: "Mina",
            ru: "Mina",
        },
        expectedOutput: {
            ko: "Mina",
            en: "Mina",
            ru: "Mina",
        },
    },
    {
        id: "lesson-3",
        menu: {
            ko: "03 · 문자열 +",
            en: "03 · String +",
            ru: "03 · Строки +",
        },
        title: {
            ko: "3. 문자열 연결하기: +",
            en: "3. Join strings with +",
            ru: "3. Соединение строк с помощью +",
        },
        theory: {
            ko: `<p><code>+</code>는 두 문자열을 이어 붙이며 공백을 자동으로 넣지 않습니다. <code>"안녕" + "파이썬"</code>은 <code>안녕파이썬</code>이 됩니다. 단어를 띄우려면 <code>"안녕 "</code>처럼 따옴표 안에 공백을 넣으세요.</p>
<div class="theory-callout"><strong>🔎 직접 확인</strong><p>시작 예제에서 <code>"I like "</code>의 마지막 공백을 지우고 차이를 확인하세요.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    좋아하는 음식을 입력받고, <b>+</b>를 사용해서 "저도 [음식] 좋아해요."를 공백이 올바르게 출력되도록 작성하세요.
                </div>`,
            en: `<p><code>+</code> joins two strings without adding a space. <code>"Hello" + "Python"</code> gives <code>HelloPython</code>. To separate the words, add a space inside the quotes, as in <code>"Hello "</code>.</p>
<div class="theory-callout"><strong>🔎 Try and check</strong><p>Remove the final space in <code>"I like "</code> in the starter and compare the result.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Receive your favorite food as input and use <b>+</b> to print "I like [food] too." with correct spacing.
                </div>`,
            ru: `<p><code>+</code> соединяет две строки без дополнительного пробела. <code>"Привет" + "Python"</code> даёт <code>ПриветPython</code>. Чтобы разделить слова, добавьте пробел внутри кавычек: <code>"Привет "</code>.</p>
<div class="theory-callout"><strong>🔎 Проверьте</strong><p>Удалите последний пробел в <code>"I like "</code> в примере и сравните результат.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Получите название любимой еды через ввод и используйте <b>+</b>, чтобы вывести: "Я тоже люблю [еда]" с правильными пробелами.
                </div>`,
        },
        answer: {
            ko: "print(\"좋아하는 음식은?\")\nfood = input()\nprint(\"저도 \" + food + \" 좋아해요.\")",
            en: "print(\"What is your favorite food?\")\nfood = input()\nprint(\"I like \" + food + \" too.\")",
            ru: "print(\"Какая у вас любимая еда?\")\nfood = input()\nprint(\"Я тоже люблю \" + food + \".\")",
        },
        initialCode: {
            ko: "food = \"pizza\"\nprint(\"I like \" + food)",
            en: "food = \"pizza\"\nprint(\"I like \" + food)",
            ru: "food = \"pizza\"\nprint(\"I like \" + food)",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "I like pizza",
            en: "I like pizza",
            ru: "I like pizza",
        },
    },
    {
        id: "lesson-4",
        menu: {
            ko: "04 · 콤마 연결",
            en: "04 · String with Comma",
            ru: "04 · Строки через запятую",
        },
        title: {
            ko: "4. print에서 여러 값 출력하기",
            en: "4. Print several values with commas",
            ru: "4. Вывод нескольких значений через запятую",
        },
        theory: {
            ko: `<p><code>print()</code>에 여러 값을 콤마(<code>,</code>)로 나누어 전달할 수 있습니다. 문자열과 숫자도 함께 출력할 수 있습니다.</p>
<div class="theory-callout"><strong>🔎 직접 확인</strong><p><code>print("Age:", 20)</code>은 <b>Age: 20</b>을 출력합니다. 콤마는 print에 여러 값을 전달하며, print가 기본적으로 값 사이에 공백을 넣습니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    좋아하는 영화를 물어보고, 콤마를 사용하여 "아하! [영화이름] 를 보셨군요."를 출력하세요.
                </div>`,
            en: `<p>Separate values with commas (<code>,</code>) inside <code>print()</code>. You can print text and numbers together.</p>
<div class="theory-callout"><strong>🔎 Try and check</strong><p><code>print("Age:", 20)</code> prints <b>Age: 20</b>. Commas pass separate values to print; print adds a space between them by default.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Ask about a favorite movie and use commas to print: "Aha! [movie] is your movie."
                </div>`,
            ru: `<p>Внутри <code>print()</code> разделяйте значения запятыми (<code>,</code>). Так можно вывести строку и число вместе.</p>
<div class="theory-callout"><strong>🔎 Проверьте</strong><p><code>print("Age:", 20)</code> выводит <b>Age: 20</b>. Запятые передают print отдельные значения; по умолчанию print разделяет их пробелами.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Спросите о любимом фильме и через запятую выведите: "Ага! Вы посмотрели [фильм]".
                </div>`,
        },
        answer: {
            ko: "print(\"좋아하는 영화는?\")\nmovie = input()\nprint(\"아하!\", movie, \"를 보셨군요.\")",
            en: "print(\"What is your favorite movie?\")\nmovie = input()\nprint(\"Aha!\", movie, \"is your movie.\")",
            ru: "print(\"Ваш любимый фильм?\")\nmovie = input()\nprint(\"Ага! Вы посмотрели\", movie)",
        },
        initialCode: {
            ko: "print(\"Age:\", 20)",
            en: "print(\"Age:\", 20)",
            ru: "print(\"Age:\", 20)",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "Age: 20",
            en: "Age: 20",
            ru: "Age: 20",
        },
    },
    {
        id: "lesson-5",
        menu: {
            ko: "05 · 사칙연산",
            en: "05 · Math",
            ru: "05 · Арифметика",
        },
        title: {
            ko: "5. 컴퓨터는 계산 천재: 사칙연산",
            en: "5. The Calculation Genius: Basic Math",
            ru: "5. Гений вычислений: Арифметика",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p>네 가지 연산 기호: <code>+</code> 더하기, <code>-</code> 빼기, <code>*</code> 곱하기, <code>/</code> 나누기.</p><p><code>10 + 5</code>는 <b>15</b>, 문자열 <code>"10" + "5"</code>는 <b>"105"</b>입니다. 숫자 계산에는 따옴표 없는 숫자를 사용하세요.</p><p><code>10 / 5</code>는 <b>2.0</b>입니다. 숫자를 0으로 나누면 <code>ZeroDivisionError</code>가 납니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    변수 <b>a</b>에 10, <b>b</b>에 5를 저장하고 두 수를 곱한(<b>*</b>) 결과를 출력하세요.
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p>Four arithmetic operators: <code>+</code> add, <code>-</code> subtract, <code>*</code> multiply, and <code>/</code> divide.</p><p><code>10 + 5</code> gives <b>15</b>, but strings <code>"10" + "5"</code> give <b>"105"</b>. Use numbers without quotes for arithmetic.</p><p><code>10 / 5</code> gives <b>2.0</b>. Dividing a number by zero raises <code>ZeroDivisionError</code>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Store 10 in variable <b>a</b> and 5 in variable <b>b</b>, then print the result of their multiplication (<b>*</b>).
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p>Четыре знака: <code>+</code> сложение, <code>-</code> вычитание, <code>*</code> умножение и <code>/</code> деление.</p><p><code>10 + 5</code> даёт <b>15</b>, а строки <code>"10" + "5"</code> дают <b>"105"</b>. Для вычислений используйте числа без кавычек.</p><p><code>10 / 5</code> даёт <b>2.0</b>. Деление числа на ноль вызывает <code>ZeroDivisionError</code>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Присвойте переменной <b>a</b> значение 10, а <b>b</b> — значение 5, и выведите результат их умножения (<b>*</b>).
                </div>`,
        },
        answer: {
            ko: "a = 10\nb = 5\nprint(a * b)",
            en: "a = 10\nb = 5\nprint(a * b)",
            ru: "a = 10\nb = 5\nprint(a * b)",
        },
        initialCode: {
            ko: "a = 6\nb = 2\nprint(a + b)\nprint(a / b)",
            en: "a = 6\nb = 2\nprint(a + b)\nprint(a / b)",
            ru: "a = 6\nb = 2\nprint(a + b)\nprint(a / b)",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "8\n3.0",
            en: "8\n3.0",
            ru: "8\n3.0",
        },
    },
    {
        id: "lesson-6",
        menu: {
            ko: "06 · input 안내문",
            en: "06 · Input Message",
            ru: "06 · Подсказка в input()",
        },
        title: {
            ko: "6. 친절한 안내원: input() 메시지",
            en: "6. Friendly Guide: Message inside input()",
            ru: "6. Сообщение внутри input()",
        },
        theory: {
            ko: `<p><code>input()</code>의 괄호 안에 문자열을 넣으면 사용자가 무엇을 입력해야 할지 알려주는 <b>힌트</b>가 됩니다.</p>
                <ul>
                    <li><b>기존:</b> <code>print("이름:")</code> 작성 후 <code>input()</code> (두 줄 필요)</li>
                    <li><b>개선:</b> <code>input("이름: ")</code> (한 줄로 해결!)</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p><code>age = input(...)</code>만으로는 저장된 값을 다시 출력하지 않습니다. 확인하려면 다음 줄에 <code>print(age)</code>를 적으세요.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    사용자에게 "나이를 입력하세요: "라는 문구가 보이도록 코드를 작성하고, 입력받은 값을 변수 <b>age</b>에 저장하세요.
                </div>`,
            en: `<p>Putting a string inside <code>input()</code> provides a <b>hint</b> to the user about what to type.</p>
                <ul>
                    <li><b>Old way:</b> <code>print("Name:")</code> then <code>input()</code> (Needs two lines)</li>
                    <li><b>New way:</b> <code>input("Name: ")</code> (Done in one line!)</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Try and check</strong><p><code>age = input(...)</code> stores the value but does not print it again. Add <code>print(age)</code> on the next line to show it.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Write the code to show "Enter your age: " and save the input in a variable named <b>age</b>.
                </div>`,
            ru: `<p>Если написать строку внутри <code>input()</code>, она станет <b>подсказкой</b>, которая скажет пользователю, что именно нужно ввести.</p>
                <ul>
                    <li><b>Раньше:</b> Сначала <code>print("Имя:")</code>, затем <code>input()</code> (две строки)</li>
                    <li><b>Сейчас:</b> <code>input("Имя: ")</code> (всего одна строка!)</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p><code>age = input(...)</code> сохраняет значение, но не выводит его повторно. Для вывода добавьте следующую строку <code>print(age)</code>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Напишите код так, чтобы пользователь увидел "Введите возраст: ", и сохраните результат в переменную <b>age</b>.
                </div>`,
        },
        answer: {
            ko: "age = input(\"나이를 입력하세요: \")",
            en: "age = input(\"Enter your age: \")",
            ru: "age = input(\"Введите возраст: \")",
        },
        initialCode: {
            ko: "name = input(\"이름: \")\nprint(name)",
            en: "name = input(\"Name: \")\nprint(name)",
            ru: "name = input(\"Имя: \")\nprint(name)",
        },
        sampleInput: {
            ko: "Mina",
            en: "Mina",
            ru: "Mina",
        },
        expectedOutput: {
            ko: "이름: Mina\nMina",
            en: "Name: Mina\nMina",
            ru: "Имя: Mina\nMina",
        },
    },
    {
        id: "lesson-7",
        menu: {
            ko: "07 · 자료형/형변환",
            en: "07 · Data Types",
            ru: "07 · Типы данных",
        },
        title: {
            ko: "7. 문자열과 숫자: 자료형 변환",
            en: "7. Text and numbers: type conversion",
            ru: "7. Текст и числа: преобразование типов",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p><b>자료형</b>은 값의 종류입니다. <code>str</code>은 문자열, <code>int</code>는 정수, <code>float</code>는 소수점이 있는 수를 다룹니다.</p><p><code>input()</code>의 결과는 문자열입니다. 정수 계산에는 <code>int()</code>, 소수 계산에는 <code>float()</code>로 바꾸세요.</p><p><code>int("5")</code>는 5, <code>float("3.5")</code>는 3.5입니다. <code>int("3.5")</code>는 <code>ValueError</code>가 납니다. 이번 미션에는 정수를 입력하세요.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    숫자 하나를 입력받아 <b>num</b> 변수에 저장(정수형)하고, 그 숫자에 10을 더한 결과를 출력하세요.
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p>A <b>data type</b> describes a value. <code>str</code> is text, <code>int</code> is a whole number, and <code>float</code> handles decimal numbers.</p><p><code>input()</code> returns text. Use <code>int()</code> for whole-number arithmetic or <code>float()</code> for decimal arithmetic.</p><p><code>int("5")</code> gives 5 and <code>float("3.5")</code> gives 3.5. <code>int("3.5")</code> raises <code>ValueError</code>. Enter a whole number for this task.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Receive a number as input, store it as an integer in variable <b>num</b>, and print the result of adding 10 to it.
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p><b>Тип данных</b> описывает вид значения. <code>str</code> — строка, <code>int</code> — целое число, <code>float</code> — число с дробной частью.</p><p><code>input()</code> возвращает строку. Для вычислений преобразуйте её с помощью <code>int()</code> в целое или <code>float()</code> в дробное число.</p><p><code>int("5")</code> даёт 5, <code>float("3.5")</code> — 3.5. <code>int("3.5")</code> вызывает <code>ValueError</code>. В этом задании вводите целое число.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Введите число, сохраните его в переменную <b>num</b> (как целое число) и выведите результат прибавления к нему 10.
                </div>`,
        },
        answer: {
            ko: "num = int(input(\"숫자 입력: \"))\nprint(num + 10)",
            en: "num = int(input(\"Enter a number: \"))\nprint(num + 10)",
            ru: "num = int(input(\"Введите число: \"))\nprint(num + 10)",
        },
        initialCode: {
            ko: "num = int(input(\"정수: \"))\nprint(num * 2)",
            en: "num = int(input(\"Integer: \"))\nprint(num * 2)",
            ru: "num = int(input(\"Целое число: \"))\nprint(num * 2)",
        },
        sampleInput: {
            ko: "5",
            en: "5",
            ru: "5",
        },
        expectedOutput: {
            ko: "정수: 5\n10",
            en: "Integer: 5\n10",
            ru: "Целое число: 5\n10",
        },
    },
    {
        id: "lesson-8",
        menu: {
            ko: "08 · 계산기 프로젝트",
            en: "08 · Calculator Project",
            ru: "08 · Проект: Калькулятор",
        },
        title: {
            ko: "8. 종합 실습: 나만의 사칙연산 계산기",
            en: "8. Project: Your Own Math Calculator",
            ru: "8. Проект: Ваш собственный калькулятор",
        },
        theory: {
            ko: `<p>지금까지 배운 <b>변수, 입력, 형변환, 사칙연산</b>을 모두 합쳐서 진짜 계산기를 만듭니다.</p>
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p>미션 입력 예는 첫 줄 <b>10</b>, 둘째 줄 <b>5</b>입니다. 결과는 15, 5, 50, 2.0입니다. 나누는 수 b에는 0을 넣지 마세요.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 미션</span>
                    1. 첫 번째 숫자를 <b>a</b>에 정수로 저장하세요.<br>
                    2. 두 번째 숫자를 <b>b</b>에 정수로 저장하세요.<br>
                    3. 두 수의 더하기(+), 빼기(-), 곱하기(*), 나누기(/) 결과를 각각 출력하세요.
                </div>
                <p><i>팁: 결과 앞에 "합계: " 처럼 설명을 붙여주면 더 좋습니다!</i></p>`,
            en: `<p>Combine everything you've learned—<b>Variables, Input, Type Conversion, and Math</b>—to build a real calculator.</p>
                <div class="theory-callout"><strong>🔎 Try and check</strong><p>For the task, put <b>10</b> on the first input line and <b>5</b> on the second. The results are 15, 5, 50, and 2.0. Do not use 0 for divisor b.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Mission</span>
                    1. Store the first number in <b>a</b> as an integer.<br>
                    2. Store the second number in <b>b</b> as an integer.<br>
                    3. Print the results of adding (+), subtracting (-), multiplying (*), and dividing (/) the two numbers.
                </div>
                <p><i>Tip: It's even better if you add labels like "Sum: " before the results!</i></p>`,
            ru: `<p>Объедините всё, что вы узнали — <b>Переменные, Ввод, Преобразование типов и Арифметику</b> — чтобы создать настоящий калькулятор.</p>
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p>Для задания введите <b>10</b> в первой строке и <b>5</b> во второй. Результаты: 15, 5, 50 и 2.0. Делитель b не должен быть равен 0.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Миссия</span>
                    1. Сохраните первое число в <b>a</b> как целое число.<br>
                    2. Сохраните второе число в <b>b</b> как целое число.<br>
                    3. Выведите результаты сложения (+), вычитания (-), умножения (*) и деления (/) этих двух чисел.
                </div>
                <p><i>Подсказка: будет еще лучше, если вы добавите пояснения, например «Сумма: », перед результатами!</i></p>`,
        },
        answer: {
            ko: "a = int(input(\"첫 번째 숫자: \"))\nb = int(input(\"두 번째 숫자: \"))\nprint(\"a + b =\", a + b)\nprint(\"a - b =\", a - b)\nprint(\"a * b =\", a * b)\nprint(\"a / b =\", a / b)",
            en: "a = int(input(\"First number: \"))\nb = int(input(\"Second number: \"))\nprint(\"a + b =\", a + b)\nprint(\"a - b =\", a - b)\nprint(\"a * b =\", a * b)\nprint(\"a / b =\", a / b)",
            ru: "a = int(input(\"Первое число: \"))\nb = int(input(\"Второе число: \"))\nprint(\"a + b =\", a + b)\nprint(\"a - b =\", a - b)\nprint(\"a * b =\", a * b)\nprint(\"a / b =\", a / b)",
        },
        initialCode: {
            ko: "a = int(input(\"첫 번째: \"))\nb = int(input(\"두 번째: \"))\nprint(a + b)",
            en: "a = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(a + b)",
            ru: "a = int(input(\"Первое: \"))\nb = int(input(\"Второе: \"))\nprint(a + b)",
        },
        sampleInput: {
            ko: "10\n5",
            en: "10\n5",
            ru: "10\n5",
        },
        expectedOutput: {
            ko: "첫 번째: 10\n두 번째: 5\n15",
            en: "First: 10\nSecond: 5\n15",
            ru: "Первое: 10\nВторое: 5\n15",
        },
    },
    {
        id: "lesson-9",
        menu: {
            ko: "09 · 참과 거짓",
            en: "09 · True and False",
            ru: "09 · Истина и Ложь",
        },
        title: {
            ko: "9. 컴퓨터의 대답: 예(True) 또는 아니오(False)",
            en: "9. Computer's Answer: Yes (True) or No (False)",
            ru: "9. Ответ компьютера: Да (True) или Нет (False)",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p>비교 결과는 <b>True(참)</b> 또는 <b>False(거짓)</b>입니다. 이 두 값을 가진 자료형이 <b>bool</b>입니다.</p><p><code>10 &gt; 5</code>는 True, <code>10 &lt; 5</code>는 False입니다. <code>&gt;=</code>는 이상, <code>&lt;=</code>는 이하를 뜻합니다.</p><p><code>True</code>와 <code>False</code>의 첫 글자는 대문자입니다. 따옴표로 감싼 <code>"False"</code>는 문자열입니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    <code>print(10 > 5)</code>와 <code>print(10 < 5)</code>의 결과를 각각 확인해 보세요.
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p>A comparison returns <b>True</b> or <b>False</b>. The data type with these two values is <b>bool</b>.</p><p><code>10 &gt; 5</code> is True; <code>10 &lt; 5</code> is False. <code>&gt;=</code> means greater than or equal to, and <code>&lt;=</code> means less than or equal to.</p><p>Start <code>True</code> and <code>False</code> with a capital letter. <code>"False"</code> in quotes is text.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Check the results of <code>print(10 > 5)</code> and <code>print(10 < 5)</code>.
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p>Сравнение возвращает <b>True</b> или <b>False</b>. Тип с этими двумя значениями называется <b>bool</b>.</p><p><code>10 &gt; 5</code> — True, а <code>10 &lt; 5</code> — False. <code>&gt;=</code> означает «больше или равно», <code>&lt;=</code> — «меньше или равно».</p><p><code>True</code> и <code>False</code> начинаются с большой буквы. <code>"False"</code> в кавычках — строка.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Проверьте результаты <code>print(10 > 5)</code> и <code>print(10 < 5)</code>.
                </div>`,
        },
        answer: {
            ko: "print(10 > 5)\nprint(10 < 5)",
            en: "print(10 > 5)\nprint(10 < 5)",
            ru: "print(10 > 5)\nprint(10 < 5)",
        },
        initialCode: {
            ko: "score = 70\nprint(score >= 60)\nprint(score < 60)",
            en: "score = 70\nprint(score >= 60)\nprint(score < 60)",
            ru: "score = 70\nprint(score >= 60)\nprint(score < 60)",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "True\nFalse",
            en: "True\nFalse",
            ru: "True\nFalse",
        },
    },
    {
        id: "lesson-10",
        menu: {
            ko: "10 · 비교 연산자",
            en: "10 · Comparison",
            ru: "10 · Сравнение",
        },
        title: {
            ko: "10. \"넣기(=)\"와 \"비교하기(==)\"의 차이",
            en: "10. Difference: \"Assigning (=)\" vs \"Comparing (==)\"",
            ru: "10. Разница: «Присваивание (=)» против «Сравнения (==)»",
        },
        theory: {
            ko: `<p>값을 저장할 때와 두 값이 같은지 비교할 때 쓰는 기호를 구분하세요.</p>
                <ul>
                    <li><b>= (할당):</b> "상자에 담아라!" 라는 명령입니다. (<code>a = 10</code>)</li>
                    <li><b>== (비교):</b> "둘이 같니?" 라고 물어보는 질문입니다. 결과는 <b>True/False</b>로 나옵니다.</li>
                </ul>
                
                
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p>먼저 <code>score = 80</code>으로 값을 저장한 뒤 비교합니다. 시작 예제의 80을 90으로 바꾸면 False가 True로 바뀝니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    변수 <b>score</b>에 90을 저장(=)하고, score가 90과 같은지(==) 출력하는 코드를 작성하세요.
                </div>`,
            en: `<p>Use different symbols to store a value and to compare two values.</p>
                <ul>
                    <li><b>= (Assignment):</b> A command to "Put this in the box!" (<code>a = 10</code>)</li>
                    <li><b>== (Comparison):</b> A question asking "Are these two equal?" The result is <b>True/False</b>.</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Try and check</strong><p>Assign <code>score = 80</code> before comparing it. Change 80 to 90 in the starter: False becomes True.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Store (=) 90 in variable <b>score</b>, and then write code to print if score is equal (==) to 90.
                </div>`,
            ru: `<p>Для сохранения значения и сравнения двух значений используются разные знаки.</p>
                <ul>
                    <li><b>= (Присваивание):</b> Команда «Положи это в коробку!» (<code>a = 10</code>).</li>
                    <li><b>== (Сравнение):</b> Вопрос «Эти две вещи равны?». Результат будет <b>True/False</b>.</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p>Сначала присвойте значение <code>score = 80</code>, затем сравнивайте. Замените 80 на 90: False станет True.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Сохраните (=) 90 в переменную <b>score</b>, а затем напишите код, который выведет, равно ли (==) значение score числу 90.
                </div>`,
        },
        answer: {
            ko: "score = 90\nprint(score == 90)",
            en: "score = 90\nprint(score == 90)",
            ru: "score = 90\nprint(score == 90)",
        },
        initialCode: {
            ko: "score = 80\nprint(score == 90)",
            en: "score = 80\nprint(score == 90)",
            ru: "score = 80\nprint(score == 90)",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "False",
            en: "False",
            ru: "False",
        },
    },
    {
        id: "lesson-11",
        menu: {
            ko: "11 · if 조건문",
            en: "11 · if Statement",
            ru: "11 · Условие if",
        },
        title: {
            ko: "11. 조건의 문: if 문과 들여쓰기",
            en: "11. The Gate of Conditions: if and Indentation",
            ru: "11. Условие if и отступы",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p><code>if</code> 는 조건이 True일 때 아래의 코드 묶음을 실행합니다. 조건 뒤에 <b>콜론(:)</b>을 붙입니다.</p><p>묶음 안의 줄 앞에 <b>공백 4칸</b>을 넣으세요. 같은 묶음은 같은 위치에서 시작합니다. Tab과 공백을 섞지 마세요.</p><p>조건이 False이고 다른 출력 코드가 없다면 화면에 아무것도 출력되지 않습니다. 실행 실패와는 다릅니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    만약 10이 5보다 크다면 "Success"를 출력하는 코드를 만드세요. (들여쓰기에 주의하세요!)
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p><code>if</code> runs the block below it when the condition is True. Add a <b>colon (:)</b> after the condition.</p><p>Use <b>4 spaces</b> before each line in the block. Lines in one block must align. Do not mix tabs and spaces.</p><p>If the condition is False and there is no other print statement, nothing is printed. That does not mean the run failed.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Create a code: if 10 is greater than 5, print "Success". (Pay attention to indentation!)
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p><code>if</code> выполняет блок ниже, когда условие True. После условия поставьте <b>двоеточие (:)</b>.</p><p>Добавьте <b>4 пробела</b> перед каждой строкой блока. Строки одного блока должны начинаться на одной позиции. Не смешивайте табуляцию и пробелы.</p><p>Если условие False и других команд print нет, на экране ничего не появится. Это не означает ошибку запуска.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Напишите код: если 10 больше 5, вывести "Success". (Следите за отступами!)
                </div>`,
        },
        answer: {
            ko: "if 10 > 5:\n    print(\"Success\")",
            en: "if 10 > 5:\n    print(\"Success\")",
            ru: "if 10 > 5:\n    print(\"Success\")",
        },
        initialCode: {
            ko: "number = 3\nif number > 0:\n    print(\"양수\")",
            en: "number = 3\nif number > 0:\n    print(\"Positive\")",
            ru: "number = 3\nif number > 0:\n    print(\"Положительное\")",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "양수",
            en: "Positive",
            ru: "Положительное",
        },
    },
    {
        id: "lesson-12",
        menu: {
            ko: "12 · 커피 알고리즘",
            en: "12 · Coffee Project",
            ru: "12 · Проект Кофе",
        },
        title: {
            ko: "12. 갈림길: if-else로 선택하기",
            en: "12. The Fork in the Road: Choosing with if-else",
            ru: "12. Развилка: выбор с помощью if-else",
        },
        theory: {
            ko: `<p>조건이 틀렸을 때(False) 실행할 코드는 <b>else</b> 뒤에 적습니다.</p>
                <p><i>시나리오: 커피 한 잔에 3000원입니다. 돈이 충분하면 "Coffee", 부족하면 "No coffee"를 출력합니다.</i></p>
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p><code>else:</code>는 if와 같은 위치에서 시작합니다. 시작 예제의 money를 2999와 3000으로 바꾸어 경계값을 비교하세요.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    돈(<b>money</b>)을 입력받아(int형 변환 필수!) 3000원 미만이면 "No coffee", 3000원 이상이면 "Coffee"를 출력하는 프로그램을 만드세요.
                </div>`,
            en: `<p>Code to run when a condition is False is written after <b>else</b>.</p>
                <p><i>Scenario: A cup of coffee is 3000 won. If you have enough money, print "Coffee"; otherwise, print "No coffee".</i></p>
                <div class="theory-callout"><strong>🔎 Try and check</strong><p>Align <code>else:</code> with if. Set money to 2999 and then 3000 in the starter to test the boundary.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Input <b>money</b> (don't forget <code>int()</code>!), if it's less than 3000, print "No coffee", otherwise print "Coffee".
                </div>`,
            ru: `<p>Код, который должен выполниться, если условие Ложно, пишется после <b>else</b>.</p>
                <p><i>Сценарий: Чашка кофе стоит 3000 вон. Если у вас достаточно денег, выведите "Coffee", если нет — "No coffee".</i></p>
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p><code>else:</code> начинается на одном уровне с if. Проверьте границу: задайте money сначала 2999, затем 3000.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Введите сумму (<b>money</b>) (не забудьте про <code>int()</code>!). Если меньше 3000, выведите "No coffee", иначе — "Coffee".
                </div>`,
        },
        answer: {
            ko: "money = int(input(\"돈: \"))\nif money < 3000:\n    print(\"No coffee\")\nelse:\n    print(\"Coffee\")",
            en: "money = int(input(\"Money: \"))\nif money < 3000:\n    print(\"No coffee\")\nelse:\n    print(\"Coffee\")",
            ru: "money = int(input(\"Деньги: \"))\nif money < 3000:\n    print(\"No coffee\")\nelse:\n    print(\"Coffee\")",
        },
        initialCode: {
            ko: "money = 2000\nif money >= 3000:\n    print(\"Coffee\")\nelse:\n    print(\"No coffee\")",
            en: "money = 2000\nif money >= 3000:\n    print(\"Coffee\")\nelse:\n    print(\"No coffee\")",
            ru: "money = 2000\nif money >= 3000:\n    print(\"Coffee\")\nelse:\n    print(\"No coffee\")",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "No coffee",
            en: "No coffee",
            ru: "No coffee",
        },
    },
    {
        id: "lesson-13",
        menu: {
            ko: "13 · elif",
            en: "13 · elif",
            ru: "13 · elif",
        },
        title: {
            ko: "13. 조건이 여러 개일 때: elif",
            en: "13. Multiple Conditions: elif",
            ru: "13. Несколько условий: elif",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p><code>elif</code>는 앞의 조건이 맞지 않을 때 다음 조건을 검사합니다. 한 묶음에서 <b>처음으로 True가 된 가지 하나</b>만 실행합니다.</p><p>이번 점수 예제는 <code>&gt;=</code>를 쓰므로 90 → 80 → 70 → 60 순서로 검사합니다. 모든 문제에서 큰 값부터 검사해야 하는 것은 아닙니다.</p><p>예: 89는 90 이상이 아니지만 80 이상이므로 B입니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    점수를 입력받아 90 이상이면 A, 80 이상이면 B, 70 이상이면 C, 60 이상이면 D, 나머지는 F를 출력하세요.
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p><code>elif</code> checks the next condition when earlier conditions do not match. Only the <b>first matching branch</b> in the chain runs.</p><p>This grading example uses <code>&gt;=</code>, so check 90 → 80 → 70 → 60. Starting with the largest value is not a rule for every problem.</p><p>For example, 89 is below 90 but at least 80, so the result is B.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Input a score. Print A for 90+, B for 80+, C for 70+, D for 60+, and F for anything else.
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p><code>elif</code> проверяет следующее условие, если предыдущие не подошли. Выполняется только <b>первая подходящая ветвь</b> в цепочке.</p><p>В этом примере используется <code>&gt;=</code>, поэтому порядок такой: 90 → 80 → 70 → 60. Начинать с наибольшего значения нужно не во всех задачах.</p><p>Например, 89 меньше 90, но не меньше 80, поэтому результат — B.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Введите балл. Выведите A для 90+, B для 80+, C для 70+, D для 60+, иначе — F.
                </div>`,
        },
        answer: {
            ko: "score = int(input(\"점수를 입력하세요: \"))\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelif score >= 60:\n    print(\"D\")\nelse:\n    print(\"F\")",
            en: "score = int(input(\"Enter score: \"))\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelif score >= 60:\n    print(\"D\")\nelse:\n    print(\"F\")",
            ru: "score = int(input(\"Введите балл: \"))\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelif score >= 60:\n    print(\"D\")\nelse:\n    print(\"F\")",
        },
        initialCode: {
            ko: "score = 75\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")",
            en: "score = 75\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")",
            ru: "score = 75\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "C",
            en: "C",
            ru: "C",
        },
    },
    {
        id: "lesson-14",
        menu: {
            ko: "14 · and / or",
            en: "14 · and / or",
            ru: "14 · and / or",
        },
        title: {
            ko: "14. 조건 결합하기: and와 or",
            en: "14. Combining Conditions: and and or",
            ru: "14. Комбинирование условий: and и or",
        },
        theory: {
            ko: `<p>여러 개의 조건을 한 줄에서 검사하고 싶을 때 사용합니다.</p>
                <ul>
                    <li><b>and:</b> 두 조건이 <b>모두</b> 참일 때만 True (까다로운 조건)</li>
                    <li><b>or:</b> 둘 중 <b>하나라도</b> 참이면 True (너그러운 조건)</li>
                </ul>
                

                <div class="theory-callout"><strong>🔎 직접 확인</strong><p>시작 예제는 점수 조건은 True, 출석 조건은 False입니다. 두 비교 결과를 and로 묶으면 False, or로 묶으면 True입니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    점수가 70 이상<b>이고</b> 출석률이 80 이상이면 "합격"을 출력하는 코드를 작성하세요. (and 사용)
                </div>`,
            en: `<p>Use these when you want to check multiple conditions in one line.</p>
                <ul>
                    <li><b>and:</b> True only if <b>both</b> conditions are True (Strict).</li>
                    <li><b>or:</b> True if <b>at least one</b> condition is True (Generous).</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Try and check</strong><p>In the starter, the score condition is True and attendance is False. Joining these comparison results with and gives False; or gives True.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Input score and attendance. If score is 70 or more <b>and</b> attendance is 80 or more, print "Pass".
                </div>`,
            ru: `<p>Используются для проверки нескольких условий в одной строке.</p>
                <ul>
                    <li><b>and:</b> True только если <b>оба</b> условия верны (Строгое).</li>
                    <li><b>or:</b> True, если <b>хотя бы одно</b> из условий верно (Мягкое).</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p>В примере условие по баллу — True, по посещаемости — False. Для этих результатов and даёт False, а or — True.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Если балл 70 и выше <b>и</b> посещаемость 80 и выше, выведите "Pass".
                </div>`,
        },
        answer: {
            ko: "score = int(input(\"점수: \"))\natt = int(input(\"출석: \"))\nif score >= 70 and att >= 80:\n    print(\"합격\")\nelse:\n    print(\"불합격\")",
            en: "score = int(input(\"Score: \"))\natt = int(input(\"Attendance: \"))\nif score >= 70 and att >= 80:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
            ru: "score = int(input(\"Балл: \"))\natt = int(input(\"Посещаемость: \"))\nif score >= 70 and att >= 80:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
        },
        initialCode: {
            ko: "score = 70\nattendance = 79\nprint(score >= 70 and attendance >= 80)\nprint(score >= 70 or attendance >= 80)",
            en: "score = 70\nattendance = 79\nprint(score >= 70 and attendance >= 80)\nprint(score >= 70 or attendance >= 80)",
            ru: "score = 70\nattendance = 79\nprint(score >= 70 and attendance >= 80)\nprint(score >= 70 or attendance >= 80)",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "False\nTrue",
            en: "False\nTrue",
            ru: "False\nTrue",
        },
    },
    {
        id: "lesson-15",
        menu: {
            ko: "15 · 중첩 if",
            en: "15 · Nested if",
            ru: "15 · Вложенный if",
        },
        title: {
            ko: "15. 조건 속의 조건: 중첩 if",
            en: "15. Conditions within Conditions: Nested if",
            ru: "15. Условие внутри условия: Вложенный if",
        },
        theory: {
            ko: `<p><b>중첩 if</b>는 큰 필터를 거친 뒤 그 안에서 다시 세부 필터를 거치는 구조입니다.</p>
                <ul>
                    <li><b>구조:</b> if문 안에 또 다른 if문이 들어갑니다.</li>
                    <li><b>핵심:</b> 안쪽 if문은 바깥쪽 if문보다 <b>한 번 더 들여쓰기</b>를 해야 합니다.</li>
                </ul>
                
                
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p>바깥 if 안은 공백 4칸, 안쪽 if 안은 공백 8칸입니다. else를 어느 if와 나란히 놓는지에 따라 연결되는 조건이 달라집니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    점수를 입력받아 60 이상이면 "합격"을 출력하고, 그 안에서 다시 90 이상이면 "A"를 출력하세요. 60 미만이면 "불합격"만 출력하세요.
                </div>`,
            en: `<p><b>Nested if</b> is like passing through a big filter and then a smaller filter inside it.</p>
                <ul>
                    <li><b>Structure:</b> An if statement is placed inside another if statement.</li>
                    <li><b>Key:</b> The inner if statement must be <b>indented even further</b>.</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Try and check</strong><p>Use 4 spaces inside the outer if and 8 inside the inner if. The if aligned with an else determines which condition that else belongs to.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Input a score. If it's 60+, print "Pass". Inside that block, if it's 90+, print "A". If it's below 60, just print "Fail".
                </div>`,
            ru: `<p><b>Вложенный if</b> — это как прохождение через большой фильтр, а затем через более мелкий внутри него.</p>
                <ul>
                    <li><b>Структура:</b> Один оператор if помещается внутрь другого.</li>
                    <li><b>Важно:</b> Внутренний if должен иметь <b>дополнительный отступ</b>.</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p>Внутри внешнего if используйте 4 пробела, внутри вложенного — 8. Оператор else относится к тому if, с которым он выровнен.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Введите балл. Если 60+, выведите "Pass". Внутри этого блока, если 90+, выведите "A". Если меньше 60, выведите "Fail".
                </div>`,
        },
        answer: {
            ko: "score = int(input(\"점수: \"))\nif score >= 60:\n    print(\"합격\")\n    if score >= 90:\n        print(\"A\")\nelse:\n    print(\"불합격\")",
            en: "score = int(input(\"Score: \"))\nif score >= 60:\n    print(\"Pass\")\n    if score >= 90:\n        print(\"A\")\nelse:\n    print(\"Fail\")",
            ru: "score = int(input(\"Балл: \"))\nif score >= 60:\n    print(\"Pass\")\n    if score >= 90:\n        print(\"A\")\nelse:\n    print(\"Fail\")",
        },
        initialCode: {
            ko: "score = 95\nif score >= 60:\n    print(\"합격\")\n    if score >= 90:\n        print(\"A\")",
            en: "score = 95\nif score >= 60:\n    print(\"Pass\")\n    if score >= 90:\n        print(\"A\")",
            ru: "score = 95\nif score >= 60:\n    print(\"Зачёт\")\n    if score >= 90:\n        print(\"A\")",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "합격\nA",
            en: "Pass\nA",
            ru: "Зачёт\nA",
        },
    },
    {
        id: "lesson-16",
        menu: {
            ko: "16 · f-string",
            en: "16 · f-string",
            ru: "16 · f-string",
        },
        title: {
            ko: "16. 예쁘게 출력하기: f-string",
            en: "16. Clean Output: f-string",
            ru: "16. Красивый вывод: f-string",
        },
        theory: {
            ko: `<p><b>f-string</b>은 변수의 값을 문장 중간에 아주 쉽게 끼워 넣는 방법입니다.</p>
                <ul>
                    <li><b>방법:</b> 따옴표 앞에 <b>f</b>를 쓰고, 변수는 중괄호 <b>{ }</b> 안에 넣습니다.</li>
                    <li><b>장점:</b> 콤마(,)나 플러스(+)를 여러 번 쓰지 않아도 되어 가독성이 매우 좋습니다.</li>
                </ul>
                <p><i>예: print(f"점수는 {score}점입니다.")</i></p>
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p>시작 예제에서 따옴표 앞의 <code>f</code>를 지우면 <code>{name}</code>과 <code>{score}</code>가 값으로 바뀌지 않고 그대로 보입니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    변수 <b>name</b>에 "Tom", <b>score</b>에 85를 저장하고 f-string을 사용하여 "Tom의 점수는 85점입니다."를 출력하세요.
                </div>`,
            en: `<p><b>f-strings</b> are the easiest way to insert variables directly into a sentence.</p>
                <ul>
                    <li><b>How:</b> Put an <b>f</b> before the quotes and wrap the variable in curly braces <b>{ }</b>.</li>
                    <li><b>Benefit:</b> It's much cleaner than using many commas or plus signs.</li>
                </ul>
                <p><i>Example: print(f"Your score is {score}.")</i></p>
                <div class="theory-callout"><strong>🔎 Try and check</strong><p>Remove the <code>f</code> before the quotes in the starter: <code>{name}</code> and <code>{score}</code> appear as text instead of values.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Store "Tom" in <b>name</b> and 85 in <b>score</b>. Use an f-string to print "Tom's score is 85."
                </div>`,
            ru: `<p><b>f-строки</b> — это самый простой способ вставить переменные прямо в предложение.</p>
                <ul>
                    <li><b>Как:</b> Поставьте букву <b>f</b> перед кавычками и заключите переменную в фигурные скобки <b>{ }</b>.</li>
                    <li><b>Преимущество:</b> Это выглядит гораздо чище, чем использование множества запятых или плюсов.</li>
                </ul>
                <p><i>Пример: print(f"Ваш балл: {score}.")</i></p>
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p>Удалите <code>f</code> перед кавычками: <code>{name}</code> и <code>{score}</code> останутся текстом вместо значений.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Сохраните "Tom" в <b>name</b> и 85 в <b>score</b>. Используйте f-string, чтобы вывести: "Tom — 85 баллов.".
                </div>`,
        },
        answer: {
            ko: "name = \"Tom\"\nscore = 85\nprint(f\"{name}의 점수는 {score}점입니다.\")",
            en: "name = \"Tom\"\nscore = 85\nprint(f\"{name}'s score is {score}.\")",
            ru: "name = \"Tom\"\nscore = 85\nprint(f\"{name} — {score} баллов.\")",
        },
        initialCode: {
            ko: "name = \"Mina\"\nscore = 90\nprint(f\"{name}: {score}\")",
            en: "name = \"Mina\"\nscore = 90\nprint(f\"{name}: {score}\")",
            ru: "name = \"Mina\"\nscore = 90\nprint(f\"{name}: {score}\")",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "Mina: 90",
            en: "Mina: 90",
            ru: "Mina: 90",
        },
    },
    {
        id: "lesson-17",
        menu: {
            ko: "17 · 복습 종합",
            en: "17 · Review",
            ru: "17 · Повторение",
        },
        title: {
            ko: "17. 중간 점검: 입력·자료형·계산 복습",
            en: "17. Review: input, data types and arithmetic",
            ru: "17. Повторение: ввод, типы данных и вычисления",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p>새 이론 대신 먼저 결과를 예상해 보세요.</p><ol><li><code>"10" + "5"</code>의 결과는 무엇인가요?</li><li><code>int("10") + int("5")</code>는 어떻게 다른가요?</li><li>입력값을 숫자로 바꾸는 코드는 어디에 넣어야 하나요?</li></ol><p>시작 예제를 실행하면 105와 15가 순서대로 나옵니다. 아래 미션에서는 고정된 글자를 두 번의 입력으로 바꾸세요.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    두 숫자를 각각 입력받아(int형 변환), 두 수의 합계(+)를 출력하는 코드를 작성하세요.
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p>Predict the results before running.</p><ol><li>What does <code>"10" + "5"</code> produce?</li><li>How is <code>int("10") + int("5")</code> different?</li><li>Where should input text be converted into numbers?</li></ol><p>The starter prints 105 and then 15. In the task, replace the fixed text with two inputs.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Input two numbers separately (convert to int), and write code to print their sum (+).
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p>Сначала предположите результат.</p><ol><li>Что получится из <code>"10" + "5"</code>?</li><li>Чем отличается <code>int("10") + int("5")</code>?</li><li>Где нужно преобразовать введённые строки в числа?</li></ol><p>Пример выводит сначала 105, затем 15. В задании замените готовые строки двумя вводами.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Введите два числа по отдельности (преобразуйте в int) и выведите их сумму (+).
                </div>`,
        },
        answer: {
            ko: "a = int(input(\"첫 번째 숫자: \"))\nb = int(input(\"두 번째 숫자: \"))\nprint(a + b)",
            en: "a = int(input(\"First number: \"))\nb = int(input(\"Second number: \"))\nprint(a + b)",
            ru: "a = int(input(\"Первое число: \"))\nb = int(input(\"Второе число: \"))\nprint(a + b)",
        },
        initialCode: {
            ko: "a = \"10\"\nb = \"5\"\nprint(a + b)\nprint(int(a) + int(b))",
            en: "a = \"10\"\nb = \"5\"\nprint(a + b)\nprint(int(a) + int(b))",
            ru: "a = \"10\"\nb = \"5\"\nprint(a + b)\nprint(int(a) + int(b))",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "105\n15",
            en: "105\n15",
            ru: "105\n15",
        },
    },
    {
        id: "lesson-18",
        menu: {
            ko: "18 · try-except",
            en: "18 · try-except",
            ru: "18 · try-except",
        },
        title: {
            ko: "18. 프로그램의 방패: try-except",
            en: "18. Program's Shield: try-except",
            ru: "18. Щит программы: try-except",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p><code>int("abc")</code>는 정수로 바꿀 수 없어 <b>ValueError</b>가 납니다. 예상한 오류를 처리할 때 <code>try / except</code>를 사용합니다.</p><ul><li><code>try:</code> 아래에서 변환을 시도합니다.</li><li><code>except ValueError:</code> 그 변환 오류가 생기면 안내를 출력합니다.</li></ul><p>시작 예제의 입력값 abc를 5로 바꿔 성공과 오류를 모두 확인하세요. 이 구문이 모든 종류의 오류를 해결하는 것은 아닙니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 문제</span>
                    입력값을 정수로 바꾸어 출력하세요. abc나 3.5처럼 정수로 바꿀 수 없는 문자열이면 "오류! 정수를 입력하세요."를 출력하세요.
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p><code>int("abc")</code> cannot become a whole number, so it raises <b>ValueError</b>. Use <code>try / except</code> to handle an expected error.</p><ul><li>Try the conversion inside <code>try:</code>.</li><li><code>except ValueError:</code> shows a message if that conversion error occurs.</li></ul><p>Change the starter input from abc to 5 and check both paths. This handler does not fix every kind of error.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    Convert the input to a whole number and print it. For text such as abc or 3.5 that cannot be converted to an integer, print "Error! Please enter a whole number."
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p><code>int("abc")</code> нельзя преобразовать в целое число: возникает <b>ValueError</b>. <code>try / except</code> позволяет обработать ожидаемую ошибку.</p><ul><li>Попробуйте преобразование внутри <code>try:</code>.</li><li><code>except ValueError:</code> выводит сообщение при этой ошибке преобразования.</li></ul><p>Замените входное значение abc на 5 и проверьте оба варианта. Этот обработчик не исправляет все виды ошибок.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задача</span>
                    Преобразуйте ввод в целое число и выведите его. Если строку, например abc или 3.5, нельзя преобразовать в целое число, выведите "Ошибка! Введите целое число."
                </div>`,
        },
        answer: {
            ko: "try:\n    num = int(input(\"숫자 입력: \"))\n    print(num)\nexcept ValueError:\n    print(\"오류! 정수를 입력하세요.\")",
            en: "try:\n    num = int(input(\"Enter number: \"))\n    print(num)\nexcept ValueError:\n    print(\"Error! Please enter a whole number.\")",
            ru: "try:\n    num = int(input(\"Введите число: \"))\n    print(num)\nexcept ValueError:\n    print(\"Ошибка! Введите целое число.\")",
        },
        initialCode: {
            ko: "try:\n    num = int(input(\"정수: \"))\n    print(num * 2)\nexcept ValueError:\n    print(\"정수를 입력해 주세요.\")",
            en: "try:\n    num = int(input(\"Integer: \"))\n    print(num * 2)\nexcept ValueError:\n    print(\"Please enter a whole number.\")",
            ru: "try:\n    num = int(input(\"Целое число: \"))\n    print(num * 2)\nexcept ValueError:\n    print(\"Введите целое число.\")",
        },
        sampleInput: {
            ko: "abc",
            en: "abc",
            ru: "abc",
        },
        expectedOutput: {
            ko: "정수: abc\n정수를 입력해 주세요.",
            en: "Integer: abc\nPlease enter a whole number.",
            ru: "Целое число: abc\nВведите целое число.",
        },
    },
    {
        id: "lesson-19",
        menu: {
            ko: "19 · 카페 프로젝트",
            en: "19 · Cafe Project",
            ru: "19 · Кафе проект",
        },
        title: {
            ko: "19. 종합 실습: 스마트 카페 키오스크",
            en: "19. Final Practice: Smart Cafe Kiosk",
            ru: "19. Итоговая практика: Умный киоск в кафе",
        },
        theory: {
            ko: `<p>지금까지 배운 모든 지식을 합쳐서 카페 주문 시스템을 만듭니다. 돈을 입력하면 살 수 있는 음료를 추천해 줍니다.</p>
                <ul>
                    <li><b>가격표:</b> 차(3500), 아메리카노(4500), 라떼(5500)</li>
                    <li><b>조건:</b> <code>if-elif-else</code>를 사용하여 금액별로 다른 메시지를 보여줍니다.</li>
                    <li><b>안전:</b> 숫자가 아닌 값이 들어올 경우를 대비해 <code>try-except</code>로 감싸줍니다.</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p>가격은 원(KRW)입니다. 이번 답안은 <code>&lt;</code>를 사용해 작은 금액부터 검사합니다. 3500, 4500, 5500원에서 결과가 바뀌는지 확인하세요. 숫자로 바꾸지 못하는 입력은 <code>except ValueError:</code>에서 처리합니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 미션</span>
                    돈을 입력받아 살 수 있는 가장 비싼 음료를 포함해 결과를 출력하세요. (예: 5000원이면 "차와 아메리카노가 가능합니다")
                </div>`,
            en: `<p>Combine everything you've learned to create a cafe ordering system. It recommends drinks based on the money entered.</p>
                <ul>
                    <li><b>Price list:</b> Tea(3500), Americano(4500), Latte(5500)</li>
                    <li><b>Conditions:</b> Use <code>if-elif-else</code> to show different messages by amount.</li>
                    <li><b>Safety:</b> Use <code>try-except</code> to handle cases where non-numeric values are entered.</li>
                </ul>
                <div class="theory-callout"><strong>🔎 Try and check</strong><p>Prices are in KRW. This solution uses <code>&lt;</code>, checking the smallest amounts first. Test 3500, 4500, and 5500. Handle invalid numeric text with <code>except ValueError:</code>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Mission</span>
                    Input money and print the results including the most expensive drink available. (e.g., If 5000, "Tea and Americano are available")
                </div>`,
            ru: `<p>Объедините все свои знания, чтобы создать систему заказа в кафе. Она рекомендует напитки в зависимости от введенной суммы.</p>
                <ul>
                    <li><b>Цены:</b> Чай(3500), Американо(4500), Латте(5500)</li>
                    <li><b>Логика:</b> Используйте <code>if-elif-else</code> для разных сообщений.</li>
                    <li><b>Безопасность:</b> Используйте <code>try-except</code> на случай ввода нечисловых значений.</li>
                </ul>
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p>Цены указаны в вонах (KRW). В решении используется <code>&lt;</code>: сначала проверяются меньшие суммы. Проверьте 3500, 4500 и 5500. Неверный числовой ввод обрабатывается через <code>except ValueError:</code>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Миссия</span>
                    Введите сумму и выведите доступные напитки. (например, если 5000: «Доступны чай и американо»)
                </div>`,
        },
        answer: {
            ko: "try:\n    money = int(input(\"돈: \"))\n    if money < 3500:\n        print(\"아무것도 살 수 없습니다.\")\n    elif money < 4500:\n        print(\"차 주문 가능\")\n    elif money < 5500:\n        print(\"차, 아메리카노 가능\")\n    else:\n        print(\"모든 음료 주문 가능\")\nexcept ValueError:\n    print(\"숫자 형식으로 입력해 주세요.\")",
            en: "try:\n    money = int(input(\"Money: \"))\n    if money < 3500:\n        print(\"You can't buy anything.\")\n    elif money < 4500:\n        print(\"Tea available\")\n    elif money < 5500:\n        print(\"Tea, Americano available\")\n    else:\n        print(\"All drinks available\")\nexcept ValueError:\n    print(\"Please enter a numeric value.\")",
            ru: "try:\n    money = int(input(\"Деньги: \"))\n    if money < 3500:\n        print(\"Вы ничего не можете купить.\")\n    elif money < 4500:\n        print(\"Доступен чай\")\n    elif money < 5500:\n        print(\"Доступны чай и американо\")\n    else:\n        print(\"Доступны все напитки\")\nexcept ValueError:\n    print(\"Пожалуйста, введите число.\")",
        },
        initialCode: {
            ko: "try:\n    money = int(input(\"금액(원): \"))\n    if money >= 3500:\n        print(\"차 주문 가능\")\n    else:\n        print(\"금액 부족\")\nexcept ValueError:\n    print(\"정수를 입력해 주세요.\")",
            en: "try:\n    money = int(input(\"Money (KRW): \"))\n    if money >= 3500:\n        print(\"Tea available\")\n    else:\n        print(\"Not enough money\")\nexcept ValueError:\n    print(\"Please enter a whole number.\")",
            ru: "try:\n    money = int(input(\"Сумма (вон): \"))\n    if money >= 3500:\n        print(\"Чай доступен\")\n    else:\n        print(\"Недостаточно денег\")\nexcept ValueError:\n    print(\"Введите целое число.\")",
        },
        sampleInput: {
            ko: "5000",
            en: "5000",
            ru: "5000",
        },
        expectedOutput: {
            ko: "금액(원): 5000\n차 주문 가능",
            en: "Money (KRW): 5000\nTea available",
            ru: "Сумма (вон): 5000\nЧай доступен",
        },
    },
    {
        id: "lesson-20",
        menu: {
            ko: "20 · 리스트(List)",
            en: "20 · List Basics",
            ru: "20 · Основы списков",
        },
        title: {
            ko: "20. 여러 개의 데이터를 하나로! 리스트",
            en: "20. Multiple Data in One! Lists",
            ru: "20. Несколько данных в одном! Списки",
        },
        theory: {
            ko: `<p><b>리스트(List)</b>는 여러 개의 값을 한 번에 저장할 수 있는 아주 유용한 자료형입니다.</p>
                <ul>
                    <li><b>인덱스:</b> 0부터 시작하며, 특정 위치의 값을 꺼낼 때 사용합니다.</li>
                    <li><b>len():</b> 리스트에 들어있는 값의 개수를 알려줍니다.</li>
                    <li><b>append():</b> 리스트의 맨 뒤에 새로운 값을 추가합니다.</li>
                    <li><b>remove():</b> 리스트에서 특정 값을 삭제합니다.</li>
                </ul>
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p><code>foods[0]</code>은 첫 번째 값입니다. <code>foods.append("apple")</code>의 점(.)은 foods의 기능을 사용한다는 표시입니다. remove는 처음 일치하는 값 하나를 지우며, 값이 없으면 ValueError가 납니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 실습 미션</span>
                    <p>1. 좋아하는 음식 3개가 들어있는 리스트 <b>foods</b>를 만드세요.</p>
                    <p>2. <b>append()</b>를 사용해 음식을 하나 더 추가해보세요.</p>
                    <p>3. <b>print(len(foods))</b>로 총 개수를 확인해보세요.</p>
                </div>`,
            en: `<p>A <b>List</b> is a useful data type that can store multiple values at once.</p>
                <ul>
                    <li><b>Index:</b> Starts from 0, used to access specific values.</li>
                    <li><b>len():</b> Tells you the number of items in the list.</li>
                    <li><b>append():</b> Adds a new item to the end of the list.</li>
                    <li><b>remove():</b> Removes a specific item from the list.</li>
                </ul>
                <div class="theory-callout"><strong>🔎 Try and check</strong><p><code>foods[0]</code> is the first item. The dot in <code>foods.append("apple")</code> accesses an operation on foods. remove deletes the first matching item and raises ValueError if it is absent.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task</span>
                    <p>1. Create a list named <b>foods</b> with 3 of your favorite foods.</p>
                    <p>2. Use <b>append()</b> to add one more food item.</p>
                    <p>3. Check the total count using <b>print(len(foods))</b>.</p>
                </div>`,
            ru: `<p><b>Список (List)</b> — это тип данных, который может хранить несколько значений одновременно.</p>
                <ul>
                    <li><b>Индекс:</b> Начинается с 0, используется для доступа к значениям.</li>
                    <li><b>len():</b> Показывает количество элементов в списке.</li>
                    <li><b>append():</b> Добавляет новый элемент в конец списка.</li>
                    <li><b>remove():</b> Удаляет определенный элемент из списка.</li>
                </ul>
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p><code>foods[0]</code> — первый элемент. Точка в <code>foods.append("apple")</code> обращается к операции списка foods. remove удаляет первое совпадение; если значения нет, возникает ValueError.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задание</span>
                    <p>1. Создайте список <b>foods</b> с 3 вашими любимыми блюдами.</p>
                    <p>2. Используйте <b>append()</b>, чтобы добавить еще одно блюдо.</p>
                    <p>3. Проверьте общее количество с помощью <b>print(len(foods))</b>.</p>
                </div>`,
        },
        answer: {
            ko: "foods = [\"pizza\", \"chicken\", \"ramen\"]\nfoods.append(\"icecream\")\nprint(foods)\nprint(len(foods))",
            en: "foods = [\"pizza\", \"chicken\", \"ramen\"]\nfoods.append(\"icecream\")\nprint(foods)\nprint(len(foods))",
            ru: "foods = [\"pizza\", \"chicken\", \"ramen\"]\nfoods.append(\"icecream\")\nprint(foods)\nprint(len(foods))",
        },
        initialCode: {
            ko: "foods = [\"pizza\", \"ramen\"]\nprint(foods[0])\nfoods.append(\"apple\")\nprint(len(foods))",
            en: "foods = [\"pizza\", \"ramen\"]\nprint(foods[0])\nfoods.append(\"apple\")\nprint(len(foods))",
            ru: "foods = [\"pizza\", \"ramen\"]\nprint(foods[0])\nfoods.append(\"apple\")\nprint(len(foods))",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "pizza\n3",
            en: "pizza\n3",
            ru: "pizza\n3",
        },
    },
    {
        id: "lesson-21",
        menu: {
            ko: "21 · 반복문(for)",
            en: "21 · for Loop",
            ru: "21 · Цикл for",
        },
        title: {
            ko: "21. 같은 작업은 컴퓨터에게! 반복문 for",
            en: "21. Let the Computer Repeat! for Loops",
            ru: "21. Пусть компьютер повторяет! Цикл for",
        },
        theory: {
            ko: `<p><b>반복문(for)</b>은 리스트의 요소들을 하나씩 꺼내어 같은 작업을 반복할 때 사용합니다.</p>
                <ul>
                    <li><b>기본 문법:</b> <code>for 변수 in 리스트:</code> 형태를 사용하며, 다음 줄은 반드시 <b>들여쓰기</b>를 해야 합니다.</li>
                    <li><b>range():</b> <code>range(5)</code>는 0부터 4까지의 숫자 범위를 만들어줍니다. (5는 포함되지 않음)</li>
                    <li><b>누적 합계:</b> 합계를 저장할 변수를 0으로 초기화한 뒤, 반복문 안에서 계속 더해줍니다.</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p>미션의 total은 <b>0 → 80 → 170 → 240 → 300 → 400</b>으로 바뀝니다. 반복문 밖에서 400을 5로 나누면 평균은 <b>80.0</b>입니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 실습 미션: 평균 점수 구하기</span>
                    <p>1. 점수 리스트 <b>scores = [80, 90, 70, 60, 100]</b>를 만드세요.</p>
                    <p>2. <b>total</b> 변수를 0으로 만드세요.</p>
                    <p>3. <b>for</b>문을 사용하여 점수의 총합을 구하세요.</p>
                    <p>4. 총합을 리스트의 길이로 나누어 평균을 출력하세요.</p>
                </div>`,
            en: `<p>A <b>for loop</b> is used to repeat the same task by taking elements from a list one by one.</p>
                <ul>
                    <li><b>Syntax:</b> Use <code>for variable in list:</code>. The next line <b>must be indented</b>.</li>
                    <li><b>range():</b> <code>range(5)</code> creates a sequence of numbers from 0 to 4. (5 is not included)</li>
                    <li><b>Accumulating Sum:</b> Initialize a sum variable to 0, then add values inside the loop.</li>
                </ul>
                <div class="theory-callout"><strong>🔎 Try and check</strong><p>In the task, total changes as <b>0 → 80 → 170 → 240 → 300 → 400</b>. After the loop, 400 divided by 5 gives an average of <b>80.0</b>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Practice: Calculate Average</span>
                    <p>1. Create a score list: <b>scores = [80, 90, 70, 60, 100]</b>.</p>
                    <p>2. Initialize <b>total = 0</b>.</p>
                    <p>3. Use a <b>for</b> loop to calculate the total sum of the scores.</p>
                    <p>4. Divide the total by the length of the list and print the average.</p>
                </div>`,
            ru: `<p><b>Цикл for</b> используется для повторения одной и той же задачи, перебирая элементы списка один за другим.</p>
                <ul>
                    <li><b>Синтаксис:</b> Используйте <code>for переменная in список:</code>. Следующая строка <b>должна иметь отступ</b>.</li>
                    <li><b>range():</b> <code>range(5)</code> создает последовательность чисел от 0 до 4 (5 не включается).</li>
                    <li><b>Накопительная сумма:</b> Создайте переменную для суммы со значением 0, затем прибавляйте значения внутри цикла.</li>
                </ul>
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p>В задании total меняется так: <b>0 → 80 → 170 → 240 → 300 → 400</b>. После цикла деление 400 на 5 даёт среднее <b>80.0</b>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задание: Найти средний балл</span>
                    <p>1. Создайте список оценок: <b>scores = [80, 90, 70, 60, 100]</b>.</p>
                    <p>2. Создайте переменную <b>total = 0</b>.</p>
                    <p>3. Используйте цикл <b>for</b>, чтобы вычислить общую сумму баллов.</p>
                    <p>4. Разделите сумму на длину списка и выведите среднее значение.</p>
                </div>`,
        },
        answer: {
            ko: "scores = [80, 90, 70, 60, 100]\ntotal = 0\nfor score in scores:\n    total = total + score\naverage = total / len(scores)\nprint(\"평균:\", average)",
            en: "scores = [80, 90, 70, 60, 100]\ntotal = 0\nfor score in scores:\n    total = total + score\naverage = total / len(scores)\nprint(\"Average:\", average)",
            ru: "scores = [80, 90, 70, 60, 100]\ntotal = 0\nfor score in scores:\n    total = total + score\naverage = total / len(scores)\nprint(\"Среднее:\", average)",
        },
        initialCode: {
            ko: "scores = [80, 90]\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(total)",
            en: "scores = [80, 90]\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(total)",
            ru: "scores = [80, 90]\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(total)",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "170",
            en: "170",
            ru: "170",
        },
    },
    {
        id: "lesson-22",
        menu: {
            ko: "22 · 반복문(while)",
            en: "22 · while Loop",
            ru: "22 · Цикл while",
        },
        title: {
            ko: "22. 조건이 참인 동안 반복: while",
            en: "22. Repeat while a condition is True",
            ru: "22. Повторение, пока условие истинно",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p><code>while</code> 은 조건이 True인 동안 같은 코드를 반복합니다. 조건이 False가 되거나 <b>break</b>를 만나면 끝납니다.</p><p><code>for</code>는 목록을 하나씩 순회하고, <code>while</code>은 조건을 매번 검사합니다. <code>continue</code>는 이번 차례의 남은 코드를 건너뛰고 다시 조건을 검사합니다.</p><p>아래 미션의 입력값에 <code>1</code>, <code>1</code>, <code>2</code>를 한 줄씩 미리 넣으세요. 마지막 2가 종료값이며 총액은 9000원입니다. 잘못 만든 반복은 <b>정지</b> 버튼으로 멈출 수 있습니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 실습 미션: 메뉴 선택 프로그램</span>
                    <p>무한 반복(<code>while True</code>)을 사용하여 간단한 주문 시스템을 만드세요.</p>
                    <ol>
                        <li><b>total</b>(합계) 변수를 0으로 만듭니다.</li>
                        <li>사용자에게 메뉴 번호를 입력받습니다. (1: 아메리카노 4500원, 2: 종료)</li>
                        <li>1번을 누르면 <b>total</b>에 4500을 더하고 현재 합계를 출력합니다.</li>
                        <li>2번을 누르면 "종료합니다" 문구와 총액을 출력한 뒤 <b>break</b>로 반복을 멈춥니다.</li>
                    </ol>
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p><code>while</code> repeats code while its condition is True. It ends when the condition becomes False or it reaches <b>break</b>.</p><p><code>for</code> visits items in a sequence; <code>while</code> checks a condition each time. <code>continue</code> skips the rest of the current turn and checks the condition again.</p><p>For the task below, enter <code>1</code>, <code>1</code>, and <code>2</code> on separate lines before running. The final 2 stops the order; the total is 9000 KRW. Use <b>Stop</b> if your loop does not finish.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task: Menu Selection Program</span>
                    <p>Create a simple ordering system using an infinite loop (<code>while True</code>).</p>
                    <ol>
                        <li>Initialize a <b>total</b> variable to 0.</li>
                        <li>Get a menu number from the user. (1: Americano 4,500 KRW, 2: Exit)</li>
                        <li>If '1' is entered, add 4500 to <b>total</b> and print the current sum.</li>
                        <li>If '2' is entered, print "Exit", show the total, and stop the loop with <b>break</b>.</li>
                    </ol>
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p><code>while</code> повторяет код, пока условие True. Цикл заканчивается, когда условие становится False или выполняется <b>break</b>.</p><p><code>for</code> перебирает элементы последовательности, а <code>while</code> каждый раз проверяет условие. <code>continue</code> пропускает остаток текущей итерации и снова проверяет условие.</p><p>Для задания ниже заранее введите <code>1</code>, <code>1</code> и <code>2</code> с новой строки. Последняя 2 завершает заказ, итог — 9000 вон. Если цикл не заканчивается, нажмите <b>Стоп</b>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задание: Программа выбора меню</span>
                    <p>Создайте простую систему заказа, используя бесконечный цикл (<code>while True</code>).</p>
                    <ol>
                        <li>Создайте переменную <b>total</b> со значением 0.</li>
                        <li>Получите номер меню от пользователя. (1: Американо 4500, 2: Выход)</li>
                        <li>Если введено «1», прибавьте 4500 к <b>total</b> и выведите текущую сумму.</li>
                        <li>Если введено «2», выведите «Выход», итоговую сумму и остановите цикл с помощью <b>break</b>.</li>
                    </ol>
                </div>`,
        },
        answer: {
            ko: "total = 0\nwhile True:\n    choice = input(\"1:아메리카노(4500), 2:종료. 번호 입력: \")\n    if choice == \"1\":\n        total = total + 4500\n        print(\"현재 합계:\", total)\n    elif choice == \"2\":\n        print(\"주문을 종료합니다. 총액:\", total)\n        break\n    else:\n        print(\"잘못된 입력입니다.\")",
            en: "total = 0\nwhile True:\n    choice = input(\"1:Americano(4500), 2:Exit. Enter number: \")\n    if choice == \"1\":\n        total = total + 4500\n        print(\"Current total:\", total)\n    elif choice == \"2\":\n        print(\"Exit. Total sum:\", total)\n        break\n    else:\n        print(\"Invalid input.\")",
            ru: "total = 0\nwhile True:\n    choice = input(\"1:Американо(4500), 2:Выход. Введите номер: \")\n    if choice == \"1\":\n        total = total + 4500\n        print(\"Текущая сумма:\", total)\n    elif choice == \"2\":\n        print(\"Завершение заказа. Итого:\", total)\n        break\n    else:\n        print(\"Неверный ввод.\")",
        },
        initialCode: {
            ko: "total = 0\nwhile True:\n    choice = input(\"1: 커피, 2: 종료: \")\n    if choice == \"2\":\n        break\n    if choice == \"1\":\n        total = total + 4500\nprint(total)",
            en: "total = 0\nwhile True:\n    choice = input(\"1: coffee, 2: exit: \")\n    if choice == \"2\":\n        break\n    if choice == \"1\":\n        total = total + 4500\nprint(total)",
            ru: "total = 0\nwhile True:\n    choice = input(\"1: кофе, 2: выход: \")\n    if choice == \"2\":\n        break\n    if choice == \"1\":\n        total = total + 4500\nprint(total)",
        },
        sampleInput: {
            ko: "1\n2",
            en: "1\n2",
            ru: "1\n2",
        },
        expectedOutput: {
            ko: "1: 커피, 2: 종료: 1\n1: 커피, 2: 종료: 2\n4500",
            en: "1: coffee, 2: exit: 1\n1: coffee, 2: exit: 2\n4500",
            ru: "1: кофе, 2: выход: 1\n1: кофе, 2: выход: 2\n4500",
        },
    },
    {
        id: "lesson-23",
        menu: {
            ko: "23 · 함수(Function)",
            en: "23 · Functions",
            ru: "23 · Функции",
        },
        title: {
            ko: "23. 코드의 부품 만들기! 함수(Function)",
            en: "23. Making Code Parts! Functions",
            ru: "23. Создание частей кода! Функции",
        },
        theory: {
            ko: `<div class="info-box"><strong>💡 핵심 개념</strong><p><b>함수</b>는 이름을 붙여 다시 사용할 수 있는 코드 묶음입니다. <code>def add(a, b):</code>로 만들고 <code>add(2, 3)</code>처럼 <b>호출</b>합니다.</p><p><code>a, b</code>는 전달받은 값을 담는 <b>매개변수</b>입니다. <code>return a + b</code>는 계산한 값을 호출한 곳으로 돌려줍니다.</p><p><code>return</code>은 화면 출력이 아닙니다. 결과를 보려면 <code>print(add(2, 3))</code>처럼 출력하세요. 결과는 5입니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 실습 미션: 계산기 함수 만들기</span>
                    <p>두 숫자를 전달받아 더한 값을 돌려주는 <b>add</b> 함수를 만드세요.</p>
                    <ol>
                        <li><b>def add(a, b):</b> 로 함수를 정의하세요.</li>
                        <li>함수 내부에서 <b>a + b</b>의 결과를 <b>return</b> 하세요.</li>
                        <li>사용자로부터 숫자 두 개를 입력받아 변수 <b>x, y</b>에 저장하세요.</li>
                        <li>함수를 호출하여 결과를 출력하세요.</li>
                    </ol>
                </div>`,
            en: `<div class="info-box"><strong>💡 Key idea</strong><p>A <b>function</b> is a named block of reusable code. Define it with <code>def add(a, b):</code>, then <b>call</b> it with <code>add(2, 3)</code>.</p><p><code>a, b</code> are <b>parameters</b> that receive values. <code>return a + b</code> sends the result back to the caller.</p><p><code>return</code> does not print. Use <code>print(add(2, 3))</code> to show the result: 5.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task: Calculator Function</span>
                    <p>Create an <b>add</b> function that takes two numbers and returns their sum.</p>
                    <ol>
                        <li>Define the function using <b>def add(a, b):</b>.</li>
                        <li><b>return</b> the result of <b>a + b</b> inside the function.</li>
                        <li>Get two numbers from the user and store them in <b>x</b> and <b>y</b>.</li>
                        <li>Call the function and print the result.</li>
                    </ol>
                </div>`,
            ru: `<div class="info-box"><strong>💡 Главное</strong><p><b>Функция</b> — именованный блок кода для повторного использования. Определите её через <code>def add(a, b):</code> и <b>вызовите</b> через <code>add(2, 3)</code>.</p><p><code>a, b</code> — <b>параметры</b>, принимающие значения. <code>return a + b</code> возвращает результат в место вызова.</p><p><code>return</code> не выводит текст на экран. <code>print(add(2, 3))</code> покажет результат: 5.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задание: Функция-калькулятор</span>
                    <p>Создайте функцию <b>add</b>, которая принимает два числа и возвращает их сумму.</p>
                    <ol>
                        <li>Определите функцию с помощью <b>def add(a, b):</b>.</li>
                        <li>Используйте <b>return</b> для возврата результата <b>a + b</b> внутри функции.</li>
                        <li>Получите два числа от пользователя и сохраните их в <b>x</b> и <b>y</b>.</li>
                        <li>Вызовите функцию и выведите результат.</li>
                    </ol>
                </div>`,
        },
        answer: {
            ko: "def add(a, b):\n    return a + b\n\nx = int(input(\"첫 번째 숫자: \"))\ny = int(input(\"두 번째 숫자: \"))\nprint(\"결과:\", add(x, y))",
            en: "def add(a, b):\n    return a + b\n\nx = int(input(\"First number: \"))\ny = int(input(\"Second number: \"))\nprint(\"Result:\", add(x, y))",
            ru: "def add(a, b):\n    return a + b\n\nx = int(input(\"Первое число: \"))\ny = int(input(\"Второе число: \"))\nprint(\"Результат:\", add(x, y))",
        },
        initialCode: {
            ko: "def add(a, b):\n    return a + b\n\nprint(add(2, 3))",
            en: "def add(a, b):\n    return a + b\n\nprint(add(2, 3))",
            ru: "def add(a, b):\n    return a + b\n\nprint(add(2, 3))",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "5",
            en: "5",
            ru: "5",
        },
    },
    {
        id: "lesson-24",
        menu: {
            ko: "24 · 딕셔너리(Dictionary)",
            en: "24 · Dictionary",
            ru: "24 · Словари",
        },
        title: {
            ko: "24. 이름표로 데이터 찾기! 딕셔너리",
            en: "24. Find Data with Labels! Dictionaries",
            ru: "24. Поиск данных по меткам! Словари",
        },
        theory: {
            ko: `<p><b>딕셔너리(Dictionary)</b>는 데이터를 '키(Key)'와 '값(Value)'의 쌍으로 저장하는 자료구조입니다. 실생활의 사전처럼 단어(Key)를 찾으면 뜻(Value)이 나오는 것과 같습니다.</p>
                <ul>
                    <li><b>구조:</b> 중괄호 <code>{ }</code>를 사용하며, <code>"키": 값</code> 형태로 저장합니다.</li>
                    <li><b>리스트 vs 딕셔너리:</b> 리스트는 순서(인덱스)로 데이터를 관리하지만, 딕셔너리는 이름표(Key)로 데이터를 관리하여 정보가 많을 때 읽기 쉽습니다.</li>
                    <li><b>중첩 구조:</b> 딕셔너리의 값으로 리스트를 넣어 여러 개의 데이터를 한꺼번에 관리할 수 있습니다.</li>
                    <li><b>items():</b> <code>for key, value in data.items():</code>를 사용하면 키와 값을 동시에 꺼낼 수 있습니다.</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p><code>student["name"]</code>은 name 키의 값입니다. 없는 키를 직접 읽으면 KeyError가 납니다. 미션 입력 예: Mina, IT, 80, 90, 100을 한 줄씩 쓰면 평균은 <b>90.0</b>입니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 실습 미션: 학생 정보 관리하기</span>
                    <p>학생의 이름, 전공, 그리고 3개의 성적 리스트를 담은 딕셔너리를 만드세요.</p>
                    <ol>
                        <li><b>student</b>라는 빈 딕셔너리를 만드세요.</li>
                        <li>이름("name")과 전공("major")을 입력받아 저장하세요.</li>
                        <li>반복문을 사용하여 3개의 점수를 입력받아 <b>scores</b> 리스트에 넣고, 이를 딕셔너리에 추가하세요.</li>
                        <li>마지막으로 학생의 정보를 출력하고 점수들의 평균을 계산해 보세요.</li>
                    </ol>
                </div>`,
            en: `<p>A <b>Dictionary</b> is a data structure that stores data as 'Key-Value' pairs. It's like looking up a word (Key) in a real-life dictionary to find its definition (Value).</p>
                <ul>
                    <li><b>Structure:</b> Uses curly braces <code>{ }</code> and stores data as <code>"Key": Value</code>.</li>
                    <li><b>List vs Dictionary:</b> Lists manage data by order (index), while dictionaries manage data by labels (Key), making them easier to read when there is a lot of information.</li>
                    <li><b>Nested Structure:</b> You can store a list as a value in a dictionary to manage multiple related data points.</li>
                    <li><b>items():</b> Using <code>for key, value in data.items():</code> allows you to access both the key and value at once.</li>
                </ul>
                <div class="theory-callout"><strong>🔎 Try and check</strong><p><code>student["name"]</code> reads the value for key name. Reading a missing key directly raises KeyError. Task input: Mina, IT, 80, 90, 100 on separate lines gives average <b>90.0</b>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task: Student Information Management</span>
                    <p>Create a dictionary containing a student's name, major, and a list of 3 scores.</p>
                    <ol>
                        <li>Create an empty dictionary named <b>student</b>.</li>
                        <li>Get the student's "name" and "major" as input and store them.</li>
                        <li>Use a loop to get 3 scores, put them in a <b>scores</b> list, and add it to the dictionary.</li>
                        <li>Print the student information and calculate the average of the scores.</li>
                    </ol>
                </div>`,
            ru: `<p><b>Словарь (Dictionary)</b> — это структура данных, которая хранит информацию в виде пар «Ключ-Значение». Это похоже на поиск слова (Key) в обычном словаре для получения его значения (Value).</p>
                <ul>
                    <li><b>Структура:</b> Используются фигурные скобки <code>{ }</code>, данные записываются как <code>"Ключ": Значение</code>.</li>
                    <li><b>Список vs Словарь:</b> Списки управляют данными по порядку (индексу), а словари — по меткам (ключам), что упрощает чтение при большом объеме данных.</li>
                    <li><b>Вложенная структура:</b> Вы можете хранить список как значение в словаре для управления несколькими связанными данными.</li>
                    <li><b>items():</b> Использование <code>for key, value in data.items():</code> позволяет одновременно получить доступ и к ключу, и к значению.</li>
                </ul>
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p><code>student["name"]</code> читает значение ключа name. Обращение к отсутствующему ключу вызывает KeyError. Ввод для задания: Mina, IT, 80, 90, 100 с новой строки; среднее — <b>90.0</b>.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задание: Управление информацией о студенте</span>
                    <p>Создайте словарь, содержащий имя студента, специальность и список из 3 оценок.</p>
                    <ol>
                        <li>Создайте пустой словарь <b>student</b>.</li>
                        <li>Получите «name» и «major» студента через ввод и сохраните их.</li>
                        <li>Используйте цикл для ввода 3 оценок, поместите их в список <b>scores</b> и добавьте его в словарь.</li>
                        <li>Выведите информацию о студенте и рассчитайте средний балл.</li>
                    </ol>
                </div>`,
        },
        answer: {
            ko: "student = {}\nstudent[\"name\"] = input(\"이름: \")\nstudent[\"major\"] = input(\"전공: \")\n\nscores = []\nfor i in range(3):\n    s = int(input(\"점수 입력: \"))\n    scores.append(s)\nstudent[\"scores\"] = scores\n\nprint(\"학생 정보:\", student)\n\ntotal = 0\nfor s in student[\"scores\"]:\n    total = total + s\nprint(\"평균:\", total / len(student[\"scores\"]))",
            en: "student = {}\nstudent[\"name\"] = input(\"Name: \")\nstudent[\"major\"] = input(\"Major: \")\n\nscores = []\nfor i in range(3):\n    s = int(input(\"Enter score: \"))\n    scores.append(s)\nstudent[\"scores\"] = scores\n\nprint(\"Student Info:\", student)\n\ntotal = 0\nfor s in student[\"scores\"]:\n    total = total + s\nprint(\"Average:\", total / len(student[\"scores\"]))",
            ru: "student = {}\nstudent[\"name\"] = input(\"Имя: \")\nstudent[\"major\"] = input(\"Специальность: \")\n\nscores = []\nfor i in range(3):\n    s = int(input(\"Введите балл: \"))\n    scores.append(s)\nstudent[\"scores\"] = scores\n\nprint(\"Инфо о студенте:\", student)\n\ntotal = 0\nfor s in student[\"scores\"]:\n    total = total + s\nprint(\"Средний балл:\", total / len(student[\"scores\"]))",
        },
        initialCode: {
            ko: "student = {\"name\": \"Mina\", \"scores\": [80, 90]}\nprint(student[\"name\"])\nprint(len(student[\"scores\"]))",
            en: "student = {\"name\": \"Mina\", \"scores\": [80, 90]}\nprint(student[\"name\"])\nprint(len(student[\"scores\"]))",
            ru: "student = {\"name\": \"Mina\", \"scores\": [80, 90]}\nprint(student[\"name\"])\nprint(len(student[\"scores\"]))",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "Mina\n2",
            en: "Mina\n2",
            ru: "Mina\n2",
        },
    },
    {
        id: "lesson-25",
        menu: {
            ko: "25 · 라이브러리 활용",
            en: "25 · Using Libraries",
            ru: "25 · Использование библиотек",
        },
        title: {
            ko: "25. 파이썬의 도구 상자! 라이브러리(Library)",
            en: "25. Python's Toolbox! Libraries",
            ru: "25. Инструментарий Python! Библиотеки",
        },
        theory: {
            ko: `<p><b>라이브러리(Library)</b>는 전 세계 개발자들이 미리 만들어 놓은 '코드 꾸러미'입니다. 모든 기능을 처음부터 만들 필요 없이 필요한 도구를 가져다 쓰면 됩니다.</p>
                <ul>
                    <li><b>import:</b> 라이브러리를 불러올 때 사용하는 명령어입니다. (예: <code>import random</code>)</li>
                    <li><b>random 모듈:</b> 무작위 숫자를 생성하거나 리스트에서 무작위 요소를 뽑을 때 사용합니다.</li>
                    <li><b>randint(1, 3):</b> 1, 2, 3 중 하나의 숫자를 랜덤하게 뽑아줍니다.</li>
                </ul>
                
                
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p><code>random</code>은 Python에 기본 포함된 모듈입니다. 모든 외부 라이브러리가 이 브라우저에서 실행되는 것은 아닙니다. 시작 예제는 뽑은 수가 1~3 범위인지 검사하므로 True가 나옵니다. <code>print(number)</code>를 추가하면 실제 무작위 수를 볼 수 있습니다. 미션 입력값에 1, 2, 3을 한 줄씩 적으면 세 번 안에 정답을 만나 종료합니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 실습 미션: 1~3 숫자 맞추기</span>
                    <p>컴퓨터가 숨겨놓은 1에서 3 사이의 숫자를 맞힐 때까지 반복하세요.</p>
                    <ol>
                        <li><code>import random</code>을 코드 맨 윗줄에 적습니다.</li>
                        <li><b>answer</b> 변수에 1~3 사이의 랜덤 숫자를 저장합니다.</li>
                        <li><code>while True</code>를 사용해 정답을 맞힐 때까지 계속 입력받습니다.</li>
                        <li>정답을 맞히면 "정답입니다!"를 출력하고 <b>break</b>로 탈출하세요.</li>
                    </ol>
                </div>`,
            en: `<p>A <b>Library</b> is a collection of pre-written code. You don't have to build everything from scratch; just bring the tools you need.</p>
                <ul>
                    <li><b>import:</b> The command used to load a library. (e.g., <code>import random</code>)</li>
                    <li><b>random module:</b> Used to generate random numbers.</li>
                    <li><b>randint(1, 3):</b> Picks a random integer between 1 and 3.</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Try and check</strong><p><code>random</code> is included with Python. Not every external library runs in this browser. The starter checks that the random value is from 1 to 3, so it prints True. Add <code>print(number)</code> to see the random value. For the task, input 1, 2, and 3 on separate lines to reach the answer within three guesses.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Task: Guess 1-3</span>
                    <p>Try to guess the number between 1 and 3 that the computer has hidden!</p>
                    <ol>
                        <li>Write <code>import random</code> at the top.</li>
                        <li>Save a random number between 1 and 3 in the <b>answer</b> variable.</li>
                        <li>Use <code>while True</code> to keep taking input until the correct answer is guessed.</li>
                        <li>If correct, print "Correct!" and use <b>break</b> to exit.</li>
                    </ol>
                </div>`,
            ru: `<p><b>Библиотека (Library)</b> — это набор готового кода. Вам не нужно писать всё с нуля; просто используйте нужные инструменты.</p>
                <ul>
                    <li><b>import:</b> Команда для загрузки библиотеки. (например, <code>import random</code>)</li>
                    <li><b>модуль random:</b> Используется для генерации случайных чисел.</li>
                    <li><b>randint(1, 3):</b> Выбирает случайное целое число от 1 до 3.</li>
                </ul>
                
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p><code>random</code> входит в Python. Не все сторонние библиотеки работают в этом браузере. Пример проверяет, что случайное число от 1 до 3, поэтому выводится True. Добавьте <code>print(number)</code>, чтобы увидеть число. Для задания введите 1, 2 и 3 с новой строки: правильный ответ встретится не позднее третьей попытки.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Задание: Угадай 1-3</span>
                    <p>Попробуйте угадать число от 1 до 3, которое загадал компьютер!</p>
                    <ol>
                        <li>Напишите <code>import random</code> в первой строке.</li>
                        <li>Сохраните случайное число от 1 до 3 в переменной <b>answer</b>.</li>
                        <li>Используйте <code>while True</code>, чтобы запрашивать ввод, пока число не будет угадано.</li>
                        <li>Если верно, выведите "Верно!" и используйте <b>break</b>.</li>
                    </ol>
                </div>`,
        },
        answer: {
            ko: "import random\nanswer = random.randint(1, 3)\nwhile True:\n    guess = int(input(\"1~3 사이 숫자 입력: \"))\n    if guess == answer:\n        print(\"정답입니다!\")\n        break\n    else:\n        print(\"틀렸습니다. 다시 시도하세요.\")",
            en: "import random\nanswer = random.randint(1, 3)\nwhile True:\n    guess = int(input(\"Guess a number between 1-3: \"))\n    if guess == answer:\n        print(\"Correct!\")\n        break\n    else:\n        print(\"Wrong. Try again.\")",
            ru: "import random\nanswer = random.randint(1, 3)\nwhile True:\n    guess = int(input(\"Число от 1 до 3: \"))\n    if guess == answer:\n        print(\"Верно!\")\n        break\n    else:\n        print(\"Неверно. Попробуйте еще раз.\")",
        },
        initialCode: {
            ko: "import random\nnumber = random.randint(1, 3)\nprint(1 <= number <= 3)",
            en: "import random\nnumber = random.randint(1, 3)\nprint(1 <= number <= 3)",
            ru: "import random\nnumber = random.randint(1, 3)\nprint(1 <= number <= 3)",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "True",
            en: "True",
            ru: "True",
        },
    },
    {
        id: "lesson-26",
        menu: {
            ko: "26 · 최종 프로젝트",
            en: "26 · Final Project",
            ru: "26 · Финальный проект",
        },
        title: {
            ko: "26. 실전! 최고 성적 학생 찾기 프로그램",
            en: "26. Project! Finding the Top Student",
            ru: "26. Проект! Поиск лучшего студента",
        },
        theory: {
            ko: `<p>학기 동안 배운 리스트, 딕셔너리, 반복문을 모두 활용하는 <b>최종 프로젝트</b>입니다. 실제 데이터를 관리하는 기초적인 원리를 실습합니다.</p>
                
                <div class="theory-callout"><strong>🔎 직접 확인</strong><p>시작 예제는 미리 적은 두 학생을 비교합니다. 미션에서는 입력값에 <b>Mina → 90 → Alex → 80 → exit</b>을 한 줄씩 미리 적으세요. 마지막 exit가 입력을 끝냅니다. 첫 입력이 exit이면 "학생 데이터가 없습니다"를 출력하세요. 최고점이 같으면 현재 코드는 먼저 입력한 학생을 선택합니다.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 미션: 기말고사 성적 분석기</span>
                    <p>여러 명의 학생 정보를 입력받아, 누가 가장 높은 점수를 받았는지 출력하세요.</p>
                    <ol>
                        <li><b>students</b> 리스트에 학생 이름과 점수를 딕셔너리로 저장합니다. (종료는 'exit' 입력)</li>
                        <li>입력이 끝나면 리스트를 순회하며 <b>최고 점수</b>를 가진 학생을 찾습니다.</li>
                        <li>찾은 학생의 이름과 점수를 출력하세요.</li>
                    </ol>
                </div>`,
            en: `<p>This is the <b>Final Project</b> using lists, dictionaries, and loops learned throughout the semester. You will practice the basic principles of managing real data.</p>
                <div class="theory-callout"><strong>🔎 Try and check</strong><p>The starter compares two fixed students. For the task, enter <b>Mina → 90 → Alex → 80 → exit</b>, one value per line before running. The final exit stops input. If the first input is exit, print "No student data". With tied top scores, this code keeps the first student entered.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Mission: Grade Analyzer</span>
                    <p>Input multiple students' information and output who received the highest score.</p>
                    <ol>
                        <li>Store names and scores in the <b>students</b> list as dictionaries. (Type 'exit' to stop)</li>
                        <li>After inputting, iterate through the list to find the student with the <b>highest score</b>.</li>
                        <li>Print the student's name and score.</li>
                    </ol>
                </div>`,
            ru: `<p>Это <b>финальный проект</b>, использующий списки, словари и циклы. Вы попрактикуетесь в управлении реальными данными.</p>
                <div class="theory-callout"><strong>🔎 Проверьте</strong><p>Пример сравнивает двух заранее заданных студентов. Для задания запишите <b>Mina → 90 → Alex → 80 → exit</b>, каждое значение с новой строки до запуска. Последний exit завершает ввод. Если первым введён exit, выведите «Нет данных о студентах». При равных лучших баллах этот код выбирает первого введённого студента.</p></div><div class="problem-area">
                    <span class="problem-title">🎯 Миссия: Анализатор оценок</span>
                    <p>Введите информацию о нескольких студентах и выведите, кто получил самый высокий балл.</p>
                    <ol>
                        <li>Сохраните имена и баллы в списке <b>students</b> в виде словарей. (Введите 'exit' для завершения)</li>
                        <li>После ввода переберите список, чтобы найти студента с <b>самым высоким баллом</b>.</li>
                        <li>Выведите имя и балл этого студента.</li>
                    </ol>
                </div>`,
        },
        answer: {
            ko: "students = []\nwhile True:\n    name = input(\"이름 (exit:종료): \")\n    if name == \"exit\": break\n    score = int(input(\"점수: \"))\n    students.append({\"name\": name, \"score\": score})\n\nif students:\n    best = students[0]\n    for s in students:\n        if s[\"score\"] > best[\"score\"]: best = s\n    print(\"최고 점수 학생:\", best[\"name\"], \"(\", best[\"score\"], \"점)\")\nelse:\n    print(\"학생 데이터가 없습니다.\")",
            en: "students = []\nwhile True:\n    name = input(\"Name (exit to stop): \")\n    if name == \"exit\": break\n    score = int(input(\"Score: \"))\n    students.append({\"name\": name, \"score\": score})\n\nif students:\n    best = students[0]\n    for s in students:\n        if s[\"score\"] > best[\"score\"]: best = s\n    print(\"Top Student:\", best[\"name\"], \"Score:\", best[\"score\"])\nelse:\n    print(\"No student data.\")",
            ru: "students = []\nwhile True:\n    name = input(\"Имя (exit для выхода): \")\n    if name == \"exit\": break\n    score = int(input(\"Балл: \"))\n    students.append({\"name\": name, \"score\": score})\n\nif students:\n    best = students[0]\n    for s in students:\n        if s[\"score\"] > best[\"score\"]: best = s\n    print(\"Лучший студент:\", best[\"name\"], \"Балл:\", best[\"score\"])\nelse:\n    print(\"Нет данных о студентах.\")",
        },
        initialCode: {
            ko: "students = [{\"name\": \"Mina\", \"score\": 90}, {\"name\": \"Alex\", \"score\": 80}]\nbest = students[0]\nfor student in students:\n    if student[\"score\"] > best[\"score\"]:\n        best = student\nprint(best[\"name\"], best[\"score\"])",
            en: "students = [{\"name\": \"Mina\", \"score\": 90}, {\"name\": \"Alex\", \"score\": 80}]\nbest = students[0]\nfor student in students:\n    if student[\"score\"] > best[\"score\"]:\n        best = student\nprint(best[\"name\"], best[\"score\"])",
            ru: "students = [{\"name\": \"Mina\", \"score\": 90}, {\"name\": \"Alex\", \"score\": 80}]\nbest = students[0]\nfor student in students:\n    if student[\"score\"] > best[\"score\"]:\n        best = student\nprint(best[\"name\"], best[\"score\"])",
        },
        sampleInput: {
            ko: "",
            en: "",
            ru: "",
        },
        expectedOutput: {
            ko: "Mina 90",
            en: "Mina 90",
            ru: "Mina 90",
        },
    },
];
window.pythonLessons = lessons;
