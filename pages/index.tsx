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
            <Title size="medium" />
            <Image src="static/img/brush-stroke.png" />
          </StyledTitle>
        </Hero>
      </>
    );
  }
}

export default Index;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 20px;

  & > * {
    position: absolute;
  }
`;

const Image = styled.img`
  max-width: 200px;
  z-index: -1;
`;
