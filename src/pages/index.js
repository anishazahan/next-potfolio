import RootLayout from "@/components/layout/RootLayout";
import Project from "./project";
import Cursor from "@/shared/Cursor";

const HomePage = () => {
  return (
    <>
      {/* <Cursor></Cursor> */}

      <div className="p-4 dark:text-white dark:bg-black bg-gray-100 text-black">
        <h2 className="text-2xl font-bold text-[#5036E1] ">Theme Example</h2>
        <p className="mt-2 gradient-text ">
          This content will adjust based on the selected theme.
        </p>
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
