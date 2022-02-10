import React, { useState } from "react";
import { bubble as Menu } from "react-burger-menu";

//TODO Desinstalar MUI ICONS, no fue necesario
//TODO Tengo que llevar todo éste CSS al Sass

const BackofficeHeader = () => {
  return (
    <Menu
      isOpen={false}
      className="sidebar"
      burguerButtonClassName={"sidebar__burgerButton"}
      burgerBarClassName={"sidebar__bars"}
      crossButtonClassName={"sidebar__crossButton"}
      crossClassName={"sidebar__cross"}
      menuClassName={"sidebar__menu"}
      morphShapeClassName={"sidebar__morphShape"}
      itemListClassName={"sidebar__itemList"}
      overlayClassName={"sidebar__overlay"}
    >
      <h1>ONG - Somos más</h1>
      {/*LINKS DE REACT ROUTER ??*/}
    </Menu>
  );
};

export default BackofficeHeader;
