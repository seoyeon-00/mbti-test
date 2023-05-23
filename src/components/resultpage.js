import { useNavigate } from "react-router-dom";

function Resultpage(props) {

  let data = {
    ESTJ: {title: "Sdfsdf", content: "sdfsdff"},
    ESFJ: {title: "Sdfsdf", content: "sdfsdff"},
    ENFJ: {title: "Sdfsdf", content: "sdfsdff"},
    ENTJ: {title: "Sdfsdf", content: "sdfsdff"},
    ESTP: {title: "Sdfsdf", content: "sdfsdff"},
    ESFP: {title: "Sdfsdf", content: "sdfsdff"},
    ENFP: {title: "Sdfsdf", content: "sdfsdff"},
    ENTP: {title: "Sdfsdf", content: "sdfsdff"},
    ISTJ: {title: "Sdfsdf", content: "sdfsdff"},
    ISFJ: {title: "Sdfsdf", content: "sdfsdff"},
    INFJ: {title: "Sdfsdf", content: "sdfsdff"},
    INTJ: {title: "Sdfsdf", content: "sdfsdff"},
    ISTP: {title: "Sdfsdf", content: "sdfsdff"},
    ISFP: {title: "Sdfsdf", content: "sdfsdff"},
    INFP: {title: "Sdfsdf", content: "sdfsdff"},
    INTP: {title: "Sdfsdf", content: "sdfsdff"},
  }

  let navigate = useNavigate();
  return (
    <div>
      <div>{data[PaymentResponse.MBTI].title}</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        다시하기
      </button>
    </div>
  );
}

export default Resultpage;
