import React from "react";

const Menu = () => {
  return (
    <div className="col-md-3 top-nav sing-page">
      <div className="logo">
        <a href="index.html">
          <h1>Blogger</h1>
        </a>
      </div>
      <div className="top-menu">
        <span className="menu"> </span>
        <ul className="cl-effect-16">
          <li>
            <a className="active" href="index.html" data-hover="HOME">
              Home
            </a>
          </li>
          <li>
            <a href="about.html" data-hover="About">
              About
            </a>
          </li>
          <li>
            <a href="grid.html" data-hover="Grids">
              Grids
            </a>
          </li>
          <li>
            <a href="services.html" data-hover="Services">
              Services
            </a>
          </li>
          <li>
            <a href="gallery.html" data-hover="Gallery">
              Gallery
            </a>
          </li>
          <li>
            <a href="contact.html" data-hover="CONTACT">
              Contact
            </a>
          </li>
        </ul>
        <ul className="side-icons">
          <li>
            <a className="fb" href="#" />
          </li>
          <li>
            <a className="twitt" href="#" />
          </li>
          <li>
            <a className="goog" href="#" />
          </li>
          <li>
            <a className="drib" href="#" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
