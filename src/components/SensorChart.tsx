import React, { useEffect, useState, useRef, useCallback } from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from "../../notificationService";
import useGlowStyle from "../../hooks/useGlowStyle";
import { styles } from "../../styles/styles";

type SensorData = {
  timestamp: number;
  sensor1: number;
  sensor2: number;
  sensor3: number;
};

const AnimatedLineChart = Animated.createAnimatedComponent(LineChart);

const SensorChart: React.FC = () => {
  const [sensorData, setSensorData] = useState<SensorData[]>([
    { timestamp: Date.now(), sensor1: 0, sensor2: 0, sensor3: 0 },
  ]);
  const [selectedSensors, setSelectedSensors] = useState<string[]>([
    "sensor1",
    "sensor2",
    "sensor3",
  ]);
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>(
    undefined
  );
  const ws = useRef<WebSocket | null>(null);
  const opacity = useSharedValue(0);

  const checkForAlerts = useCallback(
    (data: SensorData[]) => {
      const latestData = data[data.length - 1];
      let message = "";
      if (latestData.sensor1 >= 0.8) {
        message = "Alert: Sensor 1 value hit 0.8 or greater!";
      } else if (latestData.sensor2 >= 0.8) {
        message = "Alert: Sensor 2 value hit 0.8 or greater!";
      } else if (latestData.sensor3 >= 0.8) {
        message = "Alert: Sensor 3 value hit 0.8 or greater!";
      }

      if (message && expoPushToken) {
        sendPushNotification(expoPushToken, message);
      }
    },
    [expoPushToken]
  );

  useEffect(() => {
    const setupNotifications = async () => {
      try {
        const token = await registerForPushNotificationsAsync();
        setExpoPushToken(token);
      } catch (error) {
        console.error("Error registering for push notifications:", error);
      }
    };

    setupNotifications();

    // Replace 'YOUR_LOCAL_IP' with your actual local IP address
    ws.current = new WebSocket("ws://192.168.4.87:8000");

    ws.current.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.current.onmessage = (event) => {
      try {
        const data: SensorData = JSON.parse(event.data);
        if (isValidData(data)) {
          setSensorData((prevData) => {
            const newData = [...prevData.slice(-19), data];
            checkForAlerts(newData);
            return newData;
          });
        } else {
          console.log("Received invalid data:", data);
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [checkForAlerts]);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, [sensorData, opacity]);

  const isValidData = (data: SensorData) => {
    return (
      isFinite(data.sensor1) && isFinite(data.sensor2) && isFinite(data.sensor3)
    );
  };

  const toggleSensor = (sensor: string) => {
    setSelectedSensors((prevSelected) =>
      prevSelected.includes(sensor)
        ? prevSelected.filter((s) => s !== sensor)
        : [...prevSelected, sensor]
    );
  };

  const getDataForChart = () => {
    if (sensorData.length === 0 || selectedSensors.length === 0) {
      return {
        labels: ["0"],
        datasets: [{ data: [0] }], // Provide default values to prevent rendering issues
      };
    }

    const labels = sensorData.map((_, index) => index.toString());
    const datasets = selectedSensors.map((sensor) => ({
      data: sensorData.map((d) => {
        const value = d[sensor as keyof SensorData];
        return isFinite(value) ? value : 0; // Ensure the value is finite
      }),
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

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const sensor1GlowStyle = useGlowStyle(selectedSensors.includes("sensor1"));
  const sensor2GlowStyle = useGlowStyle(selectedSensors.includes("sensor2"));
  const sensor3GlowStyle = useGlowStyle(selectedSensors.includes("sensor3"));
  const allSensorsGlowStyle = useGlowStyle(selectedSensors.length === 3);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Real-Time Sensor Data</Text>
      <Animated.View style={[styles.chartContainer, animatedStyle]}>
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
      </Animated.View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => toggleSensor("sensor1")}>
          <Animated.View
            style={[
              styles.button,
              selectedSensors.includes("sensor1")
                ? styles.buttonActive
                : styles.buttonInactive,
              sensor1GlowStyle,
            ]}
          >
            <Text style={styles.buttonText}>Sensor 1</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleSensor("sensor2")}>
          <Animated.View
            style={[
              styles.button,
              selectedSensors.includes("sensor2")
                ? styles.buttonActive
                : styles.buttonInactive,
              sensor2GlowStyle,
            ]}
          >
            <Text style={styles.buttonText}>Sensor 2</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleSensor("sensor3")}>
          <Animated.View
            style={[
              styles.button,
              selectedSensors.includes("sensor3")
                ? styles.buttonActive
                : styles.buttonInactive,
              sensor3GlowStyle,
            ]}
          >
            <Text style={styles.buttonText}>Sensor 3</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedSensors(["sensor1", "sensor2", "sensor3"])}
        >
          <Animated.View
            style={[
              styles.button,
              selectedSensors.length === 3
                ? styles.buttonActive
                : styles.buttonInactive,
              allSensorsGlowStyle,
            ]}
          >
            <Text style={styles.buttonText}>All Sensors</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SensorChart;