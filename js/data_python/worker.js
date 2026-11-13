/* Python executes exclusively in this worker. Termination interrupts blocking loops. */
/* global importScripts, loadPyodide */
'use strict';
let pyodide = null;
let helperGlobals = null;
let executing = false;
const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/';

// Helpers live outside the student's namespace. Each Run is a new program, so
// names such as print, input, len, or __student_output cannot poison later runs.
const STUDENT_RUNNER = `
import builtins as _builtins_module
import sys as _sys
from json import loads as _json_loads, dumps as _json_dumps
from traceback import format_exception as _format_exception
from pyodide.code import eval_code_async as _eval_code_async

class _LimitedOutput:
    encoding = 'utf-8'

    def __init__(self):
        self.parts = []
        self.count = 0

    def write(self, value):
        value = str(value)
        length = len(value)
        if self.count + length > 60000:
            raise RuntimeError('OUTPUT_LIMIT_EXCEEDED')
        self.count += length
        self.parts.append(value)
        return length

    def flush(self):
        pass

    def isatty(self):
        return False

    def getvalue(self):
        return ''.join(self.parts)

async def _run_student(code, input_json):
    values = iter(_json_loads(input_json))
    output = _LimitedOutput()
    original_stdout, original_stderr = _sys.stdout, _sys.stderr
    builtins_dict = _builtins_module.__dict__
    original_builtins = builtins_dict.copy()

    def student_input(prompt_text=''):
        output.write(str(prompt_text))
        try:
            value = str(next(values))
        except StopIteration:
            raise EOFError('INPUT_VALUES_EXHAUSTED') from None
        output.write(value + '\\n')
        return value

    # Copying program globals is enough for ordinary assignments. Restoring the
    # builtins module also covers "import builtins; builtins.print = ...".
    namespace = {'__name__': '__main__', '__builtins__': builtins_dict}
    error = None
    try:
        builtins_dict['input'] = student_input
        _sys.stdout = output
        _sys.stderr = output
        await _eval_code_async(code, globals=namespace, return_mode='none', filename='<student>')
    except BaseException as caught:
        error = caught
    finally:
        # These helpers have their own builtins snapshot, so student changes to
        # builtins cannot prevent cleanup. Restore before formatting exceptions.
        builtins_dict.clear()
        builtins_dict.update(original_builtins)
        _sys.stdout = original_stdout
        _sys.stderr = original_stderr

    error_text = None
    if error is not None:
        error_text = ''.join(_format_exception(type(error), error, error.__traceback__))
    return _json_dumps({'output': output.getvalue(), 'error': error_text})
`;

async function initialize() {
    try {
        importScripts(PYODIDE_CDN + 'pyodide.js');
        pyodide = await loadPyodide({ indexURL: PYODIDE_CDN });
        // A private, stable builtins snapshot protects runtime helpers even when
        // a lesson changes the real builtins module during its own execution.
        helperGlobals = pyodide.runPython("{'__builtins__': __import__('builtins').__dict__.copy()}");
        pyodide.runPython(STUDENT_RUNNER, { globals: helperGlobals });
        self.postMessage({ type: 'READY' });
    } catch (error) {
        if (helperGlobals) helperGlobals.destroy();
        helperGlobals = null;
        pyodide = null;
        self.postMessage({ type: 'LOAD_ERROR', error: String(error && error.message || error) });
    }
}

async function execute(message) {
    const id = message.id;
    if (!pyodide || !helperGlobals) {
        self.postMessage({ type: 'RESULT', id, output: '', error: 'Python not ready' });
        return;
    }
    if (executing) {
        self.postMessage({ type: 'RESULT', id, output: '', error: 'Python is already running' });
        return;
    }
    executing = true;
    let result;
    try {
        // Transfer data as values; never interpolate student text into code.
        helperGlobals.set('_student_code', String(message.code || ''));
        helperGlobals.set('_student_input_json', JSON.stringify(Array.isArray(message.inputs) ? message.inputs : []));
        const json = await pyodide.runPythonAsync(
            'await _run_student(_student_code, _student_input_json)',
            { globals: helperGlobals }
        );
        result = JSON.parse(json);
    } catch (error) {
        result = { output: '', error: String(error && error.message || error) };
    } finally {
        // JSON is the only per-run result crossing the JS/Python boundary, so no
        // student result PyProxy is retained when its last expression is a list.
        helperGlobals.delete('_student_code');
        helperGlobals.delete('_student_input_json');
        executing = false;
    }
    self.postMessage({ type: 'RESULT', id, output: result.output || '', error: result.error || null });
}

self.addEventListener('message', event => {
    if (event.data && event.data.type === 'RUN') execute(event.data);
});
initialize();
