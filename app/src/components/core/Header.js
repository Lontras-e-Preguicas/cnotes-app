import React from 'react';
import styled from "styled-components";
import colors from '../../config/colors0.js';
import fontsSize from '../../config/fontsSize.js';
import getSpacing from '../../config/spacing';


export const Header = styled.View`
  background: ${colors.PrimLight};
  width: 100%;
  height:10%;
  padding: ${getSpacing(30)};

`;
export const TitleHeader = styled.Text`
  color: ${colors.PrimDark};
  font-size: 20px;
  align-self: ${props => (props.Caderno ? 'center' : 'flex-start')};
  padding-top: ${getSpacing(15)};
  padding-left: ${props => (props.Caderno ? 0 : getSpacing(15) )};
  position: ${props => (props.Caderno ? 'relative' : 'absolute')};
  left: ${props => (props.Caderno ? 1 : 0)};
  bottom: 0;
`;

export const IconHeader1 = styled.TouchableOpacity`
	align-self: flex-end;
  position: absolute;
  bottom:0;
  right: 0;
  margin-bottom: ${getSpacing(10)};
  margin-right: ${getSpacing(25)};
`;
export const IconHeader2 = styled.TouchableOpacity`
	align-self: flex-end;
  position: absolute;
  bottom:0;
  right: 0;
  margin-bottom: ${getSpacing(10)};
  margin-right:  ${getSpacing(65)};
`;

export const ButtonBack = styled.TouchableOpacity`
  background: ${colors.PrimLight};
  align-self: flex-start;
  bottom:0;
  margin-left:5%;
  position:absolute;
  flex-direction: column;
  width: 15%;
  margin-bottom: 2%;
`;

export const TextoButtonBack = styled.Text`
    color: ${colors.PrimDark};
    font-size: ${fontsSize.text};
    position:absolute;
    margin-left:25px;
`;
