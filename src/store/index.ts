import {AnyAction} from "redux"
import {ThunkAction, ThunkDispatch} from "redux-thunk"

import {CalcState} from "../types/types"
import {reducer} from "./reducers/reducer"

export type Result<R> = ThunkAction<R, CalcState, null, AnyAction>

export type AsyncResult<T> = ThunkAction<Promise<T>, CalcState, null, AnyAction>

export type Dispatch = ThunkDispatch<CalcState, null, AnyAction>

export type CalcState = ReturnType<typeof reducer>
