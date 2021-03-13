import React from "react";
import styled from "styled-components";

import { Colors, Typography, Spacing } from "../../../config";

export const Wrapper = styled.SafeAreaView`
  height: 100%;
  background-color: ${Colors.primaryLight};
`;

//Header

export const HeaderAtividades = styled.View`
  background: ${Colors.primaryLight};
  width: 100%;
  height:10%;
  padding: ${Spacing.getSpacing(30)};
`;

export const TitleHeaderAtividades = styled.Text`
  color: ${Colors.primaryDark};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.huge};
  align-self: flex-start;
  padding-top: ${Spacing.getSpacing(15)};
  padding-left: ${Spacing.getSpacing(15)};
  position: absolute;
  bottom: 0;
  margin-bottom: ${Spacing.getSpacing(10)};
  margin-right: ${Spacing.getSpacing(25)};
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
  padding: 20px;
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
