import React from "react";
import styled from "styled-components";

interface IProps {}

class Index extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Title>My page</Title>
      </>
    );
  }
}

export default Index;

const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColour};
  font-size: 50px;
`;
