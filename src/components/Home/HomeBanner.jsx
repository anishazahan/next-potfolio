import Link from "next/link";
import img from "../../assets/img/Group 369.png";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillSkype } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const HomeBanner = () => {
  return (
    <div className="custom-container pt-24 pb-32">
      <div className="flex justify-center text-center items-center">
        <div className="">
          <h2 className="dark:text-gray-200 font-semibold mb-3">
            Hey, I am Anisha Zahan Hashi{" "}
          </h2>
          <h2 className="text-5xl dark:text-gray-200 font-bold mx-auto text-center pb-6">
            Expert <span className="text-primary">Fronted </span> Developer
          </h2>
          <p className="dark:text-gray-200 text-center mx-auto font-medium max-w-2xl pb-4">
            I am fronted React Js Developer.I have 2 years work experience.I
            have fresh knowledge of html,css,bootstrap,tailwind,javascript
            ES6(comfortable),react.js,
          </p>
          <div className="flex justify-center space-x-5 items-center mt-5 pb-10">
            <Link
              href="/"
              className="px-6  py-3  rounded-sm text-white hover:bg-black font-semibold tracking-wider bg-primary"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-6  py-[11px] border border-primary dark:text-white dark:bg-black/75 rounded-sm text-primary hover:opacity-70 font-semibold tracking-wider hover:text-primary "
            >
              See Resume
            </Link>
          </div>

          <div className="flex justify-center items-center space-x-2">
            <button className="text-2xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full">
              <BsFacebook></BsFacebook>
            </button>
            <button className="text-2xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full">
              <AiFillSkype></AiFillSkype>
            </button>
            <button className="text-2xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full">
              <SiGmail></SiGmail>
            </button>
            <button className="text-2xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full">
              <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
            </button>
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
