import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';
// import img1 from '../../assets//img/StaffChacker.png'
// import img2 from '../../assets//img/Group 1.png'
// import userIcon from '../../assets//img/User circle.png'





import { AiOutlineMenuUnfold } from "react-icons/ai";
import Image from "next/image";



const Navbar = () => {
    const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar-bg shadow">
        <nav className=" z-10 custom-container py-4 flex justify-between  items-center ">
          <Link href="/" className="flex items-center space-x-2">
           {/* <Image width={50}  src={img2} alt="" />
           <Image width={180}  src={img1} alt="" /> */}
           <h2>logo</h2>
          </Link>

          <div className="hidden  lg:flex  lg:items-center lg:space-x-6">
           
              
                    <Link
                    href="/"
                    className=" text-gray-600 font-medium  "
                    >
                    Home
                    </Link>
            
                    <Link
                    href="/"
                    className=" text-gray-600 font-medium  "
                    >
                    About
                    </Link>
            

                    <Link
                    href="/"
                    className=" text-gray-600 font-medium  "
                    >
                    Services
                    </Link>

                    <Link
                    href="/"
                    className=" text-gray-600 font-medium  "
                    >
                    Project
                    </Link>
                    <Link
                    href="/"
                    className=" text-gray-600 font-medium  "
                    >
                    Blog
                    </Link>

                    <Link
                    href="/"
                    className=" text-gray-600 font-medium  "
                    >
                    Conatct
                    </Link>

           
          </div>

          <div className="">
              <Link href='/' className="flex items-center space-x-2 px-6 py-3 hover:text-white rounded-sm bg-black  ">
                <button className="font-medium text-white hover:text-white">See Resume</button>
                {/* <Image   src={userIcon} alt="" /> */}
              </Link>
            </div>

          <div className="lg:hidden ">
            <div className="">
              <button
                onClick={() => setIsMenuOpen(true)}
               
                className="drawer-button flex items-end text-black text-3xl text-black-600 p-3"
              >
                <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
              </button>
            </div>
          </div>
        </nav>

        {/* // for mobile */}
   
     
       
      </div>
    </>
  );
};

export default Navbar;
