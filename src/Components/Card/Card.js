import React from "react";

const Card = ({
  imgSrc = "https://via.placeholder.com/150?text=No+Image",
  title,
  description,
}) => {
  return (
    <div className="container">
      <div className="card__wrapper">
        <img className="card__image" src={imgSrc} alt={title} />
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
