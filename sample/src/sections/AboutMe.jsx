import React from "react";

import styles from '../scss/aboutme.modules.scss';

import Image from '../assets/pic-2.webp';

const AboutMe = () => {
  return (
    <section className={styles["aboutme"]}>
      <div className={styles["aboutme--image"]}>
        <img
          src={Image}
          alt="About Me"
        />
      </div>
      <div className={styles["aboutme--content"]}>
        <h2>
          Experienced Frontend Web Developer with a Passion for User-Friendly
          Websites and Learning New Technologies
        </h2>
        <p>
          As a frontend web developer with two years of experience in the field, I
          am highly skilled in creating visually stunning and user-friendly
          websites. My passion for coding and learning new web technologies has
          driven me towards a continuous journey of growth and improvement in my
          craft. I am committed to delivering high-quality work and ensuring that
          every project I work on meets the highest standards of excellence. With
          a strong attention to detail and a dedication to staying up-to-date with
          the latest trends and best practices, I strive to exceed expectations
          and deliver exceptional results.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
