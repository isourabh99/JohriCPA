import React from "react";
import { Link } from "react-router-dom";

function Card({ src, title, desc,to }) {
  return (
    <div className="relative w-full lg:w-[20vw] bg-white rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
      <Link
        to={to}
        className="bg-white px-4 py-1 rounded-full absolute right-0 m-2 hover:opacity-80 transition-all duration-500 ease-in-out"
      >
        View
      </Link>
      <img
        rel="preload"
        src={src}
        alt=""
        className="w-full h-48 object-cover mb-2 rounded-lg"
      />
      <div className="p-2 text-black">
        <p className=" text-xl  mb-4 font-semibold">{title}</p>
        <p className="text-gray-500  text-sm mb-4">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
