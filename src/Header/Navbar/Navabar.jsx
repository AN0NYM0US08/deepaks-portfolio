import React from "react";
import "./Navbar.css";
import Bar from "./Hamburger";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="navbar">
      <div className="name">
        <h1>
          <span>D</span>K
        </h1>
      </div>

      <ul>
        <li>Home</li>
        <li><Link to='project-container2'>Projects</Link></li>
        <li>Profiles</li>
        <li>About me</li>
      </ul>
      {/* ------------------------btn------------------------------- */}
      <button className="btn">CONNECT</button>
      {/* ------------------------btn------------------------------- */}
      <div className="bar-small-screen">
        <Bar />
      </div>
    </div>
  );
}

export default Navbar;

