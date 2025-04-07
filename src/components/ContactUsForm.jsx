import React from "react";

function ContactUsForm() {
  return (
    <div className="px-2 md:px-24 my-10 py-10">
      <div className="border-2 rounded-xl border-gray-300 flex justify-between items-start flex-col md:flex-row">
        <form action="" className="p-4 md:w-1/2">
          <p className="font-semibold md:text-3xl mb-10">Contact us</p>
          <div className="gap-2 flex my-4">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-1/2 border-2 border-gray-300 outline-none focus:ring-2 focus:ring-[#0a56ab] focus:border-none rounded px-2 py-1"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-1/2 border-2 border-gray-300 outline-none focus:ring-2 focus:ring-[#0a56ab] focus:border-none rounded px-2 py-1"
            />
          </div>
          <div className="gap-2 flex my-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-1/2 border-2 border-gray-300 outline-none focus:ring-2 focus:ring-[#0a56ab] focus:border-none rounded px-2 py-1"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-1/2 border-2 border-gray-300 outline-none focus:ring-2 focus:ring-[#0a56ab] focus:border-none rounded px-2 py-1"
            />
          </div>
          <div className="gap-2 flex my-4">
            <textarea
              rows={4}
              placeholder="Enter Message"
              className="w-full border-2 border-gray-300 outline-none focus:ring-2 focus:ring-[#0a56ab] focus:border-none rounded px-2 py-1 resize-none"
            ></textarea>
          </div>
          <button className="w-full rounded py-2 bg-[#0a56ab] text-white hover:opacity-80 transition-all ease-in-out duration-500 active:scale-95 ">
            Send Message
          </button>
        </form>
        <div className="map md:w-1/2 w-full">
          <iframe
            title="Bellway Infotech Location"
            width="100%"
            height="400"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.989173554357!2d75.89330397519099!3d22.72864377938086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317d8dce0a973%3A0xe74ff35946a7c87d!2sBellway%20Infotech%20%7C%20Mobile%20app%20and%20Website%20development%20company!5e0!3m2!1sen!2sin!4v1743596065906!5m2!1sen!2sin"
            // referrerpolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
