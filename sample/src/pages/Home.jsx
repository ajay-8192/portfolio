import React, { Fragment } from "react";
import NavBar from "../sections/NavBar.jsx";
import Hero from "../sections/Hero.jsx";
import AboutMe from "../sections/AboutMe.jsx";

import styles from '../scss/home.modules.scss';

const HomePage = () => {
  return (
    <Fragment>
      <div className={styles["main-section"]}>
        <NavBar />
        <Hero />
      </div>
      <AboutMe />
    </Fragment>
  );
}
 
export default HomePage;