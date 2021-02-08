import React from "react";

import { StatusBar } from "expo-status-bar";

import PerfilContainer from "../components/container/Perfil";

const ProfileScreen = (props) => (
  <>
    <StatusBar style="light" />
    <PerfilContainer/>
  </>
);

export { ProfileScreen };

export default  ProfileScreen ;
