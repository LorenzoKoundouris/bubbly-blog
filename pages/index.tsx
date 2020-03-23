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

const StyledTitle = styled.div`
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
  }
`;

const Panel = styled.div`
  height: 500px;
  background: #dae3de;
`;
