import React from "react";
import Curveimg from "./Curveimg";
import Dynamiclist from "./Dynamiclist";
import aboutcompany from "../assets/aboutcompany.png"
function AboutCompany() {
  return (
    <div className="px-6 md:px-24 md:my-10 py-10 flex flex-col lg:flex-row items-start justify-between w-full">
      {/* Left Section */}
      <div className="left w-full lg:w-1/2 mb-8 lg:mb-0">
        <Curveimg
          rounded={"bl"}
          src={
            "https://i.pinimg.com/736x/bd/0d/3b/bd0d3b0e161b50acb74c2557bdc3e692.jpg"
          }
        />
      </div>
      {/* Right Section */}
      <div className="right w-full lg:w-1/2">
        <Dynamiclist />
      </div>
    </div>
  );
}

export default AboutCompany;
