import React from "react";
import SEO from "../components/SEO";
import OurPartners from "../components/OurPartners";
import WhoWeServe from "../components/WhoWeServe";
import AboutCompany from "../components/AboutCompany";
import Banner from "../components/Banner";
import aboutbanner from "../assets/aboutbanner.png";
import OurDifference from "../components/OurDifference";

function About() {


  return (
    <>
      {/* Add SEO component for page-specific meta data */}
      <SEO
        title="About Us - Johri CPA"
        description="Learn more about Johri CPA and our team of professionals."
        url="https://johricpa.ca/about"
        keywords="about Johri CPA, accounting services, consulting team, tax experts, professional accountants, business advisory"
      />

      {/* Main content section */}
      <main>
        {/* Header section with banner */}
        <header>
          <Banner
            src={aboutbanner}
            heading={"About Us"}
            button={"Contact Us"}
          />
        </header>

        {/* About Company Section */}
        <section id="about-company">
          <AboutCompany />
        </section>

        {/* Our Difference Section */}
        <section id="our-difference">
          <OurDifference />
        </section>

        {/* Who We Serve Section */}
        <section id="who-we-serve">
          <WhoWeServe />
        </section>

        {/* Our Partners Section */}
        <section id="our-partners">
          <OurPartners />
        </section>
      </main>
    </>
  );
}

export default About;
