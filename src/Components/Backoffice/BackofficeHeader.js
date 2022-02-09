import React, { useState } from "react";
import { bubble as Menu } from "react-burger-menu";

const BackofficeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showHideMenu = (event) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Menu isOpen={isMenuOpen} customBurgerIcon={false}>
        <a href="asd">Link 1</a>
        <a href="asd">Link 2</a>
        <a href="asd">Link 3</a>
        <button onClick={showHideMenu}>Cerrar</button>
      </Menu>
      <button onClick={showHideMenu}>Menu</button>
    </>
  );
};

export default BackofficeHeader;
