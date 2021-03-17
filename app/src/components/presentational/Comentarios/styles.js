import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

import { Colors, Typography, Spacing } from "../../../config";
import { applyOpacity } from "../../../config/colors";

import DefaultTouchable from "../../core/DefaultTouchable";

import AddSVG from "../../../assets/icons/add.svg";

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

  overflow: hidden;
`;

export const TileHeader = styled.View`
  padding: ${Spacing.getSpacing(10)};
  min-height: 52px;

  flex-direction: row;
  align-items: center;

  border-color: ${Colors.tertiary};
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

  color: ${applyOpacity(Colors.primaryLight, 0.8)};

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

export const RatingTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RatingIcon = styled(Ionicons).attrs({
  name: "star",
})`
  font-size: 20px;
  color: ${Colors.primaryLight};
  margin-right: ${Spacing.getSpacing(4)};
`;

export const RatingValue = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};

  color: ${Colors.primaryLight};
`;

export const AuthorContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AuthorText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};

  color: ${Colors.primaryLight};
`;

export const AuthorPicture = styled.Image`
  border-radius: 12px;
  width: 24px;
  height: 24px;
  margin: 0 ${Spacing.getSpacing(4)};
`;

// Add tile

export const AddTileContainer = styled(TileContainer)`
  background-color: ${applyOpacity(Colors.primaryDark, 0.6)};

  align-items: center;
  justify-content: center;
`;

export const AddTileIcon = styled(AddSVG).attrs({
  fill: Colors.primaryLight,
})`
  width: 64px;
  height: 64px;
`;

export const AddTileText = styled(TileHeaderText)``;
