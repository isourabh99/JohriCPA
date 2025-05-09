import React from "react";
import SEO from "../components/SEO"; // Import your SEO component
import Banner from "../components/Banner";
import homebannerbg from "../assets/homebannerbg.png";
import AboutCompany from "../components/AboutCompany";
import WhoWeServe from "../components/WhoWeServe";
import WorkProcess from "../components/WorkProcess";
import WhatOurClientSay from "../components/WhatOurClientSay";
import RecentBlogs from "../components/RecentBlogs";
import OurPartners from "../components/OurPartners";

const Home = () => {
  const homeBannerData = {
    src: homebannerbg,
    title: `Personalized Tax & Accounting Solutions for Individuals, Small Businesses, and Professionals`,
    desc: `We specialize in helping professionals and business owners navigate the complexities of tax and accounting with confidence. Backed by years of experience serving clients across the Greater Toronto Area and Kitchener-Waterloo, our team delivers reliable, tailored financial solutions that keep you compliant—and in control of your finances.`,
    button: `Get In Touch`,
  };

  return (
    <>
      <SEO
        title="Johri CPA - Home"
        description="Welcome to Johri CPA, your trusted partner for accounting and consulting services."
        url="https://johricpa.ca/"
        keywords="accounting, consulting, financial services, tax advice, business incorporation, Johri CPA, Toronto CPA, Mississauga CPA"
      />

      {/* Header Section */}
      <header>
        <Banner
          src={homeBannerData.src}
          desc={homeBannerData.desc}
          title={homeBannerData.title}
        />
      </header>

      {/* Main Content */}
      <main>
        {/* About Company Section */}
        <section id="about-company">
          <AboutCompany />
        </section>

        {/* Who We Serve Section */}
        <section id="who-we-serve">
          <WhoWeServe />
        </section>

        {/* Work Process Section */}
        <section id="work-process">
          <WorkProcess />
        </section>

        {/* What Our Clients Say Section */}
        <section id="client-feedback">
          <WhatOurClientSay />
        </section>

        {/* Recent Blogs Section */}
        <section id="recent-blogs">
          <RecentBlogs />
        </section>

        {/* Our Partners Section */}
        <section id="our-partners">
          {/* <OurPartners /> */}
        </section>
      </main>
    </>
  );
};

export default Home;
