import React, { useState } from "react";
import { bubble as Menu } from "react-burger-menu";
import ViewListIcon from "@material-ui/icons/ViewList";

const BackofficeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showHideMenu = (event) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Menu isOpen={isMenuOpen} customBurgerIcon={false}>
        <h1>ONG - Somos más</h1>
        <a href="asd">Link 1</a>
        <a href="asd">Link 2</a>
        <a href="asd">Link 3</a>
        <button onClick={showHideMenu}>Cerrar</button>
      </Menu>
      <button onClick={showHideMenu}>
        <ViewListIcon />
      </button>
    </>
  );
};

export default BackofficeHeader;
