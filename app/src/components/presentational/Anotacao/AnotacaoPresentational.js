import React from "react";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../../config";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  Wrapper,  
} from "./styles.js";


function AnotacaoPresentational({ notebooks, refreshing, onRefresh, openCaderno }) {

  const headerButtons = [
    {
      icon: "pencil",
    },
    {
      icon: "star-outline",
    },
    {
      icon: "chatbubble-ellipses-outline",
    },
  ];

  return (
    <>
      <Wrapper>
        <Header rightButtons={headerButtons} />

      </Wrapper>
    </>
  );
}

export default AnotacaoPresentational;
