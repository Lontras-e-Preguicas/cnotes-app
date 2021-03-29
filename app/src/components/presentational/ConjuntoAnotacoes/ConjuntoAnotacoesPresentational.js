import React, { useState } from "react";

import useDimensions from "../../hooks/useDimensions";

import Header from "../../core/Header";

import {
  AddTileContainer,
  AddTileIcon,
  AddTileText,
  AuthorContainer,
  AuthorPicture,
  AuthorText,
  Container,
  RatingIcon,
  RatingTextContainer,
  RatingValue,
  StyledFlatList,
  TileContainer,
  TileContent,
  TileDescription,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
  StyledHintedInput,
} from "./styles";

import { Images } from "../../../config";
import { formatRating, formatTitle } from "../../../utils/format";

import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
  ModalDescription,
} from "../../core/Modal";


export function ConjuntoAnotacoesPresentational({
  goBack,
  data,
  refreshing,
  onRefresh,
  openTile,
  createAnotacao,
  title,
}) {
  const dimensions = useDimensions();

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const headerProps = {
    title: formatTitle(title),
    leftButtons: [
      {
        icon: "md-close",
        onPress: goBack,
      },
    ],
    rightButtons: [
      {
        icon: "md-search-outline",
      },
    ],
  };

  const [anotacaoModalVisible, setAnotacaoModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Header {...headerProps} />
        <StyledFlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          refreshing={refreshing}
          onRefresh={onRefresh}
          renderItem={(props) => (
            <Tile tileSize={tileSize} openTile={openTile} {...props} />
          )}
          ListFooterComponent={() => (
            <AddTileContainer onPress={() => setAnotacaoModalVisible(true)} tileSize={tileSize}>
              <AddTileIcon />
              <AddTileText>Nova Anotação</AddTileText>
            </AddTileContainer>
          )}
        />
      </Wrapper>
      <AddModal
        name="Criar Anotação"
        visible={anotacaoModalVisible}
        setVisible={setAnotacaoModalVisible}
        createElement={createAnotacao}
      />
    </Container>
  );
}

const Tile = ({ item, tileSize, openTile }) => (
  <TileContainer onPress={() => openTile(item)} tileSize={tileSize}>
    <TileHeader>
      <TileHeaderText>{item.title}</TileHeaderText>
    </TileHeader>
    <TileContent>
      <TileDescription>{item.description}</TileDescription>
    </TileContent>
    <TileFooter>
      <RatingTextContainer>
        <RatingIcon />
        <RatingValue>{formatRating(item.rating)}</RatingValue>
      </RatingTextContainer>
      <AuthorContainer>
        <AuthorText>Por:</AuthorText>

        <AuthorPicture
          source={{
            uri: item.author.profile_picture,
          }}
          defaultSource={Images.defaultUser}
        />
        <AuthorText>{item.author.name}</AuthorText>
      </AuthorContainer>
    </TileFooter>
  </TileContainer>
);

const AddModal = ({ visible, setVisible, createElement, name }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
    setLoading(true);
    await createElement(title);
    setLoading(false);
    setTitle("");
    setVisible(false);
  };

  return (
    <Modal title={name} visible={visible} setVisible={setVisible}>
      <StyledHintedInput
        hint="Título"
        placeholder="Título..."
        value={title}
        onChangeText={setTitle}
      />
      <ModalButtonRow>
        <CancelModalButton onPress={() => setVisible(false)}>
          Cancelar
        </CancelModalButton>
        <ConfirmModalButtom onPress={handleSubmit} loading={loading}>
          Criar
        </ConfirmModalButtom>
      </ModalButtonRow>
    </Modal>
  );
};

export default ConjuntoAnotacoesPresentational;
