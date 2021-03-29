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
  ScrollList,
  ModalButtonRow,
  DeleteModalButton,
  CancelModalButton,
  Wrapper } from "./styles.js";

import Modal from "../../core/Modal";

const AtividadesPresentational = ({ExemploNotificacoes}) => {

const rightButtons = [
  {
    icon: "mail",
    onPress: ()=> {setModalVisible(true);},
  },
];

const [modalVisible, setModalVisible] = useState(false);

return(
  <>
    <Wrapper>
      <Header title="Atividades recentes" rightButtons={rightButtons} />
      <ScrollList>
        <ListNotification
            sections={ExemploNotificacoes}
            keyExtractor={(item, index) => index.toString()}
            renderItem= {({section:{desc,data}}) => (
              <ContainerNotification>
                <AlignBallNotification>
                  <BallNotification></BallNotification>
                </AlignBallNotification>
                <ContainerInfoNotification>
                  <TitleNotification>{data}</TitleNotification>
                  <DescNotification>{desc}</DescNotification>
                </ContainerInfoNotification>
              </ContainerNotification>)
              }
            renderSectionHeader={({ section: { title } }) =>
              (
                <ContainerDateNotification>
                  <DateNotification>{title}</DateNotification>
                </ContainerDateNotification>
              )}
          />
        </ScrollList>
        <ModalDelete
          modalVisible={modalVisible}
          close={() => setModalVisible(false)}
        />
      </Wrapper>
    </>
  );
}

const ModalDelete = ({
  modalVisible,
  close,
  submitDeletion,
}) => {

  return (
    <Modal visible={modalVisible} close={close} title="Você deseja limpar as notificações?">
      <ModalButtonRow>
        <CancelModalButton onPress={close}>Cancelar</CancelModalButton>
        <DeleteModalButton> Confirmar</DeleteModalButton>
      </ModalButtonRow>
    </Modal>
  );
};

export default AtividadesPresentational;
