import React from "react";
import styled from "styled-components";

import { Colors, Typography, Spacing } from "../../../config";
import Button from "../../core/Button";

export const Wrapper = styled.SafeAreaView`
  height: 100%;
  background-color: ${Colors.primaryLight};
`;

//Secoes e Listas

export const ListNotification = styled.SectionList`
  flex: 1;
`;

export const ScrollList = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const ContainerDateNotification = styled.View`
  background: ${Colors.primaryLight};
  justify-content: center;
  align-content: center;
  flex-flow: row nowrap;
`;

export const DateNotification = styled.Text`
  background: ${Colors.primaryLight};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  padding: ${Spacing.getSpacing(20)};
  margin-left: ${Spacing.getSpacing(50)};
`;

export const ContainerNotification = styled.View`
  background: ${Colors.primaryLight};
  flex-direction: row;
`;

//Balls Notification

export const AlignBallNotification = styled.View`
  background: ${Colors.primaryLight};
  justify-content: center;
  width: 20%;
`;

export const BallNotification = styled.View`
  background-color: ${Colors.secondary};
  align-self: center;
  width: 15px;
  height: 15px;
  borderRadius: 15px;
`;

//Conteudos

export const ContainerInfoNotification = styled.View`
  background: ${Colors.primaryLight};
  flex-grow: 1;
  flex-basis: 0;
`;

export const TitleNotification = styled.Text`
  background: ${Colors.primaryLight};
  flex-flow: row wrap;
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};

`;
export const DescNotification = styled.Text`
  background: ${Colors.primaryLight};
  flex-flow: row wrap;
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.regular};

`;

//  Modal excluir notificacoes

export const ModalButtonRow = styled.View`
  flex-direction: row;
  margin-top: ${Spacing.getSpacing(16)};
`;

export const DeleteModalButton = styled(Button).attrs({
  fill: true,
  color: Colors.tertiaryAlt,
  textColor: Colors.primaryLight,
})`
  flex: 1;
  margin: 0 ${Spacing.getSpacing(8)};
`;

export const CancelModalButton = styled(DeleteModalButton).attrs({
  color: Colors.secondaryAlt,
})``;

// Empty List

export const EmptyListTitle = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.huge};
  color: ${Colors.primaryDark};

  align-self: center;
  text-align: center;
  max-width: 60%;
`;

export const EmptyListText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${Colors.primaryDark};

  margin-top: ${Spacing.getSpacing(8)};

  align-self: center;
  text-align: center;
  max-width: 60%;
`;
