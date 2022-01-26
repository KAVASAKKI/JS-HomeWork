const refs = {
  form: document.querySelector('.form'),
  inputName: document.querySelector('#name'),
  inputTel: document.querySelector('#tel'),
  inputEmail: document.querySelector('#email'),
  inputTextarea: document.querySelector('#message'),
  checkbox: document.querySelector('#checkbox'),
};
const { form, inputName, inputTel, inputEmail, inputTextarea, checkbox } = refs;

const STORAGE_KEY = 'form-data';
let formData = {};

populateTextarea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormSubmit(e) {
  e.preventDefault();
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  const attribute = e.target.getAttribute('id');

  if (attribute !== 'checkbox') {
    formData[attribute] = e.target.value;
  } else if (checkbox.checked) {
    formData[attribute] = true;
  } else if (!checkbox.checked) {
    formData[attribute] = false;
  }

  if (formData[attribute] === '') {
    delete formData[attribute];
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedDataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedDataForm) {
    if (Object.keys(savedDataForm).length !== 0) {
      formData = {
        ...savedDataForm,
      };

      inputName.value = savedDataForm.name;
      inputTel.value = savedDataForm.tel;
      inputEmail.value = savedDataForm.email;
      inputTextarea.value = savedDataForm.message;
      checkbox.checked = savedDataForm.checkbox;
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
