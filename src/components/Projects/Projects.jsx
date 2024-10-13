import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { data } from "./data";

const Projects = () => {
  const [selectedType, setSelectedType] = useState("Frontend"); // Default selected type

  const filteredProjects = data?.filter((item) => item.type === selectedType);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  const toggleShowAll = () => {
    setShowAllProjects(!showAllProjects);
  };
  return (
    <div className="custom-container mb-32">
      <div className="relative mb-4">
        <h2 className="text-[60px] font-extrabold font-uppercase absolute left-0 -top-14">
          <span className={`text-stroke-effect`} data-text="Projects" />
        </h2>

        <h2 className="text-3xl pl-0 mb-7 font-bold dark:text-gray-200 mt-4">
          My Latest <span className="text-primary">Projects</span>
        </h2>

        <div className="flex space-x-3 items-center mb-12">
          <button
            className={`px-9 py-3 text-sm font-bold text-white rounded-sm ${
              selectedType === "Fullstack" ? "bg-primary" : "bg-gray-900 border-primary border-opacity-40"
            }`}
            onClick={() => setSelectedType("Fullstack")}
          >
            Full Stack
          </button>
          <button
            className={`px-9 py-3 text-sm font-bold text-white rounded-sm ${
              selectedType === "Frontend" ? "bg-primary" : "bg-gray-900 border border-primary border-opacity-40"
            }`}
            onClick={() => setSelectedType("Frontend")}
          >
            Frontend
          </button>
        </div>

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((item, index) => (
            <Link target="_blank" href={`/project/${item.id}`} key={index} className="">
              <div className="relative ">
                <div className="absolute inset-0 h-full w-full bg-black/20 hover:bg-black/60 duration-300"></div>
                <Image width="0" height="0" src={item.img} alt="" />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-end pr-5 mt-16">
          <button className="dark:text-gray-200 font-bold" onClick={toggleShowAll}>
            {selectedType !== "Frontend" ? "" : showAllProjects ? "See Less..." : "See More..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
