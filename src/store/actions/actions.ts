import {AnyAction} from "redux"
import {Item} from "../../types/types"

export type Action = AnyAction
// action types

export enum ShowPayFilters {
	SHOW_ALL = "SHOW_ALL",
	SHOW_USER1 = "SHOW_USER1",
	SHOW_USER2 = "SHOW_USER2"
}

export const AddItemAction = (newItem: Item): Action => {
	return {
		type: "ADD_ITEM",
		payload: newItem
	}
}

export const DeleteItemAction = (): Action => {
	return {
		type: "DELETE_ITEM"
	}
}
