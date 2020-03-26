// libs
import { Component } from "react";
import styled from "styled-components";

interface IProps {
  size?: "small" | "medium" | "large";
}

const defaultTitle = "Bubbly Blog";

class Title extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { children, size = "medium" } = this.props;

    return (
      <StyledTitle className={size}>{children || defaultTitle}</StyledTitle>
    );
  }
}

const StyledTitle = styled.h1`
  /* font-family: "Parisienne", cursive; */
  font-family: "Liu Jian Mao Cao", cursive;
  color: ${({ theme }) => theme.fontColour};
  z-index: 2;

  &.small {
    font-size: 20px;
  }
  &.medium {
    font-size: 35px;
  }
  &.large {
    font-size: 50px;
  }
`;

export default Title;
