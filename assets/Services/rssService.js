import { getAllSubs } from './asyncStorage';
import YQL from './YQL.js';
import { UPDATE_ITEMS_FAILED, 
	UPDATING_ITEMS, 
	RSS_UPDATE } from '../actions.js';

export const epoch = new Date("1970-01-01");
export const take = 10;

export function getRssFeeds(dispatch){
    return function(urls, skip){
           let yql = new YQL().
	      Select("*").
	      From("rss").
	      Skip(skip).
	      Take(take).
	      Where(urls).
	      sortBy("pubDate").
	      sortOrder("asc").
	      startDate(epoch).
	      endDate(new Date())
      dispatch({ type: UPDATING_ITEMS });
      return yql.Fetch(dispatch);
    }
  }

export function refreshFeeds(dispatch, action){
      getAllSubs().then((urls) => {
        getRssFeeds(dispatch)(urls);
        if(action){
          dispatch(action);
        }
      })
  }
