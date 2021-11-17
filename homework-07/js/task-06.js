const validationInput = document.querySelector('#validation-input');
const validationInputLength = +validationInput.dataset.length;

const removeClassName = className => {
  if (validationInput.classList.contains(className)) {
    validationInput.classList.remove(className);
  }
};

const addClassName = className => {
  validationInput.classList.add(className);
};

const checkForValidInput = () => {
  if (validationInput.value.length === validationInputLength) {
    addClassName('valid');
    removeClassName('invalid');
  } else {
    addClassName('invalid');
    removeClassName('valid');
  }
};

validationInput.addEventListener('blur', checkForValidInput);
