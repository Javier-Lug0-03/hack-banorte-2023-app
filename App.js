import { StatusBar } from 'expo-status-bar';
import {React, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer, createAppContainer} from '@react-navigation/native';
import LoginScreen from './screens/Login';
import * as Font from 'expo-font';
import Nearby from './screens/Nearby';
import Tramite from './screens/Tramite';

async function loadFonts(){
  await Font.loadAsync({
    'Roboto': require('./fonts/Roboto-Regular.ttf'),
    'Gotham': require('./fonts/GothamMedium.ttf')
  })
}

const Stack = createStackNavigator();
const  App = () => {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Ubícanos" component={Nearby} options={{headerShown: true, headerTintColor: '#FFFFFF' ,headerStyle:{backgroundColor: '#EB0029'}}}/>
        <Stack.Screen name='Turno' component={Tramite} options={{headerShown: true, headerTintColor: '#FFFFFF', headerStyle:{backgroundColor: '#EB0029'}}} />
      </Stack.Navigator> 
    </NavigationContainer>

  );
}

export default App;
