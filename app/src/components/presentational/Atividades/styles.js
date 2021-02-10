import React from "react";
import styled from "styled-components";

import { Colors, Typography } from "../../../config";
import fontsSize from '../../../config/fontsSize.js';
import getSpacing from '../../../config/spacing';

export const HeaderAtividades = styled.View`
  background: ${Colors.primaryLight};
  width: 100%;
  height:10%;
  padding: ${getSpacing(30)};
`;

export const TitleHeaderAtividades = styled.Text`
  color: ${Colors.primaryDark};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.huge};
  align-self: flex-start;
  padding-top: ${getSpacing(15)};
  padding-left: ${getSpacing(15)};
  position: absolute;
  bottom: 0;
  margin-bottom: ${getSpacing(10)};
  margin-right: ${getSpacing(25)};
`;

export const IconHeaderAtividades = styled.TouchableOpacity`
	align-self: flex-end;
  position: absolute;
  bottom:0;
  right: 0;
  margin-bottom: ${getSpacing(10)};
  margin-right: ${getSpacing(25)};
`;
