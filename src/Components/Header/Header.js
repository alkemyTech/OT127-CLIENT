import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../images/LOGO-SOMOS_MAS.png";

const Header = () => {
  const isLogged = useSelector((state) => state.authReducer.userIsLogged);

  const menuItems = [
    { link: "/school-campaign", name: "Campaña escolar" },
    { link: "/toys-campaign", name: "Campaña de juguetes" },
    { link: "/nosotros", name: "Nosotros" },
    { link: "/contacto", name: "Contacto" },
  ];

  return (
    <>
      <header className="header">
        <NavLink activeClassName="header__nav-links-active" to="/">
          <img src={logo} alt="" className="header__logo" />
        </NavLink>
        <nav className="header__nav">
          {
            !isLogged
              ? menuItems.map((item) => (
                  <NavLink
                    className="header__link"
                    activeClassName="header__nav-links-active"
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                ))
              : null //Login/Register ?
          }
        </nav>
      </header>
    </>
  );
};
export default Header;
