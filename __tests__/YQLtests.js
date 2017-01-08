import YQL from '../assets/Services/YQL.js';

describe("should build a query ", () => {
  let yql = new YQL();
  function testGet(y, ...queries){
   let result = y.Get();
   queries.map((q) => expect(result).toContain(q));
  }
  it("with select", () => {
    yql = yql.Select("*");
    testGet(yql, "select", "*");
  })
  it("with from", () => {
    yql = yql.From("rss");
    testGet(yql, "from", "rss");   
  })
  it("with skip and take", () => {
    yql = yql.Skip(0).Take(10);
    testGet(yql, "0", "10");
  })
  it("with url", () => {
    yql = yql.Where(["http://www.google.com"]);
    testGet(yql, "url", "http://www.google.com");
  })
  it("with urls", () => {
    yql = yql.Where(["http://www.lycos.com", "http://www.one.org"]);
    testGet(yql, "http://www.lycos.com", "or", "http://www.one.org");
  })
  it("with sort and order", () => {
    yql = yql.sortBy("pubDate").sortOrder("asc");
    testGet(yql, "sortBy", "pubDate", "sortOrder", "asc"); 
  })
})
