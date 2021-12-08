import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Componente4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style={{fontWeight:"bold",fontSize:"24"}}>Contacto #1</Text>
    </View>
  );
};

export default Componente4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
