import * as axios from "axios";

const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
const SET_LIST = 'SET_LIST';
const SET_SHOW_OUT_BUTTONS = 'SET_SHOW_OUT_BUTTONS';
const SET_SHOW_CHOOSE_ITEM = 'SET_SHOW_CHOOSE_ITEM';
const SET_CHOOSED_ITEMS = 'SET_CHOOSED_ITEMS';
const REMOVE_CHOOSED_ITEMS = 'REMOVE_CHOOSED_ITEMS';
const REMOVE_LIST = 'REMOVE_LIST';
export const GET_ALL_CATEGORIES = 'GET_ALL_cATEGORIES';
export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const GET_ALL_CATEGORIES_ERROR = 'GET_ALL_CATEGORIES_ERROR';

export const GET_LIST = 'GET_LIST';
export const GET_List_SUCCESS = 'GET_List_SUCCESS';
export const GET_LIST_ERROR = 'GET_LIST_ERROR';

export const GET_LIST_INFO = 'GET_LIST_INFO';
export const GET_LIST_INFO_SUCCESS = 'GET_LIST_INFO_SUCCESS';
export const GET_LIST_INFO_ERROR = 'GET_LIST_INFO_ERROR';

let initialState = {
  listNames: [],
  aboutList: [],
  load: false,
  error: null
}

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_LIST:
          return {
              ...state, error: null, load: true
          }
      case GET_List_SUCCESS:
        //console.log(action, 'action');
          return {
              ...state, error: null, load: false, listNames: action.payload
          }
      case GET_LIST_ERROR:
          return {
              ...state, error: true, load: false
          }
      case GET_LIST_INFO:
            return {
                ...state, error: null, load: true
            }
        case GET_LIST_INFO_SUCCESS:
          //console.log(action, 'action');
            return {
                ...state, error: null, load: false, aboutList: action.payload
            }
        case GET_LIST_INFO_ERROR:
            return {
                ...state, error: true, load: false
            }
        default:
            return state;
    }
}

// export const setShowModal = (show) => ({type: SET_SHOW_MODAL, show});
// export const setList = (listItem) => ({type: SET_LIST, listItem});
// export const setShowOutButtons = (showButton) => ({type: SET_SHOW_OUT_BUTTONS, showButton});
// export const setShowChooseItem = (showItem) => ({type: SET_SHOW_CHOOSE_ITEM, showItem});
// export const setChoosedItems = (item) => ({type: SET_CHOOSED_ITEMS, item});
// export const removeChoosedItems = () => ({type: REMOVE_CHOOSED_ITEMS});
// export const removeList = () => ({type: REMOVE_LIST});




export default ListReducer;
