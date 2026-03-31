const lessons = [
    {
        menu: { ko: '2: 입력/출력', en: '2: Input/Output', ru: '2: Ввод/Вывод' },
        title: {
            ko: '1. 컴퓨터의 입과 귀',
            en: "1. The Computer's Mouth and Ears",
            ru: '1. Рот и уши компьютера'
        },
        theory: {
            ko: `
                <p><b>print()</b>는 컴퓨터의 <b>입</b>입니다. 화면에 정보를 보여줍니다.</p>
                <p><b>input()</b>은 컴퓨터의 <b>귀</b>입니다. 사용자의 입력을 받습니다.</p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    사용자에게 "이름이 무엇인가요?"라고 묻고 입력을 받는 코드를 작성하세요.
                </div>
            `,
            en: `
                <p><b>print()</b> is the computer's <b>mouth</b>. It shows information on the screen.</p>
                <p><b>input()</b> is the computer's <b>ears</b>. It receives input from the user.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Ask the user, "What is your name?" and receive the input.
                </div>
            `,
            ru: `
                <p><b>print()</b> — это <b>рот</b> компьютера. Он выводит информацию на экран.</p>
                <p><b>input()</b> — это <b>уши</b> компьютера. Он принимает ввод от пользователя.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Спросите пользователя: "Как тебя зовут?" и получите ответ.
                </div>
            `
        },
        answer: {
            ko: 'print("이름이 무엇인가요?")\ninput()',
            en: 'print("What is your name?")\ninput()',
            ru: 'print("Как тебя зовут?")\ninput()'
        }
    },
    {
        menu: { ko: '2: 변수', en: '2: Variables', ru: '2: Переменные' },
        title: {
            ko: '2. 컴퓨터의 뇌: 변수',
            en: "2. The Computer's Brain: Variables",
            ru: '2. Мозг компьютера: переменные'
        },
        theory: {
            ko: `
                <p><b>변수</b>는 데이터를 저장하는 공간입니다.</p>
                <p>예: <code>name = input()</code> → 사용자의 이름을 name에 저장합니다.</p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    이름을 <b>name</b> 변수에 저장하고, "반가워요, [이름]"을 출력하세요.
                </div>
            `,
            en: `
                <p>A <b>variable</b> is a space that stores data.</p>
                <p>Example: <code>name = input()</code> → stores the user's name in <code>name</code>.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Save the name in the variable <b>name</b> and print "Nice to meet you, [name]".
                </div>
            `,
            ru: `
                <p><b>Переменная</b> — это место для хранения данных.</p>
                <p>Пример: <code>name = input()</code> → сохраняет имя пользователя в <code>name</code>.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Сохраните имя в переменную <b>name</b> и выведите: "Привет, [имя]".
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
            ko: '3. 문자열 연결하기',
            en: '3. Connecting Strings',
            ru: '3. Соединение строк'
        },
        theory: {
            ko: `
                <p><b>+</b>를 사용하면 문자열을 이어 붙일 수 있습니다.</p>
                <p><b>주의:</b> <b>+</b>는 자동으로 공백을 넣어주지 않습니다.</p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    <b>+</b>를 사용해서 "저도 [음식] 좋아해요."를 출력하세요.
                </div>
            `,
            en: `
                <p>You can connect strings with <b>+</b>.</p>
                <p><b>Note:</b> <b>+</b> does not add spaces automatically.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Use <b>+</b> to print: "I like [food] too."
                </div>
            `,
            ru: `
                <p>Вы можете соединять строки с помощью <b>+</b>.</p>
                <p><b>Внимание:</b> <b>+</b> не добавляет пробел автоматически.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Используйте <b>+</b>, чтобы вывести: "Я тоже люблю [еда]".
                </div>
            `
        },
        answer: {
            ko: 'food = input("좋아하는 음식: ")\nprint("저도 " + food + " 좋아해요.")',
            en: 'food = input("Favorite food: ")\nprint("I like " + food + " too.")',
            ru: 'food = input("Любимая еда: ")\nprint("Я тоже люблю " + food + ".")'
        }
    },
    {
        menu: { ko: '3: 콤마 연결', en: '3: String with Comma', ru: '3: Строки через запятую' },
        title: {
            ko: '4. 콤마로 연결하기',
            en: '4. Connecting with Commas',
            ru: '4. Соединение через запятую'
        },
        theory: {
            ko: `
                <p><b>print()</b> 안에서 콤마를 사용하면 자동으로 공백이 들어갑니다.</p>
                <p>예: <code>print("안녕", "파이썬")</code> → 안녕 파이썬</p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    좋아하는 영화를 물어보고, "아하! [영화이름]를 보셨군요."를 한 줄로 출력하세요.
                </div>
            `,
            en: `
                <p>If you use commas inside <b>print()</b>, spaces are added automatically.</p>
                <p>Example: <code>print("Hello", "Python")</code> → Hello Python</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Ask about a favorite movie and print: "Aha! You watched [movie]."
                </div>
            `,
            ru: `
                <p>Если использовать запятую в <b>print()</b>, пробел добавляется автоматически.</p>
                <p>Пример: <code>print("Привет", "Python")</code> → Привет Python</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Спросите о любимом фильме и выведите: "Ага! Вы посмотрели [фильм]".
                </div>
            `
        },
        answer: {
            ko: 'movie = input("좋아하는 영화는? ")\nprint("아하!", movie, "를 보셨군요.")',
            en: 'movie = input("What is your favorite movie? ")\nprint("Aha!", movie, "is your movie.")',
            ru: 'movie = input("Ваш любимый фильм? ")\nprint("Ага!", movie, "вы посмотрели.")'
        }
    },
    {
        menu: { ko: '3: 사칙연산', en: '3: Math', ru: '3: Арифметика' },
        title: {
            ko: '5. 사칙연산',
            en: '5. Basic Math',
            ru: '5. Арифметические операции'
        },
        theory: {
            ko: `
                <p>파이썬으로 계산기를 만들 수 있습니다.</p>
                <ul>
                    <li><b>+</b> : 더하기</li>
                    <li><b>-</b> : 빼기</li>
                    <li><b>*</b> : 곱하기</li>
                    <li><b>/</b> : 나누기</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    변수 <b>a</b>에 10, <b>b</b>에 5를 넣고 두 수를 곱한 결과를 출력하세요.
                </div>
            `,
            en: `
                <p>You can make a calculator with Python.</p>
                <ul>
                    <li><b>+</b> : addition</li>
                    <li><b>-</b> : subtraction</li>
                    <li><b>*</b> : multiplication</li>
                    <li><b>/</b> : division</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Put 10 in <b>a</b>, 5 in <b>b</b>, and print the multiplication result.
                </div>
            `,
            ru: `
                <p>В Python можно сделать калькулятор.</p>
                <ul>
                    <li><b>+</b> : сложение</li>
                    <li><b>-</b> : вычитание</li>
                    <li><b>*</b> : умножение</li>
                    <li><b>/</b> : деление</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Присвойте <b>a</b> значение 10, <b>b</b> значение 5 и выведите результат умножения.
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
            ko: '6. input() 안에 안내문 넣기',
            en: '6. Adding a Message inside input()',
            ru: '6. Сообщение внутри input()'
        },
        theory: {
            ko: `
                <p><code>input()</code> 괄호 안에 문자열을 넣으면 사용자에게 힌트를 줄 수 있습니다.</p>
                <p>예: <code>name = input("이름을 입력하세요: ")</code></p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    "나이를 입력하세요: "라는 문구가 보이도록 input을 작성하세요.
                </div>
            `,
            en: `
                <p>If you put a string inside <code>input()</code>, the user can see a hint.</p>
                <p>Example: <code>name = input("Enter your name: ")</code></p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Create an <code>input()</code> that shows "Enter your age: ".
                </div>
            `,
            ru: `
                <p>Если написать строку внутри <code>input()</code>, пользователь увидит подсказку.</p>
                <p>Пример: <code>name = input("Введите имя: ")</code></p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Создайте <code>input()</code> с текстом "Введите возраст: ".
                </div>
            `
        },
        answer: {
            ko: 'age = input("나이를 입력하세요: ")',
            en: 'age = input("Enter your age: ")',
            ru: 'age = input("Введите возраст: ")'
        }
    },
    {
        menu: { ko: '4: 자료형', en: '4: Data Types', ru: '4: Типы данных' },
        title: {
            ko: '7. 자료형',
            en: '7. Data Types',
            ru: '7. Типы данных'
        },
        theory: {
            ko: `
                <p><b>str</b>: 문자열</p>
                <p><b>int</b>: 정수</p>
                <p><b>float</b>: 소수</p>
                <p><code>int(input())</code>를 사용하면 입력한 문자를 숫자로 바꿀 수 있습니다.</p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    두 숫자를 입력받아 합계를 출력하세요.
                </div>
            `,
            en: `
                <p><b>str</b>: text string</p>
                <p><b>int</b>: integer</p>
                <p><b>float</b>: decimal number</p>
                <p>Use <code>int(input())</code> to change input text into a number.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Input two numbers and print their sum.
                </div>
            `,
            ru: `
                <p><b>str</b>: строка</p>
                <p><b>int</b>: целое число</p>
                <p><b>float</b>: дробное число</p>
                <p>Используйте <code>int(input())</code>, чтобы превратить введённый текст в число.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Введите два числа и выведите их сумму.
                </div>
            `
        },
        answer: {
            ko: 'a = int(input("A: "))\nb = int(input("B: "))\nprint(a + b)',
            en: 'a = int(input("A: "))\nb = int(input("B: "))\nprint(a + b)',
            ru: 'a = int(input("A: "))\nb = int(input("B: "))\nprint(a + b)'
        }
    },
    {
        menu: { ko: '4: 형변환', en: '4: Type Conversion', ru: '4: Преобразование типов' },
        title: {
            ko: '8. 숫자와 문자 변환',
            en: '8. Converting Numbers and Strings',
            ru: '8. Преобразование чисел и строк'
        },
        theory: {
            ko: `
                <p>숫자 계산을 하려면 <b>int()</b>가 필요합니다.</p>
                <ul>
                    <li><b>int()</b>: 문자를 숫자로 바꾸기</li>
                    <li><b>str()</b>: 숫자를 문자로 바꾸기</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    입력받은 값에 10을 더해 출력하세요.
                </div>
            `,
            en: `
                <p>You need <b>int()</b> for math with numbers.</p>
                <ul>
                    <li><b>int()</b>: text to number</li>
                    <li><b>str()</b>: number to text</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Add 10 to the input value and print the result.
                </div>
            `,
            ru: `
                <p>Для вычислений с числами нужен <b>int()</b>.</p>
                <ul>
                    <li><b>int()</b>: текст в число</li>
                    <li><b>str()</b>: число в текст</li>
                </ul>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Прибавьте 10 к введённому значению и выведите результат.
                </div>
            `
        },
        answer: {
            ko: 'num = int(input("숫자 입력: "))\nprint(num + 10)',
            en: 'num = int(input("Enter a number: "))\nprint(num + 10)',
            ru: 'num = int(input("Введите число: "))\nprint(num + 10)'
        }
    },
    {
        menu: { ko: '4: 프로젝트 계산기', en: '4: Project Calculator', ru: '4: Проект: калькулятор' },
        title: {
            ko: '9. 최종 실습: 사칙연산 계산기',
            en: '9. Final Practice: Calculator',
            ru: '9. Итоговая практика: калькулятор'
        },
        theory: {
            ko: `
                <p>두 개의 숫자를 입력받아 모든 계산 결과를 보여주는 프로그램을 만듭니다.</p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    첫 번째 숫자와 두 번째 숫자를 입력받고, +, -, *, / 결과를 모두 출력하세요.
                </div>
            `,
            en: `
                <p>Create a program that takes two numbers and shows all calculation results.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Input the first and second numbers, then print the results of +, -, *, and /.
                </div>
            `,
            ru: `
                <p>Создайте программу, которая принимает два числа и показывает все результаты вычислений.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Введите первое и второе число, затем выведите результаты +, -, *, и /.
                </div>
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
        title: { ko: '5. 불린(Bool) 자료형', en: '5. Boolean Data Type', ru: '5. Логический тип данных (Bool)' },
        theory: {
            ko: `
                <p>조건이 맞으면 <b>True</b>, 틀리면 <b>False</b>입니다.</p>
                <span class="theory-callout">0은 False, 나머지는 True입니다. 빈 글자("")는 False입니다.</span>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    <code>print(10 > 5)</code>의 결과를 확인해 보세요.
                </div>
            `,
            en: `
                <p>If a condition is correct, it is <b>True</b>; if wrong, it is <b>False</b>.</p>
                <span class="theory-callout">0 is False, other numbers are True. Empty string ("") is False.</span>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Check the result of <code>print(10 > 5)</code>.
                </div>
            `,
            ru: `
                <p>Если условие верно — это <b>True</b>, если неверно — <b>False</b>.</p>
                <span class="theory-callout">0 — это False, остальные числа — True. Пустая строка ("") — это False.</span>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Проверьте результат <code>print(10 > 5)</code>.
                </div>
            `
        },
        answer: { ko: 'print(10 > 5)', en: 'print(10 > 5)', ru: 'print(10 > 5)' }
    },
    {
        menu: { ko: '5: 비교 연산자', en: '5: Comparison', ru: '5: Сравнение' },
        title: { ko: '5. == 와 = 의 차이', en: '5. Difference between == and =', ru: '5. Разница между == и =' },
        theory: {
            ko: `
                <p><b>=</b>는 저장(할당), <b>==</b>는 비교(같니?)입니다.</p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    score에 90을 저장하고, score가 90과 같은지(==) 출력하세요.
                </div>
            `,
            en: `
                <p><b>=</b> is for assignment (store), <b>==</b> is for comparison (Is it equal?).</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Store 90 in <b>score</b>, then print if score is equal (==) to 90.
                </div>
            `,
            ru: `
                <p><b>=</b> для сохранения (присваивания), <b>==</b> для сравнения (Равно ли?).</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Сохраните 90 в <b>score</b> и выведите, равно ли (==) score 90.
                </div>
            `
        },
        answer: { ko: 'score = 90\nprint(score == 90)', en: 'score = 90\nprint(score == 90)', ru: 'score = 90\nprint(score == 90)' }
    },
    {
        menu: { ko: '5: if 조건문', en: '5: if Statement', ru: '5: Условие if' },
        title: { ko: '5. if 문과 들여쓰기', en: '5. if and Indentation', ru: '5. if и отступы' },
        theory: {
            ko: `
                <p><b>if</b> 문을 쓸 때는 <b>콜론(:)</b>과 <b>들여쓰기(Tab)</b>가 필수입니다.</p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    만약 10이 5보다 크다면 "Success"를 출력하는 코드를 만드세요.
                </div>
            `,
            en: `
                <p>When using <b>if</b>, the <b>colon (:)</b> and <b>indentation (Tab)</b> are required.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Create a code: if 10 is greater than 5, print "Success".
                </div>
            `,
            ru: `
                <p>При использовании <b>if</b> обязательны <b>двоеточие (:)</b> и <b>отступ (Tab)</b>.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Напишите код: если 10 больше 5, вывести "Success".
                </div>
            `
        },
        answer: { ko: 'if 10 > 5:\n    print("Success")', en: 'if 10 > 5:\n    print("Success")', ru: 'if 10 > 5:\n    print("Success")' }
    },
    {
        menu: { ko: '5: 커피 알고리즘', en: '5: Coffee Project', ru: '5: Проект Кофе' },
        title: { ko: '5. if-else 연습', en: '5. if-else Practice', ru: '5. Практика if-else' },
        theory: {
            ko: `
                <p>3000원보다 적으면 커피를 못 마시는 프로그램을 만듭니다.</p>
                <div class="problem-area">
                    <span class="problem-title">[문제]</span>
                    돈을 입력받아 3000원 미만이면 "No coffee", 아니면 "Coffee"를 출력하세요.
                </div>
            `,
            en: `
                <p>Create a program to decide if you can buy coffee based on your money.</p>
                <div class="problem-area">
                    <span class="problem-title">[Task]</span>
                    Input money: if it's less than 3000, print "No coffee", otherwise print "Coffee".
                </div>
            `,
            ru: `
                <p>Создайте программу, решающую, можете ли вы купить кофе.</p>
                <div class="problem-area">
                    <span class="problem-title">[Задача]</span>
                    Введите сумму: если меньше 3000 — "No coffee", иначе — "Coffee".
                </div>
            `
        },
        answer: { 
            ko: 'money = int(input("돈: "))\nif money < 3000:\n    print("No coffee")\nelse:\n    print("Coffee")',
            en: 'money = int(input("Money: "))\nif money < 3000:\n    print("No coffee")\nelse:\n    print("Coffee")',
            ru: 'money = int(input("Деньги: "))\nif money < 3000:\n    print("No coffee")\nelse:\n    print("Coffee")'
        }
    },
];
window.pythonLessons = lessons.map((lesson, index) => ({
    id: lesson.id || `lesson-${index + 1}`,
    ...lesson
}));
