import React from "react";
import SEO from "../components/SEO";
import OurPartners from "../components/OurPartners";
import WhoWeServe from "../components/WhoWeServe";
import AboutCompany from "../components/AboutCompany";
import Banner from "../components/Banner";
import aboutbanner from "../assets/aboutbanner.png";
import OurDifference from "../components/OurDifference";
import MissionVisionTeam from "../components/MissionVisionTeam";

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
            button={"Contact Us"}
            title={"About Us"}
            desc={
              "For over 12 years, Johri CPA has been a pillar of trust and excellence in accounting and tax consultancy. Our experienced professionals are dedicated to guiding businesses and individuals toward financial growth, compliance, and peace of mind. Discover a team where integrity, precision, and personalized service define every client relationship."
            }
            desc3={`At Johri CPA, integrity, precision, and service excellence form the foundation of every client relationship. Whether you're navigating complex tax regulations or seeking strategic financial advice, we are here to guide you with expertise and care. `}
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
        <MissionVisionTeam />
        {/* Who We Serve Section */}
        <section id="who-we-serve">
          <WhoWeServe />
        </section>

        {/* Our Partners Section */}
        <section id="our-partners">{/* <OurPartners /> */}</section>
      </main>
    </>
  );
}

export default About;
