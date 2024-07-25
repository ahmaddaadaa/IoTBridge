import { useEffect, useRef, useState } from "react";

export type SensorData = {
  timestamp: number;
  sensor1: number;
  sensor2: number;
  sensor3: number;
};

const useWebSocket = (onMessage: (data: SensorData) => void) => {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(`ws://${process.env.EXPO_PUBLIC_LOCAL_IP}:8000`);

    ws.current.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.current.onmessage = (event) => {
      try {
        const data: SensorData = JSON.parse(event.data);
        if (isValidData(data)) {
          setSensorData((prevData) => [...prevData, data]);
          onMessage(data);
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
  }, [onMessage]);

  const isValidData = (data: SensorData) => {
    return (
      isFinite(data.sensor1) && isFinite(data.sensor2) && isFinite(data.sensor3)
    );
  };

  return sensorData;
};

export default useWebSocket;
