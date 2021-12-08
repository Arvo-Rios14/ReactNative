import React from "react";
import { Button, StyleSheet,Image, Text, View } from "react-native";
import Universo from "../assets/universo.jpg";

const Componente1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24,color:"black"}}>Bienvenido</Text> 
     <Image style={styles.image,{marginTop:"10%"}} source={Universo}>

     </Image>
    </View>
  );
};

export default Componente1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width:"100%",
    // height:"100%"
  }
});
