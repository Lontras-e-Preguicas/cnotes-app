import styled from "styled-components/native";

import { Colors, Typography, Spacing } from "../../../config";

import DefaultTouchable from "../../core/DefaultTouchable";
import Button from "../../core/Button";

import { SafeAreaView } from "react-native-safe-area-context";

import AddMemberIcon from "../../../assets/icons/add.svg";
import { HintedInput } from "../../core/HintedInput";

export const Wrapper = styled.View`
  height: 100%;
  background-color: ${Colors.primaryLight};
`;

export const ContentWrapper = styled(SafeAreaView).attrs({
  edges: ["bottom", "left", "right"],
})`
  height: 100%;
  width: 100%;
  align-items: center;
  padding: ${Spacing.getSpacing(8)} ${Spacing.getSpacing(16)};
`;

export const TitleText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.huge};
  color: ${Colors.primaryDark};
  align-self: flex-start;
  margin-bottom: ${Spacing.getSpacing(16)};
`;

// Member

export const MemberWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

export const MemberContainer = styled(DefaultTouchable)`
  width: 100%;
  flex-direction: row;

  padding-vertical: ${Spacing.getSpacing(16)};
  align-items: center;
  min-height: 48px;

  opacity: ${({ banned }) => (banned ? 0.6 : 1)};
`;

export const AddMemberContainer = styled(MemberContainer)`
  align-items: center;
  justify-content: center;
`;

export const MemberPictureWrapper = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  overflow: hidden;

  margin-right: ${Spacing.getSpacing(8)};
`;

export const MemberPictureImage = styled.Image`
  width: 48px;
  height: 48px;
`;

export const MemberInfoWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-vertical: ${Spacing.getSpacing(0)};
`;

export const MemberNameText = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.extraLarge};
  color: ${({ banned }) => (banned ? Colors.secondaryAlt : Colors.primaryDark)};
`;

export const MemberRoleText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${Colors.primaryDark};
  opacity: 0.6;
`;

export const MemberTopDelimiter = styled.View`
  width: 80%;
  height: 1px;
  background-color: ${Colors.primaryDark};
  opacity: 0.2;
`;

export const StyledFlatList = styled.FlatList`
  width: 100%;
  flex: 1;
`;

export const StyledAddMemberIcon = styled(AddMemberIcon).attrs({
  fill: Colors.primaryDark,
})`
  width: 48px;
  height: 48px;
  margin-right: ${Spacing.getSpacing(8)};
`;

// Member Modal

export const MemberModalContainer = styled.View`
  align-items: center;
`;

export const MemberModalPicture = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

export const MemberModalName = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.huge};
  color: ${Colors.primaryDark};
  max-width: 80%;
  margin-top: ${Spacing.getSpacing(8)};
  text-align: center;
`;

export const MemberModalRole = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${Colors.primaryDark};
  opacity: 0.6;
`;

export const ModalFieldWrapper = styled.View`
  margin-top: ${Spacing.getSpacing(8)};
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const BanIndicator = styled(MemberModalRole)`
  color: ${Colors.secondaryAlt};
  opacity: 1;
`;

export const ModalFieldName = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${Colors.primaryDark};
`;

export const ModalFieldValue = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  color: ${Colors.primaryDark};
  opacity: 0.6;
  margin-left: ${Spacing.getSpacing(4)};
`;

export const PositiveButton = styled(Button).attrs({
  fill: false,
  color: Colors.secondaryAlt,
})`
  flex: 1;
  margin: 0 ${Spacing.getSpacing(8)};
`;

export const NegativeButton = styled(PositiveButton).attrs({
  color: Colors.secondaryAlt,
})``;

export const StyledHintedInput = styled(HintedInput).attrs({
  color: Colors.primaryDark,
})`
  margin-top: ${Spacing.getSpacing(8)};
  width: 100%;
`;
