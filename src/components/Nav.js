import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="navbarItems">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="projects">
            <li>Projects</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
