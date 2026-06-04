// worker.js
importScripts("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js");

let pyodide;

// 엔진 초기화
async function loadPyodideAndPackages() {
    pyodide = await loadPyodide();
    self.postMessage({ type: 'READY' }); // 준비 완료를 메인에 알림
}

loadPyodideAndPackages();

// 메인 스레드로부터 메시지를 받았을 때
self.onmessage = async (event) => {
    const { code } = event.data;

    try {
        await pyodide.runPythonAsync(`
            import sys, io, builtins
            from js import prompt

            sys.stdout = io.StringIO()

            def browser_input(prompt_text=""):
                value = prompt(prompt_text)
                if value is None:
                    raise KeyboardInterrupt("Input cancelled")
                print(str(prompt_text) + str(value))
                return str(value)

            builtins.input = browser_input
        `);

        await pyodide.runPythonAsync(code);

        const output = pyodide.runPython("sys.stdout.getvalue()");
        self.postMessage({ type: 'SUCCESS', output });
    } catch (error) {
        self.postMessage({ type: 'ERROR', error: error.message });
    }
};