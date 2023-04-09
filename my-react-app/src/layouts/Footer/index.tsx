import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faSkype,
  faTwitter,
  faInstagram,
  faPinterestP
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-column">
            <h3 className="title">Akea, blogger</h3>
            <div className="textwidget">
              <p>23 King Street, 5th Avenue, New York</p>
              <p>+1-2355-3345-5</p>
              <p className="mail">call@akeablog.co</p>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="title">Category</h3>
            <div className="menu-category-container">
              <ul className="menu-category">
                <li className="menu-item">Technology</li>
                <li className="menu-item">Photography</li>
                <li className="menu-item">Travel</li>
                <li className="menu-item">Fashion</li>
                <li className="menu-item">Food</li>
                <li className="menu-item">Trending</li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="title">Follow Us</h3>
            <div className="list-social-network">
              <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
              <FontAwesomeIcon className="social-icon" icon={faPinterestP} />
              <FontAwesomeIcon className="social-icon" icon={faSkype} />
              <FontAwesomeIcon className="social-icon" icon={faTwitter} />
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrapper">
        <div className="container">
          <p>Copyright 2019 Akea Blog, All Right Reserved</p>
          <ul className="list-menu">
            <li>Home</li>
            <li>About</li>
            <li>Updates</li>
            <li>Advertising</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
