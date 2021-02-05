import styled from "styled-components/native";
import { Colors, Spacing, Typography } from "../../../config";
import getSpacing from "../../../config/spacing";
import Button from "../../core/Button";

import { HintedInputWrapper } from "../../core/HintedInput";

// Containers

export const Background = styled.ImageBackground`
  height: 100%;
  background-color: ${Colors.primaryDark};
`;

export const SafeAreaView = styled.SafeAreaView`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    height: "100%",
    justifyContent: "center",
  },
})`
  width: 100%;
`;

export const FormWrapper = styled.View`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

// Form Items

export const Title = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.giant};
  text-align: center;

  color: ${Colors.primaryLight};

  margin-bottom: ${Spacing.getSpacing(4)};
`;

export const StyledInputWrapper = styled(HintedInputWrapper)`
  width: 80%;

  margin-top: ${getSpacing(12)};
`;

// Buttons

export const SignupButton = styled(Button).attrs({
  fill: true,
  color: Colors.secondary,
  textColor: Colors.primaryLight,
})`
  margin-top: ${getSpacing(32)};
  width: 75%;
  height: 48px;
`;

export const StyledActivityIndicator = styled.ActivityIndicator.attrs({
  color: Colors.primaryLight,
})`
  height: 100%;
`;

// Go Back
// export const GoBackTouchable = styled.TouchableOpacity`
//   align-self: flex-start;
//   position: relative;
//   top: ${getSpacing(24)};
//   left: ${getSpacing(32)};
// `;

// export const GoBackText = styled.Text`
//   color: ${Colors.primaryLight};
//   font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
//   font-size: ${Typography.FONT_SIZES.large};
// `;
