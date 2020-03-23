// libs
import styled from "styled-components";
import LinkItem from "./LinkItem";
import Title from "./Title";
import BurgerIcon from "./BurgerMenu";

function Header() {
  return (
    <StyledHeader>
      <MobileView id="mobile-view">
        <StyledMenu>
          <BurgerIcon />
        </StyledMenu>
        <Title />
      </MobileView>

      <DesktopView id="desktop-view">
        <LinkItem href="/">HOME</LinkItem>
        <LinkItem href="/">ABOUT</LinkItem>
        <LinkItem href="/">CONTACT</LinkItem>
      </DesktopView>
    </StyledHeader>
  );
}

// styles
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 50px;
  /* TODO set rgba in theme as well as hex */
  background: rgba(210, 199, 187, 0.5);
  /* justify-content: flex-end; */
  color: ${(props) => props.theme.tertiaryColour};
  font-weight: bold;
`;

const MobileView = styled.div`
  display: flex;

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const StyledMenu = styled.div`
  position: absolute;
  left: 0;
  padding: 15px;
`;

const DesktopView = styled.div`
  display: none;

  @media screen and (min-width: 500px) {
    display: flex;

    & > * {
      margin: 0 24px;
    }
  }
`;

export default Header;
