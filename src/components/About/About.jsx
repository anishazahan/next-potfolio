import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import img from "../../assets/img/Group 376.png";

const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row custom-container justify-between items-center pt-10 lg:pt-24 pb-32 md:space-x-14">
        <div className=" w-full lg:w-[45%] mb-20 lg:mb-0">
          <Image width="0" height="0" className="w-full" src={img} alt="" />
        </div>
        <div className=" w-full lg:w-[55%]">
          <div className="relative mb-4">
            <h2 className="text-[70px] font-extrabold font-uppercase absolute left-0 -top-16">
              <span className={`text-stroke-effect`} data-text="About" />
            </h2>

            <h2 className="text-3xl pl-0 mb-7 font-bold dark:text-gray-200 mt-4">
              Know About <span className="text-primary">Me</span>
            </h2>
          </div>

          <p className="dark:text-gray-300  text-gray-500 mb-3">
            I am a passionate and self-driven Frontend Developer with 2 years of professional experience, specializing
            in <b>React and Next.js.</b> I have a strong foundation in HTML5, CSS3,Tailwind, and JavaScript, allowing me
            to create modern, responsive, and high-performance web applications. My expertise lies in developing
            mobile-first designs and ensuring cross-platform compatibility, ensuring seamless experiences across all
            devices. I am proficient in integrating RESTful APIs and optimizing frontend-backend communication for
            smooth and efficient data handling.
          </p>

          <p className="dark:text-gray-300 text-gray-500 font-medium mb-3">
            I enhance development processes backend functionalities through RESTful APIs.I make teamwork effort. SEO
            knowledge is a valuable addition, boosting frontend elements for improved search engine rankings.
          </p>

          <p className="dark:text-gray-300 text-gray-500 font-medium ">
            I am motivated to learn, adapt and complete tasks in a timely manner.I am fronted React/Next Js Developer.I
            have 2 years work and <b>professional experience</b>.
          </p>

          <div className="inline-block ">
            <Link
              href="/project"
              className="group hover:bg-primary bg-gray-200 dark:bg-gray-700 pr-7 duration-500 ease-linear dark:hover:bg-primary rounded-full mt-10 flex items-center space-x-2"
            >
              <button className="p-4  bg-primary dark:group-hover:bg-black duration-500 rounded-full text-xl text-gray-200">
                <FaChevronRight></FaChevronRight>
              </button>
              <button className="dark:text-gray-300 group-hover:text-white font-semibold text-black ">
                See Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
