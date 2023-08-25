import TimeLine from "@/components/Home/TimeLine";
import Services from "@/components/Services/Services";
import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const ServiceHome = () => {
  return (
    <>
      <div className="pt-20">
        <Services></Services>
      </div>
      <TimeLine></TimeLine>
    </>
  );
};

export default ServiceHome;

ServiceHome.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
