import Footer from "@/shared/Footer/Footer";
import Navbar from "@/shared/Navbar/Navbar";
import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { useState } from "react";

const RootLayout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`dark:bg-gray-800  ${theme === "dark" ? "dark" : ""}`}>
      <Navbar></Navbar>
      <NextTopLoader color="#5036E1" height={4} />

      <div className={` theme-${theme}`}>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
