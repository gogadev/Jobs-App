import React from "react";

import image from "../../assets/img.png";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <img className="image" src={image} alt="" />
      <h1 className="title">GitHub Jobs</h1>
    </header>
  );
};

export default Header;
