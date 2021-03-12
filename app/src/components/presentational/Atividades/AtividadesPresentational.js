import React from "react";
import styled from "styled-components";

import {
  AlignBallNotification,
  BallNotification,
  ContainerNotification,
  ContainerInfoNotification,
  ContainerDateNotification,
  DateNotification,
  DescNotification,
  HeaderAtividades,
  IconHeaderAtividades,
  ListNotification,
  TitleHeaderAtividades,
  TitleNotification,
  ScrollList,
  Wrapper } from "./styles.js";

import { FontAwesome } from '@expo/vector-icons';

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

const TelaAtividades = () => (
  <>
    <Wrapper>
    <HeaderAtividades>
      <TitleHeaderAtividades>Atividades Recentes</TitleHeaderAtividades>
        <IconHeaderAtividades>
        <FontAwesome name="envelope-o" size={24} color="black" />
        </IconHeaderAtividades>
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
