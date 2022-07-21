import './style.scss';
import { addScoreToApi, scoreList } from './modules/api.js';
import List from './modules/List.js';

const referesh = document.getElementById('referesh');
const username = document.getElementById('name');
const score = document.getElementById('score');
const add = document.getElementById('btn');
const listItem = document.getElementsByClassName('item');

referesh.addEventListener('click', () => {
  window.location.reload();
});

if (!listItem.length) {
  scoreList();
}

add.addEventListener('click', () => {
  const newItemIndex = listItem.length;
  if (username.value && score.value && score.value <= 9999999) {
    addScoreToApi(username.value, score.value);
    username.value = null;
    score.value = null;
  }
});
