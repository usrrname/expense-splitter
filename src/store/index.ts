import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {ReduxState} from '../types/types';

export type Result<R> = ThunkAction<R, ReduxState, null, AnyAction>;

export type AsyncResult<T> = ThunkAction<Promise<T>, ReduxState, null, AnyAction>

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

export type Action = AnyAction;

export type ApiAction = {
  type: string,
  endpoint: string
}