import React from 'react';
import Countdown from "react-countdown";


const Content = () => {

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span className="content__countdown-timer">
        {days}D : {hours}H : {minutes}M : {seconds}S
      </span>
    );
  };

  return (
    <div className="school-content__container">
      <h2 className="school-content__title">
        26/02/2022 13hs calle 123, Quilmes, Buenos Aires
      </h2>
      <img
        src={process.env.PUBLIC_URL + "/images/school-campaing/school1.jpg"}
        alt=""
        className="school-content__img"
      />
      <h3 className="school-content__countdown">
        <Countdown date={new Date(2022, 1, 25, 0, 0, 0)} renderer={renderer} />
      </h3>
      <img
        src={process.env.PUBLIC_URL + "/images/school-campaing/school2.jpg"}
        alt=""
        className="school-content__img"
      />
      <p className="school-content__description">
        Dona tus utiles escolares, nuevo o usados en buenas condiciones. Los utiles escolares son
        indispensables en el aprendizaje de los niños, fomentan su desarrollo
        cognitivo, su imaginación, su diversión y, en definitiva, su felicidad.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/images/school-campaing/school3.jpg"}
        alt=""
        className="school-content__img"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/school-campaing/school4.jpg"}
        alt=""
        className="school-content__img"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/school-campaing/school5.jpg"}
        alt=""
        className="school-content__img"
      />
    </div>
  );
}
 
export default Content;