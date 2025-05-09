import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import Banner from "../components/Banner";
import managementcard from "../assets/managementcard.jpg";
import Services from "../components/Services";
import managementConsultingData from "../data/managementConsultingData";
import WhyChooseJohri from "../components/WhyChooseJohri";

function ManagementConsulting() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="Management Consulting Services | Johri CPA"
        description="Enhance your business operations with Johri CPA's professional management consulting services, providing strategies to improve your growth and efficiency."
        url="https://johricpa.ca/services/management-consulting"
        keywords="management consulting, business strategy, growth consulting, leadership advice, Johri CPA, professional consulting services"
      />

      <main>
        <Banner
          src={managementcard}
          heading={"Services"}
          subheading={"Management Consulting"}
          desc="Strategic management consulting designed to elevate your business performance. We dive deep into your operations, identify growth barriers, and implement effective solutions. Whether it's restructuring, performance optimization, or market entry strategy—we drive measurable results. Partner with us for expert guidance and sustainable success."
        />

        <section id="services">
          <Services
            title={managementConsultingData.title}
            welcomeMessage={managementConsultingData.welcomeMessage}
            introduction={managementConsultingData.introduction}
            services={managementConsultingData.services}
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

export default ManagementConsulting;
