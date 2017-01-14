import { getAllSubs } from './asyncStorage';
import YQL from './YQL.js';
import { UPDATE_ITEMS_FAILED, 
	UPDATING_ITEMS, 
	RSS_UPDATE } from '../actions.js';

export const epoch = new Date("01-01-1970");
export const take = 10;


/*
SELECT * FROM search.ec (1, 10) WHERE keyword='ipad' and property='shopping' and sortBy='price' and sortOrder='asc' and filters='ship_fast'*/

export function getRss(dispatch){
  return function(url){
      url = 'url=' + "'" + url + "'";
      let uri = encodeURI(yahooQLbase + url);
      console.log(uri);
      return fetchYQL(uri, dispatch);
  }
}

  export function getRssFeeds(dispatch){
    return function(urls, skip){
           let yql = new YQL().
	      Select("*").
	      From("rss").
	      Skip(skip).
	      Take(take).
	      Where(urls).
	      sortBy("pubDate").
	      sortOrder("asc");
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
