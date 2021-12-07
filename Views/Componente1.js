import React from "react";
import { Button, StyleSheet,Image, Text, View } from "react-native";
import Universo from "../assets/universo.jpg";

const Componente1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido</Text>
     <Image style={styles.image} source={Universo}>

     </Image>
    </View>
  );
};

export default Componente1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width:"100%",
    // height:"100%"
  }
});
