import {Item, CalcState, showState} from '../../types/types';
import {AnyAction} from 'redux';

const INITIAL_STATE = {};

// action types
export type Action = AnyAction;

const ADD_ITEM = "ADD_ITEM";
export interface AddItemAction{
    type: typeof ADD_ITEM;
    payload: Item;
}


export const addItem = (item:Item) => ({
  type: 'ADD_ITEM',
  item
})

const DELETE_ITEM = "DELETE_ITEM";
export interface DeleteItemAction{
    type: typeof DELETE_ITEM;
    payload: Item
}

export type CalcActionTypes = AddItemAction | DeleteItemAction |  TotalExpensesAction;;

export enum ShowPayFilters {
    SHOW_ALL ='SHOW_ALL',
    SHOW_USER1 = 'SHOW_USER1',
    SHOW_USER2 ='SHOW_USER2'
  }

const TOTAL = "TOTAL";
export interface TotalExpensesAction{
    type: typeof TOTAL;
    payload: Item[];
}


//calculate total
export const getTotal = (items: Item[]) => {
    const total= items.reduce( (total, item) => {
        return total + item.cost;
        }, 0);
        return total;
    };

export const SetIncomeRatio = () => {

}

export type userActionTypes = TotalExpensesAction | ShowPayFilters;
