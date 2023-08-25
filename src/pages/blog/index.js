import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const Blog = () => {
  return (
    <div className="min-h-[60vh]">
      <h2 className="flex justify-center h-full pt-[10%] items-center text-2xl dark:text-gray-200 font-bold">
        New blog is coming soon!!
      </h2>
    </div>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
