import { AnyAction } from "redux";

export type Action = AnyAction;

// action types
export interface Item {
	id: string,
	name: string,
	cost: number
}
//initial State
export interface IState {
	itemCount: number,
	items: Item[],
	isFocused: boolean,
}

export interface UState {
	userCount: number,
	users: User[],
}

export namespace StoreState {
	export type AppState = {
		ItemList: IState,
		UserList: UState
	}
}
export interface User {
	id: string,
	name: string,
	income: number,
	paymentAmount: number,
}