import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { AppState } from '../store';

export type Result<R> = ThunkAction<R, AppState, null, AnyAction>

export type AsyncResult<T> = ThunkAction<Promise<T>, AppState, null, AnyAction>

export type Dispatch = ThunkDispatch<AppState, null, AnyAction>
