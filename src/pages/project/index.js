import RootLayout from "../../components/layout/RootLayout";
import Projects from "../../components/Projects/Projects";

const Project = () => {
  return (
    // <div className="custom-container my-24">
    //   {data?.data?.map((item, index) => {
    //     return (
    //       <div key={index} className="">
    //         <Image width={400} height={400} src={item.img} alt="" />
    //         {/* Pass the id of the project to the UpdateProject component */}
    //         <Link href={`/project/UpdateProject?id=${item._id}`}>
    //           <button className="border p-3 border-black">Update</button>
    //         </Link>
    //         <button
    //           className="border p-3 border-red-500"
    //           onClick={() => handleDeleteProject(item._id)}
    //         >
    //           Delete
    //         </button>
    //       </div>
    //     );
    //   })}
    // </div>

    <div className="mt-20">
      <Projects></Projects>
    </div>
  );
};

export default Project;

Project.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
