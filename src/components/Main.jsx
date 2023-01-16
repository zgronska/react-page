import React from "react";
import BgImg from "../images/reactjs-icon-2.svg";

export default function Main() {
  return (
    <main>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      {/* <img src={BgImg} alt="Large React logo" className="main--bg-img" /> */}
    </main>
  );
}
