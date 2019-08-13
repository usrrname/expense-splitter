import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { calculateReducer } from './reducers/calculateReducer';


const middleware = [thunk];
const store = createStore(
    calculateReducer,
    composeWithDevTools(
    applyMiddleware(...middleware),
))
console.log(store.getState());
export default store;

