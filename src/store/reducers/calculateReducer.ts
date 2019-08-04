import { CalcState } from '../../types/types'
import { CalcActionTypes} from '../actions/actions';

const initialState: CalcState = {
    income1: 0,
    income2: 0,
    items: []
  }
const state = initialState;

export default function calculateReducer (state: CalcState, action: CalcActionTypes){
    switch (action.type){
    case 'ADD_ITEM':
    const {items} = state;
        items.concat({
        id: action.payload.id,
        name: action.payload.name,
        cost: 0
        })
        return {
        ...state
        }
    case 'DELETE_ITEM':
        items.filter(item => item.id !== action.payload.id);
        return {...state};
    default: 
    return state;   
    }
}

