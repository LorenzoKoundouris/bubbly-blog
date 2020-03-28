// libs
import { Component } from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
}

const defaultTitle = "Bubbly Blog";

class Title extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { children, className } = this.props;

    return (
      <StyledTitle className={className || ""}>
        {children || defaultTitle}
      </StyledTitle>
    );
  }
}

const StyledTitle = styled.h1`
  /* font-family: "Parisienne", cursive; */
  font-family: "Liu Jian Mao Cao", cursive;
  color: ${({ theme }) => theme.fontColour};
`;

export default Title;
