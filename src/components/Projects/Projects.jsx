import Image from "next/image";
import React from "react";
import img from "../../assets/img/WhatsApp Image 2023-08-26 at 21.53.51.jpg";
import img2 from "../../assets/img/WhatsApp Image 2.jpg";

const Projects = () => {
  return (
    <div className="custom-container mb-32">
      <div className="relative mb-4">
        <h2 className="text-[60px] font-extrabold font-uppercase absolute left-0 -top-14">
          <span className={`text-stroke-effect`} data-text="Projects" />
        </h2>

        <h2 className="text-3xl pl-0 mb-7 font-bold dark:text-gray-200 mt-4">
          My Latest <span className="text-primary">Projects</span>
        </h2>

        <div className="flex space-x-3 items-center">
          <button className="px-9 py-3 text-sm bg-primary font-bold text-white rounded-sm">
            Full Stack
          </button>
          <button className="px-9 py-3 text-sm bg-primary font-bold text-white rounded-sm">
            Frontend
          </button>
        </div>

        <div className="grid gap-6 grid-cols-3">
          <div className="">
            <Image src={img2} alt="" />
          </div>
          <div className="">
            <Image src={img2} alt="" />
          </div>
          <div className="">
            <Image src={img2} alt="" />
          </div>
          <div className="">
            <Image src={img2} alt="" />
          </div>
          <div className="">
            <Image src={img2} alt="" />
          </div>
          <div className="">
            <Image src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
