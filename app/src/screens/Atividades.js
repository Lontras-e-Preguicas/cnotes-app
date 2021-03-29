import React from "react";

import { StatusBar } from "expo-status-bar";
import AtividadesContainer from "../components/containers/Atividades";

const AtividadesScreen = (props) => (
  <>
    <StatusBar style="light" />
    <AtividadesContainer />
  </>
);

export { AtividadesScreen };

export default AtividadesScreen;
