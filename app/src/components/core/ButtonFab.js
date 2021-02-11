import React from "react";
import styled from "styled-components";
import { Colors, Typography } from "../../config";
import getSpacing from "../../config/spacing";

export const ButtonFab = styled.TouchableOpacity`
  background: ${Colors.primaryDark};
  border: 2px ${Colors.secondary};
  border-radius: 60px;
  align-items: center;
  align-self: flex-end;
  position: relative;
  bottom: 0;
  margin-bottom: ${getSpacing(15)};
  margin-right: ${getSpacing(15)};
  padding: ${getSpacing(15)};
`;
