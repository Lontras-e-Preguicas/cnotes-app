import styled from "styled-components/native";

import { Colors, Typography, Spacing } from "../../../config";
import { applyOpacity } from "../../../config/colors";
import DefaultTouchable from "../../core/DefaultTouchable";

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
