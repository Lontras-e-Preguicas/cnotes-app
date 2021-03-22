import React, { useEffect, useState } from "react";

import ComentariosPresentational from "../../presentational/Comentarios";

function ComentariosContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const addTile = () => {
    setData([
      ...data,
      {
        id: Math.random().toString(),
        title: "",
        description: "Esse é um teste de descrição, descricao de teste, ou seja, o comentario mesmo",

      },
    ]);
  };

  const retrieveData = async () => {
    setLoading(true);

    setData([
      {
        id: Math.random().toString(),
        title: "",
        description:
        "Esse é um outro teste de descrição, descricao de teste, ou seja, o comentario mesmo",
      },
      {
        id: Math.random().toString(),
        title: "",
        description:
          "Esse é mais um outro teste de descrição, ou seja, o comentario mesmo",
      },
    ]);

    setLoading(false);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const presentationalProps = {
    goBack: navigation.goBack,
    data,
    loading,
    retrieveData,
    addTile,
  };

  return <ComentariosPresentational {...presentationalProps} />;
}

export default ComentariosContainer;
