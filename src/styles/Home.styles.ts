import {StyleSheet} from 'react-native';
import {colors} from '../core-constants';

export const Styles = StyleSheet.create({
  mainView: {padding: 15},
  buttonView: {marginVertical: 15},
  flexRow: {flexDirection: 'row'},
  fontHeading: {color: colors.golden, fontWeight: 'bold'},
  fontValue: {color: colors.golden},
  weatherView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  justCenter: {justifyContent: 'center'},
});
