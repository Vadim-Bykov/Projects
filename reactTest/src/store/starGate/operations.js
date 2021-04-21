import {requestDataCards} from '../../api/starGateAPI';
import {setCards} from './actions';

export const setDataCards = () => async dispatch => {
  const data = await requestDataCards();
  await dispatch(setCards(data));
};
