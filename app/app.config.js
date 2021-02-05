import "dotenv/config";

export default {
  name: "cnotes",
  slug: "cnotes",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/app/icon.png",
  splash: {
    image: "./src/assets/app/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/app/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
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
