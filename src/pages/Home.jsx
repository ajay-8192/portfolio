import React, { Fragment } from "react";
import NavBar from "../sections/NavBar.jsx";
import Hero from "../sections/Hero.jsx";

const HomePage = () => {
  return (
    <Fragment>
      <div style={{ height: '100vh' }}>
        <NavBar />
        <Hero />
      </div>
    </Fragment>
  );
}
 
export default HomePage;