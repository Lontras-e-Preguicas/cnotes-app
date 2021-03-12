import React from "react";

import { StatusBar } from "expo-status-bar";

import TelaAtividades from "../components/presentational/Atividades/AtividadesPresentational.js";

const AtividadesScreen = (props) => (
  <>
    <StatusBar style="light" />
    <TelaAtividades />
  </>
);

export { AtividadesScreen };

export default AtividadesScreen;
