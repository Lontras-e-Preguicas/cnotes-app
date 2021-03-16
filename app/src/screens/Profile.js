import React from "react";

import { MainStatusBar } from "./styles";
import PerfilContainer from "../components/containers/Perfil";

const ProfileScreen = (props) => (
  <>
    <MainStatusBar />
    <PerfilContainer />
  </>
);

export { ProfileScreen };

export default ProfileScreen;
