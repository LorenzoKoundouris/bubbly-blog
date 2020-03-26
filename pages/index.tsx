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
        <StyledImage src="https://i.ya-webdesign.com/images/palm-print-green-plants-white-background-png-4.png" />
        <Panel>
          {/* <FramedImage src="/static/img/coffee-plant.jpg" />
          <Poster>
            <h2>ABOUT ME</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>MORE ABOUT ME</button>
          </Poster>*/}
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
  object-fit: contain;
`;

// const FramedImage = styled(StyledImage)`
//   border: 10px solid white;
//   height: 400px;
//   margin-top: 100px;
// `;

// const Poster = styled.div`
//   padding: 50px;
//   margin: 50px;
//   width: 100%;
//   background: white;

//   h2 {
//     margin-bottom: 20px;
//   }

//   button {
//     font-weight: 600;
//     color: white;
//     font-size: 14px;
//     padding: 10px 20px;
//     margin-top: 20px;
//     background-color: rgba(199, 190, 182, 1);
//   }
// `;

const Panel = styled.div`
  display: flex;
  position: relative;
  height: 30vh;
  background: #dae3de;
`;
