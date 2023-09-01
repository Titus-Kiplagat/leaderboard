import './style.css';
import submitForm from './modules/submitForm.js';
import handleSubmitButton from './modules/handleSubmitButton.js';
import refreshScores from './modules/refreshScores.js';

document.addEventListener('DOMContentLoaded', () => {
  submitForm();
  handleSubmitButton();
  refreshScores();
});