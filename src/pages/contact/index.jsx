import React from "react";
import Contact from "../../components/Contact/ContactForm";
import Friends from "../../components/Contact/Friends";
import RootLayout from "../../components/layout/RootLayout";

const ContactHome = () => {
  return (
    <>
      <div className="pt-16">
        <Contact></Contact>
      </div>
      <Friends></Friends>
    </>
  );
};

export default ContactHome;

ContactHome.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
