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
  sortBy(s){
    this._sort = s;
    return this;
  }
  sortOrder(o){
    this._order = o;
    return this;
  }
  unixTime(d){
    return Math.floor(d.getTime() / 1000);
  }
  startDate(day){
    console.log(day.getTime() / 1000);
    this._startDate = this.unixTime(day);
    return this;
  }
  endDate(day){
    this._endDate = this.unixTime(day);
    return this;
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
      query += " and sortBy='" + this._sort + "'"
	      + " and " + "sortOrder='" + this._order + "'";
    }
    if(this._startDate >= 0 && this._endDate > 0){
      query += " and startDate='" + this._startDate + 
	      "' and endDate='" + this._endDate + "'";
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
