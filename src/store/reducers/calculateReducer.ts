import { CalcState, Item, ShowState } from '../../types/types'
import { Action } from '../actions/actions';
import {v4} from 'uuid';
import { Result } from '..';


const initialState: CalcState = {
    income1: 0,
    income2: 0,
    items: []
  }

//actions
const ADD_ITEM : Action = {
    type: 'ADD_ITEM',
}
const DELETE_ITEM: Action = {
  type: 'DELETE_ITEM',
}

//reducer
export function calculateReducer (state = initialState, action: Action): CalcState {
    switch (action.type){
    case`${ADD_ITEM}_SUCCESS`:
        return {
          ...state,
          items: [
            ...state.items,
            {
            id: action.id,
            name: action.name,
            cost: action.cost,
          }
        ]  
        }   
    // case `${DELETE_ITEM}_SUCCESS`:
    //     let items = state.items;
    //     
    //     return {
    //       ...state,
    //       items: state.items.filter(item => item.id != action.id);
    //     };
    default: 
    return state;   
    }
}

// Action Creators
export const addItem = (): Result<void> => {
return (dispatch, getState) => {
  const items = getState().calc.items;

  let newItem = {
      id: v4(),
      name: '',
      cost: 0
      }
      
    items.concat(newItem);
    dispatch({type: ADD_ITEM, items});  
  }
}

// export const deleteItem = (id: string): Result<void> => {
//   return (dispatch, getState) =>{ 
//   const items = getState().calc.items;
//   items.filter(item => item.id != item.id);

//   dispatch({type: DELETE_ITEM, id});  
//   }
// }
