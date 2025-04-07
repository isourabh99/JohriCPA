import React from 'react'
import ourdifference from "../assets/ourdifference.png"
import Curveimg from './Curveimg';

function OurDifference() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 md:my-10 py-10 flex flex-col lg:flex-row items-start justify-between gap-50 w-full">
      {/* Left Section */}
      <div className="left w-full lg:w-1/2 ">
        <p className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#0a56ab]">
          Our Difference
        </p>
        <p className="text-lg sm:text-xl md:text-2xl md:my-6">
          Where Expertise Meets Personalized Service.
        </p>
        <p className=" text-md md:my-6">
          At Johri CPA, we believe in more than just crunching numbers. Our
          approach is tailored to your unique financial needs, combining deep
          industry knowledge with personalized attention. We go beyond the
          basics, providing strategic insights that drive growth and efficiency.
          With a commitment to excellence and a passion for your success, Johri
          CPA stands out by delivering proactive solutions and unparalleled
          client support. Discover the difference with Johri CPA, where your
          financial health is our top priority.​
        </p>
        <button className="bg-[#0a56ab] rounded text-white px-4 py-2 md:my-6 hidden md:flex items-center gap-3 justify-center font-semibold hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer">
          Contact Us
        </button>
      </div>
      {/* Right Section */}
      <div className="right w-full lg:w-1/2">
        <Curveimg rounded={"br"} src={ourdifference} />
      </div>
    </div>
  );
}

export default OurDifference