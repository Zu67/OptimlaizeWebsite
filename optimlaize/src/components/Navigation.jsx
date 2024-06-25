import React from "react";
import { NavLink } from "react-router-dom";
import {hamburger} from "../assets/icons"


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Optimlaize
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto max-lg:hidden">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Features
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/service">
                  Features
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/demo">
                  Demo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/case-study">
                  Case Studies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <img className="hidden max-lg:block"
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;