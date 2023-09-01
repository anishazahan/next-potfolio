import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { HiCheckCircle } from "react-icons/hi";

const Contact = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://next-portfolio-server.vercel.app/api/project/send-message",
        // "http://localhost:5000/api/project/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      if (responseData.status === "success") {
        // Show the custom popup
        setShowPopup(true);

        // Reset the form fields
        reset();
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  // action="https://formspree.io/f/myyovplp"
  // method="post"

  return (
    <div className="  pt-16 pb-32">
      {/* <!-- component --> */}

      <div className="relative custom-container mb-4">
        <h2 className="text-[50px] font-extrabold font-uppercase absolute left-0 px-9 -top-10">
          <span className={`text-stroke-effect`} data-text="Contact" />
        </h2>

        <h2 className="text-3xl contact-heading mb-7 font-bold dark:text-gray-200 mt-4">
          Contact <span className="text-primary">Me</span>
        </h2>
      </div>

      <div className=" custom-container grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          data-aos="fade-right"
          className="px-6 py-10 md:py-6 mr-4 dark:bg-black/60 bg-gray-900 sm:rounded-md"
        >
          <h1 className="text-3xl sm:text-3xl text-gray-300  font-bold tracking-tight">
            Get in touch
          </h1>
          <p className="text-normal text-lg sm:text-2xl font-medium text-gray-300  mt-2">
            Fill in the form to start a conversation
          </p>

          <div className="flex items-center mt-8 text-gray-300 ">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              Jashore,Khulna,Bangladesh
            </div>
          </div>

          <div className="flex items-center mt-4 text-gray-300 ">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              +8801979552658
            </div>
          </div>

          <div className="flex items-center mt-2 text-gray-300 ">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              anishazahan13@gmail.com
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 lg:px-5 md:px-0"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-blue-500">
                Your name
              </label>
              {errors.name && (
                <span className="text-red-500 text-sm text-italic">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="relative z-0">
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-blue-500">
                Your email
              </label>
              {errors.email && (
                <span className="text-red-500 text-sm text-italic">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                {...register("message", { required: "Message is required" })}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-200 focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-blue-500">
                Your message
              </label>
              {errors.message && (
                <span className="text-red-500 text-sm text-italic">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>
          <button
            data-aos="fade-up"
            type="submit"
            className="mt-5 font-semibold hover:opacity-70 duration-500 px-10 py-3 text-white bg-primary"
          >
            Send Message
          </button>
        </form>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-black/80 w-[80%] py-20  md:w-[600px]  items-center rounded-md">
              <div className="flex justify-center ">
                <button className="text-7xl text-green-700">
                  <HiCheckCircle></HiCheckCircle>
                </button>
              </div>
              <p className="text-xl text-slate-200 font-bold mb-4 text-center">
                Message Send Successfully.
              </p>
              <p className="text-gray-200 text-center mb-5">
                Contacted with you shortly
              </p>

              <div className="flex justify-center space-x-4 items-center mt-8">
                <button
                  className="px-6 py-2 bg-purple-700 text-white rounded-sm font-bold"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
