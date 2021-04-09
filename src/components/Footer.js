import React from "react";
import logo from "../assets/dark.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="nav-logo">
          <img src={logo} alt="logo " />
        </div>
        <div>
          <h3>Contact us:</h3>
          <a href="mailto:have@nicecoding.io">have@nicecoding.io</a>
        </div>

        <button className="footer-button btn"> Read Whitepaper </button>
      </div>
      <div className="footer-bottom">
        <a href="/">&copy; Copywriters 2020</a>
        <p>|</p>
        <a href="/">FAQ</a>
        <p>|</p>
        <a href="/">Terms of Use</a>
        <p>|</p>
        <a href="/">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
