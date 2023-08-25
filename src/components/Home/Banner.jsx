import { useRouter } from "next/router";
import React from "react";
import HomeBanner from "./HomeBanner";

const Banner = () => {
  const router = useRouter();
  return <>{router.pathname === "/" && <HomeBanner></HomeBanner>}</>;
};

export default Banner;
