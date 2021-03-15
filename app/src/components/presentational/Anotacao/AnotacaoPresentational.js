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
import {
  AutorAnotacao,
  ContainerTitleAnotacao,
  ContainerAutorAnotacao,
  Title,
  TitleAnotacao,
  Wrapper
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

  const RichText = useRef(); //referencia ao componente RichEditor
  const [article, setArticle] = useState("");

  return (
    <>
      <Wrapper>
        <Header {...headerButtons} />
        <ContainerTitleAnotacao>
          <TitleAnotacao>Aplicações do Eletromagnetismo</TitleAnotacao>
          <ContainerAutorAnotacao>
            <AutorAnotacao>Por: Ednaldo Pereira</AutorAnotacao>
          </ContainerAutorAnotacao>
        </ContainerTitleAnotacao>

        <RichEditor
            disabled={false}
            ref={RichText}
            containerStyle= {{backgroundColor:"black", borderColor:"black"}}
            //placeholder={"Conteudo..."}
            onChange={(text) => setArticle(text)}
          />

          <RichToolbar
            editor={RichText}
            disabled={false}
            iconTint={"${Colors.primaryLight}"}
            selectedIconTint={"${Colors.secondary}"}
            disabledIconTint={"${Colors.primaryLight}"}
            iconSize={30}
          />
      </Wrapper>
    </>
  );
}

export default AnotacaoPresentational;
