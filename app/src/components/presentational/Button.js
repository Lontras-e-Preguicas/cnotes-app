import React from 'react';
import styled from "styled-components";
import colors from '../../config/colors.js';

export const ButtonLgCd = styled.TouchableOpacity`
  background: ${colors.Secondary};
  border-radius: 10px;
  padding: 15px 100px;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-top:16px;
  flex-grow: 0;
`;

export const ButtonRegister = styled.TouchableOpacity`
  background-color: transparent;
  border: 1.5px solid ${colors.Thirdary};
  border-radius: 10px;
  font-size: 1px;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 15px 90px;
  flex-grow: 0;
`;

export const ButtonBackLg = styled.TouchableOpacity`
  background: ${colors.WhiteOpaco};
  border-radius: 10px;
  padding: 15px 30px;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-top:30px;
  flex-grow: 0;
  align-self: flex-start;
`;

export default ButtonLgCd;
