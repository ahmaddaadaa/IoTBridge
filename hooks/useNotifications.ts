import { useEffect, useState } from "react";
import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from "../hooks/notificationService";

const useNotifications = () => {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>();

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
  }, []);

  const notify = (message: string) => {
    if (expoPushToken) {
      sendPushNotification(expoPushToken, message);
    }
  };

  return notify;
};

export default useNotifications;
