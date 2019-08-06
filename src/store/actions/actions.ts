import {AnyAction} from 'redux';

// action types
export type Action = AnyAction;

export enum ShowPayFilters {
    SHOW_ALL ='SHOW_ALL',
    SHOW_USER1 = 'SHOW_USER1',
    SHOW_USER2 ='SHOW_USER2'
  }