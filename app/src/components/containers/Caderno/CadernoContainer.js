import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import CadernoPresentational from "../../presentational/Caderno";

function CadernoContainer(props) {
  const navigation = useNavigation();

  // ! Replace with navigation route prop passed from screen
  const route = {
    params: {
      id: "test_id",
      title: "Test Title",
      path: "/Raiz",
    },
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const openTile = ({ folder, id }) => {
    if (folder) {
      navigation.push("Caderno", { id });
      return;
    }

    navigation.navigate("Conjunto", { id });
  };

  const retrieveData = async () => {
    setLoading(true);

    setData([
      {
        id: "1",
        title: "Pasta 1",
        folder: true,
      },
      {
        id: "2",
        title: "Pasta 2",
        folder: true,
      },
      {
        id: "3",
        title: "Pasta 3",
        folder: true,
      },
      {
        id: "4",
        title: "Conjunto 1",
        folder: false,
      },
      {
        id: "5",
        title: "Conjunto 2",
        folder: false,
      },
    ]);

    setLoading(false);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const presentationalProps = {
    goBack: navigation.goBack,
    openTile,
    data,
    loading,
    retrieveData,
    title: route.params.title,
    path: route.params.path,
  };

  return <CadernoPresentational {...presentationalProps} />;
}

export default CadernoContainer;
