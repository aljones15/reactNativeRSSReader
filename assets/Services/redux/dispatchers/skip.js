import * as Actions from '../actions.js';

/**
* setNumber uses flow types to make sure non-numebrs aren't set as skip
* @param {number} i
* @param {any} the state
@ @param {string} the key on the state
*/
// @flow
function setNumber(i: number, s: any, key: string): any{
  const isNumber = !isNaN(Number(i));
  if (isNumber) {
    s[key] = i;
  }
  return Object.assign({}, s);
}

export default function reduceSkip(state = {skip: 0}, action){
  if(typeof state === 'undefined') return initialState;
  switch(action.type){
    case Actions.RESET_SKIP:
      state.skip = 0;
      return Object.assign({}, state);
    case Actions.INCREMENT_SKIP:
      return setNumber(action.payload, state, "skip");
    case Actions.DECREMENT_SKIP:
      if(state.skip != action.payload){
        return setNumber(action.payload, state, "skip");
      } else {
        return state;
      }
    default:
      return state;
  }
}

