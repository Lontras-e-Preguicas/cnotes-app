import styled from "styled-components/native";
import { Colors, Typography, Spacing } from "../../../config";
import { applyOpacity } from "../../../config/colors";
import { HintedInput } from "../../core/HintedInput";

// Containers

export const Wrapper = styled.View`
  height: 100%;
  background-color: ${Colors.primaryLight};
`;

export const StyledFlatList = styled.FlatList.attrs({
  numColumns: 2,
  columnWrapperStyle: {
    marginLeft: 16,
    marginRight: 16,
    justifyContent: "space-between",
  },
})`
  width: 100%;
  margin-top: ${Spacing.getSpacing(16)};
  padding-top: ${Spacing.getSpacing(16)};
  flex-grow: 1;
`;

// Notebooks

export const TileContainer = styled.TouchableOpacity`
  border-radius: ${Spacing.getSpacing(10)};

  width: ${({ tileSize }) => tileSize}px;
  min-height: ${({ tileSize }) => tileSize}px;

  margin-bottom: ${Spacing.getSpacing(24)};

  background-color: ${Colors.primaryDark};

  overflow: hidden;
`;

export const TileHeader = styled.View`
  padding: ${Spacing.getSpacing(10)};
  min-height: 52px;

  background-color: ${"#9975E4"};

  flex-direction: row;
  align-items: center;

  border-color: ${Colors.primaryLight};
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

export const TileFooter = styled.View`
  align-self: flex-end;

  flex-direction: row-reverse;
  justify-content: space-between;

  padding: ${Spacing.getSpacing(10)};
`;

// Empty List

export const EmptyListTitle = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.huge};
  color: ${applyOpacity(Colors.primaryDark, 0.8)};

  align-self: center;
  text-align: center;
  max-width: 60%;
`;

export const EmptyListText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${applyOpacity(Colors.primaryDark, 0.6)};

  margin-top: ${Spacing.getSpacing(8)};

  align-self: center;
  text-align: center;
  max-width: 60%;
`;

export const StyledHintedInput = styled(HintedInput).attrs({
  color: Colors.primaryDark,
})`
  margin-top: ${Spacing.getSpacing(8)};
  width: 100%;
`;
