import { li } from "motion/react-client";
import React from "react";

function Services({ title, welcomeMessage, introduction, services }) {
  return (
    <div className="px-6 lg:px-24 my-10 ">
      <p className="text-[#0a56ab]   font-semibold text-2xl md:text-4xl">
        {title}
      </p>
      <p className="my-4 text-xl font-semibold">{welcomeMessage}</p>
      <p className="my-4 text-gray-400 ">{introduction}</p>
      <p className="my-4 text-[#0a56ab] font-semibold text-xl ">Our Services</p>
      <div className="flex justify-between flex-wrap ">
        {services.map((service, idx) => (
          <div className=" md:w-[45%] my-4 bg-blue-50 p-4 rounded" key={idx}>
            <p className="font-semibold text-2xl ">
              {idx + 1}. {service.title}
            </p>
            {service.description && <p className="text-gray-600 my-2">{service.description}</p>}
            <ul className="">
              {service.subServices.map((subService, idx) => (
                <li key={idx} className="text-lg my-2 text-gray-500">
                  <span className="text-black font-semibold">
                    • {subService.title}:
                  </span>
                  <span> {subService.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
