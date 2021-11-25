import * as Actions from './actions';
import initialState from '../store/initialState';

export const HomesReducer = (state = initialState.homes, action) => {
    switch (action.type) {
        case Actions.FETCH_HOMES:
            return {
                list: action.list, 
            };
        case Actions.CLEAR_HOMES:
            return {
                list: action.list,
            };
        default:
            return state;
    }
};
