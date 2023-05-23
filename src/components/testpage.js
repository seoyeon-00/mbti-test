import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Testpage(props) {
  let navigate = useNavigate();
  let [num, setNum] = useState(1);
  let [data] = useState({
    1: {
      ques: "EI 성향 문제입니다.",
      ans1: "E성향 문제입니다.",
      ans2: "I성향 문제입니다.",
    },
    2: {
      ques: "EI 성향 문제입니다.",
      ans1: "E성향 문제입니다.",
      ans2: "I성향 문제입니다.",
    },
    3: {
      ques: "EI 성향 문제입니다.",
      ans1: "E성향 문제입니다.",
      ans2: "I성향 문제입니다.",
    },
    4: {
      ques: "SN 성향 문제입니다.",
      ans1: "S성향 문제입니다.",
      ans2: "N성향 문제입니다.",
    },
    5: {
      ques: "SN 성향 문제입니다.",
      ans1: "S성향 문제입니다.",
      ans2: "N성향 문제입니다.",
    },
    6: {
      ques: "SN 성향 문제입니다.",
      ans1: "S성향 문제입니다.",
      ans2: "N성향 문제입니다.",
    },
    7: {
      ques: "TF 성향 문제입니다.",
      ans1: "T성향 문제입니다.",
      ans2: "F성향 문제입니다.",
    },
    8: {
      ques: "TF 성향 문제입니다.",
      ans1: "T성향 문제입니다.",
      ans2: "F성향 문제입니다.",
    },
    9: {
      ques: "TF 성향 문제입니다.",
      ans1: "T성향 문제입니다.",
      ans2: "F성향 문제입니다.",
    },
    10: {
      ques: "JP 성향 문제입니다.",
      ans1: "J성향 문제입니다.",
      ans2: "P성향 문제입니다.",
    },
    11: {
      ques: "JP 성향 문제입니다.",
      ans1: "J성향 문제입니다.",
      ans2: "P성향 문제입니다.",
    },
    12: {
      ques: "JP 성향 문제입니다.",
      ans1: "J성향 문제입니다.",
      ans2: "P성향 문제입니다.",
    },
  })


  return (
    <div>
      <div>{num}번 문제 입니다.</div>
      <div>{data[num].ques}</div>
      <button
        onClick={() => {
          setNum((num) => num + 1);
          if(num <= 3){
            props.setEI(props.EI + 1);
          } else if( num >= 4 && num <= 6){
            props.setSN(props.SN + 1);
          } else if( num >= 7 && num <= 9){
            props.setTF(props.TF + 1);
          } else if( num >= 10 && num <= 12){
            props.setJP(props.JP + 1);
          } 
          if(num ===12){
            navigate("/resultpage");
          }
        }}
      >
        {data[num].ans1}
      </button>
      <button
        onClick={() => {
          setNum((num) => num - 1);
          if(num <= 3){
            props.setEI(props.EI - 1);
          } else if( num >= 4 && num <= 6){
            props.setSN(props.SN - 1);
          } else if( num >= 7 && num <= 9){
            props.setTF(props.TF - 1);
          } else if( num >= 10 && num <= 12){
            props.setJP(props.JP - 1);
          }
          if(num ===12){
            navigate("/resultpage");
          }
        }}
      >
        {data[num].ans2}
      </button>
    </div>
  );
}

export default Testpage;
