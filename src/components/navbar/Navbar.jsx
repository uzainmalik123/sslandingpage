import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="ss_navbar">
      <div className="ss_navbar-container">
        <div className="ss_navbar-container_links">
          <div className="ss_navbar-container_logo">
            <h1>sunnyside</h1>
          </div>
          <div className="ss_navbar-links_container">
            <p>
              <a href="/about">About</a>
            </p>
            <p>
              <a href="/services">Services</a>
            </p>
            <p>
              <a href="/projects">Projects</a>
            </p>
          </div>
        </div>
        <div className="ss_navbar-button">
          <button type="button">CONTACT</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
