import React from "react";
import { registerRootComponent } from "expo";
{/**/}import TelaCaderno from "./screens/TelaCaderno";
import HomeScreen from "./screens/TelaPrincipal";
import TelaConjuntoAnotacao from "./screens/TelaConjAnotacao";
import TelaAtividades from "./screens/TelaAtividades";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MainRoutes from "./routes";

const App = () => {
    {/* Teste da tela caderno => return(<TelaCaderno />);*/}
    {/*Teste da tela principal => return(<HomeScreen />);*/}
    {/*Teste da tela Conjunto anotacao => return(<TelaConjuntoAnotacao />);*/}
    {/*Testar de tela Atividades => return(<TelaAtividades />);*/}

  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
  });

  return(<TelaAtividades />);
};

export default App;

registerRootComponent(App);
