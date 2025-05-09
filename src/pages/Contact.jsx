import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import Banner from "../components/Banner";
import contactusgrowing from "../assets/contactusgrowing.png";
import ContactBanner from "../components/ContactBanner ";
import Locations from "../components/Locations";

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
        <ContactBanner background="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?t=st=1745499637~exp=1745503237~hmac=366642e83a8bc9b17d8a9b9ab562954434a949789985b7ce3916bf141f260518&w=996" />
        <Locations />
        {/* <Banner
          src={contactusbanner}
          heading={"Contact Us"}
          desc="Have questions or need personalized guidance? Our team is here to help you every step of the way. Whether you're seeking expert advice, service inquiries, or partnership opportunities—we’re just a message away. Reach out today and let's build something great together."
        /> */}

        {/* <section className="px-2 md:px-24 text-center my-10">
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
        </section> */}

        {/* <section>
          <Banner
            src={contactusgrowing}
            title2={`7 Steps To Growing Your Business`}
            desc2={`Enter your details below and sign up for our seven-day course full of useful tips on growing your business.`}
          />
        </section> */}

        {/* <section>
          <ContactUsForm />
        </section> */}
      </main>
    </>
  );
}

export default Contact;
