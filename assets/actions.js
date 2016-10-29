export const UPDATE_RSS = "UPDATE_RSS";
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const UPDATE_ITEMS_FAILED = "UPDATE_ITEMS_FAILED";
export const UPDATING_ITEMS = "UPDATING_ITEMS";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SHOW_ITEM = "SHOW_ITEM";
export const REMOVE_ERROR = "REMOVE_ERROR";

export const RSS_UPDATE = (payload) => {
  return {
    type: UPDATE_RSS,
    payload: payload
  }
}
