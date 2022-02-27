import { NavLink } from "react-router-dom";
import logo from "../../images/LOGO-SOMOS_MAS.png";
import { useDispatch } from "react-redux";
import { logoutUser, setToken } from "../../Redux/actions/authActions";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticatedUser"));
  const token = localStorage.getItem("TOKEN");

  const menuItems = [
    { link: "/school-campaign", name: "Campaña escolar", target: "_blank" },
    { link: "/toys-campaign", name: "Campaña de juguetes", target: "_blank" },
    { link: "/about", name: "Nosotros" },
  ];

  const logout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("authenticatedUser");
    window.location.href = "/";
  };

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, []); //eslint-disable-line

  return (
    <>
      <header className="header">
        <NavLink
          activeClassName="header__nav-links-active"
          to="/"
          className="header__link"
        >
          <img src={logo} alt="" className="header__logo" />
        </NavLink>
        <nav className="header__nav">
          {token ? (
            menuItems.map((item) => (
              <NavLink
                className="header__link"
                activeClassName="header__nav-links-active"
                to={item.link}
                key={item.name}
                target={item.target}
              >
                {item.name}
              </NavLink>
            ))
          ) : (
            <>
              <NavLink
                className="header__link"
                activeClassName="header__nav-links-active"
                to="/login"
              >
                Iniciar sesión
              </NavLink>
              <NavLink
                className="header__link"
                activeClassName="header__nav-links-active"
                to="/register"
              >
                Registrarse
              </NavLink>
            </>
          )}
          {isAuthenticated && isAuthenticated.name !== "Admin" && (
            <>
              <NavLink
                className="header__link"
                activeClassName="header__nav-links-active"
                to="/contact"
              >
                Contacto
              </NavLink>
            </>
          )}

          {isAuthenticated && isAuthenticated.name === "Admin" && (
            <NavLink
              className="header__link"
              activeClassName="header__nav-links-active"
              to="/backoffice/organization"
            >
              Ir al panel
            </NavLink>
          )}
          {isAuthenticated && isAuthenticated.name !== "Admin" && (
            <NavLink className="header__link" to="/donate">
              Donar
            </NavLink>
          )}

          {isAuthenticated && (
            <button onClick={logout} className="header__logbutton">
              Cerrar sesión
            </button>
          )}
        </nav>
      </header>
    </>
  );
};
export default Header;
