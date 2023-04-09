import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  return (
    <nav className="menu-nav">
      <ul className="list-menu">
        <li className="menu-item ">
          <Link to="/" className="link-item">
            Home
          </Link>
        </li>
        <li className="menu-item ">
          <Link to="/" className="link-item">
            Pages
          </Link>
        </li>
        <li className="menu-item ">
          <Link to="/" className="link-item">
            Category
          </Link>
        </li>
        <li className="center-nav-menu-item">
          <div className="above-logo">
            <Link to="/">
              <img
                src="public/images/logo-1-1.png"
                alt="logo-1"
                title="logo-1"
                className="logo-1"
              />
            </Link>
          </div>
          <div className="logo">
            <div className="logo-inner">
              <Link to="/">
                <img
                  src="public/images/logo.png"
                  alt="logo-2"
                  title="logo-2"
                  className="logo-2"
                />
              </Link>
            </div>
          </div>
        </li>
        <li className="menu-item ">
          <Link to="/" className="link-item">
            Layout
          </Link>
        </li>
        <li className="menu-item ">
          <Link to="/" className="link-item">
            Single Post
          </Link>
        </li>
        <li className="menu-item ">
          <Link to="/about" className="link-item">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
