import { v4 } from "uuid"
import { Result } from "../actions/types"
import cloneDeep from 'lodash/cloneDeep';
import { UState, Action, User } from "../../types/types";
import { Reducer } from "redux";


const initialState: UState = {
  users: [{
    id: v4(),
    name: '',
    income: 0,
    paymentAmount: 0,
  },
  {
    id: v4(),
    name: '',
    income: 0,
    paymentAmount: 0,
  }],
  headCount: 2,
};

export enum UserActions {
  ADD_USER = "ADD_USER",
  DELETE_USER = "DELETE_USER"
}

export const ADD_USER = (user: User): Action => {
  return {
    type: UserActions.ADD_USER,
    payload: user
  }
}

export const DELETE_USER = (user: User): Action => {
  return {
    type: UserActions.DELETE_USER,
    payload: user.id
  }
}

export type UserListActions = ReturnType<typeof ADD_USER> | ReturnType<typeof DELETE_USER>;

const UserReducer: Reducer<UState, Action> = (state = initialState, action: UserListActions) => {
  switch (action.type) {
    case `${ADD_USER}_SUCCESS`:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case `${DELETE_USER}_SUCCESS`:
      return {
        ...state,
        users: [state.users.map(user => user.id !== action.index)]
      }
    default:
      return state
  }
}

export default UserReducer;

export const deleteUser = (id: string): Result<void> => {
  debugger;
  const IdToRemove = id;
  return (dispatch, getState) => {
    let users: User[] = cloneDeep(getState().UserList.users)
    users = users.filter(user => user.id !== IdToRemove)

    dispatch({ type: UserActions.DELETE_USER, id })
  }
}