import { v4 } from "uuid"
import { Result } from "../actions/types"
import cloneDeep from 'lodash/cloneDeep';
import { UserState, Action, User } from "../../types/types";
import { Reducer } from "redux";

const initialState: UserState = {
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
  count: 2,
  total: 0
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

const UserReducer: Reducer<UserState, Action> = (state = initialState, action: UserListActions) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case DELETE_USER:
      return {
        ...state,
        users: [action.payload]
      }
    default:
      return state
  }
}
export default UserReducer;

export const addUser = (): Result<void> => {

  const newUser: User = {
    id: v4(),
    name: '',
    income: 0,
    paymentAmount: 0,
  }

  return (dispatch, getState) => {
    let users: User[] = cloneDeep(getState().UserList.users)
    users = users.concat(newUser)
    dispatch({ type: UserActions.ADD_USER, payload: newUser })
  }
}

export const deleteUser = (id: string): Result<void> => {
  return (dispatch, getState) => {
    let users: User[] = cloneDeep(getState().UserList.users)
    const remainingUsers = users.filter( (user: User) => user.id !== id)
    remainingUsers.flat(1);
    dispatch({ type: UserActions.DELETE_USER, payload: id })
  }
}