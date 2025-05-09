import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import Banner from "../components/Banner";
import businessincorporationcard from "../assets/businessincorporationcard.jpg";
import Services from "../components/Services";
import businessIncorporationData from "../data/businessIncorporationData";
import WhyChooseJohri from "../components/WhyChooseJohri";

function BusinessIncorporation() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="Business Incorporation Services | Johri CPA Canada"
        description="Start your business the right way with Johri CPA's expert incorporation services in Canada. Fast, professional, and fully compliant setup for your new venture."
        url="https://johricpa.ca/services/business-incorporation"
        keywords="business incorporation, startup services, company registration, Canadian business setup, Johri CPA, professional incorporation"
      />

      <main>
        <Banner
          src={businessincorporationcard}
          heading="Services"
          subheading="Business Incorporation"
          desc="Start your business journey with confidence through our expert incorporation services. We simplify complex legal and financial setups, guiding you every step of the way. From entity selection to compliance, we make sure you’re set up for long-term success. Launch smart, scale faster, and stay protected from day one."
        />
        {/* 
        <section className="px-2 md:px-24 overflow-hidden my-10">
          <img
            src={businessincorporation}
            alt="Visual representation of business incorporation services"
            loading="lazy"
            className="object-cover object-center h-70 w-full rounded-2xl"
          />
        </section> */}

        <section id="services">
          <Services
            title={businessIncorporationData.title}
            welcomeMessage={businessIncorporationData.welcomeMessage}
            introduction={businessIncorporationData.introduction}
            services={businessIncorporationData.services}
          />
        </section>

        <section>
          <h3 className=" text-[#0a56ab] text-2xl md:text-4xl text-center font-semibold">
            Why Choose Johri CPA?
          </h3>
          <WhyChooseJohri />
        </section>
      </main>
    </>
  );
}

export default BusinessIncorporation;
