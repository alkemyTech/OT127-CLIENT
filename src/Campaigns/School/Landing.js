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
      <label>descripcion:</label>
      <input type='text' name='descripcion' className="landing__input" />

      <label>Fecha:</label>
      <input type='date' name='fecha' className="landing__input" />

      <label>Hora:</label>
      <input type='time' name='hora' className="landing__input" />

      <label>Lugar:</label>
      <input type='text' name='lugar' className="landing__input" />

     

      
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