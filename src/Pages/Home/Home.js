import React, { useState } from "react";
import SliderHome from "../../Components/Slides/SliderHome";
import News from "../../Components/News/News";
import BackofficeHeader from "../../Components/Backoffice/BackofficeHeader";

const Home = () => {
  const [welcomeText, setWelcomeText] = useState("Bienvenido");

  return (
    <>
      <BackofficeHeader></BackofficeHeader>
      <h2>{welcomeText}</h2>
      <SliderHome />
      <News />
    </>
  );
};

export default Home;
