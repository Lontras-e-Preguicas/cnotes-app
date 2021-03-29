import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../../config";

import Header from "../../core/Header";
import useDimensions from "../../hooks/useDimensions";

import {
  Container,
  EmptyListText,
  EmptyListTitle,
  PathText,
  StyledFlatList,
  StyledHintedInput,
  TileContainer,
  TileContent,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
} from "./styles";
import FAB from "./FAB";
import { formatTitle } from "../../../utils/format";
import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
  ModalDescription,
} from "../../core/Modal";

function CadernoPresentational({
  goBack,
  openTile,
  data,
  loading,
  retrieveData,
  title,
  path,
  createFolder,
  createConj,
  canDelete,
  deleteFolder,
}) {
  const dimensions = useDimensions();

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const headerProps = {
    title: formatTitle(title),
    leftButtons: [
      {
        icon: "chevron-back",
        label: "Voltar",
        onPress: goBack,
      },
    ],
    rightButtons: [
      {
        icon: "search-outline",
      },
      {
        icon: "settings-outline",
      },
    ],
  };

  const [folderModalVisible, setFolderModalVisible] = useState(false);
  const [noteGroupModalVisible, setNoteGroupModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  if (canDelete) {
    headerProps.rightButtons.push({
      icon: "trash-outline",
      onPress: () => setDeleteModalVisible(true),
    });
  }

  return (
    <Container>
      <Wrapper>
        <Header {...headerProps} />
        <PathText>{path}</PathText>
        <StyledFlatList
          data={data}
          renderItem={(props) => (
            <Tile tileSize={tileSize} openTile={openTile} {...props} />
          )}
          keyExtractor={(data, index) => index.toString()}
          refreshing={loading}
          onRefresh={retrieveData}
          ListEmptyComponent={EmptyList}
        />
        <FAB
          addFolder={() => setFolderModalVisible(true)}
          addConj={() => setNoteGroupModalVisible(true)}
        />
      </Wrapper>
      <AddModal
        name="Criar Pasta"
        visible={folderModalVisible}
        setVisible={setFolderModalVisible}
        createElement={createFolder}
      />
      <AddModal
        name="Criar Conjunto"
        visible={noteGroupModalVisible}
        setVisible={setNoteGroupModalVisible}
        createElement={createConj}
      />
      <ConifrmDeleteModal
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        doDelete={deleteFolder}
      />
    </Container>
  );
}

const Tile = ({ item, openTile, tileSize }) => (
  <TileContainer tileSize={tileSize} onPress={() => openTile(item)}>
    <TileHeader {...item}>
      <TileHeaderText>{item.title}</TileHeaderText>
    </TileHeader>
    <TileContent />
    <TileFooter>
      <Ionicons
        name={item.folder ? "md-folder" : "md-document-text"}
        size={24}
        color={Colors.primaryLight}
      />
    </TileFooter>
  </TileContainer>
);

const EmptyList = () => (
  <>
    <EmptyListTitle>Pasta vazia</EmptyListTitle>
    <EmptyListText>
      Cadernos a que você se juntar ou criar aparecerão aqui.
    </EmptyListText>
  </>
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

const ConifrmDeleteModal = ({ visible, setVisible, doDelete }) => {
  const [loading, setLoading] = useState(false);
  const handleConfirm = async () => {
    setLoading(true);
    await doDelete();
    setLoading(false);
    setVisible(false);
  };

  return (
    <Modal title="Deletar pasta" visible={visible} setVisible={setVisible}>
      <ModalDescription>
        Tem certeza que deseja deletar esta pasta? Essa ação é irreversível!
      </ModalDescription>
      <ModalButtonRow>
        <CancelModalButton onPress={() => setVisible(false)}>
          Cancelar
        </CancelModalButton>
        <ConfirmModalButtom
          onPress={handleConfirm}
          loading={loading}
          color={Colors.secondaryAlt}
          fill={false}
          textColor={Colors.secondaryAlt}
        >
          Deletar
        </ConfirmModalButtom>
      </ModalButtonRow>
    </Modal>
  );
};

export default CadernoPresentational;
