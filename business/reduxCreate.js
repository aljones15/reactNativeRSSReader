import { createStore } from 'redux';
import * as Actions from './actions.js';

var initialState = {item: null, network_update: false, rss: {}, errors: []};

export function reduceItems(state = initialState, action){
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
      this.state.item = null;
      return Object({}, state);
    case Actions.SHOW_ITEM:
      this.state.item = action.payload;
      return Object.assign({}, state);
    case Actions.REMOVE_ERROR:
      state.errors = state.errors.filter((e) =>{ if(e != action.payload) return e; });
      return Object.assign({}, state);
    default:
      return state
  }
}

export let store = createStore(reduceItems);
