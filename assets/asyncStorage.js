import { AsyncStorage } from 'react-native';

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
  if(!list) return false;
  if(!item) return false;
  if(list.length == 0){
    return false;
  }
  return list.indexOf(item) < 0;
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
    await AsyncStorage.mergeItem(key, value);
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

