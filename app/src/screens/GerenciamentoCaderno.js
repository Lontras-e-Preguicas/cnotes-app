import React from "react";

import { MainStatusBar } from "./styles";
import GerenciamentoCadernoContainer from "../components/containers/GerenciamentoCaderno";

const GerenciamentoCadernoScreen = ({ navigation, route }) => (
  <>
    <MainStatusBar />
    <GerenciamentoCadernoContainer navigation={navigation} route={route} />
  </>
);

export { GerenciamentoCadernoScreen };

export default GerenciamentoCadernoScreen;
