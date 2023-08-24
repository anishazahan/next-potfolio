import React from "react";
import About from "../About/About";
import Friends from "../Contact/Friends";
import TimeLine from "./TimeLine";
import Contact from "../Contact/ContactForm";

const HomePage = () => {
  return (
    <>
      <About></About>
      <TimeLine></TimeLine>
      <Friends></Friends>
      <Contact></Contact>
    </>
  );
};

export default HomePage;
