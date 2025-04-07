import React from "react";
import { RiFocusLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function Dynamiclist() {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <p className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#0a56ab]">
        About Company
      </p>
      <p className="text-lg sm:text-xl md:text-2xl my-2">
        We provide exceptionally good services at competitive prices.
      </p>
      <ul>
        <li className="flex items-center gap-2 text-base sm:text-lg md:text-xl my-2">
          <RiFocusLine color="#0a56ab" />
          Personal & Corporation Tax
        </li>
        <li className="flex items-center gap-2 text-base sm:text-lg md:text-xl my-2">
          <RiFocusLine color="#0a56ab" />
          HST & Payroll Tax returns
        </li>
        <li className="flex items-center gap-2 text-base sm:text-lg md:text-xl my-2">
          <RiFocusLine color="#0a56ab" />
          Compilation engagement
        </li>
        <li className="flex items-center gap-2 text-base sm:text-lg md:text-xl my-2">
          <RiFocusLine color="#0a56ab" />
          Bookkeeping & Payroll services
        </li>
        <li className="flex items-center gap-2 text-base sm:text-lg md:text-xl my-2">
          <RiFocusLine color="#0a56ab" />
          CRA audit assistance
        </li>
        <li className="flex items-center gap-2 text-base sm:text-lg md:text-xl my-2">
          <RiFocusLine color="#0a56ab" />
          WSIB & Ministry of Labour audit assistance
        </li>
      </ul>
      {/* Button hidden on small screens, visible on md and up */}
      <Link to={"/contact"} className="bg-[#0a56ab] rounded text-white px-4 py-2 my-6 hidden md:flex items-center gap-3 justify-center font-semibold hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer">
        Consultation
      </Link>
    </div>
  );
}

export default Dynamiclist;
