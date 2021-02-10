import React from 'react';
import styled from "styled-components";
import colors from '../../config/colors0.js';
import getSpacing from '../../config/spacing';

export const Caderno = styled.TouchableOpacity`
 border-radius: 10px;
 width: ${({tileSize}) => tileSize}px;
 height: ${({tileSize}) => tileSize}px;
 align-self: flex-start;
 position: relative;
 margin-top: ${getSpacing(30)};
 flex-direction: column;
`;
export const TitleHeaderCaderno = styled.Text`
  color: ${colors.PrimLight};
  font-size: 16px;
  align-self: flex-start;
  padding: ${getSpacing(15)};
`;
export const HeaderCaderno = styled.View`
  background: ${props => (props.Caderno ? '#1E1E1E' : '#63E9E9')};
  border-bottom-width:2.4px;
  border-color: ${({bordercolor}) => bordercolor};
  border-top-left-radius: 10px;
	border-top-right-radius: 10px;
  height: 30%;
`;
export const BottomCaderno = styled.View`
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



export default Caderno;
