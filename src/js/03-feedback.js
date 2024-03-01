import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state';

let formData = localStorage.getItem(FEEDBACK_KEY);

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

getStorageValues();
// const { enail, message } = form.elements;

function onInput(e) {
  const { name, value } = e.target;
  formData[name] = value;

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(formData);

  form.reset();
  localStorage.removeItem(FEEDBACK_KEY);
  formData = {};
}

function getStorageValues() {
  if (formData.message) {
    form.elements.message.value = formData.message;
  }
  if (formData.email) {
    form.elements.email.value = formData.email;
  }
}
