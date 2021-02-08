import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dimensions, StatusBar } from 'react-native';

import {Header,TitleHeader, IconHeader1, IconHeader2, ButtonBack, TextoButtonBack} from "../../core/Header.js";
import {Caderno, HeaderCaderno,TitleHeaderCaderno,BottomCaderno, Icon} from "../../core/Caderno.js";
import {ButtonFab} from "../../core/ButtonFab.js";
import {AntDesign, Ionicons, Feather, Octicons } from '@expo/vector-icons';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');


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

  return (
    <Wrapper>
      <StyledFlatList
        data={showTile ? tiles : []}
        renderItem={({ item: title }) => (
          <Tile title={title} tileSize={tileSize} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          marginLeft: 16,
          marginRight: 16,
          justifyContent: 'space-between',
        }}
        keyExtractor={(data, index) => index.toString()}
      />
      <ButtonFab onPress={addTile}><Feather name="plus" size={30} color="white" /></ButtonFab>
    </Wrapper>
  );
}

const Tile = ({ title, tileSize }) => (
      <Caderno Caderno tileSize={tileSize}>
        <HeaderCaderno Caderno>
          <TitleHeaderCaderno >{title}</TitleHeaderCaderno>
        </HeaderCaderno>
        <BottomCaderno>
          <Icon>
            <Ionicons name="document-text" size={24} color="white" />
          </Icon>
        </BottomCaderno>
      </Caderno>
);

const Wrapper = styled.SafeAreaView`
  height: 90%;
  width: 100%;
  position: relative;

`;

const StyledFlatList = styled.FlatList`
  width: 100%;
  height: 100%;
`;

const TelaCaderno = (props) => (
  <>
    <Header>
      <ButtonBack>
        <AntDesign name="left" size={24} color="black" />
          <TextoButtonBack>Voltar</TextoButtonBack>
        </ButtonBack>
        <TitleHeader Caderno>{props.NomeCaderno}</TitleHeader>
        <IconHeader1><Feather name="settings" size={24} color="black" /></IconHeader1>
        <IconHeader2><Octicons name="search" size={24} color="black" /></IconHeader2>
    </Header>
      <FlatList />
  </>
);


export default TelaCaderno;
