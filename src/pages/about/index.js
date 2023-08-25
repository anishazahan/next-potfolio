import About from "@/components/About/About";
import CountDown from "@/components/Home/CountDown";
import Testimonial from "@/components/Home/Testimonial";
import Skills from "@/components/Skills/Skills";
import RootLayout from "@/components/layout/RootLayout";
import React from "react";

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
