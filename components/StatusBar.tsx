import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";

const StatusBarComponent: React.FC<{
  username: string;
  isLoggedIn: boolean;
  onLogout: () => void;
}> = ({ username, isLoggedIn, onLogout }) => {
  return (
    <View style={styles.navbar}>
      <Image
        source={require("../assets/logo.png")} // Ensure this path matches the location of your logo
        style={styles.logo}
      />
      <Text style={styles.navbarText}>
        {isLoggedIn ? `Welcome, ${username}` : "Please log in"}
      </Text>
      {isLoggedIn && (
        <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default StatusBarComponent;
