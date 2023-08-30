import scoreList from './scoreList.js';
import generateScoreMarkup from './scoreMarkup.js';

const addScoresToTable = () => {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  scoreList.forEach(({ name, score }) => {
    const scoreMarkup = generateScoreMarkup(name, score);
    tableBody.innerHTML += scoreMarkup;
  });
};

export default addScoresToTable;