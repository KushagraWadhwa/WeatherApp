import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = key => {
  return new Promise(resolve => {
    AsyncStorage.getItem(key).then(data => {
      resolve(JSON.parse(data));
    });
  });
};

export const removeItem = key => {
  return AsyncStorage.removeItem(key);
};

export const clearAsyncStorate = () => {
  return AsyncStorage.clear();
};

export const setWeatherData = data => {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('weatherData', data);
};

export const getWeatherData = async () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('weatherData').then(data => {
      resolve(JSON.parse(data));
    });
  });
};

export const clearWeather = () => {
  return AsyncStorage.removeItem('weatherData');
};
