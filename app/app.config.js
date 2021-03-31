import "dotenv/config";

export default {
  name: "CNotes",
  slug: "cnotes",
  version: "1.0.1-blanc",
  orientation: "portrait",
  icon: "./src/assets/app/icon.png",
  splash: {
    image: "./src/assets/app/splash.png",
    resizeMode: "contain",
    backgroundColor: "#F25C5C",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
  },
  android: {
    package: "com.cnotes",
    adaptiveIcon: {
      foregroundImage: "./src/assets/app/adaptive-icon.png",
      backgroundColor: "#F25C5C",
    },
  },
  web: {
    favicon: "./src/assets/app/favicon.png",
  },

  extra: {
    API_URL: process.env.CNOTES_API_URL,
    DEBUG: process.env.DEBUG || false,
  },
};
