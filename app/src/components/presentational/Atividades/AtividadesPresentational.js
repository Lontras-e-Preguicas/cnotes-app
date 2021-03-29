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

const ExemploNotificacoes = [
  {
    title: "01/12/2020",
    data:  ["Uma anotação sua foi comentada"],
    desc: ["Sua anotação “Arranjos e Contagens” do caderno “INF3 - Matemática” recebeu um comentário."]
  },
  {
    title: "30/11/2020",
    data:  ["Uma anotação sua foi comentada"],
    desc: ["Sua anotação “Arranjos e Contagens” do caderno “INF3 - Matemática” recebeu um comentário."]
  },
];

//Testar  onPress={()=> Alert.alert('Teste')}

const TelaAtividades = () => {

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
            keyExtractor={(item, index) => item + index}
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
        <DeleteModalButton onPress={submitDeletion}>Confirmar</DeleteModalButton>
      </ModalButtonRow>
    </Modal>
  );
};

export default TelaAtividades;
