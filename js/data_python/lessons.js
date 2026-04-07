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
    ,
{
    menu: { ko: '6: elif', en: '6: elif', ru: '6: elif' },
    title: {
        ko: '6. elif로 여러 조건 나누기',
        en: '6. Using elif for Multiple Conditions',
        ru: '6. Использование elif для нескольких условий'
    },
    theory: {
        ko: `
            <p><b>elif</b>는 "그렇지 않고, 만약에"라는 뜻입니다.</p>
            <p>조건이 여러 개 있을 때 <b>if → elif → else</b> 형태로 사용합니다.</p>
            <p>중요한 점은 <b>위에서부터 차례대로 검사</b>한다는 것입니다.</p>
            <p>그래서 점수 판정은 <b>큰 값부터</b> 써야 합니다.</p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                점수를 입력받아 90 이상이면 A, 80 이상이면 B, 70 이상이면 C, 60 이상이면 D, 나머지는 F를 출력하세요.
            </div>
        `,
        en: `
            <p><b>elif</b> means "if not, then if".</p>
            <p>Use <b>if → elif → else</b> when there are many conditions.</p>
            <p>The program checks conditions <b>from top to bottom</b>.</p>
            <p>So, for score grading, write the <b>highest score first</b>.</p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Input a score. Print A for 90 or more, B for 80 or more, C for 70 or more, D for 60 or more, and F for the rest.
            </div>
        `,
        ru: `
            <p><b>elif</b> означает "иначе, если".</p>
            <p>Используйте <b>if → elif → else</b>, когда условий несколько.</p>
            <p>Программа проверяет условия <b>сверху вниз</b>.</p>
            <p>Поэтому в оценках нужно писать <b>сначала большие значения</b>.</p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Введите балл. Выведите A для 90 и выше, B для 80 и выше, C для 70 и выше, D для 60 и выше, иначе F.
            </div>
        `
    },
    answer: {
        ko: 'score = int(input("점수를 입력하세요: "))\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("F")',
        en: 'score = int(input("Enter your score: "))\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("F")',
        ru: 'score = int(input("Введите балл: "))\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("F")'
    }
},
{
    menu: { ko: '6: and / or', en: '6: and / or', ru: '6: and / or' },
    title: {
        ko: '6. and와 or 조건식',
        en: '6. and and or Conditions',
        ru: '6. Условия and и or'
    },
    theory: {
        ko: `
            <p><b>and</b>는 두 조건이 <b>모두 참</b>일 때 참입니다.</p>
            <p><b>or</b>는 두 조건 중 <b>하나라도 참</b>이면 참입니다.</p>
            <p>예를 들어 점수와 출석률을 함께 검사할 수 있습니다.</p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                점수와 출석률을 입력받아, 점수가 70 이상이고 출석률이 80 이상이면 "합격", 아니면 "불합격"을 출력하세요.
            </div>
        `,
        en: `
            <p><b>and</b> is true when <b>both conditions</b> are true.</p>
            <p><b>or</b> is true when <b>at least one condition</b> is true.</p>
            <p>For example, you can check score and attendance together.</p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Input score and attendance. If score is 70 or more and attendance is 80 or more, print "Pass", otherwise print "Fail".
            </div>
        `,
        ru: `
            <p><b>and</b> истинно, когда <b>оба условия</b> истинны.</p>
            <p><b>or</b> истинно, когда <b>хотя бы одно условие</b> истинно.</p>
            <p>Например, можно проверять балл и посещаемость вместе.</p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Введите балл и посещаемость. Если балл 70 и выше и посещаемость 80 и выше, выведите "Pass", иначе "Fail".
            </div>
        `
    },
    answer: {
        ko: 'score = int(input("점수를 입력하세요: "))\nattendance = int(input("출석률을 입력하세요: "))\nif score >= 70 and attendance >= 80:\n    print("합격")\nelse:\n    print("불합격")',
        en: 'score = int(input("Enter your score: "))\nattendance = int(input("Enter attendance: "))\nif score >= 70 and attendance >= 80:\n    print("Pass")\nelse:\n    print("Fail")',
        ru: 'score = int(input("Введите балл: "))\nattendance = int(input("Введите посещаемость: "))\nif score >= 70 and attendance >= 80:\n    print("Pass")\nelse:\n    print("Fail")'
    }
},
{
    menu: { ko: '6: 장학금 조건', en: '6: Scholarship Condition', ru: '6: Условие стипендии' },
    title: {
        ko: '6. or로 장학금 조건 만들기',
        en: '6. Using or for Scholarship Conditions',
        ru: '6. Использование or для условий стипендии'
    },
    theory: {
        ko: `
            <p><b>or</b>는 여러 조건 중 하나만 만족해도 됩니다.</p>
            <p>예를 들어 점수가 매우 높거나, 출석률이 매우 높으면 장학금을 줄 수 있습니다.</p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                점수와 출석률을 입력받아, 점수가 90 이상이거나 출석률이 95 이상이면 "장학금", 아니면 "해당 없음"을 출력하세요.
            </div>
        `,
        en: `
            <p><b>or</b> means only one condition needs to be true.</p>
            <p>For example, a student can get a scholarship with a very high score or very high attendance.</p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Input score and attendance. If score is 90 or more or attendance is 95 or more, print "Scholarship", otherwise print "None".
            </div>
        `,
        ru: `
            <p><b>or</b> означает, что достаточно одного истинного условия.</p>
            <p>Например, студент может получить стипендию за очень высокий балл или очень высокую посещаемость.</p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Введите балл и посещаемость. Если балл 90 и выше или посещаемость 95 и выше, выведите "Scholarship", иначе "None".
            </div>
        `
    },
    answer: {
        ko: 'score = int(input("점수를 입력하세요: "))\nattendance = int(input("출석률을 입력하세요: "))\nif score >= 90 or attendance >= 95:\n    print("장학금")\nelse:\n    print("해당 없음")',
        en: 'score = int(input("Enter your score: "))\nattendance = int(input("Enter attendance: "))\nif score >= 90 or attendance >= 95:\n    print("Scholarship")\nelse:\n    print("None")',
        ru: 'score = int(input("Введите балл: "))\nattendance = int(input("Введите посещаемость: "))\nif score >= 90 or attendance >= 95:\n    print("Scholarship")\nelse:\n    print("None")'
    }
},
{
    menu: { ko: '6: 중첩 if', en: '6: Nested if', ru: '6: Вложенный if' },
    title: {
        ko: '6. 중첩 if',
        en: '6. Nested if',
        ru: '6. Вложенный if'
    },
    theory: {
        ko: `
            <p><b>중첩 if</b>는 <b>if 안에 if</b>가 들어가는 구조입니다.</p>
            <p>먼저 큰 조건을 확인하고, 그 안에서 다시 자세한 조건을 검사할 수 있습니다.</p>
            <p>이때 가장 중요한 것은 <b>들여쓰기</b>입니다.</p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                점수를 입력받아 60 이상이면 "합격입니다."를 출력하고, 그 안에서 다시 점수에 따라 A, B, C, D 등급을 출력하세요. 60 미만이면 "불합격입니다."를 출력하세요.
            </div>
        `,
        en: `
            <p><b>Nested if</b> means an <b>if inside another if</b>.</p>
            <p>You can check a big condition first, and then check detailed conditions inside it.</p>
            <p>The most important part is <b>indentation</b>.</p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Input a score. If it is 60 or more, print "Pass" and then print A, B, C, or D grade inside the block. If it is below 60, print "Fail".
            </div>
        `,
        ru: `
            <p><b>Вложенный if</b> — это <b>if внутри другого if</b>.</p>
            <p>Сначала можно проверить большое условие, а затем внутри него — более подробные условия.</p>
            <p>Самое важное здесь — <b>отступы</b>.</p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Введите балл. Если он 60 и выше, выведите "Pass", а затем внутри блока выведите оценку A, B, C или D. Если меньше 60, выведите "Fail".
            </div>
        `
    },
    answer: {
        ko: 'score = int(input("점수를 입력하세요: "))\nif score >= 60:\n    print("합격입니다.")\n    if score >= 90:\n        print("등급은 A입니다.")\n    elif score >= 80:\n        print("등급은 B입니다.")\n    elif score >= 70:\n        print("등급은 C입니다.")\n    else:\n        print("등급은 D입니다.")\nelse:\n    print("불합격입니다.")',
        en: 'score = int(input("Enter your score: "))\nif score >= 60:\n    print("Pass")\n    if score >= 90:\n        print("Grade A")\n    elif score >= 80:\n        print("Grade B")\n    elif score >= 70:\n        print("Grade C")\n    else:\n        print("Grade D")\nelse:\n    print("Fail")',
        ru: 'score = int(input("Введите балл: "))\nif score >= 60:\n    print("Pass")\n    if score >= 90:\n        print("Grade A")\n    elif score >= 80:\n        print("Grade B")\n    elif score >= 70:\n        print("Grade C")\n    else:\n        print("Grade D")\nelse:\n    print("Fail")'
    }
},
{
    menu: { ko: '6: 학점 계산기', en: '6: Grade Calculator', ru: '6: Калькулятор оценок' },
    title: {
        ko: '6. 미니 프로젝트: 학점 계산 프로그램',
        en: '6. Mini Project: Grade Calculator',
        ru: '6. Мини-проект: калькулятор оценок'
    },
    theory: {
        ko: `
            <p>이제 <b>elif</b>, <b>or</b>, <b>중첩 if</b>를 이용해 학점 계산 프로그램을 만들 수 있습니다.</p>
            <p>점수가 0보다 작거나 100보다 크면 <b>잘못된 점수</b>로 처리합니다.</p>
            <p>그 외에는 점수 구간에 따라 A, B, C, D, F를 출력합니다.</p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                점수를 입력받아 0~100 범위를 벗어나면 "잘못된 점수입니다."를 출력하고, 올바른 점수라면 학점을 출력하세요.
            </div>
        `,
        en: `
            <p>Now you can make a grade calculator with <b>elif</b>, <b>or</b>, and <b>nested if</b>.</p>
            <p>If the score is less than 0 or greater than 100, treat it as an <b>invalid score</b>.</p>
            <p>Otherwise, print A, B, C, D, or F by score range.</p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Input a score. If it is outside 0 to 100, print "Invalid score." If it is valid, print the grade.
            </div>
        `,
        ru: `
            <p>Теперь вы можете сделать калькулятор оценок с помощью <b>elif</b>, <b>or</b> и <b>вложенного if</b>.</p>
            <p>Если балл меньше 0 или больше 100, это <b>неверный балл</b>.</p>
            <p>Иначе выведите A, B, C, D или F по диапазону баллов.</p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Введите балл. Если он вне диапазона 0–100, выведите "Invalid score." Если он верный, выведите оценку.
            </div>
        `
    },
    answer: {
        ko: 'score = int(input("점수를 입력하세요(0~100): "))\nif score < 0 or score > 100:\n    print("잘못된 점수입니다.")\nelse:\n    if score >= 90:\n        print("학점은 A입니다.")\n    elif score >= 80:\n        print("학점은 B입니다.")\n    elif score >= 70:\n        print("학점은 C입니다.")\n    elif score >= 60:\n        print("학점은 D입니다.")\n    else:\n        print("학점은 F입니다.")',
        en: 'score = int(input("Enter your score (0~100): "))\nif score < 0 or score > 100:\n    print("Invalid score.")\nelse:\n    if score >= 90:\n        print("Your grade is A.")\n    elif score >= 80:\n        print("Your grade is B.")\n    elif score >= 70:\n        print("Your grade is C.")\n    elif score >= 60:\n        print("Your grade is D.")\n    else:\n        print("Your grade is F.")',
        ru: 'score = int(input("Введите балл (0~100): "))\nif score < 0 or score > 100:\n    print("Invalid score.")\nelse:\n    if score >= 90:\n        print("Your grade is A.")\n    elif score >= 80:\n        print("Your grade is B.")\n    elif score >= 70:\n        print("Your grade is C.")\n    elif score >= 60:\n        print("Your grade is D.")\n    else:\n        print("Your grade is F.")'
    }
},
{
    menu: { ko: '6: f-string 출력', en: '6: f-string Output', ru: '6: f-string вывод' },
    title: {
        ko: '6. 친절한 결과 출력하기',
        en: '6. Friendly Result Output',
        ru: '6. Удобный вывод результата'
    },
    theory: {
        ko: `
            <p><b>f-string</b>을 사용하면 변수 값을 문장 안에 쉽게 넣을 수 있습니다.</p>
            <p>예: <code>print(f"점수는 {score}점입니다.")</code></p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                점수와 학점을 함께 출력하세요. 예: "당신의 점수는 85점이고, 학점은 B입니다."
            </div>
        `,
        en: `
            <p>With an <b>f-string</b>, you can easily put variables into a sentence.</p>
            <p>Example: <code>print(f"Your score is {score}.")</code></p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Print the score and grade together. Example: "Your score is 85 and your grade is B."
            </div>
        `,
        ru: `
            <p>С помощью <b>f-string</b> можно легко вставлять переменные в предложение.</p>
            <p>Пример: <code>print(f"Ваш балл: {score}.")</code></p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Выведите вместе балл и оценку. Пример: "Ваш балл 85, а оценка B."
            </div>
        `
    },
    answer: {
        ko: 'score = 85\ngrade = "B"\nprint(f"당신의 점수는 {score}점이고, 학점은 {grade}입니다.")',
        en: 'score = 85\ngrade = "B"\nprint(f"Your score is {score}, and your grade is {grade}.")',
        ru: 'score = 85\ngrade = "B"\nprint(f"Ваш балл {score}, а оценка {grade}.")'
    }
    },
    ,
{
    menu: { ko: '7: 복습 종합', en: '7: Review', ru: '7: Повторение' },
    title: {
        ko: '7. 1~6주차 핵심 복습',
        en: '7. Review of Weeks 1~6',
        ru: '7. Повторение 1~6 недель'
    },
    theory: {
        ko: `
            <p>지금까지 배운 내용을 빠르게 정리해봅니다.</p>
            <ul>
                <li>print(), input()</li>
                <li>변수</li>
                <li>문자열 연결</li>
                <li>int(), float()</li>
                <li>비교 연산자</li>
                <li>if / elif / else</li>
            </ul>
            <p><b>중요:</b> input()은 항상 문자열입니다.</p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                두 숫자를 입력받아 더하기 결과를 출력하세요.
            </div>
        `,
        en: `
            <p>Let's review what we learned.</p>
            <ul>
                <li>print(), input()</li>
                <li>variables</li>
                <li>string connection</li>
                <li>int(), float()</li>
                <li>comparison operators</li>
                <li>if / elif / else</li>
            </ul>
            <p><b>Important:</b> input() is always a string.</p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Input two numbers and print the sum.
            </div>
        `,
        ru: `
            <p>Повторим изученный материал.</p>
            <ul>
                <li>print(), input()</li>
                <li>переменные</li>
                <li>строки</li>
                <li>int(), float()</li>
                <li>операторы сравнения</li>
                <li>if / elif / else</li>
            </ul>
            <p><b>Важно:</b> input() всегда строка.</p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Введите два числа и выведите сумму.
            </div>
        `
    },
    answer: {
        ko: 'a = int(input("첫 번째 숫자: "))\nb = int(input("두 번째 숫자: "))\nprint(a + b)',
        en: 'a = int(input("First number: "))\nb = int(input("Second number: "))\nprint(a + b)',
        ru: 'a = int(input("Первое число: "))\nb = int(input("Второе число: "))\nprint(a + b)'
    }
},
{
    menu: { ko: '7: try-except', en: '7: try-except', ru: '7: try-except' },
    title: {
        ko: '7. 오류를 막는 try-except',
        en: '7. try-except for Errors',
        ru: '7. try-except для ошибок'
    },
    theory: {
        ko: `
            <p><b>try-except</b>는 오류가 나도 프로그램이 멈추지 않게 합니다.</p>
            <p>숫자 대신 문자를 입력하면 오류가 발생합니다.</p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                숫자를 입력받고 출력하는 프로그램을 try-except로 작성하세요.
            </div>
        `,
        en: `
            <p><b>try-except</b> prevents the program from stopping.</p>
            <p>If a user enters text instead of a number, an error happens.</p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Create a program that safely inputs a number using try-except.
            </div>
        `,
        ru: `
            <p><b>try-except</b> предотвращает остановку программы.</p>
            <p>Ошибка возникает, если вместо числа вводится текст.</p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Напишите программу с try-except для ввода числа.
            </div>
        `
    },
    answer: {
        ko: 'try:\n    num = int(input("숫자 입력: "))\n    print(num)\nexcept:\n    print("오류! 숫자를 입력하세요.")',
        en: 'try:\n    num = int(input("Enter a number: "))\n    print(num)\nexcept:\n    print("Error! Enter a number.")',
        ru: 'try:\n    num = int(input("Введите число: "))\n    print(num)\nexcept:\n    print("Ошибка! Введите число.")'
    }
},
{
    menu: { ko: '7: 주석', en: '7: Comments', ru: '7: Комментарии' },
    title: {
        ko: '7. 주석으로 코드 설명하기',
        en: '7. Writing Comments',
        ru: '7. Комментарии'
    },
    theory: {
        ko: `
            <p><b>#</b>을 사용하면 주석을 쓸 수 있습니다.</p>
            <p>주석은 실행되지 않고 설명만 합니다.</p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                숫자를 입력받아 출력하는 코드에 주석을 추가하세요.
            </div>
        `,
        en: `
            <p>Use <b>#</b> to write comments.</p>
            <p>Comments are not executed.</p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Add comments to a number input program.
            </div>
        `,
        ru: `
            <p>Используйте <b>#</b> для комментариев.</p>
            <p>Комментарии не выполняются.</p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Добавьте комментарии к программе.
            </div>
        `
    },
    answer: {
        ko: '# 숫자 입력\nnum = int(input("숫자: "))\n# 출력\nprint(num)',
        en: '# input number\nnum = int(input("Number: "))\n# print\nprint(num)',
        ru: '# ввод числа\nnum = int(input("Число: "))\n# вывод\nprint(num)'
    }
},
{
    menu: { ko: '7: 카페 프로젝트', en: '7: Cafe Project', ru: '7: Кафе проект' },
    title: {
        ko: '7. 미니 프로젝트: 카페 메뉴',
        en: '7. Mini Project: Cafe Menu',
        ru: '7. Мини-проект: Кафе'
    },
    theory: {
        ko: `
            <p>돈에 따라 살 수 있는 음료를 출력합니다.</p>
            <p>조건문을 활용하는 실전 문제입니다.</p>
            <div class="problem-area">
                <span class="problem-title">[문제]</span>
                돈을 입력받아 살 수 있는 음료를 출력하세요.
            </div>
        `,
        en: `
            <p>Print what drinks you can buy with your money.</p>
            <p>This is a real condition practice.</p>
            <div class="problem-area">
                <span class="problem-title">[Task]</span>
                Input money and print available drinks.
            </div>
        `,
        ru: `
            <p>Выведите, что можно купить за деньги.</p>
            <p>Это практическая задача с условиями.</p>
            <div class="problem-area">
                <span class="problem-title">[Задача]</span>
                Введите деньги и выведите напитки.
            </div>
        `
    },
    answer: {
        ko: 'tea = 3500\namericano = 4500\nlatte = 5500\n\ntry:\n    money = int(input("돈: "))\n    if money < tea:\n        print("아무것도 못 삼")\n    elif money < americano:\n        print("차 가능")\n    elif money < latte:\n        print("차 + 아메리카노 가능")\n    else:\n        print("모든 음료 가능")\nexcept:\n    print("숫자를 입력하세요")',
        en: 'tea = 3500\namericano = 4500\nlatte = 5500\n\ntry:\n    money = int(input("Money: "))\n    if money < tea:\n        print("Nothing")\n    elif money < americano:\n        print("Tea")\n    elif money < latte:\n        print("Tea + Americano")\n    else:\n        print("All drinks")\nexcept:\n    print("Enter a number")',
        ru: 'tea = 3500\namericano = 4500\nlatte = 5500\n\ntry:\n    money = int(input("Деньги: "))\n    if money < tea:\n        print("Ничего")\n    elif money < americano:\n        print("Чай")\n    elif money < latte:\n        print("Чай и американо")\n    else:\n        print("Все напитки")\nexcept:\n    print("Введите число")'
    }
},
];
window.pythonLessons = lessons.map((lesson, index) => ({
    id: lesson.id || `lesson-${index + 1}`,
    ...lesson
}));
