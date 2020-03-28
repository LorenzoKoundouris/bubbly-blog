// libs
import styled from "styled-components";
import Link, { LinkProps } from "next/link";

interface ILinkProps extends LinkProps {
  children: string | JSX.Element;
}

function LinkItem({ children, ...other }: ILinkProps) {
  return (
    <Link {...other}>
      <StyledAnchorTag>{children}</StyledAnchorTag>
    </Link>
  );
}

// styles
const StyledAnchorTag = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export default LinkItem;
