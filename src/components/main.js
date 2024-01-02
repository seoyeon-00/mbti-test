import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import theme from "../styles/theme";
import { kakaoShare } from "../utils/kakaoShare";

function Main(props) {
  let navigate = useNavigate();

  const copyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://funny-faloodeh-79b256.netlify.app/"
      );
      alert("클립보드에 링크가 복사되었어요.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TextCinainer>
        <p>너의 MBTI가 궁금해~</p>
        <h2>
          <span className="colorPoint">이모지로 보는</span>
          <br />
          MBTI 테스트
        </h2>
      </TextCinainer>

      <ImageContainer>
        <img src={"/images/emoji-happy.png"} alt="이미지" />
        <TextBubble1>너 T야? 🤨</TextBubble1>
        <TextBubble2>MBTI 궁금햇🩷</TextBubble2>
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
      <ShareContainer>
        <p>MBTI 테스트 공유하기</p>
        <ul className="share-icon">
          <li>
            <button
              onClick={() =>
                kakaoShare(
                  "https://funny-faloodeh-79b256.netlify.app/",
                  "MBTI 테스트"
                )
              }
            >
              <img
                className="w-12 h-12"
                src={"/images/kakao.png"}
                alt={"카카오톡 공유하기"}
              />
            </button>
          </li>
          <li>
            <button onClick={() => copyClipBoard()}>
              <img src={"/images/link.png"} alt={"링크 공유하기"} />
            </button>
          </li>
        </ul>
      </ShareContainer>
      <FallingContent>
        <div className="emolji">😄</div>
        <div className="emolji">❤️</div>
        <div className="emolji">🥹</div>
        <div className="emolji">😍</div>
        <div className="emolji">🩵</div>
        <div className="emolji">🤩</div>
      </FallingContent>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.main};
  height: 100vh;
  box-sizing: border-box;

  padding: 120px 30px;

  @media screen and (max-width: 420px) {
    padding: 120px 20px;
  }
`;

const TextCinainer = styled.div`
  text-align: center;

  p {
    font-family: "KyoboHand";
    font-size: 28px;
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

    @media screen and (max-width: 420px) {
      font-size: 22px;
    }
  }

  h2 {
    margin-top: 5px;
    font-family: "Cafe24Moyamoya-Face-v1.0";
    font-size: 80px;
    line-height: 70px;
    letter-spacing: -2px;
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

    @media screen and (max-width: 420px) {
      margin-top: -2px;
      font-size: 50px;
      line-height: 45px;
    }
  }

  .colorPoint {
    color: ${theme.subColor};
    font-size: 65px;

    @media screen and (max-width: 420px) {
      font-size: 44px;
    }
  }
`;

const ImageContainer = styled.div`
  margin-top: 80px;
  text-align: center;
  height: 300px;
  position: relative;
  font-family: "KyoboHand";
  font-weight: 600;
  color: #333;

  img {
    width: 200px;
  }

  @media screen and (max-width: 420px) {
    height: 200px;
    img {
      width: 180px;
    }
  }
`;

const TextBubble1 = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;

  width: 150px;
  background: #fff;
  padding: 9px 10px;
  border-radius: 30px;
  border: 2px solid #d9e9ca;

  animation: bubble1 2s 0.8s forwards;
  opacity: 0;
  transform: translateY(10px);

  @keyframes bubble1 {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 420px) {
    top: 20px;
    left: 10px;

    width: 80px;
    padding: 4px 7px;
  }
`;

const TextBubble2 = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;

  width: 180px;
  background: #fff;
  padding: 9px 10px;
  border-radius: 30px;
  border: 2px solid #d9e9ca;

  animation: bubble2 2s 1s forwards;
  opacity: 0;
  transform: translateY(10px);

  @keyframes bubble2 {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 420px) {
    top: 50px;
    right: 0px;

    width: 120px;
    padding: 4px 5px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;
const ShareContainer = styled.div`
  margin-top: 40px;
  text-align: center;

  p {
    font-size: 18px;
    font-weight: 600;

    @media screen and (max-width: 420px) {
      font-size: 15px;
    }
  }

  .share-icon {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  button {
    border: none;
    background-color: transparent;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-3px);
    }
  }

  img {
    width: 70%;
  }
`;
const FallingContent = styled.div`
  .emolji {
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    -webkit-animation-name: snowflakes-fall, snowflakes-shake;
    -webkit-animation-duration: 10s, 3s;
    -webkit-animation-timing-function: linear, ease-in-out;
    -webkit-animation-iteration-count: infinite, infinite;
    -webkit-animation-play-state: running, running;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;

    font-size: 20px;
    opacity: 0.3;

    @-webkit-keyframes snowflakes-fall {
      0% {
        top: -10%;
      }
      100% {
        top: 100%;
      }
    }
    @-webkit-keyframes snowflakes-shake {
      0% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
      50% {
        -webkit-transform: translateX(80px);
        transform: translateX(80px);
      }
      100% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
    }
    @keyframes snowflakes-fall {
      0% {
        top: -10%;
      }
      100% {
        top: 100%;
      }
    }
    @keyframes snowflakes-shake {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(80px);
      }
      100% {
        transform: translateX(0px);
      }
    }
  }

  .emolji:nth-of-type(2) {
    left: 40%;
    -webkit-animation-delay: 1s, 2s;
    animation-delay: 1s, 2s;
  }

  .emolji:nth-of-type(3) {
    left: 60%;
    -webkit-animation-delay: 3s, 2s;
    animation-delay: 3s, 2s;
  }

  .emolji:nth-of-type(4) {
    left: 35%;
    -webkit-animation-delay: 7s, 2s;
    animation-delay: 7s, 2s;
  }

  .emolji:nth-of-type(5) {
    right: 45%;
    -webkit-animation-delay: 3.5s, 3s;
    animation-delay: 3.5s, 3s;
  }

  .emolji:nth-of-type(6) {
    left: 50%;
    -webkit-animation-delay: 6s, 1s;
    animation-delay: 6s, 1s;
  }
`;

export default Main;
