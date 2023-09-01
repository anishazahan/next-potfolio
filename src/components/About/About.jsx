import Image from "next/image";
import img from "../../assets/img/Group 376.png";
import Link from "next/link";
import styles from "../../styles/Custome/custom.module.css";
import { FaChevronRight } from "react-icons/fa";

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

          <p className="dark:text-gray-300  text-gray-500 mb-2">
            I am an enthusiastic and proactive self-taught developer and problem
            solver who is passionate about technologies.Proficient in HTML5,
            CSS3, and JavaScript, I bring a modern touch to frontend
            development. From optimizing website performance to delivering
            exceptional loading speed.
          </p>

          <p className="dark:text-gray-300 text-gray-500 font-medium mb-2">
            Mobile-first designs and cross-platform compatibility are my
            specialties.Continuously updated with the latest trends and best
            practices, I enhance development processes backend functionalities
            through RESTful APIs.I make teamwork effort. SEO knowledge is a
            valuable addition, boosting frontend elements for improved search
            engine rankings.
          </p>

          <p className="dark:text-gray-300 text-gray-500 font-medium mb-2">
            I am motivated to learn, adapt and complete tasks in a timely
            manner.I am fronted React/Next Js Developer.I have 2 years work
            experience.
          </p>

          <div className="inline-block ">
            <Link
              href="/project"
              className="group hover:bg-primary bg-gray-200 dark:bg-gray-700 pr-7 duration-300 rounded-full mt-10 flex items-center space-x-2"
            >
              <button className="p-4 bg-primary rounded-full text-xl text-gray-200">
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
