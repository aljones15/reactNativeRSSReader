import { getAllSubs } from './asyncStorage';
import YQL from './YQL.js';
import { UPDATE_ITEMS_FAILED, 
	UPDATING_ITEMS, 
	RSS_UPDATE } from '../actions.js';
// generic unix epoch date for date queries
export const epoch = new Date("1970-01-01");
// take is always 10 might make it mutable in the future
export const take: number = 10;
/**
 * gets all the Rss feeds
 * @param {Redux Dispatch} dispatch
 * @param {[Url]} urls
 * @param {Int} skip
 */ 
export function getRssFeeds(dispatch: Function){
    return function(urls: [string], skip: number){
           let yql = new YQL().
	      Select("*").
	      From("rss").
	      Skip(skip).
	      Take(take).
	      Where(urls).
	      Sort("pubDate", "true");
      dispatch({ type: UPDATING_ITEMS });
      return yql.Fetch(dispatch);
    }
  }
/**
 * refreshes the current feeds
 * @param {Redux Dispatch} dispatch
 * @param {{type: String}} action
 */
export function refreshFeeds(dispatch: Function, action: object){
      getAllSubs().then((urls) => {
        getRssFeeds(dispatch)(urls);
        if(action){
          dispatch(action);
        }
      })
  }
