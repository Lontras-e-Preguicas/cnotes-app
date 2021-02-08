import React from "react";
import styled from "styled-components";

import colors from '../../config/colors.js';
import { Ionicons, Octicons, FontAwesome} from '@expo/vector-icons';

const MainMenu = styled.View`
  flex: 1;
  flex-flow: row nowrap;
  width: 100%;
  height: 50%;
  margin-top: 123%;
  background-color: ${colors.PrimDark};
`;

export const MenuButton = styled.TouchableOpacity`
    width: 34%;
    height: 100%;
    padding: 10px;
    align-items: center;
    background-color:  ${colors.PrimDark};
`;

export const BookButton = styled(MenuButton)`

`;

export const BellButton = styled(MenuButton)`

`;

export const ProfileButton = styled(MenuButton)`

`;

const FunctionMenu = () => (
  <>
      <MainMenu>
        <BookButton>
          <Ionicons name="journal" size={24} color="grey" />
        </BookButton>
        <BellButton>
          <Octicons name = "bell" size = {24} color = "grey" />
        </BellButton>
        <ProfileButton>
          <FontAwesome name = "user" size = {24} color = "grey" />
        </ProfileButton>
      </MainMenu>
  </>
);

export default FunctionMenu;
