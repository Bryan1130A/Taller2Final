import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigator/StackNavigator';
import { Pantalla1Screens } from './src/Screen/Pantalla1Screans';


export default function App() {
  return (
    <NavigationContainer>
      
      <StackNavigator />
    </NavigationContainer>
  );
}
