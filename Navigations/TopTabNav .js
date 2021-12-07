import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Componente1 from "../Views/Componente1";
import Componente2 from "../Views/Componente2";
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={{
        "tabBarActiveTintColor": "#ff6600",
        "tabBarInactiveTintColor": "#060606",
        "tabBarShowLabel": true,
        "tabBarShowIcon": true,
        "tabBarLabelStyle": {
          "fontSize": 11
        },
        "tabBarStyle": {
          "paddingTop": 48,
          "backgroundColor": "#f3f3f1"
        }
      }}
    >
      <Tab.Screen name="Componente1" component={Componente1} />
      <Tab.Screen name="Componente2" component={Componente2} />
    </Tab.Navigator>
  );
}
