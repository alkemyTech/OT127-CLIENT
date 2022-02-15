import React from "react";

const Card = ({
  imgSrc = "https://via.placeholder.com/150?text=No+Image",
  title,
  description,
}) => {
  return (
    <div className="card-custom__wrapper">
      <img className="card-custom__image" src={imgSrc} alt={title} />
      <div className="card-custom__content">
        <h3 className="card-custom__title">{title}</h3>
        <p className="card-custom__text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
