import React from "react";

import ConjuntoAnotacoesContainer from "../components/containers/ConjuntoAnotacoes";
import { MainStatusBar } from "./styles";

const ConjuntoAnotacoesScreen = ({ navigation, route }) => (
  <>
    <MainStatusBar />
    <ConjuntoAnotacoesContainer navigation={navigation} route={route} />
  </>
);

export { ConjuntoAnotacoesScreen };

export default ConjuntoAnotacoesScreen;
