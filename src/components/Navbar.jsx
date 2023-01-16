import React from "react";
import Logo from "../images/reactjs-icon.svg";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="React logo" className="nav--image" />
      <h2 className="nav--title">ReactFacts</h2>
      <h3 className="nav--subtitle">React Course - Project 1</h3>
    </nav>
  );
}
