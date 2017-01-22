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
export async function setItem(key, value){
  try {
    let result = await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error){
    console.error(error);
    return false;
  }
}

export async function getItem(key){
  try {
    let result = await AsyncStorage.getItem(key);
    if(!result) return false;
    return JSON.parse(result);
  } catch (e){
    console.error(e);
    return false;
  }
}

function Duplicate(list, item){
  if(!list) return true;
  if(!item) return true;
  if(list.length == 0){
    return false;
  }
  return list.indexOf(item) > -1;
}

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

export async function createNewPage(key){
  let newPageNum = parseInt(isPage.exec(key)[2]) + 1;
  let newKey = "page_" + String(newPageNum);
  let model = {list: []};
  await setItem(newKey, model);
  return await getItem(newKey);
}

export async function addUrl(url){
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

export async function deleteItem(key){
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

export async function mergeItem(key, value){
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

export async function getAllKeys(){
  try{
    let keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch(e){
    console.error(e);
    return false;
  }
}

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

export async function flushRequest(){
  try{
    await AsyncStorage.flushGetRequests();
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}

export async function getMulti(keys){
  try{
    let results = await AsyncStorage.multiGet(keys);
    return results;

  } catch(e){
    console.error(e);
    return false;
  }
}


export async function setMulti(keyValue){
  try{
    await AsyncStorage.multiSet(keyValue);
    return true;

  } catch(e){
    console.error(e);
    return false;
  }
}

export async function removeMulti(keys){
  try{
    await AsyncStorage.multiRemove(keys);
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}

export async function mergeMulti(keyValue){
  try{
    await AsyncStorage.multiMerge(keyValue);
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}

async function mapUrls(key){
  let result = await getItem(key);
  return result;
}

export async function getAllSubs(){
  let pages = await getAllPages();
  let urls = [];
  for(i = 0; i < pages.length; i++){
    urls.push(await getItem(pages[i]))
  }
  urls = urls.map( (i) => { return i.list; });
  urls = [].concat.apply([], urls);
  return urls;
}

function dropKeys (item, a){
  if(a.indexOf(item) < 0 ){ return []; }	
  return a.slice(a.indexOf(item) + 1, a.length); 
}

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

export async function resyncPageNums(page){
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

export async function mergePages(pageOne, pageTwo){
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

export function initFeeds(dispatch){
  return async function(){
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
    getRssFeeds(dispatch)(subs, 0);
  }
}

