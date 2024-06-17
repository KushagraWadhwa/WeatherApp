/* eslint-disable react-native/no-inline-styles */
import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Styles} from './TextInputField.styles';
import {colors} from '../../core-constants';

interface TextInputProps {
  title?: string;
  onChangeText?: (text: string) => void;
  borderColor?: string;
  placeholderText?: string;
  value?: string;
  isMasked?: boolean | false;
  viewStyle?: StyleProp<ViewStyle>;
  fontsStyle?: StyleProp<TextStyle>;
  placeholderColor?: string;
}

const TextInputField = (props: TextInputProps) => {
  return (
    <View
      style={[
        Styles.mainView,
        {borderColor: props?.borderColor ? props?.borderColor : colors.golden},
        props?.viewStyle,
      ]}>
      {props?.value?.length > 0 && props?.title?.length > 0 && (
        <Text style={Styles.title}>{props?.title}</Text>
      )}
      <TextInput
        secureTextEntry={props?.isMasked}
        value={props?.value}
        autoCorrect={false}
        style={[
          Styles.inputText,
          {
            paddingTop:
              props?.value?.length > 0 && props?.title?.length > 0 ? 5 : 10,
          },
          props?.fontsStyle,
        ]}
        placeholder={props?.placeholderText ?? 'Enter Username'}
        placeholderTextColor={
          props?.placeholderColor ? props?.placeholderColor : colors.golden
        }
        onChangeText={props?.onChangeText}
      />
    </View>
  );
};

export default TextInputField;
