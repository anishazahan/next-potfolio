import { usePostProjectMutation } from "@/Redux/features/projectApi";
import {
  setError,
  setLoading,
  setSuccess,
} from "@/Redux/features/projectSlice";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const ProjectForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, control, watch, reset } = useForm();
  const useTecnology = watch("useTecnology", []);
  const description = watch("description", []);

  const [postProject, { isLoading }] = usePostProjectMutation();

  // Handler to add tags for the description field when pressing Enter
  const handleDescriptionKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputValue = event.target.value.trim();
      if (inputValue !== "") {
        setValue("description", [...description, inputValue]);
        event.target.value = ""; // Clear the input field
      }
    }
  };

  // Handler to remove tags for the description field
  const handleDescriptionTagRemove = (tagToRemove) => {
    setValue(
      "description",
      description.filter((tag) => tag !== tagToRemove)
    );
  };

  // Handler to remove tags for the useTecnology field
  const handleUseTecnologyTagRemove = (tagToRemove) => {
    setValue(
      "useTecnology",
      useTecnology.filter((tag) => tag !== tagToRemove)
    );
  };

  // const handleInputKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     event.preventDefault();
  //     const inputValue = event.target.value.trim();
  //     if (inputValue !== '') {
  //       // Implement the logic for handling the keydown event for this input
  //       // For example, you can update the state or perform any other actions.
  //       console.log('Input keydown event handled:', inputValue);
  //       event.target.value = ''; // Clear the input field
  //     }
  //   }
  // };

  const handleUseTechnologyKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputValue = event.target.value.trim();
      if (inputValue !== "") {
        setValue("useTecnology", [...useTecnology, inputValue]);
        event.target.value = ""; // Clear the input field
      }
    }
  };

  // submit form

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(setLoading(true));
    try {
      await postProject(data);
      dispatch(setSuccess(true));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
    reset();
    window.alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-5 bg-gray-100 my-10">
      <form
        className=""
        onSubmit={handleSubmit(onSubmit)}
        name="form_item_path"
        layout="vertical"
        style={{
          width: "50%",
          margin: "50px auto",
        }}
      >
        <input
          className="px-5 py-3 text-white border rounded w-full my-2"
          {...register("img")}
          placeholder="Image URL"
        />
        <input
          className="px-5 py-3 text-white border rounded w-full my-2"
          {...register("detailsImg")}
          placeholder="Details Image URL"
        />

        <input
          className="px-5 py-3 text-white border rounded w-full my-2"
          {...register("name")}
          placeholder="Project Name"
        />
        <input
          className="px-5 py-3 text-white border rounded w-full my-2"
          {...register("type")}
          placeholder="Project type"
        />

        {/* Description field as a textarea */}
        <div className="">
          {description.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
              <button
                type="button"
                className="tag-remove"
                onClick={() => handleDescriptionTagRemove(tag)}
              >
                x
              </button>
            </span>
          ))}
        </div>
        <input
          className="px-5 w-full py-3 text-white border border-black placeholder-white"
          type="text"
          onKeyDown={handleDescriptionKeyDown}
          placeholder="Type and press Enter to add tags for Description"
        />

        {/* Use Technology field as a textarea */}
        <div>
          {useTecnology.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
              <button
                type="button"
                className="tag-remove"
                onClick={() => handleUseTecnologyTagRemove(tag)}
              >
                x
              </button>
            </span>
          ))}
        </div>

        <input
          className="px-5 w-full py-3 border text-white w-ful border-black placeholder-white"
          type="text"
          onKeyDown={handleUseTechnologyKeyDown}
          placeholder="Type and press Enter to add tags for Use Technology"
        />

        <input
          className="px-5 py-3 border text-white rounded w-full my-2"
          {...register("live")}
          placeholder="Live URL"
        />
        <input
          className="px-5 py-3 border text-white rounded w-full my-2"
          {...register("code")}
          placeholder="GitHub Repository URL"
        />
        <input
          className="px-5 py-3 text-white border rounded w-full my-2"
          {...register("server")}
          placeholder="Server Repository URL"
        />

        <input
          className="px-5 py-3 border bg-primary text-white rounded w-full my-2"
          type="submit"
          value="Create News"
          style={{ margin: "10px 0px", width: "100%" }}
        />
      </form>
    </div>
  );
};

export default ProjectForm;
