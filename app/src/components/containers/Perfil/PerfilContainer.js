import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Api from "../../../utils/api";

import PerfilPresentational from "../../presentational/Perfil";

function PerfilContainer(props) {
  const navigation = useNavigation();
  /*
  {
    "id": "5ff7a70f-0951-46aa-bf0f-4d8775000d64",
    "email": "eddy@pereira.silva",
    "name": "Ednaldo Pereira",
    "bio": null,
    "profile_picture": null
  }
  */

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const retrieveData = async () => {
    setLoading(true);

    const api = new Api();

    try {
      const data = await api.me();
      setUserData(data);
    } catch {
      // Handle error
    }

    setLoading(false);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const onEdit = () => {};
  const onChangePassword = () => {};
  const onLogout = async () => {
    const api = new Api();
    await api.logout();
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
