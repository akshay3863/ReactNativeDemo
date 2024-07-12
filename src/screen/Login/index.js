import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../component/Button';
import Images from '../../config/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import CustomTextInput from '../../component/CustomTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
        <SafeAreaView style={styles.container} > 
        <KeyboardAwareScrollView contentContainerStyle={{flex:1}}  bounces={false}>   
          <View style={styles.main}>
            <View style={styles.submain}>
            <Image source={Images.login} style={styles.logo} />
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Login to your existing account with e-Procure</Text>
            </View>
            <View
              style={styles.subSection}>
              <CustomTextInput
                value={email}
                label={'Email'}
                onChangeText={setEmail}
                placeholder="Enter Email"
                style={styles.inputStyle}
              />
              <CustomTextInput
                value={password}
                label={'Password'}
                onChangeText={setPassword}
                placeholder="Enter Password"
                isSecurity={true} 
              />
              <View style={styles.forgetTextContent}>
                <TouchableOpacity
                  onPress={() => {
                  console.log("FORGOT PASWORD SCREEN SET");
                  navigation.navigate('ResetPassword');
                  }}>
                  <Text style={styles.forgetText}>Forgot Your Password ?</Text>
                </TouchableOpacity>
              </View>
              <Button
                title={'Login'} 
                onPress={()=>{navigation.navigate('ResetPassword')}}
                style={styles.btnStyle}
              />
            </View>
          </View> 
       </KeyboardAwareScrollView>
         </SafeAreaView>
  );
}