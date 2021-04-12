import React from "react";
import logo from "../assets/dark.svg";
import PageLinks from "../constants/links";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__center">
        <div className="navbar__logo">
          <img className="navbar__img" src={logo} alt="logo" />
        </div>
        <PageLinks styleClass="navbar__links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
