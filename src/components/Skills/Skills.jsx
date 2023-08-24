import React from "react";
import ExpertData from "./ExpertData";

const Skills = () => {
  return (
    <div className="custom-container my-10 pb-20">
      <div className="relative">
        <h2 className="text-[80px] font-extrabold font-uppercase absolute left-0 -top-20">
          <span className="text-stroke text-transparent-stroke">Skills</span>
        </h2>

        <h2 className="text-3xl mb-7 font-bold dark:text-gray-200 mt-4">
          My Technical <span className="text-primary">Skills</span>
        </h2>
      </div>

      <div className="flex items-center space-x-3 flex-wrap">
        <button className="px-9 py-3 rounded-sm bg-primary text-white font-bold">
          Expert
        </button>
        <button className="px-9 py-3 rounded-sm bg-primary text-white font-bold">
          Comfortable
        </button>
        <button className="px-9 py-3 rounded-sm bg-primary text-white font-bold">
          Familiar
        </button>
        <button className="px-9 py-3 rounded-sm bg-primary text-white font-bold">
          Deploy and Tools
        </button>
      </div>

      <ExpertData></ExpertData>
    </div>
  );
};

export default Skills;
