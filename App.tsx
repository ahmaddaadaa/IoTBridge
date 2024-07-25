import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./components/WelcomeScreen";
import HomeScreen from "./components/HomeScreen";
import AlertList from "./components/AlertList";
import { styles } from "./styles/styles";

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  const handleLoginSuccess = (username: string) => {
    setUsername(username);
  };

  const handleLogout = (navigation: any) => {
    setUsername(null);
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" options={{ headerShown: false }}>
              {(props) => (
                <WelcomeScreen
                  {...props}
                  onLoginSuccess={(username: string) => {
                    handleLoginSuccess(username);
                    props.navigation.navigate("Home");
                  }}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {(props) =>
                username ? (
                  <HomeScreen
                    {...props}
                    username={username}
                    onLogout={() => handleLogout(props.navigation)}
                  />
                ) : (
                  props.navigation.navigate("Welcome")
                )
              }
            </Stack.Screen>
            <Stack.Screen name="Alerts" options={{ headerShown: false }}>
              {(props) => (
                <AlertList
                  {...props}
                  username={username}
                  onLogout={() => handleLogout(props.navigation)}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
