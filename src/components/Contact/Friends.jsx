import Link from "next/link";
import { AiFillSkype } from "react-icons/ai";
import { BsEnvelopeOpenFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiUpwork } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";

const Friends = () => {
  return (
    <div className="dark:bg-[rgba(49,53,82,0.25)] bg-gray-50 pb-20 pt-20">
      <div className="custom-container">
        <h2 className="text-sm tracking-wider text-primary font-semibold uppercase">Social Links</h2>
        <div className="relative mb-4">
          <h2 className="text-[70px] font-extrabold font-uppercase absolute left-0 -top-24">
            <span className={`text-stroke-effect`} data-text="Social" />
          </h2>

          <h2 className="text-3xl pl-0 mb-7 font-bold dark:text-gray-200 mt-4">
            Let &apos;s Talk With <span className="text-primary">Me</span>
          </h2>
        </div>
        {/* ..................  social tab........ */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Link
            href="https://www.linkedin.com/in/anisha-zahan/"
            target="_blank"
            className="flex items-center justify-between cursor-pointer px-12 py-10 border dark:bg-gray-900 bg-white border-primary hover:border-opacity-95 shadow border-opacity-60 rounded-sm"
          >
            <div className="">
              <h2 className="dark:text-gray-300 mb-4 text-gray-700 font-bold text-xl">Linkedin</h2>
              <p className="text-sm font-medium text-primary tracking-wide">Professional Social profile</p>
            </div>
            <button className="text-5xl text-black hover:opacity-90 opacity-70 dark:opacity-40">
              <TfiLinkedin></TfiLinkedin>
            </button>
          </Link>

          <Link
            href="https://join.skype.com/invite/wml21guEKXrn"
            target="_blank"
            className="flex items-center justify-between cursor-pointer px-12 py-10 border dark:bg-gray-900 bg-white border-primary hover:border-opacity-95 shadow  border-opacity-60 rounded-sm"
          >
            <div className="">
              <h2 className="dark:text-gray-300 mb-4 text-gray-700 font-bold text-xl">Skype</h2>
              <p className="text-sm font-medium text-primary tracking-wide">Work Case Study</p>
            </div>
            <button className="text-5xl text-black hover:opacity-90 opacity-70 dark:opacity-40">
              <AiFillSkype></AiFillSkype>
            </button>
          </Link>

          <Link
            href="mailto:anishazahan13@email.com"
            target="_blank"
            className="flex items-center justify-between cursor-pointer px-12 py-10 border dark:bg-gray-900 bg-white border-primary hover:border-opacity-95 shadow  border-opacity-60 rounded-sm"
          >
            <div className="">
              <h2 className="dark:text-gray-300 mb-4 text-gray-700 font-bold text-xl">G-mail</h2>
              <p className="text-sm font-medium text-primary tracking-wide cursor-context-menu">
                anishazahan13@gmail.com
              </p>
            </div>
            <button className="text-4xl text-black hover:opacity-90 opacity-70 dark:opacity-40">
              <BsEnvelopeOpenFill></BsEnvelopeOpenFill>
            </button>
          </Link>

          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between cursor-pointer px-12 py-10 border dark:bg-gray-900 bg-white border-primary hover:border-opacity-95 shadow  border-opacity-60 rounded-sm"
          >
            <div className="">
              <h2 className="dark:text-gray-300 mb-4 text-gray-700 font-bold text-xl">WhatsApp</h2>
              <p className="text-sm font-medium text-primary tracking-wide ">+8801301902371</p>
            </div>
            <button className="text-5xl text-black hover:opacity-90 opacity-70 dark:opacity-40">
              <IoLogoWhatsapp></IoLogoWhatsapp>
            </button>
          </Link>

          <Link
            href="https://www.facebook.com/anishazahan13?mibextid=ZbWKwL"
            target="_blank"
            className="flex items-center justify-between cursor-pointer px-12 py-10 border dark:bg-gray-900 bg-white border-primary hover:border-opacity-95 shadow  border-opacity-60 rounded-sm"
          >
            <div className="">
              <h2 className="dark:text-gray-300 mb-4 text-gray-700 font-bold text-xl">Facebook</h2>
              <p className="text-sm font-medium text-primary tracking-wide">Social Communication</p>
            </div>
            <button className="text-5xl text-black hover:opacity-90 opacity-70 dark:opacity-40">
              <FaFacebookF></FaFacebookF>
            </button>
          </Link>

          <Link
            href="https://www.upwork.com/freelancers/~012eab5219ebb8b6dd"
            target="_blank"
            className="flex items-center justify-between cursor-pointer px-12 py-10 border dark:bg-gray-900 bg-white border-primary hover:border-opacity-95 shadow  border-opacity-60 rounded-sm"
          >
            <div className="">
              <h2 className="dark:text-gray-300 mb-4 text-gray-700 font-bold text-xl">Upwork</h2>
              <p className="text-sm font-medium text-primary tracking-wide">Connect for Best Service</p>
            </div>
            <button className="text-5xl text-black hover:opacity-90 opacity-70 dark:opacity-40">
              <SiUpwork></SiUpwork>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Friends;
