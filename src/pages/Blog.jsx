import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import RecentBlogs from "../components/RecentBlogs";
import blogbanner from "../assets/blogbanner.png";
import Banner from "../components/Banner";

function Blog() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="Blog | Johri CPA"
        description="Read insightful articles and tips on accounting, consulting, and business services from Johri CPA. Stay informed and updated."
        url="https://johricpa.ca/blog"
        keywords="accounting, consulting, business services, tax advice, Johri CPA, financial consulting"
      />

      <main>
        <Banner src={blogbanner} heading="Blog" button="Contact Us" />

        <section>
          <RecentBlogs />
        </section>
      </main>
    </>
  );
}

export default Blog;
