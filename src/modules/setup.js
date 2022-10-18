const recentSores = [
  { name: 'Ishara', score: 100 }, { name: 'Theo', score: 20 }, { name: 'Fidelie', score: 50 }, { name: 'Vanessa', score: 78 }, { name: 'Henoch', score: 125 }, { name: 'Benedy', score: 77 }, { name: 'Japhet', score: 42 },
];

export default function setupProject() {
  recentSores.forEach((elt, index) => {
    const { name, score } = elt;
    const listScores = document.querySelector('.list-scores');
    const li = document.createElement('li');
    li.innerText = `${name}: ${score}`;
    li.id = index + 1;
    listScores.appendChild(li);
  });
}