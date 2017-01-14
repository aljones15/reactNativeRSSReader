import { getAllSubs } from './asyncStorage';
import YQL from './YQL.js';
import { UPDATE_ITEMS_FAILED, UPDATING_ITEMS, RSS_UPDATE } from '../actions.js';

export const epoch = new Date("01-01-1970");
export const take = 10;

export let yahooQLbase = "https://query.yahooapis.com/v1/public/yql?q=select * from rss (1,10) where ";

function fetchYQL (uri, dispatch){
      return fetch(uri, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then((r) => {
      if(r){
        r.json().then((t) => dispatch(RSS_UPDATE(t)))
    } else {
      console.log("fetch rss FETCH_FAILED");
      dispatch({
        type: UPDATE_ITEMS_FAILED,
        payload: r
      });
    }
  }).catch((error) => {
      console.error("FETCH_FAILED");
      dispatch({
        type: UPDATE_ITEMS_FAILED,
        payload: error
      });
      })
}

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
      return fetchYQL(yql.Get(), dispatch);
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
