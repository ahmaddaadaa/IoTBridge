import React, { useState, useCallback } from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import * as Animatable from "react-native-animatable";
import useWebSocket, { SensorData } from "../hooks/useWebSocket";
import useNotifications from "../hooks/useNotifications";
import { styles } from "../styles/styles";

const AnimatedLineChart = Animatable.createAnimatableComponent(LineChart);

const SensorChart: React.FC = () => {
  const [selectedSensors, setSelectedSensors] = useState<string[]>([
    "sensor1",
    "sensor2",
    "sensor3",
  ]);
  const notify = useNotifications();

  const checkForAlerts = useCallback(
    (latestData: SensorData) => {
      let message = "";
      if (latestData.sensor1 >= 0.8) {
        message = "Alert: Sensor 1 value hit 0.8 or greater!";
      } else if (latestData.sensor2 >= 0.8) {
        message = "Alert: Sensor 2 value hit 0.8 or greater!";
      } else if (latestData.sensor3 >= 0.8) {
        message = "Alert: Sensor 3 value hit 0.8 or greater!";
      }
      if (message) {
        notify(message);
      }
    },
    [notify],
  );

  const sensorData = useWebSocket(checkForAlerts);

  const toggleSensor = (sensor: string) => {
    setSelectedSensors((prevSelected) =>
      prevSelected.includes(sensor)
        ? prevSelected.filter((s) => s !== sensor)
        : [...prevSelected, sensor],
    );
  };

  const getDataForChart = () => {
    const limitedData = sensorData.slice(-20);
    if (limitedData.length === 0 || selectedSensors.length === 0) {
      return {
        labels: ["0"],
        datasets: [{ data: [0] }],
      };
    }

    const labels = limitedData.map((_, index) => index.toString());
    const datasets = selectedSensors.map((sensor) => ({
      data: limitedData.map((d) => d[sensor as keyof SensorData]),
      color: (opacity = 1) =>
        sensor === "sensor1"
          ? `rgba(0, 150, 255, ${opacity})`
          : sensor === "sensor2"
            ? `rgba(0, 255, 0, ${opacity})`
            : `rgba(255, 0, 0, ${opacity})`,
      strokeWidth: 2,
    }));

    return { labels, datasets };
  };

  return (
    <View style={styles.chartContainer}>
      <Animatable.View
        animation="fadeIn"
        duration={1000}
        style={styles.chartContainer}
      >
        <AnimatedLineChart
          data={getDataForChart()}
          width={Dimensions.get("window").width - 32}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: "#e0e0e0",
            backgroundGradientFrom: "#e0e0e0",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 150, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#0A84FF",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </Animatable.View>
      <View style={styles.buttonContainer}>
        {["sensor1", "sensor2", "sensor3"].map((sensor) => (
          <TouchableOpacity key={sensor} onPress={() => toggleSensor(sensor)}>
            <Animatable.View
              animation={selectedSensors.includes(sensor) ? "pulse" : undefined}
              duration={2000}
              iterationCount="infinite"
              style={[
                styles.button,
                selectedSensors.includes(sensor)
                  ? styles.buttonActive
                  : styles.buttonInactive,
              ]}
            >
              <Text style={styles.buttonText}>{sensor.toUpperCase()}</Text>
            </Animatable.View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.button, styles.allSensorsButton]}
          onPress={() => setSelectedSensors(["sensor1", "sensor2", "sensor3"])}
        >
          <Text style={styles.buttonText}>All Sensors</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SensorChart;
