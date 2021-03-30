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
  const openComentarios = () => {
    navigation.navigate("Comentarios", {
      id: route.params.id,
    });
  };

//ratingValue => é um param que armazenena o valor da avaliacao
  const submitRating = async (ratingValue) => {
    try {
      const payload = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ratingValue,
          note_group: route.params.id,
        }),
      };
      const res = await authenticatedFetch(
        `${API_URLS.toEvaluate}${route.params.id}/rating/`,
        payload,
      );

      if (res.status === 204) {
        Toast.show({
          type: "success",
          text1: "Anotação avaliada com sucesso",
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
//console.log(ratingValue);
  };

  const presentationalProps = {
    goBack: navigation.goBack,
    title: route.params.title,
    author: route.params.author,
    openComentarios,
    submitRating,
  };

  return <AnotacaoPresentational {...presentationalProps} />;
}

export default AnotacaoContainer;
