import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Componente4 from "../Views/Componente4";
import Componente5 from "../Views/Componente5";
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={{
        tabBarContentContainerStyle:{},
        "tabBarActiveTintColor": "#ff6600",
        "tabBarInactiveTintColor": "#060606",
        "tabBarShowLabel": true,
        "tabBarShowIcon": true,
        "tabBarLabelStyle": {
          "fontSize": 11,
          color:"white",
        },
        "tabBarStyle": {
          "paddingTop": 48,
          "backgroundColor": "black"
        }
      }}
    >
      <Tab.Screen name="Componente4" options={{title:"Contacto #1"}} component={Componente4} />
      <Tab.Screen name="Componente5" options={{title:"Contacto #2"}}  component={Componente5} />
    </Tab.Navigator>
  );
}
