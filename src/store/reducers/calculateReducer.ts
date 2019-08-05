import { CalcState, Item, showState } from '../../types/types'
import App from '../../App';
import { Action } from '../actions/actions';
import { bindActionCreators } from 'redux';

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
export default function calculateReducer (state = initialState, action: Action){
    if (typeof state === 'undefined') {
      console.log("state is undefined");  
      return {}
    }
    switch (action.type){
    case`${ADD_ITEM}_SUCCESS`:
        const {items} = state
        items.concat({
        id: action.payload.id,
        name: action.payload.name,
        cost: 0
        })
        return {
        ...state,
        item: {   
                id: action.type.id,
                name: action.name,
                cost: 0
            }
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
  let items = state.items;
  let nextId = 0

  let newItem = {
    id: (nextId++).toString(),
    name: '',
    cost: 0
    }
  return items = items.concat(newItem);
}
