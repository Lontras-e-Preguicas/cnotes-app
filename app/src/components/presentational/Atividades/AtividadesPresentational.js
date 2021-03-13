import React from "react";
import styled from "styled-components/native";
import { Colors, Spacing, Typography } from "../../../config";

import {
  AlignBallNotification,
  BallNotification,
  ContainerNotification,
  ContainerInfoNotification,
  ContainerDateNotification,
  DateNotification,
  DescNotification,
  HeaderAtividades,
  ListNotification,
  TitleHeaderAtividades,
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

const TelaAtividades = () => (
  <>
    <Wrapper>
    <HeaderAtividades>
      <TitleHeaderAtividades>Atividades Recentes</TitleHeaderAtividades>
        <ModalAtividades />
      </HeaderAtividades>
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
     </Wrapper>
  </>
);

export default TelaAtividades;
