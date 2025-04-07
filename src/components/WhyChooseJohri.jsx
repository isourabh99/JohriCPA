import React from 'react'
import Curveimg from "./Curveimg";
import whychoosejohri from "../assets/whychoosejohri.png";

function WhyChooseJohri() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 md:my-10 py-10 flex flex-col lg:flex-row items-center justify-between w-full">
      {/* Left Section */}
      <div className="left w-full lg:w-1/2 mb-8 lg:mb-0">
        <Curveimg rounded={"bl"} src={whychoosejohri} />
      </div>
      {/* Right Section */}
      <div className="right w-full lg:w-1/2">
        <div className="mb-4">
          <h3 className=" text-xl md:text-2xl font-semibold mb-2">
            Expertise and Experience
          </h3>
          <p className="text-gray-500 md:text-lg">
            With years of experience in the accounting industry, our team has
            the expertise to handle all your accounting needs.
          </p>
        </div>
        <div className="mb-4">
          <h3 className=" text-xl md:text-2xl font-semibold mb-2">
            Personalized Service
          </h3>
          <p className="text-gray-500 md:text-lg">
            We understand that every client is unique. That’s why we offer
            personalized services tailored to your specific requirements.
          </p>
        </div>
        <div className="mb-4">
          <h3 className=" text-xl md:text-2xl font-semibold mb-2">
            Commitment to Excellence
          </h3>
          <p className="text-gray-500 md:text-lg">
            We are committed to providing the highest level of service to our
            clients. Our attention to detail and dedication to excellence sets
            us apart.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseJohri