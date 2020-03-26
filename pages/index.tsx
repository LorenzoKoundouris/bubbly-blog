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
      <Layout>
        <StyledTitle>
          <Title size="medium" />
          <TitleBackgroundImg src="static/img/brush-stroke.png" />
        </StyledTitle>

        <Hero>
          <HeroImage src="static/img/st-paul.jpg" />
          <TextBlock>
            <h2>ABOUT ME</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonContainer>
              <button>Read more</button>
            </ButtonContainer>
          </TextBlock>
        </Hero>

        <LatestPosts>
          <h3>Latest Posts</h3>
        </LatestPosts>
      </Layout>
    );
  }
}

export default Index;

const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 20px;
`;

const StyledTitle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70px;
  position: relative;

  & > * {
    position: absolute;
  }
`;

const TitleBackgroundImg = styled.img`
  max-width: 200px;
  z-index: 1;
`;

const Hero = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 180px;

  @media screen and (min-width: 414px) {
    height: 200px;
  }
`;

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 8px 12px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  width: 45%;
  left: 0;
  top: 0;
  font-size: 10px;

  h2 {
    margin-bottom: 4px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-top: 16px;
    background-color: ${props => props.theme.secondaryColour};
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 10px;
    border: none;
    font-weight: 600;
  }
`;

const LatestPosts = styled.section`
  margin: 8px;
`;
