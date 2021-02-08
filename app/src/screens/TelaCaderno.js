import React from "react";

import { StatusBar } from "expo-status-bar";

import TelaCaderno from "../components/presentational/Caderno/TelaCaderno";

const TelaDoCaderno = (props) => (
  <>
    <StatusBar style="light" />
    <TelaCaderno NomeCaderno="Caderno teste" NomeDivisao="Testee"/>
  </>
);

export { TelaDoCaderno };

export default TelaDoCaderno;
