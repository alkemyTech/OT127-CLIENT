import React from "react";
import ImageLazyLoad from "../../Components/Image/ImageLazyLoad";
import campaignLogo from "../../images/Logotipo-campaña-juguetes.png";
import ongLogo from "../../images/LOGO-SOMOS_MAS.png";

const Header = () => {
  return (
    <header>
      <ImageLazyLoad src={campaignLogo} />
      <h1>Juguetes por más sonrisas</h1>
      <ImageLazyLoad src={ongLogo} />
    </header>
  );
};

export default Header;
