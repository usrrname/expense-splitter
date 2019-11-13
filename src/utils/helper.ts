import { Item, User } from '../types/types';
import { v4 } from 'uuid';

export function createItem(): Item {
	return {
		id: v4(),
		name: '',
		cost: 0,
	};
}

export function createUser(): User {
  return {
    id: v4(),
    name: '',
    income: 0,
    paymentAmount: 0,
    incomeRatio: 0
  };
}