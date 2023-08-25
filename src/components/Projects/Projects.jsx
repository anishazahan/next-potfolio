import React from "react";

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
      </div>
    </div>
  );
};

export default Projects;
