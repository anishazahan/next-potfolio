import React from "react";
import About from "../../components/About/About";
import CountDown from "../../components/Home/CountDown";
import Testimonial from "../../components/Home/Testimonial";
import RootLayout from "../../components/layout/RootLayout";
import Skills from "../../components/Skills/Skills";

const AboutHomePage = () => {
  return (
    <>
      <About></About>
      <Skills></Skills>
      <CountDown></CountDown>
      <Testimonial></Testimonial>
    </>
  );
};

export default AboutHomePage;

AboutHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
