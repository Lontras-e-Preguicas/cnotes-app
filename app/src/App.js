import React, { useEffect } from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MainRoutes from "./routes";
import { lockAsync, OrientationLock } from "expo-screen-orientation";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
  });

  useEffect(() => {
    // Lock app to portrait
    lockAsync(OrientationLock.PORTRAIT_UP)
      .then()
      .catch((err) => console.warn(err));
  }, []);

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
