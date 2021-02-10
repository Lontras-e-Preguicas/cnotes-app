import React from 'react';
import styled from "styled-components";
import colors from '../../config/colors0.js';
import applyOpacity from '../../config/colors0.js';
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
  color: ${colors.PrimLight};
  font-size: 16px;
  align-self: flex-start;
  padding: ${getSpacing(15)};
`;
export const HeaderAnotacao = styled.View`
  background: ${colors.PrimDark};
  border-bottom-width:2.4px;
  border-color: ${({bordercolor}) => bordercolor};
  border-top-left-radius: 10px;
	border-top-right-radius: 10px;
  height: 30%;
`;
export const BottomAnotacao = styled.View`
  background: ${colors.PrimDark};
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

export const AddButton = styled(Anotacao)`
  align-items: center;
  background: ${colors.opaciDark};
  padding: ${getSpacing(65)};
  margin-bottom: ${getSpacing(8)};
`;

export const Text = styled.Text`
color: ${colors.PrimLight};
font-size: ${fontsSize.text};
`;


export default Anotacao;
