import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Styles} from './Button.styles';
import {colors} from '../../core-constants';

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  onPress?: () => void;
  disable?: boolean | false;
  buttonStyle?: StyleProp<ViewStyle>;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        Styles.borderCurve,
        {backgroundColor: props?.disable ? colors.darkGolden : colors.golden},
        props?.buttonStyle,
      ]}
      disabled={props?.disable}
      onPress={props?.onPress}>
      <Text style={Styles.textStyle}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
