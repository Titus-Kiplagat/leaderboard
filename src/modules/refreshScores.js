import fetchScores from './fetchScores.js';

const refreshScores = async () => {
  document.getElementById('refresh-btn').addEventListener('click', () => {
    fetchScores();
  });
};

export default refreshScores;