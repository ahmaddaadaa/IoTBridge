import React from "react";
import { View, ImageBackground } from "react-native";
import SensorChart from "./SensorChart";
import StatusBarComponent from "./StatusBar";
import { styles } from "../styles/styles";

const HomeScreen: React.FC<{ username: string; onLogout: () => void }> = ({
  username,
  onLogout,
}) => {
  return (
    <ImageBackground
      source={require("../assets/galaxy.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <SensorChart />
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
