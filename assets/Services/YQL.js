import { UPDATE_ITEMS_FAILED, 
	UPDATING_ITEMS, 
	RSS_UPDATE } from '../actions.js';

export default class YQL {
  /**
   * Adds the urls to the request
   * @param {[String]} where
   */
  Where(where: string[]){
    this._urls = where;
    return this;
  }
  /**
   * What to select from the items in the feed
   * @param {String} "item1, item2"
   */
  Select(item: string){
    this._select = item;
    return this;
  }
  /** 
   * the number ef items from each feed to select from
   * @param {Number} take
   */
  Take(take: number){
    this._take = take;
    return this;
  }
  /**
   * the offset of items to skip
   * basic pagination method
   * @param {Number} skip
   */
  Skip(skip: number){
    this._skip = skip;
    return this;
  }
  /**
   * the objech in the query to select from
   * @param {String} from
   */
  From(from: string){
    this._from = from;
    return this;
  }
  /**
   * The sort method to use
   * @param {String} field to sort on
   * @param {Boolan} descending true / false
   */
  Sort(field: string, d: boolean){
    this._sort = field;
    this._order = String(d);
    return this;
  }
  /**
   * converts Date object to unix time stapm
   * @param {Date}
   */
  unixTime(d: date){
    return Math.floor(d.getTime() / 1000);
  }
  /**
   * formats the urls passed in by where to a string
   */
  formatUrls(){
    urls = this._urls.map( (u) => { return 'url=' + "'" + u + "'"; });
    urls = urls.join(' or ');
    return urls;
  }
  /**
   * formats the entire query to a string
   */
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
  /**
   * terns the query into a uri
   */
  Get(){
    let url = encodeURI(this.formatQuery());
    return url;
  }
  /**
   * fetches the query
   */
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
