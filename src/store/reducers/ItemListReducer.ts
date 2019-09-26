import { IState, Item, Action } from '../../types/types';
import { v4 } from 'uuid';
import { Result } from '../actions/types';
import { Reducer } from 'redux';
import cloneDeep from 'lodash/cloneDeep';

const initialState: IState = {
  itemCount: 1,
  items: [
    {
      id: v4(),
      name: '',
      cost: 0
    }
  ]
};

//actions
export enum ItemActions {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM'
}

export const ADD_ITEM = (item: Item): Action => {
  console.log('test');
  return {
    type: ItemActions.ADD_ITEM,
    payload: item
  };
};

export const DELETE_ITEM = (id: string): Action => {
  return {
    type: ItemActions.DELETE_ITEM,
    payload: id
  };
};

// export const GET_TOTAL = (): Action => {
// 	return {
// 		type: "GET_TOTAL"
// 	}
// }

type ListActions = ReturnType<typeof ADD_ITEM> | ReturnType<typeof DELETE_ITEM>;

//reducer
export const ItemListReducer: Reducer<IState, Action> = (
  state = initialState,
  action: ListActions
) => {
  switch (action.type) {
    // here's what i changed that made it work, my initial thought was that the name you used for these cases didn't match up
    // with the action names you were dispatching. the code for updating the state was right
    case ItemActions.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case ItemActions.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.index)
      };
    default:
      return state;
  }
};

// Action Creators

// here's where the next problem is, getting the new item data into the state
export const addItem = (): Result<void> => {
  let newItem: Item = {
    id: v4(),
    name: '',
    cost: 0
  };
  console.log('test');
  return (dispatch, getState) => {
    // fixed it! was missing 'payload' lol
    dispatch({ type: ItemActions.ADD_ITEM, payload: newItem });
  };
};

export const deleteItem = (id: string): Result<void> => {
  return (dispatch, getState) => {
    let items = cloneDeep(getState().ItemList.items);

    items.filter(item => item.id !== id);
    console.log(items);
    dispatch({ type: ItemActions.DELETE_ITEM, id });
  };
};

//calculate total
// export const getTotal = (): Result<void> => {
// 	return (dispatch, getState) => {
// 		const items = deepCopy(getState().items)

// 		const total = items.reduce((total: number, item: Item) => {
// 			return total + item.cost
// 		}, 0)

// 		dispatch({ type: "GET_TOTAL", total })
// 	}
// }
