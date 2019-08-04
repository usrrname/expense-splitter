import { combineReducers } from "redux";
import calculateReducer from './calculateReducer';
import showPayReducer from './showPayReducer';
import {Action} from '../actions/actions';
import {ReduxState} from '../../types/types';

const appReducer = () => {
    combineReducers({
        calculateReducer,
        showPayReducer
       } as any);
    return (state: ReduxState | {} | undefined, action: Action) => {
        return appReducer()
    }
}
export default appReducer;