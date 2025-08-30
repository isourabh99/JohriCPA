import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png"; // Assuming logo is in this path
import { IoMdArrowDropdown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri"; // Changed from FaBars
import { IoCloseSharp } from "react-icons/io5"; // Changed from FaTimes

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Renamed from isOpen for consistency
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

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
      { name: "US Tax Filling", path: "/services/us-tax-filling" },
    ],
  };

  const navitems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    service,
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: "/contact" },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false); // Also close dropdown if open
  };

  return (
    <nav
      className={`py-1 px-6 top-0 lg:px-24 flex items-center justify-between text-white fixed z-50 w-full transition-all duration-300 ${
        // Adjusted top-10 to top-0, added top-0 to match Nav.jsx
        isScrolled
          ? "bg-white/80 shadow-md backdrop-blur" // Removed opacity-80 to match Nav.jsx more closely, but Nav.jsx doesn't have backdrop-blur directly on nav
          : "bg-white" // Nav.jsx starts with bg-white
      }`}
    >
      <Link to="/" onClick={() => isMenuOpen && closeMobileMenu()}>
        <img src={logo} alt="Logo" className="w-30 h-16 object-contain" />{" "}
        {/* Adjusted logo size & added object-contain */}
      </Link>

      {/* Desktop & Tablet Menu */}
      <div className="text-lg items-center gap-6 md:gap-10 hidden md:flex text-black">
        {navitems.map((item, idx) =>
          item.list ? (
            <div
              className="relative"
              key={idx}
              ref={item.title === "Services" ? dropdownRef : null}
            >
              {" "}
              {/* Assign ref only to services dropdown */}
              <button
                type="button"
                className="cursor-pointer flex items-center gap-2 focus:outline-none"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                {item.title}
                <IoMdArrowDropdown
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen &&
                item.title === "Services" && ( // Ensure this dropdown is only for "Services"
                  <ul className="absolute z-50 left-0 mt-2 bg-gray-100 w-60 shadow-lg rounded-md">
                    {item.list.map((subitem, subidx) => (
                      <li key={subidx}>
                        <Link
                          to={subitem.path}
                          className="block hover:bg-[#0a56ab] hover:text-white p-2 rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            // closeMobileMenu(); // Not needed for desktop
                          }}
                        >
                          {subitem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ) : (
            <Link
              to={item.path}
              key={idx}
              onClick={() => isMenuOpen && closeMobileMenu()}
            >
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

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-black focus:outline-none" // Matched text-black from Nav.jsx
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <IoCloseSharp size={30} /> : <RiMenu3Fill size={25} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gray-800 text-white px-4 py-6 flex flex-col gap-4 h-screen overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="Logo" className="w-30 h-16 object-contain" />{" "}
              {/* Adjusted logo size */}
            </Link>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <IoCloseSharp size={30} />
            </button>
          </div>

          {navitems.map((item, idx) =>
            item.list ? (
              <div key={idx} className="text-center">
                <button
                  type="button"
                  className="cursor-pointer flex items-center gap-2 text-2xl justify-center text-white w-full py-2 focus:outline-none"
                  onClick={() => setIsDropdownOpen((prev) => !prev)} // This controls the mobile dropdown
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  {item.title}
                  <IoMdArrowDropdown
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && ( // This state needs to be managed correctly for mobile dropdown
                  <ul className="bg-gray-700 w-full mx-auto mt-1 rounded-md">
                    {item.list.map((subitem, subidx) => (
                      <li
                        key={subidx}
                        className="hover:bg-[#0a56ab] cursor-pointer hover:text-white p-2 text-center my-1 text-lg rounded-md"
                        onClick={() => {
                          navigate(subitem.path);
                          closeMobileMenu();
                        }}
                        role="link"
                        tabIndex={0}
                        onKeyPress={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            navigate(subitem.path);
                            closeMobileMenu();
                          }
                        }}
                      >
                        {subitem.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div // Changed from Link to div with onClick for consistent mobile nav behavior
                key={idx}
                className="text-2xl my-2 text-center text-white cursor-pointer hover:bg-[#0a56ab] py-2 rounded-md"
                onClick={() => {
                  navigate(item.path);
                  closeMobileMenu();
                }}
                role="link"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(item.path);
                    closeMobileMenu();
                  }
                }}
              >
                {item.title}
              </div>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav2;
