import './style.css';
import submitForm from './modules/submitForm.js';
import handleSubmitButton from './modules/handleSubmitButton.js';
import addScoresToTable from './modules/addScoresToTable.js';

document.addEventListener('DOMContentLoaded', () => {
  submitForm();
  handleSubmitButton();
  addScoresToTable();
});