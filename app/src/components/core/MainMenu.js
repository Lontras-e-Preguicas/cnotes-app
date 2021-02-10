import React from "react";
import styled from "styled-components";
import { Ionicons, Octicons, FontAwesome} from '@expo/vector-icons';

import getSpacing from '../../config/spacing';
import colors from '../../config/colors0.js';

import { useNavigation } from "@react-navigation/native";

const MainMenu = styled.View`
  flex: 1;
  flex-flow: row nowrap;
  width: 100%;
  height: 10%;
  margin-top: ${getSpacing(30)};
  background-color: ${colors.PrimDark};
`;

export const MenuButton = styled.TouchableOpacity`
    width: 34%;
    height: 100%;
    padding: 10px;
    align-items: center;
    background-color: ${colors.PrimDark};
`;

export const BookButton = styled(MenuButton)`

`;

export const BellButton = styled(MenuButton)`

`;

export const ProfileButton = styled(MenuButton)`

`;

export default function FunctionMenu(){
  const navigation = useNavigation();
  return(
      <MainMenu>
        <BookButton onPress={ () => navigation.navigate('Home') }>
          <Ionicons name="journal" size={24} color="grey" />
        </BookButton>
        <BellButton onPress={ () => navigation.navigate('Notifications') }>
          <Octicons name = "bell" size = {24} color = "grey" />
        </BellButton>
        <ProfileButton onPress={ () => navigation.navigate('Profile') }>
          <FontAwesome name = "user" size = {24} color = "grey" />
        </ProfileButton>
      </MainMenu>
  );
}
