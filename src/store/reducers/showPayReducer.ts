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
        let accumulate = items.reduce( (total, item) => {
        return state.total + item.cost;
        }, 0);
        state.total = accumulate;
        return {
            ...state
        };
      default:
        return state;
    }
  };
  
  export default showPayReducer