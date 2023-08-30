import scoreList from './scoreList.js';
import addScoresToTable from './addScoresToTable.js';

const addScore = (nameInputValue, scoreInputValue) => {
  const name = nameInputValue.trim();
  const score = scoreInputValue.trim();

  scoreList.unshift({ name: `${name}`, score: `${score}` });
  addScoresToTable();
};

export default addScore;