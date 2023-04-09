import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SideBarItem = (props) => {
  return (
    <div className="menu-item">
      {props.routeName === "author" ? (
        <Link to={`/`}>{props.children}</Link>
      ) : (
        <Link to={`/${props.routeName}`}>{props.children}</Link>
      )}
    </div>
  );
};

export default SideBarItem;
