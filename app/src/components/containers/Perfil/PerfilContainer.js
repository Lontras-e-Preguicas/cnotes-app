import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  API_URLS,
  authenticatedFetch,
  authenticatedFetchWithRedirect,
  extractFailureInfo,
  logout,
} from "../../../utils/api";

import PerfilPresentational from "../../presentational/Perfil";
import Toast from "react-native-toast-message";

function PerfilContainer(props) {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [edit, setEdit] = useState(false);

  const retrieveData = async () => {
    try {
      const res = await authenticatedFetchWithRedirect(navigation, API_URLS.me);

      if (res.status === 200) {
        const data = await res.json();
        setUserData(data);
        return data;
      } else {
        Toast.show({
          type: "error",
          text1: "Um erro ocorreu ao recuperar os dados",
        });
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao realizar requisição",
      });
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      setLoading(true);
      const data = await retrieveData();
      setName(data.name);
      setBio(data.bio);
      setLoading(false);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setEdit(false);
    });
    return unsubscribe;
  }, [navigation]);

  const onEdit = () => {
    setEdit(!edit);
  };

  const onChangePassword = () => {};
  const onLogout = async () => {
    await logout();
    navigation.reset({
      index: 0,
      routes: [{ name: "AuthStack" }],
    });
  };

  const doUpdate = async () => {
    try {
      const payload = {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          bio,
        }),
      };

      const res = await authenticatedFetch(API_URLS.me, payload);

      if (res.status === 200) {
        const data = await res.json();
        setUserData(data);
        setName(data.name);
        setBio(data.bio);
        return data;
      } else {
        setName(userData.name);
        setBio(userData.bio);
        const fInfo = await extractFailureInfo(res);

        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1:
              (fInfo.fields.name && `Nome: ${fInfo.fields.name}`) ||
              (fInfo.fields.bio && `Bio: ${fInfo.fields.bio}`) ||
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

  const doChangePassword = async (newPassword) => {
    try {
      const payload = {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      };

      const res = await authenticatedFetch(API_URLS.me, payload);

      if (res.status === 200) {
        const data = await res.json();
        Toast.show({
          type: "success",
          text1: "Senha alterada com sucesso!",
        });
        setUserData(data);
        return data;
      } else {
        const fInfo = await extractFailureInfo(res);

        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1:
              (fInfo.fields.password && `Senha: ${fInfo.fields.senha}`) ||
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

  const doChangeProfilePicture = async (uri) => {
    try {
      const payload = {
        method: "patch",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: new FormData(),
      };

      const ext = /^.*\.(.+)$/g.exec(uri)[1];

      payload.body.append("profile_picture", {
        uri,
        type: `image/${ext}`,
        name: `upload.${ext}`,
      });

      const res = await authenticatedFetch(API_URLS.me, payload);

      if (res.status === 200) {
        Toast.show({
          type: "success",
          text1: "Imagem de perfil atualizada com sucesso",
        });

        const data = await res.json();
        setUserData(data);
        return data;
      } else {
        const fInfo = await extractFailureInfo(res);

        if (fInfo.fail) {
          Toast.show({
            type: "error",
            text1:
              (fInfo.fields.profile_picture &&
                `Imagem: ${fInfo.fields.profile_picture}`) ||
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

  const presentationalProps = {
    loading,
    userData,
    onEdit,
    onLogout,
    name,
    setName,
    bio,
    setBio,
    edit,
    doUpdate,
    doChangeProfilePicture,
    doChangePassword,
  };

  return <PerfilPresentational {...presentationalProps} />;
}

export default PerfilContainer;
