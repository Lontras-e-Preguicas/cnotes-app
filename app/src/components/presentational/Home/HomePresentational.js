import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../../config";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  StyledFlatList,
  TileContainer,
  TileContent,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
  EmptyListTitle,
  EmptyListText,
  StyledHintedInput,
} from "./styles.js";
import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
} from "../../core/Modal";

function HomePresentational({
  notebooks,
  refreshing,
  onRefresh,
  openCaderno,
  createNotebook,
}) {
  const dimensions = useDimensions();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [newNotebookTitle, setNewNotebookTitle] = useState("");
  const [creating, setCreating] = useState(false);

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const headerButtons = [
    {
      icon: "add",
      onPress: () => setCreateModalVisible(true),
    },
  ];

  const handleCreation = async () => {
    setCreating(true);
    await createNotebook(newNotebookTitle);
    setCreating(false);
    setNewNotebookTitle("");
    setCreateModalVisible(false);
  };

  return (
    <>
      <Wrapper>
        <Header title="Meus cadernos" rightButtons={headerButtons} />

        <StyledFlatList
          data={notebooks}
          keyExtractor={(data, index) => index.toString()}
          ListEmptyComponent={EmptyList}
          refreshing={refreshing}
          onRefresh={onRefresh}
          renderItem={(props) => (
            <Tile tileSize={tileSize} openCaderno={openCaderno} {...props} />
          )}
        />

        <CreateNotebookModal
          visible={createModalVisible}
          setVisible={setCreateModalVisible}
          value={newNotebookTitle}
          setValue={setNewNotebookTitle}
          onSubmit={handleCreation}
          loading={creating}
        />
      </Wrapper>
    </>
  );
}

const Tile = ({ item, tileSize, openCaderno }) => (
  <TileContainer tileSize={tileSize} onPress={() => openCaderno(item)}>
    <TileHeader>
      <TileHeaderText>{item.title}</TileHeaderText>
    </TileHeader>
    <TileContent />
    <TileFooter>
      <Ionicons name="md-journal" size={24} color={Colors.primaryLight} />
    </TileFooter>
  </TileContainer>
);

const EmptyList = () => (
  <>
    <EmptyListTitle>Lista vazia</EmptyListTitle>
    <EmptyListText>
      Cadernos a que você se juntar ou criar aparecerão aqui.
    </EmptyListText>
  </>
);

const CreateNotebookModal = ({
  visible,
  setVisible,
  value,
  setValue,
  onSubmit,
  loading,
}) => (
  <Modal visible={visible} setVisible={setVisible} title={"Criar caderno"}>
    <StyledHintedInput
      hint="Título"
      placeholder="Título do caderno"
      value={value}
      onChangeText={setValue}
    />
    <ModalButtonRow>
      <CancelModalButton onPress={() => setVisible(false)}>
        Cancelar
      </CancelModalButton>
      <ConfirmModalButtom loading={loading} onPress={onSubmit}>
        Criar
      </ConfirmModalButtom>
    </ModalButtonRow>
  </Modal>
);

export default HomePresentational;
