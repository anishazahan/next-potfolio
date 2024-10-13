import React, { useEffect, useState } from "react";
import About from "../About/About";
import Contact from "../Contact/ContactForm";
import Friends from "../Contact/Friends";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import CountDown from "./CountDown";
import Testimonial from "./Testimonial";
import TimeLine from "./TimeLine";

const HomePage = () => {
  const [projectData, setProjectData] = useState();

  const getProjects = async () => {
    const res = await fetch(`/api/projects`);
    const data = await res.json();
    setProjectData(data);
  };

  useEffect(() => {
    getProjects();
  }, []);
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
