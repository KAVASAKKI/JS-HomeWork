const inputRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

function onInputRefInput(e) {
  const valueInputRef = +e.currentTarget?.value || +e.value;
  textRef.style.fontSize = `${valueInputRef}px`;
}
onInputRefInput(inputRef);

inputRef.addEventListener('input', onInputRefInput);
