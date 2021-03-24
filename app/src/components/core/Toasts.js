import React from "react";
import styled from "styled-components/native";
import { Colors, Spacing, Typography } from "../../config";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { TouchableOpacity } from "react-native";

const ErrorToast = ({ text1 }) => (
  <ErrorToastWrapper>
    <ToastIcon name="warning-outline" />
    <ToastMessage>{text1}</ToastMessage>
    <TouchableOpacity onPressOut={Toast.hide}>
      <ToastIcon name="close" />
    </TouchableOpacity>
  </ErrorToastWrapper>
);

const SuccessToast = ({ text1 }) => (
  <SuccessToastWrapper>
    <ToastIcon name="checkmark" />
    <ToastMessage>{text1}</ToastMessage>
    <TouchableOpacity onPressOut={Toast.hide}>
      <ToastIcon name="close" />
    </TouchableOpacity>
  </SuccessToastWrapper>
);

const BaseToastWrapper = styled.View`
  width: 80%;
  border-radius: 10px;
  background-color: ${Colors.primaryDark};
  padding: ${Spacing.getSpacing(8)} ${Spacing.getSpacing(10)};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* margin-top: 56px; */
`;

const ToastIcon = styled(Ionicons)`
  font-size: 16px;
  color: ${Colors.primaryLight};
`;

const ToastMessage = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.medium};
  color: ${Colors.primaryLight};
  flex-grow: 1;
  text-align: left;
  padding: 0 ${Spacing.getSpacing(8)};
`;

const ErrorToastWrapper = styled(BaseToastWrapper)`
  background-color: ${Colors.secondaryAlt};
`;

const SuccessToastWrapper = styled(BaseToastWrapper)`
  background-color: ${Colors.success};
`;

export const toastConfig = {
  error: ErrorToast,
  success: SuccessToast,
};
