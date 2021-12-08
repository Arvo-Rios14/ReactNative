import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ComponenteAngular from "./ComponenteAngular";
import ComponenteReact from "./ComponenteReact";
const Componente2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ComponenteReact")}
      >
        <Text style={{ fontSize: 24 }}>React</Text>
      </TouchableOpacity>
      {/* <Button
        title="ANGULAR"
        backgroundColor="#841584"
        accessibilityLabel="BTN ANGULAR"
        onPress={() => navigation.navigate("ComponenteAngular")}
      />
      <Button
        title="REACT"
        color="#841584"
        accessibilityLabel="BTN ANGULAR"
        onPress={() => navigation.navigate("ComponenteReact")}
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ComponenteAngular")}
      >
        <Text style={{ fontSize: 24 }}>Angular</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Componente2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: "30%",
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#e6e6ff",
    padding: 10,
  },
});
