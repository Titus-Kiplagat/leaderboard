import './style.css';
import submitForm from './modules/submitForm.js';
import handleSubmitButton from './modules/handleSubmitButton.js';
import fetchScores from './modules/fetchScores.js';
import refreshScores from './modules/refreshScores.js';

document.addEventListener('DOMContentLoaded', () => {
  submitForm();
  handleSubmitButton();
  refreshScores();
  fetchScores();
});