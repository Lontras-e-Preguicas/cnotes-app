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
  EmptyListTitle,
  EmptyListText,
  ModalButtonRow,
  DeleteModalButton,
  CancelModalButton,
  Wrapper } from "./styles.js";

import Modal from "../../core/Modal";

const AtividadesPresentational = ({notificacoes, submitDeletion}) => {

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
            sections={notificacoes}
            ListEmptyComponent={EmptyList}
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
          submitDeletion = {submitDeletion}
          modalVisible={modalVisible}
          close={() => setModalVisible(false)}
        />
      </Wrapper>
    </>
  );
}

const EmptyList = () => (
  <>
    <EmptyListTitle>Sem notificações</EmptyListTitle>
      <EmptyListText>
        Não há atividades recentes para serem vizualizadas aqui.
      </EmptyListText>
   </>
 );

const ModalDelete = ({
  modalVisible,
  close,
  submitDeletion,
}) => {

  return (
    <Modal visible={modalVisible} close={close} title="Você deseja limpar as notificações?">
      <ModalButtonRow>
        <CancelModalButton onPress={close}>Cancelar</CancelModalButton>
        <DeleteModalButton onPress={() => {submitDeletion([]); close();}}> Confirmar</DeleteModalButton>
      </ModalButtonRow>
    </Modal>
  );
};

export default AtividadesPresentational;
