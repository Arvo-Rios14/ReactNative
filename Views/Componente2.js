import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import githubIcon from "../assets/githubIcon.png";


const Componente2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={{resizeMode:"contain",width:"50%"}} source={githubIcon}/>
      <Text style={{fontWeight:"bold",fontSize:24}}>@Arvo-Rios14</Text>

    </View>
  );
};

export default Componente2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
