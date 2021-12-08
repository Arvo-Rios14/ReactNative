import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import ComponenteAngular from "../Views/ComponenteAngular";
import ComponenteReact from "../Views/ComponenteReact";
import Componente3 from "../Views/Componente3";
const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator initialRouteName="Componente3">
            <Stack.Screen name="Componente3" options={{headerShown:false,title:"Volver"}} component={Componente3}/>
            <Stack.Screen name="ComponenteAngular" options={{title:"Angular"}} component={ComponenteAngular}/>
            <Stack.Screen name="ComponenteReact"   options={{title:"React"}} component={ComponenteReact}/>
        </Stack.Navigator>
    )
}