import {apiSubjects, dataApi} from "../../api/api";
import {setChoosedItems} from "./CategoriesAC";

const GRT_SEARCH_DATA = 'GRT_SEARCH_DATA';
const GRT_SEARCH_DATA_SUCCESS = 'GRT_SEARCH_DATA_SUCCESS';
const GRT_SEARCH_DATA_ERROR = 'GRT_SEARCH_DATA_ERROR';
const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';



export const getSearchDataByValue = (value) => async (dispatch) =>{
    try {
        dispatch({type:GRT_SEARCH_DATA})
        const {data} = await apiSubjects.getSearchData(value)
        dispatch({type:GRT_SEARCH_DATA_SUCCESS,payload:data.company, value})
        if(data) {
            setTimeout(() => {
                dispatch(setChoosedItems(data?.company, false))
            }, 5000)
        }
    }catch (e) {
        dispatch({type:GRT_SEARCH_DATA_ERROR})
    }

}

