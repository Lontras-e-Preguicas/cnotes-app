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
        commenter: {
          name: "Eddyzinho",
          profile_picture: "https://bit.ly/315W8DK",
        },
        message:
          "Esse é um teste de descrição, descricao de teste, ou seja, o comentario mesmo",
        creation_date: "2019-08-24T14:15:22Z",
      },
    ]);
  };

  const retrieveData = async () => {
    setLoading(true);

    setData([
      {
        id: Math.random().toString(),
        commenter: {
          name: "Eddyzinho",
          profile_picture: "https://bit.ly/315W8DK",
        },
        message:
          "Esse é um outro teste de descrição, descricao de teste, ou seja, o comentario mesmo",
        creation_date: "2019-08-24T14:15:22Z",
      },
      {
        id: Math.random().toString(),
        commenter: {
          name: "Eddyzinho",
          profile_picture: "https://bit.ly/315W8DK",
        },
        message:
          "Esse é mais um outro teste de descrição, ou seja, o comentario mesmo",
        creation_date: "2019-08-24T14:15:22Z",
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
