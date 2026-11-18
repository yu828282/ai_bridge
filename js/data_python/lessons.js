/* Reviewed course content: Korean, English and Russian. */
window.pythonLessons = [
  {
    "id": "lesson-1",
    "needsInput": false,
    "menu": {
      "ko": "1주 · 첫 출력",
      "en": "W1 · First output",
      "ru": "W1 · Первый вывод"
    },
    "title": {
      "ko": "1주차 · 처음 실행하고 글자 출력하기",
      "en": "Week 1 · Run your first line",
      "ru": "Неделя 1 · Первый запуск и вывод текста"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 프로그램은 컴퓨터에 주는 할 일 목록</h3><p>프로그램은 컴퓨터가 할 일을 적어 둔 것입니다. 코드를 쓰는 일을 프로그래밍이라고 합니다. 파이썬은 사람이 읽기 쉬운 프로그래밍 언어입니다. 오늘은 컴퓨터에게 글자를 보여 달라고 말합니다. 인공지능을 만들기 전에도 이런 작은 명령부터 익힙니다.</p></section><section class=\"lesson-section\"><h3>2. 예시를 보고 직접 실행하기</h3><ol><li>이 페이지의 <b>코드 입력 재생</b>으로 코드와 결과의 순서를 보세요. 정해진 예시를 보여 주는 시연입니다.</li><li>미션의 <b>시작 코드 복사</b>를 누르세요. <a href=\"#practice-title\">선택한 도구의 실행 안내</a>에 따라 코드를 붙여 넣고 실행합니다.</li><li><code>Hello!</code>가 나오면 첫 줄은 그대로 두세요. 미션처럼 <code>I am Mina.</code>를 출력하는 두 번째 줄을 추가한 뒤, <code>Mina</code>만 내 이름으로 바꾸어 다시 실행하세요.</li></ol><p>이 시작 코드는 한 줄만 출력합니다. 아래 설명 예시는 두 줄, 미션은 직접 두 줄을 완성하는 연습입니다. 이 예제에는 사용자 입력이 필요 없습니다.</p></section><section class=\"lesson-section\"><h3>3. print, 괄호, 따옴표</h3><pre><code>print(&quot;Hello!&quot;)\nprint(&quot;Nice to meet you&quot;)</code></pre><p><b>예상 결과</b></p><pre><code>Hello!\nNice to meet you</code></pre><ul><li><code>print</code>는 소문자입니다. 괄호 안의 값을 화면에 보여 줍니다.</li><li><code>( )</code>는 여는 소괄호와 닫는 소괄호입니다. 둘 다 필요합니다.</li><li><code>\"Hello!\"</code>처럼 따옴표로 감싼 글자는 문자열입니다. 문자열의 시작과 끝을 표시하는 따옴표는 출력되지 않습니다.</li><li>코드용 따옴표 <code>\"</code> 또는 <code>'</code>를 씁니다. 문서의 굽은 따옴표를 복사하지 마세요.</li></ul></section><section class=\"lesson-section\"><h3>4. 노트북과 키보드가 익숙하지 않다면</h3><p>Colab, IDLE 또는 VS Code의 코드 칸을 누르면 글자를 넣을 위치에 커서가 보입니다. 영어 입력 상태를 선택하세요. 영문 US 배열에서는 <code>(</code>는 Shift+9, <code>)</code>는 Shift+0입니다. 배열이 다르면 키에 표시된 기호를 확인하세요. Backspace는 커서 앞의 글자를 지웁니다. 코드 편집 중 Enter는 다음 줄을 만들고, Tab은 보통 들여쓰기에 쓰입니다. 프로그램 실행은 선택한 도구의 실행 버튼이나 메뉴로 합니다.</p><p>오류가 나면 <code>print</code> 철자, 소문자, 괄호와 따옴표의 짝을 차례로 확인하세요. 고친 뒤 다시 실행하면 됩니다.</p></section><section class=\"lesson-section\"><h3>5. 파일 저장하기</h3><p>Python 코드 파일은 보통 <code>.py</code>, Colab 노트북은 <code>.ipynb</code>로 저장합니다. 과제는 선택한 도구에서 저장하고 다시 열 수 있는지 확인하세요. 제출 방법과 기한은 Teams의 최신 공지를 확인하세요.</p></section><details class=\"lesson-extra\"><summary>더 알아보기 · 프로그래밍 언어</summary><p>기계어는 컴퓨터가 처리하는 이진 명령입니다. 어셈블리는 기계 명령을 기호로 나타내고, 파이썬 같은 고급 언어는 사람이 읽고 쓰기 쉬운 규칙을 제공합니다. 파이썬 실행기가 코드를 실행합니다. 라이브러리는 다른 사람이 만들어 둔 기능을 가져와 쓰는 도구 모음이며 뒤의 확장 학습에서 다룹니다.</p></details><details class=\"lesson-extra\"><summary>도움이 필요할 때 · 화면 보내기</summary><p>화면을 보내며 질문할 때: Windows 검색에서 캡처 도구를 열고 새 캡처를 시작하세요. 코드와 오류가 함께 보이는 부분을 선택해 복사한 뒤, 수업 메시지 창에 Ctrl+V로 붙여 넣습니다. 어떤 값을 입력했는지도 함께 적으면 도움받기 쉽습니다. PrtSc 키의 동작은 설정에 따라 다를 수 있습니다.</p></details><section class=\"problem-area\"><h3>미션 · 두 줄로 인사하기</h3><ol><li>print()를 두 번 써서 Hello!와 I am Mina.를 서로 다른 줄에 출력하세요.</li><li>실행한 뒤 Mina만 내 이름으로 바꿔 한 번 더 실행하세요.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. A program is a list of instructions</h3><p>A program tells a computer what to do. Writing code is called programming. Python is a programming language that people can read. Today we ask the computer to show some text. These small instructions also help us prepare for later AI work.</p></section><section class=\"lesson-section\"><h3>2. Watch an example, then run your code</h3><ol><li>Use <b>Play code typing</b> on this page to watch the code and result in order. It plays a prepared demonstration.</li><li>Select <b>Copy starter code</b> in the mission. Follow the <a href=\"#practice-title\">run guide for your chosen tool</a> to paste and run the code.</li><li>After <code>Hello!</code> appears, keep that first line. Add a second line for <code>I am Mina.</code> as shown in the mission. Then change only <code>Mina</code> to your name and run again.</li></ol><p>The starter prints one line. The explanation below uses two lines, and your mission is to complete two lines yourself. This example does not ask for input.</p></section><section class=\"lesson-section\"><h3>3. print, parentheses and quotes</h3><pre><code>print(&quot;Hello!&quot;)\nprint(&quot;Nice to meet you&quot;)</code></pre><p><b>Expected output</b></p><pre><code>Hello!\nNice to meet you</code></pre><ul><li>Write <code>print</code> in lowercase. It shows the value inside the parentheses.</li><li>Both parentheses <code>( )</code> are needed.</li><li>Text in quotes, such as <code>\"Hello!\"</code>, is a string. The opening and closing quotes mark the string; they are not printed.</li><li>Use straight code quotes <code>\"</code> or <code>'</code>. Avoid curved quotation marks copied from a document.</li></ul></section><section class=\"lesson-section\"><h3>4. If the laptop or keyboard is new to you</h3><p>Click inside the code editor in Colab, IDLE, or VS Code. The cursor marks where the next character will go. Select an English keyboard layout. On a US English layout, Shift+9 types <code>(</code> and Shift+0 types <code>)</code>. On other layouts, check the symbols on your keys. Backspace removes the character before the cursor. While editing code, Enter creates a new line and Tab usually indents it. Run the program with the run button or menu in your chosen tool.</p><p>If you see an error, check the spelling of print, lowercase letters, paired parentheses and paired quotes. Fix the code and run again.</p></section><section class=\"lesson-section\"><h3>5. Save your work</h3><p>Python code files usually use <code>.py</code>; Colab notebooks use <code>.ipynb</code>. Save your assignment in your chosen tool and check that you can reopen it. Check the latest Teams notice for submission instructions and deadlines.</p></section><details class=\"lesson-extra\"><summary>Learn more · Programming languages</summary><p>Machine code contains binary instructions for a computer. Assembly represents machine instructions with symbols. High-level languages such as Python provide rules that are easier for people to read and write. A Python interpreter runs the code. A library is a collection of reusable tools; we use one in the later optional lessons.</p></details><details class=\"lesson-extra\"><summary>Need help? · Share a screenshot</summary><p>To ask for help with a screenshot on Windows, search for Snipping Tool and start a new capture. Select the code and the error, copy the capture, then paste it into the class message box with Ctrl+V. Also say what input you used. The PrtSc key can behave differently depending on settings.</p></details><section class=\"problem-area\"><h3>Mission · A two-line greeting</h3><ol><li>Use print() twice to show Hello! and I am Mina. on separate lines.</li><li>Run it, then replace only Mina with your name and run again.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Программа — список команд</h3><p>Программа говорит компьютеру, что делать. Написание кода называется программированием. Python — язык программирования, удобный для чтения человеком. Сегодня попросим компьютер показать текст. Такие простые команды нужны и перед изучением ИИ.</p></section><section class=\"lesson-section\"><h3>2. Посмотрите пример и запустите свой код</h3><ol><li>Кнопка <b>Показать набор кода</b> показывает код и результат по порядку. Это заранее подготовленная демонстрация.</li><li>Нажмите <b>Копировать начальный код</b> в задании. Вставьте и запустите код по <a href=\"#practice-title\">инструкции выбранной программы</a>.</li><li>Когда появится <code>Hello!</code>, оставьте первую строку без изменений. Добавьте вторую строку для <code>I am Mina.</code>, как указано в задании. Затем замените только <code>Mina</code> своим именем и запустите снова.</li></ol><p>Начальный код выводит одну строку. Пример ниже выводит две строки, а в задании вы самостоятельно допишете вторую. Здесь ввод пользователя не нужен.</p></section><section class=\"lesson-section\"><h3>3. print, скобки и кавычки</h3><pre><code>print(&quot;Hello!&quot;)\nprint(&quot;Nice to meet you&quot;)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>Hello!\nNice to meet you</code></pre><ul><li>Пишите <code>print</code> маленькими буквами. Эта функция показывает значение в скобках.</li><li>Нужны обе круглые скобки <code>( )</code>.</li><li>Текст в кавычках, например <code>\"Hello!\"</code>, называется строкой. Кавычки, обозначающие начало и конец строки, не выводятся.</li><li>Используйте прямые кавычки <code>\"</code> или <code>'</code>, а не типографские кавычки из документа.</li></ul></section><section class=\"lesson-section\"><h3>4. Если вы пока редко пользуетесь ноутбуком</h3><p>Нажмите внутри редактора кода в Colab, IDLE или VS Code. Курсор показывает место следующего символа. Выберите английскую раскладку. В US English Shift+9 вводит <code>(</code>, Shift+0 — <code>)</code>. В другой раскладке проверьте символы на клавишах. Backspace удаляет символ перед курсором. При редактировании кода Enter создаёт новую строку, а Tab обычно добавляет отступ. Для выполнения программы используйте кнопку или меню запуска выбранного инструмента.</p><p>При ошибке проверьте написание print, маленькие буквы, пары скобок и кавычек. Исправьте код и запустите снова.</p></section><section class=\"lesson-section\"><h3>5. Сохраните свою работу</h3><p>Файлы кода Python обычно имеют расширение <code>.py</code>, а блокноты Colab — <code>.ipynb</code>. Сохраните задание в выбранном инструменте и проверьте, что можете открыть его снова. Способ и срок сдачи проверяйте в последнем объявлении Teams.</p></section><details class=\"lesson-extra\"><summary>Подробнее · Языки программирования</summary><p>Машинный код содержит двоичные команды компьютера. Язык ассемблера обозначает машинные команды символами. Языки высокого уровня, например Python, дают правила, которые человеку легче читать и писать. Интерпретатор Python выполняет код. Библиотека — набор готовых инструментов; одну из них используем в дополнительных уроках.</p></details><details class=\"lesson-extra\"><summary>Нужна помощь? · Отправьте снимок экрана</summary><p>Чтобы приложить снимок экрана в Windows, найдите инструмент «Ножницы» и начните новый снимок. Выделите код вместе с ошибкой, скопируйте снимок и вставьте его в окно сообщения класса через Ctrl+V. Напишите также, какие данные вводили. Действие клавиши PrtSc зависит от настроек.</p></details><section class=\"problem-area\"><h3>Задание · Приветствие в двух строках</h3><ol><li>Два раза используйте print(), чтобы вывести Hello! и I am Mina. на разных строках.</li><li>Запустите, затем замените только Mina своим именем и запустите снова.</li></ol></section>"
    },
    "answer": {
      "ko": "print(\"Hello!\")\nprint(\"I am Mina.\")",
      "en": "print(\"Hello!\")\nprint(\"I am Mina.\")",
      "ru": "print(\"Hello!\")\nprint(\"I am Mina.\")"
    },
    "initialCode": {
      "ko": "print(\"Hello!\")",
      "en": "print(\"Hello!\")",
      "ru": "print(\"Hello!\")"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "Hello!",
      "en": "Hello!",
      "ru": "Hello!"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "기본 인사",
          "en": "Basic greeting",
          "ru": "Простое приветствие"
        },
        "input": {
          "ko": "",
          "en": "",
          "ru": ""
        },
        "output": {
          "ko": "Hello!\nI am Mina.",
          "en": "Hello!\nI am Mina.",
          "ru": "Hello!\nI am Mina."
        }
      }
    ],
    "sourceWeek": 1,
    "sourceFile": "1.pdf",
    "sourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nprint(\"Hello!\")\n# TODO: 다음 줄에 I am Mina.를 출력하는 print()를 하나 더 쓰세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nprint(\"Hello!\")\n# TODO: Add another print() below to display I am Mina.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nprint(\"Hello!\")\n# TODO: Ниже добавьте ещё один print(), чтобы вывести I am Mina.\n"
    },
    "starterHint": {
      "ko": "아직 Hello! 한 줄만 나옵니다. print() 한 줄을 추가한 뒤 이름을 바꾸세요.",
      "en": "This currently prints only Hello!. Add one print() line, then change the name.",
      "ru": "Пока выводится только Hello!. Добавьте строку print(), затем замените имя."
    }
  },
  {
    "id": "lesson-2",
    "needsInput": true,
    "menu": {
      "ko": "2주 · 변수",
      "en": "W2 · Variables",
      "ru": "W2 · Переменные"
    },
    "title": {
      "ko": "값에 이름 붙이기: 변수",
      "en": "Give a value a name: variables",
      "ru": "Имя для значения: переменные"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>먼저: 보여 주기, 입력받기, 기억하기</h3><p><code>print()</code>는 값을 보여 주고, <code>input()</code>은 답 한 줄을 읽으며, <b>변수</b>는 값을 다시 쓸 수 있도록 붙인 이름입니다.</p></section><section class=\"lesson-section\"><h3>1. 변수는 값에 붙이는 이름</h3><p>친구의 전화번호를 연락처 이름으로 찾듯, 값에도 이름을 붙여 다시 사용할 수 있습니다. 그 이름이 <b>변수</b>입니다. <code>name = \"Mina\"</code>는 Mina라는 문자열을 name이라는 이름으로 저장합니다.</p></section><section class=\"lesson-section\"><h3>2. =는 저장, 따옴표는 글자</h3><pre><code>name = &quot;Mina&quot;\nprint(name)\nprint(&quot;name&quot;)\nname = &quot;Alex&quot;\nprint(name)</code></pre><pre class=\"example-output\">Mina\nname\nAlex</pre><ol><li><code>=</code> 오른쪽의 값을 왼쪽 이름에 저장합니다. 수학의 “같다”와는 다른 동작입니다.</li><li><code>print(name)</code>은 변수에 저장된 Mina를 출력합니다.</li><li><code>print(\"name\")</code>은 따옴표 안의 글자 name을 그대로 출력합니다.</li><li>같은 변수에 Alex를 다시 저장하면 그다음에는 Alex를 읽습니다. 위에서 이미 출력한 Mina는 바뀌지 않습니다.</li></ol></section><section class=\"lesson-section\"><h3>3. 입력값을 저장하기</h3><pre><code>print(&quot;Your name?&quot;)\nname = input()\nprint(name)</code></pre><pre class=\"example-output\">Your name?\nMina\nMina</pre><p>코드를 실행한 뒤 <code>Your name?</code>이 나오면 <code>Mina</code>를 적고 Enter를 누르세요. 위 흐름에서 첫 번째 Mina는 <b>내가 입력한 답</b>, 두 번째 Mina는 <code>print(name)</code>이 <b>출력한 값</b>입니다. 이름을 두 번 입력하거나 print를 두 번 쓴 것이 아닙니다.</p></section><section class=\"lesson-section\"><h3>4. 변수 이름과 자주 하는 실수</h3><ul><li>이 수업에서는 <code>name</code>, <code>user_name</code>처럼 의미 있는 영어 이름을 씁니다. 공백 대신 밑줄 <code>_</code>을 쓰고 숫자로 시작하지 마세요.</li><li><code>name</code>과 <code>Name</code>은 다른 이름입니다. 저장하기 전에 읽거나 철자가 다르면 <code>NameError</code>가 날 수 있습니다.</li><li><code>if</code> 같은 예약어는 이름으로 쓸 수 없습니다. <code>print</code>, <code>input</code>은 문법상 가능하지만 기존 기능을 가리므로 변수 이름으로 피합니다.</li><li>필요한 값을 저장하는 줄부터 예시 전체를 함께 실행하세요. Colab에는 이전 셀의 값이 남아 있을 수 있으므로, 저장하는 줄을 빼고 실행하면 다른 결과가 나올 수 있습니다.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">실습 미션: 이름을 기억하는 인사</h3><p>미션 시작 코드에는 질문 출력과 <code>name = input()</code>이 준비되어 있습니다. 사용자가 쓴 이름을 저장한 뒤 인사말과 이름을 각각 보여 주는 출력 두 줄을 추가하세요.</p><ol><li><code>What is your name?</code>을 출력하고 이름 한 줄을 <code>name</code>에 저장하세요.</li><li><code>print()</code>를 두 번 사용해 <code>Nice to meet you!</code>와 저장된 이름을 각각 다른 줄에 출력하세요. 문자열 연결은 아직 사용하지 않습니다.</li><li>처음에는 Mina를 입력하세요. 코드를 다시 실행하고 이번에는 Alex를 입력해 이름 출력도 바뀌는지 확인하세요.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>First: show, read, remember</h3><p><code>print()</code> shows a value, <code>input()</code> reads one answer, and a <b>variable</b> gives a value a name so you can use it again.</p></section><section class=\"lesson-section\"><h3>1. A variable is a name for a value</h3><p>You can find a phone number by a contact name. In a similar way, you can give a value a name and use it later. This name is a <b>variable</b>. <code>name = \"Mina\"</code> saves the string Mina under the name name.</p></section><section class=\"lesson-section\"><h3>2. = saves; quotes mean text</h3><pre><code>name = &quot;Mina&quot;\nprint(name)\nprint(&quot;name&quot;)\nname = &quot;Alex&quot;\nprint(name)</code></pre><pre class=\"example-output\">Mina\nname\nAlex</pre><ol><li><code>=</code> assigns the value on the right to the name on the left. This is different from “is equal to” in mathematics.</li><li><code>print(name)</code> displays the saved value Mina.</li><li><code>print(\"name\")</code> displays the literal text name.</li><li>After assigning Alex to the same name, the next read gives Alex. The earlier output Mina does not change.</li></ol></section><section class=\"lesson-section\"><h3>3. Save an input value</h3><pre><code>print(&quot;Your name?&quot;)\nname = input()\nprint(name)</code></pre><pre class=\"example-output\">Your name?\nMina\nMina</pre><p>Run the code. After <code>Your name?</code>, type <code>Mina</code> and press Enter. In the flow above, the first Mina is <b>the answer you typed</b>; the second is <b>the value printed</b> by <code>print(name)</code>. You did not enter the name twice, and print did not print it twice.</p></section><section class=\"lesson-section\"><h3>4. Names and common mistakes</h3><ul><li>Use meaningful English names such as <code>name</code> and <code>user_name</code>. Use an underscore <code>_</code> instead of a space. Do not start with a digit.</li><li><code>name</code> and <code>Name</code> are different. Reading before assigning, or using a different spelling, can cause <code>NameError</code>.</li><li>Keywords such as <code>if</code> cannot be variable names. <code>print</code> and <code>input</code> are allowed names, but avoid them: they hide the built-in tools.</li><li>Run the complete example, including the lines that assign its values. Colab can keep values from earlier cells. Skipping an assignment line can therefore give a different result.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Practice mission: remember a name</h3><p>The mission starter already prints the question and reads <code>name = input()</code>. Add two output lines to show the greeting and the stored name separately.</p><ol><li>Print <code>What is your name?</code> and save one input line in <code>name</code>.</li><li>Use two <code>print()</code> calls to display <code>Nice to meet you!</code> and the saved name on separate lines. Do not join strings yet.</li><li>Enter Mina on the first run. Run the code again, enter Alex this time, and check that the printed name changes.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>Сначала: показать, прочитать, сохранить</h3><p><code>print()</code> показывает значение, <code>input()</code> читает один ответ, а <b>переменная</b> даёт значению имя, чтобы использовать его снова.</p></section><section class=\"lesson-section\"><h3>1. Переменная — имя для значения</h3><p>Номер телефона удобно искать по имени в контактах. Значению тоже можно дать имя и использовать его позже. Это имя называется <b>переменной</b>. <code>name = \"Mina\"</code> сохраняет строку Mina под именем name.</p></section><section class=\"lesson-section\"><h3>2. = сохраняет, кавычки обозначают текст</h3><pre><code>name = &quot;Mina&quot;\nprint(name)\nprint(&quot;name&quot;)\nname = &quot;Alex&quot;\nprint(name)</code></pre><pre class=\"example-output\">Mina\nname\nAlex</pre><ol><li><code>=</code> присваивает значение справа имени слева. Это не математическая проверка равенства.</li><li><code>print(name)</code> выводит сохранённое значение Mina.</li><li><code>print(\"name\")</code> выводит сам текст name.</li><li>После присваивания Alex следующий вывод покажет Alex. Уже выведенное раньше Mina не меняется.</li></ol></section><section class=\"lesson-section\"><h3>3. Сохранение ввода</h3><pre><code>print(&quot;Your name?&quot;)\nname = input()\nprint(name)</code></pre><pre class=\"example-output\">Your name?\nMina\nMina</pre><p>Запустите код. После <code>Your name?</code> введите <code>Mina</code> и нажмите Enter. В примере первое Mina — <b>введённый вами ответ</b>, второе — <b>значение, выведенное</b> командой <code>print(name)</code>. Вы не вводили имя дважды, и print не выводил его дважды.</p></section><section class=\"lesson-section\"><h3>4. Имена и частые ошибки</h3><ul><li>Используйте понятные английские имена: <code>name</code>, <code>user_name</code>. Вместо пробела ставьте <code>_</code>. Не начинайте имя с цифры.</li><li><code>name</code> и <code>Name</code> — разные имена. Чтение до присваивания или ошибка в написании могут вызвать <code>NameError</code>.</li><li>Ключевое слово <code>if</code> нельзя использовать как имя. <code>print</code> и <code>input</code> допустимы, но скрывают встроенные функции, поэтому избегайте таких имён.</li><li>Запускайте весь пример, включая строки присваивания. В Colab могут сохраняться значения из предыдущих ячеек. Если пропустить присваивание, результат может оказаться другим.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Практика: запомнить имя</h3><p>В начале задания уже есть вопрос и <code>name = input()</code>. Добавьте две строки вывода: отдельно приветствие и сохранённое имя.</p><ol><li>Выведите <code>What is your name?</code> и сохраните строку ввода в <code>name</code>.</li><li>Двумя вызовами <code>print()</code> выведите <code>Nice to meet you!</code> и сохранённое имя на отдельных строках. Пока не объединяйте строки.</li><li>При первом запуске введите Mina. Запустите код снова, введите Alex и проверьте, что выведенное имя изменилось.</li></ol></section>"
    },
    "answer": {
      "ko": "print(\"What is your name?\")\nname = input()\nprint(\"Nice to meet you!\")\nprint(name)",
      "en": "print(\"What is your name?\")\nname = input()\nprint(\"Nice to meet you!\")\nprint(name)",
      "ru": "print(\"What is your name?\")\nname = input()\nprint(\"Nice to meet you!\")\nprint(name)"
    },
    "initialCode": {
      "ko": "name = \"Mina\"\nprint(name)",
      "en": "name = \"Mina\"\nprint(name)",
      "ru": "name = \"Mina\"\nprint(name)"
    },
    "sampleInput": {
      "ko": "Mina",
      "en": "Mina",
      "ru": "Mina"
    },
    "expectedOutput": {
      "ko": "Mina",
      "en": "Mina",
      "ru": "Mina"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "Mina로 인사",
          "en": "Greet Mina",
          "ru": "Приветствие Mina"
        },
        "input": {
          "ko": "Mina",
          "en": "Mina",
          "ru": "Mina"
        },
        "output": {
          "ko": "What is your name?\nMina\nNice to meet you!\nMina",
          "en": "What is your name?\nMina\nNice to meet you!\nMina",
          "ru": "What is your name?\nMina\nNice to meet you!\nMina"
        }
      },
      {
        "name": {
          "ko": "다른 이름",
          "en": "Another name",
          "ru": "Другое имя"
        },
        "input": {
          "ko": "Alex",
          "en": "Alex",
          "ru": "Alex"
        },
        "output": {
          "ko": "What is your name?\nAlex\nNice to meet you!\nAlex",
          "en": "What is your name?\nAlex\nNice to meet you!\nAlex",
          "ru": "What is your name?\nAlex\nNice to meet you!\nAlex"
        }
      }
    ],
    "sourceWeek": 2,
    "sourceFile": "2.pdf",
    "sourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nprint(\"What is your name?\")\nname = input()\n# TODO: Nice to meet you!와 name을 서로 다른 줄에 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nprint(\"What is your name?\")\nname = input()\n# TODO: Print Nice to meet you! and name on separate lines.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nprint(\"What is your name?\")\nname = input()\n# TODO: Выведите Nice to meet you! и name на разных строках.\n"
    },
    "starterHint": {
      "ko": "현재는 이름을 받기만 합니다. 출력 두 줄을 직접 추가하세요. 실행 후 이름을 입력하고 Enter를 누릅니다.",
      "en": "This only reads a name so far. Add two output lines. After running, type your name and press Enter.",
      "ru": "Пока программа только принимает имя. Добавьте две строки вывода. После запуска введите имя и нажмите Enter."
    }
  },
  {
    "id": "lesson-3",
    "menu": {
      "ko": "3주 · 문자열 +",
      "en": "W3 · String +",
      "ru": "W3 · Строки +"
    },
    "title": {
      "ko": "문자열 연결하기: +",
      "en": "Join strings with +",
      "ru": "Соединение строк с помощью +"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 글자 조각을 이어 붙이기</h3><p>이름표의 앞 문구와 이름, 뒤 문구를 한 장으로 붙인다고 생각하세요. 문자열 사이의 <code>+</code>는 두 글자 조각을 이어 새 문자열을 만듭니다. 여기서는 숫자 덧셈이 아닙니다.</p></section><section class=\"lesson-section\"><h3>2. 공백도 문자열의 일부</h3><pre><code>name = &quot;Mina&quot;\nmessage = &quot;Hello, &quot; + name + &quot;!&quot;\nprint(message)</code></pre><pre class=\"example-output\">Hello, Mina!</pre><ol><li><code>\"Hello, \"</code>의 마지막 공백을 확인하세요. <code>+</code>는 공백을 자동으로 넣지 않습니다.</li><li>변수 <code>name</code>의 Mina가 가운데 들어갑니다. 변수 이름에는 따옴표를 붙이지 않습니다.</li><li>마지막 <code>\"!\"</code>까지 연결해 message에 저장한 다음 출력합니다.</li></ol><p><code>\"Hello\" + \"Mina\"</code>는 <code>HelloMina</code>입니다. <code>\"Hello \" + \"Mina\"</code>는 <code>Hello Mina</code>입니다.</p></section><section class=\"lesson-section\"><h3>3. 입력한 문자열도 연결할 수 있어요</h3><pre><code>print(&quot;City?&quot;)\ncity = input()\nprint(&quot;I live in &quot; + city + &quot;.&quot;)</code></pre><pre class=\"example-output\">City?\nSeoul\nI live in Seoul.</pre><p>선택한 실습 도구에서 코드를 실행하세요. <code>City?</code>가 나오면 <code>Seoul</code>을 입력하고 Enter를 누릅니다. input이 읽은 값은 문자열이므로 다른 문자열과 연결할 수 있습니다. 위 흐름의 Seoul 한 줄은 사용자가 입력한 답입니다.</p></section><section class=\"lesson-section\"><h3>4. 자주 하는 실수</h3><ul><li>단어가 붙으면 연결할 문구 안에 공백이 있는지 확인하세요.</li><li><code>\"Age: \" + 20</code>처럼 문자열과 숫자를 바로 더하면 <code>TypeError</code>가 납니다. 숫자는 콤마 출력이나 자료형 변환 레슨의 <code>str()</code>로 문장과 함께 출력할 수 있습니다.</li><li>따옴표 밖의 +는 연결 연산입니다. <code>\"A+B\"</code> 안의 +는 글자 그대로입니다.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">실습 미션: 좋아하는 음식 소개</h3><p>미션 시작 코드에는 질문과 <code>food = input()</code>이 준비되어 있습니다. <code>+</code>로 문장을 연결하는 출력을 추가하세요. 완성한 코드를 실행한 뒤 질문에 pizza라고 답하고 Enter를 누릅니다.</p><ol><li><code>Favorite food?</code>를 출력하고 입력받은 음식을 <code>food</code>에 저장하세요.</li><li><code>+</code>를 사용해 <code>I like </code>, food, 마침표 <code>.</code>를 연결하세요.</li><li>pizza를 입력했을 때 <code>I like pizza.</code>가 한 줄로 출력되게 하세요.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Join pieces of text</h3><p>Think of joining a greeting, a name, and an ending into one label. Between strings, <code>+</code> joins the pieces to make a new string. Here it is not adding numbers.</p></section><section class=\"lesson-section\"><h3>2. A space is part of the string</h3><pre><code>name = &quot;Mina&quot;\nmessage = &quot;Hello, &quot; + name + &quot;!&quot;\nprint(message)</code></pre><pre class=\"example-output\">Hello, Mina!</pre><ol><li>Notice the final space in <code>\"Hello, \"</code>. <code>+</code> does not add spaces for you.</li><li>The value Mina from <code>name</code> goes in the middle. Do not quote the variable name.</li><li>The final <code>\"!\"</code> is joined too. The complete string is saved in message and printed.</li></ol><p><code>\"Hello\" + \"Mina\"</code> gives <code>HelloMina</code>. <code>\"Hello \" + \"Mina\"</code> gives <code>Hello Mina</code>.</p></section><section class=\"lesson-section\"><h3>3. Join text from input</h3><pre><code>print(&quot;City?&quot;)\ncity = input()\nprint(&quot;I live in &quot; + city + &quot;.&quot;)</code></pre><pre class=\"example-output\">City?\nSeoul\nI live in Seoul.</pre><p>Run the code in your chosen practice tool. When <code>City?</code> appears, type <code>Seoul</code> and press Enter. input returns a string, which can join other strings. The line containing only Seoul in the flow above is the answer typed by the user.</p></section><section class=\"lesson-section\"><h3>4. Common mistakes</h3><ul><li>If words stick together, check for a space inside one of your text pieces.</li><li><code>\"Age: \" + 20</code> adds a string to a number and causes <code>TypeError</code>. To print numbers together with text, use comma printing or <code>str()</code> from the type-conversion lesson.</li><li>A + outside quotes is an operator. The + inside <code>\"A+B\"</code> is just text.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Practice mission: favourite food</h3><p>The mission starter already includes the question and <code>food = input()</code>. Add output that joins the sentence with <code>+</code>. Run the completed code, answer pizza, and press Enter.</p><ol><li>Print <code>Favorite food?</code> and save the input in <code>food</code>.</li><li>Use <code>+</code> to join <code>I like </code>, food, and the full stop <code>.</code>.</li><li>With pizza as input, display <code>I like pizza.</code> on one line.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Соединяем части текста</h3><p>Представьте этикетку из приветствия, имени и завершающего знака. Между строками <code>+</code> соединяет части в новую строку. Здесь это не сложение чисел.</p></section><section class=\"lesson-section\"><h3>2. Пробел — часть строки</h3><pre><code>name = &quot;Mina&quot;\nmessage = &quot;Hello, &quot; + name + &quot;!&quot;\nprint(message)</code></pre><pre class=\"example-output\">Hello, Mina!</pre><ol><li>Обратите внимание на пробел в конце <code>\"Hello, \"</code>. <code>+</code> не добавляет пробелы автоматически.</li><li>В середину попадает Mina из <code>name</code>. Имя переменной не нужно брать в кавычки.</li><li>В конце присоединяется <code>\"!\"</code>. Готовая строка сохраняется в message и выводится.</li></ol><p><code>\"Hello\" + \"Mina\"</code> даёт <code>HelloMina</code>, а <code>\"Hello \" + \"Mina\"</code> — <code>Hello Mina</code>.</p></section><section class=\"lesson-section\"><h3>3. Соединение со вводом</h3><pre><code>print(&quot;City?&quot;)\ncity = input()\nprint(&quot;I live in &quot; + city + &quot;.&quot;)</code></pre><pre class=\"example-output\">City?\nSeoul\nI live in Seoul.</pre><p>Запустите код в выбранном инструменте. Когда появится <code>City?</code>, введите <code>Seoul</code> и нажмите Enter. input возвращает строку, которую можно соединять с другими строками. Отдельная строка Seoul в примере — ответ, введённый пользователем.</p></section><section class=\"lesson-section\"><h3>4. Частые ошибки</h3><ul><li>Если слова слиплись, проверьте пробел внутри одной из частей текста.</li><li><code>\"Age: \" + 20</code> вызывает <code>TypeError</code>: строка и число не складываются напрямую. Для вывода чисел вместе с текстом используйте запятую или <code>str()</code> из урока о преобразовании типов.</li><li>+ вне кавычек — операция соединения. + внутри <code>\"A+B\"</code> — просто символ текста.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Практика: любимая еда</h3><p>В начале задания уже есть вопрос и <code>food = input()</code>. Добавьте вывод предложения, соединённого через <code>+</code>. Запустите готовый код, ответьте pizza и нажмите Enter.</p><ol><li>Выведите <code>Favorite food?</code> и сохраните ввод в <code>food</code>.</li><li>Через <code>+</code> соедините <code>I like </code>, food и точку <code>.</code>.</li><li>При вводе pizza должна появиться одна строка <code>I like pizza.</code>.</li></ol></section>"
    },
    "answer": {
      "ko": "print(\"Favorite food?\")\nfood = input()\nprint(\"I like \" + food + \".\")",
      "en": "print(\"Favorite food?\")\nfood = input()\nprint(\"I like \" + food + \".\")",
      "ru": "print(\"Favorite food?\")\nfood = input()\nprint(\"I like \" + food + \".\")"
    },
    "initialCode": {
      "ko": "food = \"pizza\"\nprint(\"I like \" + food)",
      "en": "food = \"pizza\"\nprint(\"I like \" + food)",
      "ru": "food = \"pizza\"\nprint(\"I like \" + food)"
    },
    "sampleInput": {
      "ko": "pizza",
      "en": "pizza",
      "ru": "pizza"
    },
    "expectedOutput": {
      "ko": "I like pizza",
      "en": "I like pizza",
      "ru": "I like pizza"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "음식 한 단어",
          "en": "One food word",
          "ru": "Одно слово"
        },
        "input": {
          "ko": "pizza",
          "en": "pizza",
          "ru": "pizza"
        },
        "output": {
          "ko": "Favorite food?\npizza\nI like pizza.",
          "en": "Favorite food?\npizza\nI like pizza.",
          "ru": "Favorite food?\npizza\nI like pizza."
        }
      },
      {
        "name": {
          "ko": "공백이 있는 음식 이름",
          "en": "A food name with a space",
          "ru": "Название с пробелом"
        },
        "input": {
          "ko": "fried rice",
          "en": "fried rice",
          "ru": "fried rice"
        },
        "output": {
          "ko": "Favorite food?\nfried rice\nI like fried rice.",
          "en": "Favorite food?\nfried rice\nI like fried rice.",
          "ru": "Favorite food?\nfried rice\nI like fried rice."
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 3,
    "sourceFile": "3.pdf",
    "sourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      28,
      29
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nprint(\"Favorite food?\")\nfood = input()\n# TODO: +로 I like , food, 마침표를 연결해 출력하세요. I like 뒤 공백을 확인하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nprint(\"Favorite food?\")\nfood = input()\n# TODO: Use + to join I like , food, and a period, then print it. Keep the space after I like.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nprint(\"Favorite food?\")\nfood = input()\n# TODO: Соедините через + I like , food и точку, затем выведите строку. Оставьте пробел после I like.\n"
    },
    "starterHint": {
      "ko": "food에 음식 이름을 받는 부분까지 준비되어 있습니다. 문장을 만드는 print()를 추가하세요.",
      "en": "Reading the food name into food is ready. Add print() to build the sentence.",
      "ru": "Ввод названия еды в food уже готов. Добавьте print(), который составит предложение."
    }
  },
  {
    "id": "lesson-4",
    "menu": {
      "ko": "3주 · 콤마로 출력",
      "en": "W3 · Print with commas",
      "ru": "W3 · Вывод через запятые"
    },
    "title": {
      "ko": "print에서 여러 값 출력하기",
      "en": "Print several values with commas",
      "ru": "Вывод нескольких значений через запятую"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 여러 값을 한 줄에 보여 주기</h3><p>이름과 나이를 안내판에 함께 쓰듯, <code>print()</code> 안에 여러 값을 넣을 수 있습니다. 값 사이에 콤마 <code>,</code>를 적으면 됩니다. 문자열뿐 아니라 숫자도 함께 출력할 수 있습니다.</p></section><section class=\"lesson-section\"><h3>2. 콤마와 공백</h3><pre><code>name = &quot;Mina&quot;\nage = 20\nprint(&quot;Name:&quot;, name)\nprint(&quot;Age:&quot;, age)</code></pre><pre class=\"example-output\">Name: Mina\nAge: 20</pre><ol><li>첫 두 줄은 name과 age에 값을 저장합니다.</li><li><code>print(\"Name:\", name)</code>의 콤마는 출력할 두 값을 구분합니다. 콤마 자체는 출력되지 않습니다.</li><li>print는 기본적으로 값 사이에 공백 하나를 넣습니다. 숫자 20은 따옴표 없이 그대로 전달해도 됩니다.</li><li>print를 다시 부르면 기본적으로 다음 줄에 출력합니다.</li></ol></section><section class=\"lesson-section\"><h3>3. +와 비교하기</h3><pre><code>print(&quot;A&quot; + &quot;B&quot;)\nprint(&quot;A&quot;, &quot;B&quot;)\nprint(&quot;Count:&quot;, 3)</code></pre><pre class=\"example-output\">AB\nA B\nCount: 3</pre><p><code>+</code>는 문자열을 연결해 하나의 값으로 만듭니다. 콤마는 여러 값을 print에 전달합니다. 숫자를 포함하는 간단한 출력에는 콤마가 편합니다.</p></section><section class=\"lesson-section\"><h3>4. 자주 하는 실수</h3><ul><li><code>print(\"Age:\", age)</code>처럼 콤마는 따옴표 밖에 씁니다. <code>\"Age:, age\"</code>라고 쓰면 모두 글자로 출력됩니다.</li><li>문구 끝에 공백을 넣고 콤마도 사용하면 공백이 두 개가 될 수 있습니다. 예상 결과와 비교하세요.</li><li>변수의 값을 출력할 때 변수 이름을 따옴표로 감싸지 마세요.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">실습 미션: 영화 티켓 안내</h3><p>미션 시작 코드에는 영화 질문, <code>movie</code> 입력, <code>tickets = 2</code>가 준비되어 있습니다. 콤마를 사용하는 출력 두 줄을 추가하세요. 실행 후 <code>Favorite movie?</code>가 나오면 <code>Zootopia</code>라고 답하고 Enter를 누릅니다.</p><ol><li><code>Favorite movie?</code>를 출력하고 영화 이름을 <code>movie</code>에 입력받으세요.</li><li><code>tickets = 2</code>로 티켓 수를 저장하세요.</li><li>콤마 출력을 사용해 <code>Movie: Zootopia</code>와 <code>Tickets: 2</code>처럼 두 줄을 출력하세요.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Show several values on one line</h3><p>Like writing a name and age on a sign, you can give <code>print()</code> several values. Separate them with commas <code>,</code>. You can print numbers together with strings.</p></section><section class=\"lesson-section\"><h3>2. Commas and spaces</h3><pre><code>name = &quot;Mina&quot;\nage = 20\nprint(&quot;Name:&quot;, name)\nprint(&quot;Age:&quot;, age)</code></pre><pre class=\"example-output\">Name: Mina\nAge: 20</pre><ol><li>The first two lines save values in name and age.</li><li>The comma in <code>print(\"Name:\", name)</code> separates two values. The comma itself is not printed.</li><li>By default, print inserts one space between values. You can pass the number 20 without quotes.</li><li>Another print call normally starts on the next output line.</li></ol></section><section class=\"lesson-section\"><h3>3. Compare with +</h3><pre><code>print(&quot;A&quot; + &quot;B&quot;)\nprint(&quot;A&quot;, &quot;B&quot;)\nprint(&quot;Count:&quot;, 3)</code></pre><pre class=\"example-output\">AB\nA B\nCount: 3</pre><p><code>+</code> joins strings into one value. A comma passes separate values to print. Commas are convenient for simple messages containing numbers.</p></section><section class=\"lesson-section\"><h3>4. Common mistakes</h3><ul><li>Put the comma outside the quotes, as in <code>print(\"Age:\", age)</code>. In <code>\"Age:, age\"</code>, everything is literal text.</li><li>A space at the end of your string plus the space from print can produce two spaces. Compare with the expected output.</li><li>Do not put quotes around a variable name when you want its saved value.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Practice mission: a cinema ticket notice</h3><p>The mission starter already has the movie question, <code>movie</code> input, and <code>tickets = 2</code>. Add two print lines using commas. After running, answer <code>Zootopia</code> when <code>Favorite movie?</code> appears, and press Enter.</p><ol><li>Print <code>Favorite movie?</code> and read the movie name into <code>movie</code>.</li><li>Save the ticket count with <code>tickets = 2</code>.</li><li>Use comma printing to display two lines such as <code>Movie: Zootopia</code> and <code>Tickets: 2</code>.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Несколько значений в одной строке</h3><p>Как на табличке с именем и возрастом, в <code>print()</code> можно передать несколько значений. Разделите их запятыми <code>,</code>. Числа тоже можно выводить вместе со строками.</p></section><section class=\"lesson-section\"><h3>2. Запятые и пробелы</h3><pre><code>name = &quot;Mina&quot;\nage = 20\nprint(&quot;Name:&quot;, name)\nprint(&quot;Age:&quot;, age)</code></pre><pre class=\"example-output\">Name: Mina\nAge: 20</pre><ol><li>Первые две строки сохраняют значения в name и age.</li><li>Запятая в <code>print(\"Name:\", name)</code> разделяет значения. Сама запятая не выводится.</li><li>По умолчанию print добавляет один пробел между значениями. Число 20 можно передать без кавычек.</li><li>Следующий вызов print обычно выводит данные уже на новой строке.</li></ol></section><section class=\"lesson-section\"><h3>3. Сравним с +</h3><pre><code>print(&quot;A&quot; + &quot;B&quot;)\nprint(&quot;A&quot;, &quot;B&quot;)\nprint(&quot;Count:&quot;, 3)</code></pre><pre class=\"example-output\">AB\nA B\nCount: 3</pre><p><code>+</code> соединяет строки в одно значение. Запятая передаёт print отдельные значения. Это удобно для простых сообщений с числами.</p></section><section class=\"lesson-section\"><h3>4. Частые ошибки</h3><ul><li>Запятая должна быть вне кавычек: <code>print(\"Age:\", age)</code>. В <code>\"Age:, age\"</code> всё является текстом.</li><li>Пробел в конце строки и автоматический пробел от print могут дать два пробела. Сравните с ожидаемым выводом.</li><li>Чтобы вывести значение переменной, не берите её имя в кавычки.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Практика: информация о билетах</h3><p>В начале задания уже есть вопрос о фильме, ввод <code>movie</code> и <code>tickets = 2</code>. Добавьте две строки print с запятыми. После запуска на вопрос <code>Favorite movie?</code> ответьте <code>Zootopia</code> и нажмите Enter.</p><ol><li>Выведите <code>Favorite movie?</code> и прочитайте название фильма в <code>movie</code>.</li><li>Сохраните количество билетов: <code>tickets = 2</code>.</li><li>Через запятые выведите две строки вида <code>Movie: Zootopia</code> и <code>Tickets: 2</code>.</li></ol></section>"
    },
    "answer": {
      "ko": "print(\"Favorite movie?\")\nmovie = input()\ntickets = 2\nprint(\"Movie:\", movie)\nprint(\"Tickets:\", tickets)",
      "en": "print(\"Favorite movie?\")\nmovie = input()\ntickets = 2\nprint(\"Movie:\", movie)\nprint(\"Tickets:\", tickets)",
      "ru": "print(\"Favorite movie?\")\nmovie = input()\ntickets = 2\nprint(\"Movie:\", movie)\nprint(\"Tickets:\", tickets)"
    },
    "initialCode": {
      "ko": "print(\"Age:\", 20)",
      "en": "print(\"Age:\", 20)",
      "ru": "print(\"Age:\", 20)"
    },
    "sampleInput": {
      "ko": "Zootopia",
      "en": "Zootopia",
      "ru": "Zootopia"
    },
    "expectedOutput": {
      "ko": "Age: 20",
      "en": "Age: 20",
      "ru": "Age: 20"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "영화와 숫자 함께 출력",
          "en": "Print text and a number",
          "ru": "Текст и число"
        },
        "input": {
          "ko": "Zootopia",
          "en": "Zootopia",
          "ru": "Zootopia"
        },
        "output": {
          "ko": "Favorite movie?\nZootopia\nMovie: Zootopia\nTickets: 2",
          "en": "Favorite movie?\nZootopia\nMovie: Zootopia\nTickets: 2",
          "ru": "Favorite movie?\nZootopia\nMovie: Zootopia\nTickets: 2"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 3,
    "sourceFile": "3.pdf",
    "sourcePages": [
      12,
      13,
      14,
      15,
      18,
      19
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nprint(\"Favorite movie?\")\nmovie = input()\ntickets = 2\n# TODO: 콤마 출력을 사용해 Movie:와 movie, Tickets:와 tickets를 두 줄로 보여 주세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nprint(\"Favorite movie?\")\nmovie = input()\ntickets = 2\n# TODO: Use commas in print() to show Movie: with movie and Tickets: with tickets on two lines.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nprint(\"Favorite movie?\")\nmovie = input()\ntickets = 2\n# TODO: Используйте запятые в print(): выведите Movie: с movie и Tickets: с tickets на двух строках.\n"
    },
    "starterHint": {
      "ko": "movie와 tickets는 준비되어 있습니다. print() 두 줄을 추가하세요.",
      "en": "movie and tickets are ready. Add two print() lines.",
      "ru": "movie и tickets уже заданы. Добавьте две строки print()."
    }
  },
  {
    "id": "lesson-5",
    "menu": {
      "ko": "3주 · 사칙연산",
      "en": "W3 · Math",
      "ru": "W3 · Арифметика"
    },
    "title": {
      "ko": "컴퓨터는 계산 천재: 사칙연산",
      "en": "The Calculation Genius: Basic Math",
      "ru": "Гений вычислений: Арифметика"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 숫자로 계산하기</h3><p>파이썬을 계산기로 사용할 수 있습니다. 숫자는 따옴표 없이 적습니다. <code>10 + 5</code>는 숫자 15이고, <code>\"10\" + \"5\"</code>는 글자를 연결한 문자열 <code>\"105\"</code>입니다.</p></section><section class=\"lesson-section\"><h3>2. 네 가지 연산</h3><pre><code>print(10 + 5)\nprint(10 - 5)\nprint(10 * 5)\nprint(10 / 5)</code></pre><pre class=\"example-output\">15\n5\n50\n2.0</pre><ul><li><code>+</code>는 더하기, <code>-</code>는 빼기입니다.</li><li><code>*</code>는 곱하기입니다. 알파벳 x나 수학 기호 ×를 쓰지 않습니다.</li><li><code>/</code>는 나누기입니다. 나누어떨어져도 이 연산의 결과는 <code>2.0</code>처럼 실수 형태입니다.</li><li>변수에도 같은 기호를 씁니다. <code>a * b</code>는 a와 b에 저장한 수를 곱합니다.</li></ul></section><section class=\"lesson-section\"><h3>3. 계산 순서</h3><pre><code>print(2 + 3 * 4)\nprint((2 + 3) * 4)</code></pre><pre class=\"example-output\">14\n20</pre><p>곱하기와 나누기를 더하기·빼기보다 먼저 합니다. 먼저 계산할 부분은 소괄호로 감쌉니다. 괄호가 여러 겹일 때는 안쪽부터 계산합니다.</p></section><section class=\"lesson-section\"><h3>4. 자주 하는 실수</h3><ul><li>숫자를 따옴표로 감싸면 문자열이 됩니다. 계산하려면 따옴표를 빼세요.</li><li><code>10 / 0</code>은 <code>ZeroDivisionError</code>입니다. 나누는 값에는 0을 넣지 마세요.</li><li>IDLE 편집기나 VS Code에서 <code>.py</code> 파일을 실행할 때는 계산식만 적어도 결과가 자동으로 출력되지는 않습니다. Colab은 셀의 마지막 계산식 값을 보여 줄 수 있습니다. 이 수업에서는 어느 도구에서도 결과를 확인하도록 <code>print(a + b)</code>를 사용합니다.</li></ul></section><details class=\"lesson-extra\"><summary>더 해 보기 · f-string에 계산 결과 넣기</summary><pre><code>price = 3000\ncount = 2\nprint(f&quot;Total: {price * count}&quot;)</code></pre><p><b>예상 결과</b></p><pre><code>Total: 6000</code></pre><p>중괄호 안의 <code>price * count</code>를 먼저 계산합니다. 여기서 Total은 지불할 총금액입니다.</p></details><section class=\"problem-area\"><h3 class=\"problem-title\">실습 미션: 두 수의 네 가지 계산</h3><p>Sum은 더한 값, Difference는 뺀 값, Product는 곱한 값, Quotient는 나눈 값입니다. 출력할 영어 이름표이므로 이 단어들은 따옴표 안에 씁니다.</p><ol><li>a에 10, b에 5를 저장하세요.</li><li>더하기, 빼기, 곱하기, 나누기를 이 순서로 각각 출력하세요.</li><li>각 줄 앞에 <code>Sum:</code>, <code>Difference:</code>, <code>Product:</code>, <code>Quotient:</code>를 콤마 출력으로 붙이세요.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Calculate with numbers</h3><p>Python can work like a calculator. Write numbers without quotes. <code>10 + 5</code> is the number 15; <code>\"10\" + \"5\"</code> joins text to make the string <code>\"105\"</code>.</p></section><section class=\"lesson-section\"><h3>2. Four operations</h3><pre><code>print(10 + 5)\nprint(10 - 5)\nprint(10 * 5)\nprint(10 / 5)</code></pre><pre class=\"example-output\">15\n5\n50\n2.0</pre><ul><li><code>+</code> adds and <code>-</code> subtracts.</li><li><code>*</code> multiplies. Do not use the letter x or the mathematical symbol ×.</li><li><code>/</code> divides. Even when the division is exact, this operation returns a floating-point value such as <code>2.0</code>.</li><li>Use the same symbols with variables. <code>a * b</code> multiplies the numbers stored in a and b.</li></ul></section><section class=\"lesson-section\"><h3>3. Order of calculation</h3><pre><code>print(2 + 3 * 4)\nprint((2 + 3) * 4)</code></pre><pre class=\"example-output\">14\n20</pre><p>Multiplication and division happen before addition and subtraction. Put parentheses around a calculation that must happen first. For nested parentheses, work from the inside out.</p></section><section class=\"lesson-section\"><h3>4. Common mistakes</h3><ul><li>Quotes turn a number into text. Remove the quotes for numeric calculation.</li><li><code>10 / 0</code> causes <code>ZeroDivisionError</code>. Do not use zero as the divisor.</li><li>When you run a <code>.py</code> file from the IDLE editor or VS Code, a bare calculation is not printed automatically. Colab can display the value of the last expression in a cell. In this course, use <code>print(a + b)</code> so the result is visible in every tool.</li></ul></section><details class=\"lesson-extra\"><summary>Optional · Put a calculation in an f-string</summary><pre><code>price = 3000\ncount = 2\nprint(f&quot;Total: {price * count}&quot;)</code></pre><p><b>Expected output</b></p><pre><code>Total: 6000</code></pre><p>Python first calculates <code>price * count</code> inside the braces. Total here means the amount to pay.</p></details><section class=\"problem-area\"><h3 class=\"problem-title\">Practice mission: four calculations</h3><p>Sum means the result of addition; Difference, subtraction; Product, multiplication; Quotient, division. These words are output labels, so write them inside quotes.</p><ol><li>Store 10 in a and 5 in b.</li><li>Print their sum, difference, product, and quotient in that order.</li><li>Use comma printing to add <code>Sum:</code>, <code>Difference:</code>, <code>Product:</code>, and <code>Quotient:</code> before the corresponding results.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Считаем с числами</h3><p>Python можно использовать как калькулятор. Числа пишутся без кавычек. <code>10 + 5</code> даёт число 15, а <code>\"10\" + \"5\"</code> соединяет текст в строку <code>\"105\"</code>.</p></section><section class=\"lesson-section\"><h3>2. Четыре операции</h3><pre><code>print(10 + 5)\nprint(10 - 5)\nprint(10 * 5)\nprint(10 / 5)</code></pre><pre class=\"example-output\">15\n5\n50\n2.0</pre><ul><li><code>+</code> — сложение, <code>-</code> — вычитание.</li><li><code>*</code> — умножение. Не используйте букву x или математический знак ×.</li><li><code>/</code> — деление. Даже при делении без остатка результат этой операции имеет тип float, например <code>2.0</code>.</li><li>С переменными используются те же знаки. <code>a * b</code> умножает сохранённые в них числа.</li></ul></section><section class=\"lesson-section\"><h3>3. Порядок вычислений</h3><pre><code>print(2 + 3 * 4)\nprint((2 + 3) * 4)</code></pre><pre class=\"example-output\">14\n20</pre><p>Умножение и деление выполняются раньше сложения и вычитания. То, что нужно посчитать первым, заключайте в круглые скобки. Вложенные скобки вычисляются изнутри наружу.</p></section><section class=\"lesson-section\"><h3>4. Частые ошибки</h3><ul><li>Кавычки превращают число в текст. Для вычислений уберите кавычки.</li><li><code>10 / 0</code> вызывает <code>ZeroDivisionError</code>. Делитель не должен быть нулём.</li><li>При запуске файла <code>.py</code> из редактора IDLE или VS Code результат отдельного выражения автоматически не выводится. Colab может показать значение последнего выражения в ячейке. В этом курсе используйте <code>print(a + b)</code>, чтобы видеть результат в любом из инструментов.</li></ul></section><details class=\"lesson-extra\"><summary>Дополнительно · Вычисление в f-строке</summary><pre><code>price = 3000\ncount = 2\nprint(f&quot;Total: {price * count}&quot;)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>Total: 6000</code></pre><p>Python сначала вычисляет <code>price * count</code> в фигурных скобках. Здесь Total — общая сумма к оплате.</p></details><section class=\"problem-area\"><h3 class=\"problem-title\">Практика: четыре вычисления</h3><p>Sum — сумма, Difference — разность, Product — произведение, Quotient — частное. Это подписи к результатам: пишите эти слова внутри кавычек.</p><ol><li>Сохраните 10 в a и 5 в b.</li><li>По очереди выведите сумму, разность, произведение и частное.</li><li>Через запятую добавьте подписи <code>Sum:</code>, <code>Difference:</code>, <code>Product:</code> и <code>Quotient:</code> перед соответствующими результатами.</li></ol></section>"
    },
    "answer": {
      "ko": "a = 10\nb = 5\nprint(\"Sum:\", a + b)\nprint(\"Difference:\", a - b)\nprint(\"Product:\", a * b)\nprint(\"Quotient:\", a / b)",
      "en": "a = 10\nb = 5\nprint(\"Sum:\", a + b)\nprint(\"Difference:\", a - b)\nprint(\"Product:\", a * b)\nprint(\"Quotient:\", a / b)",
      "ru": "a = 10\nb = 5\nprint(\"Sum:\", a + b)\nprint(\"Difference:\", a - b)\nprint(\"Product:\", a * b)\nprint(\"Quotient:\", a / b)"
    },
    "initialCode": {
      "ko": "a = 6\nb = 2\nprint(a + b)\nprint(a / b)",
      "en": "a = 6\nb = 2\nprint(a + b)\nprint(a / b)",
      "ru": "a = 6\nb = 2\nprint(a + b)\nprint(a / b)"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "8\n3.0",
      "en": "8\n3.0",
      "ru": "8\n3.0"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "사칙연산 전체 확인",
          "en": "Check all four operations",
          "ru": "Проверка четырёх операций"
        },
        "input": {
          "ko": "",
          "en": "",
          "ru": ""
        },
        "output": {
          "ko": "Sum: 15\nDifference: 5\nProduct: 50\nQuotient: 2.0",
          "en": "Sum: 15\nDifference: 5\nProduct: 50\nQuotient: 2.0",
          "ru": "Sum: 15\nDifference: 5\nProduct: 50\nQuotient: 2.0"
        }
      }
    ],
    "needsInput": false,
    "sourceWeek": 3,
    "sourceFile": "3.pdf",
    "sourcePages": [
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\na = 10\nb = 5\nprint(\"Sum:\", a + b)\n# TODO: Difference:, Product:, Quotient:를 붙여 빼기, 곱하기, 나누기도 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\na = 10\nb = 5\nprint(\"Sum:\", a + b)\n# TODO: Also print subtraction, multiplication, and division with Difference:, Product:, and Quotient:.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\na = 10\nb = 5\nprint(\"Sum:\", a + b)\n# TODO: Также выведите разность, произведение и частное с подписями Difference:, Product: и Quotient:.\n"
    },
    "starterHint": {
      "ko": "합계 한 줄은 완성되어 있습니다. 같은 모양으로 나머지 계산 세 줄을 추가하세요.",
      "en": "The sum line is ready. Use the same pattern for the other three calculations.",
      "ru": "Строка с суммой готова. По тому же образцу добавьте ещё три вычисления."
    }
  },
  {
    "id": "lesson-6",
    "menu": {
      "ko": "4주 · input 안내문",
      "en": "W4 · Input Message",
      "ru": "W4 · Подсказка в input()"
    },
    "title": {
      "ko": "친절한 안내원: input() 메시지",
      "en": "Friendly Guide: Message inside input()",
      "ru": "Сообщение внутри input()"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 입력 안내문은 질문 표지판</h3><p>무엇을 입력해야 하는지 알려 주면 사용자가 덜 헷갈립니다. <code>input(\"Name: \")</code>의 괄호 안 문자열은 <b>입력 안내문(prompt)</b>입니다. 안내문을 보여 준 뒤 입력 한 줄을 읽습니다.</p></section><section class=\"lesson-section\"><h3>2. 출력과 입력을 한 줄로</h3><pre><code>name = input(&quot;Name: &quot;)\nprint(&quot;Saved:&quot;, name)</code></pre><pre class=\"example-output\">Name: Mina\nSaved: Mina</pre><ol><li><code>\"Name: \"</code>은 화면에 보이는 안내문입니다. 마지막 공백은 입력값과 간격을 둡니다.</li><li><code>input()</code>이 반환하는 것은 Mina라는 입력값입니다. 안내문 Name:는 입력값에 포함되지 않습니다.</li><li><code>=</code>가 Mina를 name에 저장합니다. 마지막 줄이 저장한 값을 다시 출력합니다.</li></ol><p>위 흐름에서 <code>Name:</code>은 프로그램의 질문, 그 뒤의 <code>Mina</code>는 사용자가 입력한 답입니다. Enter를 누르면 다음 줄의 <code>Saved: Mina</code>가 출력됩니다. 이 페이지의 재생 화면은 이 순서를 보여 주는 예시입니다.</p></section><section class=\"lesson-section\"><h3>3. 질문이 나오면 하나씩 답하기</h3><pre><code>name = input(&quot;Name: &quot;)\ncity = input(&quot;City: &quot;)\nprint(&quot;Hello,&quot;, name)\nprint(&quot;City:&quot;, city)</code></pre><pre class=\"example-output\">Name: Mina\nCity: Seoul\nHello, Mina\nCity: Seoul</pre><p>Colab·IDLE·VS Code 중 선택한 도구에서 코드를 실행하세요. <code>Name:</code>이 나오면 <code>Mina</code>를 적고 Enter를 누릅니다. 이어서 <code>City:</code>가 나오면 <code>Seoul</code>을 적고 Enter를 누르세요. 두 답을 받은 뒤 아래 두 print가 실행됩니다.</p></section><section class=\"lesson-section\"><h3>4. 자주 하는 실수</h3><ul><li>질문에는 답만 적으세요. <code>Name: Mina</code> 전체를 적으면 안내문까지 이름으로 저장됩니다.</li><li>질문이 둘이면 각각 답하고 Enter를 누릅니다. 다음 질문을 기다리는 중에는 프로그램이 아직 끝나지 않은 것입니다.</li><li>입력한 20도 아직 문자열입니다. 나이 계산은 다음 레슨에서 숫자로 바꾼 후 합니다.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">실습 미션: 이름과 나이 안내</h3><ol><li><code>input(\"Name: \")</code>으로 이름을 받아 name에 저장하세요.</li><li><code>input(\"Age: \")</code>으로 나이를 받아 age에 저장하세요. 실행한 뒤 Name: 질문에 Mina, Age: 질문에 20을 답하고 각각 Enter를 누르세요.</li><li><code>Name:</code>과 name, <code>Age:</code>와 age를 콤마 출력으로 각각 보여 주세요. 이번에는 나이를 계산하지 않습니다.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. A prompt is a sign for the user</h3><p>Tell the user what to enter. The string inside <code>input(\"Name: \")</code> is a <b>prompt</b>. Python displays it, then reads one input line.</p></section><section class=\"lesson-section\"><h3>2. Ask and read in one line</h3><pre><code>name = input(&quot;Name: &quot;)\nprint(&quot;Saved:&quot;, name)</code></pre><pre class=\"example-output\">Name: Mina\nSaved: Mina</pre><ol><li><code>\"Name: \"</code> is the displayed prompt. Its final space separates it from the input.</li><li>The value returned by <code>input()</code> is Mina. It does not include the prompt Name:.</li><li><code>=</code> saves Mina in name. The last line shows the saved value again.</li></ol><p>In the flow above, <code>Name:</code> is the program’s prompt and the following <code>Mina</code> is the user’s answer. After Enter, the program prints <code>Saved: Mina</code> on the next line. The replay on this page demonstrates that order.</p></section><section class=\"lesson-section\"><h3>3. Answer each question when it appears</h3><pre><code>name = input(&quot;Name: &quot;)\ncity = input(&quot;City: &quot;)\nprint(&quot;Hello,&quot;, name)\nprint(&quot;City:&quot;, city)</code></pre><pre class=\"example-output\">Name: Mina\nCity: Seoul\nHello, Mina\nCity: Seoul</pre><p>Run the code in your chosen tool: Colab, IDLE, or VS Code. When <code>Name:</code> appears, enter <code>Mina</code> and press Enter. When <code>City:</code> appears next, enter <code>Seoul</code> and press Enter. After both answers, the two print calls run.</p></section><section class=\"lesson-section\"><h3>4. Common mistakes</h3><ul><li>Type only the answer. If you type <code>Name: Mina</code>, the entire text becomes the name.</li><li>For two questions, answer each one and press Enter. While the program waits for the next answer, it has not finished yet.</li><li>Even the input 20 is still a string. Convert it to a number in the next lesson before doing age calculations.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Practice mission: name and age prompts</h3><ol><li>Use <code>input(\"Name: \")</code> and save the name in name.</li><li>Use <code>input(\"Age: \")</code> and save the age in age. After running, answer Mina for Name: and 20 for Age:. Press Enter after each answer.</li><li>Use comma printing to show <code>Name:</code> with name and <code>Age:</code> with age, on separate lines. Do not calculate with the age yet.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Подсказка показывает, что вводить</h3><p>Пользователю нужно знать, какой ответ ожидается. Строка внутри <code>input(\"Name: \")</code> — это <b>приглашение ко вводу (prompt)</b>. Python показывает его, затем читает одну строку.</p></section><section class=\"lesson-section\"><h3>2. Спросить и прочитать одной строкой</h3><pre><code>name = input(&quot;Name: &quot;)\nprint(&quot;Saved:&quot;, name)</code></pre><pre class=\"example-output\">Name: Mina\nSaved: Mina</pre><ol><li><code>\"Name: \"</code> — текст подсказки. Пробел в конце отделяет его от ввода.</li><li><code>input()</code> возвращает Mina. Подсказка Name: в это значение не входит.</li><li><code>=</code> сохраняет Mina в name. Последняя строка снова выводит сохранённое значение.</li></ol><p>В примере <code>Name:</code> — приглашение программы, а следующее за ним <code>Mina</code> — ответ пользователя. После Enter программа выводит <code>Saved: Mina</code> на следующей строке. Воспроизведение на этой странице показывает этот порядок.</p></section><section class=\"lesson-section\"><h3>3. Отвечайте на вопросы по очереди</h3><pre><code>name = input(&quot;Name: &quot;)\ncity = input(&quot;City: &quot;)\nprint(&quot;Hello,&quot;, name)\nprint(&quot;City:&quot;, city)</code></pre><pre class=\"example-output\">Name: Mina\nCity: Seoul\nHello, Mina\nCity: Seoul</pre><p>Запустите код в выбранном инструменте: Colab, IDLE или VS Code. После <code>Name:</code> введите <code>Mina</code> и нажмите Enter. Затем после <code>City:</code> введите <code>Seoul</code> и снова нажмите Enter. Получив оба ответа, программа выполняет две команды print.</p></section><section class=\"lesson-section\"><h3>4. Частые ошибки</h3><ul><li>Вводите только ответ. Если написать <code>Name: Mina</code>, весь этот текст сохранится как имя.</li><li>На каждый из двух вопросов ответьте отдельно и нажмите Enter. Пока программа ждёт следующий ответ, она ещё не завершена.</li><li>Даже введённое 20 пока является строкой. Для вычислений с возрастом преобразуем его в число в следующем уроке.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Практика: имя и возраст</h3><ol><li>Прочитайте имя через <code>input(\"Name: \")</code> и сохраните его в name.</li><li>Прочитайте возраст через <code>input(\"Age: \")</code> и сохраните в age. После запуска ответьте Mina на Name: и 20 на Age:. После каждого ответа нажмите Enter.</li><li>Через запятую выведите <code>Name:</code> с name и <code>Age:</code> с age на отдельных строках. Пока не считайте возраст.</li></ol></section>"
    },
    "answer": {
      "ko": "name = input(\"Name: \")\nage = input(\"Age: \")\nprint(\"Name:\", name)\nprint(\"Age:\", age)",
      "en": "name = input(\"Name: \")\nage = input(\"Age: \")\nprint(\"Name:\", name)\nprint(\"Age:\", age)",
      "ru": "name = input(\"Name: \")\nage = input(\"Age: \")\nprint(\"Name:\", name)\nprint(\"Age:\", age)"
    },
    "initialCode": {
      "ko": "name = input(\"Name: \")\nprint(name)",
      "en": "name = input(\"Name: \")\nprint(name)",
      "ru": "name = input(\"Name: \")\nprint(name)"
    },
    "sampleInput": {
      "ko": "Mina",
      "en": "Mina",
      "ru": "Mina"
    },
    "expectedOutput": {
      "ko": "Name: Mina\nMina",
      "en": "Name: Mina\nMina",
      "ru": "Name: Mina\nMina"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "입력 두 줄",
          "en": "Two input lines",
          "ru": "Две строки ввода"
        },
        "input": {
          "ko": "Mina\n20",
          "en": "Mina\n20",
          "ru": "Mina\n20"
        },
        "output": {
          "ko": "Name: Mina\nAge: 20\nName: Mina\nAge: 20",
          "en": "Name: Mina\nAge: 20\nName: Mina\nAge: 20",
          "ru": "Name: Mina\nAge: 20\nName: Mina\nAge: 20"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 4,
    "sourceFile": "4.pdf",
    "sourcePages": [
      15,
      16,
      21,
      22
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nname = input(\"Name: \")\nage = input(\"Age: \")\n# TODO: 콤마 출력으로 Name:과 name, Age:와 age를 각각 보여 주세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nname = input(\"Name: \")\nage = input(\"Age: \")\n# TODO: Use commas in print() to show Name: with name and Age: with age.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nname = input(\"Name: \")\nage = input(\"Age: \")\n# TODO: Через запятые в print() выведите Name: с name и Age: с age.\n"
    },
    "starterHint": {
      "ko": "이름과 나이를 받는 부분만 있습니다. 각 질문에 답하고 Enter를 누르세요. 입력한 값을 다시 보여 주는 print() 두 줄을 추가합니다.",
      "en": "Only the name and age inputs are ready. Answer each prompt and press Enter. Add two print() lines to show the stored values.",
      "ru": "Готов только ввод имени и возраста. На каждый вопрос ответьте и нажмите Enter. Добавьте две строки print() для сохранённых значений."
    }
  },
  {
    "id": "lesson-7",
    "menu": {
      "ko": "4주 · 자료형/형변환",
      "en": "W4 · Data Types",
      "ru": "W4 · Типы данных"
    },
    "title": {
      "ko": "문자열과 숫자: 자료형 변환",
      "en": "Text and numbers: type conversion",
      "ru": "Текст и числа: преобразование типов"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 값에도 종류가 있어요</h3><p>값의 종류를 <b>자료형(type)</b>이라고 합니다. <code>str</code>은 문자열, <code>int</code>는 정수, <code>float</code>는 소수를 표현하는 실수형입니다. 같은 5처럼 보여도 문자열 <code>\"5\"</code>와 숫자 <code>5</code>는 할 수 있는 계산이 다릅니다. <code>type(값)</code>으로 종류를 확인합니다.</p></section><section class=\"lesson-section\"><h3>2. 숫자처럼 보이는 글자를 숫자로</h3><pre><code>text = &quot;5&quot;\nnumber = int(text)\nprice = float(&quot;3.5&quot;)\nprint(type(text))\nprint(type(number))\nprint(type(price))\nprint(number + 1)\nprint(&quot;Count: &quot; + str(number))</code></pre><pre class=\"example-output\">&lt;class &#x27;str&#x27;&gt;\n&lt;class &#x27;int&#x27;&gt;\n&lt;class &#x27;float&#x27;&gt;\n6\nCount: 5</pre><p><code>&lt;class 'int'&gt;</code>에서는 <code>int</code>를 보면 됩니다. 정수라는 뜻입니다. 이 결과 문구 전체를 코드에 적지는 않습니다.</p><ol><li><code>\"5\"</code>는 따옴표가 있으므로 문자열입니다.</li><li><code>int(text)</code>는 정수 5로 바꿉니다. 이제 1을 더하면 6입니다.</li><li><code>float(\"3.5\")</code>는 실수 3.5입니다. 소수점은 쉼표가 아닌 점을 씁니다.</li><li><code>str(number)</code>는 숫자를 문자열로 바꿉니다. 그래서 문자열 + 연결이 가능합니다.</li></ol></section><section class=\"lesson-section\"><h3>3. input은 항상 문자열</h3><pre><code>age_text = input(&quot;Age: &quot;)\nage = int(age_text)\nprint(&quot;Next year:&quot;, age + 1)</code></pre><pre class=\"example-output\">Age: 20\nNext year: 21</pre><p><code>int(input(\"Age: \"))</code>처럼 한 줄로 합칠 수도 있습니다. 안쪽 input이 먼저 읽고, 바깥 int가 그 결과를 정수로 바꿉니다.</p></section><section class=\"lesson-section\"><h3>4. 바꿀 수 없는 값과 오류</h3><ul><li><code>int(\"apple\")</code>, <code>int(\"3.5\")</code>는 <code>ValueError</code>입니다. 정수를 묻는 질문에는 20처럼 소수점 없는 수를 답하세요.</li><li><code>float(\"3.5\")</code>는 가능하지만 <code>float(\"3,5\")</code>는 안 됩니다. 소수점으로 점을 쓰세요.</li><li><code>int(3.9)</code>는 3입니다. 반올림이 아니라 소수 부분을 버리므로 용도를 확인하세요.</li><li>숫자를 바로 문자열과 +로 연결하지 말고 <code>str()</code>를 쓰거나 콤마로 출력하세요.</li></ul></section><details class=\"lesson-extra\"><summary>더 알아보기 · float와 근삿값</summary><p>float는 소수 값을 표현하는 자료형입니다. 모든 소수를 정확하게 저장하는 것은 아니며 일부는 근삿값입니다. 지금은 <code>int(\"5\")</code>, <code>float(\"2.5\")</code>, <code>str(5)</code>의 차이부터 확인하세요. <code>int(\"3.5\")</code>는 정수로 바로 바꿀 수 없습니다. 소수 입력을 받을 때는 float를 사용합니다.</p></details><section class=\"problem-area\"><h3 class=\"problem-title\">실습 미션: 나이와 가격 변환</h3><p>미션 시작 코드에는 <code>age_text</code>와 <code>price</code> 입력이 준비되어 있습니다. <code>age_text</code>를 정수 <code>age</code>로 바꾸고 필요한 출력을 추가하세요. 실행 후 Age:에는 20, Price:에는 2.5를 답하고 각각 Enter를 누릅니다. Next year는 내년 나이, Double price는 두 배 가격, Age text는 글자로 바꾼 나이입니다.</p><ol><li><code>Age: </code>로 입력받은 문자열을 age_text에 저장하고, int로 바꾼 값을 age에 저장하세요.</li><li><code>Price: </code>로 입력받은 값을 float로 바꾸어 price에 저장하세요. 예시는 20과 2.5입니다.</li><li>age_text, age, price의 type을 순서대로 출력하세요.</li><li><code>Next year:</code> 뒤에 age + 1, <code>Double price:</code> 뒤에 price * 2를 콤마로 출력하세요.</li><li>마지막으로 <code>str(age)</code>와 +를 사용해 <code>Age text: 20</code>처럼 출력하세요.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Values have types</h3><p>A value has a <b>type</b>. <code>str</code> is text, <code>int</code> is a whole number, and <code>float</code> is a floating-point number used for decimals. The text <code>\"5\"</code> and the number <code>5</code> look similar, but they behave differently in calculations. Use <code>type(value)</code> to inspect the type.</p></section><section class=\"lesson-section\"><h3>2. Turn number text into a number</h3><pre><code>text = &quot;5&quot;\nnumber = int(text)\nprice = float(&quot;3.5&quot;)\nprint(type(text))\nprint(type(number))\nprint(type(price))\nprint(number + 1)\nprint(&quot;Count: &quot; + str(number))</code></pre><pre class=\"example-output\">&lt;class &#x27;str&#x27;&gt;\n&lt;class &#x27;int&#x27;&gt;\n&lt;class &#x27;float&#x27;&gt;\n6\nCount: 5</pre><p>In <code>&lt;class 'int'&gt;</code>, look at <code>int</code>: it means a whole number. This is a result to read; do not type the whole result into your code.</p><ol><li><code>\"5\"</code> has quotes, so it is a string.</li><li><code>int(text)</code> converts it to the integer 5. Adding 1 now gives 6.</li><li><code>float(\"3.5\")</code> gives the number 3.5. Use a dot, not a comma, for the decimal point.</li><li><code>str(number)</code> converts a number to text so it can join another string with +.</li></ol></section><section class=\"lesson-section\"><h3>3. input always returns a string</h3><pre><code>age_text = input(&quot;Age: &quot;)\nage = int(age_text)\nprint(&quot;Next year:&quot;, age + 1)</code></pre><pre class=\"example-output\">Age: 20\nNext year: 21</pre><p>You can combine the first two steps as <code>int(input(\"Age: \"))</code>. The inner input runs first, then the outer int converts its result.</p></section><section class=\"lesson-section\"><h3>4. Conversion mistakes</h3><ul><li><code>int(\"apple\")</code> and <code>int(\"3.5\")</code> cause <code>ValueError</code>. For integer input, enter a whole number such as 20.</li><li><code>float(\"3.5\")</code> works, but <code>float(\"3,5\")</code> does not. Use a decimal dot.</li><li><code>int(3.9)</code> gives 3. It discards the fractional part; it does not round to the nearest integer.</li><li>Do not join a string and a number directly with +. Use <code>str()</code> or comma printing.</li></ul></section><details class=\"lesson-extra\"><summary>Learn more · float and approximate values</summary><p>float represents numbers with fractional parts. Some values are stored approximately, so it does not guarantee exact decimal arithmetic. For now, compare <code>int(\"5\")</code>, <code>float(\"2.5\")</code> and <code>str(5)</code>. <code>int(\"3.5\")</code> does not directly convert that text to an integer. Use float for fractional input.</p></details><section class=\"problem-area\"><h3 class=\"problem-title\">Practice mission: convert age and price</h3><p>The mission starter already reads <code>age_text</code> and <code>price</code>. Convert <code>age_text</code> to the integer <code>age</code> and add the required output. After running, answer 20 for Age: and 2.5 for Price:, pressing Enter each time. Next year means age plus one; Double price means twice the price; Age text means age converted to text.</p><ol><li>Read a string with <code>Age: </code> into age_text. Convert it with int and save the result in age.</li><li>Read a value with <code>Price: </code>, convert it with float, and save it in price. Sample values: 20 and 2.5.</li><li>Print the types of age_text, age, and price in that order.</li><li>Print <code>Next year:</code> with age + 1, then <code>Double price:</code> with price * 2, using commas.</li><li>Finally use <code>str(age)</code> and + to print a line such as <code>Age text: 20</code>.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. У значений есть тип</h3><p>У значения есть <b>тип</b>. <code>str</code> — текст, <code>int</code> — целое число, <code>float</code> — число с плавающей точкой для дробных значений. Текст <code>\"5\"</code> и число <code>5</code> выглядят похоже, но по-разному участвуют в вычислениях. <code>type(значение)</code> показывает тип.</p></section><section class=\"lesson-section\"><h3>2. Превращаем текст в число</h3><pre><code>text = &quot;5&quot;\nnumber = int(text)\nprice = float(&quot;3.5&quot;)\nprint(type(text))\nprint(type(number))\nprint(type(price))\nprint(number + 1)\nprint(&quot;Count: &quot; + str(number))</code></pre><pre class=\"example-output\">&lt;class &#x27;str&#x27;&gt;\n&lt;class &#x27;int&#x27;&gt;\n&lt;class &#x27;float&#x27;&gt;\n6\nCount: 5</pre><p>В <code>&lt;class 'int'&gt;</code> смотрите на <code>int</code>: это целое число. Это результат для чтения, а не текст, который нужно целиком писать в коде.</p><ol><li><code>\"5\"</code> — строка, потому что есть кавычки.</li><li><code>int(text)</code> превращает её в целое 5. Теперь прибавление 1 даёт 6.</li><li><code>float(\"3.5\")</code> даёт число 3.5. Для десятичного разделителя используйте точку, а не запятую.</li><li><code>str(number)</code> превращает число в строку. Её можно соединять с другой строкой через +.</li></ol></section><section class=\"lesson-section\"><h3>3. input всегда возвращает строку</h3><pre><code>age_text = input(&quot;Age: &quot;)\nage = int(age_text)\nprint(&quot;Next year:&quot;, age + 1)</code></pre><pre class=\"example-output\">Age: 20\nNext year: 21</pre><p>Первые два шага можно объединить: <code>int(input(\"Age: \"))</code>. Сначала внутренний input читает строку, затем внешний int преобразует результат.</p></section><section class=\"lesson-section\"><h3>4. Ошибки преобразования</h3><ul><li><code>int(\"apple\")</code> и <code>int(\"3.5\")</code> вызывают <code>ValueError</code>. Для целого числа вводите, например, 20.</li><li><code>float(\"3.5\")</code> работает, а <code>float(\"3,5\")</code> — нет. Нужна десятичная точка.</li><li><code>int(3.9)</code> даёт 3: дробная часть отбрасывается. Это не округление до ближайшего целого.</li><li>Не соединяйте число со строкой напрямую через +. Используйте <code>str()</code> или вывод через запятую.</li></ul></section><details class=\"lesson-extra\"><summary>Подробнее · float и приближённые значения</summary><p>float представляет числа с дробной частью. Некоторые значения хранятся приближённо, поэтому точные десятичные вычисления не гарантируются. Пока сравните <code>int(\"5\")</code>, <code>float(\"2.5\")</code> и <code>str(5)</code>. <code>int(\"3.5\")</code> не преобразует такую строку прямо в целое число. Для дробного ввода используйте float.</p></details><section class=\"problem-area\"><h3 class=\"problem-title\">Практика: возраст и цена</h3><p>В начале задания уже есть ввод <code>age_text</code> и <code>price</code>. Преобразуйте <code>age_text</code> в целое число <code>age</code> и добавьте нужный вывод. После запуска ответьте 20 на Age: и 2.5 на Price:, каждый раз нажимая Enter. Next year — возраст через год, Double price — двойная цена, Age text — возраст в виде текста.</p><ol><li>С подсказкой <code>Age: </code> прочитайте строку в age_text. Преобразуйте её через int и сохраните в age.</li><li>С подсказкой <code>Price: </code> прочитайте значение, преобразуйте через float и сохраните в price. Примеры ввода: 20 и 2.5.</li><li>Выведите типы age_text, age и price по порядку.</li><li>Через запятую выведите <code>Next year:</code> и age + 1, затем <code>Double price:</code> и price * 2.</li><li>Наконец, с помощью <code>str(age)</code> и + выведите строку вида <code>Age text: 20</code>.</li></ol></section>"
    },
    "answer": {
      "ko": "age_text = input(\"Age: \")\nage = int(age_text)\nprice = float(input(\"Price: \"))\nprint(type(age_text))\nprint(type(age))\nprint(type(price))\nprint(\"Next year:\", age + 1)\nprint(\"Double price:\", price * 2)\nprint(\"Age text: \" + str(age))",
      "en": "age_text = input(\"Age: \")\nage = int(age_text)\nprice = float(input(\"Price: \"))\nprint(type(age_text))\nprint(type(age))\nprint(type(price))\nprint(\"Next year:\", age + 1)\nprint(\"Double price:\", price * 2)\nprint(\"Age text: \" + str(age))",
      "ru": "age_text = input(\"Age: \")\nage = int(age_text)\nprice = float(input(\"Price: \"))\nprint(type(age_text))\nprint(type(age))\nprint(type(price))\nprint(\"Next year:\", age + 1)\nprint(\"Double price:\", price * 2)\nprint(\"Age text: \" + str(age))"
    },
    "initialCode": {
      "ko": "num = int(input(\"Integer: \"))\nprint(num * 2)",
      "en": "num = int(input(\"Integer: \"))\nprint(num * 2)",
      "ru": "num = int(input(\"Integer: \"))\nprint(num * 2)"
    },
    "sampleInput": {
      "ko": "5",
      "en": "5",
      "ru": "5"
    },
    "expectedOutput": {
      "ko": "Integer: 5\n10",
      "en": "Integer: 5\n10",
      "ru": "Integer: 5\n10"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "정수와 소수",
          "en": "Integer and decimal",
          "ru": "Целое и дробное"
        },
        "input": {
          "ko": "20\n2.5",
          "en": "20\n2.5",
          "ru": "20\n2.5"
        },
        "output": {
          "ko": "Age: 20\nPrice: 2.5\n<class 'str'>\n<class 'int'>\n<class 'float'>\nNext year: 21\nDouble price: 5.0\nAge text: 20",
          "en": "Age: 20\nPrice: 2.5\n<class 'str'>\n<class 'int'>\n<class 'float'>\nNext year: 21\nDouble price: 5.0\nAge text: 20",
          "ru": "Age: 20\nPrice: 2.5\n<class 'str'>\n<class 'int'>\n<class 'float'>\nNext year: 21\nDouble price: 5.0\nAge text: 20"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 4,
    "sourceFile": "4.pdf",
    "sourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      26,
      27
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nage_text = input(\"Age: \")\n# TODO: age_text를 int로 바꾸어 age에 저장하세요.\nprice = float(input(\"Price: \"))\n# TODO: age_text, age, price의 type을 순서대로 출력하세요.\n# TODO: Next year:, Double price:, Age text: 출력을 미션대로 추가하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nage_text = input(\"Age: \")\n# TODO: Convert age_text with int and store it in age.\nprice = float(input(\"Price: \"))\n# TODO: Print the types of age_text, age, and price in that order.\n# TODO: Add the Next year:, Double price:, and Age text: output required by the mission.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nage_text = input(\"Age: \")\n# TODO: Преобразуйте age_text через int и сохраните в age.\nprice = float(input(\"Price: \"))\n# TODO: Выведите типы age_text, age и price в этом порядке.\n# TODO: Добавьте вывод Next year:, Double price: и Age text: по условиям задания.\n"
    },
    "starterHint": {
      "ko": "age_text와 price 입력은 준비했습니다. age 변환과 출력 부분을 직접 완성하세요. 먼저 나이 20, 가격 2.5로 연습합니다.",
      "en": "The age_text and price inputs are ready. Complete the age conversion and outputs. Start with age 20 and price 2.5.",
      "ru": "Ввод age_text и price готов. Допишите преобразование age и вывод. Сначала используйте возраст 20 и цену 2.5."
    }
  },
  {
    "id": "lesson-8",
    "menu": {
      "ko": "4주 · 계산기 프로젝트",
      "en": "W4 · Calculator Project",
      "ru": "W4 · Проект: Калькулятор"
    },
    "title": {
      "ko": "종합 실습: 나만의 사칙연산 계산기",
      "en": "Project: Your Own Math Calculator",
      "ru": "Проект: Ваш собственный калькулятор"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 입력 → 계산 → 출력</h3><p>계산기를 작은 세 단계로 나눕니다. <b>입력</b>으로 두 수를 받고, <b>계산</b>으로 결과를 만들고, <b>출력</b>으로 결과를 보여 줍니다. 앞에서 배운 도구를 함께 사용하는 복습입니다.</p></section><section class=\"lesson-section\"><h3>2. 한 줄씩 따라가기</h3><pre><code>a = int(input(&quot;First: &quot;))\nb = int(input(&quot;Second: &quot;))\nprint(&quot;Sum:&quot;, a + b)\nprint(&quot;Product:&quot;, a * b)</code></pre><pre class=\"example-output\">First: 10\nSecond: 5\nSum: 15\nProduct: 50</pre><ol><li>First: 질문에 10을 입력하고 Enter를 누릅니다. 첫 input이 읽은 글자를 int가 정수로 바꾸어 a에 저장합니다.</li><li>이어서 Second: 질문에 5를 입력하고 Enter를 누릅니다. 둘째 input과 int가 정수 5를 b에 저장합니다.</li><li><code>a + b</code>가 15를 계산하고 콤마 출력이 설명과 함께 보여 줍니다.</li><li><code>a * b</code>가 50을 계산합니다. 빼기와 나누기도 같은 위치에 기호를 바꾸어 쓸 수 있습니다.</li></ol></section><section class=\"lesson-section\"><h3>3. 실행하고 질문에 답하기</h3><ul><li>Colab에서는 계산기 코드 전체를 한 셀에 넣으세요. IDLE·VS Code에서는 한 <code>.py</code> 파일로 저장해 실행합니다.</li><li>First:에 10을 답하고 Enter를 누른 뒤, Second:에 5를 답하고 Enter를 누릅니다. 두 숫자를 한 번에 붙여 쓰지 마세요.</li><li>두 값은 정수여야 하며, 나누는 값인 두 번째 수는 0이 아니어야 합니다. 이번 미션은 이 조건을 지킨 입력으로 연습합니다.</li><li>다른 두 수를 시험하려면 코드 전체를 다시 실행하세요. 두 질문에 새로 답하면 a와 b의 값도 바뀝니다.</li></ul></section><section class=\"lesson-section\"><h3>4. 오류를 구분하기</h3><ul><li>10과 5를 더했는데 105가 보이면 문자열 <code>\"10\"</code>과 <code>\"5\"</code>를 연결했는지 확인하세요. 숫자로 바꾼 뒤 더해야 15가 됩니다.</li><li><code>ValueError</code>라면 apple이나 3.5 대신 정수를 입력했는지 봅니다.</li><li><code>ZeroDivisionError</code>라면 둘째 값을 0이 아닌 수로 바꾸세요. 7주차 try-except 기초에서는 숫자로 바꿀 수 없는 글자 입력의 처리만 배웁니다.</li><li><code>NameError</code>라면 a와 b를 먼저 저장했는지, 이름 철자가 같은지 확인하세요.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">실습 미션: 사칙연산 계산기 완성</h3><ol><li><code>First: </code>와 <code>Second: </code>라는 안내문으로 두 정수를 읽어 a와 b에 저장하세요.</li><li>더하기, 빼기, 곱하기, 나누기 순서로 결과를 출력하세요.</li><li>각 줄의 설명을 정확히 <code>a + b =</code>, <code>a - b =</code>, <code>a * b =</code>, <code>a / b =</code>로 적고 콤마 뒤에 계산식을 넣으세요.</li><li>한 번 실행해 First:에 10, Second:에 5를 답하세요. 코드 전체를 다시 실행해 이번에는 -6과 2를 차례로 답하고 결과를 비교하세요.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Input → calculate → output</h3><p>Split a calculator into three small steps. <b>Input</b> reads two numbers, <b>calculation</b> finds the results, and <b>output</b> shows them. This is a review that combines the tools you have learned.</p></section><section class=\"lesson-section\"><h3>2. Follow each line</h3><pre><code>a = int(input(&quot;First: &quot;))\nb = int(input(&quot;Second: &quot;))\nprint(&quot;Sum:&quot;, a + b)\nprint(&quot;Product:&quot;, a * b)</code></pre><pre class=\"example-output\">First: 10\nSecond: 5\nSum: 15\nProduct: 50</pre><ol><li>Answer 10 to First: and press Enter. The first input reads the text; int converts it to an integer stored in a.</li><li>Next, answer 5 to Second: and press Enter. The second input and int store the integer 5 in b.</li><li><code>a + b</code> calculates 15. Comma printing displays the label and result.</li><li><code>a * b</code> calculates 50. Use the subtraction and division symbols in the same way.</li></ol></section><section class=\"lesson-section\"><h3>3. Run, then answer the questions</h3><ul><li>In Colab, put the complete calculator in one cell. In IDLE or VS Code, save it as one <code>.py</code> file and run it.</li><li>Answer 10 to First: and press Enter; then answer 5 to Second: and press Enter. Do not type both numbers together.</li><li>Both values must be integers, and the second number, the divisor, must not be zero. Use inputs that meet these conditions for this mission.</li><li>To test two other numbers, run the complete code again. New answers to both questions replace the values in a and b.</li></ul></section><section class=\"lesson-section\"><h3>4. Identify the mistake</h3><ul><li>If adding inputs 10 and 5 displays 105, check whether you joined the strings <code>\"10\"</code> and <code>\"5\"</code>. Convert them to numbers before adding to get 15.</li><li>For <code>ValueError</code>, check that you entered integers, not apple or 3.5.</li><li>For <code>ZeroDivisionError</code>, change the second value to a nonzero number. Week 7’s basic try-except lesson only handles text that cannot be converted to a number.</li><li>For <code>NameError</code>, check that a and b were assigned first and spelled consistently.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Practice mission: finish the calculator</h3><ol><li>Read two integers with prompts <code>First: </code> and <code>Second: </code> and save them in a and b.</li><li>Print addition, subtraction, multiplication, and division results in that order.</li><li>Use the exact labels <code>a + b =</code>, <code>a - b =</code>, <code>a * b =</code>, and <code>a / b =</code>. Put the calculation after the comma.</li><li>On one run, answer 10 to First: and 5 to Second:. Run the complete code again, answer -6 and then 2, and compare the results.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Ввод → вычисление → вывод</h3><p>Разделим калькулятор на три небольших шага. <b>Ввод</b> получает два числа, <b>вычисление</b> находит результаты, <b>вывод</b> показывает их. Здесь мы повторяем изученные инструменты вместе.</p></section><section class=\"lesson-section\"><h3>2. Разбор по строкам</h3><pre><code>a = int(input(&quot;First: &quot;))\nb = int(input(&quot;Second: &quot;))\nprint(&quot;Sum:&quot;, a + b)\nprint(&quot;Product:&quot;, a * b)</code></pre><pre class=\"example-output\">First: 10\nSecond: 5\nSum: 15\nProduct: 50</pre><ol><li>На First: ответьте 10 и нажмите Enter. Первый input читает текст, а int преобразует его в целое число и сохраняет в a.</li><li>Затем на Second: ответьте 5 и нажмите Enter. Второй input и int сохраняют целое число 5 в b.</li><li><code>a + b</code> вычисляет 15. Вывод через запятую показывает подпись и результат.</li><li><code>a * b</code> вычисляет 50. Знаки вычитания и деления используются так же.</li></ol></section><section class=\"lesson-section\"><h3>3. Запустите и ответьте на вопросы</h3><ul><li>В Colab поместите весь калькулятор в одну ячейку. В IDLE или VS Code сохраните его как один файл <code>.py</code> и запустите.</li><li>На First: ответьте 10 и нажмите Enter, затем на Second: ответьте 5 и нажмите Enter. Не вводите оба числа вместе.</li><li>Оба числа должны быть целыми. Второе число, делитель, не должно быть нулём. В этом задании используйте ввод, который соответствует этим условиям.</li><li>Чтобы проверить другие два числа, запустите весь код снова. Новые ответы на оба вопроса заменят значения a и b.</li></ul></section><section class=\"lesson-section\"><h3>4. Как различать ошибки</h3><ul><li>Если сложение введённых 10 и 5 показывает 105, проверьте, не соединены ли строки <code>\"10\"</code> и <code>\"5\"</code>. Для результата 15 сначала преобразуйте их в числа.</li><li>При <code>ValueError</code> проверьте, что введены целые числа, а не apple или 3.5.</li><li>При <code>ZeroDivisionError</code> замените второе число ненулевым. На неделе 7 простой try-except обрабатывает только текст, который нельзя преобразовать в число.</li><li>При <code>NameError</code> проверьте присваивание a и b и одинаковое написание имён.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Практика: завершить калькулятор</h3><ol><li>Прочитайте два целых числа с подсказками <code>First: </code> и <code>Second: </code> в a и b.</li><li>По очереди выведите сложение, вычитание, умножение и деление.</li><li>Используйте точные подписи <code>a + b =</code>, <code>a - b =</code>, <code>a * b =</code>, <code>a / b =</code>. После запятой напишите выражение.</li><li>При первом запуске ответьте 10 на First: и 5 на Second:. Затем запустите весь код снова, ответьте по очереди -6 и 2 и сравните результаты.</li></ol></section>"
    },
    "answer": {
      "ko": "a = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(\"a + b =\", a + b)\nprint(\"a - b =\", a - b)\nprint(\"a * b =\", a * b)\nprint(\"a / b =\", a / b)",
      "en": "a = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(\"a + b =\", a + b)\nprint(\"a - b =\", a - b)\nprint(\"a * b =\", a * b)\nprint(\"a / b =\", a / b)",
      "ru": "a = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(\"a + b =\", a + b)\nprint(\"a - b =\", a - b)\nprint(\"a * b =\", a * b)\nprint(\"a / b =\", a / b)"
    },
    "initialCode": {
      "ko": "a = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(a + b)",
      "en": "a = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(a + b)",
      "ru": "a = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(a + b)"
    },
    "sampleInput": {
      "ko": "10\n5",
      "en": "10\n5",
      "ru": "10\n5"
    },
    "expectedOutput": {
      "ko": "First: 10\nSecond: 5\n15",
      "en": "First: 10\nSecond: 5\n15",
      "ru": "First: 10\nSecond: 5\n15"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "양수 두 개",
          "en": "Two positive numbers",
          "ru": "Два положительных числа"
        },
        "input": {
          "ko": "10\n5",
          "en": "10\n5",
          "ru": "10\n5"
        },
        "output": {
          "ko": "First: 10\nSecond: 5\na + b = 15\na - b = 5\na * b = 50\na / b = 2.0",
          "en": "First: 10\nSecond: 5\na + b = 15\na - b = 5\na * b = 50\na / b = 2.0",
          "ru": "First: 10\nSecond: 5\na + b = 15\na - b = 5\na * b = 50\na / b = 2.0"
        }
      },
      {
        "name": {
          "ko": "음수 포함",
          "en": "A negative number",
          "ru": "Отрицательное число"
        },
        "input": {
          "ko": "-6\n2",
          "en": "-6\n2",
          "ru": "-6\n2"
        },
        "output": {
          "ko": "First: -6\nSecond: 2\na + b = -4\na - b = -8\na * b = -12\na / b = -3.0",
          "en": "First: -6\nSecond: 2\na + b = -4\na - b = -8\na * b = -12\na / b = -3.0",
          "ru": "First: -6\nSecond: 2\na + b = -4\na - b = -8\na * b = -12\na / b = -3.0"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 4,
    "sourceFile": "4.pdf",
    "sourcePages": [
      25,
      26,
      27,
      28
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\na = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(\"a + b =\", a + b)\n# TODO: 빼기, 곱하기, 나누기 결과를 미션의 설명 문구와 함께 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\na = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(\"a + b =\", a + b)\n# TODO: Print subtraction, multiplication, and division with the labels in the mission.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\na = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(\"a + b =\", a + b)\n# TODO: Выведите вычитание, умножение и деление с подписями из задания.\n"
    },
    "starterHint": {
      "ko": "입력과 더하기는 완성했습니다. 출력 세 줄을 더 쓰세요. 나눗셈이 있으므로 둘째 수에는 0을 넣지 않습니다.",
      "en": "Inputs and addition are ready. Add three output lines. Because you will divide, do not use 0 as the second number.",
      "ru": "Ввод и сложение готовы. Добавьте ещё три строки вывода. Для деления второе число не должно быть 0."
    }
  },
  {
    "id": "lesson-9",
    "menu": {
      "ko": "5주 · 참과 거짓",
      "en": "W5 · True and False",
      "ru": "W5 · Истина и Ложь"
    },
    "title": {
      "ko": "컴퓨터의 대답: 예(True) 또는 아니오(False)",
      "en": "Computer's Answer: Yes (True) or No (False)",
      "ru": "Ответ компьютера: Да (True) или Нет (False)"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 참과 거짓은 두 가지 대답</h3><p>출석했나요?처럼 대답이 두 가지인 질문을 생각하세요. 파이썬의 <code>True</code>는 참, <code>False</code>는 거짓입니다. 두 값의 자료형 이름은 <code>bool</code>입니다. 비교한 결과를 화면에 확인하는 것이 목표입니다.</p></section><section class=\"lesson-section\"><h3>2. 비교 기호와 정확한 철자</h3><ul><li><code>&gt;</code>: 더 크다. <code>&lt;</code>: 더 작다. <code>&gt;=</code>: 이상. <code>&lt;=</code>: 이하.</li><li><code>True</code>, <code>False</code>는 첫 글자를 대문자로 쓰고 따옴표를 붙이지 않습니다.</li><li><code>\"False\"</code>는 글자입니다. <code>False</code>라는 논리 값과 종류가 다릅니다.</li></ul></section><section class=\"lesson-section\"><h3>3. 한 줄씩 따라가기</h3><pre><code>score = 70\nprint(score &gt;= 60)\nprint(score &lt; 60)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">True\nFalse</pre><p>첫 줄은 70을 저장합니다. 둘째 줄은 “70은 60 이상인가?”를 계산한 다음 그 대답을 출력합니다. 셋째 줄은 반대 질문이므로 False입니다. 숫자 70을 59로 바꾸면 두 대답의 순서가 바뀝니다.</p></section><section class=\"lesson-section\"><h3>4. 실수 고치기</h3><p><code>true</code>는 <code>True</code>와 다릅니다. 이름 오류가 나면 대소문자를 확인하세요. <code>print(\"10 &gt; 5\")</code>는 질문을 계산하지 않고 글자 그대로 보여줍니다. 비교하려면 비교식 전체를 따옴표로 감싸지 마세요.</p></section><details class=\"lesson-extra\"><summary>더 알아보기 · bool()로 값 자체의 참·거짓 보기</summary><pre><code>print(bool(0))\nprint(bool(1))\nprint(bool(-1))\nprint(bool(&quot;&quot;))\nprint(bool(&quot;hello&quot;))\nprint(bool(&quot;False&quot;))</code></pre><p><b>예상 결과</b></p><pre><code>False\nTrue\nTrue\nFalse\nTrue\nTrue</code></pre><p>숫자 0과 빈 문자열 <code>\"\"</code>은 False입니다. 0이 아닌 숫자와 비어 있지 않은 문자열은 True입니다. 글자 <code>\"False\"</code>도 비어 있지 않으므로 True입니다. <code>bool()</code>은 이 대답을 확인하는 도구입니다. 비교 기호가 없어도 값의 참·거짓을 검사할 수 있습니다.</p></details><div class=\"problem-area\"><h3 class=\"problem-title\">실습 미션 · 세 가지 질문</h3><ol><li>변수 a에 10, b에 5를 저장하세요.</li><li>a가 b보다 큰지, a가 b보다 작은지, a가 10 이상인지 순서대로 출력하세요. 각 비교를 print() 하나에 넣으세요.</li><li>실행 전에 True, False 중 무엇이 나올지 예상하세요. 입력값은 필요 없습니다.</li></ol></div>",
      "en": "<section class=\"lesson-section\"><h3>1. Two possible answers</h3><p>Think of a yes/no question, such as “Is the student present?” Python uses <code>True</code> for true and <code>False</code> for false. Their data type is <code>bool</code>. Our goal is to display the result of a comparison.</p></section><section class=\"lesson-section\"><h3>2. Comparison signs and spelling</h3><ul><li><code>&gt;</code>: greater than. <code>&lt;</code>: less than. <code>&gt;=</code>: at least. <code>&lt;=</code>: at most.</li><li>Write <code>True</code> and <code>False</code> with a capital first letter and no quotes.</li><li><code>\"False\"</code> is text. It has a different type from the Boolean value <code>False</code>.</li></ul></section><section class=\"lesson-section\"><h3>3. Read each line</h3><pre><code>score = 70\nprint(score &gt;= 60)\nprint(score &lt; 60)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">True\nFalse</pre><p>The first line stores 70. The second asks “Is 70 at least 60?” and prints the answer. The third asks the opposite question, so it prints False. Change 70 to 59 and the two answers switch.</p></section><section class=\"lesson-section\"><h3>4. Fix a mistake</h3><p><code>true</code> is different from <code>True</code>. Check capital letters if you get a name error. <code>print(\"10 &gt; 5\")</code> displays text without comparing. Do not put the whole comparison in quotes.</p></section><details class=\"lesson-extra\"><summary>Learn more · Check a value with bool()</summary><pre><code>print(bool(0))\nprint(bool(1))\nprint(bool(-1))\nprint(bool(&quot;&quot;))\nprint(bool(&quot;hello&quot;))\nprint(bool(&quot;False&quot;))</code></pre><p><b>Expected output</b></p><pre><code>False\nTrue\nTrue\nFalse\nTrue\nTrue</code></pre><p>The number 0 and the empty string <code>\"\"</code> are false. Nonzero numbers and nonempty strings are true. Even the text <code>\"False\"</code> is nonempty, so bool() returns True. A condition does not always need a comparison symbol.</p></details><div class=\"problem-area\"><h3 class=\"problem-title\">Practice · Three questions</h3><ol><li>Store 10 in a and 5 in b.</li><li>Print whether a is greater than b, less than b, and at least 10, in that order. Use one print() for each comparison.</li><li>Predict True or False before running. No input values are needed.</li></ol></div>",
      "ru": "<section class=\"lesson-section\"><h3>1. Два возможных ответа</h3><p>Представьте вопрос с ответом да или нет: «Студент присутствует?» В Python <code>True</code> означает истину, а <code>False</code> — ложь. Их тип называется <code>bool</code>. Наша цель — вывести результат сравнения.</p></section><section class=\"lesson-section\"><h3>2. Знаки сравнения и написание</h3><ul><li><code>&gt;</code>: больше. <code>&lt;</code>: меньше. <code>&gt;=</code>: не меньше. <code>&lt;=</code>: не больше.</li><li>Пишите <code>True</code> и <code>False</code> с большой первой буквы и без кавычек.</li><li><code>\"False\"</code> — текст. Его тип отличается от логического значения <code>False</code>.</li></ul></section><section class=\"lesson-section\"><h3>3. Разберём строки</h3><pre><code>score = 70\nprint(score &gt;= 60)\nprint(score &lt; 60)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">True\nFalse</pre><p>Первая строка сохраняет 70. Вторая спрашивает: «70 не меньше 60?» — и выводит ответ. Третья проверяет противоположное, поэтому выводит False. Замените 70 на 59: ответы поменяются местами.</p></section><section class=\"lesson-section\"><h3>4. Исправляем ошибки</h3><p><code>true</code> отличается от <code>True</code>. При ошибке имени проверьте регистр. <code>print(\"10 &gt; 5\")</code> выводит текст без сравнения. Не заключайте всё сравнение в кавычки.</p></section><details class=\"lesson-extra\"><summary>Подробнее · Проверка значения через bool()</summary><pre><code>print(bool(0))\nprint(bool(1))\nprint(bool(-1))\nprint(bool(&quot;&quot;))\nprint(bool(&quot;hello&quot;))\nprint(bool(&quot;False&quot;))</code></pre><p><b>Ожидаемый результат</b></p><pre><code>False\nTrue\nTrue\nFalse\nTrue\nTrue</code></pre><p>Число 0 и пустая строка <code>\"\"</code> дают False. Ненулевые числа и непустые строки дают True. Даже текст <code>\"False\"</code> непустой, поэтому bool() вернёт True. Условию не всегда нужен знак сравнения.</p></details><div class=\"problem-area\"><h3 class=\"problem-title\">Практика · Три вопроса</h3><ol><li>Сохраните 10 в a и 5 в b.</li><li>Выведите по порядку: a больше b, a меньше b, a не меньше 10. Для каждого сравнения используйте отдельный print().</li><li>Перед запуском предскажите True или False. Входные данные не нужны.</li></ol></div>"
    },
    "answer": {
      "ko": "a = 10\nb = 5\nprint(a > b)\nprint(a < b)\nprint(a >= 10)",
      "en": "a = 10\nb = 5\nprint(a > b)\nprint(a < b)\nprint(a >= 10)",
      "ru": "a = 10\nb = 5\nprint(a > b)\nprint(a < b)\nprint(a >= 10)"
    },
    "initialCode": {
      "ko": "score = 70\nprint(score >= 60)\nprint(score < 60)",
      "en": "score = 70\nprint(score >= 60)\nprint(score < 60)",
      "ru": "score = 70\nprint(score >= 60)\nprint(score < 60)"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "True\nFalse",
      "en": "True\nFalse",
      "ru": "True\nFalse"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "세 가지 비교",
          "en": "Three comparisons",
          "ru": "Три сравнения"
        },
        "input": {
          "ko": "",
          "en": "",
          "ru": ""
        },
        "output": {
          "ko": "True\nFalse\nTrue",
          "en": "True\nFalse\nTrue",
          "ru": "True\nFalse\nTrue"
        }
      }
    ],
    "needsInput": false,
    "sourceWeek": 5,
    "sourceFile": "5.pdf",
    "sourcePages": [
      11,
      12,
      30,
      31
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\na = 10\nb = 5\nprint(a > b)\n# TODO: a < b와 a >= 10도 각각 print()로 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\na = 10\nb = 5\nprint(a > b)\n# TODO: Also print a < b and a >= 10 using one print() for each.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\na = 10\nb = 5\nprint(a > b)\n# TODO: Также выведите a < b и a >= 10, используя отдельный print() для каждого.\n"
    },
    "starterHint": {
      "ko": "첫 비교만 있습니다. 비교 두 개를 추가하고 실행 전에 세 결과를 예상하세요. 입력은 필요 없습니다.",
      "en": "Only the first comparison is ready. Add two more and predict all three results before running. No input is needed.",
      "ru": "Готово только первое сравнение. Добавьте ещё два и предскажите три результата до запуска. Ввод не нужен."
    }
  },
  {
    "id": "lesson-10",
    "menu": {
      "ko": "5주 · 비교 연산자",
      "en": "W5 · Comparison",
      "ru": "W5 · Сравнение"
    },
    "title": {
      "ko": "\"넣기(=)\"와 \"비교하기(==)\"의 차이",
      "en": "Difference: \"Assigning (=)\" vs \"Comparing (==)\"",
      "ru": "Разница: «Присваивание (=)» против «Сравнения (==)»"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 저장 명령과 질문 구별하기</h3><p>번호표에 90을 적는 행동과 “번호가 90인가요?”라는 질문은 다릅니다. <code>=</code>는 오른쪽 값을 왼쪽 이름에 저장합니다. <code>==</code>는 두 값이 같은지 비교하여 True 또는 False를 만듭니다.</p></section><section class=\"lesson-section\"><h3>2. 비교 기호 여섯 개</h3><ul><li><code>==</code> 같다 / <code>!=</code> 다르다</li><li><code>&gt;</code> 크다 / <code>&lt;</code> 작다</li><li><code>&gt;=</code> 이상 / <code>&lt;=</code> 이하. =가 있으면 경계값도 포함합니다.</li></ul></section><section class=\"lesson-section\"><h3>3. 실행 순서 확인</h3><pre><code>score = 80\nprint(score == 90)\nprint(score != 90)\nprint(score &gt;= 80)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">False\nTrue\nTrue</pre><p>먼저 score에 80을 저장합니다. 80과 90은 다르므로 첫 비교는 False, 둘째 비교는 True입니다. 마지막은 80도 “80 이상”에 포함되므로 True입니다.</p></section><section class=\"lesson-section\"><h3>4. 자주 하는 실수</h3><p><code>print(score = 90)</code>로 같음을 비교하지 마세요. <code>print(score == 90)</code>을 사용합니다. <code>=&gt;</code>나 <code>=&lt;</code>도 잘못된 순서입니다. 숫자 90과 문자열 \"90\"은 같은 값으로 비교되지 않으므로 입력 숫자는 먼저 int()로 바꿉니다.</p></section><div class=\"problem-area\"><h3 class=\"problem-title\">실습 미션 · 경계값 90</h3><ol><li>score에 숫자 90을 저장하세요.</li><li>score == 90, score != 90, score > 90, score >= 90의 결과를 차례대로 출력하세요.</li><li>마지막 두 결과를 비교하세요. 90은 90보다 크지는 않지만, 90 이상에는 포함됩니다. 그래서 <code>&gt;</code>와 <code>&gt;=</code>의 결과가 다릅니다. 이 미션에는 input()이 필요 없습니다.</li></ol></div>",
      "en": "<section class=\"lesson-section\"><h3>1. Store a value or ask a question</h3><p>Writing 90 on a label is different from asking “Is the number 90?” <code>=</code> stores the value on the right under the name on the left. <code>==</code> compares two values and produces True or False.</p></section><section class=\"lesson-section\"><h3>2. Six comparison signs</h3><ul><li><code>==</code> equal / <code>!=</code> not equal</li><li><code>&gt;</code> greater / <code>&lt;</code> less</li><li><code>&gt;=</code> at least / <code>&lt;=</code> at most. The = includes the boundary value.</li></ul></section><section class=\"lesson-section\"><h3>3. Follow the execution</h3><pre><code>score = 80\nprint(score == 90)\nprint(score != 90)\nprint(score &gt;= 80)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">False\nTrue\nTrue</pre><p>First store 80 in score. Since 80 and 90 differ, the first comparison is False and the second is True. The last is True because “at least 80” includes 80.</p></section><section class=\"lesson-section\"><h3>4. Common mistakes</h3><p>Do not use <code>print(score = 90)</code> to test equality. Use <code>print(score == 90)</code>. <code>=&gt;</code> and <code>=&lt;</code> have the wrong order. Number 90 and text \"90\" do not compare equal, so convert numeric input with int() first.</p></section><div class=\"problem-area\"><h3 class=\"problem-title\">Practice · Boundary value 90</h3><ol><li>Store the number 90 in score.</li><li>Print score == 90, score != 90, score > 90, and score >= 90 in that order.</li><li>Compare the last two results. 90 is not greater than 90, but it is at least 90. That is why <code>&gt;</code> and <code>&gt;=</code> give different results. This mission does not need input().</li></ol></div>",
      "ru": "<section class=\"lesson-section\"><h3>1. Сохранить значение или задать вопрос</h3><p>Написать 90 на этикетке и спросить «Это число 90?» — разные действия. <code>=</code> сохраняет значение справа под именем слева. <code>==</code> сравнивает два значения и даёт True или False.</p></section><section class=\"lesson-section\"><h3>2. Шесть знаков сравнения</h3><ul><li><code>==</code> равно / <code>!=</code> не равно</li><li><code>&gt;</code> больше / <code>&lt;</code> меньше</li><li><code>&gt;=</code> не меньше / <code>&lt;=</code> не больше. Знак = включает граничное значение.</li></ul></section><section class=\"lesson-section\"><h3>3. Порядок выполнения</h3><pre><code>score = 80\nprint(score == 90)\nprint(score != 90)\nprint(score &gt;= 80)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">False\nTrue\nTrue</pre><p>Сначала score получает 80. Числа 80 и 90 различаются: первое сравнение даёт False, второе — True. Последнее даёт True, потому что «не меньше 80» включает само 80.</p></section><section class=\"lesson-section\"><h3>4. Частые ошибки</h3><p>Не используйте <code>print(score = 90)</code> для проверки равенства. Нужно <code>print(score == 90)</code>. В <code>=&gt;</code> и <code>=&lt;</code> неверный порядок знаков. Число 90 и строка \"90\" не равны, поэтому числовой ввод сначала преобразуйте через int().</p></section><div class=\"problem-area\"><h3 class=\"problem-title\">Практика · Граница 90</h3><ol><li>Сохраните число 90 в score.</li><li>Выведите по порядку результаты score == 90, score != 90, score > 90 и score >= 90.</li><li>Сравните последние два результата. 90 не больше 90, но не меньше 90. Поэтому <code>&gt;</code> и <code>&gt;=</code> дают разные результаты. В этом задании input() не нужен.</li></ol></div>"
    },
    "answer": {
      "ko": "score = 90\nprint(score == 90)\nprint(score != 90)\nprint(score > 90)\nprint(score >= 90)",
      "en": "score = 90\nprint(score == 90)\nprint(score != 90)\nprint(score > 90)\nprint(score >= 90)",
      "ru": "score = 90\nprint(score == 90)\nprint(score != 90)\nprint(score > 90)\nprint(score >= 90)"
    },
    "initialCode": {
      "ko": "score = 80\nprint(score == 90)\nprint(score != 90)\nprint(score >= 80)",
      "en": "score = 80\nprint(score == 90)\nprint(score != 90)\nprint(score >= 80)",
      "ru": "score = 80\nprint(score == 90)\nprint(score != 90)\nprint(score >= 80)"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "False\nTrue\nTrue",
      "en": "False\nTrue\nTrue",
      "ru": "False\nTrue\nTrue"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "같음과 이상",
          "en": "Equal and at least",
          "ru": "Равно и не меньше"
        },
        "input": {
          "ko": "",
          "en": "",
          "ru": ""
        },
        "output": {
          "ko": "True\nFalse\nFalse\nTrue",
          "en": "True\nFalse\nFalse\nTrue",
          "ru": "True\nFalse\nFalse\nTrue"
        }
      }
    ],
    "needsInput": false,
    "sourceWeek": 5,
    "sourceFile": "5.pdf",
    "sourcePages": [
      13,
      14,
      15,
      16
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nscore = 90\nprint(score == 90)\n# TODO: score != 90, score > 90, score >= 90을 차례대로 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nscore = 90\nprint(score == 90)\n# TODO: Print score != 90, score > 90, and score >= 90 in that order.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nscore = 90\nprint(score == 90)\n# TODO: Выведите score != 90, score > 90 и score >= 90 в этом порядке.\n"
    },
    "starterHint": {
      "ko": "같은지 비교하는 첫 줄만 있습니다. 다른 비교 세 줄을 추가하세요. 입력은 필요 없습니다.",
      "en": "Only the equality comparison is ready. Add the other three comparison lines. No input is needed.",
      "ru": "Готово только сравнение на равенство. Добавьте ещё три сравнения. Ввод не нужен."
    }
  },
  {
    "id": "lesson-11",
    "menu": {
      "ko": "5주 · if 조건문",
      "en": "W5 · if Statement",
      "ru": "W5 · Условие if"
    },
    "title": {
      "ko": "조건의 문: if 문과 들여쓰기",
      "en": "The Gate of Conditions: if and Indentation",
      "ru": "Условие if и отступы"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 조건이 맞을 때만 실행</h3><p>학생증이 있으면 도서관 문이 열리는 상황을 생각하세요. <code>if</code>는 조건을 검사하는 문입니다. 조건이 True이면 안쪽 코드를 실행하고, False이면 그 묶음을 건너뜁니다.</p></section><section class=\"lesson-section\"><h3>2. 콜론과 공백 4칸</h3><ul><li>첫 줄은 <code>if 조건:</code>입니다. 끝에 콜론 : 을 씁니다.</li><li>조건이 맞을 때 할 일은 다음 줄 앞에 공백 4칸을 넣어 적습니다. 편집기가 자동으로 들여쓰기를 넣었다면 4칸을 더 넣지 마세요. 같은 묶음의 줄은 같은 위치에서 시작합니다.</li><li>들여쓰기를 끝내고 왼쪽으로 돌아온 줄은 조건문 바깥입니다.</li></ul></section><section class=\"lesson-section\"><h3>3. 안쪽과 바깥쪽 비교</h3><pre><code>score = 60\nif score &gt;= 60:\n    print(&quot;Pass&quot;)\nprint(&quot;Checked&quot;)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">Pass\nChecked</pre><p>score가 60이므로 조건은 True입니다. 안쪽 Pass가 나오고, 바깥쪽 Checked가 나옵니다. score를 59로 바꾸면 Pass는 건너뛰지만 Checked는 나옵니다. 출력이 없다고 항상 오류는 아닙니다.</p></section><section class=\"lesson-section\"><h3>4. 오류를 만나면</h3><p>SyntaxError이면 if 줄 끝의 : 를 먼저 확인하세요. IndentationError이면 print 줄 앞의 공백을 확인하세요. 조건에 <code>=</code>를 쓰면 저장 명령이 되어 잘못됩니다. 같음 질문에는 <code>==</code>를 쓰세요.</p></section><div class=\"problem-area\"><h3 class=\"problem-title\">실습 미션 · 점수 확인</h3><p><code>input()</code>의 괄호 안에 안내문이 없으므로 질문 글자가 보이지 않아도 입력을 기다릴 수 있습니다. Colab에서는 셀 아래의 입력칸, IDLE에서는 Shell, VS Code에서는 Terminal을 확인하세요. Pass는 통과, Checked는 확인 완료라는 출력 문구입니다.</p><ol><li>미션 시작 코드의 <code>score = int(input())</code>는 점수 입력을 받습니다. 이 줄 아래, Checked 출력 위에 조건문을 추가하세요. 코드를 실행한 뒤 입력을 기다리는 곳에 정수 점수를 적고 Enter를 누릅니다. 이 문제에서는 정수만 사용합니다.</li><li>60 이상이면 Pass를 출력하세요. 그 다음에는 점수와 상관없이 Checked를 출력하세요.</li><li>먼저 코드를 실행하고 60을 입력하세요. 다시 실행한 뒤 59를 입력하세요. 어느 줄이 출력되는지 비교하세요.</li></ol></div>",
      "en": "<section class=\"lesson-section\"><h3>1. Run only when a condition is true</h3><p>Think of a library door that opens when you have a student card. <code>if</code> checks a condition. If it is True, the indented code runs. If it is False, Python skips that block.</p></section><section class=\"lesson-section\"><h3>2. Colon and four spaces</h3><ul><li>The first line is <code>if condition:</code>. Finish it with a colon :.</li><li>Write the action on the next line with four spaces at the start. If the editor already added the indentation, do not add four more spaces. Lines in the same block start at the same position.</li><li>A line that returns to the left edge is outside the if block.</li></ul></section><section class=\"lesson-section\"><h3>3. Inside and outside the block</h3><pre><code>score = 60\nif score &gt;= 60:\n    print(&quot;Pass&quot;)\nprint(&quot;Checked&quot;)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">Pass\nChecked</pre><p>With score equal to 60, the condition is True. The inner line prints Pass, then the outer line prints Checked. With 59, Pass is skipped but Checked still appears. No output does not always mean an error.</p></section><section class=\"lesson-section\"><h3>4. If you get an error</h3><p>For SyntaxError, first check the colon at the end of if. For IndentationError, check spaces before print. <code>=</code> is an assignment and is not an equality condition. Use <code>==</code> to ask whether values are equal.</p></section><div class=\"problem-area\"><h3 class=\"problem-title\">Practice · Check a score</h3><p>This <code>input()</code> has no prompt inside its parentheses, so it can wait without displaying a question. Look below the cell in Colab, in Shell in IDLE, or in Terminal in VS Code. Pass means the score passed the condition; Checked means the check has finished.</p><ol><li>The mission starter reads the score with <code>score = int(input())</code>. Add the condition below that line and above the Checked output. Run the code, type an integer score where input waits, and press Enter. Use integers for this task.</li><li>Print Pass if the score is at least 60. Then print Checked regardless of the score.</li><li>Run once with 60. Run again with 59. Compare which lines are printed.</li></ol></div>",
      "ru": "<section class=\"lesson-section\"><h3>1. Выполнить только при верном условии</h3><p>Представьте дверь библиотеки, которая открывается при наличии студенческого билета. <code>if</code> проверяет условие. При True выполняется код с отступом; при False этот блок пропускается.</p></section><section class=\"lesson-section\"><h3>2. Двоеточие и четыре пробела</h3><ul><li>Первая строка — <code>if условие:</code>. В конце поставьте двоеточие :.</li><li>Действие запишите на следующей строке с четырьмя пробелами в начале. Если редактор уже добавил отступ, не добавляйте ещё четыре пробела. Строки одного блока начинаются на одной позиции.</li><li>Строка, возвращённая к левому краю, находится вне блока if.</li></ul></section><section class=\"lesson-section\"><h3>3. Внутри и снаружи блока</h3><pre><code>score = 60\nif score &gt;= 60:\n    print(&quot;Pass&quot;)\nprint(&quot;Checked&quot;)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">Pass\nChecked</pre><p>При score равном 60 условие истинно. Внутренняя строка выводит Pass, затем внешняя — Checked. При 59 строка Pass пропускается, но Checked остаётся. Отсутствие вывода не всегда означает ошибку.</p></section><section class=\"lesson-section\"><h3>4. Если появилась ошибка</h3><p>При SyntaxError сначала проверьте двоеточие в конце if. При IndentationError проверьте пробелы перед print. <code>=</code> присваивает значение, а не проверяет равенство. Для равенства используйте <code>==</code>.</p></section><div class=\"problem-area\"><h3 class=\"problem-title\">Практика · Проверка балла</h3><p>В скобках этого <code>input()</code> нет подсказки, поэтому программа может ждать ввод без текста вопроса. В Colab смотрите под ячейкой, в IDLE — в Shell, в VS Code — в Terminal. Pass означает «пройдено», Checked — «проверка завершена».</p><ol><li>Начало задания принимает балл через <code>score = int(input())</code>. Добавьте условие ниже этой строки и выше вывода Checked. Запустите код, введите целый балл в месте ожидания ввода и нажмите Enter. В этом задании используйте целые числа.</li><li>Если балл не меньше 60, выведите Pass. Затем независимо от балла выведите Checked.</li><li>Сначала запустите код и введите 60. Запустите ещё раз и введите 59. Сравните, какие строки выводятся.</li></ol></div>"
    },
    "answer": {
      "ko": "score = int(input())\nif score >= 60:\n    print(\"Pass\")\nprint(\"Checked\")",
      "en": "score = int(input())\nif score >= 60:\n    print(\"Pass\")\nprint(\"Checked\")",
      "ru": "score = int(input())\nif score >= 60:\n    print(\"Pass\")\nprint(\"Checked\")"
    },
    "initialCode": {
      "ko": "score = 60\nif score >= 60:\n    print(\"Pass\")\nprint(\"Checked\")",
      "en": "score = 60\nif score >= 60:\n    print(\"Pass\")\nprint(\"Checked\")",
      "ru": "score = 60\nif score >= 60:\n    print(\"Pass\")\nprint(\"Checked\")"
    },
    "sampleInput": {
      "ko": "60",
      "en": "60",
      "ru": "60"
    },
    "expectedOutput": {
      "ko": "Pass\nChecked",
      "en": "Pass\nChecked",
      "ru": "Pass\nChecked"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "경계값 60",
          "en": "Boundary 60",
          "ru": "Граница 60"
        },
        "input": {
          "ko": "60",
          "en": "60",
          "ru": "60"
        },
        "output": {
          "ko": "60\nPass\nChecked",
          "en": "60\nPass\nChecked",
          "ru": "60\nPass\nChecked"
        }
      },
      {
        "name": {
          "ko": "경계 바로 아래",
          "en": "Just below the boundary",
          "ru": "Чуть ниже границы"
        },
        "input": {
          "ko": "59",
          "en": "59",
          "ru": "59"
        },
        "output": {
          "ko": "59\nChecked",
          "en": "59\nChecked",
          "ru": "59\nChecked"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 5,
    "sourceFile": "5.pdf",
    "sourcePages": [
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nscore = int(input())\n# TODO: 이 위치에 if를 써서 60 이상일 때만 Pass를 출력하세요.\nprint(\"Checked\")\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nscore = int(input())\n# TODO: Insert an if here to print Pass only for a score of 60 or higher.\nprint(\"Checked\")\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nscore = int(input())\n# TODO: Здесь добавьте if, чтобы выводить Pass только при балле 60 или выше.\nprint(\"Checked\")\n"
    },
    "starterHint": {
      "ko": "지금은 점수와 관계없이 Checked만 나옵니다. 그 위에 if를 추가하세요. 빈 입력 칸이나 커서가 보이면 점수를 적고 Enter를 누릅니다.",
      "en": "This currently prints only Checked for any score. Add the if above it. When an empty input field or cursor waits, type the score and press Enter.",
      "ru": "Пока для любого балла выводится только Checked. Добавьте if перед этой строкой. В пустом поле ввода или у ожидающего курсора введите балл и нажмите Enter."
    }
  },
  {
    "id": "lesson-12",
    "menu": {
      "ko": "5주 · 커피 알고리즘",
      "en": "W5 · Coffee Project",
      "ru": "W5 · Проект Кофе"
    },
    "title": {
      "ko": "갈림길: if-else로 선택하기",
      "en": "The Fork in the Road: Choosing with if-else",
      "ru": "Развилка: выбор с помощью if-else"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 두 갈래 중 한 길 선택</h3><p>커피가 3000원입니다. 돈이 충분하면 구매하고, 부족하면 구매하지 못합니다. <code>if</code> 아래는 조건이 True일 때, <code>else</code> 아래는 False일 때 실행합니다. 두 길 중 한 길만 선택합니다.</p></section><section class=\"lesson-section\"><h3>2. else에는 조건을 붙이지 않기</h3><p><code>if money &gt;= 3000:</code>과 <code>else:</code>를 같은 위치에 놓으세요. 각각의 아래 줄을 공백 4칸 들여씁니다. <code>else money &lt; 3000:</code>처럼 적지 않습니다. else는 이미 “앞 조건이 거짓인 나머지 경우”라는 뜻입니다.</p></section><section class=\"lesson-section\"><h3>3. 경계값 따라가기</h3><pre><code>money = 2000\nif money &gt;= 3000:\n    print(&quot;Coffee&quot;)\nelse:\n    print(&quot;No coffee&quot;)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">No coffee</pre><p>2000은 3000 이상이 아니므로 else로 갑니다. 정확히 3000이면 &gt;=에 =가 있으므로 Coffee가 나옵니다. <code>&gt;</code>만 쓰면 3000이 제외됩니다.</p></section><section class=\"lesson-section\"><h3>4. 입력과 오류 확인</h3><p><code>input()</code>은 글자를 돌려줍니다. 돈을 숫자와 비교하려면 <code>int(input())</code>으로 정수로 바꾸세요. 코드를 실행한 뒤 입력을 기다리는 곳에 숫자를 쓰고 Enter를 누릅니다. 안내문이 없는 input()은 질문 글자가 표시되지 않아도 입력을 기다립니다. 글자 입력의 처리 방법은 7주차 try-except에서 배우므로 지금은 정수만 사용합니다.</p></section><div class=\"problem-area\"><h3 class=\"problem-title\">실습 미션 · 커피 구매 판단</h3><p>Coffee는 구매 가능, No coffee는 구매할 돈이 부족하다는 뜻으로 정한 출력 문구입니다.</p><ol><li>미션 시작 코드에 <code>money = int(input())</code>가 준비되어 있습니다. 이 줄 아래에 구매를 판단하는 조건문을 추가하세요.</li><li>3000 이상이면 Coffee, 그렇지 않으면 No coffee를 출력하세요. if와 else를 모두 사용하세요.</li><li>코드 전체를 세 번 실행하세요. 첫 실행에는 2999, 두 번째에는 3000, 세 번째에는 5000을 입력하고 각각 Enter를 눌러 결과를 비교하세요.</li></ol></div>",
      "en": "<section class=\"lesson-section\"><h3>1. Choose one of two paths</h3><p>Coffee costs 3000 won. With enough money you can buy it; otherwise you cannot. The if block runs when its condition is True. The else block runs when it is False. Exactly one of these two paths is chosen.</p></section><section class=\"lesson-section\"><h3>2. Do not add a condition to else</h3><p>Align <code>if money &gt;= 3000:</code> and <code>else:</code>. Indent the lines beneath each by four spaces. Do not write <code>else money &lt; 3000:</code>. else already means the remaining case where the condition was False.</p></section><section class=\"lesson-section\"><h3>3. Follow the boundary</h3><pre><code>money = 2000\nif money &gt;= 3000:\n    print(&quot;Coffee&quot;)\nelse:\n    print(&quot;No coffee&quot;)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">No coffee</pre><p>2000 is not at least 3000, so execution goes to else. Exactly 3000 produces Coffee because &gt;= includes equality. Using only <code>&gt;</code> would exclude 3000.</p></section><section class=\"lesson-section\"><h3>4. Check input and errors</h3><p><code>input()</code> returns text. Use <code>int(input())</code> to convert it to an integer before comparing money with a number. Run the code, type the number where it waits for input, and press Enter. An input() with no prompt still waits even though no question text appears. Handling non-numeric input is taught in Week 7’s try-except lesson; use integers here.</p></section><div class=\"problem-area\"><h3 class=\"problem-title\">Practice · Can you buy coffee?</h3><p>Coffee is our label for enough money; No coffee means there is not enough.</p><ol><li>The mission starter already has <code>money = int(input())</code>. Add the purchase decision below this line.</li><li>Print Coffee for at least 3000, otherwise No coffee. Use both if and else.</li><li>Run the complete code three times. Enter 2999 on the first run, 3000 on the second, and 5000 on the third. Press Enter and compare the results each time.</li></ol></div>",
      "ru": "<section class=\"lesson-section\"><h3>1. Выберите один из двух путей</h3><p>Кофе стоит 3000 вон. Если денег хватает, его можно купить; иначе нельзя. Блок if выполняется при True, а else — при False. Выбирается ровно один из двух путей.</p></section><section class=\"lesson-section\"><h3>2. После else условие не нужно</h3><p>Выровняйте <code>if money &gt;= 3000:</code> и <code>else:</code>. Строки под каждым из них сдвиньте на четыре пробела. Не пишите <code>else money &lt; 3000:</code>. else уже означает оставшийся случай, когда условие ложно.</p></section><section class=\"lesson-section\"><h3>3. Проверим границу</h3><pre><code>money = 2000\nif money &gt;= 3000:\n    print(&quot;Coffee&quot;)\nelse:\n    print(&quot;No coffee&quot;)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">No coffee</pre><p>2000 меньше 3000, поэтому выполняется else. Ровно 3000 даёт Coffee: &gt;= включает равенство. Если использовать только <code>&gt;</code>, 3000 будет исключено.</p></section><section class=\"lesson-section\"><h3>4. Ввод и ошибки</h3><p><code>input()</code> возвращает текст. Преобразуйте его в целое число через <code>int(input())</code>, прежде чем сравнивать сумму с числом. Запустите код, введите число в месте ожидания ввода и нажмите Enter. input() без подсказки тоже ждёт ответ, хотя текст вопроса не появляется. Обработку текстового ввода изучим в try-except на неделе 7; здесь используйте целые числа.</p></section><div class=\"problem-area\"><h3 class=\"problem-title\">Практика · Можно ли купить кофе?</h3><p>Coffee — наша подпись для достаточной суммы, No coffee — денег не хватает.</p><ol><li>В начале задания уже есть <code>money = int(input())</code>. Добавьте условие покупки ниже этой строки.</li><li>Выведите Coffee для суммы не меньше 3000, иначе No coffee. Используйте if и else.</li><li>Запустите весь код три раза. В первый раз введите 2999, во второй — 3000, в третий — 5000. Каждый раз нажимайте Enter и сравнивайте результаты.</li></ol></div>"
    },
    "answer": {
      "ko": "money = int(input())\nif money >= 3000:\n    print(\"Coffee\")\nelse:\n    print(\"No coffee\")",
      "en": "money = int(input())\nif money >= 3000:\n    print(\"Coffee\")\nelse:\n    print(\"No coffee\")",
      "ru": "money = int(input())\nif money >= 3000:\n    print(\"Coffee\")\nelse:\n    print(\"No coffee\")"
    },
    "initialCode": {
      "ko": "money = 2000\nif money >= 3000:\n    print(\"Coffee\")\nelse:\n    print(\"No coffee\")",
      "en": "money = 2000\nif money >= 3000:\n    print(\"Coffee\")\nelse:\n    print(\"No coffee\")",
      "ru": "money = 2000\nif money >= 3000:\n    print(\"Coffee\")\nelse:\n    print(\"No coffee\")"
    },
    "sampleInput": {
      "ko": "3000",
      "en": "3000",
      "ru": "3000"
    },
    "expectedOutput": {
      "ko": "No coffee",
      "en": "No coffee",
      "ru": "No coffee"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "부족한 돈",
          "en": "Not enough",
          "ru": "Недостаточно"
        },
        "input": {
          "ko": "2999",
          "en": "2999",
          "ru": "2999"
        },
        "output": {
          "ko": "2999\nNo coffee",
          "en": "2999\nNo coffee",
          "ru": "2999\nNo coffee"
        }
      },
      {
        "name": {
          "ko": "정확한 가격",
          "en": "Exact price",
          "ru": "Точная цена"
        },
        "input": {
          "ko": "3000",
          "en": "3000",
          "ru": "3000"
        },
        "output": {
          "ko": "3000\nCoffee",
          "en": "3000\nCoffee",
          "ru": "3000\nCoffee"
        }
      },
      {
        "name": {
          "ko": "충분한 돈",
          "en": "Enough money",
          "ru": "Достаточно"
        },
        "input": {
          "ko": "5000",
          "en": "5000",
          "ru": "5000"
        },
        "output": {
          "ko": "5000\nCoffee",
          "en": "5000\nCoffee",
          "ru": "5000\nCoffee"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 5,
    "sourceFile": "5.pdf",
    "sourcePages": [
      23,
      24,
      25,
      26,
      27,
      28,
      29
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nmoney = int(input())\n# TODO: if와 else로 3000 이상이면 Coffee, 아니면 No coffee를 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nmoney = int(input())\n# TODO: Use if and else to print Coffee for 3000 or more, otherwise No coffee.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nmoney = int(input())\n# TODO: Через if и else выведите Coffee для суммы от 3000, иначе No coffee.\n"
    },
    "starterHint": {
      "ko": "돈을 읽는 첫 줄만 있습니다. if-else를 추가하세요. 안내 글자 없는 입력 칸에 2999를 적고 Enter를 누른 뒤, 다시 실행하여 3000도 확인합니다.",
      "en": "Only the first input line is ready. Add if-else. Enter 2999 in the input area without a prompt, press Enter, then run again with 3000.",
      "ru": "Готова только первая строка ввода. Добавьте if-else. Введите 2999 в поле без вопроса и нажмите Enter, затем запустите ещё раз с 3000."
    }
  },
  {
    "id": "lesson-13",
    "menu": {
      "ko": "6주 · elif",
      "en": "W6 · elif",
      "ru": "W6 · elif"
    },
    "title": {
      "ko": "조건이 여러 개일 때: elif",
      "en": "Multiple Conditions: elif",
      "ru": "Несколько условий: elif"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 선택지가 세 개 이상일 때</h3><p>성적표에는 A, B, C처럼 여러 등급이 있습니다. <code>elif</code>는 “앞의 조건이 아니면, 다음 조건을 확인해”라는 뜻입니다. 위에서 아래로 확인합니다. 처음 True가 된 조건 아래 코드만 실행하고 나머지는 건너뜁니다. 조건이 모두 False이면 else 아래 코드를 실행합니다.</p></section><section class=\"lesson-section\"><h3>2. 순서가 결과를 바꿉니다</h3><pre><code>score = 85\nif score &gt;= 90:\n    print(&quot;A&quot;)\nelif score &gt;= 80:\n    print(&quot;B&quot;)\nelse:\n    print(&quot;Below B&quot;)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">B</pre><p>85는 90 이상이 아니므로 다음 조건으로 갑니다. 80 이상이므로 B를 출력하고 이 묶음은 끝납니다. 이 예제는 “이상” 조건이므로 높은 기준부터 적습니다. 60 이상을 먼저 확인하면 95도 그 조건에 맞아 뒤의 조건을 확인하지 않습니다. 모든 조건문을 무조건 큰 값부터 적는 규칙은 아닙니다.</p></section><section class=\"lesson-section\"><h3>3. 문법과 실수 확인</h3><ul><li>if, elif, else는 같은 위치에 씁니다. 각 줄 끝에는 : 을 넣고 안쪽은 공백 4칸입니다.</li><li>elif에는 조건이 필요하고, else에는 조건이 없습니다. elif를 else 뒤에 쓰지 마세요.</li><li>if를 여러 번 따로 쓰면 각 if를 따로 검사하여 여러 곳의 코드가 실행될 수 있습니다. 한 등급만 고를 때는 if–elif–else 한 묶음을 쓰세요.</li></ul></section><div class=\"problem-area\"><h3 class=\"problem-title\">실습 미션 · 성적 등급</h3><p>위 예시는 <code>score = 85</code>로 정해진 값을 씁니다. 미션에서는 <code>int(input())</code>으로 직접 받습니다. 선택한 실습 도구에서 실행한 뒤 빈 입력 칸이나 커서가 기다리면 점수만 쓰고 Enter를 누르세요. 괄호 안에 안내 문구가 없는 input()은 질문 글자를 보여 주지 않습니다.</p><ol><li>0~100 사이의 정수를 입력받아 score에 저장하세요. 이번 문제에서는 이 범위의 숫자만 사용합니다.</li><li>90 이상 A, 80 이상 B, 70 이상 C, 60 이상 D, 나머지 F를 출력하세요. 한 글자만 출력합니다.</li><li>첫 실행은 85로 B를 확인하세요. 그다음 90과 89, 80과 79, 70과 69, 60과 59를 한 번 실행할 때 하나씩 시험해 경계 양쪽을 비교하세요.</li></ol></div>",
      "en": "<section class=\"lesson-section\"><h3>1. More than two choices</h3><p>A report card can have several grades: A, B, C, and more. <code>elif</code> means “If the earlier condition did not match, check this one.” Python checks from top to bottom. It runs the code under the first True condition, then skips the other choices. If all conditions are False, it runs the code under else.</p></section><section class=\"lesson-section\"><h3>2. Order changes the result</h3><pre><code>score = 85\nif score &gt;= 90:\n    print(&quot;A&quot;)\nelif score &gt;= 80:\n    print(&quot;B&quot;)\nelse:\n    print(&quot;Below B&quot;)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">B</pre><p>85 is not at least 90, so Python checks the next condition. It is at least 80, so B is printed and the remaining choices are skipped. In this example the conditions use “at least,” so compare with the larger numbers first. If 60 came first, even 95 would match it. This is not a rule to sort all conditions from large to small.</p></section><section class=\"lesson-section\"><h3>3. Syntax and mistakes</h3><ul><li>Write if, elif and else at the same left position. Put : at the end of each of these lines. Start the code under each line with four spaces.</li><li>elif needs a condition; else does not. Do not put elif after else.</li><li>With several separate if lines, Python checks each if. More than one result may be printed. To choose one grade, use if–elif–else together.</li></ul></section><div class=\"problem-area\"><h3 class=\"problem-title\">Practice · Letter grades</h3><p>The example uses the fixed value <code>score = 85</code>. The mission reads a value with <code>int(input())</code>. Run it in your practice tool, type only the score when the empty input field or cursor waits, then press Enter. With no message inside its parentheses, input() waits without displaying a question.</p><ol><li>Read an integer from 0 to 100 into score. Use only numbers in this range for this task.</li><li>Print A for at least 90, B for at least 80, C for at least 70, D for at least 60, otherwise F. Print only one grade.</li><li>First run with 85 and check for B. Then test one score per run: 90 and 89, 80 and 79, 70 and 69, and 60 and 59. Compare both sides of each boundary.</li></ol></div>",
      "ru": "<section class=\"lesson-section\"><h3>1. Когда вариантов больше двух</h3><p>В ведомости несколько оценок: A, B, C и другие. <code>elif</code> означает: «Если предыдущее условие не подошло, проверь это». Python проверяет условия сверху вниз. Выполняется код под первым условием со значением True, а остальные варианты пропускаются. Если все условия имеют значение False, выполняется код под else.</p></section><section class=\"lesson-section\"><h3>2. Порядок влияет на результат</h3><pre><code>score = 85\nif score &gt;= 90:\n    print(&quot;A&quot;)\nelif score &gt;= 80:\n    print(&quot;B&quot;)\nelse:\n    print(&quot;Below B&quot;)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">B</pre><p>85 меньше 90, поэтому проверяется следующее условие. Оно не меньше 80: выводится B, а остальные варианты пропускаются. Здесь условия означают «не меньше», поэтому сначала сравниваем с большими числами. Если сначала поставить 60, туда попадёт даже 95. Это не общее правило сортировки всех условий.</p></section><section class=\"lesson-section\"><h3>3. Синтаксис и ошибки</h3><ul><li>Напишите if, elif и else с одной и той же позиции слева. В конце каждой такой строки поставьте :. Код под ней начинайте с четырёх пробелов.</li><li>У elif должно быть условие, у else — нет. Не ставьте elif после else.</li><li>Если написать несколько отдельных if, Python проверит каждый из них. Может выполниться код нескольких условий. Чтобы выбрать одну оценку, используйте if–elif–else вместе.</li></ul></section><div class=\"problem-area\"><h3 class=\"problem-title\">Практика · Буквенные оценки</h3><p>В примере задано <code>score = 85</code>. В задании число читается через <code>int(input())</code>. Запустите код в выбранной среде: когда появится пустое поле ввода или ожидающий курсор, введите только балл и нажмите Enter. У input() без текста в скобках нет видимого вопроса.</p><ol><li>Прочитайте целое число от 0 до 100 в score. В этом задании используйте только числа в этом диапазоне.</li><li>Выведите A для 90 и выше, B для 80 и выше, C для 70 и выше, D для 60 и выше, иначе F. Выведите только одну оценку.</li><li>Сначала введите 85 и проверьте B. Затем проверяйте по одному числу за запуск: 90 и 89, 80 и 79, 70 и 69, 60 и 59. Сравните обе стороны каждой границы.</li></ol></div>"
    },
    "answer": {
      "ko": "score = int(input())\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelif score >= 60:\n    print(\"D\")\nelse:\n    print(\"F\")",
      "en": "score = int(input())\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelif score >= 60:\n    print(\"D\")\nelse:\n    print(\"F\")",
      "ru": "score = int(input())\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelif score >= 60:\n    print(\"D\")\nelse:\n    print(\"F\")"
    },
    "initialCode": {
      "ko": "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"Below B\")",
      "en": "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"Below B\")",
      "ru": "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"Below B\")"
    },
    "sampleInput": {
      "ko": "80",
      "en": "80",
      "ru": "80"
    },
    "expectedOutput": {
      "ko": "B",
      "en": "B",
      "ru": "B"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "점수 100",
          "en": "Score 100",
          "ru": "Балл 100"
        },
        "input": {
          "ko": "100",
          "en": "100",
          "ru": "100"
        },
        "output": {
          "ko": "100\nA",
          "en": "100\nA",
          "ru": "100\nA"
        }
      },
      {
        "name": {
          "ko": "점수 90",
          "en": "Score 90",
          "ru": "Балл 90"
        },
        "input": {
          "ko": "90",
          "en": "90",
          "ru": "90"
        },
        "output": {
          "ko": "90\nA",
          "en": "90\nA",
          "ru": "90\nA"
        }
      },
      {
        "name": {
          "ko": "점수 89",
          "en": "Score 89",
          "ru": "Балл 89"
        },
        "input": {
          "ko": "89",
          "en": "89",
          "ru": "89"
        },
        "output": {
          "ko": "89\nB",
          "en": "89\nB",
          "ru": "89\nB"
        }
      },
      {
        "name": {
          "ko": "점수 80",
          "en": "Score 80",
          "ru": "Балл 80"
        },
        "input": {
          "ko": "80",
          "en": "80",
          "ru": "80"
        },
        "output": {
          "ko": "80\nB",
          "en": "80\nB",
          "ru": "80\nB"
        }
      },
      {
        "name": {
          "ko": "점수 79",
          "en": "Score 79",
          "ru": "Балл 79"
        },
        "input": {
          "ko": "79",
          "en": "79",
          "ru": "79"
        },
        "output": {
          "ko": "79\nC",
          "en": "79\nC",
          "ru": "79\nC"
        }
      },
      {
        "name": {
          "ko": "점수 70",
          "en": "Score 70",
          "ru": "Балл 70"
        },
        "input": {
          "ko": "70",
          "en": "70",
          "ru": "70"
        },
        "output": {
          "ko": "70\nC",
          "en": "70\nC",
          "ru": "70\nC"
        }
      },
      {
        "name": {
          "ko": "점수 69",
          "en": "Score 69",
          "ru": "Балл 69"
        },
        "input": {
          "ko": "69",
          "en": "69",
          "ru": "69"
        },
        "output": {
          "ko": "69\nD",
          "en": "69\nD",
          "ru": "69\nD"
        }
      },
      {
        "name": {
          "ko": "점수 60",
          "en": "Score 60",
          "ru": "Балл 60"
        },
        "input": {
          "ko": "60",
          "en": "60",
          "ru": "60"
        },
        "output": {
          "ko": "60\nD",
          "en": "60\nD",
          "ru": "60\nD"
        }
      },
      {
        "name": {
          "ko": "점수 59",
          "en": "Score 59",
          "ru": "Балл 59"
        },
        "input": {
          "ko": "59",
          "en": "59",
          "ru": "59"
        },
        "output": {
          "ko": "59\nF",
          "en": "59\nF",
          "ru": "59\nF"
        }
      },
      {
        "name": {
          "ko": "점수 0",
          "en": "Score 0",
          "ru": "Балл 0"
        },
        "input": {
          "ko": "0",
          "en": "0",
          "ru": "0"
        },
        "output": {
          "ko": "0\nF",
          "en": "0\nF",
          "ru": "0\nF"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 6,
    "sourceFile": "6.pdf",
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nscore = int(input())\n# TODO: if, elif, else 한 묶음으로 A, B, C, D, F 중 하나만 출력하세요.\n# TODO: 미션의 기준 90, 80, 70, 60을 높은 값부터 확인하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nscore = int(input())\n# TODO: Use one if, elif, else chain to print only one of A, B, C, D, or F.\n# TODO: Check the mission thresholds 90, 80, 70, 60 from highest to lowest.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nscore = int(input())\n# TODO: Используйте одну цепочку if, elif, else, чтобы вывести только одну оценку: A, B, C, D или F.\n# TODO: Проверяйте границы задания 90, 80, 70, 60 от большей к меньшей.\n"
    },
    "starterHint": {
      "ko": "입력 한 줄만 준비했습니다. 등급 판단을 추가하세요. 질문 문장이 없는 입력 칸에서 0~100 정수를 적고 Enter를 누릅니다.",
      "en": "Only the input line is ready. Add the grade decisions. Enter an integer from 0 to 100 in the input area without a prompt and press Enter.",
      "ru": "Готова только строка ввода. Добавьте выбор оценки. В поле без вопроса введите целое число от 0 до 100 и нажмите Enter."
    }
  },
  {
    "id": "lesson-14",
    "menu": {
      "ko": "6주 · and / or",
      "en": "W6 · and / or",
      "ru": "W6 · and / or"
    },
    "title": {
      "ko": "조건 결합하기: and와 or",
      "en": "Combining Conditions: and and or",
      "ru": "Комбинирование условий: and и or"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 두 조건을 함께 확인하기</h3><p>점수와 출석을 함께 확인할 수 있습니다. <code>and</code>는 두 조건이 모두 참이어야 통과합니다. <code>or</code>는 적어도 하나가 참이면 통과합니다. 영어 단어를 코드에도 그대로 소문자로 씁니다.</p></section><section class=\"lesson-section\"><h3>2. 두 조건을 표로 확인하기</h3><table><thead><tr><th>첫 조건</th><th>둘째 조건</th><th>and 결과</th><th>or 결과</th></tr></thead><tbody><tr><td>True</td><td>True</td><td>True</td><td>True</td></tr><tr><td>True</td><td>False</td><td>False</td><td>True</td></tr><tr><td>False</td><td>True</td><td>False</td><td>True</td></tr><tr><td>False</td><td>False</td><td>False</td><td>False</td></tr></tbody></table><details class=\"lesson-extra\"><summary>헷갈릴 때 보기 · +와 논리 연산</summary><p>and와 or는 덧셈 기호 +로 바꾸지 않습니다. <code>True + True</code>는 논리식이 아니라 숫자 덧셈으로 2가 됩니다.</p></details></section><section class=\"lesson-section\"><h3>3. 비교식 두 개를 연결</h3><pre><code>score = 70\nattendance = 79\nprint(score &gt;= 70 and attendance &gt;= 80)\nprint(score &gt;= 70 or attendance &gt;= 80)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">False\nTrue</pre><p>점수 조건은 True지만 출석 조건은 False입니다. 그래서 and는 False, or는 True입니다. <code>attendance &gt;= 80</code>처럼 각 부분을 완전한 질문으로 적으세요. <code>score == 70 or 80</code>은 “70 또는 80과 같다”라는 뜻이 아닙니다.</p></section><section class=\"lesson-section\"><h3>4. 합친 조건도 if에 사용</h3><p><code>both_ok = score &gt;= 70 and attendance &gt;= 80</code>처럼 비교 결과를 변수에 저장할 수 있습니다. <code>if both_ok:</code>는 저장된 True/False를 검사합니다. &amp;나 | 기호로 바꾸지 말고 배운 and, or를 사용하세요.</p></section><details class=\"lesson-extra\"><summary>선택 보충 · 여러 조건을 소괄호로 묶기</summary><section class=\"lesson-section\"><h3>소괄호로 조건 묶기</h3><pre><code>score = 70\nattendance = 80\nprint((score &gt;= 70 and attendance &gt;= 80) or score &gt;= 90)</code></pre><p><b>예상 결과</b></p><pre><code>True</code></pre><p>뜻은 “점수 70 이상이면서 출석 80 이상, 또는 점수만 90 이상”입니다. 파이썬은 and를 or보다 먼저 계산하므로 이 예제는 소괄호를 빼도 결과가 같습니다. 소괄호는 의도를 읽기 쉽게 보여 줍니다. 조건을 묶을 때 <code>( )</code>를 쓰세요. <code>[ ]</code>로 바꾸면 다른 뜻이 됩니다.</p></section></details><div class=\"problem-area\"><h3 class=\"problem-title\">실습 미션 · 두 조건의 차이</h3><p><b>출력 단어:</b> Both = 두 조건 모두 · Either = 적어도 하나 · Pass = 통과 · Retry = 다시 시도. 단어 뒤의 True/False를 위 표와 연결해 보세요.</p><ol><li>선택한 실습 도구에서 실행하세요. 첫 input()이 기다리면 점수를 쓰고 Enter, 두 번째가 기다리면 출석률을 쓰고 Enter를 누릅니다. 둘 다 int(input())으로 읽으며 질문 글자는 나오지 않습니다.</li><li>점수 70 이상과 출석률 80 이상의 and 결과를 Both: 뒤에, or 결과를 Either: 뒤에 출력하세요. print()의 콤마를 사용하세요.</li><li>두 조건을 모두 만족하면 Pass, 아니면 Retry를 출력하세요. 점수·출석률을 70·80, 70·79, 69·80, 69·79로 바꾸어 각각 다시 실행하세요.</li></ol></div>",
      "en": "<section class=\"lesson-section\"><h3>1. Combine two conditions</h3><p>You may need to check both score and attendance. <code>and</code> requires both conditions to be true. <code>or</code> requires at least one to be true. Write these Python words in lowercase.</p></section><section class=\"lesson-section\"><h3>2. Check both conditions in a table</h3><table><thead><tr><th>First condition</th><th>Second condition</th><th>and result</th><th>or result</th></tr></thead><tbody><tr><td>True</td><td>True</td><td>True</td><td>True</td></tr><tr><td>True</td><td>False</td><td>False</td><td>True</td></tr><tr><td>False</td><td>True</td><td>False</td><td>True</td></tr><tr><td>False</td><td>False</td><td>False</td><td>False</td></tr></tbody></table><details class=\"lesson-extra\"><summary>If you are unsure · + and logic</summary><p>Do not replace and or or with +. <code>True + True</code> is numeric addition and gives 2.</p></details></section><section class=\"lesson-section\"><h3>3. Join two complete comparisons</h3><pre><code>score = 70\nattendance = 79\nprint(score &gt;= 70 and attendance &gt;= 80)\nprint(score &gt;= 70 or attendance &gt;= 80)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">False\nTrue</pre><p>The score condition is True, but the attendance condition is False. Thus and is False and or is True. Write a complete question on each side, such as <code>attendance &gt;= 80</code>. <code>score == 70 or 80</code> does not mean “equal to 70 or 80.”</p></section><section class=\"lesson-section\"><h3>4. Use the combined condition in if</h3><p>You can store a comparison result: <code>both_ok = score &gt;= 70 and attendance &gt;= 80</code>. <code>if both_ok:</code> checks the saved True/False value. Use and and or here, not the symbols &amp; or |.</p></section><details class=\"lesson-extra\"><summary>Optional help · Group several conditions</summary><section class=\"lesson-section\"><h3>Group conditions with parentheses</h3><pre><code>score = 70\nattendance = 80\nprint((score &gt;= 70 and attendance &gt;= 80) or score &gt;= 90)</code></pre><p><b>Expected output</b></p><pre><code>True</code></pre><p>This means: score at least 70 AND attendance at least 80, OR score alone at least 90. Python evaluates and before or, so removing these parentheses gives the same result here. The parentheses make the intended groups easier to read. Use <code>( )</code>, not <code>[ ]</code>, to group conditions.</p></section></details><div class=\"problem-area\"><h3 class=\"problem-title\">Practice · Compare the two rules</h3><p><b>Output labels:</b> Both means both conditions; Either means at least one. Pass means the two-condition rule is met; Retry means it is not. Match True/False to the table.</p><ol><li>Run in your practice tool. At the first waiting input(), type the score and press Enter. At the second, type the attendance percentage and press Enter. Read both with int(input()); these calls have no question text.</li><li>Print the and result of score at least 70 and attendance at least 80 after Both:. Print the or result after Either:. Use commas in print().</li><li>Print Pass when both conditions hold, otherwise Retry. Run four separate tests with score/attendance pairs 70/80, 70/79, 69/80, and 69/79.</li></ol></div>",
      "ru": "<section class=\"lesson-section\"><h3>1. Соединяем два условия</h3><p>Иногда нужно проверить и балл, и посещаемость. Для <code>and</code> оба условия должны быть истинны. Для <code>or</code> достаточно хотя бы одного. Эти слова Python пишутся строчными буквами.</p></section><section class=\"lesson-section\"><h3>2. Проверяем два условия по таблице</h3><table><thead><tr><th>Первое условие</th><th>Второе условие</th><th>Результат and</th><th>Результат or</th></tr></thead><tbody><tr><td>True</td><td>True</td><td>True</td><td>True</td></tr><tr><td>True</td><td>False</td><td>False</td><td>True</td></tr><tr><td>False</td><td>True</td><td>False</td><td>True</td></tr><tr><td>False</td><td>False</td><td>False</td><td>False</td></tr></tbody></table><details class=\"lesson-extra\"><summary>Если возник вопрос · + и логика</summary><p>Не заменяйте and и or знаком +. <code>True + True</code> — числовое сложение, результат равен 2.</p></details></section><section class=\"lesson-section\"><h3>3. Соедините два полных сравнения</h3><pre><code>score = 70\nattendance = 79\nprint(score &gt;= 70 and attendance &gt;= 80)\nprint(score &gt;= 70 or attendance &gt;= 80)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">False\nTrue</pre><p>Условие балла истинно, а посещаемости — ложно. Поэтому and даёт False, а or — True. Каждая часть должна быть полным сравнением, например <code>attendance &gt;= 80</code>. Запись <code>score == 70 or 80</code> не означает «равно 70 или 80».</p></section><section class=\"lesson-section\"><h3>4. Используйте общее условие в if</h3><p>Можно сохранить результат: <code>both_ok = score &gt;= 70 and attendance &gt;= 80</code>. <code>if both_ok:</code> проверяет сохранённое значение True/False. Здесь используйте and и or, а не символы &amp; или |.</p></section><details class=\"lesson-extra\"><summary>Дополнительно · Группировка условий</summary><section class=\"lesson-section\"><h3>Группируем условия круглыми скобками</h3><pre><code>score = 70\nattendance = 80\nprint((score &gt;= 70 and attendance &gt;= 80) or score &gt;= 90)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>True</code></pre><p>Это значит: балл не ниже 70 И посещаемость не ниже 80, ИЛИ только балл не ниже 90. Python выполняет and раньше or, поэтому без этих скобок результат здесь такой же. Скобки помогают прочитать смысл. Для группировки условий используйте <code>( )</code>, а не <code>[ ]</code>.</p></section></details><div class=\"problem-area\"><h3 class=\"problem-title\">Практика · Сравните два правила</h3><p><b>Слова в выводе:</b> Both — оба условия · Either — хотя бы одно · Pass — пройдено · Retry — попробуйте снова. Сопоставьте True/False с таблицей.</p><ol><li>Запустите код в выбранной среде. При первом ожидании input() введите балл и нажмите Enter, при втором — процент посещаемости и Enter. Обе строки читаются через int(input()) без текста вопроса.</li><li>Выведите результат and для балла не меньше 70 и посещаемости не меньше 80 после Both:. Результат or выведите после Either:. Используйте запятые в print().</li><li>При выполнении обоих условий выведите Pass, иначе Retry. Сделайте четыре отдельных запуска с парами балл/посещаемость: 70/80, 70/79, 69/80 и 69/79.</li></ol></div>"
    },
    "answer": {
      "ko": "score = int(input())\nattendance = int(input())\nboth_ok = score >= 70 and attendance >= 80\neither_ok = score >= 70 or attendance >= 80\nprint(\"Both:\", both_ok)\nprint(\"Either:\", either_ok)\nif both_ok:\n    print(\"Pass\")\nelse:\n    print(\"Retry\")",
      "en": "score = int(input())\nattendance = int(input())\nboth_ok = score >= 70 and attendance >= 80\neither_ok = score >= 70 or attendance >= 80\nprint(\"Both:\", both_ok)\nprint(\"Either:\", either_ok)\nif both_ok:\n    print(\"Pass\")\nelse:\n    print(\"Retry\")",
      "ru": "score = int(input())\nattendance = int(input())\nboth_ok = score >= 70 and attendance >= 80\neither_ok = score >= 70 or attendance >= 80\nprint(\"Both:\", both_ok)\nprint(\"Either:\", either_ok)\nif both_ok:\n    print(\"Pass\")\nelse:\n    print(\"Retry\")"
    },
    "initialCode": {
      "ko": "score = 70\nattendance = 79\nprint(score >= 70 and attendance >= 80)\nprint(score >= 70 or attendance >= 80)",
      "en": "score = 70\nattendance = 79\nprint(score >= 70 and attendance >= 80)\nprint(score >= 70 or attendance >= 80)",
      "ru": "score = 70\nattendance = 79\nprint(score >= 70 and attendance >= 80)\nprint(score >= 70 or attendance >= 80)"
    },
    "sampleInput": {
      "ko": "70\n80",
      "en": "70\n80",
      "ru": "70\n80"
    },
    "expectedOutput": {
      "ko": "False\nTrue",
      "en": "False\nTrue",
      "ru": "False\nTrue"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "둘 다 만족",
          "en": "Both true",
          "ru": "Оба истинны"
        },
        "input": {
          "ko": "70\n80",
          "en": "70\n80",
          "ru": "70\n80"
        },
        "output": {
          "ko": "70\n80\nBoth: True\nEither: True\nPass",
          "en": "70\n80\nBoth: True\nEither: True\nPass",
          "ru": "70\n80\nBoth: True\nEither: True\nPass"
        }
      },
      {
        "name": {
          "ko": "점수만 만족",
          "en": "Only score true",
          "ru": "Только балл"
        },
        "input": {
          "ko": "70\n79",
          "en": "70\n79",
          "ru": "70\n79"
        },
        "output": {
          "ko": "70\n79\nBoth: False\nEither: True\nRetry",
          "en": "70\n79\nBoth: False\nEither: True\nRetry",
          "ru": "70\n79\nBoth: False\nEither: True\nRetry"
        }
      },
      {
        "name": {
          "ko": "출석만 만족",
          "en": "Only attendance true",
          "ru": "Только посещаемость"
        },
        "input": {
          "ko": "69\n80",
          "en": "69\n80",
          "ru": "69\n80"
        },
        "output": {
          "ko": "69\n80\nBoth: False\nEither: True\nRetry",
          "en": "69\n80\nBoth: False\nEither: True\nRetry",
          "ru": "69\n80\nBoth: False\nEither: True\nRetry"
        }
      },
      {
        "name": {
          "ko": "둘 다 미달",
          "en": "Both false",
          "ru": "Оба ложны"
        },
        "input": {
          "ko": "69\n79",
          "en": "69\n79",
          "ru": "69\n79"
        },
        "output": {
          "ko": "69\n79\nBoth: False\nEither: False\nRetry",
          "en": "69\n79\nBoth: False\nEither: False\nRetry",
          "ru": "69\n79\nBoth: False\nEither: False\nRetry"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 6,
    "sourceFile": "6.pdf",
    "sourcePages": [
      20,
      21,
      22,
      27,
      28
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nscore = int(input())\nattendance = int(input())\n# TODO: 점수 70 이상과 출석 80 이상의 and 결과는 both_ok, or 결과는 either_ok에 저장하세요.\n# TODO: Both:와 Either: 결과를 출력하고 both_ok에 따라 Pass 또는 Retry를 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nscore = int(input())\nattendance = int(input())\n# TODO: Store the and result for score >= 70 and attendance >= 80 in both_ok; store the or result in either_ok.\n# TODO: Print Both: and Either: results, then print Pass or Retry based on both_ok.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nscore = int(input())\nattendance = int(input())\n# TODO: Сохраните результат and для score >= 70 и attendance >= 80 в both_ok, а результат or — в either_ok.\n# TODO: Выведите результаты Both: и Either:, затем Pass или Retry в зависимости от both_ok.\n"
    },
    "starterHint": {
      "ko": "점수와 출석을 받는 두 줄입니다. 점수 → Enter, 출석 → Enter 순서로 입력합니다. 비교 결과 저장과 출력을 완성하세요.",
      "en": "These two lines read score and attendance. Enter score, press Enter, then attendance and Enter. Complete the comparisons and output.",
      "ru": "Эти две строки принимают балл и посещаемость. Введите балл и Enter, затем посещаемость и Enter. Допишите сравнения и вывод."
    }
  },
  {
    "id": "lesson-15",
    "menu": {
      "ko": "6주 · 중첩 if",
      "en": "W6 · Nested if",
      "ru": "W6 · Вложенный if"
    },
    "title": {
      "ko": "조건 속의 조건: 중첩 if",
      "en": "Conditions within Conditions: Nested if",
      "ru": "Условие внутри условия: Вложенный if"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 큰 조건 안에서 작은 조건 확인</h3><p>먼저 시험에 합격했는지 확인하고, 합격한 사람 중에서 A등급을 찾는 상황입니다. <b>중첩 if</b>는 if의 안쪽에 또 다른 if를 넣는 구조입니다. 바깥 조건이 False이면 안쪽 조건은 검사하지 않습니다.</p></section><section class=\"lesson-section\"><h3>2. 공백 0칸 · 4칸 · 8칸</h3><pre><code>score = 95\nif score &gt;= 60:\n    print(&quot;Pass&quot;)\n    if score &gt;= 90:\n        print(&quot;A&quot;)\nelse:\n    print(&quot;Retry&quot;)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">Pass\nA</pre><ul><li>바깥 if와 else는 왼쪽에서 시작합니다(0칸).</li><li>Pass 출력과 안쪽 if는 공백 4칸으로 시작합니다.</li><li>안쪽 if가 실행할 A 출력은 공백 8칸입니다.</li></ul></section><section class=\"lesson-section\"><h3>3. 세 가지 길을 따라가기</h3><p>95 → 60 이상이므로 Pass → 90 이상이므로 A. 70 → Pass만 출력. 59 → 바깥 조건이 False라서 Retry만 출력. else를 안쪽 if와 나란히 쓰면 다른 조건에 연결되어 뜻이 달라집니다.</p></section><section class=\"lesson-section\"><h3>4. 내 코드 확인 순서</h3><p>먼저 콜론을 확인하고, 다음으로 각 줄의 앞 공백을 세세요. 코드를 오른쪽으로 많이 밀었다고 더 중요한 코드가 되는 것은 아닙니다. 들여쓰기는 “어느 조건 안에 속하는가”를 나타냅니다.</p></section><section class=\"lesson-section\"><h3>강의 종합 · 0~100 점수 검사 후 등급</h3><pre><code>score = int(input(&quot;Score: &quot;))\nif score &lt; 0 or score &gt; 100:\n    print(&quot;Invalid score&quot;)\nelse:\n    if score &gt;= 90:\n        print(&quot;A&quot;)\n    elif score &gt;= 80:\n        print(&quot;B&quot;)\n    elif score &gt;= 70:\n        print(&quot;C&quot;)\n    elif score &gt;= 60:\n        print(&quot;D&quot;)\n    else:\n        print(&quot;F&quot;)</code></pre><p><b>예상 결과</b></p><pre><code>Score: 65\nD</code></pre><p>바깥 if는 점수가 범위를 벗어나는지 확인합니다. 0~100이면 else 안의 등급 계산으로 갑니다. 안쪽 if·elif·else는 모두 공백 4칸으로 나란히 씁니다. 각 출력은 공백 8칸입니다. 65점도 빠뜨리지 않고 D로 처리합니다. 이번 단계는 정수만 입력합니다.</p></section><section class=\"problem-area\"><h3>미션 · 범위를 확인하는 성적표</h3><p>처음의 95점 예시는 들여쓰기 연습입니다. 이번 미션은 그다음 종합 예시처럼 <b>범위 확인 → 등급 선택</b> 순서입니다. 실행 후 <code>Score:</code>가 나오면 점수만 입력하고 Enter를 누르세요. <code>Score:</code> 글자는 답에 쓰지 않습니다.</p><ol><li>Score: 로 정수 점수 한 줄을 읽으세요.</li><li>0보다 작거나 100보다 크면 Invalid score를 출력하세요.</li><li>그 밖의 경우 바깥 else 안에서 90 이상 A, 80 이상 B, 70 이상 C, 60 이상 D, 나머지 F를 출력하세요.</li><li>안쪽 if·elif·else의 시작 위치를 맞추세요. -1, 0, 59, 60, 89, 90, 100, 101을 한 번 실행할 때 하나씩 시험하세요. 60은 D, 90과 100은 A, -1과 101은 Invalid score입니다.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Check a second condition inside the first</h3><p>First check whether a student passed. Among those who passed, check for an A. A <b>nested if</b> is an if inside another if. If the outer condition is False, the inner condition is not checked.</p></section><section class=\"lesson-section\"><h3>2. Zero, four, and eight spaces</h3><pre><code>score = 95\nif score &gt;= 60:\n    print(&quot;Pass&quot;)\n    if score &gt;= 90:\n        print(&quot;A&quot;)\nelse:\n    print(&quot;Retry&quot;)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">Pass\nA</pre><ul><li>The outer if and else begin at the left edge (zero spaces).</li><li>The Pass line and the inner if start with four spaces.</li><li>The A line inside the inner if starts with eight spaces.</li></ul></section><section class=\"lesson-section\"><h3>3. Trace three paths</h3><p>95 → at least 60, so Pass → at least 90, so A. 70 → only Pass. 59 → the outer condition is False, so only Retry. Aligning else with the inner if would connect it to a different condition and change the meaning.</p></section><section class=\"lesson-section\"><h3>4. Check your code in order</h3><p>Check colons first, then count the leading spaces. More indentation does not mean more important code. It shows which condition a line belongs to.</p></section><section class=\"lesson-section\"><h3>Lecture example · Check 0–100, then grade</h3><pre><code>score = int(input(&quot;Score: &quot;))\nif score &lt; 0 or score &gt; 100:\n    print(&quot;Invalid score&quot;)\nelse:\n    if score &gt;= 90:\n        print(&quot;A&quot;)\n    elif score &gt;= 80:\n        print(&quot;B&quot;)\n    elif score &gt;= 70:\n        print(&quot;C&quot;)\n    elif score &gt;= 60:\n        print(&quot;D&quot;)\n    else:\n        print(&quot;F&quot;)</code></pre><p><b>Expected output</b></p><pre><code>Score: 65\nD</code></pre><p>The outer if rejects scores outside the range. Scores from 0 to 100 reach the grade checks inside else. All inner if, elif and else lines align at four spaces. Their print lines have eight spaces. A score of 65 is included and gives D. Use integer input at this stage.</p></section><section class=\"problem-area\"><h3>Mission · A grade with a range check</h3><p>The first 95-point example teaches indentation. This mission follows the later complete example: <b>check the range → choose a grade</b>. After running, answer <code>Score:</code> with only the number and press Enter. Do not type the prompt itself.</p><ol><li>Read one integer with Score: .</li><li>For less than 0 or greater than 100, print Invalid score.</li><li>Otherwise, inside the outer else, print A for 90+, B for 80+, C for 70+, D for 60+, or F.</li><li>Align the inner if, elif and else. Try -1, 0, 59, 60, 89, 90, 100, and 101 in separate runs. 60 gives D; 90 and 100 give A; -1 and 101 give Invalid score.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Второе условие внутри первого</h3><p>Сначала проверим, сдал ли студент экзамен. Среди сдавших найдём оценку A. <b>Вложенный if</b> — это if внутри другого if. Если внешнее условие ложно, внутреннее не проверяется.</p></section><section class=\"lesson-section\"><h3>2. Ноль, четыре и восемь пробелов</h3><pre><code>score = 95\nif score &gt;= 60:\n    print(&quot;Pass&quot;)\n    if score &gt;= 90:\n        print(&quot;A&quot;)\nelse:\n    print(&quot;Retry&quot;)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">Pass\nA</pre><ul><li>Внешние if и else начинаются слева (ноль пробелов).</li><li>Строка Pass и внутренний if начинаются с четырёх пробелов.</li><li>Строка A внутри внутреннего if начинается с восьми пробелов.</li></ul></section><section class=\"lesson-section\"><h3>3. Проследим три пути</h3><p>95 → не меньше 60, значит Pass → не меньше 90, значит A. 70 → только Pass. 59 → внешнее условие ложно, значит только Retry. Если выровнять else с внутренним if, он будет относиться к другому условию и смысл изменится.</p></section><section class=\"lesson-section\"><h3>4. Как проверить код</h3><p>Сначала проверьте двоеточия, затем посчитайте пробелы в начале строк. Больший отступ не означает более важный код. Он показывает, к какому условию относится строка.</p></section><section class=\"lesson-section\"><h3>Пример лекции · Сначала диапазон 0–100, затем оценка</h3><pre><code>score = int(input(&quot;Score: &quot;))\nif score &lt; 0 or score &gt; 100:\n    print(&quot;Invalid score&quot;)\nelse:\n    if score &gt;= 90:\n        print(&quot;A&quot;)\n    elif score &gt;= 80:\n        print(&quot;B&quot;)\n    elif score &gt;= 70:\n        print(&quot;C&quot;)\n    elif score &gt;= 60:\n        print(&quot;D&quot;)\n    else:\n        print(&quot;F&quot;)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>Score: 65\nD</code></pre><p>Внешний if проверяет выход за допустимый диапазон. При 0–100 выполняются проверки оценки внутри else. Все внутренние if, elif и else стоят на уровне четырёх пробелов. Их print имеют восемь пробелов. Балл 65 не пропущен: это D. На этом этапе вводите целые числа.</p></section><section class=\"problem-area\"><h3>Задание · Оценка с проверкой диапазона</h3><p>Первый пример с 95 баллами объясняет отступы. Задание следует следующему полному примеру: <b>проверка диапазона → выбор оценки</b>. После запуска на вопрос <code>Score:</code> введите только число и нажмите Enter. Сам текст Score: вводить не нужно.</p><ol><li>Прочитайте одно целое число с подсказкой Score: .</li><li>Если оно меньше 0 или больше 100, выведите Invalid score.</li><li>Иначе внутри внешнего else выведите A для 90+, B для 80+, C для 70+, D для 60+ или F.</li><li>Выровняйте внутренние if, elif и else. Проверьте -1, 0, 59, 60, 89, 90, 100 и 101 отдельными запусками. 60 даёт D; 90 и 100 — A; -1 и 101 — Invalid score.</li></ol></section>"
    },
    "answer": {
      "ko": "score = int(input(\"Score: \"))\nif score < 0 or score > 100:\n    print(\"Invalid score\")\nelse:\n    if score >= 90:\n        print(\"A\")\n    elif score >= 80:\n        print(\"B\")\n    elif score >= 70:\n        print(\"C\")\n    elif score >= 60:\n        print(\"D\")\n    else:\n        print(\"F\")",
      "en": "score = int(input(\"Score: \"))\nif score < 0 or score > 100:\n    print(\"Invalid score\")\nelse:\n    if score >= 90:\n        print(\"A\")\n    elif score >= 80:\n        print(\"B\")\n    elif score >= 70:\n        print(\"C\")\n    elif score >= 60:\n        print(\"D\")\n    else:\n        print(\"F\")",
      "ru": "score = int(input(\"Score: \"))\nif score < 0 or score > 100:\n    print(\"Invalid score\")\nelse:\n    if score >= 90:\n        print(\"A\")\n    elif score >= 80:\n        print(\"B\")\n    elif score >= 70:\n        print(\"C\")\n    elif score >= 60:\n        print(\"D\")\n    else:\n        print(\"F\")"
    },
    "initialCode": {
      "ko": "score = 95\nif score >= 60:\n    print(\"Pass\")\n    if score >= 90:\n        print(\"A\")\nelse:\n    print(\"Retry\")",
      "en": "score = 95\nif score >= 60:\n    print(\"Pass\")\n    if score >= 90:\n        print(\"A\")\nelse:\n    print(\"Retry\")",
      "ru": "score = 95\nif score >= 60:\n    print(\"Pass\")\n    if score >= 90:\n        print(\"A\")\nelse:\n    print(\"Retry\")"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "Pass\nA",
      "en": "Pass\nA",
      "ru": "Pass\nA"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "점수 100",
          "en": "Score 100",
          "ru": "Балл 100"
        },
        "input": {
          "ko": "100",
          "en": "100",
          "ru": "100"
        },
        "output": {
          "ko": "Score: 100\nA",
          "en": "Score: 100\nA",
          "ru": "Score: 100\nA"
        }
      },
      {
        "name": {
          "ko": "점수 90",
          "en": "Score 90",
          "ru": "Балл 90"
        },
        "input": {
          "ko": "90",
          "en": "90",
          "ru": "90"
        },
        "output": {
          "ko": "Score: 90\nA",
          "en": "Score: 90\nA",
          "ru": "Score: 90\nA"
        }
      },
      {
        "name": {
          "ko": "점수 89",
          "en": "Score 89",
          "ru": "Балл 89"
        },
        "input": {
          "ko": "89",
          "en": "89",
          "ru": "89"
        },
        "output": {
          "ko": "Score: 89\nB",
          "en": "Score: 89\nB",
          "ru": "Score: 89\nB"
        }
      },
      {
        "name": {
          "ko": "점수 80",
          "en": "Score 80",
          "ru": "Балл 80"
        },
        "input": {
          "ko": "80",
          "en": "80",
          "ru": "80"
        },
        "output": {
          "ko": "Score: 80\nB",
          "en": "Score: 80\nB",
          "ru": "Score: 80\nB"
        }
      },
      {
        "name": {
          "ko": "점수 79",
          "en": "Score 79",
          "ru": "Балл 79"
        },
        "input": {
          "ko": "79",
          "en": "79",
          "ru": "79"
        },
        "output": {
          "ko": "Score: 79\nC",
          "en": "Score: 79\nC",
          "ru": "Score: 79\nC"
        }
      },
      {
        "name": {
          "ko": "점수 70",
          "en": "Score 70",
          "ru": "Балл 70"
        },
        "input": {
          "ko": "70",
          "en": "70",
          "ru": "70"
        },
        "output": {
          "ko": "Score: 70\nC",
          "en": "Score: 70\nC",
          "ru": "Score: 70\nC"
        }
      },
      {
        "name": {
          "ko": "점수 69",
          "en": "Score 69",
          "ru": "Балл 69"
        },
        "input": {
          "ko": "69",
          "en": "69",
          "ru": "69"
        },
        "output": {
          "ko": "Score: 69\nD",
          "en": "Score: 69\nD",
          "ru": "Score: 69\nD"
        }
      },
      {
        "name": {
          "ko": "점수 60",
          "en": "Score 60",
          "ru": "Балл 60"
        },
        "input": {
          "ko": "60",
          "en": "60",
          "ru": "60"
        },
        "output": {
          "ko": "Score: 60\nD",
          "en": "Score: 60\nD",
          "ru": "Score: 60\nD"
        }
      },
      {
        "name": {
          "ko": "점수 59",
          "en": "Score 59",
          "ru": "Балл 59"
        },
        "input": {
          "ko": "59",
          "en": "59",
          "ru": "59"
        },
        "output": {
          "ko": "Score: 59\nF",
          "en": "Score: 59\nF",
          "ru": "Score: 59\nF"
        }
      },
      {
        "name": {
          "ko": "점수 0",
          "en": "Score 0",
          "ru": "Балл 0"
        },
        "input": {
          "ko": "0",
          "en": "0",
          "ru": "0"
        },
        "output": {
          "ko": "Score: 0\nF",
          "en": "Score: 0\nF",
          "ru": "Score: 0\nF"
        }
      },
      {
        "name": {
          "ko": "점수 -1",
          "en": "Score -1",
          "ru": "Балл -1"
        },
        "input": {
          "ko": "-1",
          "en": "-1",
          "ru": "-1"
        },
        "output": {
          "ko": "Score: -1\nInvalid score",
          "en": "Score: -1\nInvalid score",
          "ru": "Score: -1\nInvalid score"
        }
      },
      {
        "name": {
          "ko": "점수 101",
          "en": "Score 101",
          "ru": "Балл 101"
        },
        "input": {
          "ko": "101",
          "en": "101",
          "ru": "101"
        },
        "output": {
          "ko": "Score: 101\nInvalid score",
          "en": "Score: 101\nInvalid score",
          "ru": "Score: 101\nInvalid score"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 6,
    "sourceFile": "6.pdf",
    "sourcePages": [
      23,
      24,
      25,
      26
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nscore = int(input(\"Score: \"))\n# TODO: 바깥 if에서 0 미만 또는 100 초과인지 먼저 검사하세요.\n# TODO: 잘못된 범위이면 Invalid score, 바깥 else 안에서는 중첩 if로 등급을 정하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nscore = int(input(\"Score: \"))\n# TODO: In an outer if, first check for a score below 0 or above 100.\n# TODO: Print Invalid score for an invalid range. Inside the outer else, use a nested if to choose the grade.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nscore = int(input(\"Score: \"))\n# TODO: Во внешнем if сначала проверьте, меньше ли балл 0 или больше 100.\n# TODO: Для неверного диапазона выведите Invalid score. Внутри внешнего else выберите оценку вложенным if.\n"
    },
    "starterHint": {
      "ko": "점수 입력만 있습니다. 범위 확인과 등급 판단을 직접 추가하세요. 바깥 조건과 안쪽 조건의 들여쓰기 위치를 다르게 맞춥니다.",
      "en": "Only the score input is ready. Add the range check and grade decisions. Use different indentation levels for the outer and inner conditions.",
      "ru": "Готов только ввод балла. Добавьте проверку диапазона и выбор оценки. Внешнее и внутреннее условия должны иметь разные отступы."
    }
  },
  {
    "id": "lesson-16",
    "menu": {
      "ko": "3주 · f-string",
      "en": "W3 · f-string",
      "ru": "W3 · f-string"
    },
    "title": {
      "ko": "3주차 · 문장 안에 값 넣기: f-string",
      "en": "Week 3 · Put a value inside text: f-string",
      "ru": "Неделя 3 · Значение внутри текста: f-string"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 문장 안의 빈칸 채우기</h3><p><code>f-string</code>은 문장에 변수의 값을 넣는 방법입니다. 좋아하는 영화 이름을 문장에 넣어 봅시다.</p></section><section class=\"lesson-section\"><h3>2. f는 따옴표 앞에</h3><pre><code>movie = &quot;The Intern&quot;\nprint(f&quot;I like {movie}&quot;)</code></pre><p><b>예상 결과</b></p><pre><code>I like The Intern</code></pre><p><code>f</code>는 여는 따옴표 바로 앞에 씁니다. <code>{movie}</code>는 movie에 저장한 값으로 바뀝니다. f와 중괄호는 결과에 나오지 않습니다.</p></section><section class=\"lesson-section\"><h3>3. 잘못된 모양과 바른 모양</h3><p><code>print(\"f {movie}\")</code>는 f까지 글자로 출력합니다. <code>print(f\"I like \" + {movie})</code>도 올바른 연결 방법이 아닙니다. 이번에는 <code>print(f\"I like {movie}\")</code> 한 모양만 기억하세요.</p></section><section class=\"lesson-section\"><h3>4. 따옴표 안에 따옴표 넣기</h3><pre><code>print(&quot;I like &#x27;Python&#x27;.&quot;)\nprint(&#x27;She said &quot;Hello&quot;.&#x27;)</code></pre><p><b>예상 결과</b></p><pre><code>I like &#x27;Python&#x27;.\nShe said &quot;Hello&quot;.</code></pre><p>바깥은 큰따옴표, 안쪽은 작은따옴표로 쓰거나 그 반대로 쓰면 됩니다. US 영문 키보드에서 중괄호 { }는 Shift와 [ ] 키로 입력합니다. 다른 배열에서는 키에 표시된 기호를 확인하세요.</p></section><section class=\"problem-area\"><h3>미션 · 좋아하는 영화</h3><p>시작 코드의 <code>print(movie)</code>는 영화 이름만 출력합니다. 이번 미션에서는 이 줄을 f-string으로 바꾸어 <code>I like</code>와 영화 이름이 함께 나오게 하세요. 코드를 바꾸고 실행하는 곳은 선택한 실습 도구입니다.</p><ol><li>movie에 \"The Intern\"을 저장하세요.</li><li>f-string으로 I like The Intern을 출력하세요.</li><li>영화 이름만 바꿔 다시 실행하세요.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Fill a space inside a sentence</h3><p>An <code>f-string</code> puts a variable value inside text. Let us put a favourite movie into a sentence.</p></section><section class=\"lesson-section\"><h3>2. Put f before the opening quote</h3><pre><code>movie = &quot;The Intern&quot;\nprint(f&quot;I like {movie}&quot;)</code></pre><p><b>Expected output</b></p><pre><code>I like The Intern</code></pre><p><code>f</code> goes just before the opening quote. <code>{movie}</code> is replaced by the value stored in movie. The f and braces do not appear in the result.</p></section><section class=\"lesson-section\"><h3>3. Check the shape</h3><p><code>print(\"f {movie}\")</code> prints the f as text. <code>print(f\"I like \" + {movie})</code> is also incorrect. For now, remember this one shape: <code>print(f\"I like {movie}\")</code>.</p></section><section class=\"lesson-section\"><h3>4. Quotes inside text</h3><pre><code>print(&quot;I like &#x27;Python&#x27;.&quot;)\nprint(&#x27;She said &quot;Hello&quot;.&#x27;)</code></pre><p><b>Expected output</b></p><pre><code>I like &#x27;Python&#x27;.\nShe said &quot;Hello&quot;.</code></pre><p>Use double quotes outside and single quotes inside, or the reverse. On a US English keyboard, Shift with [ or ] types the braces { }. Other layouts may differ.</p></section><section class=\"problem-area\"><h3>Mission · Your favourite movie</h3><p>The starter’s <code>print(movie)</code> prints only the movie name. Change this line to an f-string so <code>I like</code> and the movie name appear together. Edit and run the code in your chosen practice tool.</p><ol><li>Store \"The Intern\" in movie.</li><li>Use an f-string to print I like The Intern.</li><li>Change only the movie name and run again.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Заполняем место в предложении</h3><p><code>f-строка</code> подставляет значение переменной в текст. Добавим название любимого фильма в предложение.</p></section><section class=\"lesson-section\"><h3>2. Буква f стоит перед кавычкой</h3><pre><code>movie = &quot;The Intern&quot;\nprint(f&quot;I like {movie}&quot;)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>I like The Intern</code></pre><p><code>f</code> пишется прямо перед открывающей кавычкой. Вместо <code>{movie}</code> подставляется значение movie. Буква f и фигурные скобки не выводятся.</p></section><section class=\"lesson-section\"><h3>3. Проверяем форму записи</h3><p><code>print(\"f {movie}\")</code> выводит букву f как текст. Запись <code>print(f\"I like \" + {movie})</code> тоже неверна. Пока запомните одну форму: <code>print(f\"I like {movie}\")</code>.</p></section><section class=\"lesson-section\"><h3>4. Кавычки внутри текста</h3><pre><code>print(&quot;I like &#x27;Python&#x27;.&quot;)\nprint(&#x27;She said &quot;Hello&quot;.&#x27;)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>I like &#x27;Python&#x27;.\nShe said &quot;Hello&quot;.</code></pre><p>Можно поставить двойные кавычки снаружи и одинарные внутри или наоборот. В раскладке US English Shift с [ или ] вводит фигурные скобки { }. В другой раскладке проверьте символы на клавишах.</p></section><section class=\"problem-area\"><h3>Задание · Любимый фильм</h3><p>В начальном коде <code>print(movie)</code> выводит только название фильма. Замените эту строку на f-строку, чтобы вместе появились <code>I like</code> и название фильма. Изменяйте и запускайте код в выбранном учебном инструменте.</p><ol><li>Сохраните \"The Intern\" в movie.</li><li>С помощью f-строки выведите I like The Intern.</li><li>Измените только название фильма и запустите снова.</li></ol></section>"
    },
    "answer": {
      "ko": "movie = \"The Intern\"\nprint(f\"I like {movie}\")",
      "en": "movie = \"The Intern\"\nprint(f\"I like {movie}\")",
      "ru": "movie = \"The Intern\"\nprint(f\"I like {movie}\")"
    },
    "initialCode": {
      "ko": "movie = \"The Intern\"\nprint(movie)",
      "en": "movie = \"The Intern\"\nprint(movie)",
      "ru": "movie = \"The Intern\"\nprint(movie)"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "The Intern",
      "en": "The Intern",
      "ru": "The Intern"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "영화 문장",
          "en": "Movie sentence",
          "ru": "Предложение о фильме"
        },
        "input": {
          "ko": "",
          "en": "",
          "ru": ""
        },
        "output": {
          "ko": "I like The Intern",
          "en": "I like The Intern",
          "ru": "I like The Intern"
        }
      }
    ],
    "needsInput": false,
    "sourceWeek": 3,
    "sourceFile": "3.pdf",
    "sourcePages": [
      16,
      17,
      28,
      29
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nmovie = \"The Intern\"\nprint(movie)\n# TODO: 위 print()를 f-string으로 바꾸어 I like The Intern을 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nmovie = \"The Intern\"\nprint(movie)\n# TODO: Change the print() above to an f-string that displays I like The Intern.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nmovie = \"The Intern\"\nprint(movie)\n# TODO: Измените print() выше на f-строку, которая выводит I like The Intern.\n"
    },
    "starterHint": {
      "ko": "현재는 영화 이름만 나옵니다. 위 print() 한 줄을 f-string 문장으로 바꾸세요. 입력은 필요 없습니다.",
      "en": "This currently prints only the movie name. Change the existing print() to an f-string sentence. No input is needed.",
      "ru": "Пока выводится только название фильма. Замените имеющийся print() на предложение с f-строкой. Ввод не нужен."
    }
  },
  {
    "id": "lesson-17",
    "menu": {
      "ko": "7주 · 복습 종합",
      "en": "W7 · Review",
      "ru": "W7 · Повторение"
    },
    "title": {
      "ko": "중간 점검: 입력·자료형·계산 복습",
      "en": "Review: input, data types and arithmetic",
      "ru": "Повторение: ввод, типы данных и вычисления"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 입력 → 변환 → 계산 → 판단 → 출력</h3><p>지금까지 배운 도구를 순서대로 연결합니다. 숫자가 적힌 메모 두 장을 받아 계산하고 결과를 알려주는 일과 같습니다. 새 문법을 외우기보다 각 단계가 어디에 필요한지 확인하세요.</p></section><section class=\"lesson-section\"><h3>2. 글자 더하기와 숫자 더하기</h3><pre><code>a = &quot;10&quot;\nb = &quot;5&quot;\nprint(a + b)\nprint(int(a) + int(b))</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">105\n15</pre><p>따옴표 속 \"10\"과 \"5\"는 글자여서 연결하면 105가 됩니다. int()로 각각 정수로 바꾸면 10 + 5 계산으로 15가 됩니다. <code>int(a + b)</code>는 먼저 글자를 붙인 뒤 105로 바꾸므로 다른 결과입니다.</p></section><section class=\"lesson-section\"><h3>3. 짧은 전체 프로그램</h3><pre><code>a = 3\nb = 2\ntotal = a + b\nprint(f&quot;Sum: {total}&quot;)\nif total &gt; 0:\n    print(&quot;Positive&quot;)\nelse:\n    print(&quot;Zero or negative&quot;)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">Sum: 5\nPositive</pre><p>변수에 숫자를 준비하고 total에 합을 저장합니다. f-string으로 합계를 출력한 뒤, total이 0보다 큰지 비교합니다. 큰 경우 Positive, 나머지 경우 Zero or negative입니다. 미션 시작 코드는 두 수를 입력받아 합계까지 구합니다. 출력과 조건문을 추가해 위와 같은 흐름을 완성하세요.</p></section><section class=\"lesson-section\"><h3>4. 실제 실습 도구에서 두 수 입력하기</h3><ul><li>Colab·IDLE·VS Code 중 선택한 도구에 미션 코드를 붙여넣고 실행합니다. 첫 input()이 기다리면 첫 숫자를 입력하고 Enter, 다음 input()이 기다리면 둘째 숫자를 입력하고 Enter를 누릅니다.</li><li>이 미션의 input()에는 안내 문구가 없어 질문 글자 없이 입력을 기다립니다. 빈 입력 칸이나 커서를 찾으세요.</li><li>정수에 3.5나 apple을 넣으면 변환 오류가 납니다. 지금은 -8, 0, 10 같은 정수만 씁니다. 오류 처리는 다음 레슨에서 배웁니다.</li></ul></section><div class=\"problem-area\"><h3 class=\"problem-title\">실습 미션 · 합계와 부호</h3><ol><li>두 줄의 입력을 각각 int(input())으로 읽어 a와 b에 저장하세요.</li><li>합계를 total에 저장하고 f-string으로 Sum: 15와 같은 형식으로 출력하세요.</li><li>합계가 0보다 크면 Positive, 나머지는 Zero or negative를 출력하세요. 양수·0·음수 세 경우를 실행하세요.</li></ol></div>",
      "en": "<section class=\"lesson-section\"><h3>1. Input → convert → calculate → decide → display</h3><p>Connect the tools you have already learned. It is like receiving two notes with numbers, calculating, and reporting the result. Instead of learning new syntax, check where each step belongs.</p></section><section class=\"lesson-section\"><h3>2. Adding text and adding numbers</h3><pre><code>a = &quot;10&quot;\nb = &quot;5&quot;\nprint(a + b)\nprint(int(a) + int(b))</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">105\n15</pre><p>Quoted \"10\" and \"5\" are text, so joining them gives 105. Converting each with int() makes the numeric sum 10 + 5 = 15. <code>int(a + b)</code> joins first and then converts to 105, so it is different.</p></section><section class=\"lesson-section\"><h3>3. A short complete program</h3><pre><code>a = 3\nb = 2\ntotal = a + b\nprint(f&quot;Sum: {total}&quot;)\nif total &gt; 0:\n    print(&quot;Positive&quot;)\nelse:\n    print(&quot;Zero or negative&quot;)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">Sum: 5\nPositive</pre><p>Prepare two numbers and store their sum in total. Display the sum with an f-string, then compare total with zero. Print Positive when it is greater than zero, otherwise Zero or negative. The mission starter already reads two numbers and calculates their sum. Add output and the condition to complete this flow.</p></section><section class=\"lesson-section\"><h3>4. Enter two numbers in your practice tool</h3><ul><li>Paste the mission code into your selected tool: Colab, IDLE or VS Code. Run it. At the first waiting input(), type the first number and press Enter; at the next, type the second number and press Enter.</li><li>These input() calls have no prompt text, so they wait without showing a question. Look for the empty input field or cursor.</li><li>Values such as 3.5 or apple cannot be converted by int(). Use integers such as -8, 0, and 10 here. Error handling comes in the next lesson.</li></ul></section><div class=\"problem-area\"><h3 class=\"problem-title\">Practice · Sum and sign</h3><ol><li>Read two input lines with int(input()) and store them in a and b.</li><li>Store the sum in total and print it with an f-string in the form Sum: 15.</li><li>Print Positive if the sum is greater than zero; otherwise print Zero or negative. Test positive, zero, and negative sums.</li></ol></div>",
      "ru": "<section class=\"lesson-section\"><h3>1. Ввод → преобразование → расчёт → решение → вывод</h3><p>Соединим уже изученные инструменты. Это похоже на получение двух записок с числами, вычисление и сообщение результата. Здесь важнее понять место каждого шага, чем учить новый синтаксис.</p></section><section class=\"lesson-section\"><h3>2. Сложение строк и чисел</h3><pre><code>a = &quot;10&quot;\nb = &quot;5&quot;\nprint(a + b)\nprint(int(a) + int(b))</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">105\n15</pre><p>\"10\" и \"5\" в кавычках — строки: соединение даёт 105. Если каждую преобразовать через int(), получится числовая сумма 10 + 5 = 15. <code>int(a + b)</code> сначала соединит строки и затем получит 105, поэтому результат другой.</p></section><section class=\"lesson-section\"><h3>3. Короткая полная программа</h3><pre><code>a = 3\nb = 2\ntotal = a + b\nprint(f&quot;Sum: {total}&quot;)\nif total &gt; 0:\n    print(&quot;Positive&quot;)\nelse:\n    print(&quot;Zero or negative&quot;)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">Sum: 5\nPositive</pre><p>Подготовьте два числа и сохраните сумму в total. Выведите её через f-строку, затем сравните total с нулём. Если сумма больше нуля, выведите Positive, иначе Zero or negative. Начало задания уже принимает два числа и вычисляет сумму. Добавьте вывод и условие, чтобы завершить этот порядок действий.</p></section><section class=\"lesson-section\"><h3>4. Ввод двух чисел в выбранной среде</h3><ul><li>Вставьте код задания в выбранную среду: Colab, IDLE или VS Code. Запустите. При первом ожидании input() введите первое число и Enter, при следующем — второе число и Enter.</li><li>В этих вызовах input() нет текста вопроса. Найдите пустое поле ввода или ожидающий курсор.</li><li>Значения вроде 3.5 или apple нельзя преобразовать через int(). Здесь используйте целые числа, например -8, 0 и 10. Обработка ошибок — в следующем уроке.</li></ul></section><div class=\"problem-area\"><h3 class=\"problem-title\">Практика · Сумма и знак</h3><ol><li>Прочитайте две строки через int(input()) и сохраните в a и b.</li><li>Сохраните сумму в total и выведите через f-строку в формате Sum: 15.</li><li>Если сумма больше нуля, выведите Positive; иначе Zero or negative. Проверьте положительную, нулевую и отрицательную суммы.</li></ol></div>"
    },
    "answer": {
      "ko": "a = int(input())\nb = int(input())\ntotal = a + b\nprint(f\"Sum: {total}\")\nif total > 0:\n    print(\"Positive\")\nelse:\n    print(\"Zero or negative\")",
      "en": "a = int(input())\nb = int(input())\ntotal = a + b\nprint(f\"Sum: {total}\")\nif total > 0:\n    print(\"Positive\")\nelse:\n    print(\"Zero or negative\")",
      "ru": "a = int(input())\nb = int(input())\ntotal = a + b\nprint(f\"Sum: {total}\")\nif total > 0:\n    print(\"Positive\")\nelse:\n    print(\"Zero or negative\")"
    },
    "initialCode": {
      "ko": "a = \"10\"\nb = \"5\"\nprint(a + b)\nprint(int(a) + int(b))",
      "en": "a = \"10\"\nb = \"5\"\nprint(a + b)\nprint(int(a) + int(b))",
      "ru": "a = \"10\"\nb = \"5\"\nprint(a + b)\nprint(int(a) + int(b))"
    },
    "sampleInput": {
      "ko": "10\n5",
      "en": "10\n5",
      "ru": "10\n5"
    },
    "expectedOutput": {
      "ko": "105\n15",
      "en": "105\n15",
      "ru": "105\n15"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "양수 합계",
          "en": "Positive sum",
          "ru": "Положительная сумма"
        },
        "input": {
          "ko": "10\n5",
          "en": "10\n5",
          "ru": "10\n5"
        },
        "output": {
          "ko": "10\n5\nSum: 15\nPositive",
          "en": "10\n5\nSum: 15\nPositive",
          "ru": "10\n5\nSum: 15\nPositive"
        }
      },
      {
        "name": {
          "ko": "합계 0",
          "en": "Zero sum",
          "ru": "Нулевая сумма"
        },
        "input": {
          "ko": "-10\n10",
          "en": "-10\n10",
          "ru": "-10\n10"
        },
        "output": {
          "ko": "-10\n10\nSum: 0\nZero or negative",
          "en": "-10\n10\nSum: 0\nZero or negative",
          "ru": "-10\n10\nSum: 0\nZero or negative"
        }
      },
      {
        "name": {
          "ko": "음수 합계",
          "en": "Negative sum",
          "ru": "Отрицательная сумма"
        },
        "input": {
          "ko": "-8\n3",
          "en": "-8\n3",
          "ru": "-8\n3"
        },
        "output": {
          "ko": "-8\n3\nSum: -5\nZero or negative",
          "en": "-8\n3\nSum: -5\nZero or negative",
          "ru": "-8\n3\nSum: -5\nZero or negative"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 7,
    "sourceFile": "7.pdf",
    "sourcePages": [
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\na = int(input())\nb = int(input())\ntotal = a + b\n# TODO: f-string으로 Sum: 뒤에 total을 출력하세요.\n# TODO: total이 0보다 크면 Positive, 아니면 Zero or negative를 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\na = int(input())\nb = int(input())\ntotal = a + b\n# TODO: Use an f-string to print Sum: followed by total.\n# TODO: Print Positive if total is greater than 0, otherwise Zero or negative.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\na = int(input())\nb = int(input())\ntotal = a + b\n# TODO: Через f-строку выведите Sum: и значение total.\n# TODO: Если total больше 0, выведите Positive, иначе Zero or negative.\n"
    },
    "starterHint": {
      "ko": "입력·숫자 변환·합계까지 준비했습니다. 출력과 if-else를 완성하세요. 첫 정수 → Enter → 둘째 정수 → Enter 순서입니다.",
      "en": "Inputs, number conversion, and the sum are ready. Complete output and if-else. Enter the first integer, Enter, the second integer, then Enter.",
      "ru": "Ввод, преобразование в числа и сумма готовы. Допишите вывод и if-else. Введите первое целое число, Enter, второе число и Enter."
    }
  },
  {
    "id": "lesson-18",
    "menu": {
      "ko": "7주 · try-except",
      "en": "W7 · try-except",
      "ru": "W7 · try-except"
    },
    "title": {
      "ko": "7주차 · try-except 아주 기초",
      "en": "Week 7 · A first try-except",
      "ru": "Неделя 7 · Самый простой try-except"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 숫자를 물었는데 글자를 적었다면</h3><p><code>int(\"5\")</code>는 정수 5가 됩니다. <code>int(\"apple\")</code>은 정수로 바꿀 수 없어서 오류가 납니다. 이럴 때 빨간 오류 대신 짧은 안내를 보여 주는 것이 오늘의 목표입니다.</p></section><section class=\"lesson-section\"><h3>2. 오늘은 이 다섯 줄만 익히세요</h3><pre><code>try:\n    number = int(input(&quot;Number: &quot;))\n    print(&quot;Your number:&quot;, number)\nexcept ValueError:\n    print(&quot;Numbers only.&quot;)</code></pre><ul><li><code>try:</code> 아래에는 먼저 해 볼 코드를 적습니다.</li><li><code>except ValueError:</code> 아래에는 정수로 바꿀 수 없을 때 보여 줄 안내를 적습니다. 지금은 ValueError를 이 입력 실수의 이름이라고 기억하면 됩니다.</li><li>try와 except는 같은 왼쪽 위치, 안의 코드는 공백 4칸입니다. 두 줄 끝의 콜론 <code>:</code>도 확인하세요.</li></ul></section><section class=\"lesson-section\"><h3>3. 숫자와 글자를 따로 시험하기</h3><ol><li>완성된 위 다섯 줄을 선택한 실습 도구에서 실행합니다. <code>Number:</code>가 나오면 <code>5</code>만 입력하고 Enter를 누르세요. 프로그램은 <code>Your number: 5</code>를 출력합니다.</li><li>같은 코드를 다시 실행합니다. 이번에는 <code>Number:</code> 뒤에 <code>apple</code>을 입력하고 Enter를 누르세요. 프로그램은 <code>Numbers only.</code>를 출력합니다.</li><li>한 번 실행하면 답 한 개만 받습니다. 5와 apple은 <b>서로 다른 두 번의 실행</b>에서 확인합니다. Number:는 프로그램의 질문이며 답에 함께 쓰지 않습니다.</li></ol><p><code>Numbers only.</code>는 “숫자만 입력하세요”라는 뜻입니다. 안내 뒤에 프로그램이 끝나며 자동으로 다시 묻지 않습니다. 새 답을 시험하려면 코드를 다시 실행한 뒤 입력하세요.</p></section><details class=\"lesson-extra\"><summary>4. 잠깐 복습 · # 주석</summary><div class=\"lesson-extra-content\"><pre><code># Show a greeting\nprint(&quot;Hello!&quot;)</code></pre><p>문자열 밖의 <code>#</code>부터 그 줄 끝까지는 주석입니다. 컴퓨터가 실행할 명령이 아니라 사람이 읽는 설명입니다. <code>print(\"#\")</code>의 #은 문자열 안에 있으므로 글자로 출력됩니다.</p></div></details><section class=\"lesson-section\"><h3>5. 오늘의 확인</h3><p>정상 입력이면 try 안의 출력, 정수로 바꿀 수 없는 글자면 except 안의 출력이 실행됩니다. 이 예제는 숫자 변환 오류 하나를 처리합니다. 철자·괄호·들여쓰기 오류를 모두 고쳐 주는 기능은 아닙니다.</p></section><section class=\"problem-area\"><h3>미션 · 숫자 입력 한 번 보호하기</h3><ol><li>number를 입력받는 줄 바로 위에 try:를 추가하고, 입력과 출력 두 줄을 공백 4칸 안쪽으로 옮기세요. 아래에 except ValueError:를 try와 같은 위치에 쓰고, 그 안에 공백 4칸으로 안내 출력 줄을 추가하세요.</li><li>5줄로 완성한 코드를 실행하고 질문에 5로 답하세요. 다시 실행한 뒤 이번에는 apple로 답하세요.</li><li>어느 경우에 Your number가 나오고 어느 경우에 Numbers only.가 나오는지 말해 보세요.</li></ol><p>미션 시작 코드에서 <code>#</code>으로 시작하는 줄은 설명입니다. 실행되는 코드는 정상 숫자를 확인하는 두 줄이며, 아직 보호 장치가 없어 apple을 입력하면 오류가 납니다. 주석을 제외한 실행 코드를 위의 5줄 모양으로 완성한 뒤 숫자와 글자를 비교하세요.</p></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Text was entered instead of a number</h3><p><code>int(\"5\")</code> becomes the integer 5. <code>int(\"apple\")</code> cannot become an integer and raises an error. Today we will show a short helpful message for this input mistake.</p></section><section class=\"lesson-section\"><h3>2. Learn just these five lines</h3><pre><code>try:\n    number = int(input(&quot;Number: &quot;))\n    print(&quot;Your number:&quot;, number)\nexcept ValueError:\n    print(&quot;Numbers only.&quot;)</code></pre><ul><li>Put the code to try under <code>try:</code>.</li><li>Under <code>except ValueError:</code>, put the message for text that cannot become an integer. For now, think of ValueError as the name of this input error.</li><li>Align try and except at the left. Put four spaces before their inner lines. Keep the colon <code>:</code> on both lines.</li></ul></section><section class=\"lesson-section\"><h3>3. Try a number and a word in separate runs</h3><ol><li>Run the complete five-line example above in your practice tool. When <code>Number:</code> appears, type only <code>5</code> and press Enter. The program prints <code>Your number: 5</code>.</li><li>Run the same code again. This time, answer <code>Number:</code> with <code>apple</code> and press Enter. The program prints <code>Numbers only.</code>.</li><li>Each run reads one answer. Test 5 and apple in <b>two separate runs</b>. Number: is the program’s prompt; do not type it as part of the answer.</li></ol><p><code>Numbers only.</code> asks for a numeric answer. The program then finishes; it does not ask again automatically. To test a new answer, run the code again and then enter it.</p></section><details class=\"lesson-extra\"><summary>4. Optional review · # comments</summary><div class=\"lesson-extra-content\"><pre><code># Show a greeting\nprint(&quot;Hello!&quot;)</code></pre><p>Outside a string, <code>#</code> starts a comment that continues to the end of the line. It is an explanation, not a command. In <code>print(\"#\")</code>, # is inside a string, so it is printed.</p></div></details><section class=\"lesson-section\"><h3>5. Check the idea</h3><p>With a valid integer, the print inside try runs. With text that cannot become an integer, the print inside except runs. This example handles one conversion error. It does not repair every spelling, bracket or indentation mistake.</p></section><section class=\"problem-area\"><h3>Mission · Handle one input mistake</h3><ol><li>Add try: immediately above the number input line. Indent the input and output lines by four spaces. Add except ValueError: aligned with try, then add its message line with four spaces.</li><li>Run your completed five-line code and answer with 5. Run it again and answer with apple.</li><li>Explain when Your number appears and when Numbers only. appears.</li></ol><p>Lines beginning with <code>#</code> in the mission starter are comments. The two executable lines handle a valid number; they do not handle errors yet, so apple causes an error. Complete the five executable lines shown above, excluding comments, before comparing a number and a word.</p></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Вместо числа ввели слово</h3><p><code>int(\"5\")</code> даёт целое число 5. <code>int(\"apple\")</code> не может превратить слово в целое число и вызывает ошибку. Сегодня при такой ошибке ввода покажем короткую подсказку.</p></section><section class=\"lesson-section\"><h3>2. Пока достаточно пяти строк</h3><pre><code>try:\n    number = int(input(&quot;Number: &quot;))\n    print(&quot;Your number:&quot;, number)\nexcept ValueError:\n    print(&quot;Numbers only.&quot;)</code></pre><ul><li>Под <code>try:</code> напишите код, который нужно попробовать выполнить.</li><li>Под <code>except ValueError:</code> напишите сообщение для текста, который нельзя превратить в целое число. Пока запомните ValueError как название этой ошибки ввода.</li><li>try и except стоят на одном уровне слева. Перед внутренними строками — четыре пробела. Не забудьте двоеточие <code>:</code> в обеих строках.</li></ul></section><section class=\"lesson-section\"><h3>3. Число и слово — два отдельных запуска</h3><ol><li>Запустите готовый пример из пяти строк в выбранной среде. Когда появится <code>Number:</code>, введите только <code>5</code> и нажмите Enter. Программа выведет <code>Your number: 5</code>.</li><li>Снова запустите тот же код. Теперь на вопрос <code>Number:</code> введите <code>apple</code> и нажмите Enter. Программа выведет <code>Numbers only.</code>.</li><li>За один запуск читается один ответ. Проверьте 5 и apple <b>двумя отдельными запусками</b>. Number: — вопрос программы, его не нужно вводить вместе с ответом.</li></ol><p><code>Numbers only.</code> означает «Только числа». Затем программа заканчивается и не спрашивает снова автоматически. Для нового ответа запустите код ещё раз, затем введите его.</p></section><details class=\"lesson-extra\"><summary>4. При необходимости · комментарии #</summary><div class=\"lesson-extra-content\"><pre><code># Show a greeting\nprint(&quot;Hello!&quot;)</code></pre><p>Вне строки символ <code>#</code> начинает комментарий до конца строки кода. Это объяснение для человека. В <code>print(\"#\")</code> символ # находится внутри строки, поэтому выводится на экран.</p></div></details><section class=\"lesson-section\"><h3>5. Проверяем понимание</h3><p>При правильном целом числе выполняется print внутри try. При тексте, который нельзя преобразовать в целое число, выполняется print внутри except. Этот пример обрабатывает одну ошибку преобразования. Он не исправляет все опечатки, скобки и отступы.</p></section><section class=\"problem-area\"><h3>Задание · Обработать одну ошибку ввода</h3><ol><li>Добавьте try: прямо перед строкой ввода number. Сдвиньте строки ввода и вывода вправо на четыре пробела. Ниже напишите except ValueError: на одном уровне с try, а строку с сообщением — с четырьмя пробелами.</li><li>Запустите завершённый код из пяти строк и ответьте 5. Запустите снова и ответьте apple.</li><li>Объясните, когда появляется Your number, а когда Numbers only.</li></ol><p>Строки начала задания с <code>#</code> — комментарии. Две исполняемые строки работают с правильным числом; обработчика ещё нет, поэтому apple вызовет ошибку. Завершите пять исполняемых строк по образцу выше, не считая комментарии, затем сравните число и слово.</p></section>"
    },
    "answer": {
      "ko": "try:\n    number = int(input(\"Number: \"))\n    print(\"Your number:\", number)\nexcept ValueError:\n    print(\"Numbers only.\")",
      "en": "try:\n    number = int(input(\"Number: \"))\n    print(\"Your number:\", number)\nexcept ValueError:\n    print(\"Numbers only.\")",
      "ru": "try:\n    number = int(input(\"Number: \"))\n    print(\"Your number:\", number)\nexcept ValueError:\n    print(\"Numbers only.\")"
    },
    "initialCode": {
      "ko": "number = int(input(\"Number: \"))\nprint(\"Your number:\", number)",
      "en": "number = int(input(\"Number: \"))\nprint(\"Your number:\", number)",
      "ru": "number = int(input(\"Number: \"))\nprint(\"Your number:\", number)"
    },
    "sampleInput": {
      "ko": "5",
      "en": "5",
      "ru": "5"
    },
    "expectedOutput": {
      "ko": "Number: 5\nYour number: 5",
      "en": "Number: 5\nYour number: 5",
      "ru": "Number: 5\nYour number: 5"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "숫자 5로 실행",
          "en": "Run with 5",
          "ru": "Запуск с числом 5"
        },
        "input": {
          "ko": "5",
          "en": "5",
          "ru": "5"
        },
        "output": {
          "ko": "Number: 5\nYour number: 5",
          "en": "Number: 5\nYour number: 5",
          "ru": "Number: 5\nYour number: 5"
        }
      },
      {
        "name": {
          "ko": "apple로 바꿔 다시 실행",
          "en": "Replace with apple and run again",
          "ru": "Замените на apple и запустите снова"
        },
        "input": {
          "ko": "apple",
          "en": "apple",
          "ru": "apple"
        },
        "output": {
          "ko": "Number: apple\nNumbers only.",
          "en": "Number: apple\nNumbers only.",
          "ru": "Number: apple\nNumbers only."
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 7,
    "sourcePages": [
      8,
      9,
      10
    ],
    "sourceFile": "7.pdf",
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\n# TODO: 아래 두 줄 위에 try:를 쓰고, 두 줄을 공백 4칸 안쪽으로 옮기세요.\nnumber = int(input(\"Number: \"))\nprint(\"Your number:\", number)\n# TODO: try와 같은 위치에 except ValueError:를 쓰고 안쪽에서 Numbers only.를 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\n# TODO: Write try: above the next two lines and indent both lines by four spaces.\nnumber = int(input(\"Number: \"))\nprint(\"Your number:\", number)\n# TODO: Add except ValueError: aligned with try, then print Numbers only. inside it.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\n# TODO: Напишите try: перед следующими двумя строками и сдвиньте обе на четыре пробела.\nnumber = int(input(\"Number: \"))\nprint(\"Your number:\", number)\n# TODO: Добавьте except ValueError: на уровне try, затем выведите Numbers only. внутри этого блока.\n"
    },
    "starterHint": {
      "ko": "아직 오류 처리가 없는 두 줄입니다. 먼저 숫자 5로 실행하세요. try-except를 완성한 뒤 새로 실행해 apple도 시험합니다. 그전에는 apple을 넣으면 오류가 나는 것이 정상입니다.",
      "en": "These two lines do not handle errors yet. First run with 5. After adding try-except, run again with apple. Before completing it, apple will cause an error.",
      "ru": "В этих двух строках пока нет обработки ошибки. Сначала запустите с 5. После добавления try-except запустите ещё раз с apple. До завершения apple вызовет ошибку."
    }
  },
  {
    "id": "lesson-19",
    "menu": {
      "ko": "7주 · 한 번 구매",
      "en": "W7 · One purchase",
      "ru": "W7 · Одна покупка"
    },
    "title": {
      "ko": "7주차 · 카페와 자판기: 한 번 구매하기",
      "en": "Week 7 · Café and vending machine: one purchase",
      "ru": "Неделя 7 · Кафе и автомат: одна покупка"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 먼저 한 번만 구매하기</h3><p>한 번 돈을 읽고, 살 수 있는지 판단하고, 결과를 보여 주면 끝납니다. 반복문이나 함수는 필요 없습니다. V1 → V2 → V3 순서로 읽은 뒤 자판기 미션을 완성하세요.</p><p><b>한 단계씩 바뀌는 점:</b> V1은 가격 하나를 비교합니다. V2는 elif로 여러 가격을 비교합니다. V3는 잘못된 글자 입력에 안내를 더합니다. 각 예시는 독립된 프로그램이므로 하나씩 복사해 실행하세요.</p></section><section class=\"lesson-section\"><h3>2. 카페 V1 · 차 한 잔</h3><p>차 가격은 3,500원입니다. 코드를 실행한 뒤 <code>Money:</code>에 3500을 입력하고 Enter를 누르면 Tea가 출력됩니다. Money는 가진 돈이라는 뜻입니다. 이 단계는 0 이상의 정수만 사용합니다.</p><pre><code>money = int(input(&quot;Money: &quot;))\nif money &gt;= 3500:\n    print(&quot;Tea&quot;)\nelse:\n    print(&quot;Not enough&quot;)</code></pre><p><b>예상 결과</b></p><pre><code>Money: 3500\nTea</code></pre></section><section class=\"lesson-section\"><h3>3. 카페 V2 · 금액별 선택지</h3><p>라테 5,500원 → 아메리카노 4,500원 → 차 3,500원 순서로 큰 금액부터 검사합니다. 출력은 살 수 있는 선택지이며 여러 음료를 한꺼번에 샀다는 뜻은 아닙니다.</p><pre><code>money = int(input(&quot;Money: &quot;))\nif money &gt;= 5500:\n    print(&quot;Latte, Americano or Tea&quot;)\nelif money &gt;= 4500:\n    print(&quot;Americano or Tea&quot;)\nelif money &gt;= 3500:\n    print(&quot;Tea&quot;)\nelse:\n    print(&quot;Not enough&quot;)</code></pre><p><b>예상 결과</b></p><pre><code>Money: 4500\nAmericano or Tea</code></pre></section><section class=\"lesson-section\"><h3>4. 카페 V3 · 글자 입력에 안내</h3><p>V2를 try 안에 넣고 except ValueError 안내를 붙입니다. 음수는 정수 변환이 되므로 if로 따로 확인합니다. 5500, 4500, 3500, 3499, -1, apple을 한 번에 하나씩 시험하세요.</p><pre><code>try:\n    money = int(input(&quot;Money: &quot;))\n    if money &lt; 0:\n        print(&quot;Money cannot be negative.&quot;)\n    elif money &gt;= 5500:\n        print(&quot;Latte, Americano or Tea&quot;)\n    elif money &gt;= 4500:\n        print(&quot;Americano or Tea&quot;)\n    elif money &gt;= 3500:\n        print(&quot;Tea&quot;)\n    else:\n        print(&quot;Not enough&quot;)\nexcept ValueError:\n    print(&quot;Numbers only.&quot;)</code></pre><p><b>예상 결과</b></p><pre><code>Money: apple\nNumbers only.</code></pre></section><section class=\"lesson-section\"><h3>5. 오늘의 자판기 미션</h3><p>이번 미션의 음료 가격은 1,500원입니다. 가진 돈이 충분하면 거스름돈, 모자라면 부족한 금액을 보여 줍니다. Change=거스름돈, Need=부족한 돈, Bought=구매했습니다.</p></section><section class=\"lesson-section\"><h3>가격에도 이름 붙이기</h3><p>강의처럼 가격을 변수에 저장할 수도 있습니다. <code>tea = 3500</code>을 먼저 쓰면 <code>if money &gt;= tea:</code>로 비교할 수 있습니다. 같은 방법으로 <code>americano = 4500</code>, <code>latte = 5500</code>을 씁니다. 숫자를 여러 곳에 다시 쓰는 대신 가격 이름을 사용할 수 있습니다.</p></section><section class=\"problem-area\"><h3>미션 · 1,500원 자판기</h3><ol><li>Money: 로 정수 금액 한 줄을 읽으세요.</li><li>음수이면 Money cannot be negative.를 출력합니다.</li><li>1500 이상이면 Bought. Change: 뒤에 money - 1500을 출력합니다.</li><li>0~1499이면 Need: 뒤에 1500 - money를 출력합니다.</li><li>글자가 입력되면 except ValueError에서 Numbers only.를 출력합니다. 반복해서 묻지 않습니다.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Start with one purchase</h3><p>Read the money once, make a choice, show the result and finish. No loop or function is needed. Read V1, V2 and V3, then complete the vending machine task.</p><p><b>What changes:</b> V1 compares one price. V2 adds several price choices with elif. V3 adds a message for invalid text input. Each example is a separate program; copy and run one at a time.</p></section><section class=\"lesson-section\"><h3>2. Café V1 · A cup of tea</h3><p>Tea costs 3500 won. Run the code, answer <code>Money:</code> with 3500, and press Enter to see Tea. Money means the amount you have. Use non-negative integers at this stage.</p><pre><code>money = int(input(&quot;Money: &quot;))\nif money &gt;= 3500:\n    print(&quot;Tea&quot;)\nelse:\n    print(&quot;Not enough&quot;)</code></pre><p><b>Expected output</b></p><pre><code>Money: 3500\nTea</code></pre></section><section class=\"lesson-section\"><h3>3. Café V2 · Choices by budget</h3><p>Check the largest price first: Latte 5500, Americano 4500, Tea 3500. The output lists affordable choices; it does not mean all drinks were bought together.</p><pre><code>money = int(input(&quot;Money: &quot;))\nif money &gt;= 5500:\n    print(&quot;Latte, Americano or Tea&quot;)\nelif money &gt;= 4500:\n    print(&quot;Americano or Tea&quot;)\nelif money &gt;= 3500:\n    print(&quot;Tea&quot;)\nelse:\n    print(&quot;Not enough&quot;)</code></pre><p><b>Expected output</b></p><pre><code>Money: 4500\nAmericano or Tea</code></pre></section><section class=\"lesson-section\"><h3>4. Café V3 · A message for text input</h3><p>Put V2 inside try and add an except ValueError message. A negative number is still an integer, so check it with if. Try 5500, 4500, 3500, 3499, -1 and apple in separate runs.</p><pre><code>try:\n    money = int(input(&quot;Money: &quot;))\n    if money &lt; 0:\n        print(&quot;Money cannot be negative.&quot;)\n    elif money &gt;= 5500:\n        print(&quot;Latte, Americano or Tea&quot;)\n    elif money &gt;= 4500:\n        print(&quot;Americano or Tea&quot;)\n    elif money &gt;= 3500:\n        print(&quot;Tea&quot;)\n    else:\n        print(&quot;Not enough&quot;)\nexcept ValueError:\n    print(&quot;Numbers only.&quot;)</code></pre><p><b>Expected output</b></p><pre><code>Money: apple\nNumbers only.</code></pre></section><section class=\"lesson-section\"><h3>5. Today’s vending machine task</h3><p>In this mission, a drink costs 1500 won. Show the change when money is enough, or the missing amount when it is not. Change means money returned; Need means the missing amount.</p></section><section class=\"lesson-section\"><h3>Give prices names too</h3><p>As in the lecture, prices can be stored in variables. Write <code>tea = 3500</code> first, then compare with <code>if money &gt;= tea:</code>. Similarly, use <code>americano = 4500</code> and <code>latte = 5500</code>. A price name can replace repeated price numbers.</p></section><section class=\"problem-area\"><h3>Mission · A 1500-won vending machine</h3><ol><li>Read one integer with Money: .</li><li>For a negative amount print Money cannot be negative.</li><li>For 1500 or more print Bought. Change: followed by money - 1500.</li><li>For 0–1499 print Need: followed by 1500 - money.</li><li>For text that cannot become an integer, except ValueError prints Numbers only. Do not ask again in a loop.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Сначала одна покупка</h3><p>Один раз читаем сумму, проверяем условие, показываем результат и заканчиваем. Цикл и функция не нужны. Прочитайте V1, V2, V3, затем выполните задание с автоматом.</p><p><b>Что добавляется:</b> V1 сравнивает одну цену. V2 добавляет несколько цен через elif. V3 добавляет подсказку при вводе слова. Каждый пример — отдельная программа: копируйте и запускайте по одному.</p></section><section class=\"lesson-section\"><h3>2. Кафе V1 · Чашка чая</h3><p>Чай стоит 3500 вон. Запустите код, на вопрос <code>Money:</code> введите 3500 и нажмите Enter: появится Tea. Money — ваши деньги. На этом этапе используйте целые неотрицательные числа.</p><pre><code>money = int(input(&quot;Money: &quot;))\nif money &gt;= 3500:\n    print(&quot;Tea&quot;)\nelse:\n    print(&quot;Not enough&quot;)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>Money: 3500\nTea</code></pre></section><section class=\"lesson-section\"><h3>3. Кафе V2 · Выбор по сумме</h3><p>Проверяем цены от большей к меньшей: Latte 5500, Americano 4500, Tea 3500. Результат перечисляет доступные варианты, а не означает покупку всех напитков сразу.</p><pre><code>money = int(input(&quot;Money: &quot;))\nif money &gt;= 5500:\n    print(&quot;Latte, Americano or Tea&quot;)\nelif money &gt;= 4500:\n    print(&quot;Americano or Tea&quot;)\nelif money &gt;= 3500:\n    print(&quot;Tea&quot;)\nelse:\n    print(&quot;Not enough&quot;)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>Money: 4500\nAmericano or Tea</code></pre></section><section class=\"lesson-section\"><h3>4. Кафе V3 · Подсказка при вводе слова</h3><p>Поместите V2 в try и добавьте except ValueError. Отрицательное число тоже преобразуется в int, поэтому его отдельно проверяем через if. Испытайте 5500, 4500, 3500, 3499, -1 и apple отдельными запусками.</p><pre><code>try:\n    money = int(input(&quot;Money: &quot;))\n    if money &lt; 0:\n        print(&quot;Money cannot be negative.&quot;)\n    elif money &gt;= 5500:\n        print(&quot;Latte, Americano or Tea&quot;)\n    elif money &gt;= 4500:\n        print(&quot;Americano or Tea&quot;)\n    elif money &gt;= 3500:\n        print(&quot;Tea&quot;)\n    else:\n        print(&quot;Not enough&quot;)\nexcept ValueError:\n    print(&quot;Numbers only.&quot;)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>Money: apple\nNumbers only.</code></pre></section><section class=\"lesson-section\"><h3>5. Задание с автоматом</h3><p>Цена напитка в автомате — 1500 вон. Если денег достаточно, покажите сдачу; иначе — недостающую сумму. Change — сдача, Need — сколько не хватает, Bought — покупка выполнена.</p></section><section class=\"lesson-section\"><h3>Ценам тоже можно дать имена</h3><p>Как в лекции, цены можно сохранить в переменных. Сначала напишите <code>tea = 3500</code>, затем сравнивайте через <code>if money &gt;= tea:</code>. Так же можно задать <code>americano = 4500</code> и <code>latte = 5500</code>. Вместо повторения чисел можно использовать названия цен.</p></section><section class=\"problem-area\"><h3>Задание · Автомат с ценой 1500 вон</h3><ol><li>Прочитайте одно целое число с подсказкой Money: .</li><li>Для отрицательной суммы выведите Money cannot be negative.</li><li>Для суммы от 1500 выведите Bought. Change: и money - 1500.</li><li>Для суммы 0–1499 выведите Need: и 1500 - money.</li><li>При слове, которое нельзя преобразовать в int, except ValueError выводит Numbers only. Повторять вопрос в цикле не нужно.</li></ol></section>"
    },
    "answer": {
      "ko": "try:\n    money = int(input(\"Money: \"))\n    if money < 0:\n        print(\"Money cannot be negative.\")\n    elif money >= 1500:\n        print(\"Bought. Change:\", money - 1500)\n    else:\n        print(\"Need:\", 1500 - money)\nexcept ValueError:\n    print(\"Numbers only.\")",
      "en": "try:\n    money = int(input(\"Money: \"))\n    if money < 0:\n        print(\"Money cannot be negative.\")\n    elif money >= 1500:\n        print(\"Bought. Change:\", money - 1500)\n    else:\n        print(\"Need:\", 1500 - money)\nexcept ValueError:\n    print(\"Numbers only.\")",
      "ru": "try:\n    money = int(input(\"Money: \"))\n    if money < 0:\n        print(\"Money cannot be negative.\")\n    elif money >= 1500:\n        print(\"Bought. Change:\", money - 1500)\n    else:\n        print(\"Need:\", 1500 - money)\nexcept ValueError:\n    print(\"Numbers only.\")"
    },
    "initialCode": {
      "ko": "money = int(input(\"Money: \"))\nif money >= 3500:\n    print(\"Tea\")\nelse:\n    print(\"Not enough\")",
      "en": "money = int(input(\"Money: \"))\nif money >= 3500:\n    print(\"Tea\")\nelse:\n    print(\"Not enough\")",
      "ru": "money = int(input(\"Money: \"))\nif money >= 3500:\n    print(\"Tea\")\nelse:\n    print(\"Not enough\")"
    },
    "sampleInput": {
      "ko": "3500",
      "en": "3500",
      "ru": "3500"
    },
    "expectedOutput": {
      "ko": "Money: 3500\nTea",
      "en": "Money: 3500\nTea",
      "ru": "Money: 3500\nTea"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "돈이 충분함",
          "en": "Enough money",
          "ru": "Денег достаточно"
        },
        "input": {
          "ko": "2000",
          "en": "2000",
          "ru": "2000"
        },
        "output": {
          "ko": "Money: 2000\nBought. Change: 500",
          "en": "Money: 2000\nBought. Change: 500",
          "ru": "Money: 2000\nBought. Change: 500"
        }
      },
      {
        "name": {
          "ko": "정확히 1500",
          "en": "Exactly 1500",
          "ru": "Ровно 1500"
        },
        "input": {
          "ko": "1500",
          "en": "1500",
          "ru": "1500"
        },
        "output": {
          "ko": "Money: 1500\nBought. Change: 0",
          "en": "Money: 1500\nBought. Change: 0",
          "ru": "Money: 1500\nBought. Change: 0"
        }
      },
      {
        "name": {
          "ko": "1원 부족",
          "en": "One won short",
          "ru": "Не хватает одной воны"
        },
        "input": {
          "ko": "1499",
          "en": "1499",
          "ru": "1499"
        },
        "output": {
          "ko": "Money: 1499\nNeed: 1",
          "en": "Money: 1499\nNeed: 1",
          "ru": "Money: 1499\nNeed: 1"
        }
      },
      {
        "name": {
          "ko": "돈이 0",
          "en": "Zero money",
          "ru": "Ноль денег"
        },
        "input": {
          "ko": "0",
          "en": "0",
          "ru": "0"
        },
        "output": {
          "ko": "Money: 0\nNeed: 1500",
          "en": "Money: 0\nNeed: 1500",
          "ru": "Money: 0\nNeed: 1500"
        }
      },
      {
        "name": {
          "ko": "음수 금액",
          "en": "Negative amount",
          "ru": "Отрицательная сумма"
        },
        "input": {
          "ko": "-1",
          "en": "-1",
          "ru": "-1"
        },
        "output": {
          "ko": "Money: -1\nMoney cannot be negative.",
          "en": "Money: -1\nMoney cannot be negative.",
          "ru": "Money: -1\nMoney cannot be negative."
        }
      },
      {
        "name": {
          "ko": "글자 입력",
          "en": "A word",
          "ru": "Слово вместо числа"
        },
        "input": {
          "ko": "apple",
          "en": "apple",
          "ru": "apple"
        },
        "output": {
          "ko": "Money: apple\nNumbers only.",
          "en": "Money: apple\nNumbers only.",
          "ru": "Money: apple\nNumbers only."
        }
      }
    ],
    "sourceWeek": 7,
    "sourcePages": [
      11,
      12,
      13,
      14,
      15
    ],
    "needsInput": true,
    "sourceFile": "7.pdf",
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nmoney = int(input(\"Money: \"))\n# TODO: 음수, 1500 이상, 0~1499를 if-elif-else로 나누어 미션의 결과를 출력하세요.\n# TODO: 입력과 판단 부분을 try 안에 넣고, except ValueError에서 Numbers only.를 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nmoney = int(input(\"Money: \"))\n# TODO: Use if-elif-else for negative money, 1500 or more, and 0–1499; print the mission results.\n# TODO: Put the input and decisions inside try. Print Numbers only. in except ValueError.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nmoney = int(input(\"Money: \"))\n# TODO: Через if-elif-else разделите отрицательную сумму, сумму от 1500 и 0–1499; выведите результаты задания.\n# TODO: Поместите ввод и проверки в try. В except ValueError выведите Numbers only.\n"
    },
    "starterHint": {
      "ko": "Money: 입력만 있습니다. 자판기 가격은 1500입니다. 판단과 try-except를 완성하기 전에는 정수 금액만 사용하세요. 완성 후 음수·1500·1499·apple을 각각 새로 실행해 확인합니다.",
      "en": "Only Money: input is ready. The vending price is 1500. Use integer amounts until the decisions and try-except are complete. Then run separately with a negative number, 1500, 1499, and apple.",
      "ru": "Готов только ввод Money:. Цена в автомате — 1500. Пока проверки и try-except не дописаны, вводите только целые суммы. Затем проверьте отдельными запусками отрицательное число, 1500, 1499 и apple."
    }
  },
  {
    "id": "lesson-20",
    "menu": {
      "ko": "9주 · 리스트(List)",
      "en": "W9 · List Basics",
      "ru": "W9 · Основы списков"
    },
    "title": {
      "ko": "여러 개의 데이터를 하나로! 리스트",
      "en": "Multiple Data in One! Lists",
      "ru": "Несколько данных в одном! Списки"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 9주차: 여러 값을 한 바구니에</h3><p>음식이 100개라면 food1, food2처럼 변수를 계속 늘리기 어렵습니다. <b>리스트(list)</b>는 여러 값을 순서대로 모아 둔 바구니입니다. 하나의 이름 foods로 여러 음식을 관리합니다.</p><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(foods)\nprint(type(foods))</code></pre><pre class=\"example-output\">[&#x27;pizza&#x27;, &#x27;chicken&#x27;, &#x27;ramen&#x27;]\n&lt;class &#x27;list&#x27;&gt;</pre><ul><li>대괄호 <code>[ ]</code>로 열고 닫고, 값 사이를 쉼표 <code>,</code>로 구분합니다. 안에 든 각 값을 <b>원소(element)</b>라고 합니다.</li><li>음식 이름은 문자열이므로 각각 따옴표로 감쌉니다. 리스트 전체를 따옴표로 감싸지는 않습니다.</li><li>리스트는 현재 순서를 기억합니다. 우리가 추가·삭제하면 내용과 일부 위치가 바뀝니다.</li><li><code>empty = []</code>는 빈 리스트입니다. <code>len(empty)</code>는 0입니다.</li></ul></section><section class=\"lesson-section\"><h3>2. 인덱스: 위치 번호로 한 개 꺼내기</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(foods[0])\nprint(foods[2])\nprint(foods[-1])\nprint(foods[-2])\nprint(len(foods))</code></pre><pre class=\"example-output\">pizza\nramen\nramen\nchicken\n3</pre><ul><li><code>foods[0]</code>은 첫 번째 값, <code>foods[1]</code>은 두 번째 값입니다. 양의 방향 위치 번호는 <b>0부터</b> 시작합니다.</li><li>뒤에서 세면 <code>-1</code>이 마지막, <code>-2</code>가 뒤에서 두 번째입니다. 이 예제에서 2와 -1은 같은 ramen을 가리킵니다.</li><li><code>len(foods)</code>는 위치 번호가 아니라 <b>원소 개수</b> 3을 알려 줍니다. 길이가 3이면 앞에서 쓰는 유효한 번호는 0, 1, 2입니다.</li><li><code>foods[3]</code>은 범위를 벗어나 IndexError입니다. 빈 리스트에서는 [0]과 [-1]도 사용할 수 없습니다.</li></ul><p>개수로 조건을 만들 수도 있습니다. <code>if len(foods) &gt; 5:</code>는 “5개보다 많은가?”라는 질문입니다.</p></section><section class=\"lesson-section\"><h3>3. 슬라이싱: 구간을 새 리스트로 가져오기</h3><pre><code>numbers = [1, 2, 3, 4, 5, 6, 7]\nprint(numbers[0:3])\nprint(numbers[:3])\nprint(numbers[3:])\nprint(numbers)</code></pre><pre class=\"example-output\">[1, 2, 3]\n[1, 2, 3]\n[4, 5, 6, 7]\n[1, 2, 3, 4, 5, 6, 7]</pre><ol><li><code>[시작:끝]</code>에서 시작 위치는 포함하고 <b>끝 위치는 포함하지 않습니다</b>. 가운데 기호는 콜론 <code>:</code>입니다.</li><li><code>numbers[0:3]</code>은 0, 1, 2번 값입니다. 원소 값 3까지라는 뜻이 아니라 위치 3 직전까지라는 뜻입니다.</li><li><code>numbers[:3]</code>은 처음부터, <code>numbers[3:]</code>은 3번부터 끝까지입니다.</li><li>슬라이싱은 새 리스트를 만들며 원래 numbers를 지우지 않습니다. 번호 하나를 쓰는 인덱싱과 구별하세요.</li></ol></section><section class=\"lesson-section\"><h3>4. append: 맨 뒤에 하나 추가하기</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;]\nfoods.append(&quot;ramen&quot;)\nprint(foods)\nprint(len(foods))</code></pre><pre class=\"example-output\">[&#x27;pizza&#x27;, &#x27;chicken&#x27;, &#x27;ramen&#x27;]\n3</pre><ul><li><code>foods.append(\"ramen\")</code>은 foods 뒤에 원소 하나를 추가합니다. 점 <code>.</code>은 이 리스트의 기능을 사용한다는 표시입니다.</li><li>append는 원래 리스트를 바로 바꿉니다. <code>foods.append(\"ramen\")</code>처럼 한 줄로 쓰고 앞에 <code>foods =</code>를 붙이지 마세요.</li><li>상태를 보려면 append 다음 줄에 <code>print(foods)</code>를 씁니다.</li></ul><details class=\"lesson-extra\"><summary>왜 다시 저장하면 안 되나요? · None</summary><ul><li>append는 기존 리스트를 바꾸고 <code>None</code>을 돌려줍니다. None은 “반환할 값이 없음”을 나타내는 값이며 빈 리스트 []와 다릅니다.</li><li><b>잘못된 사용:</b> <code>foods = foods.append(\"ramen\")</code>. 추가 자체는 일어나지만 foods라는 이름에 None을 다시 저장합니다. 앞의 <code>foods =</code>를 빼세요.</li></ul></details></section><section class=\"lesson-section\"><h3>5. remove: 값으로 하나 삭제하기</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;pizza&quot;]\nfoods.remove(&quot;pizza&quot;)\nprint(foods)</code></pre><pre class=\"example-output\">[&#x27;chicken&#x27;, &#x27;pizza&#x27;]</pre><p><code>remove(\"pizza\")</code>는 위치 번호가 아니라 값으로 찾습니다. 같은 값이 여러 개면 <b>처음 일치하는 하나만</b> 지웁니다. 없는 값을 지우면 <code>ValueError</code>가 납니다. remove도 원래 리스트를 바꾸며 None을 반환하므로 <code>foods = foods.remove(...)</code>로 쓰지 않습니다.</p></section><section class=\"lesson-section\"><h3>6. 장바구니: 빈 리스트 → 입력 → 추가 → 확인</h3><pre><code>shopping = []\nitem = input(&quot;Add item: &quot;)\nshopping.append(item)\nprint(shopping)\nprint(len(shopping))</code></pre><pre class=\"example-output\">Add item: milk\n[&#x27;milk&#x27;]\n1</pre><ol><li><code>shopping = []</code>로 빈 장바구니를 만듭니다.</li><li>코드를 실행하고 <code>Add item:</code>이 나오면 <code>milk</code>만 입력한 뒤 Enter를 누르세요. input()이 읽은 답은 item에 저장됩니다. Add item은 “물건 추가”라는 질문입니다.</li><li><code>shopping.append(item)</code>은 변수에 든 값을 넣습니다. <code>\"item\"</code>이라고 쓰면 글자 item이 들어갑니다.</li><li>print와 len으로 내용과 개수를 확인합니다.</li></ol></section><section class=\"lesson-section\"><h3>7. in으로 확인하고 안전하게 삭제</h3><pre><code>shopping = [&quot;milk&quot;, &quot;bread&quot;]\nremove_item = input(&quot;Remove item: &quot;)\nif remove_item in shopping:\n    shopping.remove(remove_item)\n    print(&quot;Removed&quot;)\nelse:\n    print(&quot;Not found&quot;)\nprint(shopping)</code></pre><pre class=\"example-output\">Remove item: milk\nRemoved\n[&#x27;bread&#x27;]</pre><ol><li><code>remove_item in shopping</code>은 “이 값이 리스트 안에 있나?”를 True 또는 False로 알려 줍니다.</li><li>있으면 if 아래에서 remove를 실행합니다. 없으면 else 아래에서 Not found를 출력합니다.</li><li>if와 else 끝에 콜론을 쓰고, 안쪽은 4칸 들여씁니다. 마지막 print는 들여쓰기를 빼서 두 경로 모두 실행합니다.</li></ol><p>같은 코드에 soap을 입력하면 Not found가 나오고 shopping은 그대로입니다. 값의 대소문자와 공백도 비교에 영향을 줍니다.</p></section><section class=\"lesson-section\"><h3>8. 다섯 가지 실수 점검</h3><ul><li><b>IndexError:</b> len으로 개수를 확인하고 0부터 시작하는 인덱스를 쓰세요. 비어 있으면 먼저 원소를 추가하세요.</li><li><b>None이 저장됨:</b> append 또는 remove 앞의 <code>shopping =</code>를 지우고 시작 코드부터 다시 실행하세요.</li><li><b>괄호 종류:</b> 이 리스트는 <code>[\"milk\"]</code>처럼 대괄호 <code>[ ]</code>로 적습니다. 소괄호 <code>( )</code>로 바꾸지 마세요.</li><li><b>AttributeError:</b> <code>\"milk\"</code>는 문자열이라 append가 없습니다. <code>[\"milk\"]</code>처럼 리스트를 만드세요.</li><li><b>ValueError:</b> 삭제하려는 값이 있는지 <code>in</code>으로 먼저 검사하세요.</li></ul></section><section class=\"lesson-section\"><h3>따로 해 보는 작은 연습</h3><div class=\"mini-practice\"><h4>작은 연습 · 인덱스와 슬라이싱</h4><p>foods의 첫 항목과 처음 두 항목을 각각 출력하세요. 첫 위치는 0, 끝 위치 2는 슬라이싱에 포함하지 않습니다.</p><p>예상 결과</p><pre><code>rice\n[&#x27;rice&#x27;, &#x27;tea&#x27;]</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>foods = [&quot;rice&quot;, &quot;tea&quot;, &quot;bread&quot;]\nprint(foods[0])\nprint(foods[:2])</code></pre></details></div><div class=\"mini-practice\"><h4>작은 연습 · 추가하고 하나 삭제하기</h4><p>빈 리스트를 만들고 milk, bread를 추가하세요. milk가 있는지 확인한 뒤 삭제하고 남은 리스트를 출력하세요.</p><p>예상 결과</p><pre><code>[&#x27;bread&#x27;]</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>shopping = []\nshopping.append(&quot;milk&quot;)\nshopping.append(&quot;bread&quot;)\nif &quot;milk&quot; in shopping:\n    shopping.remove(&quot;milk&quot;)\nprint(shopping)</code></pre></details></div></section><section class=\"problem-area\"><h3>필수 미션 · 물건 하나 추가하기</h3><p>위의 foods 예시는 위치 번호를 읽는 연습입니다. 이번 미션은 <code>shopping</code>에 새 물건을 추가하는 연습입니다. <b>첫 위치 번호는 0, 물건 개수는 len(shopping)</b>이라는 차이를 기억하세요.</p><ol><li>shopping에 milk와 bread를 담은 리스트를 만드세요.</li><li>Add item: 으로 물건 하나를 읽고 append로 추가하세요.</li><li>First: 와 첫 항목, Last: 와 마지막 항목, Count: 와 개수를 차례로 출력하세요.</li><li>실행 후 Add item:에 물건 이름 하나를 입력하고 Enter를 누르세요. First=처음, Last=마지막, Count=개수입니다. 예를 들어 rice를 추가하면 처음은 milk, 마지막은 rice, 개수는 3입니다.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Week 9: many values in one basket</h3><p>With 100 foods, separate names such as food1 and food2 become hard to manage. A <b>list</b> is an ordered basket of values. One name, foods, can hold a collection of foods.</p><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(foods)\nprint(type(foods))</code></pre><pre class=\"example-output\">[&#x27;pizza&#x27;, &#x27;chicken&#x27;, &#x27;ramen&#x27;]\n&lt;class &#x27;list&#x27;&gt;</pre><ul><li>Open and close with square brackets <code>[ ]</code>; separate values with commas <code>,</code>. Each value is an <b>element</b>.</li><li>Each food name is a string, so it needs quotes. Do not put quotes around the whole list.</li><li>A list keeps its current order. Adding or removing elements changes its contents and may change positions.</li><li><code>empty = []</code> creates an empty list. <code>len(empty)</code> is 0.</li></ul></section><section class=\"lesson-section\"><h3>2. Index: get one item by position</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(foods[0])\nprint(foods[2])\nprint(foods[-1])\nprint(foods[-2])\nprint(len(foods))</code></pre><pre class=\"example-output\">pizza\nramen\nramen\nchicken\n3</pre><ul><li><code>foods[0]</code> is the first value; <code>foods[1]</code> is the second. Counting positions from the front starts at <b>0</b>.</li><li>From the back, <code>-1</code> means the last value and <code>-2</code> means the second from last. Here 2 and -1 both select ramen.</li><li><code>len(foods)</code> gives the <b>number of elements</b>, 3, not a position. For length 3, valid nonnegative indexes are 0, 1, and 2.</li><li><code>foods[3]</code> is outside the list and raises IndexError. In an empty list, both [0] and [-1] are invalid.</li></ul><p>You can use the count in a condition: <code>if len(foods) &gt; 5:</code> asks “Are there more than five items?”.</p></section><section class=\"lesson-section\"><h3>3. Slicing: get a range as a new list</h3><pre><code>numbers = [1, 2, 3, 4, 5, 6, 7]\nprint(numbers[0:3])\nprint(numbers[:3])\nprint(numbers[3:])\nprint(numbers)</code></pre><pre class=\"example-output\">[1, 2, 3]\n[1, 2, 3]\n[4, 5, 6, 7]\n[1, 2, 3, 4, 5, 6, 7]</pre><ol><li>In <code>[start:end]</code>, start is included and <b>end is excluded</b>. The middle symbol is a colon <code>:</code>.</li><li><code>numbers[0:3]</code> selects positions 0, 1, and 2. It means before position 3, not “up to the value 3”.</li><li><code>numbers[:3]</code> starts at the beginning. <code>numbers[3:]</code> starts at position 3 and goes to the end.</li><li>A slice creates a new list; it does not remove values from numbers. This is different from indexing with a single number.</li></ol></section><section class=\"lesson-section\"><h3>4. append: add one item at the end</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;]\nfoods.append(&quot;ramen&quot;)\nprint(foods)\nprint(len(foods))</code></pre><pre class=\"example-output\">[&#x27;pizza&#x27;, &#x27;chicken&#x27;, &#x27;ramen&#x27;]\n3</pre><ul><li><code>foods.append(\"ramen\")</code> adds one element at the end. The dot <code>.</code> accesses an operation belonging to this list.</li><li>append changes the list directly. Write <code>foods.append(\"ramen\")</code> on its own; do not put <code>foods =</code> before it.</li><li>To see the updated state, put <code>print(foods)</code> on the next line.</li></ul><details class=\"lesson-extra\"><summary>Why not assign it back? · None</summary><ul><li>append changes the existing list and returns <code>None</code>. None means there is no result value to use here; it is different from an empty list [].</li><li><b>Incorrect use:</b> <code>foods = foods.append(\"ramen\")</code>. The item is added, but then the name foods is assigned None. Remove the leading <code>foods =</code>.</li></ul></details></section><section class=\"lesson-section\"><h3>5. remove: delete one matching value</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;pizza&quot;]\nfoods.remove(&quot;pizza&quot;)\nprint(foods)</code></pre><pre class=\"example-output\">[&#x27;chicken&#x27;, &#x27;pizza&#x27;]</pre><p><code>remove(\"pizza\")</code> looks for a value, not a position. When the value appears more than once, it removes only the <b>first match</b>. A missing value raises <code>ValueError</code>. remove also changes the existing list and returns None, so do not write <code>foods = foods.remove(...)</code>.</p></section><section class=\"lesson-section\"><h3>6. Shopping cart: empty → input → add → check</h3><pre><code>shopping = []\nitem = input(&quot;Add item: &quot;)\nshopping.append(item)\nprint(shopping)\nprint(len(shopping))</code></pre><pre class=\"example-output\">Add item: milk\n[&#x27;milk&#x27;]\n1</pre><ol><li>Start with an empty cart: <code>shopping = []</code>.</li><li>Run the code. When <code>Add item:</code> appears, type only <code>milk</code> and press Enter. input() stores that answer in item. Add item asks for the item to add.</li><li><code>shopping.append(item)</code> adds the value in the variable. Writing <code>\"item\"</code> would add the literal word item instead.</li><li>Use print and len to check the contents and count.</li></ol></section><section class=\"lesson-section\"><h3>7. Check with in before deleting</h3><pre><code>shopping = [&quot;milk&quot;, &quot;bread&quot;]\nremove_item = input(&quot;Remove item: &quot;)\nif remove_item in shopping:\n    shopping.remove(remove_item)\n    print(&quot;Removed&quot;)\nelse:\n    print(&quot;Not found&quot;)\nprint(shopping)</code></pre><pre class=\"example-output\">Remove item: milk\nRemoved\n[&#x27;bread&#x27;]</pre><ol><li><code>remove_item in shopping</code> answers “Is this value in the list?” with True or False.</li><li>If it exists, run remove inside if. Otherwise, show Not found inside else.</li><li>Use colons after if and else, with four-space indentation inside. The last print is outside both branches, so it runs in either case.</li></ol><p>With soap as input, the same code shows Not found and keeps the cart unchanged. Letter case and spaces also matter when comparing values.</p></section><section class=\"lesson-section\"><h3>8. Check five common mistakes</h3><ul><li><b>IndexError:</b> check len and use zero-based indexes. If the list is empty, add an item before indexing.</li><li><b>Saved None:</b> remove <code>shopping =</code> before append or remove, then run the program again from the beginning.</li><li><b>Bracket type:</b> For this list, use square brackets: <code>[\"milk\"]</code>. Do not replace them with <code>( )</code>.</li><li><b>AttributeError:</b> <code>\"milk\"</code> is a string and has no append. Make a list such as <code>[\"milk\"]</code>.</li><li><b>ValueError:</b> check that the value exists with <code>in</code> before removing it.</li></ul></section><section class=\"lesson-section\"><h3>Separate small practices</h3><div class=\"mini-practice\"><h4>Small practice · Index and slice</h4><p>Print the first item and the first two items of foods. The first index is 0; slice end 2 is excluded.</p><p>Expected output</p><pre><code>rice\n[&#x27;rice&#x27;, &#x27;tea&#x27;]</code></pre><details><summary>Show a sample answer</summary><pre><code>foods = [&quot;rice&quot;, &quot;tea&quot;, &quot;bread&quot;]\nprint(foods[0])\nprint(foods[:2])</code></pre></details></div><div class=\"mini-practice\"><h4>Small practice · Add and remove one item</h4><p>Start with an empty list. Append milk and bread. Check for milk before removing it, then print the list.</p><p>Expected output</p><pre><code>[&#x27;bread&#x27;]</code></pre><details><summary>Show a sample answer</summary><pre><code>shopping = []\nshopping.append(&quot;milk&quot;)\nshopping.append(&quot;bread&quot;)\nif &quot;milk&quot; in shopping:\n    shopping.remove(&quot;milk&quot;)\nprint(shopping)</code></pre></details></div></section><section class=\"problem-area\"><h3>Required mission · Add one item</h3><p>The foods examples practise reading positions. This mission adds an item to <code>shopping</code>. Remember: <b>the first position is 0; len(shopping) is the number of items</b>.</p><ol><li>Make shopping with milk and bread.</li><li>Read one item with Add item: and append it.</li><li>Print First: with the first item, Last: with the last item, and Count: with the length.</li><li>After running, answer Add item: with one item name and press Enter. For example, adding rice makes the first item milk, the last item rice, and the count 3.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Неделя 9: много значений в одной корзине</h3><p>Для 100 продуктов трудно создавать отдельные food1, food2 и так далее. <b>Список (list)</b> — упорядоченная корзина значений. Одно имя foods позволяет хранить несколько продуктов.</p><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(foods)\nprint(type(foods))</code></pre><pre class=\"example-output\">[&#x27;pizza&#x27;, &#x27;chicken&#x27;, &#x27;ramen&#x27;]\n&lt;class &#x27;list&#x27;&gt;</pre><ul><li>Используйте квадратные скобки <code>[ ]</code> и разделяйте значения запятыми <code>,</code>. Каждое значение называется <b>элементом</b>.</li><li>Названия продуктов — строки, поэтому каждому нужны кавычки. Не заключайте в кавычки весь список.</li><li>Список хранит текущий порядок. Добавление и удаление меняют содержимое и иногда позиции элементов.</li><li><code>empty = []</code> создаёт пустой список. <code>len(empty)</code> равен 0.</li></ul></section><section class=\"lesson-section\"><h3>2. Индекс: получить один элемент по позиции</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(foods[0])\nprint(foods[2])\nprint(foods[-1])\nprint(foods[-2])\nprint(len(foods))</code></pre><pre class=\"example-output\">pizza\nramen\nramen\nchicken\n3</pre><ul><li><code>foods[0]</code> — первый элемент, <code>foods[1]</code> — второй. Нумерация спереди начинается с <b>0</b>.</li><li>С конца <code>-1</code> означает последний элемент, <code>-2</code> — предпоследний. Здесь 2 и -1 выбирают один и тот же ramen.</li><li><code>len(foods)</code> сообщает <b>количество элементов</b>, 3, а не позицию. Для длины 3 допустимые неотрицательные индексы — 0, 1, 2.</li><li><code>foods[3]</code> выходит за границы и вызывает IndexError. В пустом списке нельзя использовать ни [0], ни [-1].</li></ul><p>Количество можно проверить условием: <code>if len(foods) &gt; 5:</code> означает «больше ли пяти элементов?».</p></section><section class=\"lesson-section\"><h3>3. Срез: получить часть как новый список</h3><pre><code>numbers = [1, 2, 3, 4, 5, 6, 7]\nprint(numbers[0:3])\nprint(numbers[:3])\nprint(numbers[3:])\nprint(numbers)</code></pre><pre class=\"example-output\">[1, 2, 3]\n[1, 2, 3]\n[4, 5, 6, 7]\n[1, 2, 3, 4, 5, 6, 7]</pre><ol><li>В <code>[начало:конец]</code> начало включается, а <b>конец не включается</b>. Между ними стоит двоеточие <code>:</code>.</li><li><code>numbers[0:3]</code> выбирает позиции 0, 1, 2. Речь о позиции перед индексом 3, а не о значении 3.</li><li><code>numbers[:3]</code> берёт с начала. <code>numbers[3:]</code> берёт с позиции 3 до конца.</li><li>Срез создаёт новый список и не удаляет элементы из numbers. Это отличается от выбора одного элемента по индексу.</li></ol></section><section class=\"lesson-section\"><h3>4. append: добавить один элемент в конец</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;]\nfoods.append(&quot;ramen&quot;)\nprint(foods)\nprint(len(foods))</code></pre><pre class=\"example-output\">[&#x27;pizza&#x27;, &#x27;chicken&#x27;, &#x27;ramen&#x27;]\n3</pre><ul><li><code>foods.append(\"ramen\")</code> добавляет элемент в конец. Точка <code>.</code> обращается к действию этого списка.</li><li>append сразу меняет сам список. Пишите <code>foods.append(\"ramen\")</code> отдельно, без <code>foods =</code> в начале.</li><li>Чтобы увидеть новое состояние, следующей строкой напишите <code>print(foods)</code>.</li></ul><details class=\"lesson-extra\"><summary>Почему нельзя присваивать обратно? · None</summary><ul><li>append меняет существующий список и возвращает <code>None</code>. Здесь это означает отсутствие возвращаемого результата; None отличается от пустого списка [].</li><li><b>Неправильно:</b> <code>foods = foods.append(\"ramen\")</code>. Элемент добавится, но затем имени foods присвоится None. Уберите <code>foods =</code> в начале.</li></ul></details></section><section class=\"lesson-section\"><h3>5. remove: удалить одно совпадение по значению</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;pizza&quot;]\nfoods.remove(&quot;pizza&quot;)\nprint(foods)</code></pre><pre class=\"example-output\">[&#x27;chicken&#x27;, &#x27;pizza&#x27;]</pre><p><code>remove(\"pizza\")</code> ищет значение, а не номер позиции. При повторяющихся значениях удаляется только <b>первое совпадение</b>. Если значения нет, возникает <code>ValueError</code>. remove тоже меняет исходный список и возвращает None, поэтому не пишите <code>foods = foods.remove(...)</code>.</p></section><section class=\"lesson-section\"><h3>6. Корзина: пустая → ввод → добавление → проверка</h3><pre><code>shopping = []\nitem = input(&quot;Add item: &quot;)\nshopping.append(item)\nprint(shopping)\nprint(len(shopping))</code></pre><pre class=\"example-output\">Add item: milk\n[&#x27;milk&#x27;]\n1</pre><ol><li>Создайте пустую корзину: <code>shopping = []</code>.</li><li>Запустите код. После <code>Add item:</code> введите только <code>milk</code> и нажмите Enter. input() сохранит ответ в item. Add item означает «добавить товар».</li><li><code>shopping.append(item)</code> добавляет значение переменной. <code>\"item\"</code> добавило бы сам текст item.</li><li>Проверьте содержимое через print и количество через len.</li></ol></section><section class=\"lesson-section\"><h3>7. Перед удалением проверьте через in</h3><pre><code>shopping = [&quot;milk&quot;, &quot;bread&quot;]\nremove_item = input(&quot;Remove item: &quot;)\nif remove_item in shopping:\n    shopping.remove(remove_item)\n    print(&quot;Removed&quot;)\nelse:\n    print(&quot;Not found&quot;)\nprint(shopping)</code></pre><pre class=\"example-output\">Remove item: milk\nRemoved\n[&#x27;bread&#x27;]</pre><ol><li><code>remove_item in shopping</code> отвечает True или False на вопрос «есть ли это значение в списке?».</li><li>Если есть, remove выполняется внутри if. Если нет, ветка else выводит Not found.</li><li>После if и else нужны двоеточия, внутри — отступ четыре пробела. Последний print находится вне веток и выполняется в обоих случаях.</li></ol><p>При вводе soap тот же код выведет Not found и не изменит корзину. Регистр букв и пробелы тоже важны при сравнении.</p></section><section class=\"lesson-section\"><h3>8. Пять частых ошибок</h3><ul><li><b>IndexError:</b> проверьте len и нумерацию с нуля. В пустой список сначала добавьте элемент.</li><li><b>Сохранён None:</b> уберите <code>shopping =</code> перед append или remove и запустите программу сначала.</li><li><b>Вид скобок:</b> Для этого списка используйте квадратные скобки: <code>[\"milk\"]</code>. Не заменяйте их круглыми <code>( )</code>.</li><li><b>AttributeError:</b> у строки <code>\"milk\"</code> нет append. Создайте список <code>[\"milk\"]</code>.</li><li><b>ValueError:</b> перед удалением проверьте наличие значения через <code>in</code>.</li></ul></section><section class=\"lesson-section\"><h3>Отдельные короткие упражнения</h3><div class=\"mini-practice\"><h4>Короткая практика · Индекс и срез</h4><p>Выведите первый элемент foods и первые два элемента. Первый индекс — 0, граница среза 2 не включается.</p><p>Ожидаемый результат</p><pre><code>rice\n[&#x27;rice&#x27;, &#x27;tea&#x27;]</code></pre><details><summary>Показать пример ответа</summary><pre><code>foods = [&quot;rice&quot;, &quot;tea&quot;, &quot;bread&quot;]\nprint(foods[0])\nprint(foods[:2])</code></pre></details></div><div class=\"mini-practice\"><h4>Короткая практика · Добавить и удалить один элемент</h4><p>Создайте пустой список. Добавьте milk и bread. Проверьте наличие milk, удалите его и выведите список.</p><p>Ожидаемый результат</p><pre><code>[&#x27;bread&#x27;]</code></pre><details><summary>Показать пример ответа</summary><pre><code>shopping = []\nshopping.append(&quot;milk&quot;)\nshopping.append(&quot;bread&quot;)\nif &quot;milk&quot; in shopping:\n    shopping.remove(&quot;milk&quot;)\nprint(shopping)</code></pre></details></div></section><section class=\"problem-area\"><h3>Обязательное задание · Добавить один товар</h3><p>Примеры foods учат читать позиции. Здесь добавляем товар в <code>shopping</code>. Помните: <b>первая позиция — 0, а len(shopping) — количество товаров</b>.</p><ol><li>Создайте shopping с milk и bread.</li><li>Прочитайте один товар с подсказкой Add item: и добавьте его через append.</li><li>Выведите First: с первым элементом, Last: с последним и Count: с количеством.</li><li>После запуска введите одно название товара в ответ на Add item: и нажмите Enter. First — первый, Last — последний, Count — количество. При добавлении rice первый товар — milk, последний — rice, всего 3.</li></ol></section>"
    },
    "answer": {
      "ko": "shopping = [\"milk\", \"bread\"]\nitem = input(\"Add item: \")\nshopping.append(item)\nprint(\"First:\", shopping[0])\nprint(\"Last:\", shopping[-1])\nprint(\"Count:\", len(shopping))",
      "en": "shopping = [\"milk\", \"bread\"]\nitem = input(\"Add item: \")\nshopping.append(item)\nprint(\"First:\", shopping[0])\nprint(\"Last:\", shopping[-1])\nprint(\"Count:\", len(shopping))",
      "ru": "shopping = [\"milk\", \"bread\"]\nitem = input(\"Add item: \")\nshopping.append(item)\nprint(\"First:\", shopping[0])\nprint(\"Last:\", shopping[-1])\nprint(\"Count:\", len(shopping))"
    },
    "initialCode": {
      "ko": "foods = [\"pizza\", \"chicken\", \"ramen\"]\nprint(foods[0])\nprint(foods[-1])\nprint(len(foods))",
      "en": "foods = [\"pizza\", \"chicken\", \"ramen\"]\nprint(foods[0])\nprint(foods[-1])\nprint(len(foods))",
      "ru": "foods = [\"pizza\", \"chicken\", \"ramen\"]\nprint(foods[0])\nprint(foods[-1])\nprint(len(foods))"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "pizza\nramen\n3",
      "en": "pizza\nramen\n3",
      "ru": "pizza\nramen\n3"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "eggs 추가",
          "en": "Add eggs",
          "ru": "Добавить eggs"
        },
        "input": {
          "ko": "eggs",
          "en": "eggs",
          "ru": "eggs"
        },
        "output": {
          "ko": "Add item: eggs\nFirst: milk\nLast: eggs\nCount: 3",
          "en": "Add item: eggs\nFirst: milk\nLast: eggs\nCount: 3",
          "ru": "Add item: eggs\nFirst: milk\nLast: eggs\nCount: 3"
        }
      },
      {
        "name": {
          "ko": "rice 추가",
          "en": "Add rice",
          "ru": "Добавить rice"
        },
        "input": {
          "ko": "rice",
          "en": "rice",
          "ru": "rice"
        },
        "output": {
          "ko": "Add item: rice\nFirst: milk\nLast: rice\nCount: 3",
          "en": "Add item: rice\nFirst: milk\nLast: rice\nCount: 3",
          "ru": "Add item: rice\nFirst: milk\nLast: rice\nCount: 3"
        }
      }
    ],
    "needsInput": true,
    "sourceWeek": 9,
    "sourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ],
    "sourceFile": "09(4).pdf",
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nshopping = [\"milk\", \"bread\"]\nitem = input(\"Add item: \")\n# TODO: append로 item을 shopping에 추가하세요.\n# TODO: First:, Last:, Count: 뒤에 첫 항목, 마지막 항목, 개수를 차례대로 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nshopping = [\"milk\", \"bread\"]\nitem = input(\"Add item: \")\n# TODO: Use append to add item to shopping.\n# TODO: Print the first item, last item, and count with First:, Last:, and Count:.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nshopping = [\"milk\", \"bread\"]\nitem = input(\"Add item: \")\n# TODO: Добавьте item в shopping через append.\n# TODO: Выведите первый элемент, последний элемент и количество с подписями First:, Last: и Count:.\n"
    },
    "starterHint": {
      "ko": "미션과 같은 shopping 리스트로 시작합니다. item을 받아도 아직 리스트에 추가되지는 않습니다. append와 출력 세 줄을 완성하세요.",
      "en": "Start with the shopping list used in the mission. Reading item does not yet add it to the list. Complete append and three output lines.",
      "ru": "Начните со списка shopping из задания. Ввод item пока не добавляет его в список. Допишите append и три строки вывода."
    }
  },
  {
    "id": "lesson-21",
    "menu": {
      "ko": "10주 · 반복문(for)",
      "en": "W10 · for Loop",
      "ru": "W10 · Цикл for"
    },
    "title": {
      "ko": "같은 작업은 컴퓨터에게! 반복문 for",
      "en": "Let the Computer Repeat! for Loops",
      "ru": "Пусть компьютер повторяет! Цикл for"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 10주차 목표 · 같은 일을 한 번씩 반복</h3><p>장바구니에서 물건 가격을 하나씩 읽는 상황을 생각하세요. <code>for</code>는 리스트의 값을 차례대로 받아 같은 코드 묶음을 실행합니다. 오늘의 핵심은 <b>한 값씩 반복 → 합계 모으기 → 반복이 끝난 뒤 평균 계산</b>입니다. 리스트가 기억나지 않을 때만 아래 복습을 펼치세요. range와 별 계단은 작은 연습에서 따로 확인할 수 있습니다.</p></section><details class=\"lesson-extra\"><summary>선택 복습 · 9주차 리스트와 위치 번호</summary><section class=\"lesson-section\"><h3>2. 리스트 복습 · 만들기, 세기, 넣기, 빼기</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(len(foods))\nfoods.append(&quot;icecream&quot;)\nif &quot;chicken&quot; in foods:\n    foods.remove(&quot;chicken&quot;)\nprint(foods)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">3\n[&#x27;pizza&#x27;, &#x27;ramen&#x27;, &#x27;icecream&#x27;]</pre><ul><li><code>[ ]</code> 안에 값을 넣고 쉼표로 구분합니다. 리스트는 순서를 기억합니다.</li><li><code>len(foods)</code>는 개수입니다. <code>append()</code>는 맨 뒤에 추가하고, <code>remove()</code>는 일치하는 첫 번째 값을 지웁니다.</li><li>없는 값을 remove()로 지우면 ValueError입니다. 먼저 <code>if 값 in 리스트:</code>로 확인합니다.</li><li><code>foods = foods.append(...)</code>로 다시 저장하지 마세요. append는 리스트를 직접 바꾸고 None을 돌려줍니다. 아래 예제들은 각각 독립적으로 실행합니다.</li></ul></section><section class=\"lesson-section\"><h3>3. 인덱스와 슬라이싱 복습</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(foods[0])\nprint(foods[-1])\nnumbers = [1, 2, 3, 4, 5, 6, 7]\nprint(numbers[0:3])\nprint(numbers[:3])\nprint(numbers[3:])</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">pizza\nramen\n[1, 2, 3]\n[1, 2, 3]\n[4, 5, 6, 7]</pre><p>인덱스는 앞에서 0, 1, 2이고 뒤에서 -1, -2입니다. 첫 원소는 foods[0], 마지막은 foods[-1]입니다. <code>[시작:끝]</code>은 끝 인덱스를 포함하지 않습니다. 시작을 비우면 맨 처음부터, 끝을 비우면 맨 끝까지입니다. 빈 리스트에서 [0]이나 [-1]을 읽으면 IndexError입니다.</p></section></details><section class=\"lesson-section\"><h3>4. for 한 줄을 부품별로 읽기</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nfor food in foods:\n    print(food)\nprint(&quot;Done&quot;)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">pizza\nchicken\nramen\nDone</pre><ul><li><code>for</code>: 반복 시작. <code>food</code>: 이번 차례의 값에 붙일 변수 이름.</li><li><code>in foods</code>: foods에서 차례대로 값을 가져옵니다. 콜론 <code>:</code>은 아래 코드 묶음이 시작된다는 표시입니다.</li><li>반복할 print(food)는 공백 4칸 들여씁니다. Done 출력은 왼쪽으로 돌아왔으므로 반복이 끝난 뒤 한 번만 실행됩니다.</li></ul></section><section class=\"lesson-section\"><h3>5. 한 바퀴에 값 하나 · 변수 이름은 내가 선택</h3><p>첫 바퀴 food=\"pizza\" → pizza 출력. 둘째 food=\"chicken\" → chicken 출력. 셋째 food=\"ramen\" → ramen 출력. 더 받을 값이 없으면 for는 끝납니다. 리스트의 원소를 삭제하거나 꺼내서 없애는 동작이 아닙니다.</p><p><code>for x in foods:</code>와 <code>print(x)</code>를 써도 같은 결과입니다. food는 특별한 예약어가 아닙니다. 이름을 바꾸면 안쪽에서도 같은 이름을 써야 합니다. <code>print(foods)</code>라고 쓰면 매번 리스트 전체가 출력됩니다. 반복 중인 리스트를 추가·삭제하면 결과를 예상하기 어려우므로 이 실습에서는 준비를 먼저 마칩니다.</p></section><section class=\"lesson-section\"><h3>6. range() · 일정 횟수 반복하기</h3><pre><code>for i in range(5):\n    print(i)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">0\n1\n2\n3\n4</pre><p><code>range(5)</code>는 반복할 때 0, 1, 2, 3, 4를 차례로 제공합니다. 5는 포함되지 않지만 전체는 다섯 번입니다. i는 매번 다음 숫자를 받는 변수입니다. range는 이 숫자들을 제공하는 범위 객체이며, 리스트 자체는 아닙니다.</p><pre><code>for i in range(2, 6):\n    print(i)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">2\n3\n4\n5</pre><p><code>range(시작, 끝)</code>에서 시작은 포함하고 끝은 제외합니다. 여기서는 1씩 증가하므로 range(2,6)은 2부터 5까지입니다. 1부터 6까지 필요하면 range(1,7)입니다. 여기서 쓰는 기본 증가 방식에서 range(0)이나 range(5,5)는 한 번도 반복하지 않습니다.</p></section><section class=\"lesson-section\"><h3>7. 누적 합계 · 먼저 빈 통을 준비</h3><pre><code>numbers = [10, 20, 30]\ntotal = 0\nfor num in numbers:\n    total = total + num\nprint(total)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">60</pre><p>total = 0은 반복 전에 한 번만 준비합니다. <code>total = total + num</code>은 오른쪽의 “지금 합계 + 이번 숫자”를 계산한 후 그 결과를 total에 다시 저장합니다. total은 0 → 10 → 30 → 60으로 바뀝니다. 맨 마지막 print는 반복 바깥이므로 최종 합계를 한 번 출력합니다.</p><p>total = 0을 반복 안에 넣으면 매번 이전 합계를 잃습니다. 초기화하지 않으면 NameError가 날 수 있습니다. <code>total += num</code>은 여기서 같은 덧셈 갱신을 줄여 쓴 표현이지만, 처음에는 풀어 쓴 형태로 연습하세요.</p></section><section class=\"lesson-section\"><h3>8. 평균 · 합계 ÷ 개수</h3><pre><code>scores = [80, 90, 70, 60, 100]\ntotal = 0\nfor score in scores:\n    total = total + score\nif len(scores) &gt; 0:\n    average = total / len(scores)\n    print(average)\nelse:\n    print(&quot;No scores&quot;)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">80.0</pre><p>합계는 0 → 80 → 170 → 240 → 300 → 400입니다. 개수는 len(scores)=5이므로 400/5는 80.0입니다. 평균 계산은 모든 점수를 더한 뒤 해야 하므로 for 안에 두지 않습니다. <code>/</code>의 결과가 소수형이라 80.0으로 보이는 것은 정상입니다.</p><p>개수를 숫자 5로 고정하지 않고 len(scores)로 구해야 리스트 길이가 바뀌어도 맞습니다. 단, 빈 리스트는 개수가 0이라 나눌 수 없습니다. if로 길이를 확인하고 빈 경우 No scores를 출력합니다.</p></section><section class=\"lesson-section\"><h3>9. 문자열 반복으로 별 계단 만들기</h3><pre><code>for i in range(1, 6):\n    print(&quot;*&quot; * i)</code></pre><p><strong>예상 출력</strong></p><pre class=\"example-output\">*\n**\n***\n****\n*****</pre><p><code>\"*\"</code>는 별 글자 한 개입니다. 문자열에 정수를 곱하면 그 문자열이 반복됩니다. \"*\" * 3은 ***입니다. i가 1,2,3,4,5로 바뀔 때 한 줄의 별 수가 늘어납니다. 왼쪽 *는 따옴표 안의 글자이고, 오른쪽 *는 곱하기 기호입니다.</p></section><section class=\"lesson-section\"><h3>10. 문제를 고치는 네 가지 점검</h3><ul><li>SyntaxError가 나면 for 끝의 콜론 :을 확인하세요. IndentationError가 나면 반복할 줄 앞의 공백 4칸을 확인하세요. 선택한 실습 도구에서 들여쓰기를 맞춘 뒤 코드를 처음부터 다시 실행하세요.</li><li>NameError → 리스트와 total을 먼저 만들었는지, 반복 변수 철자가 같은지 확인합니다.</li><li>평균 오류 → 합계 계산이 반복 안, 평균 계산이 반복 뒤인지 확인하고 len(scores)를 사용합니다. 빈 리스트도 확인합니다.</li><li>마지막 횟수 누락 → range의 끝값은 포함되지 않습니다. 1씩 증가하며 5까지 원하면 끝값은 6입니다.</li></ul></section><details class=\"lesson-extra\"><summary>선택 연습 · 합계·평균 미션을 마친 뒤</summary><section class=\"lesson-section\"><h3>반복을 나눠 연습하기</h3><div class=\"mini-practice\"><h4>작은 연습 · range(3)</h4><p>0, 1, 2를 각각 한 줄에 출력하세요. 3은 포함하지 않습니다.</p><p>예상 결과</p><pre><code>0\n1\n2</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>for i in range(3):\n    print(i)</code></pre></details></div><div class=\"mini-practice\"><h4>작은 연습 · 별 세 계단</h4><p>range(1, 4)와 문자열 곱하기로 별 1개, 2개, 3개를 출력하세요.</p><p>예상 결과</p><pre><code>*\n**\n***</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>for count in range(1, 4):\n    print(&quot;*&quot; * count)</code></pre></details></div></section></details><section class=\"problem-area\"><h3>필수 미션 · 세 점수의 합계와 평균</h3><ol><li>scores = [80, 90, 70]을 만드세요. 입력값은 없습니다.</li><li>for 앞에서 total = 0을 준비하세요.</li><li>for score in scores: 안에서 total에 score를 더하세요.</li><li>반복이 끝난 뒤 Total: 과 합계, Average: 와 total / len(scores)를 출력하세요.</li><li>이 리스트는 비어 있지 않습니다. Total=합계, Average=평균입니다. 위의 range·별 계단 선택 연습은 이 미션을 마친 뒤 필요하면 하세요.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. Week 10 goal · Repeat for each item</h3><p>Imagine reading each price in a shopping basket. A <code>for</code> loop takes list values in order and runs the same block for each. Focus on <b>one value per turn → a running total → calculate the average after the loop</b>. Open the list review only if needed. Practise range and the star staircase in the separate small exercises.</p></section><details class=\"lesson-extra\"><summary>Optional review · Week 9 lists and positions</summary><section class=\"lesson-section\"><h3>2. List review · Create, count, add, remove</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(len(foods))\nfoods.append(&quot;icecream&quot;)\nif &quot;chicken&quot; in foods:\n    foods.remove(&quot;chicken&quot;)\nprint(foods)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">3\n[&#x27;pizza&#x27;, &#x27;ramen&#x27;, &#x27;icecream&#x27;]</pre><ul><li>Put values inside <code>[ ]</code>, separated by commas. A list keeps their order.</li><li><code>len(foods)</code> is the item count. <code>append()</code> adds at the end, and <code>remove()</code> deletes the first matching value.</li><li>Removing a missing value raises ValueError. Check first with <code>if value in list:</code>.</li><li>Do not reassign with <code>foods = foods.append(...)</code>. append changes the list itself and returns None. Run each example below as a separate program.</li></ul></section><section class=\"lesson-section\"><h3>3. Review indexing and slicing</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(foods[0])\nprint(foods[-1])\nnumbers = [1, 2, 3, 4, 5, 6, 7]\nprint(numbers[0:3])\nprint(numbers[:3])\nprint(numbers[3:])</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">pizza\nramen\n[1, 2, 3]\n[1, 2, 3]\n[4, 5, 6, 7]</pre><p>Indices start at 0 from the front and at -1 from the back. foods[0] is first; foods[-1] is last. <code>[start:stop]</code> excludes the stop index. Omit start to begin at the beginning; omit stop to go to the end. Reading [0] or [-1] from an empty list raises IndexError.</p></section></details><section class=\"lesson-section\"><h3>4. Read the parts of a for line</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nfor food in foods:\n    print(food)\nprint(&quot;Done&quot;)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">pizza\nchicken\nramen\nDone</pre><ul><li><code>for</code>: start the loop. <code>food</code>: a variable name for the current value.</li><li><code>in foods</code>: take values from foods in order. The colon <code>:</code> marks the start of the indented code.</li><li>Indent print(food) by four spaces so it repeats. The Done line returns to the left edge, so it runs once after the loop.</li></ul></section><section class=\"lesson-section\"><h3>5. One value per turn · You choose the name</h3><p>First turn: food=\"pizza\" → print pizza. Second: food=\"chicken\" → print chicken. Third: food=\"ramen\" → print ramen. The loop ends when there are no more values to visit. It does not remove items from the list.</p><p>Using <code>for x in foods:</code> and <code>print(x)</code> gives the same result. food is not a special keyword. If you rename it, use the same name inside the block. <code>print(foods)</code> would print the whole list each turn. Changing a list while looping through it is harder to reason about, so prepare the list before the loop in this task.</p></section><section class=\"lesson-section\"><h3>6. range() · Repeat a fixed number of times</h3><pre><code>for i in range(5):\n    print(i)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">0\n1\n2\n3\n4</pre><p><code>range(5)</code> supplies 0, 1, 2, 3, and 4 during iteration. It excludes 5 but gives five turns in total. i receives the next number each turn. range is a range object that supplies these numbers, not a list itself.</p><pre><code>for i in range(2, 6):\n    print(i)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">2\n3\n4\n5</pre><p><code>range(start, stop)</code> includes start and excludes stop. Here it increases by one, so range(2,6) supplies 2 through 5. For 1 through 6 use range(1,7). With the default increasing step used here, range(0) and range(5,5) perform zero turns.</p></section><section class=\"lesson-section\"><h3>7. Running total · Prepare an empty container</h3><pre><code>numbers = [10, 20, 30]\ntotal = 0\nfor num in numbers:\n    total = total + num\nprint(total)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">60</pre><p>Set total = 0 once before the loop. <code>total = total + num</code> calculates “current total + current number” on the right, then stores the result back in total. It changes 0 → 10 → 30 → 60. The final print is outside the loop, so it displays the final sum once.</p><p>Putting total = 0 inside the loop erases earlier additions on every turn. Without initialization you may get NameError. <code>total += num</code> is a shorter way to write this same addition update, but start with the full form.</p></section><section class=\"lesson-section\"><h3>8. Average · Total divided by count</h3><pre><code>scores = [80, 90, 70, 60, 100]\ntotal = 0\nfor score in scores:\n    total = total + score\nif len(scores) &gt; 0:\n    average = total / len(scores)\n    print(average)\nelse:\n    print(&quot;No scores&quot;)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">80.0</pre><p>The total changes 0 → 80 → 170 → 240 → 300 → 400. len(scores) is 5, so 400/5 is 80.0. Calculate the average after all scores have been added, outside the for block. The result of <code>/</code> is a float, so 80.0 is normal.</p><p>Use len(scores) rather than a fixed 5, so the result remains correct if the list length changes. But an empty list has count zero, which cannot be the divisor. Check the length with if and display No scores for an empty list.</p></section><section class=\"lesson-section\"><h3>9. Repeat a string to build star steps</h3><pre><code>for i in range(1, 6):\n    print(&quot;*&quot; * i)</code></pre><p><strong>Expected output</strong></p><pre class=\"example-output\">*\n**\n***\n****\n*****</pre><p><code>\"*\"</code> is one star character. Multiplying a string by an integer repeats it: \"*\" * 3 is ***. As i becomes 1,2,3,4,5, each line has more stars. The first * is a character inside quotes; the second * is the multiplication operator.</p></section><section class=\"lesson-section\"><h3>10. Four checks when something goes wrong</h3><ul><li>For SyntaxError, check the colon : after for. For IndentationError, check the four spaces before repeated lines. Fix the indentation in your practice tool, then run the code again from the beginning.</li><li>NameError → check that the list and total were created first and the loop variable is spelled consistently.</li><li>Wrong average → accumulate inside the loop, calculate the average afterward, and use len(scores). Also check for an empty list.</li><li>Missing last turn → range excludes stop. When increasing by one, use stop 6 to include 5.</li></ul></section><details class=\"lesson-extra\"><summary>Optional practice · After the total and average mission</summary><section class=\"lesson-section\"><h3>Practise the loop patterns separately</h3><div class=\"mini-practice\"><h4>Small practice · range(3)</h4><p>Print 0, 1 and 2 on separate lines. Do not include 3.</p><p>Expected output</p><pre><code>0\n1\n2</code></pre><details><summary>Show a sample answer</summary><pre><code>for i in range(3):\n    print(i)</code></pre></details></div><div class=\"mini-practice\"><h4>Small practice · Three steps of stars</h4><p>Use range(1, 4) and string multiplication to print one, two and three stars.</p><p>Expected output</p><pre><code>*\n**\n***</code></pre><details><summary>Show a sample answer</summary><pre><code>for count in range(1, 4):\n    print(&quot;*&quot; * count)</code></pre></details></div></section></details><section class=\"problem-area\"><h3>Required mission · Total and average of three scores</h3><ol><li>Make scores = [80, 90, 70]. No input is needed.</li><li>Set total = 0 before the for loop.</li><li>Inside for score in scores:, add score to total.</li><li>After the loop, print Total: with total and Average: with total / len(scores).</li><li>This list is not empty. After this mission, you can open the optional range and star exercises above.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Цель недели 10 · Повторить для каждого элемента</h3><p>Представьте, что читаете цену каждого товара в корзине. Цикл <code>for</code> по очереди берёт значения списка и выполняет один блок. Главное: <b>одно значение за проход → накопление суммы → среднее после цикла</b>. Откройте повторение списков, если забыли их устройство. range и лестницу из звёзд можно проверить в коротких упражнениях.</p></section><details class=\"lesson-extra\"><summary>По желанию · Повторение списков и индексов недели 9</summary><section class=\"lesson-section\"><h3>2. Повторение списков · Создать, посчитать, добавить, удалить</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(len(foods))\nfoods.append(&quot;icecream&quot;)\nif &quot;chicken&quot; in foods:\n    foods.remove(&quot;chicken&quot;)\nprint(foods)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">3\n[&#x27;pizza&#x27;, &#x27;ramen&#x27;, &#x27;icecream&#x27;]</pre><ul><li>Значения помещают в <code>[ ]</code> и разделяют запятыми. Список сохраняет порядок.</li><li><code>len(foods)</code> — число элементов. <code>append()</code> добавляет в конец, а <code>remove()</code> удаляет первое совпадающее значение.</li><li>Удаление отсутствующего значения вызывает ValueError. Сначала проверьте наличие через <code>if значение in список:</code>.</li><li>Не присваивайте результат через <code>foods = foods.append(...)</code>. append изменяет сам список и возвращает None. Каждый пример ниже запускайте отдельно.</li></ul></section><section class=\"lesson-section\"><h3>3. Повторение индексов и срезов</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nprint(foods[0])\nprint(foods[-1])\nnumbers = [1, 2, 3, 4, 5, 6, 7]\nprint(numbers[0:3])\nprint(numbers[:3])\nprint(numbers[3:])</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">pizza\nramen\n[1, 2, 3]\n[1, 2, 3]\n[4, 5, 6, 7]</pre><p>Индексы начинаются с 0 спереди и с -1 сзади. foods[0] — первый элемент, foods[-1] — последний. Срез <code>[начало:конец]</code> не включает конечный индекс. Без начала берём с первого элемента, без конца — до последнего. У пустого списка [0] и [-1] вызывают IndexError.</p></section></details><section class=\"lesson-section\"><h3>4. Разберём строку for</h3><pre><code>foods = [&quot;pizza&quot;, &quot;chicken&quot;, &quot;ramen&quot;]\nfor food in foods:\n    print(food)\nprint(&quot;Done&quot;)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">pizza\nchicken\nramen\nDone</pre><ul><li><code>for</code>: начало цикла. <code>food</code>: имя переменной для текущего значения.</li><li><code>in foods</code>: брать значения из foods по порядку. Двоеточие <code>:</code> показывает начало следующего блока.</li><li>Отступ перед print(food) — четыре пробела: эта строка повторяется. Строка Done возвращается влево и выполняется один раз после цикла.</li></ul></section><section class=\"lesson-section\"><h3>5. Одно значение за шаг · Имя выбираете вы</h3><p>Первый шаг: food=\"pizza\" → вывод pizza. Второй: food=\"chicken\" → chicken. Третий: food=\"ramen\" → ramen. Когда значения закончатся, цикл завершится. Он не удаляет элементы из списка.</p><p>Записи <code>for x in foods:</code> и <code>print(x)</code> дадут тот же результат. food не является специальным словом. При смене имени используйте новое имя и внутри блока. <code>print(foods)</code> выводит весь список на каждом шаге. Изменение списка во время обхода усложняет результат, поэтому здесь подготовим его до цикла.</p></section><section class=\"lesson-section\"><h3>6. range() · Повторить заданное число раз</h3><pre><code>for i in range(5):\n    print(i)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">0\n1\n2\n3\n4</pre><p><code>range(5)</code> при обходе даёт 0, 1, 2, 3 и 4. Число 5 исключено, но шагов всего пять. i получает следующее число на каждом шаге. range — объект диапазона, который предоставляет числа, а не сам список.</p><pre><code>for i in range(2, 6):\n    print(i)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">2\n3\n4\n5</pre><p><code>range(начало, конец)</code> включает начало, но исключает конец. Здесь шаг равен единице, поэтому range(2,6) даёт числа от 2 до 5. Для чисел от 1 до 6 нужен range(1,7). При используемом стандартном шаге range(0) и range(5,5) не дают ни одного шага.</p></section><section class=\"lesson-section\"><h3>7. Накопление суммы · Подготовьте пустую ёмкость</h3><pre><code>numbers = [10, 20, 30]\ntotal = 0\nfor num in numbers:\n    total = total + num\nprint(total)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">60</pre><p>total = 0 задаётся один раз до цикла. <code>total = total + num</code> вычисляет справа «текущая сумма + текущее число» и сохраняет результат обратно в total. Значения: 0 → 10 → 30 → 60. Последний print снаружи цикла выводит итог один раз.</p><p>Если поместить total = 0 внутрь цикла, прежняя сумма будет теряться на каждом шаге. Без начального значения возможен NameError. <code>total += num</code> — сокращённая запись того же обновления суммы, но сначала используйте полную форму.</p></section><section class=\"lesson-section\"><h3>8. Среднее · Сумма, делённая на количество</h3><pre><code>scores = [80, 90, 70, 60, 100]\ntotal = 0\nfor score in scores:\n    total = total + score\nif len(scores) &gt; 0:\n    average = total / len(scores)\n    print(average)\nelse:\n    print(&quot;No scores&quot;)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">80.0</pre><p>Сумма меняется так: 0 → 80 → 170 → 240 → 300 → 400. len(scores) равен 5, поэтому 400/5 даёт 80.0. Среднее рассчитывается после сложения всех баллов, вне блока for. Результат <code>/</code> имеет тип float, поэтому 80.0 — нормально.</p><p>Используйте len(scores), а не постоянное число 5: тогда изменение длины списка не испортит расчёт. Однако у пустого списка длина равна нулю, а на ноль делить нельзя. Проверьте длину через if и при пустом списке выведите No scores.</p></section><section class=\"lesson-section\"><h3>9. Повторяем строку: лестница из звёзд</h3><pre><code>for i in range(1, 6):\n    print(&quot;*&quot; * i)</code></pre><p><strong>Ожидаемый вывод</strong></p><pre class=\"example-output\">*\n**\n***\n****\n*****</pre><p><code>\"*\"</code> — один символ звезды. Умножение строки на целое число повторяет её: \"*\" * 3 даёт ***. Пока i принимает 1,2,3,4,5, число звёзд в строке растёт. Первая * — символ в кавычках, вторая * — оператор умножения.</p></section><section class=\"lesson-section\"><h3>10. Четыре проверки при ошибке</h3><ul><li>При SyntaxError проверьте двоеточие : после for. При IndentationError — четыре пробела перед повторяемыми строками. Исправьте отступы в выбранной среде и снова запустите код сначала.</li><li>NameError → проверьте, созданы ли список и total заранее и одинаково ли написано имя переменной цикла.</li><li>Неверное среднее → накапливайте сумму внутри цикла, считайте среднее после него и используйте len(scores). Проверьте также пустой список.</li><li>Пропущен последний шаг → range исключает конец. При шаге 1 укажите конец 6, чтобы включить 5.</li></ul></section><details class=\"lesson-extra\"><summary>По желанию · После задания на сумму и среднее</summary><section class=\"lesson-section\"><h3>Отрабатываем виды повторения отдельно</h3><div class=\"mini-practice\"><h4>Короткая практика · range(3)</h4><p>Выведите 0, 1 и 2 на отдельных строках. 3 не включается.</p><p>Ожидаемый результат</p><pre><code>0\n1\n2</code></pre><details><summary>Показать пример ответа</summary><pre><code>for i in range(3):\n    print(i)</code></pre></details></div><div class=\"mini-practice\"><h4>Короткая практика · Три ступени из звёзд</h4><p>С помощью range(1, 4) и повторения строки выведите одну, две и три звезды.</p><p>Ожидаемый результат</p><pre><code>*\n**\n***</code></pre><details><summary>Показать пример ответа</summary><pre><code>for count in range(1, 4):\n    print(&quot;*&quot; * count)</code></pre></details></div></section></details><section class=\"problem-area\"><h3>Обязательное задание · Сумма и среднее трёх баллов</h3><ol><li>Создайте scores = [80, 90, 70]. Входные данные не нужны.</li><li>Перед for задайте total = 0.</li><li>Внутри for score in scores: прибавляйте score к total.</li><li>После цикла выведите Total: с суммой и Average: со значением total / len(scores).</li><li>Этот список не пуст. Total — сумма, Average — среднее. После этого задания можно открыть дополнительные упражнения с range и звёздами выше.</li></ol></section>"
    },
    "answer": {
      "ko": "scores = [80, 90, 70]\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(\"Total:\", total)\nprint(\"Average:\", total / len(scores))",
      "en": "scores = [80, 90, 70]\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(\"Total:\", total)\nprint(\"Average:\", total / len(scores))",
      "ru": "scores = [80, 90, 70]\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(\"Total:\", total)\nprint(\"Average:\", total / len(scores))"
    },
    "initialCode": {
      "ko": "scores = [80, 90]\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(total)",
      "en": "scores = [80, 90]\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(total)",
      "ru": "scores = [80, 90]\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(total)"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "170",
      "en": "170",
      "ru": "170"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "세 점수",
          "en": "Three scores",
          "ru": "Три балла"
        },
        "input": {
          "ko": "",
          "en": "",
          "ru": ""
        },
        "output": {
          "ko": "Total: 240\nAverage: 80.0",
          "en": "Total: 240\nAverage: 80.0",
          "ru": "Total: 240\nAverage: 80.0"
        }
      }
    ],
    "needsInput": false,
    "sourceWeek": 10,
    "sourcePages": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ],
    "sourceFile": "10(4).pdf",
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nscores = [80, 90, 70]\ntotal = 0\n# TODO: for score in scores: 안에서 각 score를 total에 더하세요.\n# TODO: 반복문 밖에서 Total:과 합계, Average:와 평균을 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nscores = [80, 90, 70]\ntotal = 0\n# TODO: Inside for score in scores:, add each score to total.\n# TODO: Outside the loop, print Total: with the sum and Average: with the average.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nscores = [80, 90, 70]\ntotal = 0\n# TODO: Внутри for score in scores: добавляйте каждый score к total.\n# TODO: Вне цикла выведите Total: с суммой и Average: со средним.\n"
    },
    "starterHint": {
      "ko": "미션의 점수 세 개와 total = 0만 준비했습니다. for와 출력 줄을 추가하세요. total = 0은 반복문 앞에 한 번만 둡니다. 입력은 필요 없습니다.",
      "en": "The mission’s three scores and total = 0 are ready. Add the for loop and outputs. Keep total = 0 once, before the loop. No input is needed.",
      "ru": "Три балла задания и total = 0 готовы. Добавьте цикл for и вывод. total = 0 оставьте один раз перед циклом. Ввод не нужен."
    }
  },
  {
    "id": "lesson-22",
    "menu": {
      "ko": "11주 · 반복문(while)",
      "en": "W11 · while Loop",
      "ru": "W11 · Цикл while"
    },
    "title": {
      "ko": "조건이 참인 동안 반복: while",
      "en": "Repeat while a condition is True",
      "ru": "Повторение, пока условие истинно"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>목표: 조건을 보며 반복하기</h3><p>while은 출입구의 확인 담당자처럼 <b>매번 조건을 검사</b>합니다. True이면 안의 코드를 실행하고 다시 검사합니다. False이면 반복을 끝냅니다. 처음부터 False라면 안의 코드는 한 번도 실행하지 않습니다.</p><p>for는 리스트 같은 자료의 항목을 하나씩 꺼낼 때, 또는 range로 횟수를 정할 때 편리합니다. while은 “종료를 입력할 때까지”처럼 조건으로 반복을 제어할 때 편리합니다. for가 언제나 미리 횟수를 알아야 하는 것은 아닙니다.</p></section><details class=\"lesson-extra\"><summary>선택 복습 · for, range, 누적 합계</summary><section class=\"lesson-section\"><h3>지난 시간 복습: range와 누적</h3><p><code>range(1, 4)</code>는 1, 2, 3을 줍니다. 끝의 4는 포함하지 않습니다. <code>\"*\" * i</code>는 별 문자를 i번 이어 붙이므로 아래는 별 1개, 2개, 3개를 출력합니다.</p><pre><code>for i in range(1, 4):\n    print(&quot;*&quot; * i)</code></pre><p>평균은 <code>scores = [80, 90]</code> → <code>total = 0</code> → 각 score를 total에 더하기 → 반복문 밖에서 <code>total / len(scores)</code> 순서입니다. 결과는 85.0입니다. 합계 초기화는 반복 전에, 최종 계산은 반복 뒤에 합니다.</p></section></details><section class=\"lesson-section\"><h3>문법과 실행 순서</h3><p>while + 조건 + 콜론(:)을 씁니다. 반복할 줄은 공백 4칸으로 들여씁니다. <code>count = count + 1</code>은 현재 수에 1을 더한 뒤 count에 다시 저장합니다.</p><pre><code>count = 1\nwhile count &lt;= 3:\n    print(count)\n    count = count + 1\nprint(&quot;Done&quot;)</code></pre><ol><li>count=1: 1 ≤ 3이므로 1 출력, count를 2로 변경.</li><li>count=2, 3도 같은 순서로 진행. count=4가 되면 조건은 False.</li><li>들여쓰기가 없는 마지막 print는 반복이 끝난 뒤 한 번 실행. 결과는 1, 2, 3, Done입니다.</li></ol></section><section class=\"lesson-section\"><h3>무한 반복을 고치기</h3><p>위 예제에서 <code>count = count + 1</code>을 빼거나 반복문 밖에 두면 count는 계속 1입니다. 조건이 바뀌지 않아 끝나지 않습니다. 값을 바꾸는 줄이 반복문 <b>안</b>에 있는지 확인하세요.</p><p>계속 실행되어 끝나지 않으면 사용 중인 실습 도구의 <b>중지 또는 실행 중단</b> 기능을 사용하세요. 도구별 위치는 실습 도구 안내에서 확인할 수 있습니다. 중단한 뒤 조건을 바꾸는 줄이나 종료 입력을 확인하고 다시 실행하세요. 이 페이지의 예시 재생은 준비된 흐름을 보여 주는 기능입니다.</p></section><section class=\"lesson-section\"><h3>break: 지금 반복을 끝내기</h3><p><code>while True:</code>는 조건이 계속 참입니다. <code>break</code>가 실행되면 조건을 바꾸지 않아도 가장 가까운 반복문을 즉시 끝냅니다. 프로그램 전체를 끝내는 것은 아닙니다.</p><pre><code>while True:\n    text = input(&quot;Text (exit to stop): &quot;)\n    if text == &quot;exit&quot;:\n        break\n    print(text)\nprint(&quot;Done&quot;)</code></pre><p>코드를 실행하고 <code>Text (exit to stop):</code>이 나오면 <code>hi</code>를 입력한 뒤 Enter를 누르세요. 프로그램이 hi를 출력하고 다시 질문합니다. 이번에는 <code>exit</code>를 입력하고 Enter를 누르면 break로 반복을 끝낸 뒤 <code>Done</code>을 출력합니다. 질문 글자와 사람이 입력한 답을 구별해 보세요.</p></section><section class=\"lesson-section\"><h3>continue: 이번 차례의 나머지만 건너뛰기</h3><p>continue는 반복을 끝내지 않습니다. 아래 남은 줄을 건너뛰고 while 조건을 다시 확인합니다. 숫자를 바꾸는 줄을 continue <b>앞</b>에 두어야 2에서 멈춰 반복되는 일을 피할 수 있습니다.</p><pre><code>count = 0\nwhile count &lt; 3:\n    count = count + 1\n    if count == 2:\n        continue\n    print(count)</code></pre><p>결과는 1과 3입니다. 2일 때만 print를 건너뜁니다.</p></section><section class=\"lesson-section\"><h3>조건을 바꾸어 끝내는 방법도 있습니다</h3><p>강의의 stop 변수는 스위치입니다. 처음 1로 켜 두고 종료 입력에서 0으로 바꿉니다. break는 <b>즉시</b> 나가지만, stop 변경은 이번 몸체의 남은 줄을 실행한 뒤 다음 조건 검사에서 끝납니다.</p><pre><code>stop = 1\nwhile stop == 1:\n    choice = input(&quot;1: again, 2: stop: &quot;)\n    if choice == &quot;2&quot;:\n        stop = 0\nprint(&quot;Done&quot;)</code></pre><p>조건에서는 <code>==</code>로 비교하고, 값을 바꿀 때는 <code>=</code>로 저장합니다. input 결과를 숫자와 비교하지 말고 <code>\"2\"</code>와 비교하세요. 카페의 누적 합계는 반복문 앞에 0으로 준비합니다(아래의 11주차 선택 반복 카페).</p></section><section class=\"lesson-section\"><h3>작은 연습 · continue</h3><div class=\"mini-practice\"><h4>작은 연습 · 2만 건너뛰기</h4><p>1, 2, 3 중 2만 출력하지 않도록 continue를 사용하세요. count를 먼저 늘려야 2에서 멈추지 않습니다.</p><p>예상 결과</p><pre><code>1\n3</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>count = 0\nwhile count &lt; 3:\n    count = count + 1\n    if count == 2:\n        continue\n    print(count)</code></pre></details></div></section><details class=\"lesson-extra\"><summary>필수 미션을 마친 뒤 · 선택 카페 프로젝트</summary><section class=\"lesson-section\"><h3>선택 종합 · 11주차 반복 주문 카페</h3><p>기본 while 미션을 마친 뒤 진행하세요. 7주차의 한 번 구매와 달리 이번에는 메뉴 번호를 여러 번 읽고 합계를 냅니다. 숫자처럼 보이는 메뉴도 문자열로 읽고 \"1\"처럼 비교하므로 int와 try-except가 필요 없습니다.</p><div class=\"mini-practice\"><h4>작은 연습 · 주문 → 합계 → 종료</h4><p>코드를 실행하고 Choice:가 나올 때마다 1 → 3 → 4 순서로 하나씩 입력하고 매번 Enter를 누르세요. 4는 주문을 끝내는 값입니다. else 뒤에 실행할 코드가 더 없으므로 이 예제에는 continue가 필요 없습니다.</p><p>질문이 나올 때 답할 순서 · 한 번에 한 줄씩</p><pre><code>1\n3\n4</code></pre><p>예상 결과</p><pre><code>1 Americano 4500\n2 Latte 5500\n3 Tea 3500\n4 Exit\nChoice: 1\nChoice: 3\nChoice: 4\nTotal: 8000\nThank you</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>print(&quot;1 Americano 4500&quot;)\nprint(&quot;2 Latte 5500&quot;)\nprint(&quot;3 Tea 3500&quot;)\nprint(&quot;4 Exit&quot;)\ntotal = 0\nwhile True:\n    choice = input(&quot;Choice: &quot;)\n    if choice == &quot;1&quot;:\n        total = total + 4500\n    elif choice == &quot;2&quot;:\n        total = total + 5500\n    elif choice == &quot;3&quot;:\n        total = total + 3500\n    elif choice == &quot;4&quot;:\n        break\n    else:\n        print(&quot;Choose 1, 2, 3 or 4&quot;)\nprint(&quot;Total:&quot;, total)\nprint(&quot;Thank you&quot;)</code></pre></details></div></section></details><section class=\"problem-area\"><h3>필수 미션 · exit까지 따라 말하기</h3><ol><li>while True 안에서 Word (exit to stop): 로 한 줄을 읽으세요.</li><li>word가 \"exit\"이면 break로 반복을 끝냅니다.</li><li>그렇지 않으면 You typed: 와 word를 출력합니다.</li><li>반복 바깥 마지막 줄에서 Done을 출력하세요.</li><li>실행 후 첫 질문에는 hi를 입력하고 Enter를 누르세요. 다시 질문하면 exit를 입력하고 Enter를 누르세요. exit는 화면을 닫는 버튼이 아니라 이 코드가 알아보는 종료 단어입니다. You typed=입력한 말, Done=종료입니다.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>Goal: repeat while a condition is true</h3><p>A while loop is like a person checking a gate: it <b>checks the condition every time</b>. If it is True, the body runs and the condition is checked again. If it is False, the loop ends. If it is False at the start, the body runs zero times.</p><p>for is useful for taking items from data such as a list, or repeating with range. while is useful when a condition controls the repetition, such as “until exit is entered.” A for loop does not always require knowing a count beforehand.</p></section><details class=\"lesson-extra\"><summary>Optional review · for, range and a running total</summary><section class=\"lesson-section\"><h3>Review: range and a running total</h3><p><code>range(1, 4)</code> gives 1, 2, 3. It excludes 4. <code>\"*\" * i</code> repeats the star text i times, so this prints rows of 1, 2 and 3 stars.</p><pre><code>for i in range(1, 4):\n    print(&quot;*&quot; * i)</code></pre><p>For an average: <code>scores = [80, 90]</code> → <code>total = 0</code> → add each score to total → after the loop calculate <code>total / len(scores)</code>. The result is 85.0. Start the total before the loop; calculate the final result after it.</p></section></details><section class=\"lesson-section\"><h3>Syntax and execution order</h3><p>Write while, a condition and a colon (:). Indent each repeated line by 4 spaces. <code>count = count + 1</code> adds 1 to the current number and saves it back into count.</p><pre><code>count = 1\nwhile count &lt;= 3:\n    print(count)\n    count = count + 1\nprint(&quot;Done&quot;)</code></pre><ol><li>count=1: 1 ≤ 3, so print 1, then change count to 2.</li><li>Repeat for 2 and 3. When count becomes 4, the condition is False.</li><li>The final unindented print runs once after the loop. Output: 1, 2, 3, Done.</li></ol></section><section class=\"lesson-section\"><h3>Fix a loop that never ends</h3><p>If you remove <code>count = count + 1</code> or put it outside the loop, count stays 1. The condition never changes. Check that the update is <b>inside</b> the loop.</p><p>If your program keeps running, use your practice tool’s <b>Stop or Interrupt</b> control. The practice-tool guide shows where to find it. After stopping, check the condition update or exit input before running again. Example playback on this page shows a prepared sequence.</p></section><section class=\"lesson-section\"><h3>break: leave the loop now</h3><p><code>while True:</code> always has a true condition. When <code>break</code> runs, it immediately leaves the nearest loop without changing the condition. It does not end the entire program.</p><pre><code>while True:\n    text = input(&quot;Text (exit to stop): &quot;)\n    if text == &quot;exit&quot;:\n        break\n    print(text)\nprint(&quot;Done&quot;)</code></pre><p>Run the code. At <code>Text (exit to stop):</code>, type <code>hi</code> and press Enter. The program prints hi and asks again. This time type <code>exit</code> and press Enter: break ends the loop, then <code>Done</code> is printed. Notice which text is the question and which is the typed answer.</p></section><section class=\"lesson-section\"><h3>continue: skip the rest of this turn</h3><p>continue does not end the loop. It skips the remaining body and checks the while condition again. Put the counter update <b>before</b> continue so the loop cannot get stuck at 2.</p><pre><code>count = 0\nwhile count &lt; 3:\n    count = count + 1\n    if count == 2:\n        continue\n    print(count)</code></pre><p>The output is 1 and 3. Only the print for 2 is skipped.</p></section><section class=\"lesson-section\"><h3>You can also end by changing a condition</h3><p>The stop variable from class is a switch. Start with 1, then change it to 0 on an exit choice. break leaves <b>immediately</b>. Changing stop lets the rest of the current body run before the next condition check ends the loop.</p><pre><code>stop = 1\nwhile stop == 1:\n    choice = input(&quot;1: again, 2: stop: &quot;)\n    if choice == &quot;2&quot;:\n        stop = 0\nprint(&quot;Done&quot;)</code></pre><p>Use <code>==</code> to compare in a condition and <code>=</code> to store a value. Compare input text with <code>\"2\"</code>, not number 2. For the café total, initialize 0 before the loop (the optional Week 11 repeating café below).</p></section><section class=\"lesson-section\"><h3>Small practice · continue</h3><div class=\"mini-practice\"><h4>Small practice · Skip only 2</h4><p>Use continue to skip printing 2. Increase count first so the loop does not get stuck at 2.</p><p>Expected output</p><pre><code>1\n3</code></pre><details><summary>Show a sample answer</summary><pre><code>count = 0\nwhile count &lt; 3:\n    count = count + 1\n    if count == 2:\n        continue\n    print(count)</code></pre></details></div></section><details class=\"lesson-extra\"><summary>After the required mission · Optional café project</summary><section class=\"lesson-section\"><h3>Optional project · Week 11 repeating café</h3><p>Do this after the basic while mission. Unlike the one-time purchase in Week 7, this café reads several choices and adds their prices. Menu choices remain strings such as \"1\", so int and try-except are not needed.</p><div class=\"mini-practice\"><h4>Small practice · Order → total → finish</h4><p>Run the code. Each time Choice: appears, enter the next value in 1 → 3 → 4 and press Enter. 4 ends the orders. There are no more statements after the if/elif/else in this loop body, so continue is not needed.</p><p>Answer order · One line at each question</p><pre><code>1\n3\n4</code></pre><p>Expected output</p><pre><code>1 Americano 4500\n2 Latte 5500\n3 Tea 3500\n4 Exit\nChoice: 1\nChoice: 3\nChoice: 4\nTotal: 8000\nThank you</code></pre><details><summary>Show a sample answer</summary><pre><code>print(&quot;1 Americano 4500&quot;)\nprint(&quot;2 Latte 5500&quot;)\nprint(&quot;3 Tea 3500&quot;)\nprint(&quot;4 Exit&quot;)\ntotal = 0\nwhile True:\n    choice = input(&quot;Choice: &quot;)\n    if choice == &quot;1&quot;:\n        total = total + 4500\n    elif choice == &quot;2&quot;:\n        total = total + 5500\n    elif choice == &quot;3&quot;:\n        total = total + 3500\n    elif choice == &quot;4&quot;:\n        break\n    else:\n        print(&quot;Choose 1, 2, 3 or 4&quot;)\nprint(&quot;Total:&quot;, total)\nprint(&quot;Thank you&quot;)</code></pre></details></div></section></details><section class=\"problem-area\"><h3>Required mission · Repeat words until exit</h3><ol><li>Inside while True, read a line with Word (exit to stop): .</li><li>If word is \"exit\", leave the loop with break.</li><li>Otherwise print You typed: and word.</li><li>After the loop, print Done.</li><li>After running, answer the first question with hi and press Enter. At the next question, enter exit and press Enter. exit is the stop word recognized by this code, not a button that closes the window.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>Цель: повторять, пока условие истинно</h3><p>Цикл while похож на проверку у входа: он <b>каждый раз проверяет условие</b>. При True выполняется тело, затем условие проверяется снова. При False цикл заканчивается. Если условие ложно сразу, тело не выполнится ни разу.</p><p>for удобен для перебора элементов списка или повторений с range. while удобен, когда повторением управляет условие, например «до ввода exit». Для for не всегда нужно заранее знать число повторений.</p></section><details class=\"lesson-extra\"><summary>По желанию · for, range и накопление суммы</summary><section class=\"lesson-section\"><h3>Повторение: range и накопление</h3><p><code>range(1, 4)</code> даёт 1, 2, 3, без 4. <code>\"*\" * i</code> повторяет текст звёздочки i раз: получаются строки из 1, 2 и 3 звёздочек.</p><pre><code>for i in range(1, 4):\n    print(&quot;*&quot; * i)</code></pre><p>Для среднего: <code>scores = [80, 90]</code> → <code>total = 0</code> → прибавить каждый score к total → после цикла вычислить <code>total / len(scores)</code>. Результат 85.0. Обнуление суммы делают до цикла, окончательный расчёт — после.</p></section></details><section class=\"lesson-section\"><h3>Синтаксис и порядок выполнения</h3><p>Напишите while, условие и двоеточие (:). Повторяемые строки имеют отступ 4 пробела. <code>count = count + 1</code> прибавляет 1 к текущему числу и снова сохраняет его в count.</p><pre><code>count = 1\nwhile count &lt;= 3:\n    print(count)\n    count = count + 1\nprint(&quot;Done&quot;)</code></pre><ol><li>count=1: 1 ≤ 3, поэтому выводится 1, затем count становится 2.</li><li>То же происходит для 2 и 3. При count=4 условие становится False.</li><li>Последний print без отступа выполняется один раз после цикла. Вывод: 1, 2, 3, Done.</li></ol></section><section class=\"lesson-section\"><h3>Исправление бесконечного цикла</h3><p>Если удалить <code>count = count + 1</code> или поставить вне цикла, count останется равным 1. Условие не изменится. Проверьте, что обновление находится <b>внутри</b> цикла.</p><p>Если программа не заканчивается, используйте <b>остановку или прерывание выполнения</b> в своей среде. Где находится эта команда, указано в инструкции к инструменту. После остановки проверьте изменение условия или ввод для выхода и запустите снова. На этой странице воспроизводится подготовленный пример.</p></section><section class=\"lesson-section\"><h3>break: немедленно выйти из цикла</h3><p>В <code>while True:</code> условие всегда истинно. Команда <code>break</code> немедленно завершает ближайший цикл без изменения условия. Она не завершает всю программу.</p><pre><code>while True:\n    text = input(&quot;Text (exit to stop): &quot;)\n    if text == &quot;exit&quot;:\n        break\n    print(text)\nprint(&quot;Done&quot;)</code></pre><p>Запустите код. На вопрос <code>Text (exit to stop):</code> введите <code>hi</code> и Enter. Программа выведет hi и спросит снова. Теперь введите <code>exit</code> и Enter: break завершит цикл, затем появится <code>Done</code>. Различайте текст вопроса и введённый ответ.</p></section><section class=\"lesson-section\"><h3>continue: пропустить остаток текущего прохода</h3><p>continue не завершает цикл. Он пропускает оставшееся тело и снова проверяет условие while. Обновляйте счётчик <b>до</b> continue, иначе цикл может застрять на числе 2.</p><pre><code>count = 0\nwhile count &lt; 3:\n    count = count + 1\n    if count == 2:\n        continue\n    print(count)</code></pre><p>Результат — 1 и 3. Пропущен только print для числа 2.</p></section><section class=\"lesson-section\"><h3>Можно завершить цикл изменением условия</h3><p>Переменная stop из лекции — переключатель. Сначала 1, при выходе меняем на 0. break выходит <b>немедленно</b>. После изменения stop остаток текущего тела ещё выполнится; цикл закончится при следующей проверке.</p><pre><code>stop = 1\nwhile stop == 1:\n    choice = input(&quot;1: again, 2: stop: &quot;)\n    if choice == &quot;2&quot;:\n        stop = 0\nprint(&quot;Done&quot;)</code></pre><p>Для сравнения в условии используйте <code>==</code>, для присваивания — <code>=</code>. Сравнивайте ввод с текстом <code>\"2\"</code>, а не с числом 2. Сумму заказов обнуляйте до цикла (дополнительный пример кафе с повтором на неделе 11 ниже).</p></section><section class=\"lesson-section\"><h3>Короткая практика · continue</h3><div class=\"mini-practice\"><h4>Короткая практика · Пропустить только 2</h4><p>Используйте continue, чтобы не выводить 2. Сначала увеличивайте count, иначе цикл может застрять на 2.</p><p>Ожидаемый результат</p><pre><code>1\n3</code></pre><details><summary>Показать пример ответа</summary><pre><code>count = 0\nwhile count &lt; 3:\n    count = count + 1\n    if count == 2:\n        continue\n    print(count)</code></pre></details></div></section><details class=\"lesson-extra\"><summary>После основного задания · Дополнительный проект кафе</summary><section class=\"lesson-section\"><h3>Дополнительный проект · Повтор заказов, неделя 11</h3><p>Выполняйте после основного задания while. В отличие от одной покупки на неделе 7, здесь читают несколько номеров и складывают цены. Номера остаются строками, например \"1\", поэтому int и try-except не нужны.</p><div class=\"mini-practice\"><h4>Короткая практика · Заказ → сумма → завершение</h4><p>Запустите код. Каждый раз, когда появляется Choice:, вводите следующее значение: 1 → 3 → 4, и нажимайте Enter. 4 завершает заказы. После if/elif/else в теле нет других команд, поэтому continue не нужен.</p><p>Порядок ответов · Одна строка на каждый вопрос</p><pre><code>1\n3\n4</code></pre><p>Ожидаемый результат</p><pre><code>1 Americano 4500\n2 Latte 5500\n3 Tea 3500\n4 Exit\nChoice: 1\nChoice: 3\nChoice: 4\nTotal: 8000\nThank you</code></pre><details><summary>Показать пример ответа</summary><pre><code>print(&quot;1 Americano 4500&quot;)\nprint(&quot;2 Latte 5500&quot;)\nprint(&quot;3 Tea 3500&quot;)\nprint(&quot;4 Exit&quot;)\ntotal = 0\nwhile True:\n    choice = input(&quot;Choice: &quot;)\n    if choice == &quot;1&quot;:\n        total = total + 4500\n    elif choice == &quot;2&quot;:\n        total = total + 5500\n    elif choice == &quot;3&quot;:\n        total = total + 3500\n    elif choice == &quot;4&quot;:\n        break\n    else:\n        print(&quot;Choose 1, 2, 3 or 4&quot;)\nprint(&quot;Total:&quot;, total)\nprint(&quot;Thank you&quot;)</code></pre></details></div></section></details><section class=\"problem-area\"><h3>Обязательное задание · Повторять слова до exit</h3><ol><li>Внутри while True читайте строку с подсказкой Word (exit to stop): .</li><li>Если word равно \"exit\", завершите цикл через break.</li><li>Иначе выведите You typed: и word.</li><li>После цикла выведите Done.</li><li>После запуска ответьте на первый вопрос hi и нажмите Enter. На следующий — exit и Enter. exit — слово для выхода, которое проверяет этот код, а не кнопка закрытия окна. You typed — введённый текст, Done — завершено.</li></ol></section>"
    },
    "answer": {
      "ko": "while True:\n    word = input(\"Word (exit to stop): \")\n    if word == \"exit\":\n        break\n    print(\"You typed:\", word)\nprint(\"Done\")",
      "en": "while True:\n    word = input(\"Word (exit to stop): \")\n    if word == \"exit\":\n        break\n    print(\"You typed:\", word)\nprint(\"Done\")",
      "ru": "while True:\n    word = input(\"Word (exit to stop): \")\n    if word == \"exit\":\n        break\n    print(\"You typed:\", word)\nprint(\"Done\")"
    },
    "initialCode": {
      "ko": "count = 1\nwhile count <= 3:\n    print(count)\n    count = count + 1\nprint(\"Done\")",
      "en": "count = 1\nwhile count <= 3:\n    print(count)\n    count = count + 1\nprint(\"Done\")",
      "ru": "count = 1\nwhile count <= 3:\n    print(count)\n    count = count + 1\nprint(\"Done\")"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "1\n2\n3\nDone",
      "en": "1\n2\n3\nDone",
      "ru": "1\n2\n3\nDone"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "한 번 말하고 끝내기",
          "en": "One word, then finish",
          "ru": "Одно слово и завершение"
        },
        "input": {
          "ko": "hi\nexit",
          "en": "hi\nexit",
          "ru": "hi\nexit"
        },
        "output": {
          "ko": "Word (exit to stop): hi\nYou typed: hi\nWord (exit to stop): exit\nDone",
          "en": "Word (exit to stop): hi\nYou typed: hi\nWord (exit to stop): exit\nDone",
          "ru": "Word (exit to stop): hi\nYou typed: hi\nWord (exit to stop): exit\nDone"
        }
      },
      {
        "name": {
          "ko": "바로 끝내기",
          "en": "Finish immediately",
          "ru": "Сразу завершить"
        },
        "input": {
          "ko": "exit",
          "en": "exit",
          "ru": "exit"
        },
        "output": {
          "ko": "Word (exit to stop): exit\nDone",
          "en": "Word (exit to stop): exit\nDone",
          "ru": "Word (exit to stop): exit\nDone"
        }
      },
      {
        "name": {
          "ko": "두 번 말하기",
          "en": "Two words",
          "ru": "Два слова"
        },
        "input": {
          "ko": "hi\nhello\nexit",
          "en": "hi\nhello\nexit",
          "ru": "hi\nhello\nexit"
        },
        "output": {
          "ko": "Word (exit to stop): hi\nYou typed: hi\nWord (exit to stop): hello\nYou typed: hello\nWord (exit to stop): exit\nDone",
          "en": "Word (exit to stop): hi\nYou typed: hi\nWord (exit to stop): hello\nYou typed: hello\nWord (exit to stop): exit\nDone",
          "ru": "Word (exit to stop): hi\nYou typed: hi\nWord (exit to stop): hello\nYou typed: hello\nWord (exit to stop): exit\nDone"
        }
      }
    ],
    "sourceWeek": 11,
    "sourcePages": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      28,
      29,
      32
    ],
    "needsInput": true,
    "sourceFile": "11(4).pdf",
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\n# TODO: 아래 입력과 출력을 while True: 안으로 옮기세요.\nword = input(\"Word (exit to stop): \")\n# TODO: 출력 전에 word가 exit인지 검사하고 맞으면 break하세요.\nprint(\"You typed:\", word)\n# TODO: 반복문 바깥 마지막 줄에 Done을 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\n# TODO: Move the input and output below inside while True:.\nword = input(\"Word (exit to stop): \")\n# TODO: Before printing, check whether word is exit; if so, break.\nprint(\"You typed:\", word)\n# TODO: On the last line outside the loop, print Done.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\n# TODO: Перенесите ввод и вывод ниже внутрь while True:.\nword = input(\"Word (exit to stop): \")\n# TODO: Перед выводом проверьте, равно ли word строке exit; если да, выполните break.\nprint(\"You typed:\", word)\n# TODO: В последней строке вне цикла выведите Done.\n"
    },
    "starterHint": {
      "ko": "현재 시작 코드는 hi를 한 번 받아 출력하고 끝납니다. 반복과 종료 검사를 완성한 뒤 hi → Enter, exit → Enter로 시험하세요. exit는 프로그램을 끝내기 위해 직접 입력하는 글자입니다.",
      "en": "This starter reads hi once, prints it, and stops. After adding the loop and stop check, test with hi, Enter, then exit, Enter. You type exit to end the program.",
      "ru": "Сейчас начало программы один раз принимает hi, выводит его и заканчивается. После добавления цикла и проверки остановки введите hi, Enter, затем exit, Enter. Слово exit вводите вы, чтобы завершить программу."
    }
  },
  {
    "id": "lesson-23",
    "menu": {
      "ko": "12주 · 함수(Function)",
      "en": "W12 · Functions",
      "ru": "W12 · Функции"
    },
    "title": {
      "ko": "코드의 부품 만들기! 함수(Function)",
      "en": "Making Code Parts! Functions",
      "ru": "Создание частей кода! Функции"
    },
    "theory": {
      "ko": "<section class=\"lesson-section\"><h3>1. 함수는 이름을 붙인 코드 묶음</h3><p>함수는 필요할 때 이름을 불러 실행하는 코드 묶음입니다. 같은 인사를 세 번 쓰는 대신 인사 함수를 만들고 세 번 부를 수 있습니다. 이미 사용한 print()와 input()도 함수입니다. 오늘은 <code>def</code>로 직접 만듭니다.</p></section><section class=\"lesson-section\"><h3>2. 정의한 다음 호출하기</h3><pre><code>def say_hi():\n    print(&quot;Hello class&quot;)\n\nsay_hi()\nsay_hi()</code></pre><p><b>예상 결과</b></p><pre><code>Hello class\nHello class</code></pre><p><code>def say_hi():</code>는 함수를 준비하는 정의입니다. 몸체는 공백 4칸 안쪽입니다. 아래의 <code>say_hi()</code>가 호출입니다. 정의만 하면 인사가 출력되지 않습니다. 빈 괄호는 전달할 값이 없다는 뜻입니다.</p><div class=\"mini-practice\"><h4>작은 연습 · 호출 한 번 추가</h4><p>위 코드에서 마지막 say_hi()를 한 번 더 적으면 몇 줄이 나올까요?</p><p>예상 결과</p><pre><code>Hello class\nHello class\nHello class</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>def say_hi():\n    print(&quot;Hello class&quot;)\n\nsay_hi()\nsay_hi()\nsay_hi()</code></pre></details></div></section><section class=\"lesson-section\"><h3>3. 값을 전달하기: 매개변수와 인수</h3><pre><code>def greet(name):\n    print(&quot;Hello,&quot;, name)\n\ngreet(&quot;Mina&quot;)\ngreet(&quot;Alex&quot;)</code></pre><p><b>예상 결과</b></p><pre><code>Hello, Mina\nHello, Alex</code></pre><p><code>def greet(name)</code>의 name은 전달된 값을 받을 이름, 즉 매개변수입니다. <code>greet(\"Mina\")</code>의 \"Mina\"는 실제 보내는 값, 즉 인수입니다. Mina를 Alex로 바꾸면 함수 몸체는 그대로 두고 인사만 바뀝니다.</p></section><details class=\"lesson-extra\"><summary>선택 예시 · 함수 안에서 직접 질문하기</summary><section class=\"lesson-section\"><h3>4. 함수 안에서 입력받는 다른 방법</h3><pre><code>def ask_name():\n    name = input(&quot;Name: &quot;)\n    print(&quot;Hello,&quot;, name)\n\nask_name()</code></pre><p><b>예상 결과</b></p><pre><code>Name: Mina\nHello, Mina</code></pre><p>선택한 실습 도구에서 실행한 뒤 <code>Name:</code>이 나오면 <code>Mina</code>만 입력하고 Enter를 누르세요. 이 함수는 괄호로 값을 받는 대신 함수 안의 input()으로 읽습니다. 위 greet와 별개의 방법이므로 한꺼번에 합칠 필요는 없습니다.</p></section></details><section class=\"lesson-section\"><h3>5. return: 결과를 돌려주기</h3><pre><code>def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)\nprint(result + 10)</code></pre><p><b>예상 결과</b></p><pre><code>8\n18</code></pre><ol><li>def로 add를 준비합니다. 이때 아직 더하지 않습니다.</li><li>add(3, 5)를 호출하면 a는 3, b는 5를 받습니다.</li><li>함수 안에서 3 + 5를 계산하고 return으로 8을 돌려줍니다.</li><li>호출한 곳의 result에 8을 저장합니다.</li><li>print(result)는 8, print(result + 10)은 18을 보여 줍니다.</li></ol><p>return은 지금 함수 호출을 끝냅니다. 같은 실행 경로에서 return 아래의 코드는 실행하지 않습니다.</p><p>호출할 때 쓰는 변수 이름과 함수 안의 이름은 달라도 됩니다. 아래에서는 x의 값 3이 첫 번째 a로, y의 값 5가 두 번째 b로 전달됩니다. 순서대로 전달되는 것이 핵심입니다.</p><pre><code>def add(a, b):\n    return a + b\n\nx = 3\ny = 5\nresult = add(x, y)\nprint(result)</code></pre><p><b>예상 결과</b></p><pre><code>8</code></pre></section><section class=\"lesson-section\"><h3>6. print와 return의 차이</h3><pre><code>def show_sum(a, b):\n    print(a + b)\n\nvalue = show_sum(3, 5)\nprint(value)</code></pre><p><b>예상 결과</b></p><pre><code>8\nNone</code></pre><p>print는 화면으로 보여 주고, return은 호출한 곳에 값을 전달합니다. print를 했다고 원래 변수의 값이 사라지지는 않습니다. print() 자체의 반환값은 None이고, return 없이 끝난 함수도 None을 돌려줍니다. 계산 결과를 재사용하려면 add처럼 return을 쓰세요. 모든 함수에 return이 꼭 필요한 것은 아닙니다.</p></section><section class=\"lesson-section\"><h3>7. 작은 계산 함수를 따로 연습하기</h3><div class=\"mini-practice\"><h4>작은 연습 · 빼기 함수</h4><p>subtract(a, b)가 a - b를 돌려주게 만들고 10과 2로 호출하세요.</p><p>예상 결과</p><pre><code>8</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>def subtract(a, b):\n    return a - b\n\nprint(subtract(10, 2))</code></pre></details></div><div class=\"mini-practice\"><h4>작은 연습 · 곱하기 함수</h4><p>multiply(a, b)가 a * b를 돌려주게 만들고 10과 2로 호출하세요.</p><p>예상 결과</p><pre><code>20</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>def multiply(a, b):\n    return a * b\n\nprint(multiply(10, 2))</code></pre></details></div><div class=\"mini-practice\"><h4>작은 연습 · 선택: 나누기 함수</h4><p>divide(a, b)가 a / b를 돌려주게 만들고 10과 2로 호출하세요. 이 연습은 b가 0이 아닐 때만 합니다.</p><p>예상 결과</p><pre><code>5.0</code></pre><details><summary>답안 예시 펼치기</summary><pre><code>def divide(a, b):\n    return a / b\n\nprint(divide(10, 2))</code></pre></details></div><p>먼저 함수 하나씩 실행하세요. 나누는 값이 0이면 오류가 나므로 0은 사용하지 않습니다.</p></section><section class=\"lesson-section\"><h3>8. 실수 확인과 거스름돈 준비</h3><ul><li>def 줄 끝의 콜론, 괄호, 공백 4칸을 확인하세요. 함수 밖 호출은 왼쪽 끝으로 돌아옵니다.</li><li>add(a, b)는 값 두 개를 받습니다. add(3)처럼 하나만 보내지 않습니다.</li><li>add라는 이름만 적으면 호출하지 않습니다. add(3, 5)처럼 괄호를 붙입니다.</li><li>이 예제에서는 함수를 정의한 뒤 호출하세요. 이름은 print나 input을 피하고 get_change처럼 의미 있게 씁니다.</li></ul><p>거스름돈도 뺄셈 함수입니다. get_change(money, price)는 money - price를 돌려줍니다. 이번 미션은 0 이상의 정수 금액, 가진 돈이 가격 이상인 경우만 연습합니다. 돈이 모자라면 음수가 되므로 이 미션의 입력 조건에 맞지 않습니다.</p></section><section class=\"problem-area\"><h3>필수 미션 · 거스름돈 함수 하나</h3><p>위 <code>add</code>는 더하기를 설명하는 예시입니다. 이번에는 같은 구조로 <code>get_change</code>라는 거스름돈 함수를 만듭니다. <b>정의: 함수 준비 → 호출: 함수 사용 → return: 계산값을 돌려주기 → print: 화면에 보여 주기</b> 순서를 따라가세요.</p><ol><li>get_change(money, price)를 정의하고 money - price를 return하세요.</li><li>함수 바깥에서 Money: 와 Price: 로 두 정수를 읽으세요.</li><li>change = get_change(money, price)로 반환값을 저장하세요.</li><li>Change: 와 change를 출력하세요. 실행 후 Money:에는 10000, 다음 Price:에는 4500을 입력하고 매번 Enter를 누르세요. Money=가진 돈, Price=가격, Change=거스름돈입니다. 결과는 Change: 5500입니다.</li><li>함수 하나를 정의하고 호출하는 것이 목표입니다. 기본 입력 조건은 0 이상의 정수, money >= price입니다.</li></ol></section>",
      "en": "<section class=\"lesson-section\"><h3>1. A function is a named group of code</h3><p>A function groups code under a name. Call that name when you need the code. Instead of copying a greeting three times, define it once and call it three times. print() and input() are functions too. Today we make our own with <code>def</code>.</p></section><section class=\"lesson-section\"><h3>2. Define, then call</h3><pre><code>def say_hi():\n    print(&quot;Hello class&quot;)\n\nsay_hi()\nsay_hi()</code></pre><p><b>Expected output</b></p><pre><code>Hello class\nHello class</code></pre><p><code>def say_hi():</code> prepares the function. Its body has four spaces of indentation. The later <code>say_hi()</code> calls it. A definition alone does not print the greeting. Empty parentheses mean we pass no values.</p><div class=\"mini-practice\"><h4>Small practice · Add one call</h4><p>Add one more say_hi() at the bottom. How many lines will appear?</p><p>Expected output</p><pre><code>Hello class\nHello class\nHello class</code></pre><details><summary>Show a sample answer</summary><pre><code>def say_hi():\n    print(&quot;Hello class&quot;)\n\nsay_hi()\nsay_hi()\nsay_hi()</code></pre></details></div></section><section class=\"lesson-section\"><h3>3. Pass values: parameter and argument</h3><pre><code>def greet(name):\n    print(&quot;Hello,&quot;, name)\n\ngreet(&quot;Mina&quot;)\ngreet(&quot;Alex&quot;)</code></pre><p><b>Expected output</b></p><pre><code>Hello, Mina\nHello, Alex</code></pre><p>In <code>def greet(name)</code>, name is a parameter: a name that receives a value. In <code>greet(\"Mina\")</code>, \"Mina\" is the argument: the value we send. Change Mina to Alex without changing the body.</p></section><details class=\"lesson-extra\"><summary>Optional example · Ask inside a function</summary><section class=\"lesson-section\"><h3>4. Another method: input inside a function</h3><pre><code>def ask_name():\n    name = input(&quot;Name: &quot;)\n    print(&quot;Hello,&quot;, name)\n\nask_name()</code></pre><p><b>Expected output</b></p><pre><code>Name: Mina\nHello, Mina</code></pre><p>Run in your practice tool. When <code>Name:</code> appears, type only <code>Mina</code> and press Enter. This function reads with input() inside its body instead of receiving an argument. It is an alternative to greet; you do not need to combine them.</p></section></details><section class=\"lesson-section\"><h3>5. return: send a result back</h3><pre><code>def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)\nprint(result + 10)</code></pre><p><b>Expected output</b></p><pre><code>8\n18</code></pre><ol><li>def prepares add. It does not add the numbers yet.</li><li>Calling add(3, 5) sends 3 to a and 5 to b.</li><li>The function calculates 3 + 5 and returns 8.</li><li>The caller stores 8 in result.</li><li>print(result) shows 8. print(result + 10) shows 18.</li></ol><p>return ends the current function call. Lines later on that same execution path do not run.</p><p>The caller’s variable names can differ from the parameter names. Below, x sends its value 3 to the first parameter a; y sends 5 to the second parameter b. The order connects the values.</p><pre><code>def add(a, b):\n    return a + b\n\nx = 3\ny = 5\nresult = add(x, y)\nprint(result)</code></pre><p><b>Expected output</b></p><pre><code>8</code></pre></section><section class=\"lesson-section\"><h3>6. print and return do different jobs</h3><pre><code>def show_sum(a, b):\n    print(a + b)\n\nvalue = show_sum(3, 5)\nprint(value)</code></pre><p><b>Expected output</b></p><pre><code>8\nNone</code></pre><p>print shows a value on the screen. return sends a value back to the caller. Printing does not erase the original variable. print() itself returns None, and a function that finishes without return also returns None. Use return like add when you need to reuse a result. Not every function needs a return statement.</p></section><section class=\"lesson-section\"><h3>7. Practise small calculations separately</h3><div class=\"mini-practice\"><h4>Small practice · Subtract</h4><p>Make subtract(a, b) return a - b. Call it with 10 and 2.</p><p>Expected output</p><pre><code>8</code></pre><details><summary>Show a sample answer</summary><pre><code>def subtract(a, b):\n    return a - b\n\nprint(subtract(10, 2))</code></pre></details></div><div class=\"mini-practice\"><h4>Small practice · Multiply</h4><p>Make multiply(a, b) return a * b, then call it with 10 and 2.</p><p>Expected output</p><pre><code>20</code></pre><details><summary>Show a sample answer</summary><pre><code>def multiply(a, b):\n    return a * b\n\nprint(multiply(10, 2))</code></pre></details></div><div class=\"mini-practice\"><h4>Small practice · Optional: divide</h4><p>Make divide(a, b) return a / b, then call it with 10 and 2. Use a nonzero b for this exercise.</p><p>Expected output</p><pre><code>5.0</code></pre><details><summary>Show a sample answer</summary><pre><code>def divide(a, b):\n    return a / b\n\nprint(divide(10, 2))</code></pre></details></div><p>Run one function at a time. Dividing by zero causes an error, so do not use zero here.</p></section><section class=\"lesson-section\"><h3>8. Check mistakes and prepare for change</h3><ul><li>Check the colon, parentheses and four spaces after def. Calls outside the function begin at the left.</li><li>add(a, b) needs two values. Do not send only one as in add(3).</li><li>Writing add alone does not call it. Use parentheses: add(3, 5).</li><li>In these examples, define the function before calling it. Use clear names such as get_change, not print or input.</li></ul><p>Change is another subtraction function. get_change(money, price) returns money - price. For this mission, use non-negative integers and money at least as large as price. Insufficient money would give a negative result and is outside this mission’s input conditions.</p></section><section class=\"problem-area\"><h3>Required mission · One change function</h3><p><code>add</code> above is an addition example. Now use the same structure for a change function named <code>get_change</code>. Follow <b>define: prepare → call: use → return: send the result back → print: show it</b>.</p><ol><li>Define get_change(money, price) and return money - price.</li><li>Outside the function, read integers with Money: and Price: .</li><li>Store the returned value with change = get_change(money, price).</li><li>Print Change: and change. After running, answer Money: with 10000 and then Price: with 4500, pressing Enter after each. Money is the amount you have; Price is the cost; Change is the money returned. The result is Change: 5500.</li><li>The goal is to define and call one function. Use non-negative integers with money >= price.</li></ol></section>",
      "ru": "<section class=\"lesson-section\"><h3>1. Функция — группа команд с именем</h3><p>Функция объединяет код под одним именем. Вызывайте её, когда нужен этот код. Вместо трёх копий приветствия можно определить функцию и трижды вызвать её. print() и input() тоже функции. Сегодня создадим свою с помощью <code>def</code>.</p></section><section class=\"lesson-section\"><h3>2. Сначала определение, затем вызов</h3><pre><code>def say_hi():\n    print(&quot;Hello class&quot;)\n\nsay_hi()\nsay_hi()</code></pre><p><b>Ожидаемый результат</b></p><pre><code>Hello class\nHello class</code></pre><p><code>def say_hi():</code> подготавливает функцию. Перед строками её тела — четыре пробела. Строка <code>say_hi()</code> ниже вызывает её. Одно определение ещё не выводит приветствие. Пустые скобки означают, что значения не передаются.</p><div class=\"mini-practice\"><h4>Короткая практика · Добавьте один вызов</h4><p>Допишите ещё один say_hi() внизу. Сколько строк появится?</p><p>Ожидаемый результат</p><pre><code>Hello class\nHello class\nHello class</code></pre><details><summary>Показать пример ответа</summary><pre><code>def say_hi():\n    print(&quot;Hello class&quot;)\n\nsay_hi()\nsay_hi()\nsay_hi()</code></pre></details></div></section><section class=\"lesson-section\"><h3>3. Передаём значения: параметр и аргумент</h3><pre><code>def greet(name):\n    print(&quot;Hello,&quot;, name)\n\ngreet(&quot;Mina&quot;)\ngreet(&quot;Alex&quot;)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>Hello, Mina\nHello, Alex</code></pre><p>В <code>def greet(name)</code> name — параметр: имя для принятого значения. В <code>greet(\"Mina\")</code> \"Mina\" — аргумент, то есть передаваемое значение. Замените Mina на Alex, не меняя тело функции.</p></section><details class=\"lesson-extra\"><summary>По желанию · Вопрос внутри функции</summary><section class=\"lesson-section\"><h3>4. Другой способ: input внутри функции</h3><pre><code>def ask_name():\n    name = input(&quot;Name: &quot;)\n    print(&quot;Hello,&quot;, name)\n\nask_name()</code></pre><p><b>Ожидаемый результат</b></p><pre><code>Name: Mina\nHello, Mina</code></pre><p>Запустите код в выбранной среде. Когда появится <code>Name:</code>, введите только <code>Mina</code> и нажмите Enter. Эта функция читает input() внутри тела вместо получения аргумента. Это отдельный способ, отличный от greet; соединять их не нужно.</p></section></details><section class=\"lesson-section\"><h3>5. return: возвращаем результат</h3><pre><code>def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)\nprint(result + 10)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>8\n18</code></pre><ol><li>def подготавливает add. Сложения ещё нет.</li><li>Вызов add(3, 5) передаёт 3 в a и 5 в b.</li><li>Функция вычисляет 3 + 5 и возвращает 8.</li><li>В месте вызова 8 сохраняется в result.</li><li>print(result) показывает 8, а print(result + 10) — 18.</li></ol><p>return завершает текущий вызов функции. Более поздние строки на этом же пути выполнения не исполняются.</p><p>Имена переменных при вызове могут отличаться от имён параметров. Ниже x передаёт значение 3 первому параметру a, а y передаёт 5 второму параметру b. Значения связывает их порядок.</p><pre><code>def add(a, b):\n    return a + b\n\nx = 3\ny = 5\nresult = add(x, y)\nprint(result)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>8</code></pre></section><section class=\"lesson-section\"><h3>6. Разница между print и return</h3><pre><code>def show_sum(a, b):\n    print(a + b)\n\nvalue = show_sum(3, 5)\nprint(value)</code></pre><p><b>Ожидаемый результат</b></p><pre><code>8\nNone</code></pre><p>print показывает значение на экране, а return передаёт значение в место вызова. Вывод не стирает исходную переменную. Сам print() возвращает None. Функция, закончившаяся без return, тоже возвращает None. Для дальнейших вычислений возвращайте результат, как в add. Не каждой функции нужен оператор return.</p></section><section class=\"lesson-section\"><h3>7. Небольшие вычисления по отдельности</h3><div class=\"mini-practice\"><h4>Короткая практика · Вычитание</h4><p>Пусть subtract(a, b) возвращает a - b. Вызовите её с 10 и 2.</p><p>Ожидаемый результат</p><pre><code>8</code></pre><details><summary>Показать пример ответа</summary><pre><code>def subtract(a, b):\n    return a - b\n\nprint(subtract(10, 2))</code></pre></details></div><div class=\"mini-practice\"><h4>Короткая практика · Умножение</h4><p>Пусть multiply(a, b) возвращает a * b. Вызовите функцию с числами 10 и 2.</p><p>Ожидаемый результат</p><pre><code>20</code></pre><details><summary>Показать пример ответа</summary><pre><code>def multiply(a, b):\n    return a * b\n\nprint(multiply(10, 2))</code></pre></details></div><div class=\"mini-practice\"><h4>Короткая практика · Дополнительно: деление</h4><p>Пусть divide(a, b) возвращает a / b. Вызовите функцию с числами 10 и 2. В этом упражнении b не равно нулю.</p><p>Ожидаемый результат</p><pre><code>5.0</code></pre><details><summary>Показать пример ответа</summary><pre><code>def divide(a, b):\n    return a / b\n\nprint(divide(10, 2))</code></pre></details></div><p>Сначала запускайте функции по одной. Деление на ноль вызывает ошибку, поэтому здесь не используйте ноль.</p></section><section class=\"lesson-section\"><h3>8. Проверка ошибок и подготовка сдачи</h3><ul><li>Проверьте двоеточие, скобки и четыре пробела после def. Вызов вне функции начинается от левого края.</li><li>add(a, b) нужны два значения. Не передавайте только одно, как add(3).</li><li>Имя add само по себе не вызывает функцию. Нужны скобки: add(3, 5).</li><li>В этих примерах определяйте функцию до вызова. Выбирайте понятные имена вроде get_change, не print и не input.</li></ul><p>Сдача — тоже функция вычитания. get_change(money, price) возвращает money - price. Для этого задания используйте целые неотрицательные суммы, причём денег должно быть не меньше цены. При нехватке получится отрицательный результат; такой ввод выходит за условия этого задания.</p></section><section class=\"problem-area\"><h3>Обязательное задание · Одна функция сдачи</h3><p><code>add</code> выше — пример сложения. Теперь по той же схеме создайте функцию сдачи <code>get_change</code>. Порядок: <b>определить — подготовить → вызвать — использовать → return — вернуть результат → print — показать его</b>.</p><ol><li>Определите get_change(money, price), которая возвращает money - price.</li><li>Вне функции прочитайте целые числа с подсказками Money: и Price: .</li><li>Сохраните результат: change = get_change(money, price).</li><li>Выведите Change: и change. После запуска введите 10000 на вопрос Money:, затем 4500 на Price:, каждый раз нажимая Enter. Money — ваши деньги, Price — цена, Change — сдача. Результат: Change: 5500.</li><li>Цель — определить и вызвать одну функцию. Вводите целые неотрицательные числа, money >= price.</li></ol></section>"
    },
    "answer": {
      "ko": "def get_change(money, price):\n    return money - price\n\nmoney = int(input(\"Money: \"))\nprice = int(input(\"Price: \"))\nchange = get_change(money, price)\nprint(\"Change:\", change)",
      "en": "def get_change(money, price):\n    return money - price\n\nmoney = int(input(\"Money: \"))\nprice = int(input(\"Price: \"))\nchange = get_change(money, price)\nprint(\"Change:\", change)",
      "ru": "def get_change(money, price):\n    return money - price\n\nmoney = int(input(\"Money: \"))\nprice = int(input(\"Price: \"))\nchange = get_change(money, price)\nprint(\"Change:\", change)"
    },
    "initialCode": {
      "ko": "def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)\nprint(result + 10)",
      "en": "def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)\nprint(result + 10)",
      "ru": "def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)\nprint(result + 10)"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "8\n18",
      "en": "8\n18",
      "ru": "8\n18"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "거스름돈 5500",
          "en": "Change of 5500",
          "ru": "Сдача 5500"
        },
        "input": {
          "ko": "10000\n4500",
          "en": "10000\n4500",
          "ru": "10000\n4500"
        },
        "output": {
          "ko": "Money: 10000\nPrice: 4500\nChange: 5500",
          "en": "Money: 10000\nPrice: 4500\nChange: 5500",
          "ru": "Money: 10000\nPrice: 4500\nChange: 5500"
        }
      },
      {
        "name": {
          "ko": "정확한 금액",
          "en": "Exact payment",
          "ru": "Точная сумма"
        },
        "input": {
          "ko": "4500\n4500",
          "en": "4500\n4500",
          "ru": "4500\n4500"
        },
        "output": {
          "ko": "Money: 4500\nPrice: 4500\nChange: 0",
          "en": "Money: 4500\nPrice: 4500\nChange: 0",
          "ru": "Money: 4500\nPrice: 4500\nChange: 0"
        }
      },
      {
        "name": {
          "ko": "0과 0",
          "en": "Zero and zero",
          "ru": "Ноль и ноль"
        },
        "input": {
          "ko": "0\n0",
          "en": "0\n0",
          "ru": "0\n0"
        },
        "output": {
          "ko": "Money: 0\nPrice: 0\nChange: 0",
          "en": "Money: 0\nPrice: 0\nChange: 0",
          "ru": "Money: 0\nPrice: 0\nChange: 0"
        }
      }
    ],
    "sourceWeek": 12,
    "sourcePages": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ],
    "needsInput": true,
    "sourceFile": "12(4).pdf",
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\n# TODO: 이 위치에 get_change(money, price) 함수를 정의하세요. 계산 결과를 return합니다.\n\nmoney = int(input(\"Money: \"))\nprice = int(input(\"Price: \"))\n# TODO: 함수를 호출한 값을 change에 저장한 뒤 Change:와 change를 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\n# TODO: Define get_change(money, price) here. Return the calculated change.\n\nmoney = int(input(\"Money: \"))\nprice = int(input(\"Price: \"))\n# TODO: Call the function, store its result in change, then print Change: and change.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\n# TODO: Здесь определите функцию get_change(money, price). Верните вычисленную сдачу.\n\nmoney = int(input(\"Money: \"))\nprice = int(input(\"Price: \"))\n# TODO: Вызовите функцию, сохраните результат в change, затем выведите Change: и change.\n"
    },
    "starterHint": {
      "ko": "미션에 필요한 money·price 입력만 있습니다. 입력 줄 위에 get_change를 정의하고 아래에서 호출하세요. money가 price 이상인 0 이상의 정수로 연습합니다.",
      "en": "Only the mission’s money and price inputs are ready. Define get_change above them and call it below. Use nonnegative integers with money at least price.",
      "ru": "Готов только ввод money и price для задания. Определите get_change выше этих строк и вызовите ниже. Используйте неотрицательные целые числа, money не меньше price."
    }
  },
  {
    "id": "lesson-24",
    "menu": {
      "ko": "선택 확장 · 딕셔너리",
      "en": "Optional · Dictionaries",
      "ru": "По желанию · Словари"
    },
    "title": {
      "ko": "선택 확장: 딕셔너리로 학생 정보 묶기",
      "en": "Optional extension: student data in a dictionary",
      "ru": "По желанию: данные студента в словаре"
    },
    "theory": {
      "ko": "<p><b>선택 수업입니다. 12주차 함수까지 복습한 뒤 필요할 때 진행하세요.</b></p><section class=\"lesson-section\"><h3>목표: 번호 대신 이름표로 찾기</h3><p>리스트가 번호가 붙은 바구니라면 딕셔너리(dictionary)는 이름표가 붙은 서랍입니다. 이름표를 <b>키(key)</b>, 서랍에 담긴 내용을 <b>값(value)</b>이라고 합니다.</p><p><b>먼저 작은 성공:</b> 아래 첫 코드만 복사해 실행하세요. Mina와 95가 나오면 이름표로 값을 찾고 바꾸는 데 성공했습니다. 그다음 \"Mina\"를 자신의 이름으로 바꿔 보세요. 세 점수를 받는 미션은 여러 주차를 합친 <b>선택 도전</b>이므로 나중에 진행해도 됩니다.</p></section><section class=\"lesson-section\"><h3>중괄호·콜론·쉼표 읽기</h3><p><code>{}</code>는 빈 딕셔너리입니다. <code>{\"name\": \"Mina\", \"score\": 90}</code>에서 콜론은 키와 값을 연결하고 쉼표는 두 쌍을 구분합니다. <code>student[\"name\"]</code>은 name이라는 키의 값을 찾습니다.</p><pre><code>student = {&quot;name&quot;: &quot;Mina&quot;, &quot;score&quot;: 90}\nprint(student[&quot;name&quot;])\nstudent[&quot;score&quot;] = 95\nstudent[&quot;major&quot;] = &quot;IT&quot;\nprint(student[&quot;score&quot;])</code></pre><p>결과는 Mina와 95입니다. 이미 있는 키에 저장하면 값을 바꾸고, 없는 키에 저장하면 새 항목을 만듭니다. 읽으려는 키가 없으면 KeyError입니다. <code>if \"name\" in student:</code>로 키 존재 여부를 확인할 수 있습니다. 대문자 Name과 소문자 name은 다릅니다.</p></section><section class=\"lesson-section\"><h3>값으로 리스트 넣기</h3><p>딕셔너리 값은 숫자나 문자열뿐 아니라 리스트도 가능합니다. <code>student[\"scores\"]</code>로 점수 리스트를 꺼내고 <code>len()</code>으로 개수를 셉니다. 합계를 개수로 나누면 평균입니다. 빈 리스트는 개수가 0이므로 나누기 전에 확인해야 합니다.</p><pre><code>student = {&quot;name&quot;: &quot;Mina&quot;, &quot;scores&quot;: [80, 90]}\ntotal = 0\nfor score in student[&quot;scores&quot;]:\n    total = total + score\nprint(total / len(student[&quot;scores&quot;]))</code></pre><p>결과는 85.0입니다. 이 예제는 점수가 두 개 있어 안전하게 나눌 수 있습니다.</p></section><section class=\"lesson-section\"><h3>items()로 키와 값 함께 꺼내기</h3><p><code>student.items()</code>는 키와 값의 쌍을 하나씩 제공합니다. <code>for key, value in ...</code>에서 쌍의 첫 값을 key, 두 번째 값을 value에 넣습니다. 우리가 넣은 순서로 출력합니다.</p><pre><code>student = {&quot;name&quot;: &quot;Mina&quot;, &quot;major&quot;: &quot;IT&quot;}\nfor key, value in student.items():\n    print(key, value)</code></pre><p>결과는 name Mina, 다음 줄 major IT입니다. 문자열 키의 따옴표를 빼면 변수 이름으로 해석하므로 주의하세요.</p></section><section class=\"problem-area\"><h3 class=\"problem-title\">선택 도전 · 세 점수를 가진 학생 카드</h3><ol><li>빈 student 딕셔너리에 Name: 과 Major: 로 받은 문자열을 name, major 키에 저장하세요.</li><li>빈 scores 리스트를 만들고 while len(scores) &lt; 3으로 유효한 점수 세 개를 받으세요. 입력 안내는 Score: 입니다.</li><li>정수가 아니면 Integers only, 0~100 밖이면 Score must be 0..100을 출력하고 다시 받으세요. 유효한 점수만 append하세요.</li><li>student[\"scores\"]에 scores를 저장하세요. items() 반복문으로 각 키와 값을 한 줄씩 출력하세요.</li><li>for로 점수 합계를 구하고 Average: 와 평균을 출력하세요.</li></ol><p>실행 후 Name:에는 이름, Major:에는 전공을 입력하고 매번 Enter를 누르세요. Score:가 나올 때마다 점수 하나와 Enter를 입력합니다. 잘못된 점수를 넣으면 <b>점수만 다시 묻습니다</b>. 이름과 전공을 다시 입력하지 않습니다. Name=이름, Major=전공, Score=점수, Average=평균입니다.</p></section>",
      "en": "<p><b>This lesson is optional. Review functions from Week 12 before continuing.</b></p><section class=\"lesson-section\"><h3>Goal: find data by a label</h3><p>A list uses numbered places. A dictionary is like drawers with labels: the label is a <b>key</b> and the stored content is a <b>value</b>.</p><p><b>Start small:</b> copy and run only the first code example below. Seeing Mina and 95 means you found and updated values by their keys. Then change \"Mina\" to your name. The three-score mission combines several lessons and is an <b>optional challenge</b>; it can wait.</p></section><section class=\"lesson-section\"><h3>Read braces, colons and commas</h3><p><code>{}</code> is an empty dictionary. In <code>{\"name\": \"Mina\", \"score\": 90}</code>, a colon joins a key to its value and a comma separates pairs. <code>student[\"name\"]</code> reads the value at key name.</p><pre><code>student = {&quot;name&quot;: &quot;Mina&quot;, &quot;score&quot;: 90}\nprint(student[&quot;name&quot;])\nstudent[&quot;score&quot;] = 95\nstudent[&quot;major&quot;] = &quot;IT&quot;\nprint(student[&quot;score&quot;])</code></pre><p>The output is Mina and 95. Assigning to an existing key changes its value; assigning to a new key adds an entry. Reading a missing key raises KeyError. You can check <code>if \"name\" in student:</code> first. Name and name are different keys.</p></section><section class=\"lesson-section\"><h3>Store a list as a value</h3><p>A dictionary value can also be a list. Read the score list with <code>student[\"scores\"]</code> and count it with <code>len()</code>. The average is the sum divided by the count. An empty list has count 0, so check before dividing.</p><pre><code>student = {&quot;name&quot;: &quot;Mina&quot;, &quot;scores&quot;: [80, 90]}\ntotal = 0\nfor score in student[&quot;scores&quot;]:\n    total = total + score\nprint(total / len(student[&quot;scores&quot;]))</code></pre><p>The result is 85.0. This example has two scores, so division is safe.</p></section><section class=\"lesson-section\"><h3>Read keys and values with items()</h3><p><code>student.items()</code> provides pairs of keys and values. In <code>for key, value in ...</code>, key receives the first part of each pair and value receives the second. Entries appear in their insertion order.</p><pre><code>student = {&quot;name&quot;: &quot;Mina&quot;, &quot;major&quot;: &quot;IT&quot;}\nfor key, value in student.items():\n    print(key, value)</code></pre><p>Output: name Mina, then major IT on the next line. Keep quotes around text keys; without them Python reads a variable name.</p></section><section class=\"problem-area\"><h3 class=\"problem-title\">Optional challenge · A student card with three scores</h3><ol><li>Create an empty student dictionary. Read Name: and Major: and store the text under name and major.</li><li>Make an empty scores list. Use while len(scores) &lt; 3 to collect three valid scores with the prompt Score: .</li><li>For non-integers, print Integers only. For values outside 0..100, print Score must be 0..100. Retry and append only valid scores.</li><li>Store scores in student[\"scores\"]. Use an items() loop to print each key and value on its own line.</li><li>Use for to total the scores, then print Average: and the average.</li></ol><p>After running, answer Name: with your name and Major: with your major; press Enter after each. At each Score:, enter one score and press Enter. After a bad score, the program <b>asks only for that score again</b>, not for your name or major.</p></section>",
      "ru": "<p><b>Дополнительный урок по желанию. Переходите к нему после повторения функций недели 12.</b></p><section class=\"lesson-section\"><h3>Цель: искать данные по ключу</h3><p>В списке места пронумерованы. Словарь похож на ящики с ярлыками: ярлык — <b>ключ</b>, содержимое — <b>значение</b>.</p><p><b>Начните с малого:</b> скопируйте и запустите только первый пример ниже. Mina и 95 означают, что вы нашли и изменили значения по ключам. Затем замените \"Mina\" своим именем. Задание с тремя оценками объединяет несколько тем: это <b>необязательное усложнение</b>, его можно отложить.</p></section><section class=\"lesson-section\"><h3>Разберите скобки, двоеточия и запятые</h3><p><code>{}</code> — пустой словарь. В <code>{\"name\": \"Mina\", \"score\": 90}</code> двоеточие соединяет ключ со значением, запятая разделяет пары. <code>student[\"name\"]</code> читает значение ключа name.</p><pre><code>student = {&quot;name&quot;: &quot;Mina&quot;, &quot;score&quot;: 90}\nprint(student[&quot;name&quot;])\nstudent[&quot;score&quot;] = 95\nstudent[&quot;major&quot;] = &quot;IT&quot;\nprint(student[&quot;score&quot;])</code></pre><p>Вывод: Mina и 95. Присваивание существующему ключу меняет значение, новому — добавляет запись. Чтение отсутствующего ключа вызывает KeyError. Сначала можно проверить <code>if \"name\" in student:</code>. Name и name — разные ключи.</p></section><section class=\"lesson-section\"><h3>Список как значение</h3><p>Значением словаря может быть список. Получите оценки через <code>student[\"scores\"]</code>, посчитайте их через <code>len()</code>. Среднее — сумма, делённая на количество. У пустого списка количество 0: проверяйте это перед делением.</p><pre><code>student = {&quot;name&quot;: &quot;Mina&quot;, &quot;scores&quot;: [80, 90]}\ntotal = 0\nfor score in student[&quot;scores&quot;]:\n    total = total + score\nprint(total / len(student[&quot;scores&quot;]))</code></pre><p>Результат 85.0. В примере две оценки, поэтому деление безопасно.</p></section><section class=\"lesson-section\"><h3>Получить ключи и значения через items()</h3><p><code>student.items()</code> даёт пары ключ–значение. В <code>for key, value in ...</code> key получает первую часть пары, value — вторую. Записи идут в порядке добавления.</p><pre><code>student = {&quot;name&quot;: &quot;Mina&quot;, &quot;major&quot;: &quot;IT&quot;}\nfor key, value in student.items():\n    print(key, value)</code></pre><p>Вывод: name Mina, затем major IT. У текстовых ключей нужны кавычки; без них Python ищет имя переменной.</p></section><section class=\"problem-area\"><h3 class=\"problem-title\">По желанию · Карточка с тремя оценками</h3><ol><li>Создайте пустой словарь student. Прочитайте Name: и Major:, сохраните текст под ключами name и major.</li><li>Создайте пустой scores. Через while len(scores) &lt; 3 соберите три верные оценки с подсказкой Score: .</li><li>Для нецелого ввода выведите Integers only. Для значения вне 0..100 — Score must be 0..100. Повторяйте ввод; добавляйте только верные оценки.</li><li>Сохраните scores в student[\"scores\"]. Через items() выведите каждую пару ключ–значение отдельной строкой.</li><li>Через for найдите сумму, затем выведите Average: и среднее.</li></ol><p>После запуска введите имя на Name:, специальность на Major:, каждый раз нажимая Enter. На каждый Score: введите одну оценку и Enter. После неверной оценки программа <b>снова спрашивает только оценку</b>, а не имя и специальность. Name — имя, Major — специальность, Score — оценка, Average — среднее.</p></section>"
    },
    "answer": {
      "ko": "student = {}\nstudent[\"name\"] = input(\"Name: \")\nstudent[\"major\"] = input(\"Major: \")\nscores = []\nwhile len(scores) < 3:\n    try:\n        score = int(input(\"Score: \"))\n    except ValueError:\n        print(\"Integers only\")\n        continue\n    if score < 0 or score > 100:\n        print(\"Score must be 0..100\")\n        continue\n    scores.append(score)\nstudent[\"scores\"] = scores\nfor key, value in student.items():\n    print(key, value)\ntotal = 0\nfor score in student[\"scores\"]:\n    total = total + score\nprint(\"Average:\", total / len(student[\"scores\"]))",
      "en": "student = {}\nstudent[\"name\"] = input(\"Name: \")\nstudent[\"major\"] = input(\"Major: \")\nscores = []\nwhile len(scores) < 3:\n    try:\n        score = int(input(\"Score: \"))\n    except ValueError:\n        print(\"Integers only\")\n        continue\n    if score < 0 or score > 100:\n        print(\"Score must be 0..100\")\n        continue\n    scores.append(score)\nstudent[\"scores\"] = scores\nfor key, value in student.items():\n    print(key, value)\ntotal = 0\nfor score in student[\"scores\"]:\n    total = total + score\nprint(\"Average:\", total / len(student[\"scores\"]))",
      "ru": "student = {}\nstudent[\"name\"] = input(\"Name: \")\nstudent[\"major\"] = input(\"Major: \")\nscores = []\nwhile len(scores) < 3:\n    try:\n        score = int(input(\"Score: \"))\n    except ValueError:\n        print(\"Integers only\")\n        continue\n    if score < 0 or score > 100:\n        print(\"Score must be 0..100\")\n        continue\n    scores.append(score)\nstudent[\"scores\"] = scores\nfor key, value in student.items():\n    print(key, value)\ntotal = 0\nfor score in student[\"scores\"]:\n    total = total + score\nprint(\"Average:\", total / len(student[\"scores\"]))"
    },
    "initialCode": {
      "ko": "student = {\"name\": \"Mina\", \"scores\": [80, 90]}\nprint(student[\"name\"])\nprint(len(student[\"scores\"]))",
      "en": "student = {\"name\": \"Mina\", \"scores\": [80, 90]}\nprint(student[\"name\"])\nprint(len(student[\"scores\"]))",
      "ru": "student = {\"name\": \"Mina\", \"scores\": [80, 90]}\nprint(student[\"name\"])\nprint(len(student[\"scores\"]))"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "Mina\n2",
      "en": "Mina\n2",
      "ru": "Mina\n2"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "학생 카드 완성",
          "en": "Complete the student card",
          "ru": "Готовая карточка"
        },
        "input": {
          "ko": "Mina\nIT\n80\n90\n100",
          "en": "Mina\nIT\n80\n90\n100",
          "ru": "Mina\nIT\n80\n90\n100"
        },
        "output": {
          "ko": "Name: Mina\nMajor: IT\nScore: 80\nScore: 90\nScore: 100\nname Mina\nmajor IT\nscores [80, 90, 100]\nAverage: 90.0",
          "en": "Name: Mina\nMajor: IT\nScore: 80\nScore: 90\nScore: 100\nname Mina\nmajor IT\nscores [80, 90, 100]\nAverage: 90.0",
          "ru": "Name: Mina\nMajor: IT\nScore: 80\nScore: 90\nScore: 100\nname Mina\nmajor IT\nscores [80, 90, 100]\nAverage: 90.0"
        }
      },
      {
        "name": {
          "ko": "잘못된 점수는 저장하지 않기",
          "en": "Do not store bad scores",
          "ru": "Не сохранять неверные оценки"
        },
        "input": {
          "ko": "Alex\nAI\nabc\n101\n-1\n60\n70\n80",
          "en": "Alex\nAI\nabc\n101\n-1\n60\n70\n80",
          "ru": "Alex\nAI\nabc\n101\n-1\n60\n70\n80"
        },
        "output": {
          "ko": "Name: Alex\nMajor: AI\nScore: abc\nIntegers only\nScore: 101\nScore must be 0..100\nScore: -1\nScore must be 0..100\nScore: 60\nScore: 70\nScore: 80\nname Alex\nmajor AI\nscores [60, 70, 80]\nAverage: 70.0",
          "en": "Name: Alex\nMajor: AI\nScore: abc\nIntegers only\nScore: 101\nScore must be 0..100\nScore: -1\nScore must be 0..100\nScore: 60\nScore: 70\nScore: 80\nname Alex\nmajor AI\nscores [60, 70, 80]\nAverage: 70.0",
          "ru": "Name: Alex\nMajor: AI\nScore: abc\nIntegers only\nScore: 101\nScore must be 0..100\nScore: -1\nScore must be 0..100\nScore: 60\nScore: 70\nScore: 80\nname Alex\nmajor AI\nscores [60, 70, 80]\nAverage: 70.0"
        }
      },
      {
        "name": {
          "ko": "0점과 100점 포함",
          "en": "Include 0 and 100",
          "ru": "Включая 0 и 100"
        },
        "input": {
          "ko": "Mina\nIT\n0\n100\n50",
          "en": "Mina\nIT\n0\n100\n50",
          "ru": "Mina\nIT\n0\n100\n50"
        },
        "output": {
          "ko": "Name: Mina\nMajor: IT\nScore: 0\nScore: 100\nScore: 50\nname Mina\nmajor IT\nscores [0, 100, 50]\nAverage: 50.0",
          "en": "Name: Mina\nMajor: IT\nScore: 0\nScore: 100\nScore: 50\nname Mina\nmajor IT\nscores [0, 100, 50]\nAverage: 50.0",
          "ru": "Name: Mina\nMajor: IT\nScore: 0\nScore: 100\nScore: 50\nname Mina\nmajor IT\nscores [0, 100, 50]\nAverage: 50.0"
        }
      }
    ],
    "needsInput": true,
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nstudent = {}\nstudent[\"name\"] = input(\"Name: \")\nstudent[\"major\"] = input(\"Major: \")\nscores = []\n# TODO: while로 유효한 점수 세 개만 scores에 추가하세요. 미션대로 잘못된 입력을 처리하세요.\n# TODO: student의 scores 키에 리스트를 저장하고 items()로 각 항목을 출력하세요.\n# TODO: for로 합계를 구한 뒤 Average:와 평균을 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nstudent = {}\nstudent[\"name\"] = input(\"Name: \")\nstudent[\"major\"] = input(\"Major: \")\nscores = []\n# TODO: Use while to add only three valid scores to scores. Handle invalid input as the mission explains.\n# TODO: Store the list under the scores key in student and print each item with items().\n# TODO: Find the sum with for, then print Average: and the average.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nstudent = {}\nstudent[\"name\"] = input(\"Name: \")\nstudent[\"major\"] = input(\"Major: \")\nscores = []\n# TODO: С помощью while добавьте в scores только три допустимых балла. Обработайте неверный ввод по заданию.\n# TODO: Сохраните список по ключу scores в student и выведите пары через items().\n# TODO: Найдите сумму через for, затем выведите Average: и среднее.\n"
    },
    "starterHint": {
      "ko": "선택 확장입니다. 이름·전공 입력과 빈 scores만 준비되어 있습니다. 점수 수집 → 학생 카드 출력 → 평균 순서로 완성하세요. 점수가 세 개 모인 뒤 평균을 계산합니다.",
      "en": "This is an optional extension. Name and major input and an empty scores list are ready. Complete score collection, student card output, then average. Calculate the average after collecting three scores.",
      "ru": "Это дополнительное задание. Готовы ввод имени, специальности и пустой scores. Допишите сбор баллов, вывод карточки и среднее. Среднее вычисляйте после получения трёх баллов."
    }
  },
  {
    "id": "lesson-25",
    "menu": {
      "ko": "선택 확장 · 라이브러리",
      "en": "Optional · Libraries",
      "ru": "По желанию · Библиотеки"
    },
    "title": {
      "ko": "선택 확장: random 모듈 사용하기",
      "en": "Optional extension: use the random module",
      "ru": "По желанию: модуль random"
    },
    "theory": {
      "ko": "<p><b>선택 수업입니다. 12주차 함수까지 복습한 뒤 필요할 때 진행하세요.</b></p><section class=\"lesson-section\"><h3>목표: 이미 만든 도구 가져오기</h3><p>모듈(module)은 미리 만든 코드를 모아 둔 도구 파일입니다. 라이브러리는 이런 도구들의 모음이라고 생각하면 됩니다. <code>import random</code>은 Python에 기본으로 들어 있는 random 모듈을 쓸 준비를 합니다.</p><p><b>먼저 작은 성공:</b> 아래 첫 코드를 실행해 True를 확인하세요. 마지막 줄을 <code>print(number)</code>로 바꾸면 뽑힌 숫자 자체를 볼 수 있습니다. 1, 2, 3 중 하나면 성공입니다. seed와 숫자 맞추기 게임은 그다음 선택 도전입니다.</p></section><section class=\"lesson-section\"><h3>점(.)으로 모듈 안의 함수 사용하기</h3><p><code>random.randint(1, 3)</code>는 1, 2, 3 중 정수 하나를 고릅니다. 두 끝값도 포함합니다. <code>range(1,3)</code>에서 3을 제외하는 규칙과 다릅니다. 점(.) 앞은 모듈 이름, 뒤는 함수 이름입니다.</p><pre><code>import random\nnumber = random.randint(1, 3)\nprint(number &gt;= 1 and number &lt;= 3)</code></pre><p>뽑은 수는 바뀔 수 있지만 범위 검사는 항상 True입니다. 같은 수가 연속해서 나와도 오류가 아닙니다. 이번에는 Python에 기본으로 들어 있는 random만 쓰므로 별도 설치는 필요하지 않습니다.</p></section><section class=\"lesson-section\"><h3>연습 결과를 똑같이 만드는 seed</h3><p>결과를 비교하는 연습에서는 <code>random.seed(1)</code>을 import 다음, 추첨 전에 넣습니다. 이는 난수 생성기의 시작 상태를 정합니다. 아래 재생 예시는 그다음 <code>randint(1,3)</code>에서 1이 나온 흐름입니다. 직접 게임할 때 고정 seed를 빼면 다음 실행의 숫자와 결과가 달라질 수 있습니다.</p><pre><code>import random\nrandom.seed(1)\nsecret = random.randint(1, 3)\nprint(secret)</code></pre><p>seed는 정답 숫자를 직접 저장하는 명령이 아닙니다. 같은 시작 상태에서 같은 순서로 난수를 만들도록 합니다.</p></section><section class=\"lesson-section\"><h3>입력과 종료를 안전하게 연결하기</h3><p>정답은 반복문 <b>전에 한 번만</b> 고릅니다. 안에서 고르면 매번 정답이 바뀝니다. input은 문자열이므로 int로 바꾸되 ValueError를 처리하세요. 0은 종료, 1~3은 추측, 나머지는 잘못된 범위로 정합니다.</p><p>실행 후 Guess 1-3 (0 to stop):가 나올 때마다 추측 하나를 입력하고 Enter를 누르세요. 틀리면 다시 질문하고, 정답이면 break로 끝납니다. <code>0</code>을 입력해도 종료됩니다. 고정 seed를 둔 이 예시에서는 2를 입력한 다음 다시 질문할 때 1을 입력해 오답과 정답을 확인합니다.</p></section><section class=\"problem-area\"><h3 class=\"problem-title\">선택 도전 · 같은 조건으로 숫자 맞추기</h3><ol><li>random을 import하고 seed(1)을 설정한 뒤 secret에 randint(1,3)을 한 번 저장하세요.</li><li>while True에서 Guess 1-3 (0 to stop): 로 정수를 입력받으세요. 정수 변환에 실패하면 Integers only를 출력하고 계속하세요.</li><li>0이면 Stopped를 출력하고 break하세요. 1~3 밖이면 Choose 1, 2 or 3을 출력하고 continue하세요.</li><li>secret과 같으면 Correct와 break, 다르면 Try again을 출력하세요.</li></ol></section>",
      "en": "<p><b>This lesson is optional. Review functions from Week 12 before continuing.</b></p><section class=\"lesson-section\"><h3>Goal: use an existing tool</h3><p>A module is a file of reusable code. Think of a library as a collection of tools. <code>import random</code> prepares the random module that comes with Python.</p><p><b>Start small:</b> run the first example below and check for True. Change its last line to <code>print(number)</code> to see the chosen number itself. Any of 1, 2, or 3 is a success. The seed and guessing game are the next optional challenge.</p></section><section class=\"lesson-section\"><h3>Use a module function with a dot</h3><p><code>random.randint(1, 3)</code> chooses an integer from 1, 2, 3. Both end values are included. This differs from <code>range(1,3)</code>, which excludes 3. Before the dot is the module name; after it is the function name.</p><pre><code>import random\nnumber = random.randint(1, 3)\nprint(number &gt;= 1 and number &lt;= 3)</code></pre><p>The chosen number can change, but the range check is always True. Getting the same number twice is not an error. This lesson uses the random module included with Python, so no separate installation is needed.</p></section><section class=\"lesson-section\"><h3>Use a seed for a repeatable exercise</h3><p>For a comparison exercise, put <code>random.seed(1)</code> after import and before choosing. It sets the generator’s starting state. The playback below shows a run where the following <code>randint(1,3)</code> gives 1. Removing the fixed seed for your own game can change the number and result on the next run.</p><pre><code>import random\nrandom.seed(1)\nsecret = random.randint(1, 3)\nprint(secret)</code></pre><p>seed does not directly store the answer number. It makes the generator produce the same sequence from the same starting state.</p></section><section class=\"lesson-section\"><h3>Connect input and exit safely</h3><p>Choose the secret <b>once before</b> the loop. Inside the loop it would change every turn. Convert input text with int and handle ValueError. Let 0 mean exit, 1..3 mean a guess, and other values mean a bad range.</p><p>After running, answer each Guess 1-3 (0 to stop): with one guess and press Enter. A wrong guess leads to another question; a correct guess ends the loop with break. Entering <code>0</code> also stops it. With this example’s fixed seed, enter 2, then answer the next question with 1 to see both outcomes.</p></section><section class=\"problem-area\"><h3 class=\"problem-title\">Optional challenge · A repeatable guessing game</h3><ol><li>Import random, set seed(1), then store one randint(1,3) result in secret.</li><li>Inside while True, read an integer with Guess 1-3 (0 to stop): . If conversion fails, print Integers only and continue.</li><li>For 0, print Stopped and break. Outside 1..3, print Choose 1, 2 or 3 and continue.</li><li>If the guess equals secret, print Correct and break. Otherwise print Try again.</li></ol></section>",
      "ru": "<p><b>Дополнительный урок по желанию. Переходите к нему после повторения функций недели 12.</b></p><section class=\"lesson-section\"><h3>Цель: использовать готовый инструмент</h3><p>Модуль — файл с готовым кодом. Библиотеку можно представить как набор инструментов. <code>import random</code> подключает модуль random, входящий в Python.</p><p><b>Начните с малого:</b> запустите первый пример ниже и проверьте True. Замените последнюю строку на <code>print(number)</code>, чтобы увидеть само выбранное число. Подходит любое из 1, 2, 3. seed и игру можно изучить затем по желанию.</p></section><section class=\"lesson-section\"><h3>Вызов функции модуля через точку</h3><p><code>random.randint(1, 3)</code> выбирает целое из 1, 2, 3. Обе границы включены. Это отличается от <code>range(1,3)</code>, где 3 исключено. Перед точкой — имя модуля, после — имя функции.</p><pre><code>import random\nnumber = random.randint(1, 3)\nprint(number &gt;= 1 and number &lt;= 3)</code></pre><p>Число может меняться, но проверка диапазона всегда даёт True. Повтор одного числа — не ошибка. Здесь используется random из стандартной библиотеки Python, отдельно устанавливать его не нужно.</p></section><section class=\"lesson-section\"><h3>seed для повторяемого упражнения</h3><p>Чтобы сравнивать результаты упражнения, добавьте <code>random.seed(1)</code> после import и до выбора. Это задаёт начальное состояние генератора. Ниже показан запуск, в котором следующий <code>randint(1,3)</code> даёт 1. Если для своей игры убрать фиксированный seed, при следующем запуске число и результат могут измениться.</p><pre><code>import random\nrandom.seed(1)\nsecret = random.randint(1, 3)\nprint(secret)</code></pre><p>seed не записывает число ответа напрямую. Он позволяет получить ту же последовательность из того же начального состояния.</p></section><section class=\"lesson-section\"><h3>Безопасный ввод и выход</h3><p>Выбирайте секретное число <b>один раз до</b> цикла. Внутри оно менялось бы при каждом проходе. Преобразуйте ввод через int, обработайте ValueError. Пусть 0 означает выход, 1..3 — попытку, остальные числа — неверный диапазон.</p><p>После запуска на каждый вопрос Guess 1-3 (0 to stop): вводите одно число и Enter. После ошибки появится новый вопрос; верный ответ завершит цикл через break. <code>0</code> тоже завершает игру. С фиксированным seed этого примера введите 2, затем на следующий вопрос 1, чтобы увидеть оба результата.</p></section><section class=\"problem-area\"><h3 class=\"problem-title\">По желанию · Повторяемая игра с числами</h3><ol><li>Импортируйте random, задайте seed(1), затем один раз сохраните randint(1,3) в secret.</li><li>В while True читайте целое с Guess 1-3 (0 to stop): . При ошибке преобразования выведите Integers only и continue.</li><li>При 0 выведите Stopped и break. Вне 1..3 выведите Choose 1, 2 or 3 и continue.</li><li>Если число равно secret, выведите Correct и break. Иначе выведите Try again.</li></ol></section>"
    },
    "answer": {
      "ko": "import random\n# Fixed seed only for a repeatable lesson.\nrandom.seed(1)\nsecret = random.randint(1, 3)\nwhile True:\n    try:\n        guess = int(input(\"Guess 1-3 (0 to stop): \"))\n    except ValueError:\n        print(\"Integers only\")\n        continue\n    if guess == 0:\n        print(\"Stopped\")\n        break\n    if guess < 1 or guess > 3:\n        print(\"Choose 1, 2 or 3\")\n        continue\n    if guess == secret:\n        print(\"Correct\")\n        break\n    print(\"Try again\")",
      "en": "import random\n# Fixed seed only for a repeatable lesson.\nrandom.seed(1)\nsecret = random.randint(1, 3)\nwhile True:\n    try:\n        guess = int(input(\"Guess 1-3 (0 to stop): \"))\n    except ValueError:\n        print(\"Integers only\")\n        continue\n    if guess == 0:\n        print(\"Stopped\")\n        break\n    if guess < 1 or guess > 3:\n        print(\"Choose 1, 2 or 3\")\n        continue\n    if guess == secret:\n        print(\"Correct\")\n        break\n    print(\"Try again\")",
      "ru": "import random\n# Fixed seed only for a repeatable lesson.\nrandom.seed(1)\nsecret = random.randint(1, 3)\nwhile True:\n    try:\n        guess = int(input(\"Guess 1-3 (0 to stop): \"))\n    except ValueError:\n        print(\"Integers only\")\n        continue\n    if guess == 0:\n        print(\"Stopped\")\n        break\n    if guess < 1 or guess > 3:\n        print(\"Choose 1, 2 or 3\")\n        continue\n    if guess == secret:\n        print(\"Correct\")\n        break\n    print(\"Try again\")"
    },
    "initialCode": {
      "ko": "import random\nnumber = random.randint(1, 3)\nprint(1 <= number <= 3)",
      "en": "import random\nnumber = random.randint(1, 3)\nprint(1 <= number <= 3)",
      "ru": "import random\nnumber = random.randint(1, 3)\nprint(1 <= number <= 3)"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "True",
      "en": "True",
      "ru": "True"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "오답 다음 정답",
          "en": "Wrong, then correct",
          "ru": "Неверно, затем верно"
        },
        "input": {
          "ko": "2\n1",
          "en": "2\n1",
          "ru": "2\n1"
        },
        "output": {
          "ko": "Guess 1-3 (0 to stop): 2\nTry again\nGuess 1-3 (0 to stop): 1\nCorrect",
          "en": "Guess 1-3 (0 to stop): 2\nTry again\nGuess 1-3 (0 to stop): 1\nCorrect",
          "ru": "Guess 1-3 (0 to stop): 2\nTry again\nGuess 1-3 (0 to stop): 1\nCorrect"
        }
      },
      {
        "name": {
          "ko": "문자·범위 오류 뒤 정답",
          "en": "Text and range errors, then success",
          "ru": "Ошибки ввода, затем успех"
        },
        "input": {
          "ko": "abc\n4\n1",
          "en": "abc\n4\n1",
          "ru": "abc\n4\n1"
        },
        "output": {
          "ko": "Guess 1-3 (0 to stop): abc\nIntegers only\nGuess 1-3 (0 to stop): 4\nChoose 1, 2 or 3\nGuess 1-3 (0 to stop): 1\nCorrect",
          "en": "Guess 1-3 (0 to stop): abc\nIntegers only\nGuess 1-3 (0 to stop): 4\nChoose 1, 2 or 3\nGuess 1-3 (0 to stop): 1\nCorrect",
          "ru": "Guess 1-3 (0 to stop): abc\nIntegers only\nGuess 1-3 (0 to stop): 4\nChoose 1, 2 or 3\nGuess 1-3 (0 to stop): 1\nCorrect"
        }
      },
      {
        "name": {
          "ko": "중간 종료",
          "en": "Stop the game",
          "ru": "Остановить игру"
        },
        "input": {
          "ko": "0",
          "en": "0",
          "ru": "0"
        },
        "output": {
          "ko": "Guess 1-3 (0 to stop): 0\nStopped",
          "en": "Guess 1-3 (0 to stop): 0\nStopped",
          "ru": "Guess 1-3 (0 to stop): 0\nStopped"
        }
      }
    ],
    "needsInput": true,
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\nimport random\nrandom.seed(1)\nsecret = random.randint(1, 3)\n# TODO: while True: 안에서 추측을 입력받으세요. 정수 변환 오류는 try-except로 처리하세요.\n# TODO: 0은 종료, 1~3 밖은 다시 입력, 정답은 성공 후 종료, 오답은 다시 입력하게 만드세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\nimport random\nrandom.seed(1)\nsecret = random.randint(1, 3)\n# TODO: Read guesses inside while True:. Handle integer conversion errors with try-except.\n# TODO: Stop for 0; ask again for numbers outside 1–3; stop on a correct guess; ask again on a wrong guess.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\nimport random\nrandom.seed(1)\nsecret = random.randint(1, 3)\n# TODO: Принимайте попытки внутри while True:. Обрабатывайте ошибки преобразования в целое число через try-except.\n# TODO: При 0 завершайте; вне 1–3 просите ввод снова; при верном ответе завершайте, при неверном просите снова.\n"
    },
    "starterHint": {
      "ko": "선택 확장입니다. 정답을 한 번 정하는 부분만 준비했습니다. 아직 질문이나 결과가 나오지 않습니다. 반복문을 완성한 뒤 2 → Enter → 1 → Enter로 확인하세요. 0으로 끝내는 길도 만드세요.",
      "en": "This is optional. Only choosing the secret once is ready; there is no prompt or output yet. Complete the loop, then test 2, Enter, 1, Enter. Include a way to stop with 0.",
      "ru": "Это дополнительное задание. Готов только однократный выбор числа; вопроса и вывода пока нет. Допишите цикл и проверьте: 2, Enter, 1, Enter. Предусмотрите завершение вводом 0."
    }
  },
  {
    "id": "lesson-26",
    "menu": {
      "ko": "선택 확장 · 종합 프로젝트",
      "en": "Optional · Final project",
      "ru": "По желанию · Итоговый проект"
    },
    "title": {
      "ko": "선택 확장: 최고 성적 학생 찾기",
      "en": "Optional extension: find the highest score",
      "ru": "По желанию: поиск лучшего результата"
    },
    "theory": {
      "ko": "<p><b>선택 수업입니다. 12주차 함수까지 복습한 뒤 필요할 때 진행하세요.</b></p><section class=\"lesson-section\"><h3>목표: 여러 도구를 연결하기</h3><p>try-except·리스트·for·while·함수·딕셔너리를 공부한 뒤 도전하세요. 이름과 점수를 반복해서 받아 학생 목록을 만들고, 가장 높은 점수를 찾습니다. 데이터가 없을 때와 잘못 입력했을 때도 안내해야 합니다.</p><p><b>세 단계로 나누세요.</b> 먼저 아래 첫 예제를 실행해 Mina와 80을 확인하세요. 다음 <b>최고점 찾기</b> 예제를 실행해 Mina 90을 확인하세요. 마지막으로 이름·점수 입력과 잘못된 점수·빈 목록 안내를 연결합니다. 첫 단계만 하고 다음에 이어가도 됩니다.</p></section><section class=\"lesson-section\"><h3>리스트 안에 학생 딕셔너리 넣기</h3><p>학생 한 명은 <code>{\"name\": \"Mina\", \"score\": 90}</code>처럼 저장합니다. 여러 학생은 리스트에 담습니다. <code>students[0]</code>은 첫 학생의 딕셔너리, <code>students[0][\"score\"]</code>는 그 학생의 점수입니다.</p><pre><code>students = [{&quot;name&quot;: &quot;Mina&quot;, &quot;score&quot;: 90},\n            {&quot;name&quot;: &quot;Alex&quot;, &quot;score&quot;: 80}]\nprint(students[0][&quot;name&quot;])\nprint(students[1][&quot;score&quot;])</code></pre><p>결과는 Mina와 80입니다. 빈 리스트에서 [0]을 읽으면 IndexError입니다. 먼저 len(students)를 확인하세요.</p></section><section class=\"lesson-section\"><h3>최고점 찾기: 임시 1등을 바꾸기</h3><p>첫 학생을 임시 1등 best로 정합니다. for로 각 학생을 보며 더 높은 점수일 때만 best를 바꿉니다. 마지막 best가 최고점 학생입니다. <code>&gt;</code>를 쓰므로 점수가 같으면 먼저 입력한 학생을 유지합니다.</p><pre><code>def find_best(students):\n    best = students[0]\n    for student in students:\n        if student[&quot;score&quot;] &gt; best[&quot;score&quot;]:\n            best = student\n    return best\n\ndata = [{&quot;name&quot;: &quot;Mina&quot;, &quot;score&quot;: 90},\n        {&quot;name&quot;: &quot;Alex&quot;, &quot;score&quot;: 80}]\nwinner = find_best(data)\nprint(winner[&quot;name&quot;], winner[&quot;score&quot;])</code></pre><p>결과는 Mina 90입니다. 함수는 딕셔너리도 return할 수 있습니다. 이 함수는 학생이 최소 한 명 있을 때 부르도록 만들었습니다. 빈 목록 처리는 호출하는 부분에서 합니다. return은 for보다 바깥에 있어 모든 학생을 확인한 뒤 돌려줍니다.</p></section><section class=\"lesson-section\"><h3>입력부터 검증까지 순서 잡기</h3><ol><li>이름을 먼저 읽고 exit인지 확인합니다. exit이면 점수를 묻지 않고 break합니다.</li><li>점수는 int로 바꿉니다. ValueError이면 안내하고 이번 학생은 저장하지 않습니다. 다음 입력은 새 학생 이름입니다.</li><li>0~100인지 검사합니다. 범위 밖이면 저장하지 않고 다음 이름으로 갑니다.</li><li>유효하면 이름·점수 딕셔너리를 students.append(...)로 넣습니다.</li><li>입력이 끝난 뒤 빈 목록이면 안내합니다. 아니면 find_best를 부르고 결과를 출력합니다.</li></ol><p><b>다시 입력하는 위치 확인:</b> 이름 Mina → 점수 oops를 입력하면 이 학생은 저장하지 않습니다. 다음 질문은 Name입니다. Mina → 90을 다시 입력한 뒤, 다음 Name 질문에 exit를 입력하면 Best: Mina 90이 됩니다. 24번 딕셔너리 미션처럼 점수만 다시 묻는 프로그램과는 흐름이 다릅니다.</p></section><section class=\"lesson-section\"><h3>자주 하는 실수</h3><ul><li>질문마다 답 하나를 입력하고 Enter를 누르세요. 다시 입력하는 순서는 위의 Mina/oops 사례를 참고하세요.</li><li>점수 \"90\"을 문자열로 비교하지 마세요. int로 바꾼 90을 저장합니다.</li><li>딕셔너리 키 name, score의 따옴표와 철자를 일정하게 씁니다.</li><li>best를 for 안에서 매번 첫 학생으로 초기화하지 마세요. 반복문 앞에 한 번만 둡니다.</li><li>학생이 없으면 students[0]을 읽지 않습니다. 동점 규칙을 &gt;와 &gt;= 차이로 확인하세요.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">선택 도전 · 최고점 분석기 완성하기</h3><ol><li>위 설명대로 find_best(students) 함수를 정의하세요. return은 for 바깥에 둡니다.</li><li>students=[]를 만들고 while True로 Name (exit to stop): 를 입력받으세요. exit이면 끝냅니다.</li><li>Score: 로 정수를 받으세요. 변환 실패면 Integers only, 범위 밖이면 Score must be 0..100을 출력하고 해당 학생을 저장하지 마세요.</li><li>유효한 학생 딕셔너리만 append하세요. 종료 후 빈 목록이면 No students를 출력하세요.</li><li>학생이 있으면 함수를 호출하고 Best: 뒤에 이름과 점수를 출력하세요. 동점에서는 먼저 입력한 학생을 선택하세요.</li></ol></section>",
      "en": "<p><b>This lesson is optional. Review functions from Week 12 before continuing.</b></p><section class=\"lesson-section\"><h3>Goal: connect the tools</h3><p>Study try-except, lists, for, while, functions and dictionaries first. Collect names and scores into a student list, then find the highest score. Also handle no data and bad input.</p><p><b>Use three stages.</b> First run the first example below and check for Mina and 80. Then run the <b>Find the maximum</b> example and check for Mina 90. Finally connect name/score input, invalid-score messages and the empty-list message. You can stop after the first stage and continue later.</p></section><section class=\"lesson-section\"><h3>Put student dictionaries in a list</h3><p>One student is <code>{\"name\": \"Mina\", \"score\": 90}</code>. Store several student dictionaries in a list. <code>students[0]</code> is the first dictionary; <code>students[0][\"score\"]</code> is that student’s score.</p><pre><code>students = [{&quot;name&quot;: &quot;Mina&quot;, &quot;score&quot;: 90},\n            {&quot;name&quot;: &quot;Alex&quot;, &quot;score&quot;: 80}]\nprint(students[0][&quot;name&quot;])\nprint(students[1][&quot;score&quot;])</code></pre><p>The output is Mina and 80. Reading [0] from an empty list raises IndexError. Check len(students) first.</p></section><section class=\"lesson-section\"><h3>Find the maximum: replace the current best</h3><p>Start with the first student as the current best. Use for to check each student. Replace best only for a higher score. The final best has the highest score. Using <code>&gt;</code> keeps the first entered student when scores tie.</p><pre><code>def find_best(students):\n    best = students[0]\n    for student in students:\n        if student[&quot;score&quot;] &gt; best[&quot;score&quot;]:\n            best = student\n    return best\n\ndata = [{&quot;name&quot;: &quot;Mina&quot;, &quot;score&quot;: 90},\n        {&quot;name&quot;: &quot;Alex&quot;, &quot;score&quot;: 80}]\nwinner = find_best(data)\nprint(winner[&quot;name&quot;], winner[&quot;score&quot;])</code></pre><p>The result is Mina 90. A function can return a dictionary too. This function expects at least one student; the caller will handle an empty list. return is outside for so every student is checked first.</p></section><section class=\"lesson-section\"><h3>Plan input and validation</h3><ol><li>Read the name and check for exit first. If it matches, break without asking for a score.</li><li>Convert the score with int. On ValueError, show a message and do not store that student. The next input is a new name.</li><li>Check the range 0..100. If outside it, do not store the student; move to the next name.</li><li>For a valid score, append a name/score dictionary to students.</li><li>After input ends, handle an empty list. Otherwise call find_best and print the result.</li></ol><p><b>Check where the retry starts:</b> name Mina → score oops does not save that student. The next question is Name. Enter Mina → 90, then exit at the next Name question to get Best: Mina 90. Unlike the dictionary mission in lesson 24, this program restarts from the name rather than asking only for the score again.</p></section><section class=\"lesson-section\"><h3>Common mistakes</h3><ul><li>Type one answer and press Enter for each question. For the retry order, see the Mina/oops example above.</li><li>Do not compare scores as text such as \"90\". Store the integer 90 from int.</li><li>Keep quotes and spell the keys name and score consistently.</li><li>Do not reset best to the first student inside every for turn. Initialize it once before for.</li><li>Do not read students[0] when no students exist. Compare &gt; with &gt;= to understand the tie rule.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">Optional challenge · Complete the highest-score finder</h3><ol><li>Define find_best(students) as explained above. Put return outside for.</li><li>Create students=[] and use while True to read Name (exit to stop): . Stop for exit.</li><li>Read an integer with Score: . On conversion failure print Integers only; outside 0..100 print Score must be 0..100. Do not store those students.</li><li>Append only valid student dictionaries. After exit, print No students if the list is empty.</li><li>Otherwise call the function and print Best: followed by the name and score. Keep the first entered student on a tie.</li></ol></section>",
      "ru": "<p><b>Дополнительный урок по желанию. Переходите к нему после повторения функций недели 12.</b></p><section class=\"lesson-section\"><h3>Цель: соединить изученные инструменты</h3><p>Сначала изучите try-except, списки, for, while, функции и словари. Соберите имена и оценки в список студентов, затем найдите лучший результат. Обработайте также отсутствие данных и неверный ввод.</p><p><b>Разделите работу на три этапа.</b> Сначала запустите первый пример ниже и проверьте Mina и 80. Затем выполните пример <b>поиска максимума</b> и проверьте Mina 90. В конце добавьте ввод имён и оценок, сообщения о неверной оценке и пустом списке. Можно выполнить первый этап и продолжить позже.</p></section><section class=\"lesson-section\"><h3>Словари студентов внутри списка</h3><p>Один студент: <code>{\"name\": \"Mina\", \"score\": 90}</code>. Несколько словарей храните в списке. <code>students[0]</code> — первый словарь, <code>students[0][\"score\"]</code> — оценка первого студента.</p><pre><code>students = [{&quot;name&quot;: &quot;Mina&quot;, &quot;score&quot;: 90},\n            {&quot;name&quot;: &quot;Alex&quot;, &quot;score&quot;: 80}]\nprint(students[0][&quot;name&quot;])\nprint(students[1][&quot;score&quot;])</code></pre><p>Вывод: Mina и 80. Чтение [0] из пустого списка вызывает IndexError. Сначала проверьте len(students).</p></section><section class=\"lesson-section\"><h3>Поиск максимума: менять текущего лидера</h3><p>Сначала назначьте первого студента текущим best. Проверьте всех через for. Меняйте best только при более высокой оценке. В конце best содержит лучший результат. Знак <code>&gt;</code> сохраняет первого введённого студента при равенстве.</p><pre><code>def find_best(students):\n    best = students[0]\n    for student in students:\n        if student[&quot;score&quot;] &gt; best[&quot;score&quot;]:\n            best = student\n    return best\n\ndata = [{&quot;name&quot;: &quot;Mina&quot;, &quot;score&quot;: 90},\n        {&quot;name&quot;: &quot;Alex&quot;, &quot;score&quot;: 80}]\nwinner = find_best(data)\nprint(winner[&quot;name&quot;], winner[&quot;score&quot;])</code></pre><p>Результат — Mina 90. Функция может вернуть словарь. Ей нужен хотя бы один студент; пустой список обработаем перед вызовом. return находится вне for, чтобы сначала проверить всех студентов.</p></section><section class=\"lesson-section\"><h3>План ввода и проверки</h3><ol><li>Сначала прочитайте имя и проверьте exit. Если оно введено, выполните break, не спрашивая оценку.</li><li>Преобразуйте оценку через int. При ValueError покажите сообщение и не сохраняйте студента. Следующий ввод — новое имя.</li><li>Проверьте диапазон 0..100. Вне диапазона студент не сохраняется; переходите к новому имени.</li><li>При верной оценке добавьте словарь name/score через students.append(...).</li><li>После ввода обработайте пустой список. Иначе вызовите find_best и выведите результат.</li></ol><p><b>Откуда начинается повтор:</b> имя Mina → оценка oops не сохраняет студента. Следующий вопрос — Name. Введите Mina → 90, затем exit на следующий вопрос Name: получится Best: Mina 90. В отличие от задания со словарём в уроке 24, здесь повтор начинается с имени, а не только с оценки.</p></section><section class=\"lesson-section\"><h3>Частые ошибки</h3><ul><li>На каждый вопрос вводите один ответ и нажимайте Enter. Порядок повторного ввода показан выше в примере Mina/oops.</li><li>Не сравнивайте оценки как текст \"90\". Сохраняйте целое 90 после int.</li><li>Используйте кавычки и одинаковое написание ключей name и score.</li><li>Не назначайте первого студента в best на каждом проходе for. Инициализируйте best один раз до for.</li><li>Не читайте students[0] при пустом списке. Сравните &gt; и &gt;=, чтобы понять правило равных оценок.</li></ul></section><section class=\"problem-area\"><h3 class=\"problem-title\">По желанию · Завершите поиск лучшей оценки</h3><ol><li>Определите find_best(students), как объяснено выше. Поместите return вне for.</li><li>Создайте students=[] и читайте Name (exit to stop): в while True. При exit завершите ввод.</li><li>Читайте целое с Score: . При ошибке преобразования выводите Integers only, вне 0..100 — Score must be 0..100. Этих студентов не сохраняйте.</li><li>Добавляйте только верные словари. После exit для пустого списка выведите No students.</li><li>Иначе вызовите функцию и выведите Best:, имя и оценку. При равенстве сохраните первого введённого студента.</li></ol></section>"
    },
    "answer": {
      "ko": "def find_best(students):\n    best = students[0]\n    for student in students:\n        if student[\"score\"] > best[\"score\"]:\n            best = student\n    return best\n\nstudents = []\nwhile True:\n    name = input(\"Name (exit to stop): \")\n    if name == \"exit\":\n        break\n    try:\n        score = int(input(\"Score: \"))\n    except ValueError:\n        print(\"Integers only\")\n        continue\n    if score < 0 or score > 100:\n        print(\"Score must be 0..100\")\n        continue\n    students.append({\"name\": name, \"score\": score})\n\n# Read students[0] only when there is a student.\nif len(students) == 0:\n    print(\"No students\")\nelse:\n    winner = find_best(students)\n    print(\"Best:\", winner[\"name\"], winner[\"score\"])",
      "en": "def find_best(students):\n    best = students[0]\n    for student in students:\n        if student[\"score\"] > best[\"score\"]:\n            best = student\n    return best\n\nstudents = []\nwhile True:\n    name = input(\"Name (exit to stop): \")\n    if name == \"exit\":\n        break\n    try:\n        score = int(input(\"Score: \"))\n    except ValueError:\n        print(\"Integers only\")\n        continue\n    if score < 0 or score > 100:\n        print(\"Score must be 0..100\")\n        continue\n    students.append({\"name\": name, \"score\": score})\n\n# Read students[0] only when there is a student.\nif len(students) == 0:\n    print(\"No students\")\nelse:\n    winner = find_best(students)\n    print(\"Best:\", winner[\"name\"], winner[\"score\"])",
      "ru": "def find_best(students):\n    best = students[0]\n    for student in students:\n        if student[\"score\"] > best[\"score\"]:\n            best = student\n    return best\n\nstudents = []\nwhile True:\n    name = input(\"Name (exit to stop): \")\n    if name == \"exit\":\n        break\n    try:\n        score = int(input(\"Score: \"))\n    except ValueError:\n        print(\"Integers only\")\n        continue\n    if score < 0 or score > 100:\n        print(\"Score must be 0..100\")\n        continue\n    students.append({\"name\": name, \"score\": score})\n\n# Read students[0] only when there is a student.\nif len(students) == 0:\n    print(\"No students\")\nelse:\n    winner = find_best(students)\n    print(\"Best:\", winner[\"name\"], winner[\"score\"])"
    },
    "initialCode": {
      "ko": "students = [{\"name\": \"Mina\", \"score\": 90}, {\"name\": \"Alex\", \"score\": 80}]\nbest = students[0]\nfor student in students:\n    if student[\"score\"] > best[\"score\"]:\n        best = student\nprint(best[\"name\"], best[\"score\"])",
      "en": "students = [{\"name\": \"Mina\", \"score\": 90}, {\"name\": \"Alex\", \"score\": 80}]\nbest = students[0]\nfor student in students:\n    if student[\"score\"] > best[\"score\"]:\n        best = student\nprint(best[\"name\"], best[\"score\"])",
      "ru": "students = [{\"name\": \"Mina\", \"score\": 90}, {\"name\": \"Alex\", \"score\": 80}]\nbest = students[0]\nfor student in students:\n    if student[\"score\"] > best[\"score\"]:\n        best = student\nprint(best[\"name\"], best[\"score\"])"
    },
    "sampleInput": {
      "ko": "",
      "en": "",
      "ru": ""
    },
    "expectedOutput": {
      "ko": "Mina 90",
      "en": "Mina 90",
      "ru": "Mina 90"
    },
    "practiceTests": [
      {
        "name": {
          "ko": "두 학생 중 최고점",
          "en": "Best of two students",
          "ru": "Лучший из двух студентов"
        },
        "input": {
          "ko": "Mina\n90\nAlex\n80\nexit",
          "en": "Mina\n90\nAlex\n80\nexit",
          "ru": "Mina\n90\nAlex\n80\nexit"
        },
        "output": {
          "ko": "Name (exit to stop): Mina\nScore: 90\nName (exit to stop): Alex\nScore: 80\nName (exit to stop): exit\nBest: Mina 90",
          "en": "Name (exit to stop): Mina\nScore: 90\nName (exit to stop): Alex\nScore: 80\nName (exit to stop): exit\nBest: Mina 90",
          "ru": "Name (exit to stop): Mina\nScore: 90\nName (exit to stop): Alex\nScore: 80\nName (exit to stop): exit\nBest: Mina 90"
        }
      },
      {
        "name": {
          "ko": "입력 없이 종료",
          "en": "Exit with no students",
          "ru": "Выход без студентов"
        },
        "input": {
          "ko": "exit",
          "en": "exit",
          "ru": "exit"
        },
        "output": {
          "ko": "Name (exit to stop): exit\nNo students",
          "en": "Name (exit to stop): exit\nNo students",
          "ru": "Name (exit to stop): exit\nNo students"
        }
      },
      {
        "name": {
          "ko": "동점이면 먼저 입력한 학생",
          "en": "A tie keeps the first student",
          "ru": "При равенстве остаётся первый"
        },
        "input": {
          "ko": "Mina\n0\nAlex\n0\nexit",
          "en": "Mina\n0\nAlex\n0\nexit",
          "ru": "Mina\n0\nAlex\n0\nexit"
        },
        "output": {
          "ko": "Name (exit to stop): Mina\nScore: 0\nName (exit to stop): Alex\nScore: 0\nName (exit to stop): exit\nBest: Mina 0",
          "en": "Name (exit to stop): Mina\nScore: 0\nName (exit to stop): Alex\nScore: 0\nName (exit to stop): exit\nBest: Mina 0",
          "ru": "Name (exit to stop): Mina\nScore: 0\nName (exit to stop): Alex\nScore: 0\nName (exit to stop): exit\nBest: Mina 0"
        }
      },
      {
        "name": {
          "ko": "잘못된 점수 다음 새 학생",
          "en": "A new student after a bad score",
          "ru": "Новый студент после неверной оценки"
        },
        "input": {
          "ko": "Bad\nabc\nOut\n101\nMina\n100\nexit",
          "en": "Bad\nabc\nOut\n101\nMina\n100\nexit",
          "ru": "Bad\nabc\nOut\n101\nMina\n100\nexit"
        },
        "output": {
          "ko": "Name (exit to stop): Bad\nScore: abc\nIntegers only\nName (exit to stop): Out\nScore: 101\nScore must be 0..100\nName (exit to stop): Mina\nScore: 100\nName (exit to stop): exit\nBest: Mina 100",
          "en": "Name (exit to stop): Bad\nScore: abc\nIntegers only\nName (exit to stop): Out\nScore: 101\nScore must be 0..100\nName (exit to stop): Mina\nScore: 100\nName (exit to stop): exit\nBest: Mina 100",
          "ru": "Name (exit to stop): Bad\nScore: abc\nIntegers only\nName (exit to stop): Out\nScore: 101\nScore must be 0..100\nName (exit to stop): Mina\nScore: 100\nName (exit to stop): exit\nBest: Mina 100"
        }
      }
    ],
    "needsInput": true,
    "missionStarter": {
      "ko": "# 미션 시작 코드입니다. 아직 완성된 답안이 아닙니다.\n# TODO는 아래 지시에 따라 직접 완성할 부분입니다.\n\n# TODO: 이 위치에 find_best(students)를 정의하세요. 학생이 있을 때만 호출합니다.\n\nstudents = []\n# TODO: 이름을 읽고 exit이면 종료하세요. 그 밖에는 점수를 읽고 검사하세요.\n# TODO: 유효한 학생만 students에 추가하세요. 잘못된 점수 뒤에는 새 이름부터 받습니다.\n# TODO: 끝난 뒤 빈 목록이면 No students, 아니면 find_best를 호출해 Best:와 결과를 출력하세요.\n",
      "en": "# Mission starter: this is not a finished answer.\n# TODO marks work for you to complete using the instructions below.\n\n# TODO: Define find_best(students) here. Call it only when there is at least one student.\n\nstudents = []\n# TODO: Read a name and stop for exit. Otherwise read and validate the score.\n# TODO: Add only valid students to students. After an invalid score, ask for a new name.\n# TODO: At the end, print No students for an empty list; otherwise call find_best and print Best: with the result.\n",
      "ru": "# Начало задания: это ещё не готовое решение.\n# TODO отмечает то, что нужно дописать по инструкции ниже.\n\n# TODO: Здесь определите find_best(students). Вызывайте функцию только при наличии хотя бы одного ученика.\n\nstudents = []\n# TODO: Прочитайте имя и завершите при exit. Иначе прочитайте и проверьте балл.\n# TODO: Добавляйте в students только допустимые записи. После неверного балла спрашивайте новое имя.\n# TODO: В конце для пустого списка выведите No students; иначе вызовите find_best и выведите Best: с результатом.\n"
    },
    "starterHint": {
      "ko": "선택 프로젝트입니다. students라는 빈 목록과 작업 순서만 준비했습니다. 함수 → 입력 반복 → 종료 후 결과 순서로 만드세요. 학생이 없을 때 students[0]을 읽지 않습니다.",
      "en": "This is an optional project. The empty students list and work order are ready. Build the function, input loop, then final result. Never read students[0] when the list is empty.",
      "ru": "Это дополнительный проект. Готовы пустой students и порядок работы. Создайте функцию, цикл ввода и итоговый вывод. Не читайте students[0], когда список пуст."
    }
  }
];
