import React from "react";
import styled from "styled-components";
import colors from "../../../config/colors.js";

export const Wrapper = styled.SafeAreaView`
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primaryLight};
`;
export const Header = styled.View`
  height: 10%;
  width: 100%;
  margin-top:10%;
  background-color: ${colors.primaryLight};
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderTitle = styled.Text`
  color: ${colors.primaryDark};
  font-size: 20px;
  line-height: 25px;
  padding: 16px;
`;
export const HeaderIcon = styled.TouchableOpacity`
  padding: 4%;
`;
export const PerfilImage = styled.Image`
  width:180px;
  height:180px;
  border-radius:90;
`;

export const Infos= styled.View`
  height:45%
  width: 86%;
`;

export const UserInfos = styled.View`
  width: 86%;
  height: 6%;
  margin-left: 7%;
  margin-top: 10%;
`;
export const InfoTitle = styled.Text`
font-size: 14px;
line-height: 17px;
color: rgba(30, 30, 30, 0.8);
`;

export const Info = styled.Text`
  font-size: 12px;
  line-height: 15px;
  color: rgba(30, 30, 30, 0.6);
`;

export default UserInfos;
