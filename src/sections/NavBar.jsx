import React from "react";
import styles from "../scss/navbar.module.scss";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  PROJECT_ROUTE,
  CONTACT_ROUTE
} from "../constants/routeConstants";
import { getRoutes } from "../utils/routeUtils";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const activeNavStyles = {
    fontWeight: "bold",
    padding: "10px 0",
    borderBottom: "1px solid",
    transition: "all 2s ease",
  };
  return (
    <nav className={styles["navbar"]}>
      <div id="logo" aria-label="Ajay" className={styles["navbar-logo"]}>
        Ajay Chowdary
      </div>
      <div className={styles["navbar-links"]}>
        <li className={styles["navbar-link"]}>
          <NavLink
            to={getRoutes(HOME_ROUTE)}
            style={({ isActive }) => (isActive ? activeNavStyles : {})}
          >
            Home
          </NavLink>
        </li>
        <li className={styles["navbar-link"]}>
          <NavLink
            to={getRoutes(ABOUT_ROUTE)}
            style={({ isActive }) => (isActive ? activeNavStyles : {})}
          >
            About
          </NavLink>
        </li>
        <li className={styles["navbar-link"]}>
          <NavLink
            to={getRoutes(PROJECT_ROUTE)}
            style={({ isActive }) => (isActive ? activeNavStyles : {})}
          >
            Projects
          </NavLink>
        </li>
        <li className={styles["navbar-link"]}>
          <NavLink
            to={getRoutes(CONTACT_ROUTE)}
            style={({ isActive }) => (isActive ? activeNavStyles : {})}
          >
            Contact
          </NavLink>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
