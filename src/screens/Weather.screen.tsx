import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {colors} from '../core-constants';
import {Styles} from '../styles/Weather.styles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface WeatherProps {
  navigation?: NavigationProp<ParamListBase>;
}

const Weather = ({navigation}: WeatherProps) => {
  const weatherData = useSelector((state: any) => state?.auth?.weatherData);

  return (
    <ScrollView style={{backgroundColor: colors.black}}>
      <TouchableWithoutFeedback>
        <View style={Styles.mainView}>
          <TouchableOpacity
            onPress={() => {
              navigation?.canGoBack && navigation?.goBack();
            }}
            style={Styles.backButtonStyle}>
            <Text style={Styles.fontHeading}>{'<- Back'}</Text>
          </TouchableOpacity>
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
                <View style={Styles.flexRow}>
                  <Text style={Styles.fontHeading}>{'Min Temprature: '}</Text>
                  <Text style={Styles.fontValue}>
                    {weatherData?.tempratureMin}
                  </Text>
                </View>
                <View style={Styles.flexRow}>
                  <Text style={Styles.fontHeading}>{'Max Temprature: '}</Text>
                  <Text style={Styles.fontValue}>
                    {weatherData?.tempratureMax}
                  </Text>
                </View>
                <View style={Styles.flexRow}>
                  <Text style={Styles.fontHeading}>{'Pressure: '}</Text>
                  <Text style={Styles.fontValue}>{weatherData?.pressure}</Text>
                </View>
                <View style={Styles.flexRow}>
                  <Text style={Styles.fontHeading}>{'Humidity: '}</Text>
                  <Text style={Styles.fontValue}>{weatherData?.humidity}</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Weather;
