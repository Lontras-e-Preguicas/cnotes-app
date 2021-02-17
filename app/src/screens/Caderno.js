import React from "react";

import { StatusBar } from "expo-status-bar";
import CadernoContainer from "../components/containers/Caderno";

const CadernoScreen = (props) => (
  <>
    <StatusBar style="dark" />
    <CadernoContainer />
  </>
);

export { CadernoScreen };

export default CadernoScreen;
