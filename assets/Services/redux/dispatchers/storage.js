export default function toStorage(state = {urls: []}, action){
  switch(action.type){
    case Actions.ADD_FEED:
      state.urls.push(action.url);
      return Object.assign({}, state);
  }
}
