import React from "react";
import Navigation from "../../components/Navigation";
import Social from "../../components/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Social />
        <Navigation />
        <div>
          <FontAwesomeIcon className="icon" icon={faBars} />
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        </div>
      </div>
    </header>
  );
};

export default Header;
