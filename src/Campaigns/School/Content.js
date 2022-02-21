import React from 'react';
import Countdown from "react-countdown";
import '../../sass/pages/_schoolContent.scss'

const Content = () => {

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span className="content__countdown-timer">
        {days}D : {hours}H : {minutes}M : {seconds}S
      </span>
    );
  };

  return (
    <div className="content__container">
      <h2 className="content__title">
        <span className='content__fecha' >25/02/2022</span>
        <span className='content__hora' >13hs</span>
        <span className='content__lugar'>calle 127, barrio Quilmes, Buenos Aires</span>
      </h2>
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
      <p className="content__description">
        Dona tus juguetes nuevo o usados en buenas condiciones. Los juguetes son
        indispensables en el aprendizaje de los niños, fomentan su desarrollo
        cognitivo, su imaginación, su diversión y, en definitiva, su felicidad.
      </p>
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
}
 
export default Content;