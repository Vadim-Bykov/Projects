import * as types from './actionTypes';
export const setCards = cards => ({
  type: types.CARDS_SET_CARDS,
  cards,
});

export const filterCards = filter => ({
  type: types.CARDS_FILTER_CARDS,
  filter,
});
