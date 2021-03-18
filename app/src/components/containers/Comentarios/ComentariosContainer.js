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
        title: "Test Tile",
        description: "Esse é um caderno Bruh 1 sobre o mundo dos bruhs",
        rating: 5,
        author: {
          name: "Eddy Pereira",
          profile_picture: "https://bit.ly/3r7LHuK",
        },
      },
    ]);
  };

  const retrieveData = async () => {
    setLoading(true);

    setData([
      {
        id: "1",
        title: "Bruh 1",
        description: "Esse é um caderno Bruh 1 sobre o mundo dos bruhs",
        rating: 4.98,
        author: {
          name: "Eddy Pereira",
          profile_picture: "https://bit.ly/3r7LHuK",
        },
      },
      {
        id: "2",
        title: "Bruh 2",
        description:
          "Esse é outro caderno da classe Bruh sobre o mundo dos bruhs",
        rating: 4.5,
        author: {
          name: "Eddy Pereira",
          profile_picture: "https://bit.ly/3r7LHuK",
        },
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
