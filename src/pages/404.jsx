import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-gray-900 h-[100vh]">
      <div className="h-full flex justify-center items-center">
        <div className="">
          <div className="flex space-x-2 items-baseline">
            <h2 className="text-5xl font-bold text-center dark:text-gray-200">
              404
            </h2>
            <p className="dark:text-gray-300 text-gray-500">Page</p>
          </div>
          <p className="dark:text-gray-300 text-gray-500 pt-2 pb-5">
            Route Not Found
          </p>
          <Link
            href="/"
            className="text-sm font-bold bg-primary py-3 px-6 rounded-sm text-white"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
