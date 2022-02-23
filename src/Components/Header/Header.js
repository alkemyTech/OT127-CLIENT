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
  //         <NavLink activeClassName="header__nav-links-active" to="/">
  //           <img src={logo} alt="" className="header__logo" />
  //         </NavLink>
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
        <nav className="header__nav">
          <div className="header__nav-left">
            <NavLink
              className="header__nav-links"
              activeClassName="header__nav-links-active"
              to="/"
            >
              Inicio
            </NavLink>
          </div>
          <div className="header__nav-right">
            {token ? (
              <ul className="header__nav-list">
                {menuItems.map((item) => (
                  <li key={item.name} className="header__nav-item">
                    <NavLink
                      className="header__nav-links"
                      activeClassName="header__nav-links-active"
                      to={item.link}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                {isAuthenticated && isAuthenticated.role_id !== 1 && (
                  <li className="header__nav-item">
                    <NavLink
                      className="header__nav-links"
                      activeClassName="header__nav-links-active"
                      to="/contacto"
                    >
                      Contacto
                    </NavLink>
                  </li>
                )}
                <button onClick={logout}>Cerrar sesión</button>
              </ul>
            ) : (
              <div>
                <NavLink
                  className="header__nav-links"
                  activeClassName="header__nav-links-active"
                  to="/login"
                >
                  Iniciar sesión
                </NavLink>
                <NavLink
                  className="header__nav-links"
                  activeClassName="header__nav-links-active"
                  to="/register"
                >
                  Registrarse
                </NavLink>
              </div>
            )}
          </div>

          {isAuthenticated && !isAuthenticated.role_id === 1 && (
            <Link to="/donate">Donar</Link>
          )}

          {/* Atento cuando venga el pull de los estilos que hice, hay que borrar todo lo local, pero pasar el 
          metodo logout como prop del botton que viene */}
        </nav>
      </header>
    </>
  );
};
export default Header;
