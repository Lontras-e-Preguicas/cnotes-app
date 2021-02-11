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
  padding-right: ${getSpacing(35)};
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
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
`;

export const Text1 = styled.Text`
  color: ${Colors.primaryLight};
  font-size: ${Typography.FONT_SIZES.regular};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  align-self: flex-start;
  margin-left: ${getSpacing(10)};
  margin-top: ${getSpacing(8)};
`;

export const Text2 = styled.Text`
  color: ${Colors.primaryLight};
  font-size: ${Typography.FONT_SIZES.regular};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  align-self: flex-start;
  position: absolute;
  bottom:0;
  margin-left: ${getSpacing(10)};
  margin-bottom: ${getSpacing(8)};
`;

export const ValStar = styled.Text`
  color: ${Colors.primaryLight};
  font-size: ${Typography.FONT_SIZES.medium};
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Regular};
  align-self: flex-end;
  position: absolute;
  bottom:0;
  margin: ${getSpacing(5)};
  padding-right: ${getSpacing(8)};
`;


export default Anotacao;
