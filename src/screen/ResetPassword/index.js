import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import Button from '../../component/Button';
import Images from '../../config/Images'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import CustomTextInput from '../../component/CustomTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function NewPassword() {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
        <SafeAreaView style={styles.container} > 
        <KeyboardAwareScrollView contentContainerStyle={{flex:1}}  bounces={false}>   
          <View style={styles.main}>
         
            <Image source={Images.forpw} style={styles.logo} />
            <Text style={styles.mainTitle}>Set a New Password</Text>
         
            <View style={styles.sub}>
              
              <CustomTextInput
                value={newPassword}
                label={'New password'}
                onChangeText={setNewPassword}
                placeholder="Enter New Password"
                isSecurity={true} 
                style={styles.inputStyle}
              
              />
              <CustomTextInput
                value={confirmPassword}
                label={'Confirm Password'}
                onChangeText={setConfirmPassword}
                placeholder="Enter Confirm Password"
                isSecurity={true} 
              />
             
              <Button
                title={'Reset Password'} 
                onPress={()=>{console.log("LOGIN BUTTON CLICK")}}
                style={styles.btn}
              />
            </View>
          </View> 
       </KeyboardAwareScrollView>
         </SafeAreaView>
  );
}