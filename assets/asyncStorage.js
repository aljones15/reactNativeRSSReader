import { AsyncStorage } from 'react-native';


export function setItem(key, value){
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error){
    console.error(error);
    return false;
  }
}

export function getItem(key){
  try {
    let result = await AsyncStorage.getItem(key);
    return result;
  } catch (e){
    console.error(e);
    return false;
  }
}

export function deleteItem(key){
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

export mergeItem(key, value){
  try {
    await AsyncStorage.mergeItem(key, value);
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

export function delete_all(){
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

export function getAllKeys(){
  try{

  } catch(e){
    console.error(e);
    return false;
  }
}

export function flushRequest(){
  try{
    await AsyncStorage.flushGetRequests();
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}

export function getMulti(keys){
  try{
    let results = await AsyncStorage.multiGet(keys);
    return results;

  } catch(e){
    console.error(e);
    return false;
  }
}

export function setMulti(keyValue){
  try{
    await AsyncStorage.multiSet(keyValue);
    return true;

  } catch(e){
    console.error(e);
    return false;
  }
}

export function removeMulti(keys){
  try{
    await AsyncStorage.multiRemove(keys);
    return true;

  } catch(e){
    console.error(e);
    return false;
  }
}

export function mergeMulti(keyValue){
  try{
    await AsyncStorage.multiMerge(keyValue);
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}
