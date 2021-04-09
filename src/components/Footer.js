import React from "react";
import logo from "../assets/dark.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav-center">
        <div className="nav-logo">
          <img src={logo} alt="logo " />
        </div>
      </div>
      <div className="contact-us">
        <h2>Contact us:</h2>
        <p>have@nicecoding.io</p>
      </div>
    </footer>
  );
};

export default Footer;
