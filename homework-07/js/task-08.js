const refs = {
  inputRef: document.querySelector('input'),
  renderBtnRef: document.querySelector('[data-action="render"]'),
  destroyBtnRef: document.querySelector('[data-action="destroy"]'),
  divBoxesRef: document.querySelector('#boxes'),
};
const { inputRef, renderBtnRef, destroyBtnRef, divBoxesRef } = refs;

let width = 30;
let height = 30;

const getRandomRgb = () => {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

const createBoxes = amount => {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomRgb();

    const element = document.createElement('div');
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.backgroundColor = randomColor;

    width += 10;
    height += 10;
    elements.push(element);
  }

  return elements;
};

const destroyBoxes = () => {
  divBoxesRef.innerHTML = '';
  width = 30;
  height = 30;
};

const createAndAppendBoxes = () => {
  const elements = createBoxes(inputRef.value);

  divBoxesRef.append(...elements);
};

renderBtnRef.addEventListener('click', createAndAppendBoxes);

destroyBtnRef.addEventListener('click', destroyBoxes);
