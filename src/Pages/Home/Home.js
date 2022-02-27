import React, { useState } from "react";
import SliderHome from "../../Components/Slides/SliderHome";
import News from "../../Components/News/News";

const Home = () => {
  const [welcomeText, setWelcomeText] = useState("Bienvenido"); //eslint-disable-line

  return (
    <>
      <h2 className="home__welcometext">{welcomeText}</h2>
      <SliderHome />
      <News />
    </>
  );
};

export default Home;
