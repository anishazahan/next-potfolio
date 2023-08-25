import React, { useState, useEffect } from "react";
import { BiSolidChevronUp } from "react-icons/bi";
import styles from "../styles/Custome/custom.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={` bg-gray-950 border border-primary flex justify-center items-center text-xl ${
        styles.scrollToTop
      } ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <BiSolidChevronUp></BiSolidChevronUp>
    </button>
  );
};

export default ScrollToTopButton;
