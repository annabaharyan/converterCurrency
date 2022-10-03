import { applyMiddleware,combineReducers, createStore } from "redux";
import {ApiSlice} from '../Fetches/ApiSlice';
import {initialApi} from '../Fetches/initialApi'
import thunk from "redux-thunk";
export const store = createStore(combineReducers({
    myApi: ApiSlice,
    
}), {
    myApi:initialApi
 
}, applyMiddleware(thunk))