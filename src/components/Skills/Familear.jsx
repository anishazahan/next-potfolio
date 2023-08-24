import { DiPostgresql, DiRedis } from "react-icons/di";
import { SiPrisma } from "react-icons/si";

const Familear = () => {
  return (
    <div className=" mt-12">
      <div className="flex flex-wrap items-center gap-6">
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <DiPostgresql></DiPostgresql>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Postgresql</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <SiPrisma></SiPrisma>
          </button>
          <h2 className="dark:text-gray-200 font-bold">prisma</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <DiRedis></DiRedis>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Redis</h2>
        </div>
      </div>
    </div>
  );
};

export default Familear;
