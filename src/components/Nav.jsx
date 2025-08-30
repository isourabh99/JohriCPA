import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const location = useLocation();
  const service = {
    title: "Services",
    list: [
      { name: "Accounting", path: "/services/accounting" },
      {
        name: "Business Incorporation",
        path: "/services/business-incorporation",
      },
      { name: "Taxation", path: "/services/taxation" },
      {
        name: "Management Consulting",
        path: "/services/management-consulting",
      },
      {
        name: "US Tax Filling",
        path: "/services/us-tax-filling",
      },
    ],
  };

  const navitems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    service,
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`py-1 px-6 top-10 lg:px-24 flex items-center justify-between text-white fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 shadow-md backdrop-blur opacity-80"
          : "bg-white"
      }`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="w-30" />
      </Link>

      <div className="text-lg items-center gap-6 md:gap-10 hidden md:flex text-black">
        {navitems.map((item, idx) =>
          item.list ? (
            <div className="relative group" key={idx}>
              <span
                className="cursor-pointer flex items-center gap-2"
                onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
              >
                {item.title}
                <IoMdArrowDropdown />
              </span>
              <ul
                className={`absolute z-50 left-0 bg-gray-100 w-60 ${
                  isDesktopServicesOpen ? "block" : "hidden"
                } group-hover:block`}
              >
                {item.list.map((subitem, subidx) => (
                  <Link
                    to={subitem.path}
                    key={subidx}
                    onClick={() => {
                      setIsDesktopServicesOpen(false);
                    }}
                  >
                    <li className="hover:bg-[#0a56ab] cursor-pointer hover:text-white p-2">
                      {subitem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ) : (
            <Link to={item.path} key={idx}>
              <span
                className={`relative cursor-pointer transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#0a56ab] before:transition-all before:duration-300 hover:before:w-full ${
                  location.pathname === item.path
                    ? "before:w-full text-[#0a56ab]"
                    : ""
                }`}
              >
                {item.title}
              </span>
            </Link>
          )
        )}
      </div>

      {/* Consultation Button (Desktop) */}
      {/* <Link
        to={"/contact"}
        className="bg-[#0a56ab] rounded text-white px-4 py-2 hidden  md:flex items-center gap-3 justify-center font-semibold hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer"
      >
        <RiCustomerService2Fill />
        Consultation
      </Link> */}

      {/* Mobile Menu Icon */}
      <RiMenu3Fill
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        color="black"
        size={25}
        className="md:hidden"
      />

      {/* Mobile Navbar Links */}
      {isMenuOpen && (
        <div className="md:hidden absolute  z-50 top-0 left-0 right-0 bg-gray-800 text-black px-2 flex flex-col gap-4 h-screen ">
          <div className="flex justify-between items-center ">
            <img src={logo} alt="Logo" className="w-30" />
            <IoCloseSharp
              onClick={() => {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
              color="white"
              size={30}
            />
          </div>
          {navitems.map((item, idx) =>
            item.list ? (
              <div key={idx} className="w-full">
                {/* Toggle dropdown on click */}
                <div
                  className="cursor-pointer flex items-center gap-2 text-3xl justify-center text-white"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {item.title}
                  <IoMdArrowDropdown />
                </div>
                {isDropdownOpen && (
                  <ul className="bg-gray-100 w-full mx-auto text-black">
                    {item.list.map((subitem, subidx) => (
                      <Link
                        to={subitem.path}
                        key={subidx}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <li className="hover:bg-[#0a56ab] cursor-pointer hover:text-white p-2 text-center my-4 text-xl ">
                          {subitem.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                key={idx}
                className="text-3xl my-4 text-center text-white"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <span className="cursor-pointer">{item.title}</span>
              </Link>
            )
          )}
          {/* <button className=" my-4 text-3xl bg-[#0a56ab] rounded text-white px-4 py-2 flex items-center gap-3 justify-center">
            <RiCustomerService2Fill />
            Consultation
          </button> */}
        </div>
      )}
    </nav>
  );
}

export default Nav;
