import React, { useState, useEffect } from "react";

import AnotacaoPresentational from "../../presentational/Anotacao";
import { pathJoin } from "../../../utils/format";

function AnotacaoContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
/*
  const openTile = ({ folder, id, title }) => {
    if (folder) {
      navigation.push("Caderno", {
        id,
        title,
        path: pathJoin(route.params.path, title),
      });
      return;
    }

    navigation.navigate("Anotacao", { id, title });
  };
*/
  const presentationalProps = {
    goBack: navigation.goBack,
  };

  return <AnotacaoPresentational {...presentationalProps} />;
}

export default AnotacaoContainer;
