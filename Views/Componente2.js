import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Componente2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Segundo Componente</Text>
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => navigation.navigate("Componente1")}
      />
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
