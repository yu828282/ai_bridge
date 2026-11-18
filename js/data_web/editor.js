const escapeCode = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Only escaped source is inserted into the decorative, aria-hidden layer.
// The real editing surface stays a normal textarea with native selection and undo.
export function colorCode(source) {
  const parts = source.split(/(<!--[^\n]*(?:-->)?|<\/?[A-Za-z][^>]*>|<!DOCTYPE[^>]*>)/g);
  return parts.map(part => {
    if (/^<!--/.test(part)) return '<span class="tok-comment">' + escapeCode(part) + '</span>';
    if (/^<!DOCTYPE/i.test(part)) return '<span class="tok-keyword">' + escapeCode(part) + '</span>';
    if (/^<\/?[A-Za-z]/.test(part)) {
      return '<span class="tok-tag">' + escapeCode(part).replace(/(\s[\w:-]+)(=)(&quot;.*?&quot;|&#39;.*?&#39;)/g,
        '<span class="tok-attr">$1</span>$2<span class="tok-string">$3</span>') + '</span>';
    }
    const tokens = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/.*$|\b(?:const|let|var|function|return|if|else|true|false|null|document|Number)\b|\b\d+(?:\.\d+)?(?:px|em|rem|%)?\b)/g;
    let output = '', last = 0;
    for (const match of part.matchAll(tokens)) {
      output += escapeCode(part.slice(last, match.index));
      const token = match[0];
      const type = /^\/\//.test(token) ? 'comment' : /^["']/.test(token) ? 'string' : /^\d/.test(token) ? 'number' : 'keyword';
      output += '<span class="tok-' + type + '">' + escapeCode(token) + '</span>';
      last = match.index + token.length;
    }
    return output + escapeCode(part.slice(last));
  }).join('');
}

export function createEditor(textarea, highlight, gutter) {
  let markedLine = 0;
  function syncScroll() {
    highlight.scrollTop = textarea.scrollTop;
    highlight.scrollLeft = textarea.scrollLeft;
    gutter.scrollTop = textarea.scrollTop;
  }
  function paint() {
    const lines = textarea.value.split('\n');
    highlight.innerHTML = lines.map((line, i) => '<span class="code-line' + (i + 1 === markedLine ? ' edit-line' : '') + '">' + (colorCode(line) || '&#8203;') + '</span>').join('');
    gutter.innerHTML = lines.map((_, i) => '<span' + (i + 1 === markedLine ? ' class="active-line"' : '') + '>' + (i + 1) + '</span>').join('');
    syncScroll();
  }
  function setValue(value) {
    textarea.value = value;
    markedLine = 0;
    textarea.scrollTop = 0;
    textarea.scrollLeft = 0;
    paint();
  }
  function selectRange(start, end) {
    textarea.focus({preventScroll:true});
    textarea.setSelectionRange(start, end);
    markedLine = textarea.value.slice(0, start).split('\n').length;
    const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight) || 24;
    textarea.scrollTop = Math.max(0, (markedLine - 1) * lineHeight - textarea.clientHeight / 3);
    textarea.scrollLeft = 0;
    paint();
    textarea.scrollIntoView({behavior:'auto', block:'center'});
    return markedLine;
  }
  function find(text, mode='replace') {
    const index = text ? textarea.value.indexOf(text) : -1;
    if(index < 0) return 0;
    if(mode === 'insertBefore') return selectRange(index, index);
    if(mode === 'insertAfter') return selectRange(index + text.length, index + text.length);
    return selectRange(index, index + text.length);
  }
  function focusLine(number) {
    const lines = textarea.value.split('\n');
    const index = Math.max(0, Math.min(lines.length - 1, Number(number) - 1));
    const start = lines.slice(0, index).reduce((sum, line) => sum + line.length + 1, 0);
    return selectRange(start, start + lines[index].length);
  }
  textarea.addEventListener('scroll', syncScroll, {passive:true});
  textarea.addEventListener('input', () => { markedLine = 0; paint(); });
  textarea.addEventListener('keydown', event => {
    if (!(event.ctrlKey || event.metaKey) || event.altKey || !['[', ']'].includes(event.key)) return;
    event.preventDefault();
    const start = textarea.selectionStart, end = textarea.selectionEnd, value = textarea.value;
    const first = value.lastIndexOf('\n', start - 1) + 1;
    const lastNewline = value.indexOf('\n', Math.max(start, end - 1));
    const last = lastNewline < 0 ? value.length : lastNewline;
    const changed = value.slice(first, last).split('\n').map(line => event.key === ']' ? '  ' + line : line.replace(/^ {1,2}/, '')).join('\n');
    textarea.setRangeText(changed, first, last, 'select');
    textarea.dispatchEvent(new Event('input', {bubbles:true}));
  });
  paint();
  return {setValue, paint, find, focusLine};
}
