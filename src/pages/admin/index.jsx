import {
  useDeleteProjectMutation,
  useGetProjectQuery,
} from "@/Redux/features/projectApi";
import Image from "next/image";
import Link from "next/link";

const Admin = () => {
  const { data, isLoading, isError, error } = useGetProjectQuery();
  const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();
  console.log("this is data", data?.data);

  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject(projectId);
      // Optionally, you can trigger a re-fetch of the data here to update the UI
    } catch (error) {
      // Handle the error if the delete request fails
    }
  };

  return (
    <div className="custom-container my-24">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data?.data?.map((item, index) => {
          return (
            <div key={index} className="">
              <Image width={300} height={300} src={item.img} alt="" />
              {/* Pass the id of the project to the UpdateProject component */}
              <Link href={`/project/UpdateProject?id=${item._id}`}>
                <button className="border p-3 border-black">Update</button>
              </Link>
              <button
                className="border p-3 border-red-500"
                onClick={() => handleDeleteProject(item._id)}
              >
                Delete
              </button>
              <Link
                href="/project/ProjectForm"
                className="border p-3 border-red-500"
              >
                Create project
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
