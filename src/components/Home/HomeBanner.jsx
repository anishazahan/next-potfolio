import Link from "next/link";
import { AiFillSkype } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import resume from "./resume.pdf";

const HomeBanner = () => {
  // useEffect(() => {
  //   const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.75)" } });

  //   tl.from(".bouncy-btn", {
  //     scale: 0.8,
  //     opacity: 0,
  //     duration: 0.6,
  //     stagger: 0.2,
  //   });
  // }, []);
  return (
    <div className=" custom-container pt-24 pb-32">
      {/* <div className=" z-10 top-[30%] right-0 fixed">
        <ChangeColor></ChangeColor>
      </div> */}
      <div className="flex justify-center text-center items-center">
        <div className="">
          <h2 className="dark:text-gray-200 text-gray-100 font-semibold mb-3">Hey, I am Anisha Zahan Hashi </h2>
          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="200"
            className="text-5xl text-gray-200 font-bold mx-auto text-center pb-6"
          >
            Expert <span className="text-primary">Frontend </span> Developer
          </h2>
          <p className="dark:text-gray-200 text-center mx-auto font-medium max-w-xl pb-4">
            I am Frontend Developer with 2 years work experience.I will customize your website as your creative choice.
          </p>
          <div className="flex justify-center space-x-5 items-center mt-5 pb-10">
            <Link
              href="/contact"
              className="px-6  py-3  rounded-sm text-white hover:bg-black font-semibold tracking-wider bg-primary"
            >
              Hire Me
            </Link>
            <Link
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-[11px] border border-primary dark:text-white dark:bg-black/75 rounded-sm text-primary hover:opacity-70 font-semibold tracking-wider hover:text-primary bouncy-btn"
            >
              See Resume
            </Link>
          </div>

          <div className="flex justify-center items-center space-x-2">
            <Link
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="300"
              href="https://www.facebook.com/anishazahan13?mibextid=ZbWKwL"
              className="text-2xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full"
            >
              <BsFacebook></BsFacebook>
            </Link>
            <Link
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="400"
              href="https://join.skype.com/invite/wml21guEKXrn"
              className="text-2xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full"
            >
              <AiFillSkype></AiFillSkype>
            </Link>
            <Link
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="500"
              href="mailto:anishazahan13@email.com"
              className="text-2xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full"
            >
              <SiGmail></SiGmail>
            </Link>
            <Link
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="600"
              href="https://www.linkedin.com/in/anisha-zahan/"
              className="text-2xl text-primary border p-2 border-primary border-opacity-60  dark:bg-black/70 rounded-full"
            >
              <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
            </Link>
          </div>
        </div>
        {/* <div className="w-[50%]">
          <Image
            width="0"
            height="0"
            className="w-full h-full"
            src={img}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default HomeBanner;
