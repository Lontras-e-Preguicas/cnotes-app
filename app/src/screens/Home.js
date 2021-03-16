import React from "react";

import HomeContainer from "../components/containers/Home";
import { MainStatusBar } from "./styles";

const HomeScreen = (props) => (
  <>
    <MainStatusBar />
    <HomeContainer />
  </>
);

export { HomeScreen };

export default HomeScreen;
