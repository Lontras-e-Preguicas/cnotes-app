import React from "react";

import { StatusBar } from "expo-status-bar";

import ConjuntoAnotacoesContainer from "../components/containers/ConjuntoAnotacoes";

const ConjuntoAnotacoesScreen = ({ navigation, route }) => (
  <>
    <StatusBar style="dark" />
    <ConjuntoAnotacoesContainer navigation={navigation} route={route} />
  </>
);

export { ConjuntoAnotacoesScreen };

export default ConjuntoAnotacoesScreen;
