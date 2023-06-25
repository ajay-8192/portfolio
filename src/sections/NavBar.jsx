import React from "react";
import styles from "../scss/navbar.module.scss";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  PROJECT_ROUTE,
  CONTACT_ROUTE
} from "../constants/routeConstants";
import { getRoutes } from "../utils/routeUtils";

const NavBar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div id="logo" aria-label="Ajay" className={styles["navbar-logo"]}>
        Logo
      </div>
      <div className={styles["navbar-links"]}>
        <li className={styles["navbar-link"]}>
          <a href={getRoutes(HOME_ROUTE)}>Home</a>
        </li>
        <li className={styles["navbar-link"]}>
          <a href={getRoutes(ABOUT_ROUTE)}>About</a>
        </li>
        <li className={styles["navbar-link"]}>
          <a href={getRoutes(PROJECT_ROUTE)}>Projects</a>
        </li>
        <li className={styles["navbar-link"]}>
          <a href={getRoutes(CONTACT_ROUTE)}>Contact</a>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
