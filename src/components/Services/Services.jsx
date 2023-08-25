import { useState } from "react"; // Import useState
import { data } from "./data.js";

import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [showFullDescriptions, setShowFullDescriptions] = useState([]);

  const toggleDescription = (itemId) => {
    if (showFullDescriptions.includes(itemId)) {
      setShowFullDescriptions(
        showFullDescriptions.filter((id) => id !== itemId)
      );
    } else {
      setShowFullDescriptions([...showFullDescriptions, itemId]);
    }
  };

  return (
    <div className="custom-container mb-24 mt-16">
      <div className="relative mb-4">
        <h2 className="text-[70px] font-extrabold font-uppercase absolute left-0 -top-16">
          <span className={`text-stroke-effect`} data-text="Services" />
        </h2>

        <h2 className="text-3xl mb-5 font-bold dark:text-gray-200 mt-4">
          Provide Best <span className="text-primary">Services</span>
        </h2>
        <p className="lg:max-w-lg dark:text-gray-200 text-gray-500 mb-16">
          You will get 100% full service of work assured until you are fully
          satisfied
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => {
          const isDescriptionVisible = showFullDescriptions.includes(item.id);

          return (
            <div
              key={index}
              className={`  border-primary border-opacity-70 ${
                item.id == 3
                  ? "md:border-0"
                  : item.id == 6
                  ? "md:border-0"
                  : "md:border-r"
              }`}
            >
              <h2 className="text-xl border-opacity-60 border-primary dark:bg-gray-900 text-primary font-bold border w-10 h-10 flex items-center justify-center rounded-full">
                {item.id}
              </h2>
              <h2 className="text-xl font-bold dark:text-gray-200 mt-5">
                {item.title}
              </h2>
              <p className="dark:text-gray-400 mt-2 text-sm font-medium text-gray-500">
                {isDescriptionVisible
                  ? item.description
                  : item.description.slice(0, 110)}
              </p>
              <button
                onClick={() => toggleDescription(item.id)} // Toggle description visibility
                className="pt-3 font-bold text-primary rounded-sm"
              >
                {isDescriptionVisible ? "See Less" : "See More..."}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
