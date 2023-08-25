import React from "react";
import img from "../../../src/assets/img/unnamed.png";
import img2 from "../../../src/assets/img/amelio.jpg";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const data = [
  {
    name: "Syed Hussain",
    review:
      "Experienced frontend developer proficient in crafting responsive and visually appealing user interfaces with a strong command of modern web technologies and frameworks.",
    loction: "America",
    img: img,
  },
  {
    name: "Ameliasoft",
    review:
      " Proficient in translating design concepts into responsive and visually appealing websites that deliver seamless user experiences.",
    loction: "Bangladesh",
    img: img2,
  },
];

const Testimonial = () => {
  return (
    <div className="custom-container pb-24">
      <div className="relative mb-4">
        <h2 className="text-[70px] font-extrabold font-uppercase absolute left-0 -top-16">
          <span className={`text-stroke-effect`} data-text="Review" />
        </h2>

        <h2 className="text-3xl pl-0 mb-7 font-bold dark:text-gray-200 mt-4">
          My Client <span className="text-primary">Review</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="px-7 relative py-6 bg-gray-900 dark:bg-black/60 light:bg-gray-900 rounded-sm "
            >
              <Image
                width="0"
                height="0"
                className="w-16 absolute right-10 -top-8 rounded-full h-16"
                src={item.img}
                alt=""
              />
              <h2 className="text-xl font-semibold text-gray-200">
                {item.name}
              </h2>
              <p className="text-gray-400 text-xs mt-2">{item.loction}</p>
              <p className="text-sm text-gray-400 py-5">{item.review}</p>
              <div className="inline-block mt-3">
                <div className="flex items-center rounded-full space-x-2 px-3 py-3 bg-black/70">
                  <button className="text-xl text-primary">
                    <AiFillStar></AiFillStar>
                  </button>
                  <button className="text-xl text-primary">
                    <AiFillStar></AiFillStar>
                  </button>
                  <button className="text-xl text-primary">
                    <AiFillStar></AiFillStar>
                  </button>
                  <button className="text-xl text-primary">
                    <AiFillStar></AiFillStar>
                  </button>
                  <button className="text-xl text-primary">
                    <AiFillStar></AiFillStar>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
