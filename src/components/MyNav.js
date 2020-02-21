import React from "react";

export const MyNav = () => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <i className="fas fa-broom fa-2x mx-1"></i>Impeccable
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-right"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mr-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#about">
                About Us <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <a href="#services" className="nav-link">
                  {" "}
                  Our Services
                </a>
                <div className="dropdown-content">
                  <a href="#plans">For Businesses</a>
                  <a href="#plans"> For Homes</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
