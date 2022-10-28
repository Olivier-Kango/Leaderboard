import './style.css';
import {
  gameScore, button, addScore, submitButton,
} from './modules/hit-api.js';

button.addEventListener('click', gameScore, { once: true });
submitButton.addEventListener('click', addScore);
