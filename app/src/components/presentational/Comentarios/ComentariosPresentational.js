import React, { useRef, useState } from "react";
import styled from "styled-components/native";

import {
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import  {  WebView  }  from 'react-native-webview' ;

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../config";
import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";
import { formatTitle } from "../../../utils/format";
import { Images } from "../../../config";

import {
  AutorAnotacao,
  ContainerTitleAnotacao,
  ContainerAutorAnotacao,
  Title,
  TitleAnotacao,
  Wrapper,
  AuthorPicture,
  ToolBarContainer,
  AuthorContainer
} from "./styles.js";

function ComentariosPresentational({
  notebooks,
  refreshing,
  onRefresh,
  goBack,
  title,
  author,
  openComentarios
     }) {

  const headerButtons = {
    leftButtons: [
      {
        icon: "chevron-back",
        label: "Voltar",
        onPress: goBack,
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

export default ComentariosPresentational;
