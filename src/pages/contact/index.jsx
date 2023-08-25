import Contact from "@/components/Contact/ContactForm";
import Friends from "@/components/Contact/Friends";
import RootLayout from "@/components/layout/RootLayout";
import React from "react";

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
