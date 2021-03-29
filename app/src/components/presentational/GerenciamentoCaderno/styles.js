import styled from "styled-components/native";

import { Colors, Typography, Spacing } from "../../../config";
import { applyOpacity } from "../../../config/colors";

import {Image, Text, View, SafeAreaView} from "react-native";
import DefaultTouchable from "../../core/DefaultTouchable";


export const Wrapper = styled.SafeAreaView`
  height: 100%;
  background-color: ${Colors.primaryLight};
  overflow: scroll;
`;

export const Functionality = styled(DefaultTouchable)`
  background-color: ${Colors.primaryLight};
  width: 98%;
  height: ${Spacing.getSpacing(56)};/*essa parte infelizmente não teve como ser em medida relativa*/
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 8%;
  padding-bottom: 8%;
  border-top-color: ${applyOpacity(Colors.primaryDark, 0.15)};
  border-top-width: ${Spacing.getSpacing(1)};
  align-self: center;
`;

export const FunctionalityText = styled.Text`
  font-family: ${Typography.FONT_FAMILIES.Quicksand.Medium};
  font-size: ${Typography.FONT_SIZES.extraLarge};
  color: black;
`;

export const Member = styled.View`
  width:86%;
  height: ${Spacing.getSpacing(56)};/*essa parte infelizmente não teve como ser em medida relativa*/
  background-color: ${Colors.primaryLight};
  border-top-color: ${applyOpacity(Colors.primaryDark, 0.15)};
  border-top-width: ${Spacing.getSpacing(1)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top:7%;
  padding-bottom:7%;
  padding-left:4%;
  padding-right:2%;
  align-self: center;
`;

export const MemberImage = styled.Image`
  height: ${Spacing.getSpacing(30)};
  width: ${Spacing.getSpacing(30)};
  margin-right: ${Spacing.getSpacing(30)};
`;

export const MemberInfos = styled.View`
  flex:0.8;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const MemberOptions = styled(DefaultTouchable)`
  padding: ${Spacing.getSpacing(8)};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LeaveNotebook = styled(DefaultTouchable)`
  background-color: ${applyOpacity(Colors.secondary, 0.6)};
  width: 90%;
  height: ${Spacing.getSpacing(56)};
  margin-top:2%;
  border-radius: ${Spacing.getSpacing(5)};
  padding-left: 6%;
  padding-right: 6%;
  padding-top: 8%;
  padding-bottom: 8%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self:center;
`;
