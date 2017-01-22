"use strict";
require("babel-polyfill");
const mockStorage = require('mock-async-storage');
import * as storage from '../assets/Services/asyncStorage.js';

describe("should delete", () => {
  mockStorage.mock();
  it("one page", async () => {
   await storage.deleteAll();
   let newPage = await storage.createNewPage("page_0");
   expect(newPage).toBeInstanceOf(Object);
   let keys = await storage.getAllKeys();
   expect(keys).toBeInstanceOf(Array);
   expect(keys).toHaveLength(1);
   let deleteResult = await storage.deleteItem(keys.pop());
   keys = await storage.getAllKeys();
   expect(keys).toBeInstanceOf(Array);
   expect(keys).toHaveLength(0);
  })

  it("one page but keep the second", async () => {
   let firstPage = await storage.createNewPage("page_0");
   expect(firstPage).toBeInstanceOf(Object);
   let secondPage = await storage.createNewPage("page_1");
   expect(secondPage).not.toBe(false);
   expect(secondPage).toBeInstanceOf(Object);
   let keys = await storage.getAllKeys();
   expect(keys).toBeInstanceOf(Array);
   expect(keys).toHaveLength(2);
   let deleteResult = await storage.deleteItem(keys.pop());
   keys = await storage.getAllKeys();
   expect(keys).toBeInstanceOf(Array);
   expect(keys).toHaveLength(1);
   expect(keys.pop()).toBe("page_1");
  })
})
