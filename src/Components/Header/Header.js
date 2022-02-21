import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/actions/authActions";

const Header = () => {
  const isLogged = useSelector((state) => state.authReducer.authToken);
  const dispatch = useDispatch();
  const history = useHistory();

  const menuItems = [
    { link: "/school-campaign", name: "Campaña escolar" },
    { link: "/toys-campaign", name: "Campaña de juguetes" },
    { link: "/nosotros", name: "Nosotros" },
    { link: "/contacto", name: "Contacto" },
  ];

  const logout = () => {
    dispatch(logoutUser());
    localStorage.setItem("TOKEN", "");
    history.push("/");
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
            {isLogged ? (
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
          {/* Atento cuando venga el pull de los estilos que hice, hay que borrar todo lo local, pero pasar el 
          metodo logout como prop del botton que viene */}
        </nav>
      </header>
    </>
  );
};
export default Header;
