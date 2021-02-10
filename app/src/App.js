import React from "react";
import { registerRootComponent } from "expo";
{/**/}import TelaCaderno from "./screens/TelaCaderno";
import HomeScreen from "./screens/TelaPrincipal";
import TelaConjuntoAnotacao from "./screens/TelaConjAnotacao";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MainRoutes from "./routes";

const App = () => {
    {/* Teste da tela caderno => return(<TelaCaderno />);*/}
    {/*Teste da tela principal => return(<HomeScreen />);*/}
    {/*Teste da tela Conjunto anotacao => return(<TelaConjuntoAnotacao />);*/}

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
  return(<TelaConjuntoAnotacao />);
{  /*return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );*/}
};

export default App;

registerRootComponent(App);
