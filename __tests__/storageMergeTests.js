require("babel-polyfill");
const mockStorage = require('mock-async-storage');
import * as storage from '../assets/Services/asyncStorage.js';

describe("should merge", () =>{
  mockStorage.mock();
  let model = {list: ["http://www.google.com"]};
  let model2 = {list: ["http://www.lycos.com"]};
  it("urls", async () => {
   await storage.deleteAll();
   let result = await storage.setItem("urls", model);
   expect(result).toBeTruthy();
   result = await storage.mergeItem("urls", model2);
   expect(result).toBeTruthy();
   let urls = await storage.getItem("urls");
   expect(urls).toBeInstanceOf(Object);
   expect(urls.list).toHaveLength(2);
   expect(urls.list[0]).toBe("http://www.google.com");
   expect(urls.list.pop()).toBe("http://www.lycos.com");  
  })
  
  function fakeUrls(baseUrl, count){
    let urls = [];
    for(i = 0; i < count; i++){
      urls.push(baseUrl + String(i));
    }
    return urls;
  }

  async function setUpPage(num, count){
    let urls = fakeUrls("http://www." + num + ".com/", count);
    let m = {list: urls};
    let pageNum = "page_" + num;
    let result = await storage.setItem(pageNum, m);
    expect(result).toBeTruthy();
    return pageNum;
  }

  async function testKeys(len, start, end){
    let keys = await storage.getAllKeys();
    expect(keys).toBeInstanceOf(Object);
    expect(keys).toHaveLength(len);
    expect(keys[0]).toBe(start);
    expect(keys.pop()).toBe(end);
  }

  /* if we merge 2 pages does one get deleted? */
  it("2 pages", async () => {
    await storage.deleteAll();
    let one = await setUpPage(1, 40); 
    let two  = await setUpPage(2,50);
    let result = await storage.mergePages(one, two);
    expect(result).toBeInstanceOf(Object);
    expect(result.list).toHaveLength(90);
    let keys = await storage.getAllKeys();
    expect(keys).toHaveLength(1);
  })

  it("3 pages", async () => {
    await storage.deleteAll();
    let one = await setUpPage(1, 50);
    let two  = await setUpPage(2, 50);
    let three = await setUpPage(3, 50);
    let firstResult = await storage.mergePages("page_1", "page_2");
    expect(firstResult).toBeTruthy();
    expect(firstResult.list).toHaveLength(100);
    await testKeys(2, "page_1", "page_2");
    let secondResult = await storage.mergePages("page_1", "page_2");
    expect(secondResult).toBe(false);
    await testKeys(2, "page_1", "page_2");
  })

  it("all pages", async () => {
   await storage.deleteAll();
   let one = await setUpPage(1, 50),
   two = await setUpPage(2, 20),
   three = await setUpPage(3, 15),
   four = await setUpPage(4, 50),
   five = await setUpPage(5, 20);
   let subs = await storage.getAllSubs();
   expect(subs).toBeInstanceOf(Array);
   expect(subs).toHaveLength(155); 
   await testKeys(5, "page_1", "page_5");
   let result = await storage.resyncAllPages();
   await testKeys(2, "page_1", "page_2");
   subs = await storage.getAllSubs();
   expect(subs).toBeInstanceOf(Array);
   expect(subs).toHaveLength(155); 
  })
})
