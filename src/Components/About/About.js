import React, { useEffect } from "react";
import Title from "../Titulosynovedades/Title";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUs } from "../../Redux/reducers/usSlice";
import SocialMedia from "./SocialMedia";

const About = ({
  text = "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava ",
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogged = useSelector((state) => state.authReducer.userIsLogged);
  const info = useSelector((state) => state.usReducer.info);

  useEffect(() => {
    if (!isLogged) {
      history.push("/login");
    }
    dispatch(getUs());
  }, []);
  // El texto en un futuro se obtendra desde una API
  return (
    <>
      <Title title="Nosotros" />
      <main>
        <p>{info.name}</p>
        <p>{info.short_description}</p>
      </main>
      <SocialMedia />
    </>
  );
};

export default About;
