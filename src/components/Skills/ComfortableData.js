import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoFirebase } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandRedux, TbBrandTypescript } from "react-icons/tb";

const ComfortableData = () => {
  return (
    <div className=" mt-12">
      <div className="flex flex-wrap items-center gap-6">
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <h2 className="text-xl text-primary font-bold py-5">UI/UX</h2>
          <h2 className="dark:text-gray-200 font-bold">UI/UX Design</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <FaNodeJs></FaNodeJs>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Node Js</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <SiExpress></SiExpress>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Express Js</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <DiMongodb></DiMongodb>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Mongo DB</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <BiLogoFirebase></BiLogoFirebase>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Firebase</h2>
        </div>
      </div>
    </div>
  );
};

export default ComfortableData;
