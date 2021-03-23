import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import HomePresentational from "../../presentational/Home";

import { authenticatedFetch, API_URLS } from "../../../utils/api";
import { Alert } from "react-native";

function HomeContainer(props) {
  const navigation = useNavigation();

  const [notebooks, setNotebooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const retrieveNotebooks = async () => {
    try {
      const res = await authenticatedFetch(API_URLS.notebook);

      if (res.status != 200) {
        throw new Error();
      }

      const data = await res.json();
      setNotebooks(data);
    } catch (err) {
      Alert.alert("Falha ao obter cadernos");
    }
  };

  const createNotebook = async (title = "Documento sem título") => {
    try {
      const payload = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      };

      const res = await authenticatedFetch(API_URLS.notebook, payload);

      if (res.status != 201) {
        throw Error();
      }

      // const data = await res.json();

      await onRefresh();
    } catch (err) {
      Alert.alert("Um erro ocorreu");
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);

    await retrieveNotebooks();

    setRefreshing(false);
  };

  const openCaderno = ({ id, title }) => {
    navigation.navigate("CadernoStack", {
      screen: "Caderno",
      params: { id, title, path: "/Raiz", root: true },
    });
  };

  const addCaderno = () => {
    createNotebook();
  };

  useEffect(() => {
    onRefresh();
  }, []);

  const presentationalProps = {
    notebooks,
    refreshing,
    onRefresh,
    openCaderno,
    addCaderno,
  };

  return <HomePresentational {...presentationalProps} />;
}

export default HomeContainer;
