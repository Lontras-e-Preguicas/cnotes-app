import styled from "styled-components/native";

import { Colors, Typography, Spacing } from "../../../config";
import { applyOpacity } from "../../../config/colors";
import DefaultTouchable from "../../core/DefaultTouchable";

// Containers

export const Container = styled.View`
  height: 100%;
  background-color: ${Colors.primaryLight};
`;

export const Wrapper = styled.View`
  height: 100%;
  background-color: ${Colors.primaryLight};
`;

/*Componentes Criados para teste do Titulo e Autoria que aparecem na Tela Anotacao*/

//Containers

export const ContainerTitleAnotacao = styled.View`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 10%;
  position: relative;
  margin: ${Spacing.getSpacing(8)};
`;

export const ContainerAutorAnotacao = styled.View`
  width: 100%;
  height: 20%;
`;

//Contents

export const TitleAnotacao = styled.Text`
  flex-flow: row wrap;
  width: 100%;
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.giant};
`;

export const AutorAnotacao = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  margin-left: ${Spacing.getSpacing(4)};
`;

export const AuthorContainer = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const AuthorPicture = styled.Image`
  border-radius: 12px;
  width: 24px;
  height: 24px;
  margin: 0 ${Spacing.getSpacing(4)};
`;

export const ToolBarContainer = styled.View`
  align-items: center;
  width: 100%;
  align-self: flex-end;
  align-items: flex-end;
`;
