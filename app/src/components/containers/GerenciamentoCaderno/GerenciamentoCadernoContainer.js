import React, { useState, useEffect } from "react";

import GerenciamentoCadernoPresentational from "../../presentational/GerenciamentoCaderno";
import {
  API_URLS,
  authenticatedFetch,
  extractFailureInfo,
} from "../../../utils/api";

import Toast from "react-native-toast-message";

function GerenciamentoCadernoContainer({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(route.params.title);

  const retrieveData = async () => {
    setLoading(true);

    try {
      const res = await authenticatedFetch(
        `${API_URLS.notebook}${route.params.notebookId}/members/`,
      );

      if (res.status === 200) {
        const newData = await res.json();
        setData(newData);
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

  useEffect(() => {
    retrieveData();
  }, []);

  const genericRequestHandling = async (
    url,
    payload,
    {
      fields = [],
      fieldDescription = [],
      expectedStatus = 200,
      successMessage = "Sucesso!",
    },
  ) => {
    try {
      const res = await authenticatedFetch(url, payload);

      if (res.status === expectedStatus) {
        Toast.show({
          type: "success",
          text1: successMessage,
        });

        if (res.status !== 204) {
          return await res.json();
        }
        return {};
      }

      const fInfo = await extractFailureInfo(res);

      if (fInfo.fail) {
        Toast.show({
          type: "error",
          text1: fields.reduce(
            (p, v, i) =>
              (fInfo.fields[v] &&
                `${fieldDescription[i]}: ${fInfo.fields[v]}`) ||
              p,
            fInfo.message,
          ),
        });
      }
    } catch {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }

    return null;
  };

  const removeMember = async (id) => {
    const payload = {
      method: "post",
    };
    await genericRequestHandling(
      `${API_URLS.member}${id}/kick_member/`,
      payload,
      {
        expectedStatus: 204,
        successMessage: "Membro removido com sucesso",
      },
    );

    await retrieveData();
  };
  const changeTitle = async (newTitle) => {
    const payload = {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
      }),
    };
    const res = await genericRequestHandling(
      `${API_URLS.notebook}${route.params.notebookId}/`,
      payload,
      {
        expectedStatus: 200,
        successMessage: "Caderno renomeado com sucesso",
      },
    );
    if (res != null) {
      setTitle(newTitle);
    }
  };
  const addMember = async (email) => {
    const payload = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender_notebook: route.params.notebookId,
        receiver_email: email,
      }),
    };

    await genericRequestHandling(API_URLS.invite, payload, {
      fields: ["receiver_email"],
      fieldDescription: ["E-mail"],
      expectedStatus: 201,
      successMessage: "Convite enviado com sucesso",
    });
  };
  const deleteNotebook = async () => {
    const payload = {
      method: "delete",
    };
    const res = await genericRequestHandling(
      `${API_URLS.notebook}${route.params.notebookId}/`,
      payload,
      {
        expectedStatus: 204,
        successMessage: "Caderno deletado com sucesso",
      },
    );

    if (res !== null) {
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeTabs" }],
      });
    }
  };
  const leaveNotebook = async () => {
    const payload = {
      method: "post",
    };
    const res = await genericRequestHandling(
      `${API_URLS.member}${route.params.membership.id}/leave_notebook/`,
      payload,
      {
        successMessage: "Você saiu do caderno com sucesso",
      },
    );

    if (res !== null) {
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeTabs" }],
      });
    }
  };
  const banMember = async (id) => {
    const payload = {
      method: "post",
    };
    const res = await genericRequestHandling(
      `${API_URLS.member}${id}/ban_member/`,
      payload,
      {
        successMessage: "Membro banido com sucesso",
      },
    );
    if (res !== null) {
      await retrieveData();
    }
  };
  const unBanMember = async (id) => {
    const payload = {
      method: "post",
    };
    const res = await genericRequestHandling(
      `${API_URLS.member}${id}/unban_member/`,
      payload,
      {
        successMessage: "Membro desbanido com sucesso",
      },
    );
    if (res !== null) {
      await retrieveData();
    }
  };
  const changeRole = async (id, newRole) => {
    const payload = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: newRole,
      }),
    };
    const res = await genericRequestHandling(
      `${API_URLS.member}${id}/change_role/`,
      payload,
      {
        successMessage: "Cargo alterado com sucesso",
      },
    );
    if (res !== null) {
      await retrieveData();
    }
  };

  const presentationalProps = {
    id: route.params.id,
    folder: route.params.folder,
    title: title,
    goBack: navigation.goBack,
    data: data,
    membership: route.params.membership,
    removeMember,
    addMember,
    changeTitle,
    deleteNotebook,
    leaveNotebook,
    banMember,
    unBanMember,
    changeRole,
    refreshing: loading,
    doRefresh: retrieveData,
  };

  return <GerenciamentoCadernoPresentational {...presentationalProps} />;
}

export default GerenciamentoCadernoContainer;
