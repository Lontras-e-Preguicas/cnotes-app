import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ConjuntoAnotacoesPresentational } from "../../presentational/ConjuntoAnotacoes/ConjuntoAnotacoesPresentational";

function ConjuntoAnotacoesContainer(props) {
  const navigation = useNavigation();

  const presentationalProps = {
    goBack: navigation.goBack,
  };

  return <ConjuntoAnotacoesPresentational {...presentationalProps} />;
}

export default ConjuntoAnotacoesContainer;
