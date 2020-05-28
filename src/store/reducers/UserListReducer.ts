import { Result } from "../actions/types"
import cloneDeep from 'lodash/cloneDeep';
import { UserState, Action, User } from "../../types/types";
import { Reducer } from "redux";
import { createUser } from "../../utils/helper";

const user1 = createUser();
const user2 = createUser();
const initialState: UserState = {
  users: [
    user1,
    user2
  ],
  count: 2,
  total: 0
};

export enum UserActions {
  ADD_USER = "ADD_USER",
  DELETE_USER = "DELETE_USER",
  SORT_INCOME = "SORT_INCOME"
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

export const SORT_INCOME = (): Action => {
  return {
    type: UserActions.SORT_INCOME,
    payload: initialState.total
  }
}

export type UserListActions = ReturnType<typeof ADD_USER> | ReturnType<typeof DELETE_USER> | ReturnType<typeof SORT_INCOME>;

const UserReducer: Reducer<UserState, Action> = (state = initialState, action: UserListActions) => {
  switch (action.type) {
    case `${UserActions.ADD_USER}`:
      return {
        ...state,
        users: [...state.users, action.payload],
        count: state.count + 1
      }
    case `${UserActions.DELETE_USER}`:
      return {
        ...state,
        users: [...state.users.filter(user => user.id !== action.id)],
        count: state.count - 1
      }
    case `${UserActions.SORT_INCOME}`:
      return {
        ...state,
        total: state.users.reduce((total: number, user: User) => {
          return total += Number(user.income)
        }, 0),
        users: action.payload
      }
    default:
      return state
  }
}
export default UserReducer;

export const addUser = (): Result<void> => {

  const newUser: User = createUser()
  return (dispatch, getState) => {
    let users: User[] = cloneDeep(getState().UserList.users)
    users.concat(newUser)
    dispatch({ type: UserActions.ADD_USER, payload: newUser })
  }
}

export const deleteUser = (id: string): Result<void> => {
  console.log(id);
  return (dispatch, getState) => {
    let users: User[] = cloneDeep(getState().UserList.users)
    const remainingUsers = users.filter((user: User) => user.id !== id)
    remainingUsers.flat();
    dispatch({ type: UserActions.DELETE_USER, payload: remainingUsers, id })
  }
}

export const sortIncome = (): Result<void> => {
  return (dispatch, getState) => {
    let userList: UserState = cloneDeep(getState().UserList);
    let { users, total } = userList;

    // find total user income
    const totalIncome = users.reduce((total: number, user: User) => {
      return total += Number(user.income)
    }, 0);
    total = totalIncome;

    const calculateIncomeRatio = (users: User[], totalIncome: number) => {
      users.forEach(user =>
        user.incomeRatio = (user.income / totalIncome)
      )
    }
    // find user income as a percentage of total
    calculateIncomeRatio(users, totalIncome);

    dispatch({ type: UserActions.SORT_INCOME, payload: users, total })
  }


}
