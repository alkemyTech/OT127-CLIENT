import React from "react";
import ImageLazyLoad from "../../Components/Image/ImageLazyLoad";
import campaignLogo from "../../images/Logotipo-campaña-juguetes.png";
import ongLogo from "../../images/LOGO-SOMOS_MAS.png";

const Header = () => {
  return (
    <header className="toysCampaignHeader">
      <ImageLazyLoad
        src={campaignLogo}
        alt={"Logo de campaña juguetes"}
        className="toysCampaignHeader__campaignLogo"
      />
      <h1 className="toysCampaignHeader__title">Juguetes por más sonrisas</h1>
      <ImageLazyLoad
        src={ongLogo}
        alt={"Logo de ONG"}
        className="toysCampaignHeader__ongLogo"
      />
    </header>
  );
};

export default Header;
