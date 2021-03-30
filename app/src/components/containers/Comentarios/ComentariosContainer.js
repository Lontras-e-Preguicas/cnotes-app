import React, { useEffect, useState } from "react";

import ComentariosPresentational from "../../presentational/Comentarios";

import Toast from "react-native-toast-message";
import {
  API_URLS,
  authenticatedFetch,
  extractFailureInfo,
} from "../../../utils/api";

function ComentariosContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
    setRefreshing(true);
    try {
      const res = await authenticatedFetch(
        `${API_URLS.comment}${route.params.id}/comments`,
      );

      console.warn(res.status);
      console.warn(`${API_URLS.comment}${route.params.id}/comments`);
      console.warn(route.params.id);

      if (res.status === 200) {
        const data = await res.json();
        setData(data.notes);
      } else {
        const fInfo = await extractFailureInfo(res);
        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1: fInfo.message,
          });
        }
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
    setRefreshing(false);
  };

  const onRefresh = async () => {
    setRefreshing(true);

    await retrieveData();

    setRefreshing(false);
  };

  useEffect(() => {
    onRefresh();
  }, []);

  const presentationalProps = {
    goBack: navigation.goBack,
    data,
    refreshing,
    onRefresh,
    addTile,
  };

  return <ComentariosPresentational {...presentationalProps} />;
}

export default ComentariosContainer;
