import React from "react";
import SideBar from "../../components/SideBar";
import "./index.css";

const DefaultLayout = (props) => {
  return (
    <div className="container">
      <SideBar />
      {/* <div className="main-content-wrapper">
        <main className="main-content">{props.children}</main>
      </div> */}
      <main className="main-content">{props.children}</main>
    </div>
  );
};

export default DefaultLayout;
