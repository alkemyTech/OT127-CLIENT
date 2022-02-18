import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../images/LOGO-SOMOS_MAS.png";

const Header = () => {
  const isLogged = useSelector((state) => state.authReducer.userIsLogged);

  const menuItems = [
    { link: "/school-campaign", name: "Campaña escolar" },
    { link: "/toys-campaign", name: "Campaña de juguetes" },
    { link: "/about", name: "Nosotros" },
    { link: "/contact", name: "Contacto" },
  ];

  return (
    <>
      <header className="header">
        <NavLink activeClassName="header__nav-links-active" to="/">
          <img src={logo} alt="" className="header__logo" />
        </NavLink>
        <nav className="header__nav">
          {menuItems.map((item) => (
            <NavLink
              className="header__link"
              activeClassName="header__nav-links-active"
              to={item.link}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className="header__logbar">
        <NavLink to={isLogged ? "/" : "/login"}>
          <button className="header__logbutton">
            {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
          </button>
        </NavLink>
      </div>
    </>
  );
};
export default Header;
