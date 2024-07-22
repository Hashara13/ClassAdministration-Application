import React, { useEffect, useState } from "react";
import { Dropdown, Collapse } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const dropdowns = document.querySelectorAll('[data-mdb-toggle="dropdown"]');
    dropdowns.forEach((dropdown) => {
      new Dropdown(dropdown);
    });

    const collapses = document.querySelectorAll('[data-mdb-toggle="collapse"]');
    collapses.forEach((collapse) => {
      new Collapse(collapse);
    });
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <button className="menu-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isSidebarVisible ? faTimes : faBars} />
      </button>
      <div className={`vertical-navbar ${isSidebarVisible ? "visible" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-body-black flex-column">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav flex-column">
              <li className="nav-item text-color-beige">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item text-color-beige">
                <Link className="nav-link" to="/add">
                  Add Student
                </Link>
              </li>
              <li className="nav-item text-color-beige">
                <Link className="nav-link" to="/add/lessons">
                  Add Lessons
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex flex-column align-items-center mt-auto">
            <a className="text-reset mb-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>

            <div className="dropdown mb-3">
              <a
                className="text-reset dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
