require("babel-polyfill");
const mockStorage = require('mock-async-storage');
import * as storage from '../assets/Services/asyncStorage.js';
import { isUrl } from '../assets/Services/validation.js';

describe("should catch a ", () => {
  mockStorage.mock();
  it("duplicate", async () => {
    await storage.deleteAll();
    const url = "http://www.localhost.com";
    console.log("should catch dup");
    console.log(url);
    let result = await storage.addUrl(url);
    expect(result).toBe(true);
    let urls = await storage.getAllSubs();
    expect(urls.length).toBe(1);
    result = await storage.addUrl(url);
    expect(result).toBe(false);
    urls = await storage.getAllSubs();
    expect(urls.length).toBe(1);
  })
  it("invalid url", () => {
    let result = isUrl.test("hftr:/\eee.s.org");
    expect(result).toBe(false);
    result = isUrl.test("http://www.world.com");
    expect(result).toBe(true);
  })
})
