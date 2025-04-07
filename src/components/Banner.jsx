import React from "react";
import { Link } from "react-router-dom";
function Banner({ src, title, desc, button, heading,subheading ,title2,desc2}) {
  return (
    <div className="relative w-full  sm:h-[50vh] md:h-[65vh] ">
      <img
        src={src}
        rel="preload"
        className="w-full h-full object-center object-cover"
        alt="banner"
        loading="lazy"
      />
      <div className="absolute top-0 px-6  md:px-16  md:py-8 text-white bg-[#0a55ab5e] h-full w-full">
        {/* Conditional Rendering for Title */}
        {title && (
          <h1 className="text-xl  md:text-5xl md:mt-10 mt-6 md:w-[60%] ">
            {title}
          </h1>
        )}

        {/* Conditional Rendering for Description */}
        {desc && (
          <p className="text-sm sm:text-base md:text-xl my-4   md:w-[60%]  text-gray-300">
            {desc}
          </p>
        )}
        {/* if only heading */}
        {heading && (
          <h1 className="text-2xl md:text-8xl font-semibold md:mt-20 mt-4 md:mb-6 tracking-tighter">
            {heading}
          </h1>
        )}
        {/* if sub heading */}
        {subheading && (
          <p className="md:text-4xl font-semibold md:my-10">{subheading}</p>
        )}
        <div className="md:w-1/2 mx-auto">
          {title2 && (
            <p className="md:text-6xl font-semibold md:mt-20 mt-6 text-center">
              {title2}
            </p>
          )}
          {/* if desc2 */}
          {desc2 && (
            <p className="md:text-3xl text-gray-200 my-2 text-center">
              {desc2}
            </p>
          )}
        </div>
        {/* if title2 */}
        {/* Conditional Rendering for Button */}
        {button && (
          <Link
            to={"/contact"}
            className="px-4 py-2 md:mt-10 block w-fit mt-4 bg-white rounded text-[#0a56ab] font-semibold hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer"
          >
            {button}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Banner;
