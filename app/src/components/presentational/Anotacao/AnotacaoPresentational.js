import React, { useRef, useState, useEffect } from "react";

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
  LoadingIndicator,
  LoadingText,
  BeingEditedWrapper,
  BeingEditedText,
} from "./styles.js";
import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
} from "../../core/Modal";
import DefaultTouchable from "../../core/DefaultTouchable";
import { Alert } from "react-native";

function AnotacaoPresentational({
  goBack,
  title,
  author,
  openComentarios,
  submitRating,
  rating,
  setRating,
  noteInfo,
  setNoteInfo,
  changeTitle,
  loading,
  edit,
  setEdit,
  canEdit,
  beingEdited,
  deleteNote,
}) {
  const insets = useSafeAreaInsets();

  const richText = useRef(); //referencia ao componente RichEditor
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

  const setContent = (newContent) => {
    setNoteInfo({ ...noteInfo, content: newContent });
  };

  const submitTitle = async () => {
    const goneRight = (await changeTitle(currentTitle)) || {};
    setCurrentTitle(goneRight.title || noteInfo.title);
  };

  useEffect(() => {
    if (!edit && richText.current?.setContentHTML) {
      richText.current?.setContentHTML(noteInfo.content);
    }
  }, [noteInfo]);

  const headerButtons = {
    leftButtons: [
      {
        icon: "chevron-back",
        label: "Voltar",
        onPress: goBack,
      },
    ],
    rightButtons: [],
  };

  const doDelete = () => {
    Alert.alert(
      "Tem certeza que deseja DELETAR a anotação?",
      "Essa ação é irreversível!",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: () => {
            Alert.alert(
              "Deseja mesmo continuar?",
              "Todo o conteúdo da anotação será perdido!",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "Deletar",
                  onPress: () => deleteNote(),
                  style: "destructive",
                },
              ],
              {
                cancelable: true,
              },
            );
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  if (canEdit) {
    headerButtons.rightButtons.push({
      icon: "pencil",
      onPress: () => setEdit(!edit),
    });
    if (edit) {
      headerButtons.rightButtons.push({
        icon: "trash-outline",
        onPress: doDelete,
      });
    }
  }

  if (!edit) {
    headerButtons.rightButtons.push(
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
    );
  }

  const toolbarStyle = {
    display: edit ? "flex" : "none",
    width: "100%",
    backgroundColor: "transparent",
  };

  return (
    <>
      <Wrapper insets={insets}>
        <Header {...headerButtons} />
        {beingEdited && (
          <BeingEditedWrapper>
            <BeingEditedText>
              Em edição por:{" "}
              {(noteInfo.last_edited_by && noteInfo.last_edited_by.name) ||
                "Desconhecido"}
            </BeingEditedText>
          </BeingEditedWrapper>
        )}
        {loading && <LoadingComponent />}
        <ContentWrapper loading={loading}>
          <NoteTitle
            editable={edit}
            author={author}
            title={currentTitle}
            setTitle={setCurrentTitle}
            submitTitle={submitTitle}
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
                  initialContentHTML={noteInfo.content}
                  onChange={(text) => setContent(text)}
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
          Images.defaultUser
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

export const LoadingComponent = () => (
  <>
    <LoadingIndicator />
    <LoadingText>Carregando</LoadingText>
  </>
);

export default AnotacaoPresentational;
