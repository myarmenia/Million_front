const SEND_HISTORY = 'SEND_HISTORY';
const REMOVE_HISTORY = 'REMOVE_HISTORY';
const SET_SHOW_HISTORY_SEARCH = 'SET_SHOW_HISTORY_SEARCH';

const  initialState = {
    history:[],
    showHistorySearch: false
}

const SearchHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_HISTORY: return {
            history: [...state.history, action.key]
        }
        case REMOVE_HISTORY: return {
            history: []
        }
        case SET_SHOW_HISTORY_SEARCH: return {
            showHistorySearch: action.showHistory
        }
        default: return state
    }
}

export default SearchHistoryReducer;