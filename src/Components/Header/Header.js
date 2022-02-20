import { NavLink } from "react-router-dom";
import logo from "../../images/LOGO-SOMOS_MAS.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/actions/authActions";

const Header = () => {
  const isLogged = useSelector((state) => state.authReducer.userIsLogged);
  const dispatch = useDispatch();

  const menuItems = [
    { link: "/school-campaign", name: "Campaña escolar" },
    { link: "/toys-campaign", name: "Campaña de juguetes" },
    { link: "/nosotros", name: "Nosotros" },
    { link: "/contacto", name: "Contacto" },
  ];

  const logout = () => {
    console.log("logout init");
    dispatch(logoutUser);
    localStorage.setItem("TOKEN", "");
    console.log("logout end");
  };

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
          <button className="header__logbutton" onClick={logout}>
            {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
          </button>
        </NavLink>
      </div>
    </>
  );
};
export default Header;
