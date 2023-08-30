import addScore from './addScore.js';

const submitForm = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');

    if (nameInput.value && scoreInput.value) addScore(nameInput.value, scoreInput.value);

    nameInput.value = '';
    scoreInput.value = '';
  });
};

export default submitForm;