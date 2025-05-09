import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import wave from "../assets/wave.png";
import { FaStar } from "react-icons/fa";

function ClientsCard({ src, desc, rating = 0, client, time }) {
  return (
    <div className="relative w-full md:w-[20vw] bg-white rounded overflow-hidden hover:shadow-lg transition duration-300 ease-in-out cursor-pointer shadow p-2 py-4 h-[50vh]">
      <div className="flex items-center justify-between">
        <ImQuotesLeft color="#0a56ab" />
        <span className="text-gray-400">{time}</span>
      </div>
      <p className="text-gray-600 my-4">{desc}</p>

      {/* Wave Effect Using Background Image */}
      <img
        rel="preload"
        src={wave}
        alt=""
        className="absolute w-full left-0 bottom-0"
      />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <img
          rel="preload"
          src={src}
          alt="Client"
          className="w-20  h-20 rounded-full border-4 border-white mx-auto object-center object-cover"
        />
        <p className="text-white font-semibold mt-2">{client}</p>

        {/* Star Rating */}
        <div className="flex justify-center mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`mx-1 text-xl ${
                index < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientsCard;
