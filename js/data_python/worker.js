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
    const { code, inputs = [] } = event.data;

    try {
        pyodide.globals.set("js_inputs", inputs);

        await pyodide.runPythonAsync(`
            import sys, io, builtins

            sys.stdout = io.StringIO()
            _input_values = list(js_inputs)

            def browser_input(prompt_text=""):
                if _input_values:
                    value = str(_input_values.pop(0))
                    print(f"{prompt_text}{value}")
                    return value
                return ""

            builtins.input = browser_input
        `);

        await pyodide.runPythonAsync(code);
        const output = pyodide.runPython("sys.stdout.getvalue()");

        self.postMessage({ type: 'SUCCESS', output });
    } catch (error) {
        self.postMessage({ type: 'ERROR', error: error.message });
    }
};