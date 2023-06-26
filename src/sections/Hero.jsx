import React from "react";
import styles from "../scss/hero.modules.scss";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-content"]}>
        <h1>I'm Ajay Chowdary</h1>
        <p>
          I am a professional frontend web developer who has been involved in
          web development for two years, and I have a keen interest in designing
          user-friendly websites while also keeping up-to-date with the latest
          web technologies.
        </p>
      </div>
      <div className={styles["hero-image"]}>
        <img
          src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="web developer"
          width="100%"
        />
      </div>
    </div>
  );
}
 
export default Hero;