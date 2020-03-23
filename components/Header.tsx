// libs
import styled from "styled-components";
import LinkItem from "./LinkItem";

function Header() {
  return (
    <StyledHeader>
      <LinkItem href="/">HOME</LinkItem>
      <LinkItem href="/">ABOUT</LinkItem>
      <LinkItem href="/">CONTACT</LinkItem>
    </StyledHeader>
  );
}

// styles
const StyledHeader = styled.div`
  display: flex;
  height: 85px;
  /* TODO set rgba in theme as well as hex */
  background: rgba(210, 199, 187, 0.5);
  justify-content: flex-end;
  color: ${(props) => props.theme.tertiaryColour};
  font-weight: bold;

  & > * {
    margin: 0 24px;
  }
`;

export default Header;
