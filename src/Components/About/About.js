import React, { useState } from "react";
import Title from "../Titulosynovedades/Title";

const About = () => {
  const [about, setAbout] = useState("hola main section de Nosotros");
  return (
    <div>
      <Title title="Nosotros" />
      <main>{about}</main>
    </div>
  );
};

export default About;
