import React from "react";
import { Link } from "react-router-dom";

function Banner({
  src,
  title,
  desc,
  desc3,
  button,
  heading,
  subheading,
  title2,
  desc2,
}) {
  return (
    <div className="relative w-full h-[45vh] lg:h-[60vh] mt-34">
      <img
        src={src}
        rel="preload"
        alt="banner"
        loading="lazy"
        className="w-full h-full object-cover object-top"
      />

      <div className="absolute top-0 w-full h-full bg-[#0c3666a5] text-white px-6 lg:px-24 md:py-8">
        {/* Heading */}
        {heading && (
          <p className="text-2xl md:text-5xl font-semibold tracking-tighter mt-10  ">
            {heading}
          </p>
        )}
        {/* Subheading */}
        {subheading && <p className="md:text-3xl mt-4">{subheading}</p>}
        {/* Title */}
        {title && <p className="text-2xl md:text-5xl mt-6 lg:w-3/4">{title}</p>}
        {/* Description */}
        {desc && (
          <p className="text-xs  md:text-xl text-gray-300 my-4 lg:w-3/4">
            {desc}
          </p>
        )}
        {desc3 && (
          <p className="text-xs  md:text-xl text-gray-300 my-4 lg:w-3/4">
            {desc3}
          </p>
        )}
        {/* Centered Title2 and Desc2 */}
        {(title2 || desc2) && (
          <div className="md:w-1/2 mx-auto text-center ">
            {title2 && (
              <p className="md:text-5xl font-semibold mt-40 md:mt-20">
                {title2}
              </p>
            )}
            {desc2 && <p className="md:text-3xl text-gray-200 my-2">{desc2}</p>}
          </div>
        )}
        {/* CTA Button */}
        {button && (
          <Link
            to="/contact"
            className="bg-white text-[#0a56ab] font-semibold rounded text-xs md:text-base px-4 py-2 mt-4 md:mt-10 w-fit block hover:opacity-80 transition-all duration-500 ease-in-out"
          >
            {button}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Banner;
