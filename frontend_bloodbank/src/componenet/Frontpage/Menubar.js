import React from "react";
import "./Menubar.css";

const Menubar = () => {
  // eslint-disable-next-line no-unused-vars
  const { firstname } = sessionStorage;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <div className="container-fluid" id="MenubarNav">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active pr-4">
                <a className="nav-link pr-4" aria-current="page" href="/">
                  Home
                </a>
              </li>
              
              <li className="nav-item">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDropdown"
                      >
                        Register as
                      </a>
                      <div
                        className="dropdown-menu mt-0"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="/donorreg">
                          Donor
                        </a>
                        <a className="dropdown-item" href="/bloodbankreg">
                          Blood Bank
                        </a>

                        <a className="dropdown-item" href="/hospitalreg">
                          Hospital
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contactUs">
                  ContactUs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;