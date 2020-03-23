// libs
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// components
import Header from "./Header";

const theme = {
  primaryColour: "#d2c7bb",
  secondaryColour: "#dae3de",
  tertiaryColour: "#2b8f8c",
  backgroundColour: "#fff",
  fontColour: "#000",
  highlightColour: "#29563a",
};

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledPage>
            <Header />
            {this.props.children}
          </StyledPage>
        </>
      </ThemeProvider>
    );
  }
}

// global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Parisienne&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap');

  body {
    padding: 0;
    margin: 0;
    * {
      padding: 0;
      margin: 0;
    }
    font-family: sans-serif;
    color: ${theme.fontColour};
    background-image: url("static/img/background.jpg");
    background-repeat: repeat;
    height: 5000px;
  }
`;

// styles
const StyledPage = styled.div`
  position: relative;
  /* background: ${(props) => props.theme.backgroundColour}; */
`;

export default Page;
