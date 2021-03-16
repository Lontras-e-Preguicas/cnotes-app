import React from "react";

import { MainStatusBar } from "./styles";
import CadernoContainer from "../components/containers/Caderno";

const CadernoScreen = ({ navigation, route }) => (
  <>
    <MainStatusBar />
    <CadernoContainer navigation={navigation} route={route} />
  </>
);

export { CadernoScreen };

export default CadernoScreen;
