import React, { useState, useEffect } from "react";
import SliderHome from "../../Components/Slides/SliderHome";
import { useDispatch, useSelector } from "react-redux";
import { getUs } from "../../Redux/reducers/usSlice";
import News from "../../Components/News/News";
import { Link } from "react-router-dom";

const Home = () => {
  const [welcomeText, setWelcomeText] = useState("Bienvenido"); //eslint-disable-line
  const dispatch = useDispatch()
  const info = useSelector(state => state.usReducer.info)
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticatedUser"));

  useEffect(() => {
    dispatch(getUs());
  }, []);//eslint-disable-line

  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero-container">
          <p className="home__welcometext">{welcomeText}</p>
          <p className="home__info">{info.short_description}</p>
          {isAuthenticated && isAuthenticated.name !== "Admin" ?
            <div className="home__button-container">
              <Link to="/about">
                <button className="home__button home__button--about">Nosotros</button>
              </Link>
              <Link to="/donate">
                <button className="home__button home__button--donate">Donar</button>
              </Link>
            </div>
            :
            null
          }
        </div>
      </div>
      <SliderHome />
      <News />
    </div>
  );
};

export default Home;
