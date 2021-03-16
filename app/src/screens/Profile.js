import React from "react";

import PerfilContainer from "../components/containers/Perfil";
import { MainStatusBar } from "./styles";

const ProfileScreen = (props) => (
  <>
    <MainStatusBar />
    <PerfilContainer />
  </>
);

export { ProfileScreen };

export default ProfileScreen;
