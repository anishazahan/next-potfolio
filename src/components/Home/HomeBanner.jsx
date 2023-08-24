import Link from "next/link";
import img from "../../assets/img/Group 369.png";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="custom-container pt-24 pb-32">
      <div className="flex justify-center text-center items-center">
        <div className="">
          <h2 className="dark:text-gray-200 font-semibold mb-3">
            Hey, I am Anisha Zahan Hashi{" "}
          </h2>
          <h2 className="text-5xl dark:text-gray-200 font-bold max-w-lg py-6">
            Expert <span className="text-primary">Fronted </span> Developer
          </h2>
          <p className="dark:text-gray-200 font-medium max-w-2xl py-4">
            I am fronted React Js Developer.I have 2 years work experience.I
            have fresh knowledge of html,css,bootstrap,tailwind,javascript
            ES6(comfortable),react.js,
          </p>
          <div className="flex space-x-5 items-center mt-10">
            <Link
              href="/"
              className="px-6 skew-x-6 py-3  rounded-sm text-white font-semibold tracking-wider bg-primary"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-6 skew-x-6 py-3  rounded-sm text-white font-semibold tracking-wider bg-primary"
            >
              See Resume
            </Link>
          </div>
        </div>
        {/* <div className="w-[50%]">
          <Image
            width="0"
            height="0"
            className="w-full h-full"
            src={img}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default HomeBanner;
