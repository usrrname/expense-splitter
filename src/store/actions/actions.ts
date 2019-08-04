import {Item, CalcState, showState} from '../../types/types';
import {AnyAction} from 'redux';

// action types
export type Action = AnyAction;


const DELETE_ITEM = "DELETE_ITEM";
export interface DeleteItemAction{
    type: typeof DELETE_ITEM;
    payload: Item
}

export enum ShowPayFilters {
    SHOW_ALL ='SHOW_ALL',
    SHOW_USER1 = 'SHOW_USER1',
    SHOW_USER2 ='SHOW_USER2'
  }


