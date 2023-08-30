import submitForm from './submitForm.js';

const handleSubmitButton = () => {
  const submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', submitForm);
};

export default handleSubmitButton;