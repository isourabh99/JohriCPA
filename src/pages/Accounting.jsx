import React from "react";
import SEO from "../components/SEO"; // 🧠 Reusable SEO component
import Banner from "../components/Banner";
import accountingcard from "../assets/accountingcard.jpg";
import Services from "../components/Services";
import accountingServicesData from "../data/accountingServicesData";
import WhyChooseJohri from "../components/WhyChooseJohri";

function Accounting() {
  return (
    <>
      {/* Add SEO component for page-specific meta data */}
      <SEO
        title="Accounting Services - Johri CPA"
        description="Expert accounting services for businesses and individuals in Toronto and Mississauga. Learn more about how Johri CPA can help you."
        url="https://johricpa.ca/services/accounting"
        keywords="accounting services, business accounting, personal accounting, tax preparation, bookkeeping, Johri CPA, Toronto accountants"
      />

      {/* Main content section */}
      <main>
        {/* Header section with banner */}
        <header>
          <Banner
            src={accountingcard}
            heading="Services"
            subheading="Accounting"
            desc="Comprehensive accounting solutions to manage your books with clarity and precision. From day-to-day bookkeeping to payroll and financial reporting, we ensure your operations stay compliant and efficient. Our team helps you make informed decisions through accurate, real-time financial insights. Let us handle the numbers, so you can focus on growing your business."
          />
        </header>

        {/* Accounting Services Banner */}
        {/* <section
          id="accounting-services-banner"
          className="px-2 md:px-24 overflow-hidden my-10"
        >
          <img
            src={accountservicebanner}
            alt="Professional accounting services in Toronto and Mississauga - Johri CPA"
            loading="lazy"
            className="object-cover object-center h-70 w-full rounded-2xl"
          />
        </section> */}

        {/* Services Section */}
        <section id="services" >
          <Services
            title={accountingServicesData.title}
            welcomeMessage={accountingServicesData.welcomeMessage}
            introduction={accountingServicesData.introduction}
            services={accountingServicesData.services}
          />
        </section>

        {/* Why Choose Johri Section */}
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

export default Accounting;
