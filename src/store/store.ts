import { createStore, applyMiddleware, combineReducers } from "redux"
import { Action, Dispatch } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension"
import { ItemListReducer } from "./reducers/ItemListReducer"
import { StoreState } from "../types/types";
import UserReducer from "./reducers/UserListReducer";

const middleware = [thunk]

const rootReducer = combineReducers<StoreState.AppState>({
	ItemList: ItemListReducer,
	UserList: UserReducer,
})

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware<Dispatch, Action>(...middleware))
)

export type AppState = ReturnType<typeof rootReducer>
export default store;