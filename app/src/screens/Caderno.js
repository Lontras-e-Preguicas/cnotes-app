import React from "react";

import { StatusBar } from "expo-status-bar";
import CadernoContainer from "../components/containers/Caderno";

const CadernoScreen = ({ navigation, route }) => (
  <>
    <StatusBar style="dark" />
    <CadernoContainer navigation={navigation} route={route} />
  </>
);

export { CadernoScreen };

export default CadernoScreen;
