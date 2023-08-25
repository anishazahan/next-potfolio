import React from "react";
import About from "../About/About";
import Friends from "../Contact/Friends";
import TimeLine from "./TimeLine";
import Contact from "../Contact/ContactForm";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import CountDown from "./CountDown";
import Testimonial from "./Testimonial";
import Projects from "../Projects/Projects";

const HomePage = () => {
  return (
    <>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <CountDown></CountDown>
      <Projects></Projects>
      <TimeLine></TimeLine>
      <Testimonial></Testimonial>
      <Friends></Friends>
      <Contact></Contact>
    </>
  );
};

export default HomePage;
