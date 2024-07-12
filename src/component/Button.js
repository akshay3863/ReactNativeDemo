import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import { cstyles } from '../config/CommonStyle';
export default function Button({
  onPress,
  title,
  style,
  textStyle,
  isLoading,
  leftIcon,
  rightIcon,
  disabled
}) {
  return (
    <TouchableOpacity
      style={[cstyles.btnStyle,
        style,
      ]}
      disabled={disabled}
      onPress={onPress}>
      {leftIcon}
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#fff'} />
      ) : (
        <Text style={[cstyles.btnTextStyle, textStyle]}>
          {title}
        </Text>
      )}
      {rightIcon}
    </TouchableOpacity>
  );
}
