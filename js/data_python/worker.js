/* Python executes exclusively in this worker. Termination interrupts blocking loops. */
/* global importScripts, loadPyodide */
'use strict';
let pyodide = null;
const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/';

async function initialize() {
    try {
        importScripts(PYODIDE_CDN + 'pyodide.js');
        pyodide = await loadPyodide({ indexURL: PYODIDE_CDN });
        self.postMessage({ type: 'READY' });
    } catch (error) {
        self.postMessage({ type: 'LOAD_ERROR', error: String(error && error.message || error) });
    }
}

function preparePython(inputs) {
    // Passing JSON as a global avoids string interpolation into Python source.
    pyodide.globals.set('__student_input_json', JSON.stringify(inputs));
    pyodide.runPython(`
import builtins, io, json, sys
__student_input_queue = json.loads(__student_input_json)
class _LimitedOutput:
    def __init__(self):
        self.parts = []
        self.count = 0
    def write(self, value):
        value = str(value)
        self.count += len(value)
        if self.count > 60000:
            raise RuntimeError('OUTPUT_LIMIT_EXCEEDED')
        self.parts.append(value)
        return len(value)
    def flush(self):
        pass
    def getvalue(self):
        return ''.join(self.parts)
__student_output = _LimitedOutput()
sys.stdout = __student_output
def _student_input(prompt_text=''):
    sys.stdout.write(str(prompt_text))
    if not __student_input_queue:
        raise EOFError('INPUT_VALUES_EXHAUSTED')
    value = str(__student_input_queue.pop(0))
    print(value)
    return value
builtins.input = _student_input
`);
}

async function execute(message) {
    const id = message.id;
    if (!pyodide) {
        self.postMessage({ type: 'RESULT', id, output: '', error: 'Python not ready' });
        return;
    }
    try {
        preparePython(Array.isArray(message.inputs) ? message.inputs : []);
        const code = String(message.code || '');
        await pyodide.runPythonAsync(code);
        const output = pyodide.runPython('__student_output.getvalue()');
        self.postMessage({ type: 'RESULT', id, output: String(output || ''), error: null });
    } catch (error) {
        let output = '';
        try { output = String(pyodide.runPython('__student_output.getvalue()') || ''); } catch (_) { /* ignore */ }
        self.postMessage({ type: 'RESULT', id, output, error: String(error && error.message || error) });
    } finally {
        // Restore streams before accepting another request in this worker.
        try { pyodide.runPython('import sys; sys.stdout = sys.__stdout__'); } catch (_) { /* ignore */ }
    }
}

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'RUN') execute(event.data);
});
initialize();
