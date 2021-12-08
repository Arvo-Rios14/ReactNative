import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import angular from "../assets/angular.png";
const ComponenteAngular = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ resizeMode: "contain", width: "50%" }}
        source={angular}
      />
    </View>
  );
};

export default ComponenteAngular;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
