import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { resultData } from "../mock/result";
import styled from "styled-components";
import theme from "../styles/theme";
import Loading from "./UI/Loading";
import Button from "./UI/Button";

function Resultpage({ MBTI, setMBTI }) {
  let data = resultData;

  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const LoadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(LoadingTimeout);
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  if (MBTI === undefined || data[MBTI.join("")] === undefined) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <Container>
      <Title>
        당신의 유형은 <br /> {data[MBTI.join("")].title}입니다.
      </Title>
      <Content>{data[MBTI.join("")].content}</Content>
      <Button
        color={`${theme.subColor}`}
        onClick={() => {
          navigate("/");
          setMBTI("");
        }}
      >
        다시하기
      </Button>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.main};
  height: 100vh;
  box-sizing: border-box;

  padding: 90px 30px;
`;

const Title = styled.div`
  font-size: ${theme.fontMedium};
  font-weight: 600;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: ${theme.fontSmall};
  line-height: 26px;
  letter-spacing: 0.5px;

  word-break: keep-all;
`;

export default Resultpage;
