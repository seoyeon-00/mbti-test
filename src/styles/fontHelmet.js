import { Helmet } from "react-helmet";

const FontHelmet = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Gamja+Flower&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default FontHelmet;
