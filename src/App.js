import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Testpage from "./components/testpage";
import Resultpage from "./components/resultpage";
import GlobalStyles from "./styles/GlobalStyles";
import FontHelmet from "./styles/fontHelmet";

function App() {
  const [EI, setEI] = useState(0);
  const [SN, setSN] = useState(0);
  const [TF, setTF] = useState(0);
  const [JP, setJP] = useState(0);

  let [MBTI, setMBTI] = useState("");

  useEffect(() => {
    let data = [];
    if (EI > 0) {
      data.push("E");
    } else if (EI < 0) {
      data.push("I");
    }
    if (SN > 0) {
      data.push("S");
    } else if (SN < 0) {
      data.push("N");
    }
    if (TF > 0) {
      data.push("T");
    } else if (TF < 0) {
      data.push("F");
    }
    if (JP > 0) {
      data.push("J");
    } else if (JP < 0) {
      data.push("P");
    }

    setMBTI(data);
  }, [EI, SN, TF, JP]);

  console.log(MBTI);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <FontHelmet />
      <Routes>
        <Route
          path="/"
          element={
            <Main setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP} />
          }
        />
        <Route
          path="/testpage"
          element={
            <Testpage
              EI={EI}
              SN={SN}
              TF={TF}
              JP={JP}
              setEI={setEI}
              setSN={setSN}
              setTF={setTF}
              setJP={setJP}
            />
          }
        />
        <Route
          path="/resultpage"
          element={<Resultpage MBTI={MBTI} setMBTI={setMBTI} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
