import React from "react";

import { MainStatusBar } from "./styles";
import AnotacaoContainer from "../components/containers/Anotacao";

const AnotacaoScreen = ({ navigation, route }) => (
  <>
    <MainStatusBar />
    <AnotacaoContainer navigation={navigation} route={route} />
  </>
);

export { AnotacaoScreen };

export default AnotacaoScreen;
