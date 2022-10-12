import './style.css';
import {
  displaySection,
  addBtn,
} from './Modules/itemDeclaration.js';
import { Score } from './Modules/scores.js';

const availableScore = new Score();

document.addEventListener('DOMContentLoaded', () => {
  availableScore.displayItem();
});

addBtn.addEventListener('click', availableScore.addScore);

