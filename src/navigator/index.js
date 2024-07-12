import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../screen/Boarding';
import Login from '../screen/Login';
import ResetPassword from '../screen/ResetPassword';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="OnBoarding" component={OnBoarding} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

export default Navigator;
