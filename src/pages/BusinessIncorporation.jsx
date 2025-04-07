import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import Banner from "../components/Banner";
import servicesbanner from "../assets/servicesbanner.png";
import businessincorporation from "../assets/businessincorporation.png";
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
          src={servicesbanner}
          heading="Services"
          subheading="Business Incorporation"
        />

        <section className="px-2 md:px-24 overflow-hidden my-10">
          <img
            src={businessincorporation}
            alt="Visual representation of business incorporation services"
            loading="lazy"
            className="object-cover object-center h-70 w-full rounded-2xl"
          />
        </section>

        <section>
          <Services
            title={businessIncorporationData.title}
            welcomeMessage={businessIncorporationData.welcomeMessage}
            introduction={businessIncorporationData.introduction}
            services={businessIncorporationData.services}
          />
        </section>

        <section className="px-2 md:px-24">
          <h3 className="text-[#0a56ab] text-2xl md:text-5xl font-semibold">
            Why Choose Johri CPA?
          </h3>
          <WhyChooseJohri />
        </section>
      </main>
    </>
  );
}

export default BusinessIncorporation;
