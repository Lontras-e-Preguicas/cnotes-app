import styled from "styled-components/native";

import { Colors, Typography, Spacing } from "../../../config";
import { applyOpacity } from "../../../config/colors";
import DefaultTouchable from "../../core/DefaultTouchable";

// Containers

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${Colors.primaryLight};
  position: relative;
`;

export const Wrapper = styled.SafeAreaView`
  height: 100%;
  position: relative;
`;

/*Componentes Criados para teste do Titulo e Autoria que aparecem na Tela Anotacao*/

//Containers

export const ContainerTitleAnotacao = styled.View`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

export const ContainerAutorAnotacao = styled.View`
  width: 100%;
  height: 20%;
`;

//Contents

export const TitleAnotacao = styled.Text`
  flex-flow: row wrap;
  width: 100%;
`;

export const AutorAnotacao = styled.Text`
  flex-flow: row wrap;
  width: 100%;
`;
