import React from "react";
import Title from "../Titulosynovedades/Title";

const About = ({
  text = "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava ",
}) => {
  // El texto en un futuro se obtendra desde una API
  return (
    <>
      <Title title="Nosotros" />
      <main>
        <p>{text}</p>
      </main>
    </>
  );
};

export default About;
