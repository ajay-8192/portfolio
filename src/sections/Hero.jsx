import React from "react";

import styles from "../scss/hero.modules.scss";

import Image from '../assets/profile.webp';

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero--content"]}>
        <h1 className={styles["hero--content-title"]}>I'm <i>Ajay</i> Chowdary</h1>
        <p className={styles["hero--content-description"]}>
          I am a professional frontend web developer who has been involved in
          web development for two years, and I have a keen interest in designing
          user-friendly websites while also keeping up-to-date with the latest
          web technologies.
        </p>
      </div>
      <div className={styles["hero-image"]}>
        <img
          src={Image}
          alt="web developer"
          width="100%"
        />
      </div>
    </div>
  );
}
 
export default Hero;