import React from "react";

import { StatusBar } from "expo-status-bar";

import PerfilContainer from "../components/containers/Perfil";

const ProfileScreen = (props) => (
  <>
    <StatusBar style="dark" />
    <PerfilContainer />
  </>
);

export { ProfileScreen };

export default ProfileScreen;
