import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import theme from "../../styles/theme";
import { styled } from "styled-components";

function Loading() {
  return (
    <Container>
      <ClipLoader color="#3fbb18" size={120} />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.main};
  height: 100vh;
  box-sizing: border-box;

  padding: 120px 30px;
  text-align: center;
`;

export default Loading;
