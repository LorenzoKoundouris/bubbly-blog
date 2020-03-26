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

          <ArticleGrid>
            <Article>
              <img src="static/img/tower-bridge.jpg" />
              <TextContainer>
                <p>CINEMA IS A MATTER OF WHAT'S IN THE FRAME AND WHAT'S OUT</p>
              </TextContainer>
            </Article>
            <Article>
              <img src="static/img/tower-bridge.jpg" />
              <TextContainer>
                <p>CINEMA IS A MATTER OF WHAT'S IN THE FRAME AND WHAT'S OUT</p>
              </TextContainer>
            </Article>
            <Article>
              <img src="static/img/tower-bridge.jpg" />
              <TextContainer>
                <p>CINEMA IS A MATTER OF WHAT'S IN THE FRAME AND WHAT'S OUT</p>
              </TextContainer>
            </Article>
          </ArticleGrid>
        </LatestPosts>
      </Layout>
    );
  }
}

export default Index;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70px;
  position: relative;
  background-color: ${props => props.theme.backgroundColour};

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
  margin-top: 20px;
  background-color: ${props => props.theme.backgroundColour};

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
  margin: 20px 0 8px 8px;
  background-color: ${props => props.theme.backgroundColour};
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: column;
  grid-auto-columns: 180px;
  grid-template-rows: 200px;
  overflow-x: scroll;
  width: 100%;
  margin-top: 20px;
`;

const Article = styled.div`
  display: flex;
  position: relative;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;

  p {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 12px;
    margin: 26px;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }
`;
