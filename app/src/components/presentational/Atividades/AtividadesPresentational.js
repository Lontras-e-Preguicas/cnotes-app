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
  Wrapper } from "./styles.js";

import ModalAtividades from "./Modal";

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
    onPress: ()=> {setModal(true)},
  },
];

const [modal, setModal] = useState(false);

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
        {modal ? <ModalAtividades/> : <></>}
      </Wrapper>
    </>
  );
}

export default TelaAtividades;
