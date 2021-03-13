import React from "react";

import { StatusBar } from "expo-status-bar";
import AnotacaoContainer from "../components/containers/Anotacao";

const AnotacaoScreen = ({ navigation, route }) => (
  <>
    <StatusBar style="dark" />
    <AnotacaoContainer navigation={navigation} route={route} />
  </>
);

export { AnotacaoScreen };

export default AnotacaoScreen;
