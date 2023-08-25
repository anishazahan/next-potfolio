import React from "react";

const CountDown = () => {
  return (
    <div className="custom-container mb-32 ">
      <div className="flex gap-10 items-center py-20 justify-between flex-wrap dark:bg-black/60 bg-gray-900  rounded-3xl px-12">
        <div className="relative">
          <span className="text-4xl text-primary font-bold absolute -top-3 -right-10">
            +
          </span>
          <h2 className="text-[90px] font-extrabold italic font-uppercase absolute left-0 -top-10">
            <span className={`text-stroke-effect skew-x-2`} data-text="100" />
          </h2>

          <h2 className="text-[18px] mb-7  font-medium text-gray-200 mt-4">
            Project Complete
          </h2>
        </div>
        <div className="relative">
          <span className="text-4xl text-primary font-bold absolute -top-3 -right-5">
            +
          </span>
          <h2 className="text-[90px] font-extrabold italic font-uppercase absolute left-0 -top-10">
            <span className={`text-stroke-effect skew-x-2`} data-text="10" />
          </h2>

          <h2 className="text-[18px] mb-7 font-medium text-gray-200 mt-4">
            Client Review
          </h2>
        </div>

        <div className="relative">
          <span className="text-4xl text-primary font-bold absolute -top-3 right-3">
            +
          </span>
          <h2 className="text-[90px] font-extrabold italic font-uppercase absolute left-0 -top-10">
            <span className={`text-stroke-effect skew-x-2`} data-text="15" />
          </h2>

          <h2 className="text-[18px] mb-7  font-medium text-gray-200 mt-4">
            Courses Complete
          </h2>
        </div>

        <div className="relative">
          <span className="text-4xl text-primary font-bold absolute -top-3 right-12">
            +
          </span>
          <h2 className="text-[90px] font-extrabold italic font-uppercase absolute left-0 -top-10">
            <span className={`text-stroke-effect skew-x-2`} data-text="2" />
          </h2>

          <h2 className="text-[18px] mb-7  font-medium text-gray-200 mt-4">
            Work experience
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
