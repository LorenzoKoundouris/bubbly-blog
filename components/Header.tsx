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
  background: ${(props) => props.theme.primaryColour};
  justify-content: center;

  & > * {
    margin: 0 24px;
  }
`;

export default Header;
