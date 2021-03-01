import React from "react";

import useDimensions from "../../hooks/useDimensions";

import Header from "../../core/Header";

import {
  AuthorContainer,
  AuthorPicture,
  AuthorText,
  Container,
  RatingIcon,
  RatingTextContainer,
  RatingValue,
  StyledFlatList,
  TileContainer,
  TileContent,
  TileDescription,
  TileFooter,
  TileHeader,
  TileHeaderText,
  Wrapper,
} from "./styles";

import { Images } from "../../../config";
import { formatRating } from "../../../utils/format";

export function ConjuntoAnotacoesPresentational({
  goBack,
  data,
  title,
  loading,
  retrieveData,
  openTile,
}) {
  const dimensions = useDimensions();

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const headerProps = {
    title: title,
    leftButtons: [
      {
        icon: "md-close",
        onPress: goBack,
      },
    ],
    rightButtons: [
      {
        icon: "md-search-outline",
      },
    ],
  };

  return (
    <Container>
      <Wrapper>
        <Header {...headerProps} />
        <StyledFlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          refreshing={loading}
          onRefresh={retrieveData}
          renderItem={(props) => (
            <Tile tileSize={tileSize} openTile={openTile} {...props} />
          )}
        />
      </Wrapper>
    </Container>
  );
}

const Tile = ({ item, tileSize, openTile }) => (
  <TileContainer onPress={() => openTile(item)} tileSize={tileSize}>
    <TileHeader>
      <TileHeaderText>{item.title}</TileHeaderText>
    </TileHeader>
    <TileContent>
      <TileDescription>{item.description}</TileDescription>
    </TileContent>
    <TileFooter>
      <RatingTextContainer>
        <RatingIcon />
        <RatingValue>{formatRating(item.rating)}</RatingValue>
      </RatingTextContainer>
      <AuthorContainer>
        <AuthorText>Por:</AuthorText>

        <AuthorPicture
          source={{
            uri: item.author.profile_picture,
          }}
          defaultSource={Images.defaultUser}
        />
        <AuthorText>{item.author.name}</AuthorText>
      </AuthorContainer>
    </TileFooter>
  </TileContainer>
);
