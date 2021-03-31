import React from "react";

import { StatusBar } from "expo-status-bar";
import AtividadesContainer from "../components/containers/Atividades";

const AtividadesScreen = ({ navigation }) => (
  <>
    <StatusBar style="dark" />
    <AtividadesContainer navigation={navigation} />
  </>
);

export { AtividadesScreen };

export default AtividadesScreen;
