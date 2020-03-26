// libs
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// components
import Header from "./Header";

const theme = {
  primaryColour: "#d5ccc6",
  secondaryColour: "#d8aea1",
  tertiaryColour: "#2b8f8c",
  backgroundColour: "#fff",
  fontColour: "#000",
  highlightColour: "#29563a"
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
    color: ${theme.fontColour};
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;

// styles
const StyledPage = styled.div`
  position: relative;
  background: ${props => props.theme.backgroundColour};
`;

export default Page;
