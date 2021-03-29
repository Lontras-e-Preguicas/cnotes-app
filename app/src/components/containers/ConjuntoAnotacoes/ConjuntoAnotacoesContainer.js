import React, { useEffect, useState } from "react";

import { ConjuntoAnotacoesPresentational } from "../../presentational/ConjuntoAnotacoes/ConjuntoAnotacoesPresentational";
import Toast from "react-native-toast-message";
import {
  API_URLS,
  authenticatedFetch,
  extractFailureInfo,
} from "../../../utils/api";

function ConjuntoAnotacoesContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const retrieveData = async () => {
    setRefreshing(true);
    try {
      const res = await authenticatedFetch(
        `${API_URLS.noteGroup}${route.params.id}/`,
      );

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

  const createAnotacao = async (title) => {
    try {
      const payload = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          note_group: route.params.id,
        }),
      };
      const res = await authenticatedFetch(API_URLS.noteCreate, payload);

      if (res.status === 201) {
        Toast.show({
          type: "success",
          text1: "Anotação criada com sucesso",
        });
      } else {
        const fInfo = await extractFailureInfo(res);

        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1:
              (fInfo.fields.title && `Título: ${fInfo.fields.title}`) ||
              fInfo.message,
          });
        }
      }
    } catch {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }

    await retrieveData();
  };

  const deleteFolder = async () => {
    try {
      const payload = {
        method: "delete",
      };
      const res = await authenticatedFetch(
        `${API_URLS.noteGroup}${route.params.id}/`,
        payload,
      );

      if (res.status === 204) {
        Toast.show({
          type: "success",
          text1: "Conjunto de anotações deletado com sucesso",
        });
        navigation.goBack();
      } else {
        const fInfo = await extractFailureInfo(res);

        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1: fInfo.message,
          });
        }
      }
    } catch {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
  };

  const openTile = ({ id, title, author }) => {
    navigation.navigate("Anotacao", { id, title, author });
  };

  const onRefresh = async () => {
    setRefreshing(true);

    await retrieveData();

    setRefreshing(false);
  };

  const canDelete = !route.params.root && data.length === 0;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      onRefresh();
    });
    return unsubscribe;
  }, [navigation]);

  const presentationalProps = {
    goBack: navigation.goBack,
    data,
    refreshing,
    onRefresh,
    openTile,
    createAnotacao,
    title: route.params.title,
    canDelete,
    deleteFolder,
  };

  return <ConjuntoAnotacoesPresentational {...presentationalProps} />;
}

export default ConjuntoAnotacoesContainer;
