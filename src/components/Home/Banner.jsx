import { useRouter } from "next/router";
import React from "react";
import HomeBanner from "./HomeBanner";

const Banner = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" ? (
        <HomeBanner></HomeBanner>
      ) : router.pathname === "/about" ? (
        <p>about</p>
      ) : (
        <h2>other banner</h2>
      )}
    </>
  );
};

export default Banner;
