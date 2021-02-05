import React from "react";
import { registerRootComponent } from "expo";

import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { LoginScreen } from "./screens";
import MainRoutes from "./routes";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;

registerRootComponent(App);
