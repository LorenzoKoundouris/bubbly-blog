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
          <MyTitle />
          <TitleBackgroundImg src="static/img/brush-stroke.png" />
        </StyledTitle>

        <Hero>
          <HeroImage src="static/img/st-paul.jpg" />
          <TextBlock>
            <h2>ABOUT ME</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ButtonContainer>
              <button>Read more</button>
            </ButtonContainer>
          </TextBlock>
        </Hero>

        <LatestPosts>
          <h2>Latest Posts</h2>

          <ArticleGrid>
            <Article>
              <img src="static/img/maria.jpg" />
              <TextContainer>
                <p>
                  HEAD IN THE CLOUDS AT SKY GARDEN
                  <span>12 Jan 20</span>
                </p>
              </TextContainer>
            </Article>
            <Article>
              <img src="static/img/sofa.jpg" />
              <TextContainer>
                <p>
                  MATCHING COLOURS IN YOUR NEW HOME
                  <span>12 Jan 20</span>
                </p>
              </TextContainer>
            </Article>
            <Article>
              <img src="static/img/coffee-1.jpg" />
              <TextContainer>
                <p>
                  HOW TO WORK FROM HOME EFFICIENTLY
                  <span>12 Jan 20</span>
                </p>
              </TextContainer>
            </Article>
            <Article>
              <img src="static/img/tower-bridge.jpg" />
              <TextContainer>
                <p>
                  TOP 10 PLACES TO VISIT IN LONDON
                  <span>12 Jan 20</span>
                </p>
              </TextContainer>
            </Article>
          </ArticleGrid>
        </LatestPosts>
      </Layout>
    );
  }
}

export default Index;

const MyTitle = styled(Title)`
  z-index: 2;

  @media screen and (min-width: 720px) {
    font-size: 50px;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media screen and (min-width: 720px) {
    max-width: 1250px;
    margin: 0 auto 200px auto;
  }
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

  @media screen and (min-width: 720px) {
    min-height: 180px;
  }
`;

const TitleBackgroundImg = styled.img`
  max-width: 200px;
  z-index: 1;

  @media screen and (min-width: 720px) {
    max-width: 300px;
  }
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

  @media screen and (min-width: 720px) {
    justify-content: flex-start;
    height: 500px;
  }
`;

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 0 35%;

  @media screen and (min-width: 720px) {
    width: 55%;
  }
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

  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 10px;
  }

  h2 {
    font-size: 15px;
    margin-bottom: 4px;
  }

  @media screen and (min-width: 720px) {
    background-color: ${props => props.theme.primaryColour};
    top: auto;
    left: auto;
    right: 0;
    margin: 0;
    padding: 32px;

    p {
      font-size: 14px;
    }

    h2 {
      font-size: 23px;
      margin-bottom: 16px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-top: 16px;
    background-color: ${props => props.theme.fontColour};
    color: ${props => props.theme.primaryColour};
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 10px;
    border: none;
    font-weight: 600;

    @media screen and (min-width: 720px) {
      margin-top: 32px;
      padding: 12px 20px;
      font-size: 14px;
    }
  }
`;

const LatestPosts = styled.section`
  margin-top: 20px;
  padding: 20px 8px;
  background: linear-gradient(to top, #e3ddd9 0%, #fff 30%);

  h2 {
    font-size: 18px;
  }

  @media screen and (min-width: 720px) {
    margin-top: 40px;

    h2 {
      font-size: 24px;
    }
  }
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

  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    grid-template-rows: 250px;
    overflow: hidden;
  }
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 12px 12px 0 12px;
    margin: 26px;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 14px;
    font-weight: 600;

    span {
      margin-top: 12px;
      font-weight: 300;
      font-size: 12px;
    }
  }
`;
