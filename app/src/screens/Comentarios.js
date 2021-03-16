import React from "react";

import { StatusBar } from "expo-status-bar";
import ComentariosContainer from "../components/containers/Comentarios";

const ComentariosScreen = ({ navigation, route }) => (
  <>
    <StatusBar style="dark" />
    <ComentariosContainer navigation={navigation} route={route} />
  </>
);

export { ComentariosScreen };

export default ComentariosScreen;
