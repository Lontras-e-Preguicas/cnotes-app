import React from "react";

import CadernoContainer from "../components/containers/Caderno";
import { MainStatusBar } from "./styles";

const CadernoScreen = ({ navigation, route }) => (
  <>
    <MainStatusBar />
    <CadernoContainer navigation={navigation} route={route} />
  </>
);

export { CadernoScreen };

export default CadernoScreen;
