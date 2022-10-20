/* eslint-disable no-unused-vars */
import _, { add } from 'lodash';
import './style.css';
import {
  gameScore, button, addScore, submitButton,
} from './modules/hit-api.js';
/* eslint-enable no-unused-vars */
button.addEventListener('click', gameScore, { once: true });
submitButton.addEventListener('click', addScore);