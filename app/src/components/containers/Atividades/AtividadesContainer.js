import React, { useState, useEffect } from "react";

import AtividadesPresentational from "../../presentational/Atividades";

import Toast from "react-native-toast-message";
import {
  API_URLS,
  authenticatedFetch,
  extractFailureInfo,
} from "../../../utils/api";
import { formatDate } from "../../../utils/format";

function AtividadesContainer(props) {
  const submitDeletion = (Newnotificacoes) => {
    setNotificacoes(Newnotificacoes);
  };
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  const retrieveData = async () => {
    setLoading(true);
    try {
      const res = await authenticatedFetch(API_URLS.activities);

      if (res.status === 200) {
        const data = await res.json();

        const newActivities = {};

        for (let d of data) {
          const date = new Date(d.creation_date);
          if (newActivities[date]) {
            newActivities[date].push(d);
          } else {
            newActivities[date] = [d];
          }
        }

        const keys = Object.keys(newActivities);
        keys.sort((a, b) => -(new Date(a) - new Date(b)));

        const mappedActivities = keys.map((k) => ({
          title: formatDate(k),
          data: newActivities[k],
        }));

        setActivities(mappedActivities);
      } else {
        const fInfo = await extractFailureInfo(res);

        Toast.show({
          type: "error",
          text1: fInfo.message,
        });
      }
    } catch (err) {
      console.warn(err);
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const presentationalProps = {
    activities,
    loading,
    onRefresh: retrieveData,
  };

  return <AtividadesPresentational {...presentationalProps} />;
}

export default AtividadesContainer;
