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
    title: `Tax and business advisory services for busy professionals`,
    desc: `We’re here to help you meet the challenges of being a working professional. Our extensive experience providing professionals in Toronto and Mississauga with accounting services combined with our knowledge of innovative technology gives you a huge financial advantage.`,
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
          <OurPartners />
        </section>
      </main>
    </>
  );
};

export default Home;
