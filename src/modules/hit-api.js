import setupProject, { recentSores } from './setup.js';

export const button = document.getElementById('button');
export const submitButton = document.getElementById('btn');

export const addScore = async () => {
  const yourName = document.querySelector('#your-name');
  const yourScore = document.querySelector('#your-score');
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseUrl}games/`;
  const gameID = 'kangoishara';
  const response = await fetch(`${url}${gameID}/scores/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ user: yourName.value, score: yourScore.value }),
  });
  const res = await response.json();
  location.reload();
  return res;
};

export const gameScore = async () => {
  const requestString = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kangoishara/scores/';

  const data = await fetch(requestString);

  const response = await data.json();
  const scoreGame = response.result;
  scoreGame.forEach((element) => {
    recentSores.push(element);
  });
  setupProject();
};