import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import Banner from "../components/Banner";
import contactus from "../assets/contactus.png";
import contactusgrowing from "../assets/contactusgrowing.png";
import WeAreHere from "../components/WeAreHere";
import ContactUsForm from "../components/ContactUsForm";

function Contact() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="Contact Us | Johri CPA"
        description="Get in touch with Johri CPA for professional accounting and consulting services. We're here to help your business grow and succeed."
        url="https://johricpa.ca/contact"
        keywords="contact Johri CPA, accounting consultation, business consulting, financial services, contact tax advisors, Toronto CPA"
      />

      <main>
        <Banner src={contactus} heading={"Contact Us"} />

        <section className="px-2 md:px-24 text-center my-10">
          <h1 className="font-bold text-4xl my-4">
            Doorway to streamlined solutions
          </h1>
          <p className="text-gray-500 my-4">
            Our team can assist you at any stage, whether you have a question,
            an opportunity, or you just want to consider your alternatives. To
            get started and clear the way to success, contact us now.
          </p>
        </section>

        <section>
          <WeAreHere />
        </section>

        <section>
          <Banner
            src={contactusgrowing}
            title2={`7 Steps To Growing Your Business`}
            desc2={`Enter your details below and sign up for our seven-day course full of useful tips on growing your business.`}
          />
        </section>

        <section>
          <ContactUsForm />
        </section>
      </main>
    </>
  );
}

export default Contact;
