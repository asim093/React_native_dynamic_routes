import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';  // Home screen import karein
import React from 'react';
import About from './Details';

export type RootStackParamList = {
  Home: undefined;   
  Details: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
