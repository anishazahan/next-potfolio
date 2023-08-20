import Footer from "@/shared/Footer/Footer";
import Navbar from "@/shared/Navbar/Navbar";
import { useTheme } from "next-themes";

import { useState } from "react";

const RootLayout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`dark:bg-gray-900 ${theme === "dark" ? "dark" : ""}`}>
      <Navbar></Navbar>
      <div className={`theme-${theme} h-[70vh]`}>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
