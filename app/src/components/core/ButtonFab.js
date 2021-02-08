import React from 'react';
import styled from "styled-components";
import colors from '../../config/colors.js';

export const ButtonFab = styled.TouchableOpacity`
  background: ${colors.PrimDark};
  border: 2px ${colors.Secondary};
  border-radius: 60px;
  align-items: center;
  align-self: flex-end;
  position: relative;
  bottom:0;
  margin-bottom:5%;
  margin-right:5%;
  padding: 3%;
`;
