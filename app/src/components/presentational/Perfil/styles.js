import styled from "styled-components/native";
import { Colors, Spacing, Typography } from "../../../config";
import { applyOpacity } from "../../../config/colors";

export const Wrapper = styled.SafeAreaView`
  height: 100%;
  background-color: ${Colors.primaryLight};
`;

export const Content = styled.View`
  flex-grow: 1;
  margin-top: ${Spacing.getSpacing(8)};

  align-items: center;
  padding: 0 ${Spacing.getSpacing(16)};
`;

export const ProfilePictureWrapper = styled.View`
  elevation: 1;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-offset: 1px 1px;
  shadow-radius: 2px;
`;

export const ProfilePicture = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const ProfileName = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.huge};
  color: ${Colors.primaryDark};

  text-align: center;

  margin: ${Spacing.getSpacing(8)} 0;
`;

export const InfoContainer = styled.View`
  flex-grow: 1;
  margin-top: ${Spacing.getSpacing(8)};
  padding: 0 ${Spacing.getSpacing(8)};
  width: 100%;
`;

export const InfoWrapper = styled.View`
  flex-direction: column;
  margin-bottom: ${Spacing.getSpacing(16)};
`;

export const InfoName = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  color: ${applyOpacity(Colors.primaryDark, 0.8)};

  margin-bottom: ${Spacing.getSpacing(4)};
`;

export const InfoData = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  color: ${applyOpacity(Colors.primaryDark, 0.6)};

  margin-bottom: ${Spacing.getSpacing(4)};
  text-align: justify;
`;

export const BottomRow = styled.View`
  width: 100%;
  margin-bottom: ${Spacing.getSpacing(24)};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BottomText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  text-decoration: underline;

  color: ${Colors.primaryDark};
  text-decoration-color: ${Colors.primaryDark};
  padding: ${Spacing.getSpacing(8)};
`;

export const BottomTextAlt = styled(BottomText)`
  color: ${Colors.secondaryAlt};
  text-decoration-color: ${Colors.secondaryAlt};
`;
