const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', () => {
  outputNameRef.textContent = inputNameRef.value;

  if (inputNameRef.value === '') {
    outputNameRef.textContent = 'незнакомец';
  }
});
