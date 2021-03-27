import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  API_URLS,
  authenticatedFetchWithRedirect,
  logout,
} from "../../../utils/api";

import PerfilPresentational from "../../presentational/Perfil";
import Toast from "react-native-toast-message";

function PerfilContainer(props) {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const retrieveData = async () => {
    setLoading(true);

    try {
      const res = await authenticatedFetchWithRedirect(navigation, API_URLS.me);

      if (res.status === 200) {
        const data = await res.json();
        setUserData(data);
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

    setLoading(false);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const onEdit = () => {};
  const onChangePassword = () => {};
  const onLogout = async () => {
    await logout();
    navigation.reset({
      index: 0,
      routes: [{ name: "AuthStack" }],
    });
  };

  const presentationalProps = {
    loading,
    userData,
    onEdit,
    onChangePassword,
    onLogout,
  };

  return <PerfilPresentational {...presentationalProps} />;
}

export default PerfilContainer;
