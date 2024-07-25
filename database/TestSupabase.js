import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { supabase } from "./supabaseClient";

const TestSupabase = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", "testuser")
      .eq("password", "password123");

    if (error) {
      console.error("Error fetching user:", error);
      return;
    }

    if (data.length > 0) {
      setUser(data[0]);
    } else {
      console.log("User not found");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Supabase Test</Text>
      {user ? (
        <Text>User found: {user.username}</Text>
      ) : (
        <Text>No user found</Text>
      )}
      <Button title="Fetch User" onPress={fetchUser} />
    </View>
  );
};

export default TestSupabase;
