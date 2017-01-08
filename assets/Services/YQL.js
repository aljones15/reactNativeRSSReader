export default class YQL {
  private select, where, take, skip
  public Where(statement){
    this.where = statement;
    return this;
  }
  public Select(item){
    this.select = item;
    return this;
  }
  public Take(take){
    this.take = take;
    return this;
  }
  public Skip(skip){
    this.skip = skip;
    return this;
  }
}
