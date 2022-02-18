import React from "react";
import Countdown from "react-countdown";
import '../../sass/components/_landing.scss';
//import '../../sass/components/_landing'

const Landing = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span className="content__countdown-timer">
        {days}D : {hours}H : {minutes}M : {seconds}S
      </span>
    );
  };
  return (
    <div className="landing__container">
        <div className="login-container">
            <div className="login-info-container">
                <h1 className="title">Log in with</h1>
                
                <form className="inputs-container">
                    <input className="input" type="text" placeholder="Descripcion" />
                    <input className="input" type="text" placeholder="Fecha" />
                    <input className="input" type="text" placeholder="Hora" />
                    <input className="input" type="text" placeholder="Lugar" />
                    
                    <button className="btn">login</button>
                    <p>Don't have an account? <span className="span">Sign Up</span></p>
                    <h3 className="content__countdown">
                    <Countdown date={new Date(2022, 1, 25, 0, 0, 0)} renderer={renderer} />
                    </h3>
                </form>
            </div>
        </div>


        <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/juguete-1.jpg"}
        alt=""
        className="content__img"
        />
        <h3 className="content__countdown">
        <Countdown date={new Date(2022, 1, 25, 0, 0, 0)} renderer={renderer} />
        </h3>
        <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/juguete-2.jpg"}
        alt=""
        className="content__img"
        />
        
        <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/juguete-4.jpg"}
        alt=""
        className="content__img"
        />
        <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/niños-3.jpg"}
        alt=""
        className="content__img"
        />
        <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/juguete-5.jpg"}
        alt=""
        className="content__img"
        />
    </div>
  );
};

export default Landing;