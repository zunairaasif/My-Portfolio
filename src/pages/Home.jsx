import React from "react";
import Projects from "./Projects";
import Contact from "../pages/Contact";
import Intro from "../components/layouts/Intro";
import Services from "../components/layouts/Services";

const Home = () => {
  return (
    <>
      <Intro />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
