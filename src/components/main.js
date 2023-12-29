import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import theme from "../styles/theme";

function Main(props) {
  let navigate = useNavigate();

  return (
    <Container>
      <TextCinainer>
        <p>너의 MBTI가 궁금해~</p>
        <h2>
          <span className="colorPoint">MBTI</span>
          <br /> 테스트
        </h2>
      </TextCinainer>

      <ImageContainer>
        <img src={"/images/emoji-happy.png"} alt="이미지" />
      </ImageContainer>
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate("/testpage");
            props.setEI(0);
            props.setSN(0);
            props.setTF(0);
            props.setJP(0);
          }}
          color={`${theme.subColor}`}
        >
          테스트 시작하기
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.main};
  height: 100vh;
  box-sizing: border-box;

  padding: 100px 30px;

  .colorPoint {
    color: ${theme.subColor};
  }
`;

const TextCinainer = styled.div`
  text-align: center;

  p {
    font-family: "Gamja Flower", sans-serif;
    font-size: 24px;
    font-style: italic;

    animation: text1 2s forwards;
    opacity: 0;
    transform: translateY(10px);

    @keyframes text1 {
      0% {
        opacity: 0%;
      }
      100% {
        opacity: 100%;
        transform: translateY(0px);
      }
    }
  }

  h2 {
    font-family: "Gasoek One", sans-serif;
    font-size: 90px;
    line-height: 90px;
    letter-spacing: 2px;
    font-weight: 400;

    animation: text2 2s 0.4s forwards;
    opacity: 0;
    transform: translateY(10px);

    @keyframes text2 {
      0% {
        opacity: 0%;
      }
      100% {
        opacity: 100%;
        transform: translateY(0px);
      }
    }
  }
`;

const ImageContainer = styled.div`
  margin-top: 80px;
  text-align: center;
  height: 300px;

  img {
    width: 200px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;

export default Main;
