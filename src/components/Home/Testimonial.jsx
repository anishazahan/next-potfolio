import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import img2 from "../../../src/assets/img/amelio.jpg";
import img4 from "../../../src/assets/img/Shivay.PNG";
import img3 from "../../../src/assets/img/sulesh.PNG";
import img from "../../../src/assets/img/unnamed.png";

const data = [
  {
    name: "Sulesh Lehera",
    review:
      " Proficient in translating design concepts into responsive and visually appealing websites that deliver seamless user experiences.",
    loction: "Pakistan",
    img: img3,
  },
  {
    name: "Ameliasoft",
    review:
      " Proficient in translating design concepts into responsive and visually appealing websites that deliver seamless user experiences.",
    loction: "Bangladesh",
    img: img2,
  },
  {
    name: "Syed Hussain",
    review:
      "Experienced frontend developer proficient in crafting responsive and visually appealing user interfaces with a strong command of modern web technologies and frameworks.",
    loction: "America",
    img: img,
  },

  {
    name: "Shivay Dey",
    review:
      " Proficient in translating design concepts into responsive and visually appealing websites that deliver seamless user experiences.",
    loction: "India",
    img: img4,
  },
];

const Testimonial = () => {
  // State to track the current starting index
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  // Function to handle right (next) button click
  const handleNext = () => {
    const newIndex = currentIndex + itemsPerPage;
    if (newIndex >= data.length) {
      setCurrentIndex(0); // Loop back to the start
    } else {
      setCurrentIndex(newIndex);
    }
  };

  // Function to handle left (previous) button click
  const handlePrev = () => {
    const newIndex = currentIndex - itemsPerPage;
    if (newIndex < 0) {
      setCurrentIndex(data.length - itemsPerPage); // Loop back to the end
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="custom-container pb-24">
      <div className="flex justify-between items-center">
        <div className="relative mb-4">
          <h2 className="text-[70px] font-extrabold font-uppercase absolute left-0 -top-16">
            <span className={`text-stroke-effect`} data-text="Review" />
          </h2>
          <h2 className="text-3xl pl-0 mb-7 font-bold dark:text-gray-200 mt-4">
            My Client <span className="text-primary">Review</span>
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className={`light:bg-white dark:bg-gray-950 border border-primary flex justify-center items-center text-2xl  p-2 text-primary rounded-full`}
          >
            <BiSolidChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className={`light:bg-white dark:bg-gray-950 border border-primary flex justify-center items-center text-2xl  p-2 text-primary rounded-full`}
          >
            <BiSolidChevronRight />
          </button>
        </div>
      </div>

      {/* Display two testimonials at a time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {data.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => {
          return (
            <div
              key={index}
              className="px-7 relative py-6 light:bg-white shadow dark:bg-black/60 light:bg-gray-900 rounded-sm "
            >
              <Image
                width="0"
                height="0"
                className="w-16 absolute right-10 -top-8 rounded-full h-16"
                src={item.img}
                alt=""
              />
              <h2 className="text-xl font-semibold light:text-primary dark:text-gray-200">{item.name}</h2>
              <p className="light:text-primary dark:text-gray-400 text-xs mt-2">{item.loction}</p>
              <p className="text-sm text-gray-400 py-5">{item.review}</p>
              <div className="inline-block mt-3">
                <div className="flex items-center rounded-full space-x-2 px-3 py-3 light:bg-white light:border light:border-primary dark:bg-black/70">
                  <button className="text-xl text-primary">
                    <AiFillStar />
                  </button>
                  <button className="text-xl text-primary">
                    <AiFillStar />
                  </button>
                  <button className="text-xl text-primary">
                    <AiFillStar />
                  </button>
                  <button className="text-xl text-primary">
                    <AiFillStar />
                  </button>
                  <button className="text-xl text-primary">
                    <AiFillStar />
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
