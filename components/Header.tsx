// libs
import styled from "styled-components";
import Link from "next/link";

function Header() {
  return (
    <StyledHeader>
      <LeftMenu>
        <Link href="/">Home</Link>
      </LeftMenu>
    </StyledHeader>
  );
}

// styles
const StyledHeader = styled.div`
  display: flex;
  height: 85px;
  background: ${(props) => props.theme.primaryColour};
  justify-content: space-between;
`;

const LeftMenu = styled.div`
  display: flex;
  cursor: pointer;
`;

export default Header;
