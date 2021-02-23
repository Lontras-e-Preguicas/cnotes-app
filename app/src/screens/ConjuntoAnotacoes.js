import React from "react";

import { StatusBar } from "expo-status-bar";

import ConjuntoAnotacoesContainer from "../components/containers/ConjuntoAnotacoes";

const ConjuntoAnotacoesScreen = (props) => (
  <>
    <StatusBar style="dark" />
    <ConjuntoAnotacoesContainer />
  </>
);

export { ConjuntoAnotacoesScreen };

export default ConjuntoAnotacoesScreen;
