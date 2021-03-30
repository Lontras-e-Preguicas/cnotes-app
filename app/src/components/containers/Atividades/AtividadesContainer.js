import React, { useState, useEffect } from "react";

import AtividadesPresentational from "../../presentational/Atividades";

import Toast from "react-native-toast-message";
import {
  API_URLS,
  authenticatedFetch,
  extractFailureInfo,
} from "../../../utils/api";
import { formatDate } from "../../../utils/format";

function AtividadesContainer({ navigation }) {
  const [activitiesRaw, setActivitiesRaw] = useState([]);
  const [activities, setActivities] = useState([]);
  const [invites, setInvites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [invitesLoading, setInvitesLoading] = useState(false);

  const retrieveData = async () => {
    setLoading(true);
    try {
      const res = await authenticatedFetch(API_URLS.activities);

      if (res.status === 200) {
        const data = await res.json();
        setActivitiesRaw(data);

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
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
    setLoading(false);
  };

  const markAsSeen = async (id) => {
    try {
      const res = await authenticatedFetch(`${API_URLS.activities}${id}/see/`, {
        method: "post",
      });
      if (res.status !== 204) {
        const fInfo = await extractFailureInfo(res);

        Toast.show({
          type: "error",
          text1: fInfo.message,
        });
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
  };

  const seeAll = async () => {
    for (let a of activitiesRaw) {
      if (a.seen) {
        continue;
      }

      await markAsSeen(a.id);
    }
    await retrieveData();
  };

  const retrieveInvite = async () => {
    setInvitesLoading(true);
    try {
      const res = await authenticatedFetch(API_URLS.invite);

      if (res.status === 200) {
        const data = await res.json();
        setInvites(data);
      } else {
        const fInfo = await extractFailureInfo(res);

        Toast.show({
          type: "error",
          text1: fInfo.message,
        });
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
    setInvitesLoading(false);
  };

  const acceptInvite = async (id) => {
    setInvitesLoading(true);
    try {
      const res = await authenticatedFetch(`${API_URLS.invite}${id}/accept/`, {
        method: "post",
      });

      if (res.status === 204) {
        await retrieveInvite();
      } else {
        const fInfo = await extractFailureInfo(res);

        Toast.show({
          type: "error",
          text1: fInfo.message,
        });
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
    setInvitesLoading(false);
  };

  const denyInvite = async (id) => {
    setInvitesLoading(true);
    try {
      const res = await authenticatedFetch(`${API_URLS.invite}${id}/deny/`, {
        method: "post",
      });

      if (res.status === 204) {
        await retrieveInvite();
      } else {
        const fInfo = await extractFailureInfo(res);

        Toast.show({
          type: "error",
          text1: fInfo.message,
        });
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
    setInvitesLoading(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      retrieveData();
      retrieveInvite();
    });
    return unsubscribe;
  }, []);

  const presentationalProps = {
    activities,
    loading,
    onRefresh: retrieveData,
    retrieveInvite,
    invitesLoading,
    invites,
    acceptInvite,
    denyInvite,
    seeAll,
  };

  return <AtividadesPresentational {...presentationalProps} />;
}

export default AtividadesContainer;
