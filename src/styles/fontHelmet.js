import { Helmet } from "react-helmet";

const FontHelmet = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Gasoek+One&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default FontHelmet;
