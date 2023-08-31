import { apiURL, gameID } from '../config.js';
import addScoresToTable from './addScoresToTable.js';

const fetchScores = async () => {
  await fetch(`${apiURL}/games/${gameID}/scores/`)
    .then((response) => response.json())
    .then((data) => {
      addScoresToTable(data.result);
    })
    .catch((error) => {
      throw new Error('Error fetching scores and displaying on the table:', error);
    });
};

export default fetchScores;