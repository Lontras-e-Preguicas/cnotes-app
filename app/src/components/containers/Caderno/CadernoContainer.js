import React, { useState, useEffect } from "react";

import CadernoPresentational from "../../presentational/Caderno";
import { pathJoin } from "../../../utils/format";

function CadernoContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const openTile = ({ folder, id, title }) => {
    if (folder) {
      navigation.push("Caderno", {
        folder,
        id,
        title,
        path: pathJoin(route.params.path, title),
      });
      return;
    }

    navigation.navigate("Conjunto", { id, title });
  };

  const openSettings = ({ folder, id, title })=>{
    navigation.push("Gerenciamento", {
      folder,
      id,
      title,
      path: pathJoin(route.params.path, title),
    });
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

  const createFolder = () => {
    setData([
      ...data.filter((e) => e.folder),
      { id: Math.random().toString(), title: "New Folder", folder: true },
      ...data.filter((e) => !e.folder),
    ]);
  };

  const createConj = () => {
    setData([
      ...data,
      { id: Math.random().toString(), title: "New Conj", folder: false },
    ]);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const presentationalProps = {
    goBack: navigation.goBack,
    openTile,
    openSettings,
    data,
    loading,
    retrieveData,
    id: route.params.id,
    title: route.params.title,
    folder: route.params.folder,
    path: route.params.path,
    createFolder,
    createConj,
  };

  return <CadernoPresentational {...presentationalProps} />;
}

export default CadernoContainer;
