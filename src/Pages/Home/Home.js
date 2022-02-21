import React, { useState } from "react";
import SliderHome from "../../Components/Slides/SliderHome";
import News from "../../Components/News/News";

const Home = () => {
  const [welcomeText, setWelcomeText] = useState("Bienvenido"); //eslint-disable-line

  return (
    <div className="home">
      <h1 className="home__title">{welcomeText}</h1>
      <SliderHome />
      <News />
    </div>
  );
};

export default Home;
