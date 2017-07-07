import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import allReducers from './dispatchers/index.js';

const middleWare = applyMiddleware(promise(), thunk);
export const store = createStore(allReducers, middleWare);
