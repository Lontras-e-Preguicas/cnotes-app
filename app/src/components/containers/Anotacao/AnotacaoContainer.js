import React, { useState, useEffect } from "react";

import AnotacaoPresentational from "../../presentational/Anotacao";
import { pathJoin } from "../../../utils/format";

function AnotacaoContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const openComentarios = () => {
    navigation.navigate("Comentarios");
    //console.warn("Abrindo");
  };

  const presentationalProps = {
    goBack: navigation.goBack,
    title: route.params.title,
    author: route.params.author,
    openComentarios,
  };

  return <AnotacaoPresentational {...presentationalProps} />;
}

export default AnotacaoContainer;
