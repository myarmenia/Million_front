import { apiSubjects } from "../../api/api";
import { GET_LIST, GET_LIST_ERROR, GET_LIST_INFO, GET_LIST_INFO_ERROR, GET_LIST_INFO_SUCCESS, GET_List_SUCCESS } from "../ListReducer";

export const getList = (id) => async (dispatch) => {
    try {
        dispatch({type: GET_LIST})
        const data = await apiSubjects.listOfSubCategories(id)
        //console.log(apiSubjects, 'our data');
        dispatch({type: GET_List_SUCCESS, payload: data})
       // console.log(data, 'allList');
    } catch (e) {
       // console.log(e,'errorRRRRRRR');
        dispatch({type: GET_LIST_ERROR})
    }
}

export const getListInfo = (id) => async (dispatch) => {
    try {
        dispatch({type: GET_LIST_INFO})
        const data = await apiSubjects.showSingleInfoById(id)
        //console.log(apiSubjects, 'our data');
        dispatch({type: GET_LIST_INFO_SUCCESS, payload: data})
      //  console.log(data, 'listInfo');
    } catch (e) {
      //  console.log(e,'errorRRRRRRR');
        dispatch({type: GET_LIST_INFO_ERROR})
    }
}
