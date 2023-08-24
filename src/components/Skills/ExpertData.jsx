import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandRedux, TbBrandTypescript } from "react-icons/tb";

const ExpertData = () => {
  return (
    <div className=" mt-12">
      <div className="flex flex-wrap items-center gap-6">
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <FaHtml5></FaHtml5>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Html5</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <FaCss3Alt></FaCss3Alt>
          </button>
          <h2 className="dark:text-gray-200 font-bold">CSS3</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <BsFiletypeScss></BsFiletypeScss>
          </button>
          <h2 className="dark:text-gray-200 font-bold">SCSS</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <FaBootstrap></FaBootstrap>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Bootstrap</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <BiLogoTailwindCss></BiLogoTailwindCss>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Tailwind</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <IoLogoJavascript></IoLogoJavascript>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Javascript</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <FaReact></FaReact>
          </button>
          <h2 className="dark:text-gray-200 font-bold">React Js</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <TbBrandRedux></TbBrandRedux>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Redux</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <TbBrandTypescript></TbBrandTypescript>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Typescript</h2>
        </div>
      </div>
    </div>
  );
};

export default ExpertData;
