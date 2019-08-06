import { CalcState, Item, ShowState } from '../../types/types'
import { Action } from '../actions/actions';
import {v4} from 'uuid';


const initialState: CalcState = {
    income1: 0,
    income2: 0,
    items: []
  }

//actions
const ADD_ITEM : Action = {
    type: 'ADD_ITEM',
    payload: []
}

//reducer
export function calculateReducer (state = initialState, action: Action): CalcState {
    switch (action.type){
    case`${ADD_ITEM}_SUCCESS`:
    let items 
        return {
        ...state
        }
    // case 'DELETE_ITEM':
    //     items.filter(item => item.id !== action.payload.id);
    //     return {...state};
    default: 
    return state;   
    }
}

// Action Creators
export const addItem = (state: CalcState) => {
  let {items} = state;

  let newItem = {
    id: v4(),
    name: '',
    cost: 0
    }

  return state.items = items.concat(newItem);
}
