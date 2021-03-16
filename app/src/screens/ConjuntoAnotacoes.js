import React from "react";

import { MainStatusBar } from "./styles";
import ConjuntoAnotacoesContainer from "../components/containers/ConjuntoAnotacoes";

const ConjuntoAnotacoesScreen = ({ navigation, route }) => (
  <>
    <MainStatusBar />
    <ConjuntoAnotacoesContainer navigation={navigation} route={route} />
  </>
);

export { ConjuntoAnotacoesScreen };

export default ConjuntoAnotacoesScreen;
