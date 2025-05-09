import React from "react";
import { Link } from "react-router-dom";

function Dynamiclist() {
  return (
    <div className="">
      <p className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#0a56ab]">
        Meet Your Trusted Accounting Partner
      </p>
      <p className="text-lg sm:text-xl md:text-lg my-2 text-gray-700">
        With over 12 years of experience serving clients in the Greater Toronto
        Area and Kitchener-Waterloo, we specialize in providing reliable,
        personalized tax and accounting services tailored to individuals, small
        businesses, and professionals.
      </p>
      <p className="text-lg sm:text-xl md:text-lg my-2 text-gray-700">
        From bookkeeping and tax planning to business incorporation and U.S. tax
        filing, our team is committed to simplifying your financial journey—so
        you can make confident decisions backed by accurate, timely, and
        insightful advice.
      </p>
      <p className="text-lg sm:text-xl md:text-lg my-2 text-gray-700">
        We don’t just crunch numbers. We build long-term partnerships based on
        trust, clarity, and results.
      </p>
      <Link
        to={"/contact"}
        className="bg-[#0a56ab] rounded text-white px-4 py-2 my-6 hidden md:flex items-center gap-3 justify-center font-semibold hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer"
      >
        Consultation
      </Link>
    </div>
  );
}

export default Dynamiclist;
