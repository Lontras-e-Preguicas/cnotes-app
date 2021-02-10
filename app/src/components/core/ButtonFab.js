import React from 'react';
import styled from "styled-components";
import colors from '../../config/colors0.js';
import getSpacing from '../../config/spacing';

export const ButtonFab = styled.TouchableOpacity`
  background: ${colors.PrimDark};
  border: 2px ${colors.Secondary};
  border-radius: 60px;
  align-items: center;
  align-self: flex-end;
  position: relative;
  bottom:0;
  margin-bottom: ${getSpacing(15)};
  margin-right: ${getSpacing(15)};
  padding: ${getSpacing(15)};
`;
