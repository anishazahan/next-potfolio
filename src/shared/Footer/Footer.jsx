import {
  FaFacebookSquare,
  FaLinkedin,
  FaSkype,
  FaGooglePlus,
} from "react-icons/fa";
// import "./Footer.css"
import Link from "next/link";
import Image from "next/image";
import darkLogo from "../../assets/img/Group 381.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillSkype } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="custom-container px-4 py-16 mx-auto ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Image width="" height="" src={darkLogo} alt="" />
            <p className="max-w-xs mt-4 text-sm text-gray-400">
              You will get 100% full service of work assured until you are fully
              satisfied
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <button className="text-xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full">
                <BsFacebook></BsFacebook>
              </button>
              <button className="text-xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full">
                <AiFillSkype></AiFillSkype>
              </button>
              <button className="text-xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full">
                <SiGmail></SiGmail>
              </button>
              <button className="text-xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full">
                <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold uppercase text-gray-300 border-b-2 border-primary inline-block">
                About
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-400">
                <Link className="hover:opacity-75" href="/">
                  About
                </Link>
                <Link className="hover:opacity-75" href="/">
                  Courses
                </Link>
                <Link className="hover:opacity-75" href="/">
                  Certificate
                </Link>
                <Link className="hover:opacity-75" href="/">
                  Project
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-semibold uppercase text-gray-300 border-b-2 border-primary inline-block">
                Services
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-400">
                <Link className="hover:opacity-75" href="/">
                  Web Design
                </Link>
                <Link className="hover:opacity-75" href="/">
                  Web Development
                </Link>
                <Link className="hover:opacity-75" href="/">
                  UI UX Design
                </Link>
                <Link className="hover:opacity-75" href="/">
                  Backend Application
                </Link>
                <Link className="hover:opacity-75" href="/">
                  SEO Optimization
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-semibold uppercase text-gray-300 border-b-2 border-primary inline-block">
                Helpful Links
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-400">
                <Link className="hover:opacity-75" href="/service">
                  Services
                </Link>
                <Link className="hover:opacity-75" href="/contact">
                  Social Links
                </Link>
                <Link className="hover:opacity-75" href="/project">
                  Projects
                </Link>
                <Link className="hover:opacity-75" href="/contact">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-semibold uppercase text-gray-300 border-b-2 border-primary inline-block">
                Legal
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-400">
                <Link className="hover:opacity-75" href="/project">
                  Privacy Policy
                </Link>
                <Link className="hover:opacity-75" href="/contact">
                  Clean Source Code
                </Link>
                <Link className="hover:opacity-75" href="/contact">
                  Satisfaction
                </Link>
                <Link className="hover:opacity-75" href="/contact">
                  Creative Design
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-sm text-gray-300 pb-8">
        Copyright &copy; By{" "}
        <span className="text-primary font-bold">Anisha Zahan </span>{" "}
        {new Date().getFullYear()}
      </h2>
    </footer>
  );
};

export default Footer;
