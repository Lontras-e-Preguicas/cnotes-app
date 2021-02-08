import React from 'react';
import styled from "styled-components";
import colors from '../../config/colors.js';

export const Caderno = styled.TouchableOpacity`
 border-radius: 10px;
 width: 38%;
 height: 18%;
 align-self: flex-start;
 position: relative;
 margin-top: 10%;
 flex-direction: column;
 background: ${props => (props.Caderno ? '#63E9E9' : '#FAFCFC')};
`;
export const TitleHeaderCaderno = styled.Text`
  color: ${colors.PrimLight};
  font-size: 16px;
  align-self: flex-start;
  padding: 7%;
`;
export const HeaderCaderno = styled.View`
  background: ${props => (props.Caderno ? '#1E1E1E' : '#63E9E9')};
  border-top-left-radius: 10px;
	border-top-right-radius: 10px;
  height: 30%;
  margin-bottom:2.4%;
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
  margin:1%;
  padding-right:3%;
`;



export default Caderno;
