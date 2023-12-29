import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionData } from "../mock/question";
import styled from "styled-components";
import theme from "../styles/theme";
import TestButton from "./UI/TestButton";

function Testpage(props) {
  let navigate = useNavigate();
  let [num, setNum] = useState(1);
  let [data] = useState(questionData);

  return (
    <Container>
      <div className="num">{num}/ 12</div>
      <Progress num={num}>
        <div className="bar"></div>
      </Progress>
      <div className="curNum">Q{num}</div>
      <div className="question">{data[num].ques}</div>
      <div className="button-box">
        <TestButton
          onClick={() => {
            setNum((num) => num + 1);
            if (num <= 3) {
              props.setEI(props.EI + 1);
            } else if (num >= 4 && num <= 6) {
              props.setSN(props.SN + 1);
            } else if (num >= 7 && num <= 9) {
              props.setTF(props.TF + 1);
            } else if (num >= 10 && num <= 12) {
              props.setJP(props.JP + 1);
            }
            if (num === 12) {
              navigate("/resultpage");
            }
          }}
        >
          {data[num].ans1}
        </TestButton>
        <TestButton
          onClick={() => {
            setNum((num) => num + 1);
            if (num <= 3) {
              props.setEI(props.EI - 1);
            } else if (num >= 4 && num <= 6) {
              props.setSN(props.SN - 1);
            } else if (num >= 7 && num <= 9) {
              props.setTF(props.TF - 1);
            } else if (num >= 10 && num <= 12) {
              props.setJP(props.JP - 1);
            }
            if (num === 12) {
              navigate("/resultpage");
            }
          }}
        >
          {data[num].ans2}
        </TestButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.main};
  height: 100vh;
  box-sizing: border-box;

  padding: 90px 30px;

  .num {
    font-size: ${theme.fontRegular};
  }

  .curNum {
    margin-top: 20px;
    font-size: ${theme.fontLarge};
    font-weight: 600;
    color: ${theme.subColor};
  }

  .question {
    margin-top: 20px;
    font-size: ${theme.fontMedium};
    font-weight: 500;
  }

  .button-box {
    margin-top: 50px;

    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Progress = styled.div`
  margin-top: 20px;

  width: 100%;
  height: 10px;
  background-color: #efefef;
  border-radius: 30px;
  position: relative;
  overflow: hidden;

  .bar {
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${theme.subColor};
    width: ${(props) => `${(props.num / 12) * 100}%`};
    height: 10px;
  }
`;

export default Testpage;
