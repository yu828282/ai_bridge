const lessons = [
{
        menu: { ko: '2: 입력/출력', en: '2: Input/Output', ru: '2: Ввод/Вывод' },
        title: { 
            ko: '1. 컴퓨터의 입과 귀: 소통하기', 
            en: "1. The Computer's Mouth and Ears: Communication", 
            ru: '1. Рот и уши компьютера: Общение' 
        },
        theory: {
            ko: `
                <p>컴퓨터와 대화하려면 <b>입</b>과 <b>귀</b>가 필요합니다.</p>
                <ul>
                    <li><b>print():</b> 컴퓨터의 <b>입</b>입니다. 우리가 만든 결과를 화면에 보여줍니다.</li>
                    <li><b>input():</b> 컴퓨터의 <b>귀</b>입니다. 사용자가 키보드로 입력하는 내용을 듣고 기다립니다.</li>
                </ul>
                <p><i>비유: print()는 전광판에 글자를 띄우는 것이고, input()은 빈 칸에 글자를 써달라고 요청하는 것입니다.</i></p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    사용자에게 "이름이 무엇인가요?"라고 묻고, 사용자의 답변을 기다리는 코드를 작성하세요.
                </div>
            `,
            en: `
                <p>To talk with a computer, you need a <b>mouth</b> and <b>ears</b>.</p>
                <ul>
                    <li><b>print():</b> The computer's <b>mouth</b>. It displays our results on the screen.</li>
                    <li><b>input():</b> The computer's <b>ears</b>. It listens and waits for what the user types on the keyboard.</li>
                </ul>
                <p><i>Analogy: print() is like showing a message on a billboard, while input() is like asking someone to fill in a blank space.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Ask the user "What is your name?" and write the code to wait for the user's answer.
                </div>
            `,
            ru: `
                <p>Для общения с компьютером нужны <b>рот</b> и <b>уши</b>.</p>
                <ul>
                    <li><b>print():</b> Это <b>рот</b> компьютера. Он показывает результаты на экране.</li>
                    <li><b>input():</b> Это <b>уши</b> компьютера. Он слушает и ждет, что пользователь введет на клавиатуре.</li>
                </ul>
                <p><i>Аналогия: print() — это вывод сообщения на табло, а input() — это просьба заполнить пустую строку.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Спросите пользователя "Как тебя зовут?" и напишите код, который будет ждать ответа.
                </div>
            `
        },
        answer: {
            ko: 'print("이름이 무엇인가요?")\ninput()',
            en: 'print("What is your name?")\ninput()',
            ru: 'print("Как тебя зовут?")\ninput()'
        }
    },

    // 2. 변수 (Variables)
    {
        menu: { ko: '2: 변수', en: '2: Variables', ru: '2: Переменные' },
        title: { 
            ko: '2. 컴퓨터의 뇌: 변수(Variable)', 
            en: "2. The Computer's Brain: Variables", 
            ru: '2. Мозг компьютера: переменные' 
        },
        theory: {
            ko: `
                <p>컴퓨터가 들은 내용을 기억하려면 <b>뇌(저장 공간)</b>가 필요합니다. 이것을 <b>변수</b>라고 합니다.</p>
                <ul>
                    <li><b>저장하기:</b> <code>name = input()</code> 처럼 쓰면, 입력받은 내용을 <b>name</b>이라는 이름표가 붙은 상자에 담습니다.</li>
                    <li><b>꺼내쓰기:</b> 상자 이름을 부르면 그 안에 든 내용을 가져옵니다.</li>
                </ul>
                <p><b>⚠️ 주의:</b> <code>=</code> 기호는 '같다'가 아니라 <b>'오른쪽 내용을 왼쪽에 집어넣는다'</b>는 뜻입니다.</p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    사용자의 입력을 <b>name</b> 변수에 저장하고, "반가워요, [이름]"이 출력되도록 만드세요.
                </div>
            `,
            en: `
                <p>To remember what it heard, the computer needs a <b>brain (storage space)</b>. We call this a <b>Variable</b>.</p>
                <ul>
                    <li><b>Saving:</b> <code>name = input()</code> puts the input into a box labeled <b>name</b>.</li>
                    <li><b>Using:</b> When you call the box's name, the computer retrieves the contents inside.</li>
                </ul>
                <p><b>⚠️ Note:</b> The <code>=</code> sign doesn't mean 'equal'. It means <b>'put the content on the right into the left side'</b>.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Save the user's input in a variable called <b>name</b> and print "Nice to meet you, [name]".
                </div>
            `,
            ru: `
                <p>Чтобы запомнить услышанное, компьютеру нужен <b>мозг (место для хранения)</b>. Это называется <b>Переменная</b>.</p>
                <ul>
                    <li><b>Сохранение:</b> Команда <code>name = input()</code> кладет введенные данные в коробку с надписью <b>name</b>.</li>
                    <li><b>Использование:</b> Когда вы называете имя коробки, компьютер достает её содержимое.</li>
                </ul>
                <p><b>⚠️ Внимание:</b> Знак <code>=</code> означает не «равно», а <b>«положить то, что справа, в то, что слева»</b>.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Сохраните ввод пользователя в переменную <b>name</b> и выведите "Привет, [имя]".
                </div>
            `
        },
        answer: {
            ko: 'print("이름이 무엇인가요?")\nname = input()\nprint("반가워요, " + name)',
            en: 'print("What is your name?")\nname = input()\nprint("Nice to meet you, " + name)',
            ru: 'print("Как тебя зовут?")\nname = input()\nprint("Привет, " + name)'
        }
    },
    {
        menu: { ko: '3: 문자열 +', en: '3: String +', ru: '3: Строки +' },
        title: { 
            ko: '3. 문자열 강력 본드: + 연결', 
            en: '3. String Glue: Connecting with +', 
            ru: '3. Клей для строк: Соединение через +' 
        },
        theory: {
            ko: `
                <p><b>+</b> 기호는 두 문자열을 하나의 긴 기차처럼 이어 붙입니다.</p>
                <ul>
                    <li><b>주의:</b> <b>+</b>는 아주 강력한 '본드'와 같아서 공백을 자동으로 넣어주지 않습니다.</li>
                    <li><b>해결:</b> <code>"저도 "</code>처럼 따옴표 안에 미리 공백을 넣어야 글자가 붙지 않습니다.</li>
                </ul>
                <p><i>예: "안녕" + "파이썬" → 안녕파이썬 (공백 없음)</i></p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    좋아하는 음식을 입력받고, <b>+</b>를 사용해서 "저도 [음식] 좋아해요."를 공백이 올바르게 출력되도록 작성하세요.
                </div>
            `,
            en: `
                <p>The <b>+</b> symbol connects two strings like a long train.</p>
                <ul>
                    <li><b>Note:</b> <b>+</b> acts like strong glue and does not add spaces automatically.</li>
                    <li><b>Solution:</b> You must add a space inside the quotes, like <code>"I like "</code>, to keep words separated.</li>
                </ul>
                <p><i>Example: "Hello" + "Python" → HelloPython (No space)</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Receive your favorite food as input and use <b>+</b> to print "I like [food] too." with correct spacing.
                </div>
            `,
            ru: `
                <p>Символ <b>+</b> соединяет две строки, как вагоны поезда.</p>
                <ul>
                    <li><b>Внимание:</b> <b>+</b> работает как клей и не добавляет пробелы автоматически.</li>
                    <li><b>Решение:</b> Вы должны сами добавить пробел внутри кавычек, например: <code>"Я тоже люблю "</code>.</li>
                </ul>
                <p><i>Пример: "Привет" + "Python" → ПриветPython (Без пробела)</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Получите название любимой еды через ввод и используйте <b>+</b>, чтобы вывести: "Я тоже люблю [еда]" с правильными пробелами.
                </div>
            `
        },
        answer: {
            ko: 'food = input("좋아하는 음식: ")\nprint("저도 " + food + " 좋아해요.")',
            en: 'food = input("Favorite food: ")\nprint("I like " + food + " too.")',
            ru: 'food = input("Любимая еда: ")\nprint("Я тоже люблю " + food + ".")'
        }
    },

    // 4. 콤마 연결 (,)
    {
        menu: { ko: '3: 콤마 연결', en: '3: String with Comma', ru: '3: Строки через запятую' },
        title: { 
            ko: '4. 매너 있는 연결: 콤마(,) 사용하기', 
            en: '4. Polite Connection: Using Commas (,)', 
            ru: '4. Вежливое соединение: Использование запятой (,)' 
        },
        theory: {
            ko: `
                <p><b>print()</b> 안에서 콤마(<b>,</b>)를 사용하면 파이썬이 자동으로 한 칸의 공백을 넣어줍니다.</p>
                <ul>
                    <li><b>특징:</b> 문자열끼리 직접 붙지 않고 매너 있게 거리를 둡니다.</li>
                    <li><b>장점:</b> 여러 데이터를 나열할 때 <code>+</code>보다 훨씬 편리합니다.</li>
                </ul>
                <p><i>예: print("안녕", "파이썬") → 안녕 파이썬 (자동 공백 생성)</i></p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    좋아하는 영화를 물어보고, 콤마를 사용하여 "아하! [영화이름] 를 보셨군요."를 출력하세요.
                </div>
            `,
            en: `
                <p>If you use a comma (<b>,</b>) inside <b>print()</b>, Python automatically adds a single space.</p>
                <ul>
                    <li><b>Feature:</b> It keeps a "polite distance" between items instead of sticking them together.</li>
                    <li><b>Benefit:</b> It is much more convenient than <code>+</code> when listing multiple data points.</li>
                </ul>
                <p><i>Example: print("Hello", "Python") → Hello Python (Auto-space)</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Ask about a favorite movie and use commas to print: "Aha! [movie] is your movie."
                </div>
            `,
            ru: `
                <p>Если использовать запятую (<b>,</b>) внутри <b>print()</b>, Python автоматически добавит один пробел.</p>
                <ul>
                    <li><b>Особенность:</b> Она соблюдает «вежливую дистанцию» между элементами, не склеивая их.</li>
                    <li><b>Преимущество:</b> Это гораздо удобнее, чем <code>+</code>, когда нужно перечислить несколько данных.</li>
                </ul>
                <p><i>Пример: print("Привет", "Python") → Привет Python (Авто-пробел)</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Спросите о любимом фильме и через запятую выведите: "Ага! Вы посмотрели [фильм]".
                </div>
            `
        },
        answer: {
            ko: 'movie = input("좋아하는 영화는? ")\nprint("아하!", movie, "를 보셨군요.")',
            en: 'movie = input("What is your favorite movie? ")\nprint("Aha!", movie, "is your movie.")',
            ru: 'movie = input("Ваш любимый фильм? ")\nprint("Ага!", movie, "вы посмотрели.")'
        }
    },

    // 5. 사칙연산 (Math)
    {
        menu: { ko: '3: 사칙연산', en: '3: Math', ru: '3: Арифметика' },
        title: { 
            ko: '5. 컴퓨터는 계산 천재: 사칙연산', 
            en: '5. The Calculation Genius: Basic Math', 
            ru: '5. Гений вычислений: Арифметика' 
        },
        theory: {
            ko: `
                <p>파이썬을 강력한 계산기로 사용할 수 있습니다.</p>
                <ul>
                    <li><b>+</b> / <b>-</b> : 더하기와 빼기</li>
                    <li><b>*</b> : 곱하기 (별 모양 기호)</li>
                    <li><b>/</b> : 나누기 (슬래시 기호)</li>
                </ul>
                <p><b>기억하세요:</b> 숫자를 따옴표 <code>""</code> 안에 넣으면 글자가 되어 계산할 수 없습니다. 숫자만 그대로 써주세요!</p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    변수 <b>a</b>에 10, <b>b</b>에 5를 저장하고 두 수를 곱한(<b>*</b>) 결과를 출력하세요.
                </div>
            `,
            en: `
                <p>You can use Python as a powerful calculator.</p>
                <ul>
                    <li><b>+</b> / <b>-</b> : Addition and Subtraction</li>
                    <li><b>*</b> : Multiplication (Star symbol)</li>
                    <li><b>/</b> : Division (Slash symbol)</li>
                </ul>
                <p><b>Remember:</b> If you put numbers inside quotes <code>""</code>, they become text and cannot be calculated. Just write the numbers!</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Store 10 in variable <b>a</b> and 5 in variable <b>b</b>, then print the result of their multiplication (<b>*</b>).
                </div>
            `,
            ru: `
                <p>Python можно использовать как мощный калькулятор.</p>
                <ul>
                    <li><b>+</b> / <b>-</b> : Сложение и вычитание</li>
                    <li><b>*</b> : Умножение (символ «звездочка»)</li>
                    <li><b>/</b> : Деление (символ «слэш»)</li>
                </ul>
                <p><b>Помните:</b> Если поставить числа в кавычки <code>""</code>, они станут текстом, и их нельзя будет посчитать. Пишите просто числа!</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Присвойте переменной <b>a</b> значение 10, а <b>b</b> — значение 5, и выведите результат их умножения (<b>*</b>).
                </div>
            `
        },
        answer: {
            ko: 'a = 10\nb = 5\nprint(a * b)',
            en: 'a = 10\nb = 5\nprint(a * b)',
            ru: 'a = 10\nb = 5\nprint(a * b)'
        }
    },
   {
        menu: { ko: '4: input 안내문', en: '4: Input Message', ru: '4: Подсказка в input()' },
        title: { 
            ko: '6. 친절한 안내원: input() 메시지', 
            en: '6. Friendly Guide: Message inside input()', 
            ru: '6. Сообщение внутри input()' 
        },
        theory: {
            ko: `
                <p><code>input()</code>의 괄호 안에 문자열을 넣으면 사용자가 무엇을 입력해야 할지 알려주는 <b>힌트</b>가 됩니다.</p>
                <ul>
                    <li><b>기존:</b> <code>print("이름:")</code> 작성 후 <code>input()</code> (두 줄 필요)</li>
                    <li><b>개선:</b> <code>input("이름: ")</code> (한 줄로 해결!)</li>
                </ul>
                <p><i>비유: input() 안의 메시지는 빈 칸 옆에 붙은 포스트잇 설명과 같습니다.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    사용자에게 "나이를 입력하세요: "라는 문구가 보이도록 코드를 작성하고, 입력받은 값을 변수 <b>age</b>에 저장하세요.
                </div>
            `,
            en: `
                <p>Putting a string inside <code>input()</code> provides a <b>hint</b> to the user about what to type.</p>
                <ul>
                    <li><b>Old way:</b> <code>print("Name:")</code> then <code>input()</code> (Needs two lines)</li>
                    <li><b>New way:</b> <code>input("Name: ")</code> (Done in one line!)</li>
                </ul>
                <p><i>Analogy: The message inside input() is like a sticky note next to a blank form.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Write the code to show "Enter your age: " and save the input in a variable named <b>age</b>.
                </div>
            `,
            ru: `
                <p>Если написать строку внутри <code>input()</code>, она станет <b>подсказкой</b>, которая скажет пользователю, что именно нужно ввести.</p>
                <ul>
                    <li><b>Раньше:</b> Сначала <code>print("Имя:")</code>, затем <code>input()</code> (две строки)</li>
                    <li><b>Сейчас:</b> <code>input("Имя: ")</code> (всего одна строка!)</li>
                </ul>
                <p><i>Аналогия: Сообщение внутри input() — это как пояснительная записка рядом с пустой графой в анкете.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Напишите код так, чтобы пользователь увидел "Введите возраст: ", и сохраните результат в переменную <b>age</b>.
                </div>
            `
        },
        answer: {
            ko: 'age = input("나이를 입력하세요: ")',
            en: 'age = input("Enter your age: ")',
            ru: 'age = input("Введите возраст: ")'
        }
    },

    // 7 & 8. 자료형과 형변환 (통합 보강)
    {
        menu: { ko: '4: 자료형/형변환', en: '4: Data Types', ru: '4: Типы данных' },
        title: { 
            ko: '7. 숫자로 변신! int()와 자료형', 
            en: '7. Transform into Numbers! int() and Data Types', 
            ru: '7. Превращение в числа! int() и типы данных' 
        },
        theory: {
            ko: `
                <p>파이썬은 <b>글자("10")</b>와 <b>숫자(10)</b>를 완전히 다르게 생각합니다.</p>
                <ul>
                    <li><b>str (String):</b> 글자 상자. 계산할 수 없습니다. <code>input()</code>으로 받은 모든 데이터는 기본적으로 이 상태입니다.</li>
                    <li><b>int (Integer):</b> 정수 상자. 계산이 가능한 진짜 숫자입니다.</li>
                    <li><b>int():</b> 글자 상자 안에 든 숫자를 꺼내서 진짜 숫자 상자로 옮겨주는 <b>마법 도구</b>입니다.</li>
                </ul>
                <p><b>⚠️ 필수:</b> 숫자를 더하거나 빼려면 반드시 <code>int(input())</code>처럼 감싸줘야 합니다!</p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    숫자 하나를 입력받아 <b>num</b> 변수에 저장(정수형)하고, 그 숫자에 10을 더한 결과를 출력하세요.
                </div>
            `,
            en: `
                <p>Python treats <b>Text ("10")</b> and <b>Numbers (10)</b> completely differently.</p>
                <ul>
                    <li><b>str (String):</b> Text box. You cannot do math with it. All data from <code>input()</code> starts as this.</li>
                    <li><b>int (Integer):</b> Number box. Real numbers you can calculate.</li>
                    <li><b>int():</b> A <b>magic tool</b> that takes a number out of a text box and puts it into a real number box.</li>
                </ul>
                <p><b>⚠️ Essential:</b> To add or subtract numbers, you MUST wrap them like this: <code>int(input())</code>!</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Receive a number as input, store it as an integer in variable <b>num</b>, and print the result of adding 10 to it.
                </div>
            `,
            ru: `
                <p>Python воспринимает <b>Текст ("10")</b> и <b>Числа (10)</b> совершенно по-разному.</p>
                <ul>
                    <li><b>str (String):</b> Коробка с текстом. С ней нельзя считать. Любые данные из <code>input()</code> по умолчанию такие.</li>
                    <li><b>int (Integer):</b> Коробка с числами. Настоящие числа для вычислений.</li>
                    <li><b>int():</b> <b>Магический инструмент</b>, который достает число из текстовой коробки и превращает его в настоящее число.</li>
                </ul>
                <p><b>⚠️ Важно:</b> Чтобы складывать или вычитать числа, вы ОБЯЗАТЕЛЬНО должны использовать <code>int(input())</code>!</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Введите число, сохраните его в переменную <b>num</b> (как целое число) и выведите результат прибавления к нему 10.
                </div>
            `
        },
        answer: {
            ko: 'num = int(input("숫자 입력: "))\nprint(num + 10)',
            en: 'num = int(input("Enter a number: "))\nprint(num + 10)',
            ru: 'num = int(input("Введите число: "))\nprint(num + 10)'
        }
    },

    // 9. 프로젝트 계산기
    {
        menu: { ko: '4: 계산기 프로젝트', en: '4: Calculator Project', ru: '4: Проект: Калькулятор' },
        title: { 
            ko: '8. 종합 실습: 나만의 사칙연산 계산기', 
            en: '8. Project: Your Own Math Calculator', 
            ru: '8. Проект: Ваш собственный калькулятор' 
        },
        theory: {
            ko: `
                <p>지금까지 배운 <b>변수, 입력, 형변환, 사칙연산</b>을 모두 합쳐서 진짜 계산기를 만듭니다.</p>
                <div class="problem-area">
                    <span class="problem-title">[미션]</span>
                    1. 첫 번째 숫자를 <b>a</b>에 정수로 저장하세요.<br>
                    2. 두 번째 숫자를 <b>b</b>에 정수로 저장하세요.<br>
                    3. 두 수의 더하기(+), 빼기(-), 곱하기(*), 나누기(/) 결과를 각각 출력하세요.
                </div>
                <p><i>팁: 결과 앞에 "합계: " 처럼 설명을 붙여주면 더 좋습니다!</i></p>
                
            `,
            en: `
                <p>Combine everything you've learned—<b>Variables, Input, Type Conversion, and Math</b>—to build a real calculator.</p>
                <div class="problem-area">
                    <span class="problem-title">[Mission]</span>
                    1. Store the first number in <b>a</b> as an integer.<br>
                    2. Store the second number in <b>b</b> as an integer.<br>
                    3. Print the results of adding (+), subtracting (-), multiplying (*), and dividing (/) the two numbers.
                </div>
                <p><i>Tip: It's even better if you add labels like "Sum: " before the results!</i></p>
            `,
            ru: `
                <p>Объедините всё, что вы узнали — <b>Переменные, Ввод, Преобразование типов и Арифметику</b> — чтобы создать настоящий калькулятор.</p>
                <div class="problem-area">
                    <span class="problem-title">[Миссия]</span>
                    1. Сохраните первое число в <b>a</b> как целое число.<br>
                    2. Сохраните второе число в <b>b</b> как целое число.<br>
                    3. Выведите результаты сложения (+), вычитания (-), умножения (*) и деления (/) этих двух чисел.
                </div>
                <p><i>Подсказка: будет еще лучше, если вы добавите пояснения, например «Сумма: », перед результатами!</i></p>
            `
        },
        answer: {
            ko: 'a = int(input("첫 번째 숫자: "))\nb = int(input("두 번째 숫자: "))\nprint("a + b =", a + b)\nprint("a - b =", a - b)\nprint("a * b =", a * b)\nprint("a / b =", a / b)',
            en: 'a = int(input("First number: "))\nb = int(input("Second number: "))\nprint("a + b =", a + b)\nprint("a - b =", a - b)\nprint("a * b =", a * b)\nprint("a / b =", a / b)',
            ru: 'a = int(input("Первое число: "))\nb = int(input("Второе число: "))\nprint("a + b =", a + b)\nprint("a - b =", a - b)\nprint("a * b =", a * b)\nprint("a / b =", a / b)'
        }
    },
    {
        menu: { ko: '5: 참과 거짓', en: '5: True and False', ru: '5: Истина и Ложь' },
        title: { 
            ko: '1. 컴퓨터의 대답: 예(True) 또는 아니오(False)', 
            en: '1. Computer\'s Answer: Yes (True) or No (False)', 
            ru: '1. Ответ компьютера: Да (True) или Нет (False)' 
        },
        theory: {
            ko: `
                <p>컴퓨터는 세상 모든 질문에 대해 <b>참(True)</b> 또는 <b>거짓(False)</b>으로 대답합니다. 이를 <b>불린(Boolean)</b>이라고 합니다.</p>
                <ul>
                    <li><b>비교:</b> <code>10 > 5</code>라고 물으면 컴퓨터는 <b>True</b>라고 대답합니다.</li>
                    <li><b>False가 되는 값들:</b> 숫자 <b>0</b>, 빈 글자(<b>""</b>), 아무것도 없는 상태는 거짓(False)으로 간주됩니다.</li>
                </ul>
                <p><i>비유: 불린은 전등 스위치와 같습니다. 켜져 있거나(True) 꺼져 있는(False) 두 상태만 존재합니다.</i></p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    <code>print(10 > 5)</code>와 <code>print(10 < 5)</code>의 결과를 각각 확인해 보세요.
                </div>
            `,
            en: `
                <p>Computers answer every question with either <b>True</b> or <b>False</b>. This is called the <b>Boolean</b> data type.</p>
                <ul>
                    <li><b>Comparison:</b> If you ask <code>10 > 5</code>, the computer answers <b>True</b>.</li>
                    <li><b>Values that are False:</b> The number <b>0</b>, an empty string (<b>""</b>), or "nothing" are considered False.</li>
                </ul>
                <p><i>Analogy: A Boolean is like a light switch. It can only be ON (True) or OFF (False).</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Check the results of <code>print(10 > 5)</code> and <code>print(10 < 5)</code>.
                </div>
            `,
            ru: `
                <p>Компьютер отвечает на все вопросы либо <b>Истиной (True)</b>, либо <b>Ложью (False)</b>. Это называется <b>логическим типом данных (Boolean)</b>.</p>
                <ul>
                    <li><b>Сравнение:</b> Если вы спросите <code>10 > 5</code>, компьютер ответит <b>True</b>.</li>
                    <li><b>Значения, которые считаются ложными:</b> Число <b>0</b>, пустая строка (<b>""</b>) или «ничего» считаются False.</li>
                </ul>
                <p><i>Аналогия: Boolean похож на выключатель света. Он может быть либо ВКЛ (True), либо ВЫКЛ (False).</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Проверьте результаты <code>print(10 > 5)</code> и <code>print(10 < 5)</code>.
                </div>
            `
        },
        answer: {
            ko: 'print(10 > 5)\nprint(10 < 5)',
            en: 'print(10 > 5)\nprint(10 < 5)',
            ru: 'print(10 > 5)\nprint(10 < 5)'
        }
    },

    // 5-2. 비교 연산자 (== vs =)
    {
        menu: { ko: '5: 비교 연산자', en: '5: Comparison', ru: '5: Сравнение' },
        title: { 
            ko: '2. "넣기(=)"와 "비교하기(==)"의 차이', 
            en: '2. Difference: "Assigning (=)" vs "Comparing (==)"', 
            ru: '2. Разница: «Присваивание (=)» против «Сравнения (==)»' 
        },
        theory: {
            ko: `
                <p>초보자들이 가장 많이 하는 실수! <b>=</b>과 <b>==</b>은 완전히 다릅니다.</p>
                <ul>
                    <li><b>= (할당):</b> "상자에 담아라!" 라는 명령입니다. (<code>a = 10</code>)</li>
                    <li><b>== (비교):</b> "둘이 같니?" 라고 물어보는 질문입니다. 결과는 <b>True/False</b>로 나옵니다.</li>
                </ul>
                <p><b>⚠️ 경고:</b> if문 안에서 "같다면"을 표현할 때는 반드시 <code>==</code>를 써야 합니다.</p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    변수 <b>score</b>에 90을 저장(=)하고, score가 90과 같은지(==) 출력하는 코드를 작성하세요.
                </div>
            `,
            en: `
                <p>The most common mistake for beginners! <b>=</b> and <b>==</b> are completely different.</p>
                <ul>
                    <li><b>= (Assignment):</b> A command to "Put this in the box!" (<code>a = 10</code>)</li>
                    <li><b>== (Comparison):</b> A question asking "Are these two equal?" The result is <b>True/False</b>.</li>
                </ul>
                <p><b>⚠️ Warning:</b> When you want to say "If it is equal to" in an if statement, you MUST use <code>==</code>.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Store (=) 90 in variable <b>score</b>, and then write code to print if score is equal (==) to 90.
                </div>
            `,
            ru: `
                <p>Самая частая ошибка новичков! <b>=</b> и <b>==</b> абсолютно разные вещи.</p>
                <ul>
                    <li><b>= (Присваивание):</b> Команда «Положи это в коробку!» (<code>a = 10</code>).</li>
                    <li><b>== (Сравнение):</b> Вопрос «Эти две вещи равны?». Результат будет <b>True/False</b>.</li>
                </ul>
                <p><b>⚠️ Внимание:</b> Если вы хотите сказать «Если это равно» в условии if, вы ОБЯЗАТЕЛЬНО должны использовать <code>==</code>.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Сохраните (=) 90 в переменную <b>score</b>, а затем напишите код, который выведет, равно ли (==) значение score числу 90.
                </div>
            `
        },
        answer: {
            ko: 'score = 90\nprint(score == 90)',
            en: 'score = 90\nprint(score == 90)',
            ru: 'score = 90\nprint(score == 90)'
        }
    },

    // 5-3. if 조건문과 들여쓰기
    {
        menu: { ko: '5: if 조건문', en: '5: if Statement', ru: '5: Условие if' },
        title: { 
            ko: '3. 조건의 문: if 문과 들여쓰기', 
            en: '3. The Gate of Conditions: if and Indentation', 
            ru: '3. Условие if и отступы' 
        },
        theory: {
            ko: `
                <p><b>if</b> 문은 특정 조건이 참일 때만 문을 열어줍니다.</p>
                <ul>
                    <li><b>콜론(:):</b> "자, 이제 아래 코드를 실행할 준비해!"라는 신호입니다. 절대 빼먹지 마세요.</li>
                    <li><b>들여쓰기(Indentation):</b> <code>if</code>에 포함된 코드라는 것을 표시하기 위해 <b>한 칸 안으로(Tab)</b> 들여 써야 합니다.</li>
                </ul>
                <p><b>💡 규칙:</b> 들여쓰기가 된 코드만 <code>if</code>가 참일 때 실행됩니다.</p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    만약 10이 5보다 크다면 "Success"를 출력하는 코드를 만드세요. (들여쓰기에 주의하세요!)
                </div>
            `,
            en: `
                <p>The <b>if</b> statement opens a gate only when a certain condition is True.</p>
                <ul>
                    <li><b>Colon (:):</b> A signal saying "Get ready to run the code below!" Don't forget it.</li>
                    <li><b>Indentation:</b> You must indent the code <b>one step in (Tab)</b> to show it belongs to the <code>if</code> statement.</li>
                </ul>
                <p><b>💡 Rule:</b> Only the indented code will run if the <code>if</code> condition is True.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Create a code: if 10 is greater than 5, print "Success". (Pay attention to indentation!)
                </div>
            `,
            ru: `
                <p>Оператор <b>if</b> открывает ворота только тогда, когда определенное условие Истинно.</p>
                <ul>
                    <li><b>Двоеточие (:):</b> Сигнал «Приготовься выполнять код ниже!». Никогда не забывайте его.</li>
                    <li><b>Отступ:</b> Вы должны сделать отступ <b>(Tab)</b>, чтобы показать, что этот код относится к оператору <code>if</code>.</li>
                </ul>
                <p><b>💡 Правило:</b> Только код с отступом будет выполнен, если условие <code>if</code> верно.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Напишите код: если 10 больше 5, вывести "Success". (Следите за отступами!)
                </div>
            `
        },
        answer: {
            ko: 'if 10 > 5:\n    print("Success")',
            en: 'if 10 > 5:\n    print("Success")',
            ru: 'if 10 > 5:\n    print("Success")'
        }
    },

    // 5-4. if-else 연습 (커피 알고리즘)
    {
        menu: { ko: '5: 커피 알고리즘', en: '5: Coffee Project', ru: '5: Проект Кофе' },
        title: { 
            ko: '4. 갈림길: if-else로 선택하기', 
            en: '4. The Fork in the Road: Choosing with if-else', 
            ru: '4. Развилка: выбор с помощью if-else' 
        },
        theory: {
            ko: `
                <p>조건이 틀렸을 때(False) 실행할 코드는 <b>else</b> 뒤에 적습니다.</p>
                <p><i>시나리오: 커피 한 잔에 3000원입니다. 돈이 충분하면 "Coffee", 부족하면 "No coffee"를 출력합니다.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    돈(<b>money</b>)을 입력받아(int형 변환 필수!) 3000원 미만이면 "No coffee", 3000원 이상이면 "Coffee"를 출력하는 프로그램을 만드세요.
                </div>
                
            `,
            en: `
                <p>Code to run when a condition is False is written after <b>else</b>.</p>
                <p><i>Scenario: A cup of coffee is 3000 won. If you have enough money, print "Coffee"; otherwise, print "No coffee".</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Input <b>money</b> (don't forget <code>int()</code>!), if it's less than 3000, print "No coffee", otherwise print "Coffee".
                </div>
            `,
            ru: `
                <p>Код, который должен выполниться, если условие Ложно, пишется после <b>else</b>.</p>
                <p><i>Сценарий: Чашка кофе стоит 3000 вон. Если у вас достаточно денег, выведите "Coffee", если нет — "No coffee".</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Введите сумму (<b>money</b>) (не забудьте про <code>int()</code>!). Если меньше 3000, выведите "No coffee", иначе — "Coffee".
                </div>
            `
        },
        answer: {
            ko: 'money = int(input("돈: "))\nif money < 3000:\n    print("No coffee")\nelse:\n    print("Coffee")',
            en: 'money = int(input("Money: "))\nif money < 3000:\n    print("No coffee")\nelse:\n    print("Coffee")',
            ru: 'money = int(input("Деньги: "))\nif money < 3000:\n    print("No coffee")\nelse:\n    print("Coffee")'
        }
    },
    {
        menu: { ko: '6: elif', en: '6: elif', ru: '6: elif' },
        title: { 
            ko: '5. 조건이 여러 개일 때: elif', 
            en: '5. Multiple Conditions: elif', 
            ru: '5. Несколько условий: elif' 
        },
        theory: {
            ko: `
                <p><b>elif</b>는 "그렇지 않고, 만약에"라는 뜻입니다. 선택지가 여러 개일 때 사용합니다.</p>
                <ul>
                    <li><b>흐름:</b> 위에서부터 차례대로 검사하며, 참인 조건을 만나면 그 아래 조건들은 검사하지 않고 넘어갑니다.</li>
                    <li><b>주의:</b> 범위를 나눌 때는 <b>가장 큰 값(엄격한 조건)부터</b> 순서대로 적어야 합니다.</li>
                </ul>
                <p><i>비유: elif는 여러 개의 문이 달린 복도와 같습니다. 첫 번째 문이 열리지 않으면 다음 문으로 이동합니다.</i></p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    점수를 입력받아 90 이상이면 A, 80 이상이면 B, 70 이상이면 C, 60 이상이면 D, 나머지는 F를 출력하세요.
                </div>
            `,
            en: `
                <p><b>elif</b> stands for "else if". Use it when you have more than two choices.</p>
                <ul>
                    <li><b>Flow:</b> It checks conditions from top to bottom. Once it finds a True condition, it skips the rest.</li>
                    <li><b>Note:</b> When grading, always start with the <b>highest score (strictest condition)</b> first.</li>
                </ul>
                <p><i>Analogy: elif is like a hallway with many doors. If the first door is locked, you try the next one.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Input a score. Print A for 90+, B for 80+, C for 70+, D for 60+, and F for anything else.
                </div>
            `,
            ru: `
                <p><b>elif</b> означает «иначе, если». Используется, когда у вас есть несколько вариантов выбора.</p>
                <ul>
                    <li><b>Порядок:</b> Проверка идет сверху вниз. Как только находится верное условие, остальные пропускаются.</li>
                    <li><b>Важно:</b> При разделении на диапазоны всегда начинайте с <b>самого большого значения</b>.</li>
                </ul>
                <p><i>Аналогия: elif похож на коридор со множеством дверей. Если первая дверь закрыта, вы идете к следующей.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Введите балл. Выведите A для 90+, B для 80+, C для 70+, D для 60+, иначе — F.
                </div>
            `
        },
        answer: {
            ko: 'score = int(input("점수를 입력하세요: "))\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("F")',
            en: 'score = int(input("Enter score: "))\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("F")',
            ru: 'score = int(input("Введите балл: "))\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("F")'
        }
    },

    // 6-2. 논리 연산자 (and / or)
    {
        menu: { ko: '6: and / or', en: '6: and / or', ru: '6: and / or' },
        title: { 
            ko: '6. 조건 결합하기: and와 or', 
            en: '6. Combining Conditions: and and or', 
            ru: '6. Комбинирование условий: and и or' 
        },
        theory: {
            ko: `
                <p>여러 개의 조건을 한 줄에서 검사하고 싶을 때 사용합니다.</p>
                <ul>
                    <li><b>and:</b> 두 조건이 <b>모두</b> 참일 때만 True (까다로운 조건)</li>
                    <li><b>or:</b> 둘 중 <b>하나라도</b> 참이면 True (너그러운 조건)</li>
                </ul>
                <p><i>비유: and는 두 개의 열쇠를 동시에 돌려야 열리는 금고이고, or는 정문이나 뒷문 중 하나로만 들어가도 되는 집과 같습니다.</i></p>

                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    점수가 70 이상<b>이고</b> 출석률이 80 이상이면 "합격"을 출력하는 코드를 작성하세요. (and 사용)
                </div>
            `
,
            en: `
                <p>Use these when you want to check multiple conditions in one line.</p>
                <ul>
                    <li><b>and:</b> True only if <b>both</b> conditions are True (Strict).</li>
                    <li><b>or:</b> True if <b>at least one</b> condition is True (Generous).</li>
                </ul>
                <p><i>Analogy: and is like a safe that needs two keys turned at once. or is like a house you can enter through either the front or back door.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Input score and attendance. If score is 70 or more <b>and</b> attendance is 80 or more, print "Pass".
                </div>
            `,
            ru: `
                <p>Используются для проверки нескольких условий в одной строке.</p>
                <ul>
                    <li><b>and:</b> True только если <b>оба</b> условия верны (Строгое).</li>
                    <li><b>or:</b> True, если <b>хотя бы одно</b> из условий верно (Мягкое).</li>
                </ul>
                <p><i>Аналогия: and похож на сейф, который открывается двумя ключами одновременно. or похож на дом, в который можно войти через переднюю или заднюю дверь.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Если балл 70 и выше <b>и</b> посещаемость 80 и выше, выведите "Pass".
                </div>
            `
        },
        answer: {
            ko: 'score = int(input("점수: "))\natt = int(input("출석: "))\nif score >= 70 and att >= 80:\n    print("합격")\nelse:\n    print("불합격")',
            en: 'score = int(input("Score: "))\natt = int(input("Attendance: "))\nif score >= 70 and att >= 80:\n    print("Pass")\nelse:\n    print("Fail")',
            ru: 'score = int(input("Балл: "))\natt = int(input("Посещаемость: "))\nif score >= 70 and att >= 80:\n    print("Pass")\nelse:\n    print("Fail")'
        }
    },

    // 6-3. 중첩 if (Nested if)
    {
        menu: { ko: '6: 중첩 if', en: '6: Nested if', ru: '6: Вложенный if' },
        title: { 
            ko: '7. 조건 속의 조건: 중첩 if', 
            en: '7. Conditions within Conditions: Nested if', 
            ru: '7. Условие внутри условия: Вложенный if' 
        },
        theory: {
            ko: `
                <p><b>중첩 if</b>는 큰 필터를 거친 뒤 그 안에서 다시 세부 필터를 거치는 구조입니다.</p>
                <ul>
                    <li><b>구조:</b> if문 안에 또 다른 if문이 들어갑니다.</li>
                    <li><b>핵심:</b> 안쪽 if문은 바깥쪽 if문보다 <b>한 번 더 들여쓰기</b>를 해야 합니다.</li>
                </ul>
                <p><i>비유: 건물의 보안 검색대를 통과한 뒤, 다시 개별 사무실 열쇠를 체크하는 것과 같습니다.</i></p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    점수를 입력받아 60 이상이면 "합격"을 출력하고, 그 안에서 다시 90 이상이면 "A"를 출력하세요. 60 미만이면 "불합격"만 출력하세요.
                </div>
            `,
            en: `
                <p><b>Nested if</b> is like passing through a big filter and then a smaller filter inside it.</p>
                <ul>
                    <li><b>Structure:</b> An if statement is placed inside another if statement.</li>
                    <li><b>Key:</b> The inner if statement must be <b>indented even further</b>.</li>
                </ul>
                <p><i>Analogy: It's like passing through airport security and then having your ticket checked again at the gate.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Input a score. If it's 60+, print "Pass". Inside that block, if it's 90+, print "A". If it's below 60, just print "Fail".
                </div>
            `,
            ru: `
                <p><b>Вложенный if</b> — это как прохождение через большой фильтр, а затем через более мелкий внутри него.</p>
                <ul>
                    <li><b>Структура:</b> Один оператор if помещается внутрь другого.</li>
                    <li><b>Важно:</b> Внутренний if должен иметь <b>дополнительный отступ</b>.</li>
                </ul>
                <p><i>Аналогия: Это как пройти контроль безопасности в аэропорту, а затем снова предъявить билет у выхода на посадку.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Введите балл. Если 60+, выведите "Pass". Внутри этого блока, если 90+, выведите "A". Если меньше 60, выведите "Fail".
                </div>
            `
        },
        answer: {
            ko: 'score = int(input("점수: "))\nif score >= 60:\n    print("합격")\n    if score >= 90:\n        print("A")\nelse:\n    print("불합격")',
            en: 'score = int(input("Score: "))\nif score >= 60:\n    print("Pass")\n    if score >= 90:\n        print("A")\nelse:\n    print("Fail")',
            ru: 'score = int(input("Балл: "))\nif score >= 60:\n    print("Pass")\n    if score >= 90:\n        print("A")\nelse:\n    print("Fail")'
        }
    },

    // 6-4. f-string 출력
    {
        menu: { ko: '6: f-string', en: '6: f-string', ru: '6: f-string' },
        title: { 
            ko: '8. 예쁘게 출력하기: f-string', 
            en: '8. Clean Output: f-string', 
            ru: '8. Красивый вывод: f-string' 
        },
        theory: {
            ko: `
                <p><b>f-string</b>은 변수의 값을 문장 중간에 아주 쉽게 끼워 넣는 방법입니다.</p>
                <ul>
                    <li><b>방법:</b> 따옴표 앞에 <b>f</b>를 쓰고, 변수는 중괄호 <b>{ }</b> 안에 넣습니다.</li>
                    <li><b>장점:</b> 콤마(,)나 플러스(+)를 여러 번 쓰지 않아도 되어 가독성이 매우 좋습니다.</li>
                </ul>
                <p><i>예: print(f"점수는 {score}점입니다.")</i></p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    변수 <b>name</b>에 "Tom", <b>score</b>에 85를 저장하고 f-string을 사용하여 "Tom의 점수는 85점입니다."를 출력하세요.
                </div>
            `,
            en: `
                <p><b>f-strings</b> are the easiest way to insert variables directly into a sentence.</p>
                <ul>
                    <li><b>How:</b> Put an <b>f</b> before the quotes and wrap the variable in curly braces <b>{ }</b>.</li>
                    <li><b>Benefit:</b> It's much cleaner than using many commas or plus signs.</li>
                </ul>
                <p><i>Example: print(f"Your score is {score}.")</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Store "Tom" in <b>name</b> and 85 in <b>score</b>. Use an f-string to print "Tom's score is 85."
                </div>
            `,
            ru: `
                <p><b>f-строки</b> — это самый простой способ вставить переменные прямо в предложение.</p>
                <ul>
                    <li><b>Как:</b> Поставьте букву <b>f</b> перед кавычками и заключите переменную в фигурные скобки <b>{ }</b>.</li>
                    <li><b>Преимущество:</b> Это выглядит гораздо чище, чем использование множества запятых или плюсов.</li>
                </ul>
                <p><i>Пример: print(f"Ваш балл: {score}.")</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Сохраните "Tom" в <b>name</b> и 85 в <b>score</b>. Используйте f-string, чтобы вывести: "Балл Тома — 85".
                </div>
            `
        },
        answer: {
            ko: 'name = "Tom"\nscore = 85\nprint(f"{name}의 점수는 {score}점입니다.")',
            en: 'name = "Tom"\nscore = 85\nprint(f"{name}\'s score is {score}.")',
            ru: 'name = "Tom"\nscore = 85\nprint(f"Балл {name} — {score}.")'
        }
    },
    {
        menu: { ko: '7: 복습 종합', en: '7: Review', ru: '7: Повторение' },
        title: { 
            ko: '9. 중간 점검: 1~6주차 핵심 총정리', 
            en: '9. Mid-term Review: Key Points of Weeks 1-6', 
            ru: '9. Промежуточный обзор: Основные моменты 1-6 недель' 
        },
        theory: {
            ko: `
                <p>중간고사를 앞두고 지금까지 배운 도구들을 복습합니다. 프로그래밍은 기초가 가장 중요합니다!</p>
                <ul>
                    <li><b>소통:</b> print()로 보여주고, input()으로 듣습니다.</li>
                    <li><b>기억:</b> 변수(=)에 데이터를 저장합니다.</li>
                    <li><b>변신:</b> 글자를 숫자로 바꿀 땐 <code>int()</code>를 씁니다.</li>
                    <li><b>판단:</b> <code>if / elif / else</code>로 상황에 따라 다른 행동을 합니다.</li>
                </ul>
                <p><b>⚠️ 핵심:</b> <code>input()</code>으로 받은 값은 숫자처럼 보여도 <b>글자(String)</b>입니다. 계산하려면 꼭 변환하세요.</p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    두 숫자를 각각 입력받아(int형 변환), 두 수의 합계(+)를 출력하는 코드를 작성하세요.
                </div>
            `,
            en: `
                <p>Before the mid-term, let's review the tools we've learned so far. Basics are the most important part of programming!</p>
                <ul>
                    <li><b>Communication:</b> Show with print(), listen with input().</li>
                    <li><b>Memory:</b> Store data in variables (=).</li>
                    <li><b>Transformation:</b> Use <code>int()</code> to change text into numbers.</li>
                    <li><b>Judgment:</b> Use <code>if / elif / else</code> to act differently based on situations.</li>
                </ul>
                <p><b>⚠️ Key:</b> Even if a value from <code>input()</code> looks like a number, it is <b>Text (String)</b>. Always convert it for math.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Input two numbers separately (convert to int), and write code to print their sum (+).
                </div>
            `,
            ru: `
                <p>Перед промежуточным экзаменом давайте повторим изученные инструменты. Основы — самая важная часть программирования!</p>
                <ul>
                    <li><b>Общение:</b> Выводим через print(), слушаем через input().</li>
                    <li><b>Память:</b> Сохраняем данные в переменные (=).</li>
                    <li><b>Преобразование:</b> Используем <code>int()</code>, чтобы превратить текст в числа.</li>
                    <li><b>Логика:</b> Используем <code>if / elif / else</code> для разных действий в зависимости от условий.</li>
                </ul>
                <p><b>⚠️ Важно:</b> Даже если ввод из <code>input()</code> выглядит как число, это <b>Текст (String)</b>. Всегда преобразуйте его для вычислений.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Введите два числа по отдельности (преобразуйте в int) и выведите их сумму (+).
                </div>
            `
        },
        answer: {
            ko: 'a = int(input("첫 번째 숫자: "))\nb = int(input("두 번째 숫자: "))\nprint(a + b)',
            en: 'a = int(input("First number: "))\nb = int(input("Second number: "))\nprint(a + b)',
            ru: 'a = int(input("Первое число: "))\nb = int(input("Второе число: "))\nprint(a + b)'
        }
    },

    // 7-2. 예외 처리 (try-except)
    {
        menu: { ko: '7: try-except', en: '7: try-except', ru: '7: try-except' },
        title: { 
            ko: '10. 프로그램의 방패: try-except', 
            en: '10. Program\'s Shield: try-except', 
            ru: '10. Щит программы: try-except' 
        },
        theory: {
            ko: `
                <p>사용자가 숫자가 아닌 글자를 입력하면 프로그램이 에러와 함께 멈춰버립니다. 이를 막아주는 것이 <b>try-except</b>입니다.</p>
                <ul>
                    <li><b>try:</b> "일단 이 코드를 실행해 봐!"</li>
                    <li><b>except:</b> "만약 에러가 나면, 멈추지 말고 이 코드를 실행해!"</li>
                </ul>
                <p><i>비유: try-except는 넘어져도 다치지 않게 도와주는 안전 매트와 같습니다.</i></p>
                
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    숫자를 입력받는 코드를 작성하되, 만약 사용자가 글자를 입력해 에러가 나면 "오류! 숫자를 입력하세요."라고 출력하는 안전한 프로그램을 만드세요.
                </div>
            `,
            en: `
                <p>If a user enters text instead of a number, the program crashes with an error. <b>try-except</b> prevents this from happening.</p>
                <ul>
                    <li><b>try:</b> "Try running this code first!"</li>
                    <li><b>except:</b> "If an error happens, run this code instead of stopping!"</li>
                </ul>
                <p><i>Analogy: try-except is like a safety mat that catches you so you don't get hurt when you fall.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Write code to input a number, but make it a safe program that prints "Error! Please enter a number." if the user enters text.
                </div>
            `,
            ru: `
                <p>Если пользователь введет текст вместо числа, программа остановится с ошибкой. <b>try-except</b> предотвращает это.</p>
                <ul>
                    <li><b>try:</b> «Сначала попробуй выполнить этот код!»</li>
                    <li><b>except:</b> «Если возникнет ошибка, выполни этот код вместо остановки!»</li>
                </ul>
                <p><i>Аналогия: try-except — это как страховочная сетка, которая не дает вам удариться при падении.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Напишите код для ввода числа, но сделайте программу безопасной: если пользователь введет текст, должно выводиться "Ошибка! Введите число".
                </div>
            `
        },
        answer: {
            ko: 'try:\n    num = int(input("숫자 입력: "))\n    print(num)\nexcept:\n    print("오류! 숫자를 입력하세요.")',
            en: 'try:\n    num = int(input("Enter number: "))\n    print(num)\nexcept:\n    print("Error! Please enter a number.")',
            ru: 'try:\n    num = int(input("Введите число: "))\n    print(num)\nexcept:\n    print("Ошибка! Введите число.")'
        }
    },

    // 7-3. 카페 프로젝트 (미니 프로젝트)
    {
        menu: { ko: '7: 카페 프로젝트', en: '7: Cafe Project', ru: '7: Кафе проект' },
        title: { 
            ko: '11. 종합 실습: 스마트 카페 키오스크', 
            en: '11. Final Practice: Smart Cafe Kiosk', 
            ru: '11. Итоговая практика: Умный киоск в кафе' 
        },
        theory: {
            ko: `
                <p>지금까지 배운 모든 지식을 합쳐서 카페 주문 시스템을 만듭니다. 돈을 입력하면 살 수 있는 음료를 추천해 줍니다.</p>
                <ul>
                    <li><b>가격표:</b> 차(3500), 아메리카노(4500), 라떼(5500)</li>
                    <li><b>조건:</b> <code>if-elif-else</code>를 사용하여 금액별로 다른 메시지를 보여줍니다.</li>
                    <li><b>안전:</b> 숫자가 아닌 값이 들어올 경우를 대비해 <code>try-except</code>로 감싸줍니다.</li>
                </ul>
                
                <div class="problem-area">
                    <span class="problem-title">[미션]</span>
                    돈을 입력받아 살 수 있는 가장 비싼 음료를 포함해 결과를 출력하세요. (예: 5000원이면 "차와 아메리카노가 가능합니다")
                </div>
            `,
            en: `
                <p>Combine everything you've learned to create a cafe ordering system. It recommends drinks based on the money entered.</p>
                <ul>
                    <li><b>Price list:</b> Tea(3500), Americano(4500), Latte(5500)</li>
                    <li><b>Conditions:</b> Use <code>if-elif-else</code> to show different messages by amount.</li>
                    <li><b>Safety:</b> Use <code>try-except</code> to handle cases where non-numeric values are entered.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Mission]</span>
                    Input money and print the results including the most expensive drink available. (e.g., If 5000, "Tea and Americano are available")
                </div>
            `,
            ru: `
                <p>Объедините все свои знания, чтобы создать систему заказа в кафе. Она рекомендует напитки в зависимости от введенной суммы.</p>
                <ul>
                    <li><b>Цены:</b> Чай(3500), Американо(4500), Латте(5500)</li>
                    <li><b>Логика:</b> Используйте <code>if-elif-else</code> для разных сообщений.</li>
                    <li><b>Безопасность:</b> Используйте <code>try-except</code> на случай ввода нечисловых значений.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Миссия]</span>
                    Введите сумму и выведите доступные напитки. (например, если 5000: «Доступны чай и американо»)
                </div>
            `
        },
        answer: {
            ko: 'try:\n    money = int(input("돈: "))\n    if money < 3500:\n        print("아무것도 살 수 없습니다.")\n    elif money < 4500:\n        print("차 주문 가능")\n    elif money < 5500:\n        print("차, 아메리카노 가능")\n    else:\n        print("모든 음료 주문 가능")\nexcept:\n    print("숫자 형식으로 입력해 주세요.")',
            en: 'try:\n    money = int(input("Money: "))\n    if money < 3500:\n        print("You can\'t buy anything.")\n    elif money < 4500:\n        print("Tea available")\n    elif money < 5500:\n        print("Tea, Americano available")\n    else:\n        print("All drinks available")\nexcept:\n    print("Please enter a numeric value.")',
            ru: 'try:\n    money = int(input("Деньги: "))\n    if money < 3500:\n        print("Вы ничего не можете купить.")\n    elif money < 4500:\n        print("Доступен чай")\n    elif money < 5500:\n        print("Доступны чай и американо")\n    else:\n        print("Доступны все напитки")\nexcept:\n    print("Пожалуйста, введите число.")'
        }
    },
    {
        menu: { ko: '9: 리스트(List)', en: '9: List Basics', ru: '9: Основы списков' },
        title: {
            ko: '9주차. 여러 개의 데이터를 하나로! 리스트',
            en: 'Week 9. Multiple Data in One! Lists',
            ru: 'Неделя 9. Несколько данных в одном! Списки'
        },
        theory: {
            ko: `
                <p><b>리스트(List)</b>는 여러 개의 값을 한 번에 저장할 수 있는 아주 유용한 자료형입니다.</p>
                <ul>
                    <li><b>인덱스:</b> 0부터 시작하며, 특정 위치의 값을 꺼낼 때 사용합니다.</li>
                    <li><b>len():</b> 리스트에 들어있는 값의 개수를 알려줍니다.</li>
                    <li><b>append():</b> 리스트의 맨 뒤에 새로운 값을 추가합니다.</li>
                    <li><b>remove():</b> 리스트에서 특정 값을 삭제합니다.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[실습 미션]</span>
                    <p>1. 좋아하는 음식 3개가 들어있는 리스트 <b>foods</b>를 만드세요.</p>
                    <p>2. <b>append()</b>를 사용해 음식을 하나 더 추가해보세요.</p>
                    <p>3. <b>print(len(foods))</b>로 총 개수를 확인해보세요.</p>
                </div>
            `,
            en: `
                <p>A <b>List</b> is a useful data type that can store multiple values at once.</p>
                <ul>
                    <li><b>Index:</b> Starts from 0, used to access specific values.</li>
                    <li><b>len():</b> Tells you the number of items in the list.</li>
                    <li><b>append():</b> Adds a new item to the end of the list.</li>
                    <li><b>remove():</b> Removes a specific item from the list.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    <p>1. Create a list named <b>foods</b> with 3 of your favorite foods.</p>
                    <p>2. Use <b>append()</b> to add one more food item.</p>
                    <p>3. Check the total count using <b>print(len(foods))</b>.</p>
                </div>
            `,
            ru: `
                <p><b>Список (List)</b> — это тип данных, который может хранить несколько значений одновременно.</p>
                <ul>
                    <li><b>Индекс:</b> Начинается с 0, используется для доступа к значениям.</li>
                    <li><b>len():</b> Показывает количество элементов в списке.</li>
                    <li><b>append():</b> Добавляет новый элемент в конец списка.</li>
                    <li><b>remove():</b> Удаляет определенный элемент из списка.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Задание]</span>
                    <p>1. Создайте список <b>foods</b> с 3 вашими любимыми блюдами.</p>
                    <p>2. Используйте <b>append()</b>, чтобы добавить еще одно блюдо.</p>
                    <p>3. Проверьте общее количество с помощью <b>print(len(foods))</b>.</p>
                </div>
            `
        },
        answer: {
            ko: 'foods = ["pizza", "chicken", "ramen"]\nfoods.append("icecream")\nprint(foods)\nprint(len(foods))',
            en: 'foods = ["pizza", "chicken", "ramen"]\nfoods.append("icecream")\nprint(foods)\nprint(len(foods))',
            ru: 'foods = ["pizza", "chicken", "ramen"]\nfoods.append("icecream")\nprint(foods)\nprint(len(foods))'
        }
    },
    {
        menu: { ko: '10: 반복문(for)', en: '10: for Loop', ru: '10: Цикл for' },
        title: {
            ko: '10주차. 같은 작업은 컴퓨터에게! 반복문 for',
            en: 'Week 10. Let the Computer Repeat! for Loops',
            ru: 'Неделя 10. Пусть компьютер повторяет! Цикл for'
        },
        theory: {
            ko: `
                <p><b>반복문(for)</b>은 리스트의 요소들을 하나씩 꺼내어 같은 작업을 반복할 때 사용합니다.</p>
                <ul>
                    <li><b>기본 문법:</b> <code>for 변수 in 리스트:</code> 형태를 사용하며, 다음 줄은 반드시 <b>들여쓰기</b>를 해야 합니다.</li>
                    <li><b>range():</b> <code>range(5)</code>는 0부터 4까지의 숫자 범위를 만들어줍니다. (5는 포함되지 않음)</li>
                    <li><b>누적 합계:</b> 합계를 저장할 변수를 0으로 초기화한 뒤, 반복문 안에서 계속 더해줍니다.</li>
                </ul>
                
                <div class="problem-area">
                    <span class="problem-title">[실습 미션: 평균 점수 구하기]</span>
                    <p>1. 점수 리스트 <b>scores = [80, 90, 70, 60, 100]</b>를 만드세요.</p>
                    <p>2. <b>total</b> 변수를 0으로 만드세요.</p>
                    <p>3. <b>for</b>문을 사용하여 점수의 총합을 구하세요.</p>
                    <p>4. 총합을 리스트의 길이로 나누어 평균을 출력하세요.</p>
                </div>
            `,
            en: `
                <p>A <b>for loop</b> is used to repeat the same task by taking elements from a list one by one.</p>
                <ul>
                    <li><b>Syntax:</b> Use <code>for variable in list:</code>. The next line <b>must be indented</b>.</li>
                    <li><b>range():</b> <code>range(5)</code> creates a sequence of numbers from 0 to 4. (5 is not included)</li>
                    <li><b>Accumulating Sum:</b> Initialize a sum variable to 0, then add values inside the loop.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Practice: Calculate Average]</span>
                    <p>1. Create a score list: <b>scores = [80, 90, 70, 60, 100]</b>.</p>
                    <p>2. Initialize <b>total = 0</b>.</p>
                    <p>3. Use a <b>for</b> loop to calculate the total sum of the scores.</p>
                    <p>4. Divide the total by the length of the list and print the average.</p>
                </div>
            `,
            ru: `
                <p><b>Цикл for</b> используется для повторения одной и той же задачи, перебирая элементы списка один за другим.</p>
                <ul>
                    <li><b>Синтаксис:</b> Используйте <code>for переменная in список:</code>. Следующая строка <b>должна иметь отступ</b>.</li>
                    <li><b>range():</b> <code>range(5)</code> создает последовательность чисел от 0 до 4 (5 не включается).</li>
                    <li><b>Накопительная сумма:</b> Создайте переменную для суммы со значением 0, затем прибавляйте значения внутри цикла.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Задание: Найти средний балл]</span>
                    <p>1. Создайте список оценок: <b>scores = [80, 90, 70, 60, 100]</b>.</p>
                    <p>2. Создайте переменную <b>total = 0</b>.</p>
                    <p>3. Используйте цикл <b>for</b>, чтобы вычислить общую сумму баллов.</p>
                    <p>4. Разделите сумму на длину списка и выведите среднее значение.</p>
                </div>
            `
        },
        answer: {
            ko: 'scores = [80, 90, 70, 60, 100]\ntotal = 0\nfor score in scores:\n    total = total + score\naverage = total / len(scores)\nprint("평균:", average)',
            en: 'scores = [80, 90, 70, 60, 100]\ntotal = 0\nfor score in scores:\n    total = total + score\naverage = total / len(scores)\nprint("Average:", average)',
            ru: 'scores = [80, 90, 70, 60, 100]\ntotal = 0\nfor score in scores:\n    total = total + score\naverage = total / len(scores)\nprint("Среднее:", average)'
        }
    },
    {
        menu: { ko: '11: 반복문(while)', en: '11: while Loop', ru: '11: Цикл while' },
        title: {
            ko: '11주차. 조건이 맞을 때까지 반복! while',
            en: 'Week 11. Repeat Until the Condition is Met! while',
            ru: 'Неделя 11. Повторять, пока условие верно! while'
        },
        theory: {
            ko: `
                <p><b>while 반복문</b>은 정해진 횟수가 아니라, 특정 <b>조건이 참(True)인 동안</b> 계속해서 코드를 실행합니다.</p>
                <ul>
                    <li><b>for vs while:</b> <code>for</code>는 정해진 횟수나 목록을 반복할 때, <code>while</code>은 조건이 만족되는 동안 반복할 때 사용합니다.</li>
                    <li><b>무한 반복 주의:</b> 조건이 계속 참이면 프로그램이 끝나지 않습니다. 반드시 반복문 안에서 조건을 거짓으로 만드는 코드가 필요합니다.</li>
                    <li><b>break:</b> 반복을 즉시 멈추고 탈출할 때 사용합니다.</li>
                    <li><b>continue:</b> 이번 반복의 남은 코드를 건너뛰고 바로 다음 반복으로 넘어갑니다.</li>
                </ul>
                [Image of while loop vs for loop flow comparison in Python]
                <div class="problem-area">
                    <span class="problem-title">[실습 미션: 메뉴 선택 프로그램]</span>
                    <p>무한 반복(<code>while True</code>)을 사용하여 간단한 주문 시스템을 만드세요.</p>
                    <ol>
                        <li><b>total</b>(합계) 변수를 0으로 만듭니다.</li>
                        <li>사용자에게 메뉴 번호를 입력받습니다. (1: 아메리카노 4500원, 2: 종료)</li>
                        <li>1번을 누르면 <b>total</b>에 4500을 더하고 현재 합계를 출력합니다.</li>
                        <li>2번을 누르면 "종료합니다" 문구와 총액을 출력한 뒤 <b>break</b>로 반복을 멈춥니다.</li>
                    </ol>
                </div>
            `,
            en: `
                <p>A <b>while loop</b> executes a block of code as long as a specific <b>condition is True</b>.</p>
                <ul>
                    <li><b>for vs while:</b> Use <code>for</code> for a fixed number of repetitions, and <code>while</code> for condition-based repetitions.</li>
                    <li><b>Infinite Loop:</b> If the condition is always True, the loop never ends. You must include code to eventually make the condition False.</li>
                    <li><b>break:</b> Used to immediately exit the loop.</li>
                    <li><b>continue:</b> Skips the current iteration and jumps to the next one.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Task: Menu Selection Program]</span>
                    <p>Create a simple ordering system using an infinite loop (<code>while True</code>).</p>
                    <ol>
                        <li>Initialize a <b>total</b> variable to 0.</li>
                        <li>Get a menu number from the user. (1: Americano $4.5, 2: Exit)</li>
                        <li>If '1' is entered, add 4500 to <b>total</b> and print the current sum.</li>
                        <li>If '2' is entered, print "Exit", show the total, and stop the loop with <b>break</b>.</li>
                    </ol>
                </div>
            `,
            ru: `
                <p><b>Цикл while</b> выполняет блок кода до тех пор, пока определенное <b>условие остается истинным (True)</b>.</p>
                <ul>
                    <li><b>for vs while:</b> <code>for</code> используется для фиксированного количества повторений, а <code>while</code> — для повторений на основе условия.</li>
                    <li><b>Бесконечный цикл:</b> Если условие всегда истинно, цикл никогда не закончится. Обязательно добавьте код, который сделает условие ложным.</li>
                    <li><b>break:</b> Используется для немедленного выхода из цикла.</li>
                    <li><b>continue:</b> Пропускает текущую итерацию и переходит к следующей.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Задание: Программа выбора меню]</span>
                    <p>Создайте простую систему заказа, используя бесконечный цикл (<code>while True</code>).</p>
                    <ol>
                        <li>Создайте переменную <b>total</b> со значением 0.</li>
                        <li>Получите номер меню от пользователя. (1: Американо 4500, 2: Выход)</li>
                        <li>Если введено «1», прибавьте 4500 к <b>total</b> и выведите текущую сумму.</li>
                        <li>Если введено «2», выведите «Выход», итоговую сумму и остановите цикл с помощью <b>break</b>.</li>
                    </ol>
                </div>
            `
        },
        answer: {
            ko: 'total = 0\nwhile True:\n    choice = input("1:아메리카노(4500), 2:종료. 번호 입력: ")\n    if choice == "1":\n        total = total + 4500\n        print("현재 합계:", total)\n    elif choice == "2":\n        print("주문을 종료합니다. 총액:", total)\n        break\n    else:\n        print("잘못된 입력입니다.")',
            en: 'total = 0\nwhile True:\n    choice = input("1:Americano(4500), 2:Exit. Enter number: ")\n    if choice == "1":\n        total = total + 4500\n        print("Current total:", total)\n    elif choice == "2":\n        print("Exit. Total sum:", total)\n        break\n    else:\n        print("Invalid input.")',
            ru: 'total = 0\nwhile True:\n    choice = input("1:Американо(4500), 2:Выход. Введите номер: ")\n    if choice == "1":\n        total = total + 4500\n        print("Текущая сумма:", total)\n    elif choice == "2":\n        print("Завершение заказа. Итого:", total)\n        break\n    else:\n        print("Неверный ввод.")'
        }
    },
    {
        menu: { ko: '12: 함수(Function)', en: '12: Functions', ru: '12: Функции' },
        title: {
            ko: '12주차. 코드의 부품 만들기! 함수(Function)',
            en: 'Week 12. Making Code Parts! Functions',
            ru: 'Неделя 12. Создание частей кода! Функции'
        },
        theory: {
            ko: `
                <p><b>함수(Function)</b>는 자주 사용하는 코드를 하나로 묶어 필요할 때마다 꺼내 쓰는 '코드의 부품'과 같습니다.</p>
                <ul>
                    <li><b>def:</b> 함수를 정의할 때 사용합니다. <code>def 함수이름():</code> 형태로 작성합니다.</li>
                    <li><b>매개변수(Parameter):</b> 함수 내부로 값을 전달하는 통로입니다.</li>
                    <li><b>return:</b> 함수의 실행 결과를 다시 돌려주는 역할을 합니다.</li>
                    <li><b>호출:</b> 함수를 만들기만 해서는 실행되지 않습니다. <code>함수이름()</code>으로 불러줘야 합니다.</li>
                </ul>
                [Image of Python function structure with def, parameter, and return]
                <div class="problem-area">
                    <span class="problem-title">[실습 미션: 계산기 함수 만들기]</span>
                    <p>두 숫자를 전달받아 더한 값을 돌려주는 <b>add</b> 함수를 만드세요.</p>
                    <ol>
                        <li><b>def add(a, b):</b> 로 함수를 정의하세요.</li>
                        <li>함수 내부에서 <b>a + b</b>의 결과를 <b>return</b> 하세요.</li>
                        <li>사용자로부터 숫자 두 개를 입력받아 변수 <b>x, y</b>에 저장하세요.</li>
                        <li>함수를 호출하여 결과를 출력하세요.</li>
                    </ol>
                </div>
            `,
            en: `
                <p>A <b>Function</b> is like a "code part" that bundles frequently used code so you can reuse it whenever needed.</p>
                <ul>
                    <li><b>def:</b> Used to define a function. Written as <code>def function_name():</code>.</li>
                    <li><b>Parameter:</b> A pathway to pass values into the function.</li>
                    <li><b>return:</b> Sends the result of the function back to the caller.</li>
                    <li><b>Call:</b> A function doesn't run by itself. You must "call" it using <code>function_name()</code>.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Task: Calculator Function]</span>
                    <p>Create an <b>add</b> function that takes two numbers and returns their sum.</p>
                    <ol>
                        <li>Define the function using <b>def add(a, b):</b>.</li>
                        <li><b>return</b> the result of <b>a + b</b> inside the function.</li>
                        <li>Get two numbers from the user and store them in <b>x</b> and <b>y</b>.</li>
                        <li>Call the function and print the result.</li>
                    </ol>
                </div>
            `,
            ru: `
                <p><b>Функция (Function)</b> — это своего рода «деталь кода», которая объединяет часто используемый код для повторного использования.</p>
                <ul>
                    <li><b>def:</b> Используется для определения функции. Пишется как <code>def имя_функции():</code>.</li>
                    <li><b>Параметр:</b> Способ передачи значений внутрь функции.</li>
                    <li><b>return:</b> Возвращает результат выполнения функции обратно.</li>
                    <li><b>Вызов:</b> Функция не запустится сама по себе. Ее нужно «вызвать», написав <code>имя_функции()</code>.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Задание: Функция-калькулятор]</span>
                    <p>Создайте функцию <b>add</b>, которая принимает два числа и возвращает их сумму.</p>
                    <ol>
                        <li>Определите функцию с помощью <b>def add(a, b):</b>.</li>
                        <li>Используйте <b>return</b> для возврата результата <b>a + b</b> внутри функции.</li>
                        <li>Получите два числа от пользователя и сохраните их в <b>x</b> и <b>y</b>.</li>
                        <li>Вызовите функцию и выведите результат.</li>
                    </ol>
                </div>
            `
        },
        answer: {
            ko: 'def add(a, b):\n    return a + b\n\nx = int(input("첫 번째 숫자: "))\ny = int(input("두 번째 숫자: "))\nprint("결과:", add(x, y))',
            en: 'def add(a, b):\n    return a + b\n\nx = int(input("First number: "))\ny = int(input("Second number: "))\nprint("Result:", add(x, y))',
            ru: 'def add(a, b):\n    return a + b\n\nx = int(input("Первое число: "))\ny = int(input("Второе число: "))\nprint("Результат:", add(x, y))'
        }
    },
    {
        menu: { ko: '13: 딕셔너리(Dictionary)', en: '13: Dictionary', ru: '13: Словари' },
        title: {
            ko: '13주차. 이름표로 데이터 찾기! 딕셔너리',
            en: 'Week 13. Find Data with Labels! Dictionaries',
            ru: 'Неделя 13. Поиск данных по меткам! Словари'
        },
        theory: {
            ko: `
                <p><b>딕셔너리(Dictionary)</b>는 데이터를 '키(Key)'와 '값(Value)'의 쌍으로 저장하는 자료구조입니다. 실생활의 사전처럼 단어(Key)를 찾으면 뜻(Value)이 나오는 것과 같습니다.</p>
                <ul>
                    <li><b>구조:</b> 중괄호 <code>{ }</code>를 사용하며, <code>"키": 값</code> 형태로 저장합니다.</li>
                    <li><b>리스트 vs 딕셔너리:</b> 리스트는 순서(인덱스)로 데이터를 관리하지만, 딕셔너리는 이름표(Key)로 데이터를 관리하여 정보가 많을 때 읽기 쉽습니다.</li>
                    <li><b>중첩 구조:</b> 딕셔너리의 값으로 리스트를 넣어 여러 개의 데이터를 한꺼번에 관리할 수 있습니다.</li>
                    <li><b>items():</b> <code>for key, value in data.items():</code>를 사용하면 키와 값을 동시에 꺼낼 수 있습니다.</li>
                </ul>
                
                <div class="problem-area">
                    <span class="problem-title">[실습 미션: 학생 정보 관리하기]</span>
                    <p>학생의 이름, 전공, 그리고 3개의 성적 리스트를 담은 딕셔너리를 만드세요.</p>
                    <ol>
                        <li><b>student</b>라는 빈 딕셔너리를 만드세요.</li>
                        <li>이름("name")과 전공("major")을 입력받아 저장하세요.</li>
                        <li>반복문을 사용하여 3개의 점수를 입력받아 <b>scores</b> 리스트에 넣고, 이를 딕셔너리에 추가하세요.</li>
                        <li>마지막으로 학생의 정보를 출력하고 점수들의 평균을 계산해 보세요.</li>
                    </ol>
                </div>
            `,
            en: `
                <p>A <b>Dictionary</b> is a data structure that stores data as 'Key-Value' pairs. It's like looking up a word (Key) in a real-life dictionary to find its definition (Value).</p>
                <ul>
                    <li><b>Structure:</b> Uses curly braces <code>{ }</code> and stores data as <code>"Key": Value</code>.</li>
                    <li><b>List vs Dictionary:</b> Lists manage data by order (index), while dictionaries manage data by labels (Key), making them easier to read when there is a lot of information.</li>
                    <li><b>Nested Structure:</b> You can store a list as a value in a dictionary to manage multiple related data points.</li>
                    <li><b>items():</b> Using <code>for key, value in data.items():</code> allows you to access both the key and value at once.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Task: Student Information Management]</span>
                    <p>Create a dictionary containing a student's name, major, and a list of 3 scores.</p>
                    <ol>
                        <li>Create an empty dictionary named <b>student</b>.</li>
                        <li>Get the student's "name" and "major" as input and store them.</li>
                        <li>Use a loop to get 3 scores, put them in a <b>scores</b> list, and add it to the dictionary.</li>
                        <li>Print the student information and calculate the average of the scores.</li>
                    </ol>
                </div>
            `,
            ru: `
                <p><b>Словарь (Dictionary)</b> — это структура данных, которая хранит информацию в виде пар «Ключ-Значение». Это похоже на поиск слова (Key) в обычном словаре для получения его значения (Value).</p>
                <ul>
                    <li><b>Структура:</b> Используются фигурные скобки <code>{ }</code>, данные записываются как <code>"Ключ": Значение</code>.</li>
                    <li><b>Список vs Словарь:</b> Списки управляют данными по порядку (индексу), а словари — по меткам (ключам), что упрощает чтение при большом объеме данных.</li>
                    <li><b>Вложенная структура:</b> Вы можете хранить список как значение в словаре для управления несколькими связанными данными.</li>
                    <li><b>items():</b> Использование <code>for key, value in data.items():</code> позволяет одновременно получить доступ и к ключу, и к значению.</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Задание: Управление информацией о студенте]</span>
                    <p>Создайте словарь, содержащий имя студента, специальность и список из 3 оценок.</p>
                    <ol>
                        <li>Создайте пустой словарь <b>student</b>.</li>
                        <li>Получите «name» и «major» студента через ввод и сохраните их.</li>
                        <li>Используйте цикл для ввода 3 оценок, поместите их в список <b>scores</b> и добавьте его в словарь.</li>
                        <li>Выведите информацию о студенте и рассчитайте средний балл.</li>
                    </ol>
                </div>
            `
        },
        answer: {
            ko: 'student = {}\nstudent["name"] = input("이름: ")\nstudent["major"] = input("전공: ")\n\nscores = []\nfor i in range(3):\n    s = int(input("점수 입력: "))\n    scores.append(s)\nstudent["scores"] = scores\n\nprint("학생 정보:", student)\n\ntotal = 0\nfor s in student["scores"]:\n    total = total + s\nprint("평균:", total / len(student["scores"]))',
            en: 'student = {}\nstudent["name"] = input("Name: ")\nstudent["major"] = input("Major: ")\n\nscores = []\nfor i in range(3):\n    s = int(input("Enter score: "))\n    scores.append(s)\nstudent["scores"] = scores\n\nprint("Student Info:", student)\n\ntotal = 0\nfor s in student["scores"]:\n    total = total + s\nprint("Average:", total / len(student["scores"]))',
            ru: 'student = {}\nstudent["name"] = input("Имя: ")\nstudent["major"] = input("Специальность: ")\n\nscores = []\nfor i in range(3):\n    s = int(input("Введите балл: "))\n    scores.append(s)\nstudent["scores"] = scores\n\nprint("Инфо о студенте:", student)\n\ntotal = 0\nfor s in student["scores"]:\n    total = total + s\nprint("Средний балл:", total / len(student["scores"]))'
        }
    },
    {
        menu: { ko: '14: 라이브러리 활용', en: '14: Using Libraries', ru: '14: Использование библиотек' },
        title: {
            ko: '14주차. 파이썬의 도구 상자! 라이브러리(Library)',
            en: 'Week 14. Python\'s Toolbox! Libraries',
            ru: 'Неделя 14. Инструментарий Python! Библиотеки'
        },
        theory: {
            ko: `
                <p><b>라이브러리(Library)</b>는 전 세계 개발자들이 미리 만들어 놓은 '코드 꾸러미'입니다. 모든 기능을 처음부터 만들 필요 없이 필요한 도구를 가져다 쓰면 됩니다.</p>
                <ul>
                    <li><b>import:</b> 라이브러리를 불러올 때 사용하는 명령어입니다. (예: <code>import random</code>)</li>
                    <li><b>random 모듈:</b> 무작위 숫자를 생성하거나 리스트에서 무작위 요소를 뽑을 때 사용합니다.</li>
                    <li><b>randint(1, 3):</b> 1, 2, 3 중 하나의 숫자를 랜덤하게 뽑아줍니다.</li>
                </ul>
                <p><i>비유: 라이브러리는 가구 조립 키트와 같습니다. 나무를 깎을 필요 없이 이미 만들어진 부품을 조립만 하면 됩니다.</i></p>
                
                <div class="problem-area">
                    <span class="problem-title">[실습 미션: 1~3 숫자 맞추기]</span>
                    <p>컴퓨터가 숨겨놓은 1에서 3 사이의 숫자를 단번에 맞춰보세요!</p>
                    <ol>
                        <li><code>import random</code>을 코드 맨 윗줄에 적습니다.</li>
                        <li><b>answer</b> 변수에 1~3 사이의 랜덤 숫자를 저장합니다.</li>
                        <li><code>while True</code>를 사용해 정답을 맞힐 때까지 계속 입력받습니다.</li>
                        <li>정답을 맞히면 "정답입니다!"를 출력하고 <b>break</b>로 탈출하세요.</li>
                    </ol>
                </div>
            `,
            en: `
                <p>A <b>Library</b> is a collection of pre-written code. You don't have to build everything from scratch; just bring the tools you need.</p>
                <ul>
                    <li><b>import:</b> The command used to load a library. (e.g., <code>import random</code>)</li>
                    <li><b>random module:</b> Used to generate random numbers.</li>
                    <li><b>randint(1, 3):</b> Picks a random integer between 1 and 3.</li>
                </ul>
                <p><i>Analogy: A library is like a furniture assembly kit. You don't need to cut wood; you just assemble pre-made parts.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Task: Guess 1-3]</span>
                    <p>Try to guess the number between 1 and 3 that the computer has hidden!</p>
                    <ol>
                        <li>Write <code>import random</code> at the top.</li>
                        <li>Save a random number between 1 and 3 in the <b>answer</b> variable.</li>
                        <li>Use <code>while True</code> to keep taking input until the correct answer is guessed.</li>
                        <li>If correct, print "Correct!" and use <b>break</b> to exit.</li>
                    </ol>
                </div>
            `,
            ru: `
                <p><b>Библиотека (Library)</b> — это набор готового кода. Вам не нужно писать всё с нуля; просто используйте нужные инструменты.</p>
                <ul>
                    <li><b>import:</b> Команда для загрузки библиотеки. (например, <code>import random</code>)</li>
                    <li><b>модуль random:</b> Используется для генерации случайных чисел.</li>
                    <li><b>randint(1, 3):</b> Выбирает случайное целое число от 1 до 3.</li>
                </ul>
                <p><i>Аналогия: Библиотека похожа на набор для сборки мебели. Вам не нужно вырезать дерево, вы просто собираете готовые детали.</i></p>
                <div class="problem-area">
                    <span class="problem-title">[Задание: Угадай 1-3]</span>
                    <p>Попробуйте угадать число от 1 до 3, которое загадал компьютер!</p>
                    <ol>
                        <li>Напишите <code>import random</code> в первой строке.</li>
                        <li>Сохраните случайное число от 1 до 3 в переменной <b>answer</b>.</li>
                        <li>Используйте <code>while True</code>, чтобы запрашивать ввод, пока число не будет угадано.</li>
                        <li>Если верно, выведите "Верно!" и используйте <b>break</b>.</li>
                    </ol>
                </div>
            `
        },
        answer: {
            ko: 'import random\nanswer = random.randint(1, 3)\nwhile True:\n    guess = int(input("1~3 사이 숫자 입력: "))\n    if guess == answer:\n        print("정답입니다!")\n        break\n    else:\n        print("틀렸습니다. 다시 시도하세요.")',
            en: 'import random\nanswer = random.randint(1, 3)\nwhile True:\n    guess = int(input("Guess a number between 1-3: "))\n    if guess == answer:\n        print("Correct!")\n        break\n    else:\n        print("Wrong. Try again.")',
            ru: 'import random\nanswer = random.randint(1, 3)\nwhile True:\n    guess = int(input("Число от 1 до 3: "))\n    if guess == answer:\n        print("Верно!")\n        break\n    else:\n        print("Неверно. Попробуйте еще раз.")'
        }
    },
    // 15강: 최종 미니 프로젝트
    {
        menu: { ko: '15: 최종 프로젝트', en: '15: Final Project', ru: '15: Финальный проект' },
        title: {
            ko: '15주차. 실전! 최고 성적 학생 찾기 프로그램',
            en: 'Week 15. Project! Finding the Top Student',
            ru: 'Неделя 15. Проект! Поиск лучшего студента'
        },
        theory: {
            ko: `
                <p>학기 동안 배운 리스트, 딕셔너리, 반복문을 모두 활용하는 <b>최종 프로젝트</b>입니다. 실제 데이터를 관리하는 기초적인 원리를 실습합니다.</p>
                
                <div class="problem-area">
                    <span class="problem-title">[미션: 기말고사 성적 분석기]</span>
                    <p>여러 명의 학생 정보를 입력받아, 누가 가장 높은 점수를 받았는지 출력하세요.</p>
                    <ol>
                        <li><b>students</b> 리스트에 학생 이름과 점수를 딕셔너리로 저장합니다. (종료는 'exit' 입력)</li>
                        <li>입력이 끝나면 리스트를 순회하며 <b>최고 점수</b>를 가진 학생을 찾습니다.</li>
                        <li>찾은 학생의 이름과 점수를 출력하세요.</li>
                    </ol>
                </div>
            `,
            en: `
                <p>This is the <b>Final Project</b> using lists, dictionaries, and loops learned throughout the semester. You will practice the basic principles of managing real data.</p>
                <div class="problem-area">
                    <span class="problem-title">[Mission: Grade Analyzer]</span>
                    <p>Input multiple students' information and output who received the highest score.</p>
                    <ol>
                        <li>Store names and scores in the <b>students</b> list as dictionaries. (Type 'exit' to stop)</li>
                        <li>After inputting, iterate through the list to find the student with the <b>highest score</b>.</li>
                        <li>Print the student's name and score.</li>
                    </ol>
                </div>
            `,
            ru: `
                <p>Это <b>финальный проект</b>, использующий списки, словари и циклы. Вы попрактикуетесь в управлении реальными данными.</p>
                <div class="problem-area">
                    <span class="problem-title">[Миссия: Анализатор оценок]</span>
                    <p>Введите информацию о нескольких студентах и выведите, кто получил самый высокий балл.</p>
                    <ol>
                        <li>Сохраните имена и баллы в списке <b>students</b> в виде словарей. (Введите 'exit' для завершения)</li>
                        <li>После ввода переберите список, чтобы найти студента с <b>самым высоким баллом</b>.</li>
                        <li>Выведите имя и балл этого студента.</li>
                    </ol>
                </div>
            `
        },
        answer: {
            ko: 'students = []\nwhile True:\n    name = input("이름 (exit:종료): ")\n    if name == "exit": break\n    score = int(input("점수: "))\n    students.append({"name": name, "score": score})\n\nif students:\n    best = students[0]\n    for s in students:\n        if s["score"] > best["score"]: best = s\n    print("최고 점수 학생:", best["name"], "(", best["score"], "점)")',
            en: 'students = []\nwhile True:\n    name = input("Name (exit to stop): ")\n    if name == "exit": break\n    score = int(input("Score: "))\n    students.append({"name": name, "score": score})\n\nif students:\n    best = students[0]\n    for s in students:\n        if s["score"] > best["score"]: best = s\n    print("Top Student:", best["name"], "Score:", best["score"])',
            ru: 'students = []\nwhile True:\n    name = input("Имя (exit для выхода): ")\n    if name == "exit": break\n    score = int(input("Балл: "))\n    students.append({"name": name, "score": score})\n\nif students:\n    best = students[0]\n    for s in students:\n        if s["score"] > best["score"]: best = s\n    print("Лучший студент:", best["name"], "Балл:", best["score"])'
        }
    }
];
window.pythonLessons = lessons.map((lesson, index) => ({
    id: lesson.id || `lesson-${index + 1}`,
    ...lesson
}));
