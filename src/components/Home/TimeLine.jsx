const TimeLine = () => {
  return (
    <>
      {/* <!-- component --> */}

      <div className="relative custom-container">
        <h2 className="text-[60px] flex justify-center mx-auto text-center font-extrabold font-uppercase absolute left-0 right-56 -top-14">
          <span className={`text-stroke-effect`} data-text="ChoseMe" />
        </h2>

        <h2 className="text-3xl text-center mb-3 font-bold dark:text-gray-200 mt-4">
          Why you can Chose <span className="text-primary">Me!!!</span>
        </h2>
        <div className="flex justify-center w-48 mb-8 h-[3px] bg-primary mx-auto"></div>
      </div>

      <div className=" custom-container pt-9 pb-16 mx-auto w-full h-full hidden lg:block">
        <div className="relative wrap overflow-hidden p-5 md:py-10 h-full">
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div
              data-aos="fade-down"
              data-aos-delay=".500"
              className="z-20 hidden md:flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full"
            >
              <h1 className="mx-auto font-bold text-lg text-white">1</h1>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay=".500"
              className="order-1 dark:bg-gray-900 bg-gray-50 border border-primary border-opacity-50 rounded text-xl  shadow li w-full md:w-5/12 px-8 light:font-semibold py-7"
            >
              <h3 className="mb-3 font-medium dark:text-gray-200 ">
                Stay up-to-date with the latest frontend technologies, trends, and best practices to continuously
                improve our development processes,Design and UX Sensibility.
              </h3>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div
              data-aos="fade-down"
              data-aos-delay=".700"
              className="z-20 hidden md:flex  items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full"
            >
              <h1 className="mx-auto text-white font-bold text-lg">2</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay=".700"
              className="order-1 dark:bg-gray-900 bg-gray-50 border border-primary border-opacity-50 rounded text-xl  shadow li w-full md:w-5/12 px-8 light:font-semibold py-7"
            >
              <h3 className="mb-3  dark:text-gray-200 text-xl">
                Attention to Detail,Strong Problem-Solving Skills,Experience with Performance Optimization,Proven Track
                Record,Creative and Innovative Thinking,Focus on Accessibility and Inclusivity,Client-Focused Approach
              </h3>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div
              data-aos="fade-down"
              data-aos-delay=".800"
              className="z-20 hidden md:flex  items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full"
            >
              <h1 className="mx-auto font-bold text-lg text-white">3</h1>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay=".800"
              className="order-1 dark:bg-gray-900 bg-gray-50 border border-primary border-opacity-50 rounded text-xl  shadow li w-full md:w-5/12 px-8 light:font-semibold py-7"
            >
              <h3 className="mb-3  dark:text-gray-200 text-xl">
                Process improvement,workflow optimization.User Requirement Gathering,Cross browser
                operability,Responsive design for all devices.
              </h3>
            </div>
          </div>
          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div
              data-aos="fade-down"
              data-aos-delay=".900"
              className="z-20 hidden md:flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full"
            >
              <h1 className="mx-auto text-white font-bold text-lg">4</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay=".900"
              className="order-1 dark:bg-gray-900 bg-gray-50 border border-primary border-opacity-50 rounded text-xl  shadow li w-full md:w-5/12 px-8 light:font-semibold py-7"
            >
              <h3 className="mb-3  dark:text-gray-200 text-xl">
                Fresh, Commentable, Clean Code, Error handling, Debugging, fixing problems.Client Interaction about the
                project.{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- component -->  for medium device */}
      <div className="light:bg-gray-50">
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative pt-10 pb-16 lg:hidden">
          <div className="border-l-2">
            {/* <!-- Card 1 --> */}
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white border border-primary border-opacity-50 shadow dark:bg-gray-900 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              {/* <!-- Dot Follwing the Left Vertical Line --> */}
              <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              {/* <!-- Line that connecting the box with the vertical line --> */}
              <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

              {/* <!-- Content that showing in the box --> */}
              <div className="flex-auto">
                <h3 className="mb-3 font-bold dark:text-gray-200 text-xl">
                  Web Design and ,React .Js ,Fronted,Junior Mern Stack Developer.
                </h3>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 border border-primary border-opacity-50 shadow dark:bg-gray-900 rounded mb-10 flex-col bg-white md:flex-row space-y-4 md:space-y-0">
              {/* <!-- Dot Follwing the Left Vertical Line --> */}
              <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              {/* <!-- Line that connecting the box with the vertical line --> */}
              <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

              {/* <!-- Content that showing in the box --> */}
              <div className="flex-auto">
                <h3 className="mb-3 font-bold dark:text-gray-200 text-xl">
                  Cross browser operability,Responsive design for all devices.
                </h3>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white border border-primary border-opacity-50 shadow dark:bg-gray-900 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              {/* <!-- Dot Follwing the Left Vertical Line --> */}
              <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              {/* <!-- Line that connecting the box with the vertical line --> */}
              <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

              {/* <!-- Content that showing in the box --> */}
              <div className="flex-auto">
                <h3 className="mb-3 font-bold dark:text-gray-200 text-xl">
                  Process improvement,workflow optimization.User Requirement Gathering.
                </h3>
              </div>
            </div>
            {/* <!-- Card 4--> */}
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white border border-primary border-opacity-50 shadow dark:bg-gray-900 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              {/* <!-- Dot Follwing the Left Vertical Line --> */}
              <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              {/* <!-- Line that connecting the box with the vertical line --> */}
              <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

              {/* <!-- Content that showing in the box --> */}
              <div className="flex-auto">
                <h3 className="mb-3 font-bold dark:text-gray-200 text-xl">
                  Fresh, Commentable, Clean Code, Error handling, Debugging, fixing problems.Client Interaction about
                  the project.{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
