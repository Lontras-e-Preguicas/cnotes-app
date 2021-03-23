import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

import { Colors, Typography, Spacing } from "../../../config";
import { applyOpacity } from "../../../config/colors";

import DefaultTouchable from "../../core/DefaultTouchable";

import AddSVG from "../../../assets/icons/add.svg";
import { HintedInput } from "../../core/HintedInput";
import Button from "../../core/Button";

// Containers

export const Wrapper = styled.View`
  height: 100%;
  position: relative;
  background-color: ${Colors.primaryLight};
`;

export const StyledFlatList = styled.FlatList`
  padding-left: ${Spacing.getSpacing(16)};
  padding-right: ${Spacing.getSpacing(16)};
  padding-top: ${Spacing.getSpacing(32)};
  flex-grow: 1;
`;

// Notes

export const TileContainer = styled(DefaultTouchable)`
  border-radius: ${Spacing.getSpacing(10)};

  width: 100%;

  min-height: ${({ tileSize }) => tileSize}px;

  margin-bottom: ${Spacing.getSpacing(24)};

  background-color: ${Colors.primaryDark};

  opacity: ${({ solved }) => (solved ? 0.6 : 1)};

  overflow: hidden;
`;

export const TileHeader = styled.View`
  padding: ${Spacing.getSpacing(10)};
  min-height: 52px;

  flex-direction: row;
  align-items: center;

  border-color: #9975e4;
  border-bottom-width: 2px;
`;

export const TileHeaderText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};

  color: ${Colors.primaryLight};
`;

export const TileContent = styled.View`
  flex-grow: 1;
`;

export const TileDescription = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  text-align: justify;

  color: ${Colors.primaryLight};

  padding: ${Spacing.getSpacing(10)} ${Spacing.getSpacing(8)};
`;

export const TileFooter = styled.View`
  width: 100%;

  align-self: flex-end;
  align-items: center;

  flex-direction: row-reverse;
  justify-content: space-between;

  padding: ${Spacing.getSpacing(10)};
`;

export const TileFooterTimeStamp = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  text-align: right;
  color: ${applyOpacity(Colors.primaryLight, 0.8)};
`;

export const AuthorPicture = styled.Image`
  width: 24px;
  height: 24px;
`;

export const AuthorPictureWrapper = styled.View`
  border-radius: 12px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  margin-right: ${Spacing.getSpacing(8)};
`;

export const CommentModalContent = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${Spacing.getSpacing(8)};
`;

export const DescriptionText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  max-width: 80%;
  color: ${applyOpacity(Colors.primaryDark, 0.8)};
  text-align: center;
`;

export const StyledHintedInput = styled(HintedInput).attrs({
  multiline: true,
  color: Colors.primaryDark,
})`
  margin-top: ${Spacing.getSpacing(8)};
  width: 100%;
`;

export const CommentButton = styled(Button).attrs({
  fill: true,
  color: Colors.tertiaryAlt,
  textColor: Colors.primaryLight,
})`
  flex: 1;
  margin: 0 ${Spacing.getSpacing(8)};
`;

export const CancelButton = styled(CommentButton).attrs({
  color: Colors.secondaryAlt,
})``;
