import React from "react";

import { MainStatusBar } from "./styles";
import ComentariosContainer from "../components/containers/Comentarios";

const ComentariosScreen = ({ navigation, route }) => (
  <>
    <MainStatusBar />
    <ComentariosContainer navigation={navigation} route={route} />
  </>
);

export { ComentariosScreen };

export default ComentariosScreen;
