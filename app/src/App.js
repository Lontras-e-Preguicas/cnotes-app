import React, { useEffect } from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainRoutes from "./routes";
import { lockAsync, OrientationLock } from "expo-screen-orientation";
import Toast from "react-native-toast-message";
import { toastConfig } from "./components/core/Toasts";

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
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;

registerRootComponent(App);
