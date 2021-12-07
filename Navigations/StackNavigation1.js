import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Componente1 from "../Views/Componente1";
import Componente2 from "../Views/Componente2";

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator initialRouteName="Componente2">
            <Stack.Screen name="Componente1" component={Componente1}/>
            <Stack.Screen name="Componente2"  component={Componente2}/>
        </Stack.Navigator>
    )
}