import { AnyAction } from "redux";

export type Action = AnyAction;

export interface User {
	id: string,
	name: string,
	income: number,
	paymentAmount?: number,
	incomeRatio?: number
}

export interface Item {
	id: string,
	name: string,
	cost: number
}

export type Collection = {
	units?: Array<Object>,
	total: number,
	types: {
		expenses: ItemState,
		users: UserState,
	}
}

export type ItemState = {
	type?: Collection,
	items: Item[],
	total: number,
}

export interface UserState {
	type?: Collection,
	users: User[],
	total: number,
}

export namespace StoreState {
	export type AppState = {
		ItemList: ItemState,
		UserList: UserState
	}
}