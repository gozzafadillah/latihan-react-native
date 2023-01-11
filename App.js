/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import LoginScreen from './src/screens/Login';
import localStorage from './src/utils/storageLocal';

const Stack = createNativeStackNavigator();

const checkToken = () => {
  const token = localStorage.getFromLocal('token');
  console.log(token);
  if (!token.token) {
    return false;
  }
  return true;
};

function App() {
  console.log(checkToken());
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={checkToken() === true ? 'Home' : 'Login'}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Details}
          options={{
            title: 'Detail',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
