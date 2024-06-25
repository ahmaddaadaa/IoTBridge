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
      supportsTablet: true,
      bundleIdentifier: bundleID,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "ca6f80d8-d0af-4024-b992-23698332b259",
      },
    },
  },
};