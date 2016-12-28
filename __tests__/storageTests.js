import { setItem, getItem } from '../assets/asyncStorage.js';

describe('set item', () => {
 it('should add a string to local storage', async () => {
   let result = await setItem("test", "test");
   expect(result).toBe(true);
 });
});

describe('get item', () => {
 it('should get item from local storage', async () => {
   let result = await getItem("test");
   expect(result).toBe(true);
 });
});
