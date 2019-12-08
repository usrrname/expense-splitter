import { Item, User } from '../types/types';
import { v4 } from 'uuid';

/**
 * @desc creates new expense item with unique ID 
 */

export function createItem(): Item {
	return {
		id: v4(),
		name: '',
		cost: 0,
	};
}

/**
 * @desc creates new user with unique ID 
 */

export const createUser = () => {
	return {
		id: v4(),
		name: '',
		income: 0,
		paymentAmount: 0,
		incomeRatio: 0
	} as User;
}


/**
 * @desc internally sorts arrays of objects by key
 * @param {a} User
 * @param {b} User
 * @param {key} value to sort by 
 * @param {order} string
 * example: users.sort(compareValues('income', 'asc'))
 */

export const compareValues = (key: string, order = 'asc') => {
	debugger;
	return function innerSort(a: any, b: any) {
		if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
			// property doesn't exist on either object
			return 0;
		}

		let comparison = 0;
		const varA = a[`${key}`];
		const varB = b[`${key}`];

		if (varA > varB) {
			comparison = 1;
		}
		else if (varB > varA) {
			comparison = -1;
		}
		return (
			(order === 'desc') ? (comparison * -1) : comparison
		);
	};
}
