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

  /* if we merge 2 pages does one get deleted? */
  it("2 pages", async () => {
    await storage.deleteAll();
    let l1 = fakeUrls("http://www.one.com/", 40);
    let m1 = {list: l1};
    let m1Result = await storage.setItem("page_1", m1);
    expect(m1Result).toBeTruthy();
    let l2  = fakeUrls("http://www.two.com/", 50);
    let m2 = {list: l2}; 
    let m2Result = await storage.setItem("page_2", m2);
    expect(m2Result).toBeTruthy();
    let result = await storage.mergePages("page_1", "page_2");
    expect(result).toBeInstanceOf(Object);
    expect(result.list).toHaveLength(90);
    let keys = await storage.getAllKeys();
    expect(keys).toHaveLength(1);
  })

  it("3 pages", async () => {
    await storage.deleteAll();
    let l1 = fakeUrls("http://www.one.com/", 50);
    let m1 = {list: l1};
    let m1Result = await storage.setItem("page_1", m1);
    expect(m1Result).toBeTruthy();
    let l2  = fakeUrls("http://www.two.com/", 50);
    let m2 = {list: l2}; 
    let m2Result = await storage.setItem("page_2", m2);
    expect(m2Result).toBeTruthy();
    let l3 = fakeUrls("http://www.three.com/", 50);
    let m3 = {list: l3}; 
    let m3Result = await storage.setItem("page_3", m2);
    expect(m3Result).toBeTruthy();
    let firstResult = await storage.mergePages("page_1", "page_2");
    expect(firstResult).toBeTruthy();
    let keys = await storage.getAllKeys();
    expect(keys).toHaveLength(2);
    expect(keys[0]).toBe("page_1");
    expect(keys.pop()).toBe("page_2");
    let secondResult = await storage.mergePages("page_1", "page_2");
    expect(secondResult).toBe(false);
    keys = await storage.getAllKeys();
    expect(keys).toHaveLength(2);
    expect(keys[0]).toBe("page_1");
    expect(keys.pop()).toBe("page_2");
  })
})
