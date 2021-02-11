import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dimensions, StatusBar } from 'react-native';
import {AntDesign, Ionicons, Feather, Octicons } from '@expo/vector-icons';

import {Header,TitleHeader, IconHeader1, IconHeader2, ButtonBack, TextoButtonBack} from "../../core/Header.js";
import {Text,AddButton,Anotacao, HeaderAnotacao,TitleHeaderAnotacao,BottomAnotacao, Icon} from "../../core/Anotacao.js";
import {ButtonFab} from "../../core/ButtonFab.js";


const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Wrapper = styled.SafeAreaView`
  height: 90%;
  width: 100%;
  position: relative;
  padding-left: 17px;

`;

const StyledFlatList = styled.FlatList`
  width: 100%;
  height: 100%;
`;

function FlatList() {
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

  // Format: (width - 2 * externalMargin - numCols * spaceBetween / 2) / numCols

  const tileSize = dimensions.window.width / 2 - 16 - 12;
  const tileSize2 = dimensions.window.height / 2 - 16 - 12;

  const [tiles, setTiles] = useState(['Tile 1', 'Tile 2']);

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
          <Tile title={title} tileSize={tileSize} tileSize2={tileSize2} />
        )}
        keyExtractor={(data, index) => index.toString()}
        >
      </StyledFlatList>
      <AddButton onPress={addTile} tileSize={tileSize} tileSize2={tileSize2}>
        <Feather name="plus" size={30} color="white" />
        <Text>Nova Anotação</Text>
      </AddButton>
    </Wrapper>
  );
}

const Tile = ({ title, tileSize, tileSize2 }) => (
      <Anotacao tileSize={tileSize} tileSize2={tileSize2} >
        <HeaderAnotacao bordercolor={'#63E9E9'}>
          <TitleHeaderAnotacao >{title}</TitleHeaderAnotacao>
        </HeaderAnotacao>
        <BottomAnotacao>
          <Icon>
            <Ionicons name="document-text" size={24} color="white" />
          </Icon>
        </BottomAnotacao>
      </Anotacao>
);


const TelaCaderno = (props) => (
  <>
    <Header>
      <ButtonBack>
        <AntDesign name="close" size={24} color="black" />
        </ButtonBack>
        <TitleHeader Caderno>{props.NomeAnotacao}</TitleHeader>
        <IconHeader1><Octicons name="search" size={24} color="black" /></IconHeader1>
    </Header>
      <FlatList />
  </>
);




export default TelaCaderno;
