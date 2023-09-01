import generateScoreMarkup from './scoreMarkup.js';

const addScoresToTable = (scoreList) => {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  const sortedList = scoreList.sort((a, b) => b.score - a.score);

  sortedList.forEach(({ user, score }) => {
    const scoreMarkup = generateScoreMarkup(user, score);
    tableBody.innerHTML += scoreMarkup;
  });
};

export default addScoresToTable;