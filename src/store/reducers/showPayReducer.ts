import { userActionTypes, ShowPayFilters} from '../actions/actions';
import { showState, CalcState } from '../../types/types';

const initialState: showState = {
    person1: [],
    person2: [],
    total: 0,
    items: []
};

const showPayReducer = (
    state = initialState,
    action: userActionTypes
  ): showState => {
    switch (action) {
      case ShowPayFilters.SHOW_ALL:
        return state;
        case 'TOTAL':
        let items = state.items;
        let total = initialState.total;
        return {
            ...state,
            total
        };
      default:
        return state;
    }
  };
  
  export default showPayReducer