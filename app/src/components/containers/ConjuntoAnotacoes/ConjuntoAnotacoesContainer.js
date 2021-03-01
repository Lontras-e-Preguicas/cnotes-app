import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { ConjuntoAnotacoesPresentational } from "../../presentational/ConjuntoAnotacoes/ConjuntoAnotacoesPresentational";

function ConjuntoAnotacoesContainer(props) {
  const navigation = useNavigation();

  // ! Replace with navigation route prop passed from screen
  const route = {
    params: {
      id: "test_id",
      title: "🖤 El Caderno 🖤",
    },
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const openTile = ({ id }) => {
    console.warn("Abrindo", id);
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
    title: route.params.title,
  };

  return <ConjuntoAnotacoesPresentational {...presentationalProps} />;
}

export default ConjuntoAnotacoesContainer;
