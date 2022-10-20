/* eslint-disable no-unused-vars */
import _, { add } from 'lodash';
import './style.css';
import { gameScore, button } from './modules/hit-api.js';
/* eslint-enable no-unused-vars */
button.addEventListener('click', gameScore, { once: true });