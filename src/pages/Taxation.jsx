import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import Banner from "../components/Banner";
import servicesbanner from "../assets/servicesbanner.png";
import taxationbanner from "../assets/taxationbanner.png";
import Services from "../components/Services";
import taxationServiceData from "../data/taxationServiceData";
import WhyChooseJohri from "../components/WhyChooseJohri";

function Taxation() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="Taxation Services | Johri CPA"
        description="Get professional taxation services for individuals and businesses from Johri CPA. We provide expert tax planning, filing, and advisory services."
        url="https://johricpa.ca/services/taxation"
        keywords="tax services, tax planning, corporate tax, individual tax, tax filing, tax advice, Johri CPA, Toronto tax services"
      />

      <main>
        <Banner
          src={servicesbanner}
          heading={"Services"}
          subheading={"Taxation"}
        />

        <section className="px-2 md:px-24 overflow-hidden my-10">
          <img
            src={taxationbanner}
            alt="Taxation Services Banner"
            loading="lazy"
            className="object-cover object-center h-70 w-full rounded-2xl"
          />
        </section>

        <section>
          <Services
            title={taxationServiceData.title}
            welcomeMessage={taxationServiceData.welcomeMessage}
            introduction={taxationServiceData.introduction}
            services={taxationServiceData.services}
          />
        </section>

        <section>
          <h3 className="px-2 md:px-24 text-[#0a56ab] text-2xl md:text-5xl font-semibold">
            Why Choose Johri CPA?
          </h3>
          <WhyChooseJohri />
        </section>
      </main>
    </>
  );
}

export default Taxation;
