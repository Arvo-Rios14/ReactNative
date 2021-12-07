import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator1 from './Navigations/StackNavigation1';
import BottomTabNav from './Navigations/BottomTabNav';
import TopTabNav from './Navigations/TopTabNav ';

export default function App() {
  return (
   <NavigationContainer>
     {/* <StackNavigator1/> */}
    <BottomTabNav/>
    {/* <TopTabNav></TopTabNav> */}
   </NavigationContainer>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
