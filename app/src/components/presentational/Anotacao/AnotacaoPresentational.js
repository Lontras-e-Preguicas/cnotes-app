import React, { useRef, useState } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
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
  EditorScroll,
  ScrollWrapper,
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
  const insets = useSafeAreaInsets();

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
      <Wrapper insets={insets}>
        <Header {...headerButtons} />
        <ContentWrapper>
          <NoteTitle author={author} title={title} />
          <ScrollWrapper>
            <EditorScroll>
              <EditorContainer>
                <RichEditor
                  disabled={!edit}
                  ref={richText}
                  useContainer
                  editorStyle={{
                    backgroundColor: Colors.secondary,
                  }}
                  onChange={(text) => setArticle(text)}
                />
              </EditorContainer>
            </EditorScroll>
          </ScrollWrapper>
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
