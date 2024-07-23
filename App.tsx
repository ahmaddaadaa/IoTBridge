import React from "react";
import { StyleSheet, View } from "react-native";
import SensorChart from "./src/components/SensorChart";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <SensorChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default App;
