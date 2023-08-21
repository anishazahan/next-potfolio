import React from "react";

const Friends = () => {
  return (
    <div className="dark:bg-[rgba(49,53,82,0.25)] bg-gray-100 py-20">
      <div className="custom-container">
        <h2 className="text-sm tracking-wider text-primary font-semibold uppercase">
          Social Links
        </h2>
        <div className="relative">
          <h2 className="text-[80px] font-extrabold font-uppercase absolute left-0 -top-20">
            <span className="text-stroke text-transparent-stroke">Social</span>
          </h2>

          <h2 className="text-3xl mb-7 font-bold dark:text-gray-200 mt-4">
            Let &apos;s Talk With <span className="text-primary">Me</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Friends;
