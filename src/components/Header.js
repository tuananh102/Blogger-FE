import React, { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState();
  return (
    /* header-section-starts */
    <div className="h-top" id="home">
      <div className="top-header">
        <ul className="cl-effect-16 top-nag">
          <li>
            <a href="registration.html" data-hover="Registration">
              Registration
            </a>
          </li>
          <li>
            <a href="about.html" data-hover="About">
              About
            </a>
          </li>
          <li>
            <a href="services.html" data-hover="SERVICES">
              SERVICES
            </a>
          </li>
          <li>
            <a href="login.html" data-hover="Login">
              Login
            </a>
          </li>
          <li>
            <a href="contact.html" data-hover="CONTACT">
              Contact
            </a>
          </li>
        </ul>
        <div className="search-box">
          <div className="b-search">
            <form>
              <input type="text" placeholder="Search" />
              <input type="submit" style={{ color: "transparent" }} />
            </form>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default Header;
