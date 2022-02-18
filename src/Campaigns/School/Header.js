import React from "react";
import ImageLazyLoad from "../../Components/Image/ImageLazyLoad";
import ongLogo from "../../images/LOGO-SOMOS_MAS.png";
import campaignLogo from "../../images/campaña-escolar.jpeg";

const Header = () => {
  return (
    <header className="schoolcampaignheader">
      <ImageLazyLoad
        src={campaignLogo}
        alt="Texto alt 1"
        className="schoolcampaignheader__campaignlogo"
      />
      <h1 className="schoolcampaignheader__slogan">Seamos útiles</h1>
      <ImageLazyLoad
        src={ongLogo}
        alt="Texto alt 1"
        className="schoolcampaignheader__onglogo"
      />
    </header>
  );
};

export default Header;
