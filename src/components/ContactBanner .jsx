import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactBanner({ background }) {
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
      const { name, email, phone, subject, message } = formData;

      if (!name || !email || !phone || !subject || !message) {
        toast.error("Please fill in all the fields.");
        return;
      }
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
    } catch (error) {
      toast.error("Error submitting form.");
    }
  };

  return (
    <div
      className="relative w-full h-auto mt-34 py-14 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/80 z-0" />
      <div className="relative z-10 w-full px-6 lg:px-24">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <h2 className="col-span-2 text-4xl md:text-5xl font-bold text-white text-center mb-4 uppercase">
            Contact Us
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-transparent text-white placeholder-gray-300 border-b border-gray-500 py-3 px-1 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent text-white placeholder-gray-300 border-b border-gray-500 py-3 px-1 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-transparent text-white placeholder-gray-300 border-b border-gray-500 py-3 px-1 focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-transparent text-white placeholder-gray-300 border-b border-gray-500 py-3 px-1 focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 bg-transparent text-white placeholder-gray-300 border-b border-gray-500 py-3 px-1 focus:outline-none"
          />
          <button
            type="submit"
            className="col-span-2 bg-white text-[#0a56ab] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        stacked
        enableMultiContainer
        theme="dark"
      />
    </div>
  );
}

export default ContactBanner;
