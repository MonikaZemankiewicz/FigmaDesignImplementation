import React from "react";
import logo from "../assets/dark.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <img className="footer__img" src={logo} alt="logo" />
        </div>
        <div>
          <h3>Contact us:</h3>
          <a className="footer__email" href="mailto:have@nicecoding.io">
            have@nicecoding.io
          </a>
        </div>

        <button className="footer__btn btn"> Read Whitepaper </button>
      </div>
      <div className="footer__bottom">
        <a className="footer__link" href="/">
          &copy; Copywriters 2020
        </a>
        <p className="footer__line">|</p>
        <a className="footer__link" href="/">
          FAQ
        </a>
        <p className="footer__line">|</p>
        <a className="footer__link" href="/">
          Terms of Use
        </a>
        <p className="footer__line">|</p>
        <a className="footer__link" href="/">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
