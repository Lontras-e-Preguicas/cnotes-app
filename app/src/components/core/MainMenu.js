import React from "react";
import styled from "styled-components";
import { Ionicons, Octicons, FontAwesome } from "@expo/vector-icons";

import getSpacing from "../../config/spacing";
import { Colors, Typography } from "../../config";
import { useNavigation } from "@react-navigation/native";

const MainMenu = styled.View`
  position: absolute;
  flex-flow: row nowrap;
  width: 100%;
  height: 6%;
  margin-top: ${getSpacing(30)};
  background-color: ${Colors.primaryDark};
  bottom: 0;
`;

export const MenuButton = styled.TouchableOpacity`
  width: 34%;
  height: 100%;
  padding: 10px;
  align-items: center;
  background-color: ${Colors.primaryDark};
`;

export const BookButton = styled(MenuButton)``;

export const BellButton = styled(MenuButton)``;

export const ProfileButton = styled(MenuButton)``;

export default function FunctionMenu() {
  const navigation = useNavigation();
  return (
    <MainMenu>
      <BookButton onPress={() => navigation.navigate("Home")}>
        <Ionicons name="journal" size={24} color="grey" />
      </BookButton>
      <BellButton onPress={() => navigation.navigate("Notifications")}>
        <Octicons name="bell" size={24} color="grey" />
      </BellButton>
      <ProfileButton onPress={() => navigation.navigate("Profile")}>
        <FontAwesome name="user" size={24} color="grey" />
      </ProfileButton>
    </MainMenu>
  );
}
