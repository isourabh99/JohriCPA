import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUsForm from "./ContactUsForm";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xvgarvzy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Error submitting form.");
    }
  };

  return (
    <footer className="bg-[#0a56ab] text-white py-10 px-6 lg:px-24">
      <ToastContainer
        position="top-right"
        stacked
        enableMultiContainer
        theme="dark"
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-10">
        {/* 1. Logo and About */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-32 mb-6 invert brightness-0"
          />
          <p className="text-sm text-zinc-300">
            Helping global businesses manage their accounting & tax with
            tech-driven solutions and expert insights — tailored for growth.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>
              <Link to="/services/accounting" className="hover:text-white">
                Accounting
              </Link>
            </li>
            <li>
              <Link to="/services/taxation" className="hover:text-white">
                Taxation
              </Link>
            </li>
            <li>
              <Link
                to="/services/business-incorporation"
                className="hover:text-white"
              >
                Business Incorporation
              </Link>
            </li>
            <li>
              <Link
                to="/services/management-consulting"
                className="hover:text-white"
              >
                Management Consulting
              </Link>
            </li>
            <li>
              <Link to="/services/us-tax-filling" className="hover:text-white">
                US Tax Filing
              </Link>
            </li>
          </ul>
        </div>

        {/* 4. Contact + Socials */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect with us</h4>
          <div className="text-sm text-zinc-300 mb-4">
            <p className="font-medium text-white">Head Office – Woodbridge</p>
            <p>4000 Steeles Ave W Suite 200, Woodbridge, ON L4L 4V9, Canada</p>
            <br />
            <p className="font-medium text-white">Kitchener Office</p>
            <p>109-124 Seabrook Drive Kitchener ON N2R 0R7, Canada</p>
            <br />
          </div>
          <div className="flex space-x-4 text-xl text-zinc-300">
            <a
              href="mailto:info@johricpa.ca"
              className="hover:text-white text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail />
            </a>
            <a
              href="https://www.linkedin.com/in/rajiv-johri-cpa-7b1b841b7/"
              className="hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/cpajohri/"
              className="hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between flex-col md:flex-row w-full md:gap-50">
        {/* Contact Form - Left */}
        {/* <div className="md:w-1/2 w-full rounded-xl">
          <h4 className="text-xl font-semibold mb-4 text-white">Contact us</h4>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2 h-32 resize-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div> */}
        <ContactUsForm />

        {/* Map - Right */}
        <div className="md:w-1/2 w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.4424793164233!2d-79.56738118450035!3d43.786545051218206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3e1c3a55779d%3A0x1cb96bfb4b188db3!2s4000%20Steeles%20Ave%20W%20Suite%20200%2C%20Woodbridge%2C%20ON%20L4L%204V9%2C%20Canada!5e0!3m2!1sen!2sca!4v1682448917517!5m2!1sen!2sca"
            className="w-full h-full border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 pt-10 text-center text-sm text-zinc-400">
        © 2025 Johri CPA Professional Corporation. All Rights Reserved. 
        <div>
          Catered by{" "}
          <a
            href="https://www.navtekdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-100 hover:underline"
          >
            Navtek Digital
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
