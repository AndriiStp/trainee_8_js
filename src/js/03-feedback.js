import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state';

let formData = localStorage.getItem(FEEDBACK_KEY);

form.addEventListener('input', throttle(onInput, 1000));
form.addEventListener('submit', onSubmit);

getStorageValues();
// const { enail, message } = form.elements;

function onInput(e) {
  const message = e.target.value;
  console.log(message);
  localStorage.setItem(FEEDBACK_KEY, message);
}

function onSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}

function getStorageValues() {
  if (formData) {
    console.log(formData);
    form.value = formData;
  }
}
