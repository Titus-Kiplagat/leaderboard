import { apiURL, gameID } from '../config.js';

const postScore = async (user, score) => {
  await fetch(`${apiURL}/games/${gameID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  })
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => {
      throw new Error('Error adding score:', error);
    });
};

export default postScore;