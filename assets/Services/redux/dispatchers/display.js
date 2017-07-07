import * as Actions from '../actions.js';

export default function reduceDisplay(
  state = { menu: false, section: "" }, action){
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

