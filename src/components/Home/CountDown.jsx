import React from "react";

const CountDown = () => {
  return (
    <div className="custom-container  ">
      <div className="flex items-center py-20 justify-between flex-wrap dark:bg-black/60 bg-gray-900  rounded-3xl px-12">
        <div className="relative">
          <h2 className="text-[90px] font-extrabold italic font-uppercase absolute left-0 -top-10">
            <span className="text-stroke text-transparent-stroke skew-x-2">
              100
            </span>
            <span className="text-4xl text-primary absolute top-10 -right-7">
              +
            </span>
          </h2>

          <h2 className="text-[18px] mb-7  font-medium text-gray-200 mt-4">
            Project Complete
          </h2>
        </div>
        <div className="relative">
          <h2 className="text-[90px] font-extrabold italic font-uppercase absolute left-0 -top-10">
            <span className="text-stroke text-transparent-stroke skew-x-2">
              10
            </span>
            <span className="text-4xl text-primary absolute top-10 -right-7">
              +
            </span>
          </h2>

          <h2 className="text-[18px] mb-7 font-medium text-gray-200 mt-4">
            Client Review
          </h2>
        </div>

        <div className="relative">
          <h2 className="text-[90px] font-extrabold italic font-uppercase absolute left-0 -top-10">
            <span className="text-stroke text-transparent-stroke skew-x-2">
              15
            </span>
            <span className="text-4xl text-primary absolute top-10 -right-7">
              +
            </span>
          </h2>

          <h2 className="text-[18px] mb-7  font-medium text-gray-200 mt-4">
            Courses Complete
          </h2>
        </div>

        <div className="relative">
          <h2 className="text-[90px] font-extrabold italic font-uppercase absolute left-0 -top-10">
            <span className="text-stroke text-transparent-stroke skew-x-2">
              2
            </span>
            <span className="text-4xl text-primary absolute top-10 -right-7">
              +
            </span>
          </h2>

          <h2 className="text-[18px] mb-7 font-medium text-gray-200 mt-4">
            Working experience
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
