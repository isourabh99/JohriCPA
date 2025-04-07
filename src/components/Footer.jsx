import React from 'react'
import logo from "../assets/logo2.png"
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-[#0a56ab] px-2 md:px-24 py-10 flex flex-col md:flex-row justify-between gap-20 text-white">
      <div className="md:w-1/4">
        <img
          rel="preload"
          src={logo}
          alt=""
          className="mx-auto  invert brightness-0 w-40 md:w-24"
        />
        <p className="text-center my-6 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </p>
      </div>
      <div className="md:w-1/4 text-center">
        <p className="font-bold my-4">Company</p>
        <Link
          to={"/"}
          className="block hover:opacity-80  transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="block hover:opacity-80  transition-all duration-300"
        >
          About Us
        </Link>
        <Link
          to={"/blog"}
          className="block hover:opacity-80  transition-all duration-300"
        >
          Blogs
        </Link>
        <Link
          to={"/contact"}
          className="block hover:opacity-80  transition-all duration-300"
        >
          Contact us
        </Link>
      
      </div>
      <div className="md:w-1/4 text-center">
        <p className="font-bold my-4">Services</p>
        <Link
          to={"/services/accounting"}
          className="block hover:opacity-80  transition-all duration-300"
        >
          Accounting
        </Link>
        <Link
          to={"/services/taxation"}
          className="block hover:opacity-80  transition-all duration-300"
        >
          Taxation
        </Link>
        <Link
          to={"/services/business-incorporation"}
          className="block hover:opacity-80  transition-all duration-300"
        >
          Business Incorporation
        </Link>
        <Link
          to={"/services/management-consulting"}
          className="block hover:opacity-80  transition-all duration-300"
        >
          Management Consulting
        </Link>
      </div>
      <div className="md:w-1/4  text-center">
        <p className="font-bold my-4">Contact Us</p>
        <Link
          to={"#"}
          className="flex gap-2 items-center justify-center  hover:opacity-80  transition-all duration-300"
        >
          <SiGmail /> info@gmail.com
        </Link>
        <Link
          to={"https://www.linkedin.com/in/rajiv-johri-cpa-7b1b841b7/"}
          className="flex gap-2 items-center justify-center hover:opacity-80  transition-all duration-300"
        >
          <FaLinkedinIn /> Linkedin
        </Link>
        <Link
          to={"#"}
          className="flex gap-2 items-center justify-center hover:opacity-80  transition-all duration-300"
        >
          <FaYoutube /> Youtube
        </Link>
        <Link
          to={"#"}
          className="flex gap-2 items-center justify-center hover:opacity-80  transition-all duration-300"
        >
          <BsTwitterX /> Twitter
        </Link>
        <Link
          to={"#"}
          className="flex gap-2 items-center justify-center hover:opacity-80  transition-all duration-300"
        >
          <AiFillInstagram /> Instagram
        </Link>
      </div>
    </div>
  );
}

export default Footer