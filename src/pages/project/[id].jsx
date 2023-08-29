import React from "react";
import { useRouter } from "next/router";
import { data } from "../../components/Projects/data.js";
import Image from "next/image";
import Link from "next/link"; // Import Link directly from "next/link"
import RootLayout from "@/components/layout/RootLayout.jsx";

const ProjectDetails = () => {
  const router = useRouter();
  const projectId = router.query.id;
  const portfolioDetail = data.find((item) => item.id == projectId);

  if (!portfolioDetail) {
    // Handle the case when the project details are not found
    return <div>Project details not found.</div>;
  }

  return (
    <div className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="w-full lg:w-[60%] h-auto border">
          <Image
            width="0"
            height="0"
            className="w-full h-full"
            src={portfolioDetail.detailsImg}
            alt=""
          />
        </div>

        <h2 className=" text-2xl  text-white my-5">
          Name: <span className="font-bold">{portfolioDetail.name}</span>
        </h2>
        <div className="sm:space-y-4 flex-col md:flex-row md:space-x-6 flex">
          <h2 className="font-semibold underline text-2xl text-primary my-4">
            <Link href={portfolioDetail.live} target="_blank" rel="noreferrer">
              Live Link
            </Link>
          </h2>
          <h2 className="font-semibold underline text-2xl text-primary my-4">
            <Link href={portfolioDetail.code} rel="noreferrer" target="_blank">
              Client Code
            </Link>
          </h2>
          <h2 className="font-semibold underline text-2xl text-primary my-4">
            {/* Removed unnecessary string interpolation */}
            <Link
              href={portfolioDetail.server}
              rel="noreferrer"
              target="_blank"
            >
              Server Code
            </Link>
          </h2>
        </div>
        <h2 className="font-semibold text-2xl text-white my-3">
          Use Technology:
        </h2>

        <ul className="text-gray-300 ml-3 flex flex-wrap gap-3 font-medium">
          {portfolioDetail?.useTecnology?.map((technology, index) => (
            <li key={index}>{`${technology},`}</li>
          ))}
        </ul>
        <h2 className="font-semibold text-2xl text-white my-3">Feature:</h2>

        <ul className="text-gray-300 ml-3 font-medium space-y-3">
          {/* Display feature descriptions */}
          {portfolioDetail.description.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;

ProjectDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
