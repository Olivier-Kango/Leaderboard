import { conformsTo } from "lodash";

export let recentSores = [];

export const setupProject = () => {
  recentSores = recentSores.sort((a, b) => a.user.localeCompare(b.user));
  console.log(recentSores);
  recentSores.forEach((elt, index) => {
    const { user, score } = elt;
    const listScores = document.querySelector('.list-scores');
    const li = document.createElement('li');
    li.innerText = `${user}: ${score}`;
    li.id = index + 1;
    listScores.style.border = '3px solid black';
    listScores.appendChild(li);
  });
};