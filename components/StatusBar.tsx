import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StatusBarComponent: React.FC<{
  username: string;
  isLoggedIn: boolean;
  onLogout: (navigation: any) => void;
}> = ({ username, isLoggedIn, onLogout }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBar}>
      <View style={styles.leftContainer}>
        {navigation.canGoBack() && (
          <Button title="Back" onPress={() => navigation.goBack()} />
        )}
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <Text style={styles.username}>
        {isLoggedIn ? `Welcome, ${username}` : "Please log in to continue"}
      </Text>
      {isLoggedIn && (
        <Button title="Logout" onPress={() => onLogout(navigation)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    width: "100%",
    height: 60,
    backgroundColor: "#e0e0e0", // Light gray background
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10,
    resizeMode: "contain",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF", // Blue text
  },
});

export default StatusBarComponent;
