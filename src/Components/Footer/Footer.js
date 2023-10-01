import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2023 Mritunjay Mishra, All Right reserved</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.facebook.com/mritunjaymishra.mriunjay">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/mritunjay9935">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/officialmritunjay/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@mritunjaymishra1888/featured">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mritunjay-mishra-17a779245/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
