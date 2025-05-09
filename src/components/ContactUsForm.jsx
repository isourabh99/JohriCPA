import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sample country codes (can be expanded)
const countryCodes = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+91", name: "India" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  // Add more countries as needed
];

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div className="md:w-1/2 w-full rounded-xl text-white">
      <h4 className="text-xl font-semibold mb-10">Contact us</h4>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className=" w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2"
        />
        <div className="flex gap-4">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2 pr-4 w-1/3"
          >
            {countryCodes.map((country) => (
              <option
                key={country.code}
                value={country.code}
                className="text-black"
              >
                {country.name} ({country.code})
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-2/3 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2"
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-blue-400 transition duration-300 pb-2 h-32 resize-none"
        />
        <button
          type="submit"
          className="col-span-2 bg-white text-[#0a56ab] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 mb-10"
        >
          Send Message
        </button>
      </form>
      <ToastContainer
        position="top-right"
        stacked
        enableMultiContainer
        theme="dark"
      />
    </div>
  );
};

export default ContactUsForm;
