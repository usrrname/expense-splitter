import {Action } from '../actions/actions';
import { showState, Item} from '../../types/types';

const initialState = {
    total: 0,
    person1: [],
    person2: [],
    items: [],
}
const GET_TOTAL: Action = {
    type: 'GET_TOTAL'
}

const showPayReducer = (
    state: showState = initialState,
    action: Action
  ): showState => {
    switch (action.type) {
      case `${GET_TOTAL}_SUCCESS`:
        return {
            ...state,
        }
      default:
        return state;
    }
  };
  
  export default showPayReducer;

  //calculate total
export const getTotal = (items: Item[]) => {
    const total= items.reduce( (total, item) => {
        return total + item.cost;
        }, 0);
        return total;
    };