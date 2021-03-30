import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import HomePresentational from "../../presentational/Home";

import {
  API_URLS,
  authenticatedFetchWithRedirect,
  extractFailureInfo,
} from "../../../utils/api";

import Toast from "react-native-toast-message";
import { Alert } from "react-native";

function HomeContainer(props) {
  const navigation = useNavigation();

  const [notebooks, setNotebooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const retrieveNotebooks = async () => {
    try {
      const res = await authenticatedFetchWithRedirect(
        navigation,
        API_URLS.notebook,
      );

      if (res.status !== 200) {
        const fInfo = await extractFailureInfo(res);
        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1: fInfo.message,
          });
        }
        return;
      }

      const data = await res.json();
      setNotebooks(data);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao recuperar cadernos",
      });
    }
  };

  const createNotebook = async (title) => {
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

      const res = await authenticatedFetchWithRedirect(
        navigation,
        API_URLS.notebook,
        payload,
      );

      if (res.status !== 201) {
        const fInfo = await extractFailureInfo(res);

        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1: fInfo.fields.title ? "Título inválido" : fInfo.message,
          });
        }
        return;
      }

      Toast.show({
        type: "success",
        text1: "Caderno criado com sucesso",
      });

      await onRefresh();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao criar caderno",
      });
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);

    await retrieveNotebooks();

    setRefreshing(false);
  };

  const openCaderno = ({ id, title, root_folder, membership }) => {
    navigation.navigate("CadernoStack", {
      screen: "Caderno",
      params: {
        notebookId: id,
        title,
        folderId: root_folder,
        path: "/Raiz",
        root: true,
        membership,
      },
    });
  };

  useEffect(() => {
    onRefresh();
  }, []);

  const presentationalProps = {
    notebooks,
    refreshing,
    onRefresh,
    openCaderno,
    createNotebook,
  };

  return <HomePresentational {...presentationalProps} />;
}

export default HomeContainer;
