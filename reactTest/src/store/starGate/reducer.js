import {CARDS_SET_CARDS} from './actionTypes';
import {initialState} from './state';

export const starGateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDS_SET_CARDS:
      return {
        ...state,
        cards: action.cards,
      };

    default:
      return state;
  }
};
