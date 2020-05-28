import { ItemState, Item, Action } from '../../types/types';
import { Result } from '../actions/types';
import { Reducer } from 'redux';
import cloneDeep from 'lodash/cloneDeep';
import { createItem } from '../../utils/helper';


const initialState: ItemState = {
	items: [createItem()],
	count: 1,
	total: 0
};

//actions
export enum ItemActions {
	ADD_ITEM = 'ADD_ITEM',
	DELETE_ITEM = 'DELETE_ITEM',
	GET_TOTAL = 'GET_TOTAL',
}

export const ADD_ITEM = (item: Item): Action => {
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

export const GET_TOTAL = (): Action => {
	return {
		type: "GET_TOTAL",
	}
}

type ListActions = ReturnType<typeof ADD_ITEM> | ReturnType<typeof DELETE_ITEM> | ReturnType<typeof GET_TOTAL>;

//reducer
export const ItemListReducer: Reducer<ItemState, Action> = (
	state = initialState,
	action: ListActions
) => {
	switch (action.type) {

		case `${ItemActions.ADD_ITEM}`:
			return {
				...state,
				items: [...state.items, action.payload],
				count: state.count + 1
			};
		case `${ItemActions.DELETE_ITEM}`:
			return {
				...state,
				items: [...state.items.filter(item => item.id !== action.id)],
				count: state.count - 1
			};
		case `${ItemActions.GET_TOTAL}`:
			return {
				...state,
				total: action.payload
			}
		default:
			return state;
	}
};

// Action Creators

export const addItem = (): Result<void> => {
	const newItem = createItem();
	return (dispatch, getState) => {
		const items = cloneDeep(getState().ItemList.items);
		items.concat(newItem);
		dispatch({ type: ItemActions.ADD_ITEM, payload: newItem });
	};
}

export const deleteItem = (id: string): Result<void> => {
	return (dispatch, getState) => {
		const items = cloneDeep(getState().ItemList.items);
		const itemsArray = items.filter((item: Item) =>
			item.id !== id
		);
		itemsArray.flat()
		dispatch({ type: ItemActions.DELETE_ITEM, payload: itemsArray, id });
	};
};

//calculate total
export const getTotal = (): Result<void> => {

	return (dispatch, getState) => {
		let { items } = cloneDeep(getState().ItemList)

		const differentVar = items.reduce((total: number, item: Item) => {
			return total += Number(item.cost)
		}, 0)

		dispatch({ type: "GET_TOTAL", payload: differentVar })
	}
}

