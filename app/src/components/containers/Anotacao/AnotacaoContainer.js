import React, { useState, useEffect, useCallback, useRef } from "react";

import AnotacaoPresentational from "../../presentational/Anotacao";
import Toast from "react-native-toast-message";
import {
  API_URLS,
  authenticatedFetch,
  extractFailureInfo,
} from "../../../utils/api";

const AUTO_SAVE_INTERVAL = 5000;
const AUTO_SAVE_BUFFER = 500;
const BEING_EDITED_TL = 10000;

/*
  Auto-save não optimizado para mínimo consumo de dados, caminho possível:
    - Ref indicando se houve mudança
    - Só enviar informações se houver mudança
    - Atualizar a ref por comparação, se ela for falsa

    - Auto-save durante edição com intervalo maior
    - Auto-save por inatividade menor (0.5s~2s)
      - Importante: tomar cuidado com o impacto para usuários com digitação lenta
*/

/*
  TO-DO:
    - Auto reload while being edited
*/

function AnotacaoContainer({ navigation, route }) {
  const [noteInfo, setNoteInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [edit, setEdit] = useState(false);

  const wasEditing = useRef(false);
  const timeoutRef = useRef();
  const lastSaveRef = useRef(Date.now());

  const openComentarios = () => {
    navigation.navigate("Comentarios", {
      id: route.params.id,
    });
  };

  const retrieveNoteInfo = async () => {
    setLoading(true);
    try {
      const res = await authenticatedFetch(
        `${API_URLS.note}${route.params.id}/`,
      );

      if (res.status === 200) {
        const data = await res.json();
        setNoteInfo(data);
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
        `${API_URLS.note}${route.params.id}/rating/`,
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
        `${API_URLS.note}${route.params.id}/rating/`,
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

  const saveContent = async () => {
    clearTimeout(timeoutRef.current);
    try {
      const payload = {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: noteInfo.content,
        }),
      };

      const res = await authenticatedFetch(
        `${API_URLS.note}${route.params.id}/`,
        payload,
      );

      if (res.status === 200) {
        const data = await res.json();
        setNoteInfo(data);
      } else {
        const fInfo = await extractFailureInfo(res);

        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1: "Falha ao salvar anotação!",
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

  const changeTitle = async (title) => {
    try {
      const payload = {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      };

      const res = await authenticatedFetch(
        `${API_URLS.note}${route.params.id}/`,
        payload,
      );

      if (res.status === 200) {
        const data = await res.json();
        setNoteInfo(data);
        return data;
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
  };

  const deleteNote = async () => {
    try {
      const payload = {
        method: "delete",
      };

      const res = await authenticatedFetch(
        `${API_URLS.note}${route.params.id}/`,
        payload,
      );

      if (res.status === 204) {
        Toast.show({
          type: "success",
          text1: "Anotação deletada com sucesso!",
        });
        wasEditing.current = false; // Bypass back auto-save
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

  // Retrieve data
  useEffect(() => {
    retrieveNoteInfo();
    retrieveRating();
  }, []);

  // Save on exit
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (wasEditing.current) {
          saveContent();
        }
      }),
    [navigation, saveContent],
  );

  // Auto-save on time
  useEffect(() => {
    if (edit) {
      // First edit setup
      if (!wasEditing.current) {
        lastSaveRef.current = Date.now();
        wasEditing.current = true;
      }

      // Time delta
      const delta = Date.now() - lastSaveRef.current;

      // If enough time has passed, auto-save and reset timer
      if (delta >= AUTO_SAVE_INTERVAL) {
        lastSaveRef.current = Date.now();
        saveContent();
      }

      // Reset timeout event for a new one with updated data
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        lastSaveRef.current = Date.now();
        saveContent();
      }, AUTO_SAVE_INTERVAL - delta + AUTO_SAVE_BUFFER); // Time buffer to prevent collisions between timer and timeout

      return;
    }

    if (wasEditing.current) {
      wasEditing.current = false;
      saveContent();
    }
  }, [edit, saveContent]);

  const canEdit =
    route.params.membership.role !== "member" ||
    route.params.author.id === route.params.membership.id;

  const beingEdited =
    route.params.author.id !== route.params.membership.id &&
    !loading &&
    new Date() - new Date(noteInfo.last_edited) <= BEING_EDITED_TL;

  const presentationalProps = {
    goBack: navigation.goBack,
    title: route.params.title,
    author: route.params.author,
    openComentarios,
    submitRating,
    rating,
    setRating,
    noteInfo,
    setNoteInfo,
    saveContent,
    changeTitle,
    loading,
    edit,
    setEdit,
    wasEditing,
    canEdit,
    beingEdited,
    deleteNote,
  };

  return <AnotacaoPresentational {...presentationalProps} />;
}

export default AnotacaoContainer;
