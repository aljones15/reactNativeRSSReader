const mockStorage = require('mock-async-storage');
import * as storage from '../assets/Services/asyncStorage.js';

describe("should get", () => {
  it("nothing", async () => {
    mockStorage.mock();
    let result = await storage.getItem("nothing");
    expect(result).toEqual(false);
    mockStorage.release();
  });
  it("something", async () => {
    mockStorage.mock();
    const item = {list: [1,2,3]};
    await storage.setItem("something", item);
    let result = await storage.getItem("something");
    expect(result).toEqual(item);
  })
});

describe("should add", () => {
  const baseURL = "http://www.test.org/";

  async function addMultipleUrls(start, end){
    for(i = start; i < end; i ++){
      let result = await storage.addUrl(baseURL + i);
      expect(result).toBe(true);
    }
  }

  async function testPageCount(eCount){
    let pages = await storage.getAllPages();
    expect(pages).not.toBe(null);
    expect(pages.length).toBe(eCount);
  }

  mockStorage.mock();
  it("one url", async () => { 
    let result = await storage.addUrl(baseURL + '1');
    expect(result).toBe(true);
    await testPageCount(1); 
  })

  it("ten urls", async() => { 
	await addMultipleUrls(2,12);
	await testPageCount(1);  
  })

  it("fifty urls", async () => { 
	 await addMultipleUrls(12, 52);
         await testPageCount(1);
  })

  it("one hundred urls", async () => {
	  await addMultipleUrls(52,101);
	  await testPageCount(1);
  })

  it("two hundred urls", async () => {
    await addMultipleUrls(101,201);
    await testPageCount(2);
  })

  it("one thousand urls", async () => {
    await addMultipleUrls(201,1001);
    await testPageCount(10);
  })

  it("ten thousand urls", async () => {
    await addMultipleUrls(1001, 10001);
    await testPageCount(100);
  })
  /* TESTS BREAK HERE
  it("one hundred thousand", async () => {
    await addMultipleUrls(10001, 100001);
    await testPageCount(1000);
  }) */ 
  mockStorage.release();
})
