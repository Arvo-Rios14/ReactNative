import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Componente1 from "../Views/Componente1";
import Componente2 from "../Views/Componente2";
import Componente5 from "../Views/Componente5";
import Componente6 from "../Views/Componente6";
import StackNavigator1 from "./StackNavigation1";
import TopTabNav from "./TopTabNav ";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator initialRouteName="Componente1">
      <Tab.Screen
        name="Componente1"
        component={Componente1}
        options={{ headerShown: false, tabBarLabel: "Inicio", tabBarIcon:()=>(<Ionicons name={"ios-home"} size={24} color="#0a84ff"/>)}} 
/>
      <Tab.Screen
        name="Componente2"
        component={Componente2}
        options={{ headerShown: false, tabBarLabel: "Inicio", tabBarIcon:()=>(<Ionicons name={"logo-github"} size={24} color="#0a84ff"/>)}} 
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarLabel: "Inicio", tabBarIcon:()=>(<Ionicons name={"logo-angular"} size={24} color="#0a84ff"/>)}} 
        name="StackNavigator1"
        component={StackNavigator1}
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarLabel: "Inicio", tabBarIcon:()=>(<Ionicons name={"ios-home"} size={24} color="#0a84ff"/>)}} 
        name="TopTabNav"
        component={TopTabNav}
      />
      <Tab.Screen
        name="Componente6"
        options={{ headerShown: false, tabBarLabel: "Inicio", tabBarIcon:()=>(<Ionicons name={"ios-home"} size={24} color="#0a84ff"/>)}} 
        component={Componente6}
      />
    </Tab.Navigator>
  );
}
