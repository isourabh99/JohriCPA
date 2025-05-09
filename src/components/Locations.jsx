import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";

function Locations() {
  return (
    <div className="w-full py-10 px-6 md:px-20 bg-zinc-50 ">
      <a
        href="#map"
        className="flex items-center justify-center text-2xl bg-[#0a56ab] w-fit mx-auto rounded-full text-blue-100 p-2 mb-4 animate-bounce"
      >
        <FaAnglesDown />
      </a>

      <h2
        className="text-3xl md:text-4xl font-semibold text-center text-[#0a56ab] mb-12"
        id="map"
      >
        We Are Serving from 3 Locations
      </h2>

      {/* Maps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <iframe
          className="w-full h-96 rounded-lg border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.4424793164233!2d-79.56738118450035!3d43.786545051218206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3e1c3a55779d%3A0x1cb96bfb4b188db3!2s4000%20Steeles%20Ave%20W%20Suite%20200%2C%20Woodbridge%2C%20ON%20L4L%204V9%2C%20Canada!5e0!3m2!1sen!2sca!4v1682448917517!5m2!1sen!2sca"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.4964479158652!2d-80.49471671547141!3d43.387551995110634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c0bdc08f39c9d%3A0x66762a90ba97c498!2s124%20Seabrook%20Dr%2C%20Kitchener%2C%20ON%20N2R%200K1%2C%20Canada!5e0!3m2!1sen!2sin!4v1746685542058!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          className="w-full h-96 rounded-lg border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.4964479158652!2d-80.49471671547141!3d43.387551995110634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c0bdc08f39c9d%3A0x66762a90ba97c498!2s124%20Seabrook%20Dr%2C%20Kitchener%2C%20ON%20N2R%200K1%2C%20Canada!5e0!3m2!1sen!2sin!4v1746685542058!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info Section */}
      <div className=" mx-auto  text-gray-800">
        <p className="font-semibold text-gray-600 mb-2">
          Head Office - Woodbridge
        </p>
        <p>4000 Steeles Ave W Suite 200, Woodbridge, ON L4L 4V9, Canada</p>
        <p className="font-semibold text-gray-600 my-2">Kitchener Office</p>
        <p>109-124 Seabrook Drive Kitchener ON N2R 0R7, Canada</p>
        <p className="font-semibold text-gray-600 my-2">Brampton</p>
        <p>Available by appointment only</p>
        <a
          href="#"
          className="flex items-center gap-2 text-[#0a56ab] font-medium mt-2"
        >
          View on Map <FaArrowRight />
        </a>

        <p className="font-semibold mt-6 text-gray-600">Email</p>
        <Link
          to="#"
          className="flex gap-2 items-center text-gray-700 hover:text-[#0a56ab] transition"
        >
          <SiGmail />
          info@johricpa.ca
        </Link>

        <p className="font-semibold mt-6 text-gray-600">Phone Number</p>
        <p className="flex items-center gap-2 text-gray-700">
          <FaPhoneAlt />
          905-605-5272 Woodbridge
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <FaPhoneAlt />
          905-230-0115 Brampton
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <FaPhoneAlt />
          519-513-2423 Kitchener
        </p>
      </div>
    </div>
  );
}

export default Locations;
