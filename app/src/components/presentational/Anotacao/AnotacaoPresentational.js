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
import ModalAvaliacao from "./ModalAvaliacao";

function AnotacaoPresentational({
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
    rightButtons: [
      {
        icon: "pencil",
        onPress: ()=>setEdit(!edit),
      },
      {
        icon: "chatbubble-ellipses-outline",
        onPress: openComentarios,
      },
      {
        icon: "star-outline",
        onPress: ()=> {setModal(true)},
      },
    ],
  };

  const RichText = useRef(); //referencia ao componente RichEditor
  const [article, setArticle] = useState("");
  const [edit, setEdit] = useState(true); //ativar ou desativar a edicao
  const [modal, setModal] = useState(false);

  return (
    <>
      <Wrapper>
        <Header {...headerButtons} />
        <ContainerTitleAnotacao>
          <TitleAnotacao >{title}</TitleAnotacao>
          <AuthorContainer>
            <AutorAnotacao>Por: </AutorAnotacao>
            <AuthorPicture
              source={{
                uri: author.profile_picture,
              }}
              defaultSource={Images.defaultUser}
            />
            <AutorAnotacao>{author.name}</AutorAnotacao>
          </AuthorContainer>
        </ContainerTitleAnotacao>

        <ToolBarContainer>
          <RichToolbar
            editor={RichText}
            disabled={false}
            style={edit? {display: "none"} : {display:"flex"}}
            iconTint={Colors.primaryDark}
            selectedIconTint={Colors.secondary}
            disabledIconTint={Colors.primaryDark}
            iconSize={30}
          />
        </ToolBarContainer>

        <RichEditor
            disabled={edit}
            ref={RichText}
            containerStyle= {{backgroundColor:Colors.primaryLight, borderColor:Colors.primaryLight}}
            //placeholder={"Conteudo..."}
            onChange={(text) => setArticle(text)}
          />
          {modal ? <ModalAvaliacao/> : <></>}
      </Wrapper>
    </>
  );
}

export default AnotacaoPresentational;
