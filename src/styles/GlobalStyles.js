import { createGlobalStyle } from "styled-components";
import { fonts } from "../fonts/font";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  ${fonts}

  a {
      text-decoration : none;
      color : inherit;
      color: #333;
  }

  ul, li {
    list-style: none;
  }

  body {
    max-width: 640px;
    margin:0 auto;
  }
`;

export default GlobalStyles;
