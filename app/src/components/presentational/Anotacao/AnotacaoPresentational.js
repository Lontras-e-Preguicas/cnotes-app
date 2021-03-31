import React, { useRef, useState } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";

import { Colors, Images } from "../../../config";
import Header from "../../core/Header";

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
  RatingWrapper,
  StarIcon,
} from "./styles.js";
import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
} from "../../core/Modal";
import DefaultTouchable from "../../core/DefaultTouchable";

function AnotacaoPresentational({
  goBack,
  title,
  author,
  openComentarios,
  submitRating,
  rating,
  setRating,
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
          setModalVisible(true);
        },
      },
    ],
  };

  const richText = useRef(); //referencia ao componente RichEditor
  const [article, setArticle] = useState("");
  const [edit, setEdit] = useState(false); //ativar ou desativar a edicao
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

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
          <NoteTitle
            editable={edit}
            author={author}
            title={currentTitle}
            setTitle={setCurrentTitle}
            submitTitle={setCurrentTitle}
          />
          <ScrollWrapper>
            <EditorScroll>
              <EditorContainer>
                <RichEditor
                  disabled={!edit}
                  ref={richText}
                  placeholder="Sem conteúdo por enquanto..."
                  useContainer
                  editorStyle={{
                    backgroundColor: Colors.primaryLight,
                  }}
                  initialContentHTML={article}
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
        <RatingModal
          submitRating={submitRating}
          modalVisible={modalVisible}
          close={() => setModalVisible(false)}
          value={rating}
          setValue={setRating}
        />
      </Wrapper>
    </>
  );
}

const NoteTitle = ({ title, setTitle, submitTitle, author, editable }) => (
  <TitleContainer>
    <TitleText
      editable={editable}
      multiline
      value={title}
      onChangeText={(v) => setTitle(v)}
      onBlur={() => submitTitle(title)}
    />
    <AuthorContainer>
      <AuthorText>Por:</AuthorText>
      <AuthorPicture
        source={
          (author.profile_picture && {
            uri: author.profile_picture,
          }) ||
          undefined
        }
        defaultSource={Images.defaultUser}
      />
      <AuthorText>{author.name}</AuthorText>
    </AuthorContainer>
  </TitleContainer>
);

const RatingModal = ({
  modalVisible,
  close,
  value,
  setValue,
  submitRating,
}) => {
  const ratingStars = [];

  for (let i = 1; i <= 5; i++) {
    ratingStars.push(
      <DefaultTouchable key={i.toString()} onPressIn={() => setValue(i)}>
        <StarIcon fill={value >= i} />
      </DefaultTouchable>,
    );
  }

  return (
    <Modal visible={modalVisible} close={close} title="Avaliar Anotação">
      <RatingWrapper>{ratingStars}</RatingWrapper>
      <ModalButtonRow>
        <CancelModalButton
          onPress={() => {
            submitRating(null);
            close();
          }}
        >
          Cancelar
        </CancelModalButton>
        <ConfirmModalButtom
          onPress={() => {
            submitRating(value);
            close();
          }}
        >
          Avaliar
        </ConfirmModalButtom>
      </ModalButtonRow>
    </Modal>
  );
};

export default AnotacaoPresentational;
