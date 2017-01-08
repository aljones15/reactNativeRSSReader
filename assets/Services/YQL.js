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
      query += this.formatUrls();
    }
    if(this._sort && this._order){
      query += " sortBy=" + this._sort 
	      + " and " + "sortOrder=" + this._order;
    }
    return query;
  }
  Get(){
    let url = encodeURI(this.formatQuery());
    return url;
  }
}
