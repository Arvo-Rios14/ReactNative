import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator1 from "./Navigations/StackNavigation1";
import BottomTabNav from "./Navigations/BottomTabNav";
import TopTabNav from "./Navigations/TopTabNav ";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNav>
        {/* <StackNavigator1 /> */}
      </BottomTabNav> 
    </NavigationContainer>
  );
}

