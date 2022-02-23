import React from "react";
import ImageLazyLoad from "../../Components/Image/ImageLazyLoad";
import campaignLogo from "../../images/Logotipo-campaña-juguetes.png";
import ongLogo from "../../images/LOGO-SOMOS_MAS.png";

const Header = () => {
  return (
    <header className="toysCampaignHeader">
      <div className="toysCampaignHeader__campaignLogo">
        <ImageLazyLoad src={campaignLogo} alt={"Logo de campaña juguetes"} />
      </div>
      <h1 className="toysCampaignHeader__title">Juguetes por más sonrisas</h1>
      <div className="toysCampaignHeader__ongLogo">
        <ImageLazyLoad src={ongLogo} alt={"Logo de ONG"} />
      </div>
    </header>
  );
};

export default Header;
