import React, { useRef, useState } from "react";

import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";

import { Colors } from "../../../config";
import Header from "../../core/Header";
import { Images } from "../../../config";

import {
  AuthorText,
  TitleContainer,
  TitleText,
  Wrapper,
  AuthorPicture,
  ToolBarContainer,
  AuthorContainer,
  ContentWrapper,
  EditorContainer,
} from "./styles.js";
import ModalAvaliacao from "./ModalAvaliacao";

function AnotacaoPresentational({
  refreshing,
  onRefresh,
  goBack,
  title,
  author,
  openComentarios,
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
        onPress: () => setEdit(!edit),
      },
      {
        icon: "chatbubble-ellipses-outline",
        onPress: openComentarios,
      },
      {
        icon: "star-outline",
        onPress: () => {
          setModal(true);
        },
      },
    ],
  };

  const richText = useRef(); //referencia ao componente RichEditor
  const [article, setArticle] = useState("");
  const [edit, setEdit] = useState(false); //ativar ou desativar a edicao
  const [modal, setModal] = useState(false);

  const toolbarStyle = {
    display: edit ? "flex" : "none",
    width: "100%",
    backgroundColor: "transparent",
  };

  return (
    <>
      <Wrapper>
        <Header {...headerButtons} />
        <ContentWrapper>
          <NoteTitle author={author} title={title} />
          <EditorContainer>
            <RichEditor
              disabled={!edit}
              ref={richText}
              editorStyle={{
                backgroundColor: Colors.primaryLight,
              }}
              onChange={(text) => setArticle(text)}
            />
          </EditorContainer>
        </ContentWrapper>
        <ToolBarContainer>
          <RichToolbar
            editor={richText}
            disabled={false}
            iconTint={Colors.primaryDark}
            selectedIconTint={Colors.secondary}
            disabledIconTint={Colors.primaryDark}
            iconSize={24}
            style={toolbarStyle}
          />
        </ToolBarContainer>
        {modal ? <ModalAvaliacao /> : <></>}
      </Wrapper>
    </>
  );
}

const NoteTitle = ({ title, author }) => (
  <TitleContainer>
    <TitleText>{title}</TitleText>
    <AuthorContainer>
      <AuthorText>Por:</AuthorText>
      <AuthorPicture
        source={{
          uri: author.profile_picture,
        }}
        defaultSource={Images.defaultUser}
      />
      <AuthorText>{author.name}</AuthorText>
    </AuthorContainer>
  </TitleContainer>
);

export default AnotacaoPresentational;
