import types from '../types';

const initial_state = {
  weatherData: [],
};

export default function (state = initial_state, action: any) {
  switch (action.type) {
    case types.ADD_WEATHER:
      const data_add = action.payload;
      return {...state, weatherData: data_add};
    case types.REMOVE_WEATHER:
      const data_remove = state?.weatherData?.filter(
        item => item?.name !== action?.payload?.name,
      );
      return {...state, weatherData: data_remove};
    case types.CLEAR_WEATHER:
      return {...state, weatherData: []};
    case types.CLEAR_REDUX_STATE:
      return {
        weatherData: [],
      };
    default:
      return {...state};
  }
}
