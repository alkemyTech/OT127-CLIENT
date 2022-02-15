import React from "react";
import ImageLazyLoad from "../../Components/Image/ImageLazyLoad";
import campaignLogo from "../../images/Logotipo-campaña-juguetes.png";
import ongLogo from "../../images/LOGO-SOMOS_MAS.png";

const Header = () => {
  return (
    <header>
      <ImageLazyLoad src={campaignLogo} alt={"Logo de campaña juguetes"} />
      <h1>Juguetes por más sonrisas</h1>
      <ImageLazyLoad src={ongLogo} alt={"Logo de ONG"} />
    </header>
  );
};

export default Header;
