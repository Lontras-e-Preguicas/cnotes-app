import React from 'react';
import styled from "styled-components";
import colors from '../../config/colors.js';


export const InputLgCdBase = styled.TextInput`
  background-color: transparent;
  border: 1.5px solid ${colors.WhiteOpacoSec};
  border-radius: 10px;
  color: ${colors.WhiteOpacoSec};
  font-size: 1px;
  padding: 15px 150px;
  margin-bottom:16px;
  flex-grow: 0;
`;

export const InputEmail = styled(InputLgCdBase)`
    margin-bottom: 10px;
`;

export const InputSenha = styled(InputLgCdBase)`

`;

export default InputLgCdBase;
