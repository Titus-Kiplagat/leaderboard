import fetchScores from './fetchScores.js';
import postScore from './postScore.js';

const submitForm = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');

    if (nameInput.value && scoreInput.value) postScore(nameInput.value, scoreInput.value);
    fetchScores();

    nameInput.value = '';
    scoreInput.value = '';
  });
};

export default submitForm;