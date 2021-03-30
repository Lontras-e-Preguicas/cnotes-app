import React from "react";
import styled from "styled-components";

import { Colors, Typography, Spacing } from "../../../config";

export const Wrapper = styled.View`
  height: 100%;
  background-color: ${Colors.primaryLight};
`;

export const ContentContainer = styled.View`
  height: 100%;
  width: 100%;
  padding: ${Spacing.getSpacing(8)} ${Spacing.getSpacing(16)};
`;

export const ListNotification = styled.SectionList`
  flex: 1;
`;

export const ContainerDateNotification = styled.View`
  justify-content: center;
  align-content: center;
  flex-direction: row;
`;

export const DateNotification = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  padding: ${Spacing.getSpacing(8)};
`;

export const ContainerNotification = styled.View`
  flex-direction: row;
  margin-top: ${Spacing.getSpacing(8)};
  margin-bottom: ${Spacing.getSpacing(10)};
`;

//Balls Notification

export const AlignBallNotification = styled.View`
  justify-content: center;
`;

export const BallNotification = styled.View`
  background-color: ${Colors.secondary};
  width: 12px;
  height: 12px;
  border-radius: 12px;
`;

export const ContainerInfoNotification = styled.View`
  flex: 1;
  margin-left: ${Spacing.getSpacing(12)};
  margin-right: ${Spacing.getSpacing(8)};
`;

export const TitleRow = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleNotification = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};
  color: ${Colors.primaryDark};
  flex: 1;
`;

export const TimeText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${Colors.primaryDark};
  opacity: 0.6;
`;

export const DescNotification = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  color: ${Colors.primaryDark};
`;

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
