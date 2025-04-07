import React from "react";
import Curveimg from "./Curveimg";
import Dynamiclist from "./Dynamiclist";
import whychoosejohri from "../assets/whychoosejohri.png";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function WeAreHere() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 md:my-10 py-10 flex flex-col lg:flex-row items-start justify-between w-full">
      {/* Left Section */}
      <div className="left w-full lg:w-1/2 mb-8 lg:mb-0">
        <Curveimg rounded={"bl"} src={whychoosejohri} />
      </div>
      {/* Right Section */}
      <div className="right w-full lg:w-1/2">
        <h1 className="text-[#0a56ab]  font-semibold text-2xl md:text-3xl ">
          We Are Here
        </h1>
        <p className="font-semibold text-md md:text-2xl my-4">
          Our Location In Canada
        </p>
        <p className="font-semibold text-gray-600 my-2">Address</p>
        <p>4000 Steeles Ave W Suite 200, Woodbridge, ON L4L 4V9, Canada</p>
        <a href="#" className="flex items-center gap-2 text-[#0a56ab] ">
          View on Map <FaArrowRight />
        </a>
        <p className="font-semibold mt-4 ">Email</p>
        <Link
          to={"#"}
          className="flex gap-2 items-center hover:opacity-80  transition-all duration-300"
        >
          <SiGmail /> info@gmail.com
        </Link>
        <p className="font-semibold mt-4 "> Phone Number</p>

        <p className="flex items-center gap-2">
          {" "}
          <FaPhoneAlt />
          905-605-5272 Woodbridge
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <FaPhoneAlt />
          905-230-0115 Brampton
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <FaPhoneAlt />
          519-513-2423 Kitchener
        </p>
      </div>
    </div>
  );
}

export default WeAreHere;
