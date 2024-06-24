import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Button from "./components/Button";

export default function App() {
  const handlePress = () => {
    Alert.alert("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.jsx to start working on your app!</Text>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
