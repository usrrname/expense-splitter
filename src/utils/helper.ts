import { Item } from '../types/types';
import { v4 } from 'uuid';

export function createItem(): Item {
	return {
		id: v4(),
		name: '',
		cost: 0,
	};
}
