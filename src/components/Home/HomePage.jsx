import React from "react";
import About from "../About/About";
import Friends from "../Contact/Friends";
import TimeLine from "./TimeLine";
import Contact from "../Contact/ContactForm";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const HomePage = () => {
  return (
    <>
      <Services></Services>
      <About></About>
      <Skills></Skills>
      <TimeLine></TimeLine>
      <Friends></Friends>
      <Contact></Contact>
    </>
  );
};

export default HomePage;
