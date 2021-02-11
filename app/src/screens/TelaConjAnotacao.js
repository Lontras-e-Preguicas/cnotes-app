import React from "react";

import { StatusBar } from "expo-status-bar";

import TelaConjAnotacao from "../components/presentational/ConjAnotacao/ConjAnotacaoPresentational";

const TelaConjuntoAnotacao = (props) => (
  <>
    <StatusBar style="light" />
    <TelaConjAnotacao NomeAnotacao="Anotação Exemplo" />
  </>
);

export { TelaConjuntoAnotacao };

export default TelaConjuntoAnotacao;
