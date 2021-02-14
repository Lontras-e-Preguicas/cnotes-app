import React from "react";

import { StatusBar } from "expo-status-bar";

import HomePresentational from "../components/presentational/Home/HomePresentational";

const HomeScreen = (props) => (
  <>
    <StatusBar style="light" />
    <HomePresentational
      TituloCaderno="Meus Cadernos"
      NomeCaderno="Testeeando"
    />
  </>
);

export { HomeScreen };

export default HomeScreen;
