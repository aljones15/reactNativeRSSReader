import { combineReducers } from 'redux';
import display from './display.js';
//import items from './items.js';
import skip from './skip.js';

const all = {display, skip};
export default combineReducers(all);
