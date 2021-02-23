import React from "react";

import useDimensions from "../../hooks/useDimensions";

import Header from "../../core/Header";

import {
  AuthorContainer,
  AuthorPicture,
  AuthorText,
  Container,
  EmptyListText,
  EmptyListTitle,
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

export function ConjuntoAnotacoesPresentational(props) {
  const dimensions = useDimensions();

  const tileSize = dimensions.window.width / 2 - 16 - 12;

  const data = [
    {
      title: "Bruh 1",
      description: "Esse é um caderno Bruh 1 sobre o mundo dos bruhs",
    },
    {
      title: "Bruh 2",
      description:
        "Esse é outro caderno da classe Bruh sobre o mundo dos bruhs",
    },
  ];

  const headerProps = {
    title: "🖤 El Caderno 🖤",
    leftButtons: [
      {
        icon: "md-close",
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
          renderItem={(props) => <Tile tileSize={tileSize} {...props} />}
        />
      </Wrapper>
    </Container>
  );
}

const Tile = ({ item, tileSize }) => (
  <TileContainer tileSize={tileSize}>
    <TileHeader>
      <TileHeaderText>{item.title}</TileHeaderText>
    </TileHeader>
    <TileContent>
      <TileDescription>{item.description}</TileDescription>
    </TileContent>
    <TileFooter>
      <RatingTextContainer>
        <RatingIcon />
        <RatingValue>4,75</RatingValue>
      </RatingTextContainer>
      <AuthorContainer>
        <AuthorText>Por:</AuthorText>

        <AuthorPicture
          source={{
            uri:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fednaldo-pereira%2Fimages%2F5%2F53%2FEdnaldo_Pereira.jpg%2Frevision%2Flatest%3Fcb%3D20160615234814%26path-prefix%3Dpt-br&f=1&nofb=1",
          }}
          defaultSource={Images.defaultUser}
        />
        <AuthorText>Ednaldo Pereira</AuthorText>
      </AuthorContainer>
    </TileFooter>
  </TileContainer>
);
