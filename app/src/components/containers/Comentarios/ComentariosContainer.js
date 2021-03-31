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

  const retrieveData = async () => {
    setRefreshing(true);
    try {
      const res = await authenticatedFetch(
        `${API_URLS.note}${route.params.id}/comments/`,
      );

      if (res.status === 200) {
        const data = await res.json();
        setData(data);
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

  const doComment = async (message) => {
    try {
      const payload = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          note: route.params.id,
          message,
        }),
      };
      const res = await authenticatedFetch(API_URLS.comments, payload);

      if (res.status === 201) {
        Toast.show({
          type: "success",
          text1: "Comentário realizado com sucesso!",
        });
        await retrieveData();
      } else {
        const fInfo = await extractFailureInfo(res);
        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1:
              (fInfo.fields.message && `Mensagem: ${fInfo.fields.message}`) ||
              fInfo.message,
          });
        }
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const presentationalProps = {
    goBack: navigation.goBack,
    data,
    refreshing,
    retrieveData,
    doComment,
  };

  return <ComentariosPresentational {...presentationalProps} />;
}

export default ComentariosContainer;
