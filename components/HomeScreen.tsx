import React from "react";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import SensorChart from "./SensorChart";
import StatusBarComponent from "./StatusBar";
import { styles } from "../styles/styles";

const HomeScreen: React.FC<{
  username: string;
  onLogout: () => void;
  navigation: any;
}> = ({ username, onLogout, navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/fly.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <SensorChart />
        <TouchableOpacity
          style={styles.alertButton}
          onPress={() => navigation.navigate("Alerts")}
        >
          <Text style={styles.alertButtonText}>View Alerts</Text>
        </TouchableOpacity>
      </View>
      <StatusBarComponent
        username={username}
        isLoggedIn={true}
        onLogout={onLogout}
      />
    </ImageBackground>
  );
};

export default HomeScreen;
