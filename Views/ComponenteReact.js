import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View,Image } from "react-native";
import react from "../assets/react.png";

const ComponenteReact = ({ navigation }) => {
  return (
    <View style={styles.container}>
         <Image
        style={{ resizeMode: "contain", width: "50%" }}
        source={react}
      />
    </View>
  );
};

export default ComponenteReact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
