import React, { useEffect, useState } from "react";

import { ConjuntoAnotacoesPresentational } from "../../presentational/ConjuntoAnotacoes/ConjuntoAnotacoesPresentational";

function ConjuntoAnotacoesContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const openTile = ({ id }) => {
      navigation.navigate("Anotacao",{id});
    //console.warn("Abrindo", id);
  };

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
    openTile,
    addTile,
    title: route.params.title,
  };

  return <ConjuntoAnotacoesPresentational {...presentationalProps} />;
}

export default ConjuntoAnotacoesContainer;
