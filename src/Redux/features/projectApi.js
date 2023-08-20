import { All_Api } from "../api/api";


const projectApi = All_Api.injectEndpoints({
  endpoints: (builder) => ({

    getProject: builder.query({
        query: () => "/",
      }),

    singleProject: builder.query({
      query: (id) => `/${id}`,
    }),

  
    postProject: builder.mutation({
      query: (data) => ({
        url: '/create-project',
        method: 'POST',
        body: data,
      }),
    }),


    // New endpoint for updating a project
    updateProject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update/${id}`, // Assuming you have an endpoint for updating a specific project with its ID
        method: 'PATCH', // Use 'PUT' for updates
        body: data,
      }),
    }),


       // New endpoint for deleting a project
       deleteProject: builder.mutation({
        query: (id) => ({
          url: `/delete/${id}`, // Assuming you have an endpoint for deleting a specific project with its ID
          method: 'DELETE',
        }),
      }),

    
    
  }),
});

export const {
useGetProjectQuery,
usePostProjectMutation,
useSingleProjectQuery,
useUpdateProjectMutation,
useDeleteProjectMutation

} = projectApi;
