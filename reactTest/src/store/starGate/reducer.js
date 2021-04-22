import * as types from './actionTypes';
import {initialState} from './state';

export const starGateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CARDS_SET_CARDS:
      return {
        ...state,
        cards: action.cards,
      };

    case types.CARDS_FILTER_CARDS:
      return {
        ...state,
        filteredCards: action.filter
          ? state.cards.filter(card =>
              card.name.toUpperCase().includes(action.filter.toUpperCase()),
            )
          : [],
      };

    default:
      return state;
  }
};
