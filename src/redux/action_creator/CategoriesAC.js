import { apiSubjects } from "../../api/api";
import { GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_ERROR, GET_ALL_CATEGORIES_SUCCESS, GET_SUB_CATEGORIES, GET_SUB_CATEGORIES_ERROR, GET_SUB_CATEGORIES_success, PARSE_DATA } from "../CategorysReducer";

const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
const SET_LIST = 'SET_LIST';
const SET_SHOW_OUT_BUTTONS = 'SET_SHOW_OUT_BUTTONS';
const SET_SHOW_CHOOSE_ITEM = 'SET_SHOW_CHOOSE_ITEM';
const SET_CHOOSED_ITEMS = 'SET_CHOOSED_ITEMS';
const REMOVE_CHOOSED_ITEMS = 'REMOVE_CHOOSED_ITEMS';
const REMOVE_LIST = 'REMOVE_LIST';

export const setShowModal = (show) => ({type: SET_SHOW_MODAL, show});
export const setList = (listItem) => ({type: SET_LIST, listItem});
export const setShowOutButtons = (showButton) => ({type: SET_SHOW_OUT_BUTTONS, showButton});
export const setShowChooseItem = (showItem) => ({type: SET_SHOW_CHOOSE_ITEM, showItem});
export const setChoosedItems = (item,isItem) => ({type: SET_CHOOSED_ITEMS, item, isItem});
export const removeChoosedItems = () => ({type: REMOVE_CHOOSED_ITEMS});
export const removeList = () => ({type: REMOVE_LIST});

export const getAllCategories = () => async (dispatch) => {
    try {
        dispatch({type: GET_ALL_CATEGORIES})
        //console.log('hello');
        const data = await apiSubjects.allCategories()
        //console.log('our data');
        dispatch({type: GET_ALL_CATEGORIES_SUCCESS, payload: data})
       // dispatch({type: PARSE_DATA})
        //console.log(data, 'categoriesDataAllData');
    } catch (e) {
       // console.log(e,'errorRRRRRRR');
        dispatch({type: GET_ALL_CATEGORIES_ERROR})
    }
}

export const getSubCategories = (id) => async (dispatch) => {
    try {
        dispatch({type: GET_SUB_CATEGORIES})
        const data = await apiSubjects.getSubCategories(id)
       // console.log(apiSubjects, 'our data');
        dispatch({type: GET_SUB_CATEGORIES_success, payload: data})
      //  console.log(data, 'categoriesDataAllData');
    } catch (e) {
      //  console.log(e,'errorRRRRRRR');
        dispatch({type: GET_SUB_CATEGORIES_ERROR})
    }
}

