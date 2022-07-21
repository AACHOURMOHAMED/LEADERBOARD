import './style.scss';
import data from './modules/Data.js';

const refresh = document.getElementById('referesh');
refresh.addEventListener('click', () => {
  window.location.reload();
});

const ScoreContainer = document.querySelector('.Scores');

data.forEach((index) => {
  const List = document.createElement('tr');
  List.className = 'listScore';
  ScoreContainer.appendChild(List);
  const item = document.createElement('td');
  item.className = 'itemScore';
  item.textContent = index.name;
  List.appendChild(item);
  const item1 = document.createElement('td');
  item1.className = 'itemScore';
  item1.textContent = index.score;
  List.appendChild(item1);
});