import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  a {
      text-decoration : none;
      color : inherit;
      color: #333;
  }

  body {
    max-width: 640px;
    margin:0 auto;
  }
`;

export default GlobalStyles;
