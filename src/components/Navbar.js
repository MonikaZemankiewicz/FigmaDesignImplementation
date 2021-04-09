import React from "react";
import logo from "../assets/dark.svg";
import PageLinks from "../constants/links";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-logo">
          <img src={logo} alt="logo " />
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
