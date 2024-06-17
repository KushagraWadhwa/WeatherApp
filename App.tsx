/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {colors} from './src/core-constants';
import Root from './src/navigations/root.navigation';
import {Provider} from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: colors.black}}>
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <Root />
        </Provider>
      </SafeAreaView>
    </View>
  );
}
