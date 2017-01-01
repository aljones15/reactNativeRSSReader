export const UPDATE_RSS = "UPDATE_RSS";
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const UPDATE_ITEMS_FAILED = "UPDATE_ITEMS_FAILED";
export const UPDATING_ITEMS = "UPDATING_ITEMS";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SHOW_ITEM = "SHOW_ITEM";
export const REMOVE_ERROR = "REMOVE_ERROR";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADD_FEED = "ADD_FEED";

export const RSS_UPDATE = (payload) => {
  return {
    type: UPDATE_RSS,
    payload: payload
  }
}

export const select_item = (item) => {
  return {
    type: SHOW_ITEM,
    payload: item
  }
}

export let yahooQLbase = "https://query.yahooapis.com/v1/public/yql?q=select * from rss where ";

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
    return function(urls){
      urls = urls.map( (u) => { return 'url=' + "'" + u + "'"; });
      urls = urls.join(' or ');
      let uri = encodeURI(yahooQLbase + urls + "and sortBy='pubDate' and sortOrder='asc'");
      dispatch({ type: UPDATING_ITEMS });
      return fetchYQL(uri, dispatch);
    }
  }

