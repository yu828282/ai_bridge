export const PREVIEW_CHANNEL = 'ai-bridge-web-preview-v2';

function reportPreview(token) {
  function send(type, extra) { parent.postMessage(Object.assign({channel:'ai-bridge-web-preview-v2', token:token, type:type}, extra || {}), '*'); }
  window.addEventListener('error', function(event) {
    if (!event.message) return;
    send('runtime-error', {message:String(event.message).slice(0, 800), line:Number(event.lineno) || 0, column:Number(event.colno) || 0});
  });
  window.addEventListener('unhandledrejection', function(event) {
    var reason = event.reason;
    var message = reason && reason.message ? reason.name + ': ' + reason.message : String(reason);
    send('runtime-error', {message:message.slice(0, 800), line:0, column:0});
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function() { send('ready'); }, {once:true});
  else send('ready');
}

export function buildPreviewHTML(source, token) {
  // Keep the bridge on ONE line so browser line numbers still match the editor.
  const bootstrap = '<script data-web-runner>(function(){(' + reportPreview.toString().replace(/\r?\n/g, ' ') + ')(' + JSON.stringify(token).replace(/</g,'\\u003c') + ');})();<\/script>';
  const head = /<head(?:\s[^>]*)?>/i.exec(source);
  if (head) {
    const at = head.index + head[0].length;
    return source.slice(0, at) + bootstrap + source.slice(at);
  }
  const doctype = /^\s*<!doctype[^>]*>/i.exec(source);
  const at = doctype ? doctype[0].length : 0;
  return source.slice(0, at) + bootstrap + source.slice(at);
}

export function createRunner(frame, {onStart, onReady, onError}) {
  let token = '', hasError = false, counter = 0;
  function receive(event) {
    const data = event.data;
    if (event.source !== frame.contentWindow || !data || data.channel !== PREVIEW_CHANNEL || data.token !== token) return;
    if (data.type === 'runtime-error' && typeof data.message === 'string') {
      hasError = true;
      onError({message:data.message.slice(0,800), line:Number.isInteger(data.line) && data.line > 0 ? data.line : 0});
    } else if (data.type === 'ready' && !hasError) onReady();
  }
  window.addEventListener('message', receive);
  function run(source) {
    hasError = false;
    token = 'run-' + Date.now().toString(36) + '-' + (++counter) + '-' + Math.random().toString(36).slice(2);
    onStart();
    frame.srcdoc = buildPreviewHTML(source, token);
  }
  return {run, dispose() { window.removeEventListener('message', receive); }};
}
