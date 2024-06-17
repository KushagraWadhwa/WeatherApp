import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInputField} from '../core-components';
import {colors} from '../core-constants';
import {Styles} from '../styles/Home.styles';
import axios from 'axios';
import {apiKey} from '../core-services/services';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import actions from '../../redux/actions';

interface HomeProps {
  navigation?: NavigationProp<ParamListBase>;
}

const Home = ({navigation}: HomeProps) => {
  const [cityName, setCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [weatherData, setWeatherData] = useState({
    name: '',
    currentTemprature: '',
    humidity: '',
    pressure: '',
    tempratureMax: '',
    tempratureMin: '',
    weatherType: '',
  });

  const fetchWeatherData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
      const response = await axios.get(url);
      setWeatherData({
        name: response?.data?.name,
        currentTemprature: response?.data?.main?.temp,
        humidity: response?.data?.main?.humidity,
        pressure: response?.data?.main?.pressure,
        tempratureMax: response?.data?.main?.temp_max,
        tempratureMin: response?.data?.main?.temp_min,
        weatherType: response?.data?.weather?.[0]?.main,
      });
    } catch (error) {
      setErrorMessage(true);
    }
  };

  const resetWeatherData = () => {
    setWeatherData({
      name: '',
      currentTemprature: '',
      humidity: '',
      pressure: '',
      tempratureMax: '',
      tempratureMin: '',
      weatherType: '',
    });
  };

  const updateData = () => {
    actions.saveWeatherData(weatherData);
  };

  return (
    <ScrollView style={{backgroundColor: colors.black}}>
      <TouchableWithoutFeedback>
        <View style={Styles.mainView}>
          <View>
            <TextInputField
              placeholderText={'Enter City Name'}
              onChangeText={text => {
                setCityName(text);
                if (weatherData?.name?.length > 0) {
                  resetWeatherData();
                }
                if (errorMessage) {
                  setErrorMessage(false);
                }
              }}
            />
          </View>
          <View style={Styles.buttonView}>
            <Button
              disable={cityName?.length === 0}
              onPress={() => {
                fetchWeatherData();
              }}
              title={'Search'}
            />
          </View>
          {errorMessage && (
            <View>
              <Text style={{color: colors.red}}>
                {'City Not Found. Please try again'}
              </Text>
            </View>
          )}
          {weatherData?.name && (
            <View style={Styles.weatherView}>
              <View>
                <View style={Styles.flexRow}>
                  <Text style={Styles.fontHeading}>{'City: '}</Text>
                  <Text style={Styles.fontValue}>{weatherData?.name}</Text>
                </View>
                <View style={Styles.flexRow}>
                  <Text style={Styles.fontHeading}>{'Temprature: '}</Text>
                  <Text style={Styles.fontValue}>
                    {weatherData?.currentTemprature}
                  </Text>
                </View>
                <View style={Styles.flexRow}>
                  <Text style={Styles.fontHeading}>{'Weather: '}</Text>
                  <Text style={Styles.fontValue}>
                    {weatherData?.weatherType}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  updateData();
                  navigation?.navigate('weatherScreen');
                }}
                style={Styles.justCenter}>
                <Text style={Styles.fontHeading}>{'View Detailed >'}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Home;
