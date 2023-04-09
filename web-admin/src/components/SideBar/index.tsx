import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const LinkItems = [{ name: "author" }, { name: "category" }, { name: "post" }];

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="header">
        <span>Logo</span>
      </div>
      <ul className="list-menu">
        {LinkItems.map((link) => (
          <li className="menu-item">
            <NavLink
              to={link.name === "author" ? `/` : `/${link.name}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
