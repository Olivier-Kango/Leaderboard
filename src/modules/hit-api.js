import setupProject, { recentSores } from './setup.js';

export const button = document.getElementById('button');

export const gameScore = async () => {
  const requestString = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

  const data = await fetch(requestString);

  const response = await data.json();
  const scoreGame = response.result;
  const newGame = scoreGame.slice(0, 8);
  newGame.forEach((element) => {
    recentSores.push(element);
  });
  setupProject();
};
