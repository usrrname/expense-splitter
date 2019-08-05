import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './reducers/root-reducer';

const middleware = [thunk];
const store = createStore(
    appReducer,
    composeWithDevTools(
    applyMiddleware(...middleware),
))

store.getState()
console.log(store.getState());
export default store;

