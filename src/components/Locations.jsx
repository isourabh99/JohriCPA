import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";

function Locations() {
  return (
    <section className="w-full py-10 px-6 lg:px-24 bg-zinc-50">
      {/* Scroll Indicator */}
      <a
        href="#map"
        className="flex items-center justify-center text-2xl bg-[#0a56ab] w-fit mx-auto rounded-full text-blue-100 p-2 animate-bounce"
      >
        <FaAnglesDown />
      </a>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a56ab] mb-12">
        Our Office Locations
      </h2>

      {/* Maps Section */}
      <div id="map" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Woodbridge Office
          </h3>
          <iframe
            className="w-full h-96 rounded-lg border-none shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.4424793164233!2d-79.56738118450035!3d43.786545051218206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3e1c3a55779d%3A0x1cb96bfb4b188db3!2s4000%20Steeles%20Ave%20W%20Suite%20200%2C%20Woodbridge%2C%20ON%20L4L%204V9%2C%20Canada!5e0!3m2!1sen!2sca!4v1682448917517!5m2!1sen!2sca"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Kitchener Office
          </h3>
          <iframe
            className="w-full h-96 rounded-lg border-none shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.4964479158652!2d-80.49471671547141!3d43.387551995110634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c0bdc08f39c9d%3A0x66762a90ba97c498!2s124%20Seabrook%20Dr%2C%20Kitchener%2C%20ON%20N2R%200K1%2C%20Canada!5e0!3m2!1sen!2sin!4v1746685542058!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mx-auto ">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Contact Information
        </h3>

        {/* Email Section */}
        <div className="text-left mb-8">
          <h4 className="font-semibold  mb-4 text-[#0a56ab]">
            Email Us
          </h4>
          <Link
            to="#"
            className="flex gap-2 items-center text-gray-700 hover:text-[#0a56ab] transition-colors"
          >
            <SiGmail className="text-xl" />
            info@johricpa.ca
          </Link>
        </div>

        {/* Office Addresses with Contact Numbers */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="font-semibold text-[#0a56ab]">
              Head Office - Woodbridge
            </h4>
            <p className="text-gray-600">
              4000 Steeles Ave W Suite 200, Woodbridge, ON L4L 4V9, Canada
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-[#0a56ab]" />
              <span>905-605-5272</span>
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-[#0a56ab]">Kitchener Office</h4>
            <p className="text-gray-600">
              109-124 Seabrook Drive Kitchener ON N2R 0R7, Canada
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-[#0a56ab]" />
              <span>519-513-2423</span>
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-[#0a56ab]">Brampton Office</h4>
            <p className="text-gray-600">Available by appointment only</p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-[#0a56ab]" />
              <span>905-230-0115</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
