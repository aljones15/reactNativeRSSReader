import { INCREMENT_SKIP, DECREMENT_SKIP } from 'Services/redux/actions.js';
import { getRssFeeds } from 'Services/rssService.js';
import { getAllSubs } from 'Services/asyncStorage.js';

export const incrementThunk = (skip, updater) => (dispatch) => {
  dispatch({ type: INCREMENT_SKIP, payload: skip });
  getAllSubs().then((subs) => {getRssFeeds(updater)(subs, skip)} ); 
}

export const decrementThunk = (previous_skip, next_skip, updater) => (dispatch) => {
  dispatch({ type: DECREMENT_SKIP, payload: next_skip });
  if(previous_skip !== next_skip){ 
    getAllSubs().then((subs)=> 
      getRssFeeds(updater)(subs, next_skip));
  }
}
