import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Componente1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Primer Componente</Text>
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => navigation.navigate("Componente2")}
      />
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
});
