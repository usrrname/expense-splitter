import {CalcState, Item} from "../../types/types"
import {Action, AddItemAction, DeleteItemAction} from "../actions/actions"
import {v4} from "uuid"
import {Result} from ".."

//actions

// const DELETE_ITEM: Action = {
// 	type: "DELETE_ITEM"
// }

const initialState: CalcState = {
	items: []
}

const ADD_ITEM = AddItemAction

const DELETE_ITEM = DeleteItemAction

//reducer
export const reducer = (state = initialState, action: Action): CalcState => {
	switch (action.type) {
		case `${ADD_ITEM}_SUCCESS`:
			return {
				...state,
				items: [...state.items, action.item]
			}

		case `${DELETE_ITEM}_SUCCESS`:
			return {
				...state,
				items: state.items.filter((item, index) => index !== action.index)
			}
		default:
			return state
	}
}

// Action Creators
export const addItem = (): Result<void> => {
	return (dispatch, getState) => {
		let items = getState().items

		let newItem = {
			id: v4(),
			name: "",
			cost: 0
		}

		items.concat(newItem)

		dispatch({type: ADD_ITEM, items})
	}
}

export const deleteItem = (id: string): Result<void> => {
	return (dispatch, getState) => {
		const items = getState().items
		items.filter(item => !item.id)

		dispatch({type: DELETE_ITEM, id})
	}
}

//calculate total
// export const getTotal = (): Result<void> => {
// 	return (dispatch, getState) => {
// 		const items = getState().items
// 		let total = getState().total

// 		total = items.reduce((total: number, item: Item) => {
// 			return total + item.cost
// 		}, 0)

// 		dispatch({type: GET_TOTAL, total})
// 	}
// }
