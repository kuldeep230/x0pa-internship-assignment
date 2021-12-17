import React from "react";
import "./styles/header.css";

function Header() {
  return (
    <div className="header-container ">
      <div className="web-title">
        <span>Landing.jobs</span>
      </div>
      <nav className="site-nav hidden-menu">
        <ul>
          <li>Jobs</li>
          <li>Resources</li>
          <li>For Employers</li>
          <li className="nav-btn nav-btn-transparent">Login</li>
          <li className="nav-btn ">Sign Up</li>
        </ul>

        {/* <div className="nav-btns"></div> */}
      </nav>
    </div>
  );
}

export default Header;
