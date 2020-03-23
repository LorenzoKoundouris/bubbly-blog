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
  font-family: "Parisienne", cursive;
  color: ${({ theme }) => theme.tertiaryColour};

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
