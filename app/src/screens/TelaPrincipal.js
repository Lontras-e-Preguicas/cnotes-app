import React from "react";

import { StatusBar } from "expo-status-bar";

import TelaPrincipal from "../components/presentational/Principal/PrincipalPresentational";

const HomeScreen = (props) => (
  <>
    <StatusBar style="light" />
    <TelaPrincipal TituloCaderno="Meus Cadernos" NomeCaderno="Testeeando"/>
  </>
);

export { HomeScreen };

export default HomeScreen;
