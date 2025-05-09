import React from 'react'
import workprocess from "../assets/workprocess4.png"
function WorkProcess() {
  return (
    <div className="px-6 w-full md:px-24 ">
      <h1 className="text-[#0a56ab] text-center  font-semibold text-2xl md:text-3xl">
        Work Process
      </h1>
      <p className=" text-center font-semibold md:text-xl mt-4">
        Our easy work process in 5 steps
      </p>
      <img
        src={workprocess}
        alt="Workflow and Process Diagram"
        loading="lazy"
        className="mx-auto  my-10"
      />
    </div>
  );
}

export default WorkProcess