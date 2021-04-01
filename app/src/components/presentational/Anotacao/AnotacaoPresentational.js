import React, { useRef, useState, useEffect } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";

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
  UploadingModalContainer,
  UploadingText,
} from "./styles.js";
import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
} from "../../core/Modal";
import DefaultTouchable from "../../core/DefaultTouchable";
import { Alert, Platform } from "react-native";

import { Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

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
  doUpload,
}) {
  const insets = useSafeAreaInsets();

  const richText = useRef(); //referencia ao componente RichEditor
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [uploading, setUploading] = useState(false);

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

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Não foi possível obter a imagem");
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: Platform.OS === "android",
      quality: 0.4,
    });

    if (result.cancelled) {
      return;
    }
    setUploading(true);
    const res = await doUpload(result.uri);
    setUploading(false);

    if (!res) {
      return;
    }

    richText.current.insertImage(res.uploaded_file);
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
            actions={[
              actions.keyboard,
              actions.undo,
              actions.redo,
              actions.setBold,
              actions.setItalic,
              actions.setStrikethrough,
              actions.setUnderline,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.checkboxList,
              actions.insertLink,
              actions.insertImage,
              actions.removeFormat,
            ]}
            onPressAddImage={pickImage}
          />
        </ToolBarContainer>
        <RatingModal
          submitRating={submitRating}
          modalVisible={modalVisible}
          close={() => setModalVisible(false)}
          value={rating}
          setValue={setRating}
        />
        <UploadingIndicator visible={uploading} />
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

const UploadingIndicator = ({ visible }) => (
  <Modal visible={visible} setVisible={() => {}} title="Enviando Imagem">
    <UploadingModalContainer>
      <LoadingIndicator />
      <UploadingText>Enviando</UploadingText>
    </UploadingModalContainer>
  </Modal>
);

export default AnotacaoPresentational;
