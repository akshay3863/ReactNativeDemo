import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../constant';
import Entypo from 'react-native-vector-icons/Entypo';
import { cstyles } from '../config/CommonStyle';
export default function CustomTextInput(props) {
  const {
    labelStyle,
    value,
    textInputStyle,
    placeholder,
    containerStyle,
    isSecurity,
    label,
    onChangeText,
    style,
    placeholderTextColor,
    multiline,
    numberOfLines,
    isDisable,
  } = props;
  const [isHide, setIsHide] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[cstyles.mainSection,
        style,
      ]}>
      <Text
        style={[cstyles.labelStyle,labelStyle,]}>
        {label}
      </Text>
      <View
        style={[cstyles.mainInputStyle,
          containerStyle,
        ]}>
        <TextInput
          style={[{width: isSecurity ? '90%' : '100%',},cstyles.inputStyle,
            textInputStyle,
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          readOnly={isDisable}
          secureTextEntry={isSecurity ? !isHide : false}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : '#545454'
          }
          onFocus={e => {
            setIsFocused(true);
          }}
          onBlur={e => {
            setIsFocused(false);
          }}
          multiline={multiline}
          numberOfLines={numberOfLines ? numberOfLines : 1}
          // {...props}
        />

        {isSecurity ? (
          <Pressable onPress={() => setIsHide(!isHide)}>
            <Entypo
              name={!isHide ? 'eye' : 'eye-with-line'}
              color={colors.gray}
              size={scale(22)}
            />
          </Pressable>
        ) : null}
      </View>
   
    </View>
  );
}
