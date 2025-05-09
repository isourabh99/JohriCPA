import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import Banner from "../components/Banner";
import taxationcard from "../assets/taxationcard.jpg";
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
          src={taxationcard}
          heading={"Services"}
          subheading={"Taxation"}
          desc="Expert taxation services tailored for both individuals and businesses. We ensure full compliance with local and international tax laws while identifying opportunities for savings and efficiency. With strategic planning and reliable support, we help you stay ahead of deadlines and audits."
        />

        <section id="services" >
          <Services
            title={taxationServiceData.title}
            welcomeMessage={taxationServiceData.welcomeMessage}
            introduction={taxationServiceData.introduction}
            services={taxationServiceData.services}
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

export default Taxation;
