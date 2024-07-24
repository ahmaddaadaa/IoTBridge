import React from "react";
import { View, Text, FlatList } from "react-native";
import mockAlerts from "../database/mockAlerts.json";
import { styles } from "../styles/styles";

const AlertList: React.FC = () => {
  return (
    <View style={styles.alertListContainer}>
      <Text style={styles.header}>Alerts</Text>
      <FlatList
        data={mockAlerts.alerts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.alertItem}>
            <Text style={styles.alertText}>
              {item.sensor_name}: {item.sensor_value} at{" "}
              {new Date(item.timestamp).toLocaleString()}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.alertListContentContainer}
      />
    </View>
  );
};

export default AlertList;
