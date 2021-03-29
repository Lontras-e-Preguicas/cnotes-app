import React, { useState, useEffect } from "react";

import CadernoPresentational from "../../presentational/Caderno";
import { pathJoin } from "../../../utils/format";

import Toast from "react-native-toast-message";
import {
  API_URLS,
  authenticatedFetch,
  extractFailureInfo,
} from "../../../utils/api";

function CadernoContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const retrieveData = async () => {
    setLoading(true);

    try {
      const res = await authenticatedFetch(
        `${API_URLS.folder}${route.params.folderId}/`,
      );

      if (res.status === 200) {
        const data = await res.json();

        setData([
          ...data.sub_folders.map((e) => ({ ...e, folder: true })),
          ...data.note_groups.map((e) => ({ ...e, folder: false })),
        ]);
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

    setLoading(false);
  };

  const createFolder = async (title) => {
    try {
      const payload = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          parent_folder: route.params.folderId,
        }),
      };
      const res = await authenticatedFetch(API_URLS.folder, payload);

      if (res.status === 201) {
        Toast.show({
          type: "success",
          text1: "Pasta criada com sucesso",
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

  const createConj = async (title) => {
    try {
      const payload = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          parent_folder: route.params.folderId,
        }),
      };
      const res = await authenticatedFetch(API_URLS.noteGroup, payload);

      if (res.status === 201) {
        Toast.show({
          type: "success",
          text1: "Conjunto de anotações criado com sucesso",
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
        `${API_URLS.folder}${route.params.folderId}/`,
        payload,
      );

      if (res.status === 204) {
        Toast.show({
          type: "success",
          text1: "Pasta deletada com sucesso",
        });
        navigation.goBack();
        await route.params.doRefresh();
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

  const openTile = ({ folder, id, title }) => {
    if (folder) {
      navigation.push("Caderno", {
        ...route.params,
        root: false,
        folderId: id,
        title,
        path: pathJoin(route.params.path, title),
        doRefresh: async () => retrieveData(),
      });
      return;
    }
    navigation.push("Conjunto", {
      ...route.params,
      root: false,
      id: id,
      title,
      doRefresh: async () => retrieveData(),
    });
  };

  const canDelete = !route.params.root && data.length === 0;

  useEffect(() => {
    retrieveData();
  }, []);

  const presentationalProps = {
    goBack: navigation.goBack,
    openTile,
    data,
    loading,
    retrieveData,
    title: route.params.title,
    path: route.params.path,
    createFolder,
    createConj,
    canDelete,
    deleteFolder,
  };

  return <CadernoPresentational {...presentationalProps} />;
}

export default CadernoContainer;
