import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import Banner from "../components/Banner";
import servicesbanner from "../assets/servicesbanner.png";
import managementconsulting from "../assets/managementconsulting.png";
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
          src={servicesbanner}
          heading={"Services"}
          subheading={"Management Consulting"}
        />

        <section className="px-2 md:px-24 overflow-hidden my-10">
          <img
            src={managementconsulting}
            alt="Management Consulting Services Banner"
            loading="lazy"
            className="object-cover object-center h-70 w-full rounded-2xl"
          />
        </section>

        <section>
          <Services
            title={managementConsultingData.title}
            welcomeMessage={managementConsultingData.welcomeMessage}
            introduction={managementConsultingData.introduction}
            services={managementConsultingData.services}
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

export default ManagementConsulting;
