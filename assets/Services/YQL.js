import { UPDATE_ITEMS_FAILED, 
	UPDATING_ITEMS, 
	RSS_UPDATE } from '../actions.js';

export default class YQL {
  Where(where){
    this._urls = where;
    return this;
  }
  Select(item){
    this._select = item;
    return this;
  }
  Take(take){
    this._take = take;
    return this;
  }
  Skip(skip){
    this._skip = skip;
    return this;
  }
  From(from){
    this._from = from;
    return this;
  }
  Sort(field, d){
    this._sort = field;
    this._order = d;
    return this;
  }
  unixTime(d){
    return Math.floor(d.getTime() / 1000);
  }
  formatUrls(){
    urls = this._urls.map( (u) => { return 'url=' + "'" + u + "'"; });
    urls = urls.join(' or ');
    return urls;
  }
  formatQuery(){
    const YQLBase = "https://query.yahooapis.com/v1/public/yql?q=";
    let query = YQLBase + "select " + this._select;
    if(this._from){
      query += " from " + this._from;
    }
    if(this._skip >= 0 && this._take > 0){
      query += " (" + String(this._skip) 
	      + "," + String(this._take) + ")"; 
    }
    if(this._urls){
      query += " where " + this.formatUrls();
    }
    if(this._sort && this._order){
      query += " | sort(field='" + this._sort + 
	      "' , descending='" + this._order + "')";
	      
    }
    return query;
  }
  Get(){
    let url = encodeURI(this.formatQuery());
    return url;
  }

  Fetch(dispatch){
      return fetch(this.Get(), {
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
}

// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss(0%2C10)%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2Ftopstories%22%20or%20url%3D%22http%3A%2F%2Fboingboing.com%2Frss%22%20or%20url%3D%22https%3A%2F%2Fnews.ycombinator.com%2Frss%22%20%7C%20sort(field%3D%22pubDate%22%2C%20descending%3D%22true%22)&diagnostics=true
