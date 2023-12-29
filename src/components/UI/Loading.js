import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import theme from "../../styles/theme";
import { styled } from "styled-components";

function Loading() {
  return (
    <Container>
      <ClipLoader color="#3fbb18" size={120} />
      <p className="text">Loading</p>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.main};
  height: 100vh;
  box-sizing: border-box;

  padding: 150px 30px;
  text-align: center;

  .text {
    margin-top: 20px;
    color: #333;
    font-weight: 500;
    font-size: 14px;
  }
`;

export default Loading;
