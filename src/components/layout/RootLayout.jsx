import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";

const RootLayout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`dark:bg-gray-800  `}>
      <Navbar></Navbar>
      <NextTopLoader color="#5036E1" height={4} />
      {/* theme-${theme} */}
      <div
        className={`
    
         `}
      >
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
