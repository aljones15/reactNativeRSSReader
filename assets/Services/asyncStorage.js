import { AsyncStorage } from 'react-native';
import { getRssFeeds } from './rssService.js';
/**
 * isPage is a regex that determines 
 * if a key in local storage is a page key
 */
const isPage = /([Pp][Aa][Gg][Ee]\_)(\d+)/;
/**
 * setItem adds an item to localStorage
 * @param {String} key
 * @param {Json Object} value
 */
export async function setItem(key: string, value: object){
  try {
    let result = await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error){
    console.error(error);
    return false;
  }
}
/**
 * getItem return an item as a Json Object
 * param {String} key
 */
export async function getItem(key: string){
  try {
    let result = await AsyncStorage.getItem(key);
    if(!result) return false;
    return JSON.parse(result);
  } catch (e){
    console.error(e);
    return false;
  }
}
/**
 * Duplicate return a bool to determine 
 * if the item already exists in the array
 * @param {Array} list
 * @param item Json Object
 */
function Duplicate(list, item){
  if(!list) return true;
  if(!item) return true;
  if(list.length == 0){
    return false;
  }
  return list.includes(item);
}
/**
 * returns all page keys from local storage
 */
export async function getAllPages(){
 try {
   let all_keys = await getAllKeys();
   return all_keys.filter((k) => isPage.test(k)).sort(
   (a,b) => { return isPage.exec(a)[2] - isPage.exec(b)[2]}
   );

 } catch(e){
   console.error(e);
   return [];
 }
}
/**
 * creates a new page
 * @param {String} key
 */
export async function createNewPage(key: string){
  let newPageNum = parseInt(isPage.exec(key)[2]) + 1;
  let newKey = "page_" + String(newPageNum);
  let model = {list: []};
  await setItem(newKey, model);
  return await getItem(newKey);
}

/**
 * adds a url to first page with less than 100 entries
 * @param {String} url
 */
export async function addUrl(url: string){
  try{
    let keys = await getAllPages();
    if(keys.length == 0){ 
      await setItem("page_1", {list: []});
      keys = await getAllPages();
    }
    let lastKey = keys.pop();
    let lastItem = await getItem(lastKey);
    if(Duplicate(lastItem.list, url)){
        return false;
    }
    if(lastItem.list.length >= 100){
      lastItem = await createNewPage(lastKey);
    }
    lastItem.list.push(url);
    await mergeItem(lastKey, lastItem);
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}

/**
 * deletes an item by kef from local storage
 * return a bool representing success
 * @param {String} key
 */
export async function deleteItem(key: string){
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

/**
 * merges two json objects in local storage
 * @param {String} key
 * @param {Json Object} value
 */

export async function mergeItem(key: string, value: object){
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

/**
 * returns an array of strings with key names
 */
export async function getAllKeys(){
  try{
    let keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch(e){
    console.error(e);
    return false;
  }
}

/**
 * useful for debug deletes everything in local storage
 */
export async function deleteAll(){
  try {
    let keys = await getAllKeys();
    if(keys && keys.length > 0){
      await AsyncStorage.clear();
    }
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}
/**
 * executes the current requests
 */
export async function flushRequest(){
  try{
    await AsyncStorage.flushGetRequests();
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}

/**
 * gets multiple keys
 * @param {[String]} keys
 */

export async function getMulti(keys: [string]){
  try{
    let results = await AsyncStorage.multiGet(keys);
    return results;

  } catch(e){
    console.error(e);
    return false;
  }
}

/**
 * sets multiple objects
 * @param {KeyValue Object}
 */
export async function setMulti(keyValue){
  try{
    // note this is untested might require json stringfiy
    await AsyncStorage.multiSet(keyValue);
    return true;

  } catch(e){
    console.error(e);
    return false;
  }
}
/**
 * removes muliple objects in local storage
 * @param {[String]} keys
 */
export async function removeMulti(keys: [string]){
  try{
    await AsyncStorage.multiRemove(keys);
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}
/**
 * merges multiple objects
 * @param {KeyValue Object} keyValue
 */
export async function mergeMulti(keyValue){
  try{
    await AsyncStorage.multiMerge(keyValue);
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}
/** 
 * used in for loops to get urls
 */
async function mapUrls(key: string){
  let result = await getItem(key);
  return result;
}
/**
 * gets all subscriptions then returns them as
 * one large array of urls
 */
export async function getAllSubs(){
  console.log('getAllSubs -> getting all subs');
  let pages = await getAllPages();
  console.log('getAllSubs -> got all pages');
  let urls = [];
  for(i = 0; i < pages.length; i++){
    urls.push(await getItem(pages[i]))
  }
  urls = urls.map( (i) => { return i.list; });
  urls = [].concat.apply([], urls);
  console.log('getAllSubs -> made the url list');
  return urls;
}
/**
 * drops a key from a string array of keys
 * used with page merges to resync page numbers
 * @param {string} item
 * @param {Array} a
 */ 
function dropKeys (item: string, a: [string]){
  if(a.indexOf(item) < 0 ){ return []; }	
  return a.slice(a.indexOf(item) + 1, a.length); 
}
/**
 * resyncs all pages in local storage
 */
export async function resyncAllPages(){
  const take = 100;
  let skip = 0;
  let subs = await getAllSubs(); 
  await deleteAll();
  const pages = Math.ceil(subs.length / 100);
  for(i = 1; i <= pages; i++){
    let pageNum = "page_" + i;
    let subList = subs.slice(skip, skip + take);
    await setItem(pageNum, { list: subList } );
    skip += take;
  }
  return true;
}
/**
 * called by merge pages
 * resyncs all pages above the merged page
 * @param {String} page
 */
export async function resyncPageNums(page: string){
  let keys = await getAllPages();
  keys = dropKeys(page, keys).map((p) => { return isPage.exec(p); });
  if(keys.length <= 0){ return true; }
  let urls = [];
  for(i = 0; i < keys.length; i++){
    var item = await getItem(keys[i][0]);
      urls.push(item.list);
      await deleteItem(keys[i][0]);
  }
  keys = keys.map((key) => { 
	  const newNum = key[2] - 1;
	  return "page_" + newNum; });
  if(keys.length != urls.length){ return await resyncAllPages() }
  for(i = 0; i < keys.length; i++){
    await setItem(keys[i], {list: urls[i] });
  }
  return true;
}
/**
 * merges two pages into one if both pages
 * have less than 50 items in them
 * @param {String} pageOne
 * @param {String} pageTwo
 */
export async function mergePages(pageOne: string, pageTwo: string){
  let itemOne = await getItem(pageOne);
  if(!itemOne){ return false };
  let itemTwo = await getItem(pageTwo);
  if(!itemTwo){ return false; }
  let totalLength = itemOne.list.length + itemTwo.list.length;
  if(totalLength > 100){ return false; }
  let mergeResult = await mergeItem(pageOne, itemTwo);
  await deleteItem(pageTwo);
  await resyncPageNums(pageOne);
  return await getItem(pageOne);
}
/**
 * init function called on start up that
 * concats all the urls into one list and then
 * calls on YQL to fetch them
 * @param {Function} a callback
 */
export async function initFeeds(cb: Function){
    let subs = await getAllSubs();
    if(subs.length <= 0){
      const urls = ["http://rss.slashdot.org/Slashdot/slashdotMain",
                    "http://kotaku.com/vip.xml",
                    "https://feedpress.me/techbeacon",
                    "http://rss.nytimes.com/services/xml/rss/nyt/World.xml",
                    "http://boingboing.net/feed"];
      for(i = 0; i <= urls.length; i++){
         await addUrl(urls[i]);
      };
      subs = await getAllSubs();
    }
    getRssFeeds(cb)(subs, 0);
}

