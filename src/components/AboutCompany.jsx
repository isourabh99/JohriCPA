import React from "react";
import Curveimg from "./Curveimg";
import Dynamiclist from "./Dynamiclist";
import aboutcompany from "../assets/aboutcompany.png"
function AboutCompany() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 md:my-10 py-10 flex flex-col lg:flex-row items-center justify-between w-full">
      {/* Left Section */}
      <div className="left w-full lg:w-1/2 mb-8 lg:mb-0">
        <Curveimg rounded={'bl'} src={aboutcompany}/>
      </div>
      {/* Right Section */}
      <div className="right w-full lg:w-1/2">
        <Dynamiclist />
      </div>
    </div>
  );
}

export default AboutCompany;
