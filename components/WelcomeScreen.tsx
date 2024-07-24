import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  Alert,
  ScrollView,
} from "react-native";
import users from "../database/users.json";
import descriptionsData from "../database/mockDescriptions.json";
import StatusBarComponent from "./StatusBar";
import { styles } from "../styles/styles";

const WelcomeScreen: React.FC<{
  onLoginSuccess: (username: string) => void;
}> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = users.users.find(
      (u) => u.username === username && u.password === password,
    );
    if (user) {
      onLoginSuccess(username);
    } else {
      Alert.alert(
        "Invalid credentials",
        "The username or password you entered is incorrect.",
      );
    }
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")} // Ensure this path matches the location where you saved the image
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.spacerTop} />
          {descriptionsData.descriptions.map((item, index) => (
            <View key={index} style={styles.descriptionContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
          <View style={styles.spacerTop} />
        </ScrollView>
      </View>
      <StatusBarComponent
        username="Guest"
        isLoggedIn={false}
        onLogout={() => {}}
      />
    </ImageBackground>
  );
};

export default WelcomeScreen;
