import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dimensions, StatusBar } from "react-native";
import { AntDesign, Ionicons, Feather, Octicons } from "@expo/vector-icons";

import {
  Header,
  TitleHeader,
  IconHeader1,
  IconHeader2,
  ButtonBack,
  TextoButtonBack,
} from "../../core/Header.js";
import {
  Caderno,
  HeaderCaderno,
  TitleHeaderCaderno,
  BottomCaderno,
  Icon,
} from "../../core/Caderno.js";
import { ButtonFab } from "../../core/ButtonFab.js";

import { useNavigation } from "@react-navigation/native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Wrapper = styled.SafeAreaView`
  height: 90%;
  width: 100%;
  position: relative;
`;

const StyledFlatList = styled.FlatList`
  width: 100%;
  height: 100%;
`;

function FlatList({ navigation }) {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const [tiles, setTiles] = useState(["Tile 1", "Tile 2", "Tile 3"]);

  const [showTile, setShowTile] = useState(true);

  const addTile = () => {
    setTiles([...tiles, `Tile ${tiles.length + 1}`]);
  };

  const removeTile = () => {
    setTiles(tiles.slice(0, -1));
  };

  const toggleTiles = () => {
    setShowTile(!showTile);
  };

  return (
    <Wrapper>
      <StyledFlatList
        data={showTile ? tiles : []}
        renderItem={({ item: title }) => (
          <Tile
            onPress={() => navigation.navigate("Conjunto")}
            title={title}
            tileSize={tileSize}
          />
        )}
        numColumns={2}
        columnWrapperStyle={{
          marginLeft: 16,
          marginRight: 16,
          justifyContent: "space-between",
        }}
        keyExtractor={(data, index) => index.toString()}
      />
      <ButtonFab onPress={addTile}>
        <Feather name="plus" size={30} color="white" />
      </ButtonFab>
    </Wrapper>
  );
}

const Tile = ({ title, tileSize, onPress }) => (
  <Caderno Caderno onPress={onPress} tileSize={tileSize}>
    <HeaderCaderno Caderno bordercolor={"#63E9E9"}>
      <TitleHeaderCaderno>{title}</TitleHeaderCaderno>
    </HeaderCaderno>
    <BottomCaderno>
      <Icon>
        <Ionicons name="document-text" size={24} color="white" />
      </Icon>
    </BottomCaderno>
  </Caderno>
);

export default TelaCaderno = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <Header>
        <ButtonBack onPress={navigation.goBack}>
          <AntDesign name="left" size={24} color="black" />
          <TextoButtonBack>Voltar</TextoButtonBack>
        </ButtonBack>
        <TitleHeader Caderno>{props.NomeCaderno}</TitleHeader>
        <IconHeader1>
          <Feather name="settings" size={24} color="black" />
        </IconHeader1>
        <IconHeader2>
          <Octicons name="search" size={24} color="black" />
        </IconHeader2>
      </Header>
      <FlatList navigation={navigation} />
    </>
  );
};
