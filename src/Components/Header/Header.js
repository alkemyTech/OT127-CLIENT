import { NavLink } from "react-router-dom";
import logo from "../../images/LOGO-SOMOS_MAS.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/actions/authActions";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticatedUser"));
  const token = localStorage.getItem("TOKEN");

  const menuItems = [
    { link: "/school-campaign", name: "Campaña escolar" },
    { link: "/toys-campaign", name: "Campaña de juguetes" },
    { link: "/nosotros", name: "Nosotros" },
  ];

  //     <>
  //       <header className="header">
  //
  //         <nav className="header__nav">
  //           {menuItems.map((item) => (
  //             <NavLink
  //               className="header__link"
  //               activeClassName="header__nav-links-active"
  //               to={item.link}
  //             >
  //               {item.name}
  //             </NavLink>
  //           ))}
  //         </nav>
  //       </header>
  //       <div className="header__logbar">
  //         <NavLink to={isLogged ? "/" : "/login"}>
  //           <button className="header__logbutton" onClick={logout}>
  //             {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
  //           </button>
  //         </NavLink>
  //       </div>
  //     </>
  //   );

  const logout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("authenticatedUser");
    window.location.href = "/";
  };

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
          {isAuthenticated && isAuthenticated.role_id !== 1 && (
            <>
              <NavLink
                className="header__link"
                activeClassName="header__nav-links-active"
                to="/contacto"
              >
                Contacto
              </NavLink>
            </>
          )}
        </nav>

        {isAuthenticated && isAuthenticated.role_id === 2 && (
          <Link to="/donate">Donar</Link>
        )}
      </header>
      <div className="header__logbar">
        {isAuthenticated && (
          <button onClick={logout} className="header__logbutton">
            Cerrar sesión
          </button>
        )}
      </div>
    </>
  );
};
export default Header;
