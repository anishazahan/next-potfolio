import Link from "next/link";

import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import darkLogo from "../../assets/img/Group 381.png";
import Banner from "../../components/Home/HomeBanner";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // ....  theme .........
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navbarBgClass = theme === "dark" ? "navbar_dark_bg" : theme === "light" ? "navbar_light_bg" : "navbar_dark_bg;";

  return (
    <div className={``}>
      <div className={` navbar_dark_bg  bg-no-repeat bg-cover bg-center m-auto `}>
        <div className="shadow bg-gray-900">
          <nav className=" z-10 custom-container  py-5  flex justify-between  items-center ">
            <Link href="/" className="flex items-center">
              <Image width={100} height={100} src={darkLogo} alt="" />
            </Link>

            <div className="hidden  lg:flex  lg:items-center lg:space-x-6">
              <Link
                duration={500}
                href="/"
                className={`font-semibold ${router.pathname === "/" ? "text-primary" : "text-gray-200 "}`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`font-semibold ${router.pathname === "/about" ? "text-primary" : "text-gray-200 "}`}
              >
                About
              </Link>

              <Link
                href="/service"
                className={`font-semibold ${router.pathname === "/service" ? "text-primary" : "text-gray-200 "}`}
              >
                Services
              </Link>

              <Link
                href="/project"
                className={`font-semibold ${router.pathname === "/project" ? "text-primary" : "text-gray-200 "}`}
              >
                Project
              </Link>
              <Link
                href="/blog"
                className={`font-semibold ${router.pathname === "/blog" ? "text-primary" : "text-gray-200 "}`}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className={`font-semibold ${router.pathname === "/contact" ? "text-primary" : "text-gray-200 "}`}
              >
                Conatct
              </Link>
            </div>

            <div className=" hidden lg:flex space-x-6 items-center">
              <label className="swap swap-rotate px-3 py-1 rounded-full ">
                <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
                <svg className="swap-on fill-primary w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg className="swap-off fill-primary w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
              <Link
                href="/contact"
                className="px-6 hover:bg-black py-3  rounded-sm text-white font-semibold tracking-wider bg-primary"
              >
                Contact Me
              </Link>
            </div>

            <div className="lg:hidden flex space-x-3 items-center">
              <label className="swap swap-rotate px-4 md:px-6 py-1 rounded-full bg-gray-700 dark:bg-gray-700">
                <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
                <svg
                  className="swap-on fill-white h-6 w-6 md:w-10 md:h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-white h-6 w-6 md:w-10 md:h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
              <div className="">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="drawer-button flex items-end text-white text-3xl text-black-600 py-3"
                >
                  <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* // for mobile */}

        {isMenuOpen && (
          <div className="duration-500 transition-all navbar-menu relative z-50 lg:hidden">
            <div className=" fixed inset-0 bg-transparent"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-zinc-900 border-r overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center">
                  <Image width="" height="" src={darkLogo} alt="" />
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="navbar-close">
                  <svg
                    className="h-6 w-6 text-gray-200 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="space-y-6 flex flex-col items-center">
                <Link
                  duration={500}
                  href="/"
                  className={`font-semibold ${router.pathname === "/" ? "text-primary" : "text-gray-200 "}`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className={`font-semibold ${router.pathname === "/about" ? "text-primary" : "text-gray-200 "}`}
                >
                  About
                </Link>

                <Link
                  href="/service"
                  className={`font-semibold ${router.pathname === "/service" ? "text-primary" : "text-gray-200 "}`}
                >
                  Services
                </Link>

                <Link
                  href="/project"
                  className={`font-semibold ${router.pathname === "/project" ? "text-primary" : "text-gray-200 "}`}
                >
                  Project
                </Link>
                <Link
                  href="/blog"
                  className={`font-semibold ${router.pathname === "/blog" ? "text-primary" : "text-gray-200 "}`}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className={`font-semibold ${router.pathname === "/contact" ? "text-primary" : "text-gray-200 "}`}
                >
                  Conatct
                </Link>
              </div>
            </nav>
          </div>
        )}

        {pathname === "/" && <Banner />}
      </div>
    </div>
  );
};

export default Navbar;
