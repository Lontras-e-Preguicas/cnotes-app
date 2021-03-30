import React, { useState, useEffect } from "react";

import AnotacaoPresentational from "../../presentational/Anotacao";
import { pathJoin } from "../../../utils/format";

function AnotacaoContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const openComentarios = () => {
    navigation.navigate("Comentarios", {
      id: route.params.id,
    });
  };

function submitRating(ratingvalue) {
  //    console.log(ratingvalue);
  };

  const presentationalProps = {
    goBack: navigation.goBack,
    title: route.params.title,
    author: route.params.author,
    openComentarios,
    submitRating,
  };

  return <AnotacaoPresentational {...presentationalProps} />;
}

export default AnotacaoContainer;
