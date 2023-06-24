import React from "react";
import styles from "../scss/navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div id="logo" aria-label="Ajay" className={styles["navbar-logo"]}>
        Logo
      </div>
      <div className={styles["navbar-links"]}>
        <li className={styles["navbar-link"]}>
          <a href="/">Home</a>
        </li>
        <li className={styles["navbar-link"]}>
          <a href="/">About</a>
        </li>
        <li className={styles["navbar-link"]}>
          <a href="/">Projects</a>
        </li>
        <li className={styles["navbar-link"]}>
          <a href="/">Contact</a>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
