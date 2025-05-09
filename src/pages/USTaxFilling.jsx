import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import Banner from "../components/Banner";
import taxfilingbanner from "../assets/taxfilingbanner.jpg";
// import taxationbanner from "../assets/taxationbanner.png";
import Services from "../components/Services";
import usTaxFilingServiceData from "../data/usTaxFilingServiceData";
import WhyChooseJohri from "../components/WhyChooseJohri";

function USTaxFilling() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="U.S. Tax Filing Services | Johri CPA"
        description="Expert U.S. tax filing services for individuals and businesses. Johri CPA offers reliable cross-border tax planning, IRS compliance, and expat tax support."
        url="https://johricpa.ca/services/us-tax-filing"
        keywords="U.S. tax filing, cross-border tax, IRS compliance, expat taxes, U.S. tax services, Johri CPA, U.S. tax advisor, U.S. individual tax, U.S. corporate tax"
      />

      <main>
        <Banner
          src={taxfilingbanner}
          heading={"Services"}
          subheading={"U.S. Tax Filing"}
          desc="Efficient and compliant US tax filing services for individuals and businesses. We navigate complex federal and state regulations, ensuring every deduction and credit is optimized. Avoid penalties, reduce liabilities, and file stress-free with our proactive tax support. Our experts make tax season seamless and secure."
        />

        {/* <section className="px-2 md:px-24 overflow-hidden my-10">
          <img
            src={`https://i.pinimg.com/736x/39/12/c4/3912c400c3e07450689a5f6508c001ea.jpg`}
            alt="Taxation Services Banner"
            loading="lazy"
            className="object-cover object-center h-70 w-full rounded-2xl"
          />
        </section> */}

        <section id="services" >
          <Services
            title={usTaxFilingServiceData.title}
            welcomeMessage={usTaxFilingServiceData.welcomeMessage}
            introduction={usTaxFilingServiceData.introduction}
            services={usTaxFilingServiceData.services}
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

export default USTaxFilling;
