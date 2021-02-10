import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dimensions, StatusBar } from 'react-native';

import {Header,TitleHeader, IconHeader1, IconHeader2} from "../../core/Header.js";
import {Caderno, HeaderCaderno,TitleHeaderCaderno,BottomCaderno, Icon} from "../../core/Caderno.js";
import FunctionMenu from "../../core/MainMenu.js";
import {Ionicons, Feather, Octicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Wrapper = styled.SafeAreaView`
  height: 90%;
  width: 100%;
  position: relative;

`;

const StyledFlatList = styled.FlatList`
  width: 100%;
  height: 100%;
`;


export default function TelaPrincipal(props){
  const navigation= useNavigation();

  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const [tiles, setTiles] = useState(['Tile 1', 'Tile 2', 'Tile 3']);

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

  return(
  <>
    <Wrapper>
      <Header>
        <TitleHeader >Meus Cadernos</TitleHeader>
        <IconHeader1><Octicons name="search" size={24} color="black" /></IconHeader1>
        <IconHeader2 onPress={addTile} ><Feather name="plus" size={27} color="black" /></IconHeader2>
      </Header>
      <StyledFlatList
        data={showTile ? tiles : []}
        renderItem={({ item: title }) => (
          <Caderno tileSize={tileSize} onPress={ () => navigation.navigate('Caderno') }>
            <HeaderCaderno bordercolor={'#FAFCFC'}>
              <TitleHeaderCaderno >{title}</TitleHeaderCaderno>
            </HeaderCaderno>
            <BottomCaderno>
              <Icon>
                <Ionicons name="journal" size={24} color="white" />
              </Icon>
            </BottomCaderno>
          </Caderno>
        )}
        numColumns={2}
        columnWrapperStyle={{
          marginLeft: 16,
          marginRight: 16,
          justifyContent: 'space-between',
        }}
        keyExtractor={(data, index) => index.toString()}
      />
    </Wrapper>
      <FunctionMenu />
    </>
  );
}
