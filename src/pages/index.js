import HomePage from "../components/Home/HomePage";
import RootLayout from "../components/layout/RootLayout";
import Cursor from "../shared/Cursor";
import ScrollToTopButton from "../shared/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Cursor></Cursor>
      <ScrollToTopButton />
      <HomePage></HomePage>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
