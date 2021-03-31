import React, { useState } from "react";
import { formatTimeStamp } from "../../../utils/format";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  AuthorPicture,
  AuthorPictureWrapper,
  CommentModalContent,
  EmptyListText,
  EmptyListTitle,
  StyledFlatList,
  StyledHintedInput,
  TileContainer,
  TileContent,
  TileDescription,
  TileFooter,
  TileFooterTimeStamp,
  TileHeader,
  TileHeaderText,
  Wrapper,
} from "./styles";

import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
  ModalDescription,
} from "../../core/Modal";
import { Images } from "../../../config";

function ComentariosPresentational({
  goBack,
  data,
  refreshing,
  retrieveData,
  doComment,
}) {
  const dimensions = useDimensions();
  const [modalVisible, setModalVisible] = useState(false);

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const headerButtons = {
    leftButtons: [
      {
        icon: "md-close",
        onPress: goBack,
      },
    ],
    rightButtons: [
      {
        icon: "md-add",
        onPress: () => setModalVisible(true),
      },
    ],
  };

  return (
    <>
      <Wrapper>
        <Header title="Comentários" {...headerButtons} />
        <StyledFlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          refreshing={refreshing}
          onRefresh={retrieveData}
          renderItem={(props) => <Tile tileSize={tileSize} {...props} />}
          ListEmptyComponent={EmptyList}
        />
        <AddCommentModal
          visible={modalVisible}
          setVisible={setModalVisible}
          doComment={doComment}
        />
      </Wrapper>
    </>
  );
}

const Tile = ({ item, tileSize }) => (
  <TileContainer tileSize={tileSize}>
    <TileHeader>
      <AuthorPictureWrapper>
        <AuthorPicture
          source={
            (item.commenter.profile_picture && {
              uri: item.commenter.profile_picture,
            }) ||
            Images.defaultUserLight
          }
          defaultSource={Images.defaultUserLight}
        />
      </AuthorPictureWrapper>
      <TileHeaderText>{item.commenter.name}</TileHeaderText>
    </TileHeader>
    <TileContent>
      <TileDescription>{item.message}</TileDescription>
    </TileContent>
    <TileFooter>
      <TileFooterTimeStamp>
        {formatTimeStamp(item.creation_date)}
      </TileFooterTimeStamp>
    </TileFooter>
  </TileContainer>
);

const AddCommentModal = ({ visible, setVisible, doComment }) => {
  const [comment, setComment] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  const handleCommentSubmit = async () => {
    setActionLoading(true);

    await doComment(comment);

    setActionLoading(false);
    setVisible(false);
    setComment("");
  };

  return (
    <Modal title="Comentar" visible={visible} setVisible={setVisible}>
      <CommentModalContent>
        <ModalDescription>
          Seu comentário será visível para todos membros do caderno.
        </ModalDescription>
        <StyledHintedInput
          hint={"Comentário"}
          placeholder={"Seu comentário"}
          value={comment}
          onChangeText={setComment}
        />
        <ModalButtonRow>
          <CancelModalButton onPress={() => setVisible(false)}>
            Cancelar
          </CancelModalButton>
          <ConfirmModalButtom
            loading={actionLoading}
            onPress={handleCommentSubmit}
          >
            Comentar
          </ConfirmModalButtom>
        </ModalButtonRow>
      </CommentModalContent>
    </Modal>
  );
};

const EmptyList = () => (
  <>
    <EmptyListTitle>Essa anotação ainda não tem comentários</EmptyListTitle>
    <EmptyListText>Seja o primeiro a comentar!</EmptyListText>
  </>
);

export default ComentariosPresentational;
