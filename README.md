# IoTBridge_mobileApp(Under Development) 🚀

## Introduction

**IoTBridge_mobileApp** is a cutting-edge mobile application designed to provide seamless connectivity solutions for IoT devices. Developed using Expo for React Native, this app aims to bridge the gap between IoT devices and users, ensuring a user-friendly interface and robust functionality.

## Screenshots and Demo 📸
Here are some screenshots and a demo of the IoT Bridge mobile app in action.

<table>
  <tr>
    <td align="center">
      <img src="./assets/home_screen.jpeg" width="200" />
      <p>Description: This is the home screen. It has a login field and scrollable description containers that tell more about the app.</p>
    </td>
    <td align="center">
      <img src="./assets/main_app_screen.jpeg" width="200" />
      <p>Description: After logging in, you will be able to see a chart that shows real-time data. You can switch between sensors to view different data and push a button to navigate to the alert screen where you will see all the alerts.</p>
    </td>
    <td align="center">
      <img src="./assets/alert_screen.jpeg" width="200" />
      <p>Description: Here you can find all of the alert details for sensors that have exceeded predefined threshold values.</p>
    </td>
  </tr>
</table>

### Video Demonstration
<div style="text-align: center;">
  <img src="./assets/demo.gif" width="350"/>
  <p>Description: Here you can see a video demonstration of the app in action.</p>
</div>

## Features ✨

- **Real-time Device Monitoring:** Monitor the status and performance of connected IoT devices in real-time.
- **Device Management:** Add, remove, and configure IoT devices with ease.
- **Notifications:** Receive alerts and notifications for important events and updates.
- **User Authentication:** Secure user login and authentication.
- **Data Visualization:** Visualize device data through interactive charts and graphs.

## Getting Started 🛠️

### Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** and **npm** installed on your machine.
- **EAS CLI** installed globally (`npm install -g eas-cli`).

### Installation ⚙️

1. **Clone the Repository:**

   ```sh
   git clone git@github.com:IoTBridge-Connectivity-Solutions-Inc/IoTBridge_mobileApp.git
   ```

2. **Navigate to the Project Directory:**

   ```sh
   cd IoTBridge_mobileApp
   ```

3. **Install Dependencies:**

   ```sh
   npm install
   ```

4. **Start the Development Server:**

   ```sh
   npx expo start
   ```

## Usage 📱

1. **Open the App:**
   Use the Expo Go app on your mobile device to scan the QR code generated by the development server.

2. **Log In:**
   Enter your credentials to log in and start managing your IoT devices.
   username: admin
   passward: admin

3. **Add Devices:**
   Navigate to the 'Devices' section to add new IoT devices.

4. **Monitor Devices:(under devvelopment)**
   View the status and data of your connected devices in real-time.


## Contact 📬

If you have any questions or feedback, feel free to reach out:

- **Email:** ahmadd@uvic.ca

## Note ℹ️
If you try to download the app, it won't operate since environment variables for database connectivity and server connectivity are stored in a `.env` file, which you don't have access to. Additionally, the backend server is hosted in a different repository.