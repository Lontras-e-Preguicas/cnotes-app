import React from "react";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../../config";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  Wrapper,
} from "./styles.js";


function AnotacaoPresentational({ notebooks, refreshing, onRefresh, openCaderno, goBack }) {

  const headerButtons = {
    leftButtons: [
      {
        icon: "chevron-back",
        label: "Voltar",
        onPress: goBack,
      },
    ],
    rightButtons: [
      {
        icon: "pencil",
      },
      {
        icon: "chatbubble-ellipses-outline",
      },
      {
        icon: "star-outline",
      },
    ],
  };

  return (
    <>
      <Wrapper>
        <Header {...headerButtons} />

      </Wrapper>
    </>
  );
}

export default AnotacaoPresentational;
