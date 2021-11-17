const counterValue = document.querySelector('#value');
const actionsBtnRef = document.querySelectorAll('button');

const decrementBtn = actionsBtnRef[0];
const incrementBtn = actionsBtnRef[1];

let counter = +counterValue.textContent;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
  counter -= 1;
  counterValue.innerHTML = +counter;
}

function increment() {
  counter += 1;
  counterValue.innerHTML = +counter;
}
