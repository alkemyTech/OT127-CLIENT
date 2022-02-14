import React from "react";
import ImageLazyLoad from "../../Components/Image/ImageLazyLoad";

const Header = () => {
  return (
    <header className="schoolcampaignheader">
      <ImageLazyLoad
        src="https://placeimg.com/200/200/tech"
        alt="Texto alt 1"
        className="schoolcampaignheader__campaignlogo"
      />
      <ImageLazyLoad
        src="https://placeimg.com/200/200/any"
        alt="Texto alt 1"
        className="schoolcampaignheader__onglogo"
      />
      <h1 className="schoolcampaignheader__slogan">Slogan de campaña</h1>
    </header>
  );
};

export default Header;
