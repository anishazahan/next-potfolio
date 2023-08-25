import React, { useState } from "react";
import ExpertData from "./ExpertData";
import ComfortableData from "./ComfortableData";
import Tools from "./Tools";
import Familear from "./Familear";

const Skills = () => {
  const [activeSection, setActiveSection] = useState("expert");

  const renderSection = () => {
    switch (activeSection) {
      case "expert":
        return <ExpertData />;
      case "comfortable":
        return <ComfortableData />;
      case "familiar":
        return <Familear />;
      case "tools":
        return <Tools />;
      default:
        return null;
    }
  };

  return (
    <div className="custom-container my-10 pb-20">
      <div className="relative mb-4">
        <h2 className="text-[70px] font-extrabold font-uppercase absolute left-0 -top-16">
          <span className={`text-stroke-effect`} data-text="Skills" />
        </h2>

        <h2 className="text-3xl pl-0 mb-7 font-bold dark:text-gray-200 mt-4">
          My Technical <span className="text-primary">Skills</span>
        </h2>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <button
          onClick={() => setActiveSection("expert")}
          className={`px-9 font-bold py-3 rounded-sm ${
            activeSection === "expert"
              ? "bg-primary text-white"
              : "dark:bg-gray-900 bg-gray-200 dark:text-white text-black"
          }`}
        >
          Expert
        </button>
        <button
          onClick={() => setActiveSection("comfortable")}
          className={`px-9 py-3 rounded-sm ${
            activeSection === "comfortable"
              ? "bg-primary text-white"
              : "dark:bg-gray-900 bg-gray-200 dark:text-white text-black"
          }`}
        >
          Comfortable
        </button>
        <button
          onClick={() => setActiveSection("familiar")}
          className={`px-9 py-3 rounded-sm ${
            activeSection === "familiar"
              ? "bg-primary text-white"
              : "dark:bg-gray-900 bg-gray-200 dark:text-white text-black"
          }`}
        >
          Familiar
        </button>
        <button
          onClick={() => setActiveSection("tools")}
          className={`px-9 py-3 rounded-sm ${
            activeSection === "tools"
              ? "bg-primary text-white"
              : "dark:bg-gray-900 bg-gray-200 dark:text-white text-black"
          }`}
        >
          Deploy and Tools
        </button>
      </div>

      {renderSection()}
    </div>
  );
};

export default Skills;
