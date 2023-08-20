
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const All_Api = createApi({
 
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/project" }),

  endpoints: () => ({

  }),
  tagTypes:[''],
});


