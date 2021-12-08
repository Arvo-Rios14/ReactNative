import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import angular from "../assets/angular.png";
const Componente6 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>FIN DE LA PRIMERA PRACTICA</Text>
    </View>
  );
};

export default Componente6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
