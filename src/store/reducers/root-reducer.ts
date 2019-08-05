import { combineReducers } from "redux";
import calculateReducer from './calculateReducer';
import showPayReducer from './showPayReducer';


 export const appReducer = 
    combineReducers({
        calculateReducer,
        showPayReducer,
       } as any);
       