import { createStore, combineReducers } from 'redux';
import * as Actions from './actions.js';

var initialState = {item: null, network_update: false, rss: {}, errors: []};

function reduceItems(state = {item: null, network_update: false, rss: {}, errors: []}, action){
  if(typeof state === 'undefined') return initialState;
  switch (action.type) {
    case Actions.UPDATING_ITEMS:
      state.network_update = true;
      return Object.assign({}, state);
    case Actions.UPDATE_RSS:
      state.rss = action.payload;
      return Object.assign({}, state);
    case Actions.UPDATE_ITEMS_FAILED:
      state.errors.push(action.payload);
      return Object.assign({}, state);
    case Actions.REMOVE_ITEM:
      state.item = null;
      return Object.assign({}, state);
    case Actions.SHOW_ITEM:
      console.log("show item reducer");
      state.item = action.payload;
      return Object.assign({}, state);
    case Actions.REMOVE_ERROR:
      state.errors = state.errors.filter((e) =>{ if(e != action.payload) return e; });
      return Object.assign({}, state);
    default:
      return state;
  }
}

function reduceDisplay(state = { menu: false, section: "" }, action){
  if(typeof state === 'undefined') return initialState;
  switch (action.type) {
    case Actions.TOGGLE_MODAL:
      if(action.name == state.section){
        state.menu = !state.menu;
        state.section = action.name;
      }
      else{
        state.menu = true;
        state.section = action.name;
      }
      return Object.assign({}, state);
    default:
      return state;
  }
}

let allReducers = combineReducers({ reduceItems, reduceDisplay })

export let store = createStore(allReducers);
