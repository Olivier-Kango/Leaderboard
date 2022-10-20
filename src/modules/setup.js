export const recentSores = [];

export const setupProject = () => {
  recentSores.forEach((elt, index) => {
    const { user, score } = elt;
    const listScores = document.querySelector('.list-scores');
    const li = document.createElement('li');
    li.innerText = `${user}: ${score}`;
    li.id = index + 1;
    listScores.appendChild(li);
  });
};