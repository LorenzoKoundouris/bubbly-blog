import React from "react";
import styled from "styled-components";

interface IProps {}

class Index extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Hero>
          <Title>Bubbly Blog</Title>
        </Hero>
        <Panel></Panel>
      </>
    );
  }
}

export default Index;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

const Title = styled.h1`
  font-family: "Parisienne", cursive;
  color: ${({ theme }) => theme.tertiaryColour};
  font-size: 50px;
`;

const Panel = styled.div`
  height: 500px;
  background: #dae3de;
`;
