import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Componente1 from "../Views/Componente1";
import Componente2 from "../Views/Componente2";

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
    return(

        <Tab.Navigator initialRouteName="Componente2">
    <Tab.Screen name="Componente1" component={Componente1} />
    <Tab.Screen name="Componente2" component={Componente2} />
  </Tab.Navigator>
      );
}
