import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const All_Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://next-portfolio-server.vercel.app/api/project",
  }),

  endpoints: () => ({}),
  tagTypes: [""],
});
