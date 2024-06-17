import {StyleSheet} from 'react-native';
import {colors} from '../../core-constants';

export const Styles = StyleSheet.create({
  mainView: {borderWidth: 1, borderRadius: 8},
  inputText: {
    paddingHorizontal: 10,
    color: colors.golden,
    paddingBottom: 10,
  },
  title: {color: colors.golden, paddingHorizontal: 10, paddingTop: 5},
});
