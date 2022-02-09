import React, { useState } from "react";
import { bubble as Menu } from "react-burger-menu";

//TODO Desinstalar MUI ICONS, no fue necesario
//TODO Tengo que llevar todo éste CSS al Sass
const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const BackofficeHeader = () => {
  return (
    <>
      <Menu isOpen={false} styles={styles}>
        <h1>ONG - Somos más</h1>
        {/*LINKS DE REACT ROUTER ??*/}
      </Menu>
    </>
  );
};

export default BackofficeHeader;
