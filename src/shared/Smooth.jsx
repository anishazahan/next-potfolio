import { Link } from "react-scroll";

const SmoothScroll = () => {
  return (
    <div className="hidden fixed bottom-4 right-4 md:block">
      <Link
        to="top"
        smooth={true}
        duration={500}
        className="text-blue-500 hover:text-blue-700 transition duration-300 cursor-pointer"
      >
        Scroll to Top
      </Link>
    </div>
  );
};

export default SmoothScroll;
