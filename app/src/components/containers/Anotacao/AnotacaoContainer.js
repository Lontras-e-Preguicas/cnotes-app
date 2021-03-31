import React, { useState, useEffect } from "react";

import AnotacaoPresentational from "../../presentational/Anotacao";
import { pathJoin } from "../../../utils/format";
import Toast from "react-native-toast-message";
import {
  API_URLS,
  authenticatedFetch,
  extractFailureInfo,
} from "../../../utils/api";

function AnotacaoContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const openComentarios = () => {
    navigation.navigate("Comentarios", {
      id: route.params.id,
    });
  };

  const submitRating = async () => {
    try {
      const payload = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
        }),
      };
      const res = await authenticatedFetch(
        `${API_URLS.toEvaluate}${route.params.id}/rating/`,
        payload,
      );

      if (res.status === 200) {
        Toast.show({
          type: "success",
          text1: "Anotação avaliada com sucesso",
        });
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

  const retrieveRating = async () => {
    try {
      const res = await authenticatedFetch(
        `${API_URLS.toEvaluate}${route.params.id}/rating/`,
      );

      if (res.status === 200) {
        const data = await res.json();
        setRating(data.rating);
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

  useEffect(() => {
    retrieveRating();
  }, []);

  const presentationalProps = {
    goBack: navigation.goBack,
    title: route.params.title,
    author: route.params.author,
    openComentarios,
    submitRating,
    rating,
    setRating,
  };

  return <AnotacaoPresentational {...presentationalProps} />;
}

export default AnotacaoContainer;
