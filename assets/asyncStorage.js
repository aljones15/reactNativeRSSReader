import { AsyncStorage } from 'react-native';
import { getRssFeeds } from './actions';

const isPage = /([Pp][Aa][Gg][Ee]\_)(\d+)/;

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

async function createNewPage(key){
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
      console.log("key length was zero");
      await setItem("page_1", {list: []});
      keys = await getAllPages();
    }
    let lastKey = keys.pop();
    let lastItem = await getItem(lastKey);
    if(Duplicate(lastItem.list, url)){
      console.log("Duplicate");
      console.log(url);
      return false;
    }
    if(lastItem.list.length >= 100){
      lastItem = await createNewPage(lastKey);
    }
    lastItem.list.push(url);
    await mergeItem(lastKey, lastItem);
    console.log(lastItem);
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

export function initFeeds(dispatch){
  return async function(){
    let subs = await getAllSubs();
    if(subs.length <= 0){
      const urls = ["http://rss.slashdot.org/Slashdot/slashdotMain",
                    "http://kotaku.com/vip.xml",
                    "http://rss.nytimes.com/services/xml/rss/nyt/World.xml",
                    "http://boingboing.net/feed"];
      for(i = 0; i <= urls.length; i++){
         await addUrl(urls[i]);
      };
      subs = await getAllSubs();
    }
    getRssFeeds(dispatch)(subs);
  }
}

