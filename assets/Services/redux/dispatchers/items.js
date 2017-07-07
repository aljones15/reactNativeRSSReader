import * as Actions from '../actions.js';

export default function reduceItems(
      state = {
	item: null, 
	network_update: false, 
	rss: {}, 
	errors: []
      }, action){
  switch (action.type) {
    case Actions.UPDATING_ITEMS:
      state.network_update = true;
      return Object.assign({}, state);
    case Actions.UPDATE_RSS:
      state.rss = action.payload;
      state.network_update = false;
      return Object.assign({}, state);
    case Actions.UPDATE_ITEMS_FAILED:
      console.error(action.payload);
      state.errors.push(action.payload);
      return Object.assign({}, state);
    case Actions.REMOVE_ITEM:
      state.item = null;
      return Object.assign({}, state);
    case Actions.SHOW_ITEM:
      state.item = action.payload;
      return Object.assign({}, state);
    case Actions.REMOVE_ERROR:
      state.errors = state.errors.filter((e) =>{ if(e != action.payload) return e; });
      return Object.assign({}, state);
    default:
      return state;
  }
}

