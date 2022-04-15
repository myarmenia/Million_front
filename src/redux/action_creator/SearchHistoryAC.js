const SEND_HISTORY = 'SEND_HISTORY';
const REMOVE_HISTORY = 'REMOVE_HISTORY';
const SET_SHOW_HISTORY_SEARCH = 'SET_SHOW_HISTORY_SEARCH';



export const sendHistory = (key) => ({type: SEND_HISTORY, key});
export const removeHistory = () => ({type: REMOVE_HISTORY});
export const setShowHistorySearch = (showHistory) => ({type: SET_SHOW_HISTORY_SEARCH, showHistory});