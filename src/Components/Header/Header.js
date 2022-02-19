import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/actions/authActions";

const Header = () => {
  const isLogged = useSelector((state) => state.authReducer.userIsLogged);
  const dispatch = useDispatch();
=======
import { useSelector } from "react-redux";

import "../../sass/layout/_header.scss";

const Header = () => {
  const isLogged = useSelector((state) => state.authReducer.userIsLogged);
>>>>>>> 50d8d7522309a5e19336ef2349473405e70d6365

  const menuItems = [
    { link: "/school-campaign", name: "Campaña escolar" },
    { link: "/toys-campaign", name: "Campaña de juguetes" },
<<<<<<< HEAD
    { link: "/nosotros", name: "Nosotros" },
    { link: "/contacto", name: "Contacto" },
  ];

  const logout = () => {
    dispatch(logoutUser);
    localStorage.setItem("TOKEN", "");
  };
=======
    { link: "/about", name: "Nosotros" },
    { link: "/contact", name: "Contacto" },
  ];

>>>>>>> 50d8d7522309a5e19336ef2349473405e70d6365
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
            {!isLogged ? (
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
              </ul>
            ) : null}
          </div>
          <button onClick={logout}>Cerrar sesión</button>
          {/* Atento cuando venga el pull de los estilos que hice, hay que borrar todo lo local, pero pasar el 
          metodo logout como prop del botton que viene */}
        </nav>
      </header>
    </>
  );
};
export default Header;
