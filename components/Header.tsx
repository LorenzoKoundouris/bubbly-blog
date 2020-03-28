// libs
import styled from "styled-components";
import LinkItem from "./LinkItem";
import BurgerIcon from "./BurgerMenu";

function Header() {
  return (
    <StyledHeader>
      <MobileView id="mobile-view">
        <BurgerIcon />
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
  height: 40px;
  background-color: ${(props) => props.theme.primaryColour};
  font-weight: bold;
`;

const MobileView = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  padding: 8px;

  @media screen and (min-width: 720px) {
    display: none;
  }
`;

const DesktopView = styled.div`
  display: none;

  @media screen and (min-width: 720px) {
    display: flex;

    & > * {
      margin: 0 24px;
    }
  }
`;

export default Header;
