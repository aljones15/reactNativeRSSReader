"use strict";
import { store } from '../assets/Services/redux/index.js';
import { INCREMENT_SKIP, DECREMENT_SKIP, RESET_SKIP} from '../assets/Services/redux/actions.js';

describe("Should ", () => {
    
  it("increment skip from 0 to 10", () => {
    const skip = 100;
    store.dispatch({type: INCREMENT_SKIP, payload: skip});
    const state = store.getState();
    expect(state.skip.skip).toBe(skip);
  })

  it("decrement skip from 10 to 0", () => {
    const skip = 0;
    store.dispatch({type: DECREMENT_SKIP, payload: skip});
    const state = store.getState();
    expect(state.skip.skip).toBe(skip);
  })

  it("reset skip to 0", () => {
    store.dispatch({type: RESET_SKIP});
    const state = store.getState();
    expect(state.skip.skip).toBe(0);
  })

  it("should not increment", () => {
    const skip = "BAD2";
    store.dispatch({type: DECREMENT_SKIP, payload: skip});
    const state = store.getState();
    expect(state.skip.skip).toBe(0);

  })

});
