import React from "react";

import styled from "styled-components";

const App = () => (
  <>
    <Wrapper>
      <Title>Hello, Fellas!</Title>
      <Content>This is the test screen.</Content>
    </Wrapper>
  </>
);

const Wrapper = styled.SafeAreaView`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background-color: #fef1f1;
`;

const Title = styled.Text`
  color: #1c1c1c;
  font-size: 24px;
  margin-bottom: 8px;
`;

const Content = styled.Text`
  color: #2e2e2e;
  font-size: 16px;
`;

export default App;
