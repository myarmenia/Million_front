const GRT_SEARCH_DATA = 'GRT_SEARCH_DATA';
const GRT_SEARCH_DATA_SUCCESS = 'GRT_SEARCH_DATA_SUCCESS';
const GRT_SEARCH_DATA_ERROR = 'GRT_SEARCH_DATA_ERROR';
const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';

const  initialState = {
    data:[],
    error:null,
    splash:false,
    searchValue: null
}
export const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GRT_SEARCH_DATA:return {
            splash:true,error:null,data:[]
        }
        case GRT_SEARCH_DATA_SUCCESS:return {
            splash:false,error:null,data:action.payload, searchValue: action.value
        }
        
        case GRT_SEARCH_DATA_ERROR:return {
            splash:false,error:null,data:[]
        }
        default:return state
    }
}



