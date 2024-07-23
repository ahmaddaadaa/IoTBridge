const getBundleID = () => {
  switch (process.env.APP_VARIANT) {
    case "production":
      return "ca.iotbridge.setup";
    case "preview":
      return "ca.iotbridge.setup.preview";
    default:
      return "ca.iotbridge.setup.dev";
  }
};

const getAppName = () => {
  switch (process.env.APP_VARIANT) {
    case "production":
      return "setup";
    case "preview":
      return "setup (preview)";
    default:
      return "setup (Dev)";
  }
};

const bundleID = getBundleID();

export default {
  expo: {
    name: getAppName(),
    slug: "setup",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      buildNumber: "1",
      supportsTablet: true,
      bundleIdentifier: bundleID,
      config: {
        googleSignIn: {
          reservedClientId: "your-reversed-client-id",
        },
      },
      infoPlist: {
        NSCameraUsageDescription: "This app uses the camera to scan barcodes.",
        NSLocationWhenInUseUsageDescription:
          "This app uses location to find nearby places.",
        UIBackgroundModes: ["fetch", "remote-notification"],
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true,
        },
      },
    },
    android: {
      versionCode: "1",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "your.package.name",
      permissions: [
        "CAMERA",
        "ACCESS_FINE_LOCATION",
        "VIBRATE",
        "WAKE_LOCK",
        "com.anddoes.launcher.permission.UPDATE_COUNT",
        "com.google.android.c2dm.permission.RECEIVE",
        "com.htc.launcher.permission.READ_SETTINGS",
        "com.htc.launcher.permission.UPDATE_SHORTCUT",
        "com.majeur.launcher.permission.UPDATE_BADGE",
        "com.sec.android.provider.badge.permission.READ",
        "com.sec.android.provider.badge.permission.WRITE",
        "com.sonyericsson.home.permission.BROADCAST_BADGE",
      ],
      useNextNotificationsApi: true,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "ca6f80d8-d0af-4024-b992-23698332b259",
      },
    },
    updates: {
      url: "https://u.expo.dev/ca6f80d8-d0af-4024-b992-23698332b259",
    },
    runtimeVersion: {
      policy: "nativeVersion",
    },
  },
};
