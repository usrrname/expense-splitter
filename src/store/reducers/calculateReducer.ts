import { CalcState } from '../../types/types'
import { Action} from '../actions/actions';

const initialState: CalcState = {
    income1: 0,
    income2: 0,
    items: []
  }

//actions
const ADD_ITEM : Action = {
    type: 'ADD_ITEM',
}
//reducer
export default function calculateReducer (state: CalcState = initialState, action: Action){
    switch (action.type){
    case`${ADD_ITEM}_SUCCESS`:
        let {items} = state
        items.concat({
        id: action.payload.id,
        name: action.payload.name,
        cost: 0
        })
        return {
        ...state,
        item: {   
                id: action.payload.id,
                name: action.payload.name,
                cost: 0
            }
        }
    case 'DELETE_ITEM':
        items.filter(item => item.id !== action.payload.id);
        return {...state};
    default: 
    return state;   
    }
}

// Action Creators
let nextId = 0;
export const addItem = () => ({
  type: 'ADD_ITEM',
  item:{id: (nextId++).toString(), name:'', cost: 0}
})
