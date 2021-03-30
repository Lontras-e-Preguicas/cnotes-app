import React, { useState } from "react";

import Header from "../../core/Header";

import {
  AlignBallNotification,
  BallNotification,
  ContainerNotification,
  ContainerInfoNotification,
  ContainerDateNotification,
  DateNotification,
  DescNotification,
  ListNotification,
  TitleNotification,
  EmptyListTitle,
  EmptyListText,
  Wrapper,
  ContentContainer,
  TitleRow,
  TimeText,
} from "./styles.js";

import Modal, {
  CancelModalButton,
  ConfirmModalButtom,
  ModalButtonRow,
} from "../../core/Modal";
import { formatTime } from "../../../utils/format";

const AtividadesPresentational = ({
  activities,
  onRefresh,
  loading,
  submitDeletion,
}) => {
  const rightButtons = [
    {
      icon: "mail-outline",
      onPress: () => {
        setModalVisible(true);
      },
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Wrapper>
        <Header title="Atividades recentes" rightButtons={rightButtons} />
        <ContentContainer>
          <ListNotification
            sections={activities}
            ListEmptyComponent={EmptyList}
            keyExtractor={(item, index) => index.toString()}
            refreshing={loading}
            onRefresh={onRefresh}
            renderItem={({ item: { title, description, creation_date } }) => (
              <ContainerNotification>
                <AlignBallNotification>
                  <BallNotification />
                </AlignBallNotification>
                <ContainerInfoNotification>
                  <TitleRow>
                    <TitleNotification>{title}</TitleNotification>
                    <TimeText>{formatTime(creation_date)}</TimeText>
                  </TitleRow>
                  <DescNotification>{description}</DescNotification>
                </ContainerInfoNotification>
              </ContainerNotification>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <ContainerDateNotification>
                <DateNotification>{title}</DateNotification>
              </ContainerDateNotification>
            )}
          />
        </ContentContainer>
        <ModalDelete
          submitDeletion={submitDeletion}
          modalVisible={modalVisible}
          close={() => setModalVisible(false)}
        />
      </Wrapper>
    </>
  );
};

const EmptyList = () => (
  <>
    <EmptyListTitle>Sem notificações</EmptyListTitle>
    <EmptyListText>
      Não há atividades recentes para serem visualizadas aqui.
    </EmptyListText>
  </>
);

const ModalDelete = ({ modalVisible, close, submitDeletion }) => {
  return (
    <Modal
      visible={modalVisible}
      close={close}
      title="Você deseja limpar as notificações?"
    >
      <ModalButtonRow>
        <CancelModalButton onPress={close}>Cancelar</CancelModalButton>
        <ConfirmModalButtom
          onPress={() => {
            submitDeletion([]);
            close();
          }}
        >
          Confirmar
        </ConfirmModalButtom>
      </ModalButtonRow>
    </Modal>
  );
};

export default AtividadesPresentational;
