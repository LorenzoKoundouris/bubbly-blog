// libs
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// components
import Header from "./Header";

const theme = {
  primaryColour: "#f2e7e5",
  secondaryColour: "#dcb493",
  tertiaryColour: "#000",
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
  body {
    padding: 0;
    margin: 0;
    * {
      padding: 0;
      margin: 0;
    }
    font-family: sans-serif;
    color: ${theme.fontColour};
  }
`;

// styles
const StyledPage = styled.div`
  position: relative;
  background: ${(props) => props.theme.backgroundColour};
`;

export default Page;
