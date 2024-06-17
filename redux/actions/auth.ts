import store from '../store';
import types from '../types';

const {dispatch} = store;

export const saveWeatherData = data => {
  dispatch({
    type: types.ADD_WEATHER,
    payload: data,
  });
};

export const clearAllItemsFromCart = () => {
  dispatch({
    type: types.CLEAR_WEATHER,
    payload: [],
  });
};

export const clearAllItems = () => {
  clearAllItemsFromCart().then(() => {
    clearAllItemsFromCart();
  });
  return;
};
