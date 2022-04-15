import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import CategorysReducer from "./CategorysReducer";
import mainReducer from "./mainReducer";
import SearchHistoryReducer from "./SearchHistoryReducer";
import {SearchReducer} from "./SearchReducer";



let reducers = combineReducers({
    main: mainReducer,
    categorys: CategorysReducer,
    search: SearchReducer,
    searchHistory: SearchHistoryReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
//console.log(store.getState().main.data)


export default store;
