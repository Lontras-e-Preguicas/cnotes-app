import React from 'react';
import styled from "styled-components";

import { Colors, Typography } from "../../config";
import getSpacing from '../../config/spacing';
import fontsSize from '../../config/fontsSize.js';

export const Anotacao = styled.TouchableOpacity`
 border-radius: 10px;
 width: ${({tileSize2}) => tileSize2}px;
 height: ${({tileSize}) => tileSize}px;
 align-self: flex-start;
 position: relative;
 margin-top: ${getSpacing(30)};
 flex-direction: column;
`;
export const TitleHeaderAnotacao = styled.Text`
  color: ${Colors.primaryLight};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  font-size: ${Typography.FONT_SIZES.large};
  align-self: flex-start;
  padding: ${getSpacing(15)};
`;
export const HeaderAnotacao = styled.View`
  background: ${Colors.primaryDark};
  border-bottom-width:2.4px;
  border-color: ${({bordercolor}) => bordercolor};
  border-top-left-radius: 10px;
	border-top-right-radius: 10px;
  height: 30%;
`;
export const BottomAnotacao = styled.View`
  background: ${Colors.primaryDark};
  border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
  height: 70%;
`;
export const Icon = styled.View`
	align-self: flex-end;
  position: absolute;
  bottom:0;
  margin: ${getSpacing(5)};
  padding-right: ${getSpacing(5)};
`;

export const AddButton = styled.TouchableOpacity`
  align-self: flex-start;
  position: relative;
  align-items: center;
  background: ${Colors.opaciDark};
  height:10%;
  width:95%;
  border-radius: 10px;
  margin: ${getSpacing(5)};
  padding: ${getSpacing(8)};
`;

export const Text = styled.Text`
  color: ${Colors.primaryLight};
  font-size: ${Typography.FONT_SIZES.large};
`;


export default Anotacao;
