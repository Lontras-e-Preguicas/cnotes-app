import React from "react";

import { StatusBar } from "expo-status-bar";

import TelaAtividades from "../components/presentational/Atividades/TelaAtividades.js";

const TelaDeAtividades = (props) => (
  <>
    <StatusBar style="light" />
    <TelaAtividades />
  </>
);

export { TelaDeAtividades };

export default TelaDeAtividades;
