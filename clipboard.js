/**
 * クリップボードにコピー
 */
export default function clipboard(text){
  let textarea = document.createElement('textarea');
  textarea.style.position = 'fixed';
  textarea.style.opacity = 0;
  textarea.value = text;

  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('Copy');

  document.body.removeChild(textarea);

  return text;
}