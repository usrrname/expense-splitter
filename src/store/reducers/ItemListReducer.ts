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

export const DELETE_ITEM = (item: Item): Action => {
	return {
		type: ItemActions.DELETE_ITEM,
		payload: item.id
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

		case ItemActions.ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.payload]
			};
		case ItemActions.DELETE_ITEM:
			return {
				...state,
				items: [state.items.map(item => item.id !== action.payload)]
			};
		default:
			return state;
	}
};

// Action Creators

export const addItem = (): Result<void> => {
	let item: Item = {
		id: v4(),
		name: '',
		cost: 0
	};
	return (dispatch, getState) => {
		let items = cloneDeep(getState().ItemList.items);
		items = items.concat(item)
		dispatch({ type: ItemActions.ADD_ITEM, payload: item });
	};
}

export const deleteItem = (id: string): Result<void> => {

	return (dispatch, getState) => {
		let items = cloneDeep(getState().ItemList.items);
		items = items.filter(item => item.id !== id)
		dispatch({ type: ItemActions.DELETE_ITEM, payload: id });
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
