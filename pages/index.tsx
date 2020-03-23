import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

interface IProps {}

class Index extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Hero>
          <StyledTitle>
            <Title size="large" />
          </StyledTitle>
        </Hero>
        <Panel>
          <StyledImage src="/static/img/leaf.png" />
        </Panel>
      </>
    );
  }
}

export default Index;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  @media screen and (min-width: 500px) {
    height: 150px;
  }
`;

const StyledTitle = styled.div`
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Panel = styled.div`
  height: 30vh;
  background: #dae3de;
`;
