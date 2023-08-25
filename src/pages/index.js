import RootLayout from "@/components/layout/RootLayout";
import Project from "./project";
import Cursor from "@/shared/Cursor";
import HomePage from "@/components/Home/HomePage";
import ScrollToTopButton from "@/shared/ScrollToTopButton";

const Home = () => {
  return (
    <>
      {/* <Cursor></Cursor> */}

      <ScrollToTopButton />
      <HomePage></HomePage>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
