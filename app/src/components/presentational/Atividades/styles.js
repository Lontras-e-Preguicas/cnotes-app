import styled from "styled-components";

import { Colors, Typography, Spacing } from "../../../config";
import { Ionicons } from "@expo/vector-icons";

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
  margin-top: ${Spacing.getSpacing(8)};
`;

export const ContainerDateNotification = styled.View`
  justify-content: center;
  align-content: center;
  flex-direction: row;
  background: ${Colors.primaryLight};
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
  background-color: ${({ seen }) =>
    seen ? Colors.primaryDark : Colors.secondary};
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

  max-width: 80%;
`;

export const InviteWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: ${Spacing.getSpacing(8)};
  height: 48px;
`;

export const InviteSenderPicture = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const InviteInfoWrapper = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: ${Spacing.getSpacing(8)};
`;

export const InviteAuthorName = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${Colors.primaryDark};
`;

export const InviteNotebookTitle = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  color: ${Colors.primaryDark};
  opacity: 0.6;
`;

export const InviteActionsWrapper = styled.View`
  flex-wrap: nowrap;
  flex-direction: row;
`;

export const AcceptActionIcon = styled(Ionicons).attrs({
  name: "checkmark-circle-outline",
})`
  font-size: 36px;
  color: ${Colors.success};
  margin-horizontal: ${Spacing.getSpacing(8)};
`;

export const DenyActionIcon = styled(Ionicons).attrs({
  name: "close-circle-outline",
})`
  font-size: 36px;
  color: ${Colors.secondaryAlt};
`;

export const InviteModalList = styled.FlatList`
  width: 100%;
  flex: 1;
  margin-top: ${Spacing.getSpacing(16)};
  max-height: ${({ dimensions }) => dimensions.window.height * 0.6}px;
  min-height: ${({ dimensions }) => dimensions.window.height * 0.2}px;
`;

export const InviteModalContainer = styled.View``;
